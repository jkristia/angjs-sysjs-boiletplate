install node modules and typings

>>npm install
>>typings install

to run using live-server, install live server
>>npm install -g live-server

compile project
>>tsc

run live-server
>>live-server



----------------------------------------
Starting from scratch.
https://www.npmjs.com/package/typings

create empty typings file
>>typings init

install angular typings
>>typings install angular --save -V --ambient
>>typings install jquery --save --ambient

typings contains a main and browser folder is created. main is for server side, browser for client side.
Include browser.d.ts in the project

create empty tsconfig.json
>>tsc -init

exclude typings/main and main.d.ts

create default npm package.json
>>npm init

donwload angular through npm
>>npm install angular@1.5.5

debug in VS Code using Chrome extension
https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
http://stackoverflow.com/questions/31075856/visual-studio-code-debugging-with-angularjs

In a terminal, execute 
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

perforce for VS Code
https://code.visualstudio.com/docs/editor/extension-gallery?pub=slevesque&ext=perforce
https://marketplace.visualstudio.com/items?itemName=slevesque.perforce
