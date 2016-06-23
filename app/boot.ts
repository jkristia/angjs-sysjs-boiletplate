/// <reference path="../typings/browser.d.ts" />
import {MainAppCtrl} from "./main"
import {MainComponent} from "./main.component"

angular.module("app", ["module1"])
	.component("mainView", new MainComponent())
	.controller("mainCtrl", MainAppCtrl)
;

angular.element(document).ready(() => {
	angular.bootstrap(document, ['app']);
})

// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
// https://www.npmjs.com/package/jquery