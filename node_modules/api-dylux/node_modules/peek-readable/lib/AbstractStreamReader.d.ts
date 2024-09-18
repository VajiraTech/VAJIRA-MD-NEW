export interface IStreamReader {
    /**
     * Peak ahead (peek) from stream. Subsequent read or peeks will return the same data.
     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes peeked
     */
    peek(uint8Array: Uint8Array, offset: number, length: number): Promise<number>;
    /**
     * Read from stream the stream.
     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes peeked
     */
    read(uint8Array: Uint8Array, offset: number, length: number): Promise<number>;
    /**
     * Abort active asynchronous operation before it has completed.
     */
    abort(): Promise<void>;
}
export declare abstract class AbstractStreamReader implements IStreamReader {
    /**
     * Maximum request length on read-stream operation
     */
    protected maxStreamReadSize: number;
    protected endOfStream: boolean;
    /**
     * Store peeked data
     * @type {Array}
     */
    protected peekQueue: Uint8Array[];
    peek(uint8Array: Uint8Array, offset: number, length: number): Promise<number>;
    read(buffer: Uint8Array, offset: number, length: number): Promise<number>;
    /**
     * Read chunk from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes read
     */
    protected readFromPeekBuffer(buffer: Uint8Array, offset: number, length: number): number;
    readRemainderFromStream(buffer: Uint8Array, offset: number, initialRemaining: number): Promise<number>;
    protected abstract readFromStream(buffer: Uint8Array, offset: number, length: number): Promise<number>;
    abstract abort(): Promise<void>;
}
