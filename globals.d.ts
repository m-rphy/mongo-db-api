
export {}

declare global {
    namespace Express {
        export interface Response {
            locals: any;
        }
    }
}
