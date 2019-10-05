export class DbAudit {
    id: number;
    user: string;
    occurred_at: Date;
    action: string;
}

export function toDbAudit(data): DbAudit {
    return {
        id: data.id,
        user: data.user,
        occurred_at: data.occurred_at,
        action: data.action
    }
}