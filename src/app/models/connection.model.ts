export class Connection {
    id: number;
    host: string;
    database: string;
    port: number;
    username: string;
    password: string;
}

export function toConnection(data): Connection {
    return {
        id: data.id,
        host: data.host,
        database: data.database,
        port: data.port,
        username: data.username,
        password: data.password
    }
}