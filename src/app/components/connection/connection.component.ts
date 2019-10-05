import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from 'src/app/services';
import { Connection } from 'src/app/models';
import { MatDialog } from '@angular/material';
import { ConnectionTestDialogComponent } from '../connection-test-dialog/connection-test-dialog.component';
import { ConnectionStats } from 'src/app/models/connection-stats.model';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
  providers: [ ConnectionsService ]
})
export class ConnectionComponent implements OnInit {
  loading: boolean;
  connections: Connection[] = [];
  connectionStats: ConnectionStats;
  lastSelectedConnectionId: number;
  displayedColumns: string[] = ['id', 'host', 'database', 'port', 'username', 'password', 'testConnection', 'showStats'];

  constructor(
    public dialog: MatDialog,
    private connectionService: ConnectionsService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.connectionService.list().subscribe(conns => {
      this.loading = false;
      this.connections = conns;
    });
  }

  public testConnection(conn: Connection) {
    this.loading = true;
    this.connectionService.testConnection(
      conn.host, 
      conn.database, 
      conn.port, 
      conn.username, 
      conn.password
    ).subscribe(response => {
      this.loading = false;
      this.dialog.open(ConnectionTestDialogComponent, {
        width: '500px',
        data: {
          id: conn.id,
          success: response.success,
          message: response.message
        }
      });
    });
  }

  public fetchConnectionStats(conn: Connection) {
    this.lastSelectedConnectionId = conn.id;
    this.connectionService.showStats(
      conn.id, 
      conn.host, 
      conn.database, 
      conn.port, 
      conn.username, 
      conn.password
    ).subscribe(response => {
      this.connectionStats = response;
    });
  }
}
