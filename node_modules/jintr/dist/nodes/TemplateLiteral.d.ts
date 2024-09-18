import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class TemplateLiteral extends BaseJSNode<ESTree.TemplateLiteral> {
    run(): string;
}
