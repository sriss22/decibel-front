import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Connection, toConnection, Response } from '../models';
import { HttpClient } from '@angular/common/http';
import { ConnectionStats, toConnectionStats } from '../models/connection-stats.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConnectionsService {
    private LIST_URL = 'http://localhost:3000/connections/list';
    private TEST_CONNECTION_URL = 'http://localhost:3000/connections/test';
    private SHOW_STATS_URL = 'http://localhost:3000/connections/{id}/stats';

    constructor(private http: HttpClient) { }

    public list(): Observable<Connection[]> {
        if (environment.skipServer) {
            return this.devList();
        }

        return this.http.get<Response>(this.LIST_URL).pipe(
            map(response => {
                if (response.error) throw new Error(response.errorMessage);
                return response.results.map(toConnection);
            }),
            catchError(error => of(error))
        );
    }

    public testConnection(
        host: string, 
        db: string, 
        port: number,
        user: string, 
        pass: string
    ): Observable<{ success: boolean, message: string }> {
        if (environment.skipServer) {
            return this.devTestConnection();
        }

        const body = {
            host,
            db,
            port,
            user,
            pass
        };

        return this.http.post<Response>(
            this.TEST_CONNECTION_URL,
            body
        ).pipe(
            map(response => {
                return { success: true, message: response.results };
            }),
            catchError(error => {
                return of({ success: false, message: error.error.errorMessage })
            })
        );
    }

    public showStats(
        id: number,
        host: string, 
        db: string, 
        port: number, 
        user: string, 
        pass: string
    ): Observable<ConnectionStats> {
        if (environment.skipServer) {
            return this.devShowStats();
        }

        const body = {
            host,
            db,
            port,
            user,
            pass
        };

        return this.http.post<Response>(
            this.SHOW_STATS_URL.replace('{id}', id.toString()),
            body
        ).pipe(
            map(response => {
                if (response.error) throw new Error(response.errorMessage);
                return toConnectionStats({ dbStats: response.results.stat_activity, tableStats: response.results.stat_user_tables });
            }),
            catchError(error => of(error))
        );
    }

    private devList(): Observable<Connection[]> {
        return of([
            { "id":1,"host":"localhost","database":"test1","port":5432,"username":"testuser1","password":"user1pass" },
            { "id":2,"host":"localhost","database":"test2","port":5432,"username":"testuser2","password":"user2pass" },
            { "id":3,"host":"localhost","database":"test3","port":5432,"username":"testuser3","password":"user3pass" }
        ]);
    }

    private devTestConnection(): Observable<{ success: boolean, message: string }> {
        return of({ success: true, message: "Successfully logged in!"});
    }

    private devShowStats(): Observable<ConnectionStats> {
        return of({
            dbStats: [
                {
                    "database_name":"test1",
                    "username":"postgres",
                    "application_name":"pgAdmin 4 - DB:test1",
                    "client_address":null,
                    "client_hostname":null,
                    "client_port":null,
                    "process_start":null,
                    "state":null,
                    "backend_type":null
                },
                {
                    "database_name":"test1",
                    "username":"testuser1",
                    "application_name":"",
                    "client_address":"127.0.0.1",
                    "client_hostname":null,
                    "client_port":64382,
                    "process_start": new Date("2019-10-05T23:46:24.891Z"),
                    "state":"active",
                    "backend_type":"client backend"
                }
            ],
            tableStats: [
                {
                    "schema_name":"public",
                    "table_name":"ttbl1",
                    "rows_inserted":1,
                    "rows_updated":0,
                    "rows_deleted":0,
                    "live_rows":1,
                    "dead_rows":0,
                    "rows_since_analyzed":1
                }
            ]
        })
    }
}