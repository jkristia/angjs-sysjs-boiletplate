/// <reference path="../typings/browser.d.ts" />
	import {MainAppCtrl} from "./main"
	import {MainComponent} from "./main.component"

	// *** below is for importing dependencies when single file is used ***
	import * as Dummy1 from "./module1/module1"
	var dummy1 = (<any>Dummy1);
	// *** ***

	angular.module("app", ['myModule'])
		.component("mainView", new MainComponent())
		.controller("mainCtrl", MainAppCtrl)
	;

	angular.element(document).ready(() => {
		angular.bootstrap(document, ['app']);
	})

// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
// https://www.npmjs.com/package/jquery