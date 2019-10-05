import { Component, OnInit, Input } from '@angular/core';
import { DBStat } from 'src/app/models';

@Component({
  selector: 'app-db-stats',
  templateUrl: './db-stats.component.html',
  styleUrls: ['./db-stats.component.css']
})
export class DbStatsComponent implements OnInit {
  displayedColumns: string[] = ['db_name', 'username', 'app_name', 'client_addr', 'client_host', 'client_port', 'process_start', 'state', 'backend_type'];

  @Input()
  dbStats: DBStat[];

  constructor() { }

  ngOnInit() {}

}
