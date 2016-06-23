
export interface IMainCtrlBindings {
}
export class MainCtrl implements IMainCtrlBindings {
	message: string;
	constructor() {
		this.message = "hello from MainCtrl.Component - loaded through systemJS";
	}
}
export class MainComponent implements ng.IComponentOptions {
	public bindings: any = {
	};
	public controller = MainCtrl;
	public controllerAs = "vm"
	public templateUrl = "app/main.view.html";
}
