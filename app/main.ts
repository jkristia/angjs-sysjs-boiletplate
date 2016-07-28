/// <reference path="../typings/browser.d.ts" />
import {Module1ComponentB} from './module1/module1.exports'

export class MainAppCtrl {
	message: string;
	constructor() {
		this.message = "hellow from MainAppCtrl";
		let test = new Module1ComponentB();
	}
}
