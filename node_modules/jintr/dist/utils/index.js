export const namedFunction = (name, fn) => Object.defineProperty(fn, 'name', { value: name });
export class JinterError extends Error {
    constructor(message, info) {
        super(message);
        if (info) {
            this.info = info;
        }
    }
}
