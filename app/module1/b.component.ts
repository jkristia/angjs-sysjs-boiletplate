
export class Module1CtrlB {
	message: string;
	constructor() {
		this.message = "hello from Module1CtrlB";
		console.log('Module1CtrlB cstor');
	}
}
export class Module1ComponentB implements ng.IComponentOptions {
	public bindings: any = {
	};
	public controller = Module1CtrlB;
	public controllerAs = "vm"
	public template = "<div>{{vm.message}}</div>";
}
