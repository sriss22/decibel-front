import { DBStat, toDBStat } from './db-stat.model';
import { TableStat, toTableStat } from './table-stat.model';

export class ConnectionStats {
    dbStats: DBStat[];
    tableStats: TableStat[];
}

export function toConnectionStats(data: any): ConnectionStats {
    return {
        dbStats: data.dbStats.map(toDBStat),
        tableStats: data.tableStats.map(toTableStat)
    }
}