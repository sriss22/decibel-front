import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Connection, DbAudit, toConnection, toDbAudit, Response } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConnectionsService {
    private LIST_URL = 'http://localhost:3000/connections/list';
    private TEST_CONNECTION_URL = 'http://localhost:3000/connections/test';
    private SHOW_STATS_URL = 'http://localhost:3000/connections/{id}/stats';

    constructor(private http: HttpClient) { }

    public list(): Observable<Connection[]> {
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
                if (response.error) return { success: false, message: response.errorMessage};
                return { success: true, message: response.results };
            }),
            catchError(error => of(error))
        );
    }

    public showStats(
        id: number,
        host: string, 
        db: string, 
        port: number, 
        user: string, 
        pass: string
    ): Observable<DbAudit[]> {
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
                return response.results.map(toDbAudit);
            }),
            catchError(error => of(error))
        );
    }
}