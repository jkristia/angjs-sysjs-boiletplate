
export class Module1CtrlA {
	message: string;
	constructor() {
		this.message = "hello from Module1CtrlA";
	}
}
export class Module1ComponentA implements ng.IComponentOptions {
	public bindings: any = {
	};
	public controller = Module1CtrlA;
	public controllerAs = "vm"
	public template = "<div>{{vm.message}}</div>";
}
