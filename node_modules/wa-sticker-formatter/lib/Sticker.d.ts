/// <reference types="node" />
export default class Sticker {
    data: Buffer;
    config: {
        animated: Boolean;
        crop: boolean;
        pack: string;
        author: string;
    };
    path: string;
    animatedBase: {
        fps: number;
        startTime: string;
        endTime: string;
        loop: number;
    };
    final: string;
    constructor(data: Buffer, { animated, crop, author, pack }: {
        animated?: boolean | undefined;
        crop?: boolean | undefined;
        author?: string | undefined;
        pack?: string | undefined;
    });
    build(): Promise<void>;
    get(): Promise<Buffer>;
    animated(): Promise<string>;
    animatedNoCrop(): Promise<string>;
    static(): Promise<string>;
    staticNoCrop(): Promise<string>;
    addMetadata(filename: string): Promise<void>;
    createExif(packname?: string, author?: string): string;
    delete(files: string[]): Promise<void>;
    outputOptions: string[];
}
//# sourceMappingURL=Sticker.d.ts.map