export class Response {
    results: any;
    error: boolean;
    errorMessage: string;
    status: number;
}

export function toResponse(data): Response {
    return {
        results: data.results,
        error: data.error,
        errorMessage: data.errorMessage,
        status: data.status
    }
}