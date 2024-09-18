import ESTree from 'estree';
import BaseJSNode from '../nodes/BaseJSNode.js';
import Visitor from '../visitor.js';
export declare const namedFunction: (name: string, fn: Function) => Function;
export interface JSNode<T extends BaseJSNode> extends BaseJSNode {
    run(): ReturnType<T['run']>;
}
export interface JSNodeConstructor<T extends BaseJSNode> {
    new (node: ESTree.Node, visitor: Visitor): JSNode<T>;
}
export declare class JinterError extends Error {
    info?: any;
    constructor(message: string, info?: any);
}
