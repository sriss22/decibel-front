import { Component, OnInit, Input } from '@angular/core';
import { TableStat } from 'src/app/models';

@Component({
  selector: 'app-table-stats',
  templateUrl: './table-stats.component.html',
  styleUrls: ['./table-stats.component.css']
})
export class TableStatsComponent implements OnInit {
  displayedColumns: string[] = ['schema_name', 'table_name', 'rows_inserted', 'rows_updated', 'rows_deleted', 'live_rows', 'dead_rows', 'rows_since_analyzed'];

  @Input()
  tableStats: TableStat[];

  constructor() { }

  ngOnInit() {
  }

}
