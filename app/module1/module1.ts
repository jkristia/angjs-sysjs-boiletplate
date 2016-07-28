import {Module1ComponentA} from "./a.component";
import {Module1ComponentB} from "./b.component";

angular.module("myModule", [])
	.component("module1ComponentA", new Module1ComponentA())
	.component("module1ComponentB", new Module1ComponentB())
;
