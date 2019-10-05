export class DBStat {
    database_name: string;
    username: string;
    application_name: string;
    client_address: string;
    client_hostname: string;
    client_port: number;
    process_start: Date;
    state: string;
    backend_type: string;
}

export function toDBStat(data: any): DBStat {
    return {
        database_name: data.database_name,
        username: data.username,
        application_name: data.application_name,
        client_address: data.client_address,
        client_hostname: data.client_hostname,
        client_port: data.client_port,
        process_start: data.process_start,
        state: data.state,
        backend_type: data.backend_type
    }
}