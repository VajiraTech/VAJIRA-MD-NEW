import BaseJSNode from './BaseJSNode.js';
export default class NewExpression extends BaseJSNode {
    run() {
        const callee = this.visitor.visitNode(this.node.callee);
        const args = this.node.arguments.map((arg) => this.visitor.visitNode(arg));
        return args.length ? new callee(args) : new callee();
    }
}
