export class TableStat {
    schema_name: string;
    table_name: string;
    rows_inserted: number;
    rows_updated: number;
    rows_deleted: number;
    live_rows: number;
    dead_rows: number;
    rows_since_analyzed: number;
}

export function toTableStat(data: any): TableStat {
    return {
        schema_name: data.schema_name,
        table_name: data.table_name,
        rows_inserted: data.rows_inserted,
        rows_updated: data.rows_updated,
        rows_deleted: data.rows_deleted,
        live_rows: data.live_rows,
        dead_rows: data.dead_rows,
        rows_since_analyzed: data.rows_since_analyzed
    }
}