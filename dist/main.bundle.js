webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#mainLoading{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tbackground: rgb(255,255,255);\r\n\tz-index: 10;\r\n\t\r\n\t\r\n}\r\n\r\n#mainLoading .containerAnim{\r\n\tposition: relative;\r\n\t-webkit-transform: scale(0.4);\r\n\t        transform: scale(0.4);\r\n}\r\n\r\n#mainLoading span{\r\n\tfont-family: Montserrat-SemiBold, sans-serif;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    color: #000;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n   line-height: 16px;\r\n}\r\n\r\n#backdrop{\r\n\tposition: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  visibility: hidden;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tbackground: rgba(0,0,0,0.2);\r\n\tz-index: 2;\r\n\t-webkit-transition: visibility 0.25s, opacity 0.25s linear;\r\n\ttransition: visibility 0.25s, opacity 0.25s linear;\r\n\tcursor: pointer;\r\n\topacity: 0;\r\n}\r\n\r\n#backdrop.open{  \r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n/*SIDE NAV*/\r\n\r\n#sideContainer{\r\n\tposition: relative;\r\n\twidth: 0px;\r\n\tbackground: #565252;\r\n\t-webkit-transition: all 0.25s linear;\r\n\ttransition: all 0.25s linear;\r\n\tz-index: 3;\r\n}\r\n\r\n#detailContainer{\r\n\tposition: relative;\r\n\tz-index: 1;\r\n  overflow-y: auto;\r\n}\r\n\r\nimg{border:0;}\r\n\r\n/*RESPONSIVE*/\r\n\r\n@media only screen and (min-width : 320px) {\r\n\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n\r\n@media only screen and (min-width : 480px) {\r\n\r\n}\r\n\r\n/* Small Devices, Tablets */\r\n\r\n@media only screen and (min-width : 600px) {\r\n\r\n}\r\n\r\n/* Medium Devices, Desktops */\r\n\r\n@media only screen and (min-width : 960px) {\r\n\r\n}\r\n\r\n/* Large Devices, Wide Screens */\r\n\r\n@media only screen and (min-width : 1280px) {\r\n\t#sideContainer{\r\n\t\twidth: 360px;\r\n\t}\r\n\t#sideContainer .side{\r\n\t\t-webkit-transform: translate(0px, 0px);\r\n\t\t        transform: translate(0px, 0px);\r\n\t}\r\n\t#detailContainer .btnMenu{\r\n\t\tdisplay: none;\r\n\t\topacity: 0;\r\n\t\tmargin: 0px;\r\n\t}\r\n\t\r\n\r\n}\r\n\r\n/*Resource: https://codepen.io/andrewarchi/pen/OXEEgL*/\r\n\r\n#ash {\r\n  width: 104px;\r\n  height: 128px;\r\n  position: relative;\r\n}\r\n\r\n#ash::after {\r\n  content: \"\";\r\n  width: 8px;\r\n  height: 8px;\r\n  display: block;\r\n  left: -8px;\r\n  position: absolute;\r\n}\r\n\r\n#ash::after {\r\n  -webkit-animation: ash-frames 0.4s steps(1) infinite;\r\n          animation: ash-frames 0.4s steps(1) infinite;\r\n}\r\n\r\n@-webkit-keyframes ash-frames {\r\n  0% {\r\n    -webkit-box-shadow: 32px 8px #181818, 40px 8px #181818, 48px 8px #181818, 56px 8px #181818, 64px 8px #181818, 72px 8px #181818, 24px 16px #181818, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #e31613, 88px 24px #181818, 16px 32px #181818, 24px 32px #e31613, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #e31613, 80px 32px #f7f7f7, 88px 32px #181818, 96px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #e31613, 40px 40px #e31613, 48px 40px #e31613, 56px 40px #e31613, 64px 40px #e31613, 72px 40px #f7f7f7, 80px 40px #f7f7f7, 88px 40px #f7f7f7, 96px 40px #f7f7f7, 104px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #181818, 64px 48px #e31613, 72px 48px #e31613, 80px 48px #e31613, 88px 48px #181818, 96px 48px #181818, 8px 56px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #181818, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #181818, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #181818, 80px 64px #f0c3aa, 88px 64px #181818, 24px 72px #181818, 32px 72px #f0c3aa, 40px 72px #f0c3aa, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #f0c3aa, 88px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #181818, 40px 80px #181818, 48px 80px #f0c3aa, 56px 80px #f0c3aa, 64px 80px #f0c3aa, 72px 80px #f0c3aa, 80px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #181818, 48px 88px #181818, 56px 88px #181818, 64px 88px #181818, 72px 88px #181818, 16px 96px #181818, 24px 96px #181818, 32px 96px #f0c3aa, 40px 96px #f0c3aa, 48px 96px #181818, 56px 96px #181818, 64px 96px #181818, 72px 96px #181818, 80px 96px #181818, 88px 96px #181818, 8px 104px #181818, 16px 104px #ffffff, 24px 104px #181818, 32px 104px #f0c3aa, 40px 104px #f0c3aa, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 80px 104px #ffffff, 88px 104px #ffffff, 96px 104px #181818, 8px 112px #181818, 16px 112px #ffffff, 24px 112px #ffffff, 32px 112px #181818, 40px 112px #181818, 48px 112px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #ffffff, 80px 112px #ffffff, 88px 112px #181818, 16px 120px #181818, 24px 120px #181818, 64px 120px #181818, 72px 120px #181818, 80px 120px #181818;\r\n            box-shadow: 32px 8px #181818, 40px 8px #181818, 48px 8px #181818, 56px 8px #181818, 64px 8px #181818, 72px 8px #181818, 24px 16px #181818, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #e31613, 88px 24px #181818, 16px 32px #181818, 24px 32px #e31613, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #e31613, 80px 32px #f7f7f7, 88px 32px #181818, 96px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #e31613, 40px 40px #e31613, 48px 40px #e31613, 56px 40px #e31613, 64px 40px #e31613, 72px 40px #f7f7f7, 80px 40px #f7f7f7, 88px 40px #f7f7f7, 96px 40px #f7f7f7, 104px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #181818, 64px 48px #e31613, 72px 48px #e31613, 80px 48px #e31613, 88px 48px #181818, 96px 48px #181818, 8px 56px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #181818, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #181818, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #181818, 80px 64px #f0c3aa, 88px 64px #181818, 24px 72px #181818, 32px 72px #f0c3aa, 40px 72px #f0c3aa, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #f0c3aa, 88px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #181818, 40px 80px #181818, 48px 80px #f0c3aa, 56px 80px #f0c3aa, 64px 80px #f0c3aa, 72px 80px #f0c3aa, 80px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #181818, 48px 88px #181818, 56px 88px #181818, 64px 88px #181818, 72px 88px #181818, 16px 96px #181818, 24px 96px #181818, 32px 96px #f0c3aa, 40px 96px #f0c3aa, 48px 96px #181818, 56px 96px #181818, 64px 96px #181818, 72px 96px #181818, 80px 96px #181818, 88px 96px #181818, 8px 104px #181818, 16px 104px #ffffff, 24px 104px #181818, 32px 104px #f0c3aa, 40px 104px #f0c3aa, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 80px 104px #ffffff, 88px 104px #ffffff, 96px 104px #181818, 8px 112px #181818, 16px 112px #ffffff, 24px 112px #ffffff, 32px 112px #181818, 40px 112px #181818, 48px 112px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #ffffff, 80px 112px #ffffff, 88px 112px #181818, 16px 120px #181818, 24px 120px #181818, 64px 120px #181818, 72px 120px #181818, 80px 120px #181818;\r\n  }\r\n  50% {\r\n    -webkit-box-shadow: 32px 0 #181818, 40px 0 #181818, 48px 0 #181818, 56px 0 #181818, 64px 0 #181818, 72px 0 #181818, 24px 8px #181818, 32px 8px #e31613, 40px 8px #e31613, 48px 8px #e31613, 56px 8px #e31613, 64px 8px #e31613, 72px 8px #e31613, 80px 8px #181818, 16px 16px #181818, 24px 16px #e31613, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #e31613, 88px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #f7f7f7, 88px 24px #181818, 96px 24px #181818, 8px 32px #181818, 16px 32px #181818, 24px 32px #181818, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #f7f7f7, 80px 32px #f7f7f7, 88px 32px #f7f7f7, 96px 32px #f7f7f7, 104px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #181818, 40px 40px #181818, 48px 40px #181818, 56px 40px #181818, 64px 40px #e31613, 72px 40px #e31613, 80px 40px #e31613, 88px 40px #181818, 96px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #f0c3aa, 64px 48px #f0c3aa, 72px 48px #181818, 80px 48px #f0c3aa, 88px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #f0c3aa, 40px 56px #f0c3aa, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #f0c3aa, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #f0c3aa, 80px 64px #f0c3aa, 88px 64px #181818, 16px 72px #181818, 24px 72px #037efb, 32px 72px #181818, 40px 72px #181818, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #037efb, 40px 80px #181818, 48px 80px #181818, 56px 80px #181818, 64px 80px #181818, 72px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #f0c3aa, 48px 88px #f0c3aa, 56px 88px #181818, 64px 88px #181818, 16px 96px #181818, 24px 96px #037efb, 32px 96px #181818, 40px 96px #f0c3aa, 48px 96px #f0c3aa, 56px 96px #181818, 64px 96px #181818, 24px 104px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 32px 112px #181818, 40px 112px #ffffff, 48px 112px #ffffff, 56px 112px #ffffff, 64px 112px #ffffff, 72px 112px #181818, 40px 120px #181818, 48px 120px #181818, 56px 120px #181818, 64px 120px #181818;\r\n            box-shadow: 32px 0 #181818, 40px 0 #181818, 48px 0 #181818, 56px 0 #181818, 64px 0 #181818, 72px 0 #181818, 24px 8px #181818, 32px 8px #e31613, 40px 8px #e31613, 48px 8px #e31613, 56px 8px #e31613, 64px 8px #e31613, 72px 8px #e31613, 80px 8px #181818, 16px 16px #181818, 24px 16px #e31613, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #e31613, 88px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #f7f7f7, 88px 24px #181818, 96px 24px #181818, 8px 32px #181818, 16px 32px #181818, 24px 32px #181818, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #f7f7f7, 80px 32px #f7f7f7, 88px 32px #f7f7f7, 96px 32px #f7f7f7, 104px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #181818, 40px 40px #181818, 48px 40px #181818, 56px 40px #181818, 64px 40px #e31613, 72px 40px #e31613, 80px 40px #e31613, 88px 40px #181818, 96px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #f0c3aa, 64px 48px #f0c3aa, 72px 48px #181818, 80px 48px #f0c3aa, 88px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #f0c3aa, 40px 56px #f0c3aa, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #f0c3aa, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #f0c3aa, 80px 64px #f0c3aa, 88px 64px #181818, 16px 72px #181818, 24px 72px #037efb, 32px 72px #181818, 40px 72px #181818, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #037efb, 40px 80px #181818, 48px 80px #181818, 56px 80px #181818, 64px 80px #181818, 72px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #f0c3aa, 48px 88px #f0c3aa, 56px 88px #181818, 64px 88px #181818, 16px 96px #181818, 24px 96px #037efb, 32px 96px #181818, 40px 96px #f0c3aa, 48px 96px #f0c3aa, 56px 96px #181818, 64px 96px #181818, 24px 104px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 32px 112px #181818, 40px 112px #ffffff, 48px 112px #ffffff, 56px 112px #ffffff, 64px 112px #ffffff, 72px 112px #181818, 40px 120px #181818, 48px 120px #181818, 56px 120px #181818, 64px 120px #181818;\r\n  }\r\n}\r\n\r\n@keyframes ash-frames {\r\n  0% {\r\n    -webkit-box-shadow: 32px 8px #181818, 40px 8px #181818, 48px 8px #181818, 56px 8px #181818, 64px 8px #181818, 72px 8px #181818, 24px 16px #181818, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #e31613, 88px 24px #181818, 16px 32px #181818, 24px 32px #e31613, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #e31613, 80px 32px #f7f7f7, 88px 32px #181818, 96px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #e31613, 40px 40px #e31613, 48px 40px #e31613, 56px 40px #e31613, 64px 40px #e31613, 72px 40px #f7f7f7, 80px 40px #f7f7f7, 88px 40px #f7f7f7, 96px 40px #f7f7f7, 104px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #181818, 64px 48px #e31613, 72px 48px #e31613, 80px 48px #e31613, 88px 48px #181818, 96px 48px #181818, 8px 56px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #181818, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #181818, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #181818, 80px 64px #f0c3aa, 88px 64px #181818, 24px 72px #181818, 32px 72px #f0c3aa, 40px 72px #f0c3aa, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #f0c3aa, 88px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #181818, 40px 80px #181818, 48px 80px #f0c3aa, 56px 80px #f0c3aa, 64px 80px #f0c3aa, 72px 80px #f0c3aa, 80px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #181818, 48px 88px #181818, 56px 88px #181818, 64px 88px #181818, 72px 88px #181818, 16px 96px #181818, 24px 96px #181818, 32px 96px #f0c3aa, 40px 96px #f0c3aa, 48px 96px #181818, 56px 96px #181818, 64px 96px #181818, 72px 96px #181818, 80px 96px #181818, 88px 96px #181818, 8px 104px #181818, 16px 104px #ffffff, 24px 104px #181818, 32px 104px #f0c3aa, 40px 104px #f0c3aa, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 80px 104px #ffffff, 88px 104px #ffffff, 96px 104px #181818, 8px 112px #181818, 16px 112px #ffffff, 24px 112px #ffffff, 32px 112px #181818, 40px 112px #181818, 48px 112px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #ffffff, 80px 112px #ffffff, 88px 112px #181818, 16px 120px #181818, 24px 120px #181818, 64px 120px #181818, 72px 120px #181818, 80px 120px #181818;\r\n            box-shadow: 32px 8px #181818, 40px 8px #181818, 48px 8px #181818, 56px 8px #181818, 64px 8px #181818, 72px 8px #181818, 24px 16px #181818, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #e31613, 88px 24px #181818, 16px 32px #181818, 24px 32px #e31613, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #e31613, 80px 32px #f7f7f7, 88px 32px #181818, 96px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #e31613, 40px 40px #e31613, 48px 40px #e31613, 56px 40px #e31613, 64px 40px #e31613, 72px 40px #f7f7f7, 80px 40px #f7f7f7, 88px 40px #f7f7f7, 96px 40px #f7f7f7, 104px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #181818, 64px 48px #e31613, 72px 48px #e31613, 80px 48px #e31613, 88px 48px #181818, 96px 48px #181818, 8px 56px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #181818, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #181818, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #181818, 80px 64px #f0c3aa, 88px 64px #181818, 24px 72px #181818, 32px 72px #f0c3aa, 40px 72px #f0c3aa, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #f0c3aa, 88px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #181818, 40px 80px #181818, 48px 80px #f0c3aa, 56px 80px #f0c3aa, 64px 80px #f0c3aa, 72px 80px #f0c3aa, 80px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #181818, 48px 88px #181818, 56px 88px #181818, 64px 88px #181818, 72px 88px #181818, 16px 96px #181818, 24px 96px #181818, 32px 96px #f0c3aa, 40px 96px #f0c3aa, 48px 96px #181818, 56px 96px #181818, 64px 96px #181818, 72px 96px #181818, 80px 96px #181818, 88px 96px #181818, 8px 104px #181818, 16px 104px #ffffff, 24px 104px #181818, 32px 104px #f0c3aa, 40px 104px #f0c3aa, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 80px 104px #ffffff, 88px 104px #ffffff, 96px 104px #181818, 8px 112px #181818, 16px 112px #ffffff, 24px 112px #ffffff, 32px 112px #181818, 40px 112px #181818, 48px 112px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #ffffff, 80px 112px #ffffff, 88px 112px #181818, 16px 120px #181818, 24px 120px #181818, 64px 120px #181818, 72px 120px #181818, 80px 120px #181818;\r\n  }\r\n  50% {\r\n    -webkit-box-shadow: 32px 0 #181818, 40px 0 #181818, 48px 0 #181818, 56px 0 #181818, 64px 0 #181818, 72px 0 #181818, 24px 8px #181818, 32px 8px #e31613, 40px 8px #e31613, 48px 8px #e31613, 56px 8px #e31613, 64px 8px #e31613, 72px 8px #e31613, 80px 8px #181818, 16px 16px #181818, 24px 16px #e31613, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #e31613, 88px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #f7f7f7, 88px 24px #181818, 96px 24px #181818, 8px 32px #181818, 16px 32px #181818, 24px 32px #181818, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #f7f7f7, 80px 32px #f7f7f7, 88px 32px #f7f7f7, 96px 32px #f7f7f7, 104px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #181818, 40px 40px #181818, 48px 40px #181818, 56px 40px #181818, 64px 40px #e31613, 72px 40px #e31613, 80px 40px #e31613, 88px 40px #181818, 96px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #f0c3aa, 64px 48px #f0c3aa, 72px 48px #181818, 80px 48px #f0c3aa, 88px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #f0c3aa, 40px 56px #f0c3aa, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #f0c3aa, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #f0c3aa, 80px 64px #f0c3aa, 88px 64px #181818, 16px 72px #181818, 24px 72px #037efb, 32px 72px #181818, 40px 72px #181818, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #037efb, 40px 80px #181818, 48px 80px #181818, 56px 80px #181818, 64px 80px #181818, 72px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #f0c3aa, 48px 88px #f0c3aa, 56px 88px #181818, 64px 88px #181818, 16px 96px #181818, 24px 96px #037efb, 32px 96px #181818, 40px 96px #f0c3aa, 48px 96px #f0c3aa, 56px 96px #181818, 64px 96px #181818, 24px 104px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 32px 112px #181818, 40px 112px #ffffff, 48px 112px #ffffff, 56px 112px #ffffff, 64px 112px #ffffff, 72px 112px #181818, 40px 120px #181818, 48px 120px #181818, 56px 120px #181818, 64px 120px #181818;\r\n            box-shadow: 32px 0 #181818, 40px 0 #181818, 48px 0 #181818, 56px 0 #181818, 64px 0 #181818, 72px 0 #181818, 24px 8px #181818, 32px 8px #e31613, 40px 8px #e31613, 48px 8px #e31613, 56px 8px #e31613, 64px 8px #e31613, 72px 8px #e31613, 80px 8px #181818, 16px 16px #181818, 24px 16px #e31613, 32px 16px #e31613, 40px 16px #e31613, 48px 16px #e31613, 56px 16px #e31613, 64px 16px #e31613, 72px 16px #e31613, 80px 16px #e31613, 88px 16px #181818, 16px 24px #181818, 24px 24px #e31613, 32px 24px #e31613, 40px 24px #e31613, 48px 24px #e31613, 56px 24px #e31613, 64px 24px #e31613, 72px 24px #e31613, 80px 24px #f7f7f7, 88px 24px #181818, 96px 24px #181818, 8px 32px #181818, 16px 32px #181818, 24px 32px #181818, 32px 32px #e31613, 40px 32px #e31613, 48px 32px #e31613, 56px 32px #e31613, 64px 32px #e31613, 72px 32px #f7f7f7, 80px 32px #f7f7f7, 88px 32px #f7f7f7, 96px 32px #f7f7f7, 104px 32px #181818, 8px 40px #181818, 16px 40px #181818, 24px 40px #181818, 32px 40px #181818, 40px 40px #181818, 48px 40px #181818, 56px 40px #181818, 64px 40px #e31613, 72px 40px #e31613, 80px 40px #e31613, 88px 40px #181818, 96px 40px #181818, 8px 48px #181818, 16px 48px #181818, 24px 48px #181818, 32px 48px #181818, 40px 48px #181818, 48px 48px #181818, 56px 48px #f0c3aa, 64px 48px #f0c3aa, 72px 48px #181818, 80px 48px #f0c3aa, 88px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #f0c3aa, 40px 56px #f0c3aa, 48px 56px #181818, 56px 56px #f0c3aa, 64px 56px #f0c3aa, 72px 56px #181818, 80px 56px #f0c3aa, 88px 56px #181818, 24px 64px #181818, 32px 64px #f0c3aa, 40px 64px #f0c3aa, 48px 64px #f0c3aa, 56px 64px #f0c3aa, 64px 64px #f0c3aa, 72px 64px #f0c3aa, 80px 64px #f0c3aa, 88px 64px #181818, 16px 72px #181818, 24px 72px #037efb, 32px 72px #181818, 40px 72px #181818, 48px 72px #f0c3aa, 56px 72px #f0c3aa, 64px 72px #f0c3aa, 72px 72px #f0c3aa, 80px 72px #181818, 16px 80px #181818, 24px 80px #037efb, 32px 80px #037efb, 40px 80px #181818, 48px 80px #181818, 56px 80px #181818, 64px 80px #181818, 72px 80px #181818, 16px 88px #181818, 24px 88px #037efb, 32px 88px #181818, 40px 88px #f0c3aa, 48px 88px #f0c3aa, 56px 88px #181818, 64px 88px #181818, 16px 96px #181818, 24px 96px #037efb, 32px 96px #181818, 40px 96px #f0c3aa, 48px 96px #f0c3aa, 56px 96px #181818, 64px 96px #181818, 24px 104px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #ffffff, 64px 104px #ffffff, 72px 104px #181818, 32px 112px #181818, 40px 112px #ffffff, 48px 112px #ffffff, 56px 112px #ffffff, 64px 112px #ffffff, 72px 112px #181818, 40px 120px #181818, 48px 120px #181818, 56px 120px #181818, 64px 120px #181818;\r\n  }\r\n}\r\n\r\n#pikachu {\r\n  width: 120px;\r\n  height: 128px;\r\n  position: relative;\r\n}\r\n\r\n#pikachu::after {\r\n  content: \"\";\r\n  width: 8px;\r\n  height: 8px;\r\n  display: block;\r\n  left: -8px;\r\n  position: absolute;\r\n}\r\n\r\n#pikachu::after {\r\n  -webkit-animation: pikachu-frames 0.2s steps(1) infinite;\r\n          animation: pikachu-frames 0.2s steps(1) infinite;\r\n}\r\n\r\n@-webkit-keyframes pikachu-frames {\r\n  0% {\r\n    -webkit-box-shadow: 40px 8px #181818, 48px 8px #181818, 8px 16px #181818, 16px 16px #181818, 24px 16px #181818, 32px 16px #181818, 40px 16px #181818, 48px 16px #181818, 56px 16px #181818, 64px 16px #181818, 72px 16px #181818, 8px 24px #181818, 16px 24px #fefe00, 24px 24px #fefe00, 32px 24px #fefe00, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #fefe00, 72px 24px #fefe00, 80px 24px #181818, 88px 24px #181818, 96px 24px #181818, 16px 32px #181818, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #fefe00, 48px 32px #181818, 56px 32px #fefe00, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #fefe00, 88px 32px #fefe00, 96px 32px #fefe00, 104px 32px #181818, 24px 40px #181818, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #181818, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #fefe00, 112px 40px #181818, 32px 48px #181818, 40px 48px #fefe00, 48px 48px #fefe00, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #181818, 56px 56px #fefe00, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #181818, 104px 56px #fefe00, 112px 56px #fefe00, 120px 56px #181818, 16px 64px #181818, 24px 64px #fefe00, 32px 64px #fefe00, 40px 64px #181818, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fe4100, 88px 64px #fefe00, 96px 64px #fefe00, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 24px 72px #181818, 32px 72px #823e00, 40px 72px #181818, 48px 72px #823e00, 56px 72px #823e00, 64px 72px #823e00, 72px 72px #fefe00, 80px 72px #fefe00, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #181818, 16px 80px #181818, 24px 80px #823e00, 32px 80px #823e00, 40px 80px #181818, 48px 80px #fefe00, 56px 80px #fefe00, 64px 80px #fefe00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #181818, 104px 80px #fefe00, 112px 80px #181818, 24px 88px #181818, 32px 88px #823e00, 40px 88px #181818, 48px 88px #823e00, 56px 88px #823e00, 64px 88px #823e00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #181818, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 32px 96px #181818, 40px 96px #181818, 48px 96px #181818, 56px 96px #fefe00, 64px 96px #fefe00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #fefe00, 96px 96px #fefe00, 104px 96px #181818, 112px 96px #181818, 32px 104px #181818, 40px 104px #fefe00, 48px 104px #181818, 56px 104px #181818, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #181818, 104px 104px #fefe00, 112px 104px #fefe00, 120px 104px #181818, 40px 112px #181818, 48px 112px #fefe00, 56px 112px #fefe00, 64px 112px #181818, 72px 112px #181818, 80px 112px #181818, 88px 112px #181818, 104px 112px #181818, 112px 112px #181818, 48px 120px #181818, 56px 120px #181818;\r\n            box-shadow: 40px 8px #181818, 48px 8px #181818, 8px 16px #181818, 16px 16px #181818, 24px 16px #181818, 32px 16px #181818, 40px 16px #181818, 48px 16px #181818, 56px 16px #181818, 64px 16px #181818, 72px 16px #181818, 8px 24px #181818, 16px 24px #fefe00, 24px 24px #fefe00, 32px 24px #fefe00, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #fefe00, 72px 24px #fefe00, 80px 24px #181818, 88px 24px #181818, 96px 24px #181818, 16px 32px #181818, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #fefe00, 48px 32px #181818, 56px 32px #fefe00, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #fefe00, 88px 32px #fefe00, 96px 32px #fefe00, 104px 32px #181818, 24px 40px #181818, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #181818, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #fefe00, 112px 40px #181818, 32px 48px #181818, 40px 48px #fefe00, 48px 48px #fefe00, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #181818, 56px 56px #fefe00, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #181818, 104px 56px #fefe00, 112px 56px #fefe00, 120px 56px #181818, 16px 64px #181818, 24px 64px #fefe00, 32px 64px #fefe00, 40px 64px #181818, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fe4100, 88px 64px #fefe00, 96px 64px #fefe00, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 24px 72px #181818, 32px 72px #823e00, 40px 72px #181818, 48px 72px #823e00, 56px 72px #823e00, 64px 72px #823e00, 72px 72px #fefe00, 80px 72px #fefe00, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #181818, 16px 80px #181818, 24px 80px #823e00, 32px 80px #823e00, 40px 80px #181818, 48px 80px #fefe00, 56px 80px #fefe00, 64px 80px #fefe00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #181818, 104px 80px #fefe00, 112px 80px #181818, 24px 88px #181818, 32px 88px #823e00, 40px 88px #181818, 48px 88px #823e00, 56px 88px #823e00, 64px 88px #823e00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #181818, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 32px 96px #181818, 40px 96px #181818, 48px 96px #181818, 56px 96px #fefe00, 64px 96px #fefe00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #fefe00, 96px 96px #fefe00, 104px 96px #181818, 112px 96px #181818, 32px 104px #181818, 40px 104px #fefe00, 48px 104px #181818, 56px 104px #181818, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #181818, 104px 104px #fefe00, 112px 104px #fefe00, 120px 104px #181818, 40px 112px #181818, 48px 112px #fefe00, 56px 112px #fefe00, 64px 112px #181818, 72px 112px #181818, 80px 112px #181818, 88px 112px #181818, 104px 112px #181818, 112px 112px #181818, 48px 120px #181818, 56px 120px #181818;\r\n  }\r\n  50% {\r\n    -webkit-box-shadow: 40px 16px #181818, 48px 16px #181818, 8px 24px #181818, 16px 24px #181818, 24px 24px #181818, 32px 24px #181818, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #181818, 72px 24px #181818, 8px 32px #181818, 16px 32px #fefe00, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #181818, 48px 32px #181818, 56px 32px #181818, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #181818, 88px 32px #181818, 96px 32px #181818, 16px 40px #181818, 24px 40px #fefe00, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #fefe00, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #181818, 24px 48px #181818, 32px 48px #fefe00, 40px 48px #fefe00, 48px 48px #181818, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #fefe00, 56px 56px #181818, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #fefe00, 104px 56px #fefe00, 112px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #181818, 40px 64px #fefe00, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fefe00, 88px 64px #fefe00, 96px 64px #181818, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 16px 72px #181818, 24px 72px #fefe00, 32px 72px #fefe00, 40px 72px #fefe00, 48px 72px #181818, 56px 72px #fefe00, 64px 72px #fefe00, 72px 72px #fefe00, 80px 72px #fe4100, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #fefe00, 120px 72px #181818, 24px 80px #181818, 32px 80px #823e00, 40px 80px #181818, 48px 80px #823e00, 56px 80px #823e00, 64px 80px #823e00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #fefe00, 104px 80px #fefe00, 112px 80px #181818, 16px 88px #181818, 24px 88px #823e00, 32px 88px #823e00, 40px 88px #181818, 48px 88px #fefe00, 56px 88px #fefe00, 64px 88px #fefe00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #fefe00, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 24px 96px #181818, 32px 96px #823e00, 40px 96px #181818, 48px 96px #823e00, 56px 96px #823e00, 64px 96px #823e00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #181818, 96px 96px #181818, 104px 96px #fefe00, 112px 96px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #fefe00, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #fefe00, 104px 104px #fefe00, 112px 104px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #fefe00, 80px 112px #fefe00, 88px 112px #fefe00, 96px 112px #181818, 104px 112px #181818, 72px 120px #181818, 80px 120px #181818, 88px 120px #181818;\r\n            box-shadow: 40px 16px #181818, 48px 16px #181818, 8px 24px #181818, 16px 24px #181818, 24px 24px #181818, 32px 24px #181818, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #181818, 72px 24px #181818, 8px 32px #181818, 16px 32px #fefe00, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #181818, 48px 32px #181818, 56px 32px #181818, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #181818, 88px 32px #181818, 96px 32px #181818, 16px 40px #181818, 24px 40px #fefe00, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #fefe00, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #181818, 24px 48px #181818, 32px 48px #fefe00, 40px 48px #fefe00, 48px 48px #181818, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #fefe00, 56px 56px #181818, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #fefe00, 104px 56px #fefe00, 112px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #181818, 40px 64px #fefe00, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fefe00, 88px 64px #fefe00, 96px 64px #181818, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 16px 72px #181818, 24px 72px #fefe00, 32px 72px #fefe00, 40px 72px #fefe00, 48px 72px #181818, 56px 72px #fefe00, 64px 72px #fefe00, 72px 72px #fefe00, 80px 72px #fe4100, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #fefe00, 120px 72px #181818, 24px 80px #181818, 32px 80px #823e00, 40px 80px #181818, 48px 80px #823e00, 56px 80px #823e00, 64px 80px #823e00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #fefe00, 104px 80px #fefe00, 112px 80px #181818, 16px 88px #181818, 24px 88px #823e00, 32px 88px #823e00, 40px 88px #181818, 48px 88px #fefe00, 56px 88px #fefe00, 64px 88px #fefe00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #fefe00, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 24px 96px #181818, 32px 96px #823e00, 40px 96px #181818, 48px 96px #823e00, 56px 96px #823e00, 64px 96px #823e00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #181818, 96px 96px #181818, 104px 96px #fefe00, 112px 96px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #fefe00, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #fefe00, 104px 104px #fefe00, 112px 104px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #fefe00, 80px 112px #fefe00, 88px 112px #fefe00, 96px 112px #181818, 104px 112px #181818, 72px 120px #181818, 80px 120px #181818, 88px 120px #181818;\r\n  }\r\n}\r\n\r\n@keyframes pikachu-frames {\r\n  0% {\r\n    -webkit-box-shadow: 40px 8px #181818, 48px 8px #181818, 8px 16px #181818, 16px 16px #181818, 24px 16px #181818, 32px 16px #181818, 40px 16px #181818, 48px 16px #181818, 56px 16px #181818, 64px 16px #181818, 72px 16px #181818, 8px 24px #181818, 16px 24px #fefe00, 24px 24px #fefe00, 32px 24px #fefe00, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #fefe00, 72px 24px #fefe00, 80px 24px #181818, 88px 24px #181818, 96px 24px #181818, 16px 32px #181818, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #fefe00, 48px 32px #181818, 56px 32px #fefe00, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #fefe00, 88px 32px #fefe00, 96px 32px #fefe00, 104px 32px #181818, 24px 40px #181818, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #181818, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #fefe00, 112px 40px #181818, 32px 48px #181818, 40px 48px #fefe00, 48px 48px #fefe00, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #181818, 56px 56px #fefe00, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #181818, 104px 56px #fefe00, 112px 56px #fefe00, 120px 56px #181818, 16px 64px #181818, 24px 64px #fefe00, 32px 64px #fefe00, 40px 64px #181818, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fe4100, 88px 64px #fefe00, 96px 64px #fefe00, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 24px 72px #181818, 32px 72px #823e00, 40px 72px #181818, 48px 72px #823e00, 56px 72px #823e00, 64px 72px #823e00, 72px 72px #fefe00, 80px 72px #fefe00, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #181818, 16px 80px #181818, 24px 80px #823e00, 32px 80px #823e00, 40px 80px #181818, 48px 80px #fefe00, 56px 80px #fefe00, 64px 80px #fefe00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #181818, 104px 80px #fefe00, 112px 80px #181818, 24px 88px #181818, 32px 88px #823e00, 40px 88px #181818, 48px 88px #823e00, 56px 88px #823e00, 64px 88px #823e00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #181818, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 32px 96px #181818, 40px 96px #181818, 48px 96px #181818, 56px 96px #fefe00, 64px 96px #fefe00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #fefe00, 96px 96px #fefe00, 104px 96px #181818, 112px 96px #181818, 32px 104px #181818, 40px 104px #fefe00, 48px 104px #181818, 56px 104px #181818, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #181818, 104px 104px #fefe00, 112px 104px #fefe00, 120px 104px #181818, 40px 112px #181818, 48px 112px #fefe00, 56px 112px #fefe00, 64px 112px #181818, 72px 112px #181818, 80px 112px #181818, 88px 112px #181818, 104px 112px #181818, 112px 112px #181818, 48px 120px #181818, 56px 120px #181818;\r\n            box-shadow: 40px 8px #181818, 48px 8px #181818, 8px 16px #181818, 16px 16px #181818, 24px 16px #181818, 32px 16px #181818, 40px 16px #181818, 48px 16px #181818, 56px 16px #181818, 64px 16px #181818, 72px 16px #181818, 8px 24px #181818, 16px 24px #fefe00, 24px 24px #fefe00, 32px 24px #fefe00, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #fefe00, 72px 24px #fefe00, 80px 24px #181818, 88px 24px #181818, 96px 24px #181818, 16px 32px #181818, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #fefe00, 48px 32px #181818, 56px 32px #fefe00, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #fefe00, 88px 32px #fefe00, 96px 32px #fefe00, 104px 32px #181818, 24px 40px #181818, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #181818, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #fefe00, 112px 40px #181818, 32px 48px #181818, 40px 48px #fefe00, 48px 48px #fefe00, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 16px 56px #181818, 24px 56px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #181818, 56px 56px #fefe00, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #181818, 104px 56px #fefe00, 112px 56px #fefe00, 120px 56px #181818, 16px 64px #181818, 24px 64px #fefe00, 32px 64px #fefe00, 40px 64px #181818, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fe4100, 88px 64px #fefe00, 96px 64px #fefe00, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 24px 72px #181818, 32px 72px #823e00, 40px 72px #181818, 48px 72px #823e00, 56px 72px #823e00, 64px 72px #823e00, 72px 72px #fefe00, 80px 72px #fefe00, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #181818, 16px 80px #181818, 24px 80px #823e00, 32px 80px #823e00, 40px 80px #181818, 48px 80px #fefe00, 56px 80px #fefe00, 64px 80px #fefe00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #181818, 104px 80px #fefe00, 112px 80px #181818, 24px 88px #181818, 32px 88px #823e00, 40px 88px #181818, 48px 88px #823e00, 56px 88px #823e00, 64px 88px #823e00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #181818, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 32px 96px #181818, 40px 96px #181818, 48px 96px #181818, 56px 96px #fefe00, 64px 96px #fefe00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #fefe00, 96px 96px #fefe00, 104px 96px #181818, 112px 96px #181818, 32px 104px #181818, 40px 104px #fefe00, 48px 104px #181818, 56px 104px #181818, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #181818, 104px 104px #fefe00, 112px 104px #fefe00, 120px 104px #181818, 40px 112px #181818, 48px 112px #fefe00, 56px 112px #fefe00, 64px 112px #181818, 72px 112px #181818, 80px 112px #181818, 88px 112px #181818, 104px 112px #181818, 112px 112px #181818, 48px 120px #181818, 56px 120px #181818;\r\n  }\r\n  50% {\r\n    -webkit-box-shadow: 40px 16px #181818, 48px 16px #181818, 8px 24px #181818, 16px 24px #181818, 24px 24px #181818, 32px 24px #181818, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #181818, 72px 24px #181818, 8px 32px #181818, 16px 32px #fefe00, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #181818, 48px 32px #181818, 56px 32px #181818, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #181818, 88px 32px #181818, 96px 32px #181818, 16px 40px #181818, 24px 40px #fefe00, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #fefe00, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #181818, 24px 48px #181818, 32px 48px #fefe00, 40px 48px #fefe00, 48px 48px #181818, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #fefe00, 56px 56px #181818, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #fefe00, 104px 56px #fefe00, 112px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #181818, 40px 64px #fefe00, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fefe00, 88px 64px #fefe00, 96px 64px #181818, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 16px 72px #181818, 24px 72px #fefe00, 32px 72px #fefe00, 40px 72px #fefe00, 48px 72px #181818, 56px 72px #fefe00, 64px 72px #fefe00, 72px 72px #fefe00, 80px 72px #fe4100, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #fefe00, 120px 72px #181818, 24px 80px #181818, 32px 80px #823e00, 40px 80px #181818, 48px 80px #823e00, 56px 80px #823e00, 64px 80px #823e00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #fefe00, 104px 80px #fefe00, 112px 80px #181818, 16px 88px #181818, 24px 88px #823e00, 32px 88px #823e00, 40px 88px #181818, 48px 88px #fefe00, 56px 88px #fefe00, 64px 88px #fefe00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #fefe00, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 24px 96px #181818, 32px 96px #823e00, 40px 96px #181818, 48px 96px #823e00, 56px 96px #823e00, 64px 96px #823e00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #181818, 96px 96px #181818, 104px 96px #fefe00, 112px 96px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #fefe00, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #fefe00, 104px 104px #fefe00, 112px 104px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #fefe00, 80px 112px #fefe00, 88px 112px #fefe00, 96px 112px #181818, 104px 112px #181818, 72px 120px #181818, 80px 120px #181818, 88px 120px #181818;\r\n            box-shadow: 40px 16px #181818, 48px 16px #181818, 8px 24px #181818, 16px 24px #181818, 24px 24px #181818, 32px 24px #181818, 40px 24px #181818, 48px 24px #181818, 56px 24px #181818, 64px 24px #181818, 72px 24px #181818, 8px 32px #181818, 16px 32px #fefe00, 24px 32px #fefe00, 32px 32px #fefe00, 40px 32px #181818, 48px 32px #181818, 56px 32px #181818, 64px 32px #fefe00, 72px 32px #fefe00, 80px 32px #181818, 88px 32px #181818, 96px 32px #181818, 16px 40px #181818, 24px 40px #fefe00, 32px 40px #fefe00, 40px 40px #fefe00, 48px 40px #181818, 56px 40px #fefe00, 64px 40px #fefe00, 72px 40px #fefe00, 80px 40px #fefe00, 88px 40px #fefe00, 96px 40px #fefe00, 104px 40px #181818, 24px 48px #181818, 32px 48px #fefe00, 40px 48px #fefe00, 48px 48px #181818, 56px 48px #181818, 64px 48px #fefe00, 72px 48px #fefe00, 80px 48px #fefe00, 88px 48px #fefe00, 96px 48px #fefe00, 104px 48px #fefe00, 112px 48px #181818, 32px 56px #181818, 40px 56px #fefe00, 48px 56px #fefe00, 56px 56px #181818, 64px 56px #fefe00, 72px 56px #fefe00, 80px 56px #fefe00, 88px 56px #fefe00, 96px 56px #fefe00, 104px 56px #fefe00, 112px 56px #181818, 16px 64px #181818, 24px 64px #181818, 32px 64px #181818, 40px 64px #fefe00, 48px 64px #181818, 56px 64px #fefe00, 64px 64px #fefe00, 72px 64px #fefe00, 80px 64px #fefe00, 88px 64px #fefe00, 96px 64px #181818, 104px 64px #fefe00, 112px 64px #fefe00, 120px 64px #181818, 16px 72px #181818, 24px 72px #fefe00, 32px 72px #fefe00, 40px 72px #fefe00, 48px 72px #181818, 56px 72px #fefe00, 64px 72px #fefe00, 72px 72px #fefe00, 80px 72px #fe4100, 88px 72px #fefe00, 96px 72px #fefe00, 104px 72px #fefe00, 112px 72px #fefe00, 120px 72px #181818, 24px 80px #181818, 32px 80px #823e00, 40px 80px #181818, 48px 80px #823e00, 56px 80px #823e00, 64px 80px #823e00, 72px 80px #fefe00, 80px 80px #fefe00, 88px 80px #fefe00, 96px 80px #fefe00, 104px 80px #fefe00, 112px 80px #181818, 16px 88px #181818, 24px 88px #823e00, 32px 88px #823e00, 40px 88px #181818, 48px 88px #fefe00, 56px 88px #fefe00, 64px 88px #fefe00, 72px 88px #fefe00, 80px 88px #fefe00, 88px 88px #fefe00, 96px 88px #181818, 104px 88px #fefe00, 112px 88px #181818, 24px 96px #181818, 32px 96px #823e00, 40px 96px #181818, 48px 96px #823e00, 56px 96px #823e00, 64px 96px #823e00, 72px 96px #fefe00, 80px 96px #fefe00, 88px 96px #181818, 96px 96px #181818, 104px 96px #fefe00, 112px 96px #181818, 32px 104px #181818, 40px 104px #181818, 48px 104px #181818, 56px 104px #fefe00, 64px 104px #fefe00, 72px 104px #fefe00, 80px 104px #fefe00, 88px 104px #fefe00, 96px 104px #fefe00, 104px 104px #fefe00, 112px 104px #181818, 56px 112px #181818, 64px 112px #181818, 72px 112px #fefe00, 80px 112px #fefe00, 88px 112px #fefe00, 96px 112px #181818, 104px 112px #181818, 72px 120px #181818, 80px 120px #181818, 88px 120px #181818;\r\n  }\r\n}\r\n\r\n#ash, #pikachu {\r\n  margin: 0 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<side id=\"sideContainer\"  #sideRef [style.opacity]=\"ds.isMainLoading ? '0' : '1'\"></side>\n\n<div id=\"detailContainer\" ui-view=\"content\" fxFlex  *ngIf=\"!ds.isMainLoading\"></div>\n<div id=\"backdrop\" (click)=\"ds.setMenuStatus(false)\" [ngClass]=\"{'open': ds.isOpenMenu}\" *ngIf=\"!ds.isMainLoading\"></div>\n<div id=\"mainLoading\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"ds.isMainLoading\" [@fade]>\n  <div class =\"containerAnim\"fxLayout=\"row\" >\n    <div id=\"pikachu\"></div>\n    <div id=\"ash\"></div>\n  </div>\n  <span>Loading</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SideComponent } from './components/side-bar/side.component';

var AppComponent = /** @class */ (function () {
    function AppComponent(ds, media) {
        var _this = this;
        this.ds = ds;
        this.activeMediaQuery = "";
        //Listens the changes in the window size
        this.watcher = media.subscribe(function (change) {
            _this.activeMediaQuery = change ? "'" + change.mqAlias + "' = (" + change.mediaQuery + ")" : '';
            if (change.mqAlias == 'lg') {
                //Changes the open status of the sidebar
                _this.ds.setMenuStatus(false);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.watcher.unsubscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: '0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(500)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(400, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: '0' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export asyncCacheOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_side_bar_side_component__ = __webpack_require__("./src/app/components/side-bar/side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_empty_empty_component__ = __webpack_require__("./src/app/components/empty/empty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_detail_detail_component__ = __webpack_require__("./src/app/components/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__router_config__ = __webpack_require__("./src/app/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_states__ = __webpack_require__("./src/app/app.states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_async_cache__ = __webpack_require__("./node_modules/angular-async-cache/fesm5/angular-async-cache.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 //importing the module





function asyncCacheOptionsFactory() {
    return new __WEBPACK_IMPORTED_MODULE_15_angular_async_cache__["c" /* AsyncCacheOptions */]({
        // Default cache driver to use. Default in memory.
        // You can also roll your own by implementing the CacheDriver interface
        driver: new __WEBPACK_IMPORTED_MODULE_15_angular_async_cache__["d" /* LocalStorageDriver */](),
        // this is the special sauce - first emit the data from localstorage,
        // then re-fetch the live data from the API and emit a second time.
        // The async pipe will then re-render and update the UI. Default: false
        fromCacheAndReplay: true
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_side_bar_side_component__["a" /* SideComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_empty_empty_component__["a" /* EmptyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__uirouter_angular__["UIRouterModule"].forRoot({ states: __WEBPACK_IMPORTED_MODULE_13__app_states__["a" /* APP_STATES */], otherwise: { state: 'home' }, config: __WEBPACK_IMPORTED_MODULE_12__router_config__["a" /* routerConfigFn */] }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_angular_async_cache__["b" /* AsyncCacheModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_15_angular_async_cache__["c" /* AsyncCacheOptions */],
                    useFactory: asyncCacheOptionsFactory
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__uirouter_angular__["UIView"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export returnTo */
/* unused harmony export appState */
/* unused harmony export homeState */
/* unused harmony export detailState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_STATES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_detail_detail_component__ = __webpack_require__("./src/app/components/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_empty_empty_component__ = __webpack_require__("./src/app/components/empty/empty.component.ts");



function returnTo($transition$) {
    if ($transition$.redirectedFrom() != null) {
        // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
        // Return to the original attempted target state (e.g., contacts)
        return $transition$.redirectedFrom().targetState();
    }
    var $state = $transition$.router.stateService;
    // The user was not redirected to the login state; they directly activated the login state somehow.
    // Return them to the state they came from.
    if ($transition$.from().name !== '') {
        return $state.target($transition$.from(), $transition$.params('from'));
    }
    // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
    return $state.target('home');
}
//ROUTING SETTINGS
var appState = {
    name: 'app',
    views: {
        '!$default': { component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] }
    }
};
var homeState = {
    parent: 'app',
    name: 'home',
    url: '/',
    views: {
        'content@app': { component: __WEBPACK_IMPORTED_MODULE_2__components_empty_empty_component__["a" /* EmptyComponent */] }
    }
};
var detailState = {
    parent: 'app',
    name: 'detail',
    url: '/:name',
    views: {
        'content@app': { component: __WEBPACK_IMPORTED_MODULE_1__components_detail_detail_component__["a" /* DetailComponent */] }
    }
};
var APP_STATES = [
    appState,
    homeState,
    detailState
];


/***/ }),

/***/ "./src/app/components/detail/detail.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*POKEMON DETAILS*/\r\n.btnMenu{\r\n\tposition: relative;\r\n\twidth: 36px;\r\n    height: 36px;\r\n    margin: 32px 0px 0px 24px;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n    -webkit-transition: opacity 0.15s linear;\r\n    transition: opacity 0.15s linear;\r\n    display: block;\r\n}\r\n.mainContainer{\r\n\twidth: calc(100% - 12px);\r\n\tmargin: 12px auto;\r\n}\r\n.main{\r\n\tposition: relative;\r\n\t\r\n}\r\n.main .imageContainer{\r\n\tposition: relative;\r\n\tbackground-color: #F4F4F4;\r\n\twidth: 100%;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n}\r\n.main .imageContainer:before {\r\n    content: \"\";\r\n    display: block;\r\n    padding-top: 100%;\r\n}\r\n.main .imageContainer img{\r\n\tposition: absolute;\r\n\twidth: calc(100% - 48px);\r\n    height: calc(100% - 48px);\r\n    margin: 0px;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n\t\r\n}\r\n.main .type{\r\n\tposition: relative;\r\n\twidth: 45%;\r\n\tbackground:#ccc;\r\n\tcolor: #000;\r\n\tmargin:6px 3px;\r\n\tpadding: 6px;\r\n\tborder-radius: 3px;\r\n}\r\n.main .type span{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tfont-family: Montserrat-SemiBold, sans-serif;\r\n\tfont-size: 14px;\r\n    letter-spacing: 1px;\r\n    \r\n    text-transform: uppercase;\r\n}\r\n.main .name{\r\n\tfont-family: Montserrat-Bold, sans-serif;\r\n    font-size: 28px;\r\n    letter-spacing: 2px;\r\n    color: #000;\r\n    text-align: center;\r\n    margin-top: 6px;\r\n    text-transform: uppercase;\r\n}\r\n.main .number{\r\n\tfont-family: Montserrat-SemiBold, sans-serif;\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    color: #c5c5c5;\r\n    text-align: center;\r\n    line-height: 22px;\r\n\r\n}\r\n.infoContainer1{\r\n\twidth: 100%;\r\n    border: 2px dashed #F4F4F4;\r\n    border-radius: 6px;\r\n    margin-top: 48px;\r\n}\r\n.infoContainer1 h1, .infoContainer2 h1{\r\n    font-family: Montserrat-Bold, sans-serif;\r\n    font-size: 36px;\r\n    line-height: 38px;\r\n    color: #565252;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin-bottom: 10px;\r\n    letter-spacing: 4px;\r\n    margin-top: 20px;\r\n}\r\n.infoContainer1 .sprites{\r\n\tmargin: 8px 0px;\r\n}\r\n.infoContainer1 .sprites .sprite{\r\n\tmargin: 0px 6px;\r\n\tbackground: #BBDEFB;\r\n\twidth: 82px;\r\n\theight: 82px;\r\n\tborder-radius: 50%;\r\n}\r\n.infoContainer1 .sprites .sprite.female{\r\n\tbackground: #F8BBD0;\r\n}\r\n.infoContainer1 .sprites .sprite.sMale{\r\n\tbackground-image: -webkit-gradient(linear, left top, right top, from(#74ebd5), to(#9face6));\r\n\tbackground-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);\r\n}\r\n.infoContainer1 .sprites .sprite.sFemale{\r\n\tbackground-image: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);\r\n}\r\n.infoContainer1 .sprites .sprite img{\r\n\twidth: 82px;\r\n\theight: 82px;\r\n}\r\n.infoContainer1 .sprites span{\r\n\twidth: 54px;\r\n    font-family: Montserrat-SemiBold, sans-serif;\r\n    font-size: 12px;\r\n    color: #565252;\r\n    text-transform: uppercase;\r\n}\r\n.infoContainer2{\r\n\twidth: 100%;\r\n    border: 2px solid #F4F4F4;\r\n    border-radius: 6px;\r\n\tmargin: 48px 0px;\r\n}\r\n.infoContainer2 .resume{\r\n\tmargin: 5px 24px 10px 24px;\r\n}\r\n.infoContainer2 .resume .text{\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n    font-size: 12px;\r\n    color: #9c9c9c;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.infoContainer2 .resume .number{\r\n\tfont-family: Montserrat-Bold, sans-serif;\r\n    font-size: 48px;\r\n    color: #212121;\r\n    line-height: 1;\r\n}\r\n.infoContainer2 .power{\r\n\tmargin: 15px;\r\n}\r\n.infoContainer2 .power span{\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n    font-size: 16px;\r\n    color: #9c9c9c;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n}\r\n.infoContainer2 .power span.bold{\r\n\tfont-family: Montserrat-Bold, sans-serif;\r\n\tcolor: #565252;\r\n}\r\n.infoContainer2 .power .graphContainer{\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 14px;\r\n    border-radius: 7px;\r\n\toverflow:hidden;\r\n\tbackground: #ccc;\r\n}\r\n.infoContainer2 .power .graphContainer .graph{\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\twidth: 50%;\r\n\theight: 14px;\r\n\tbackground: #565252;\r\n}\r\n#loading{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tbackground: rgb(255,255,255);\r\n\tz-index: 10;\r\n}\r\n#resultError{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tbackground: rgb(255,255,255);\r\n\tz-index: 9;\r\n}\r\n#resultError span{\r\n\tposition: absolute;\r\n    width: calc(100% - 16px);\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n    text-align: center;\r\n    font-family: Montserrat-SemiBold, sans-serif;\r\n    font-size: 24px;\r\n    letter-spacing: 1px;\r\n    color: rgba(0,0,0,0.4);\r\n    text-transform: uppercase;\r\n}\r\n/*https://codepen.io/raubaca/pen/obaZmG*/\r\n*, *:before, *:after {\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n}\r\n.center-on-page {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%,-50%) scale(0.5);\r\n\t        transform: translate(-50%,-50%) scale(0.5);\r\n}\r\n.pokeball {\r\n\tposition: relative;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tbackground: #fff;\r\n\tborder: 8px solid #000;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\t-webkit-box-shadow: inset -10px 10px 0 10px #ccc;\r\n\t        box-shadow: inset -10px 10px 0 10px #ccc;\r\n\t-webkit-animation: \r\n            shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite;\r\n\t        animation: \r\n            shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite;\r\n}\r\n.pokeball::before,\r\n.pokeball::after {\r\n\tcontent:\"\";\r\n\tposition: absolute;\r\n}\r\n.pokeball::before {\r\n\tbackground: red;\r\n\twidth: 100%;\r\n\theight: 50%;\r\n}\r\n.pokeball::after {\r\n\ttop: calc(50% - 5px);\r\n\twidth: 100%;\r\n\theight: 10px;\r\n\tbackground: #000;\r\n}\r\n.pokeball__button {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: #7f8c8d;\r\n\tborder: 5px solid #fff;\r\n\tborder-radius: 50%;\r\n\tz-index: 10;\r\n\t-webkit-box-shadow: 0 0 0 10px black;\r\n\tbox-shadow: 0 0 0 8px black;\r\n\t-webkit-animation: blink .5s alternate infinite;\r\n\tanimation: blink .5s alternate infinite;\r\n\t-webkit-transform: translate(-50%,-50%);\r\n\t        transform: translate(-50%,-50%);\r\n}\r\n/* Animation */\r\n@-webkit-keyframes blink {\r\n\tfrom { background: #eee;}\r\n\tto { background: #e74c3c; }\r\n}\r\n@keyframes blink {\r\n\tfrom { background: #eee;}\r\n\tto { background: #e74c3c; }\r\n}\r\n@-webkit-keyframes shake {\r\n\t0 { -webkit-transform: translate(0, 0) rotate(0); transform: translate(0, 0) rotate(0); }\r\n\t20% { -webkit-transform: translate(-10px, 0) rotate(-20deg); transform: translate(-10px, 0) rotate(-20deg); }\r\n\t30% { -webkit-transform: translate(10px, 0) rotate(20deg); transform: translate(10px, 0) rotate(20deg); }\r\n\t50% { -webkit-transform: translate(-10px, 0) rotate(-10deg); transform: translate(-10px, 0) rotate(-10deg); }\r\n\t60% { -webkit-transform: translate(10px, 0) rotate(10deg); transform: translate(10px, 0) rotate(10deg); }\r\n\t100% { -webkit-transform: translate(0, 0) rotate(0); transform: translate(0, 0) rotate(0); }\r\n}\r\n@keyframes shake {\r\n\t0 { -webkit-transform: translate(0, 0) rotate(0); transform: translate(0, 0) rotate(0); }\r\n\t20% { -webkit-transform: translate(-10px, 0) rotate(-20deg); transform: translate(-10px, 0) rotate(-20deg); }\r\n\t30% { -webkit-transform: translate(10px, 0) rotate(20deg); transform: translate(10px, 0) rotate(20deg); }\r\n\t50% { -webkit-transform: translate(-10px, 0) rotate(-10deg); transform: translate(-10px, 0) rotate(-10deg); }\r\n\t60% { -webkit-transform: translate(10px, 0) rotate(10deg); transform: translate(10px, 0) rotate(10deg); }\r\n\t100% { -webkit-transform: translate(0, 0) rotate(0); transform: translate(0, 0) rotate(0); }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"btnMenu\" src=\"../assets/images/ic_menu.svg\" (click)=\"ds.setMenuStatus(true)\">\n</div>\n<div class=\"mainContainer\" fxLayout=\"column\" *ngIf=\"current_pokemon\">\n\n  <div fxLayout.gt-xs=\"row\"  fxLayout=\"column\" >\n    <div class=\"main\" fxLayout=\"column\">\n      <div class=\"imageContainer\">\n        <img src=\"{{current_image}}\">\n      </div>\n      <div  fxLayout=\"row\" fxLayoutAlign=\"center none\">\n        <div class=\"type\" *ngFor=\"let type of current_pokemon.types |  orderBy : 'slot' : false\" [ngStyle]=\"{'background': type.type.background, 'color': type.type.color}\">\n          <span>{{type.type.name}}</span>\n        </div>\n      </div>\n      <span class=\"name\">{{current_pokemon.name}}</span>\n      <span class=\"number\">No. {{current_pokemon.id}}</span>\n    </div>\n    <div fxFlex.gt-xs></div>\n    <div class=\"infoContainer1\" fxLayout=\"column\" >\n      <h1>SPRITES</h1>\n      <div class=\"sprites\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"current_pokemon.id != 29 && current_pokemon.id != 30 && current_pokemon.id != 31\">\n        <span>MALE</span>\n        <div class=\"sprite\">\n          <img src=\"{{current_pokemon.sprites.front_default}}\">\n        </div>\n        <div class=\"sprite\">\n          <img src=\"{{current_pokemon.sprites.back_default}}\">\n        </div>\n      </div>\n      <div class=\"sprites\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"current_pokemon.id != 32 && current_pokemon.id != 33 && current_pokemon.id != 34\">\n        <span>Female</span>\n        <div class=\"sprite female\">\n          <img src=\"{{(current_pokemon.sprites.front_female)?current_pokemon.sprites.front_female:current_pokemon.sprites.front_default}}\">\n        </div>\n        <div class=\"sprite female\">\n          <img src=\"{{(current_pokemon.sprites.back_female)?current_pokemon.sprites.back_female:current_pokemon.sprites.back_default}}\">\n        </div>\n      </div>\n      <div class=\"sprites\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"current_pokemon.id != 29 && current_pokemon.id != 30 && current_pokemon.id != 31\">\n        <span>MALE shiny</span>\n        <div class=\"sprite sMale\">\n          <img src=\"{{current_pokemon.sprites.front_shiny}}\">\n        </div>\n        <div class=\"sprite sMale\">\n          <img src=\"{{current_pokemon.sprites.back_shiny}}\">\n        </div>\n      </div>\n      <div class=\"sprites\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"current_pokemon.id != 32 && current_pokemon.id != 33 && current_pokemon.id != 34\">\n        <span>female shiny</span>\n        <div class=\"sprite sFemale\">\n          <img src=\"{{(current_pokemon.sprites.front_shiny_female)?current_pokemon.sprites.front_shiny_female:current_pokemon.sprites.front_shiny}}\">\n        </div>\n        <div class=\"sprite sFemale\">\n          <img src=\"{{(current_pokemon.sprites.back_shiny_female)?current_pokemon.sprites.back_shiny_female:current_pokemon.sprites.back_shiny}}\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"infoContainer2\" fxLayout=\"column\" >\n    <h1>Base stats</h1>\n    <div fxLayout.gt-xs=\"row\"  fxLayout=\"column\" fxLayoutAlign.gt-xs=\"center none\" fxLayoutAlign=\"none center\"> \n      <div class=\"resume\" fxLayout=\"column\" >\n        <span class=\"text\">Weight</span>\n        <span class=\"number\" [ngStyle]=\"{'color': current_pokemon.types[0].type.background}\">{{current_pokemon.weight/10}}kg</span>\n      </div>\n      <div class=\"resume\" fxLayout=\"column\" >\n        <span class=\"text\">Height</span>\n        <span class=\"number\" [ngStyle]=\"{'color': current_pokemon.types[0].type.background}\">{{current_pokemon.height/10}}m</span>\n      </div>\n      <div class=\"resume\" fxLayout=\"column\" >\n        <span class=\"text\">Base experience</span>\n        <span class=\"number\" [ngStyle]=\"{'color': current_pokemon.types[0].type.background}\">{{current_pokemon.base_experience}}xp</span>\n      </div>\n    </div>\n    <div fxLayout=\"column\" class=\"power\" *ngFor=\"let stat of current_pokemon.stats\">\n      <span>{{stat.stat.name}}: <span class=\"bold\">{{stat.base_stat}}</span></span>\n      <div class=\"graphContainer\">\n        <div class=\"graph\" [ngStyle]=\"{'width': stat.percent+'%'}\"></div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div id=\"loading\" *ngIf=\"isLoading\" [@fade]>\n  <div class=\"center-on-page\">\n  \n    <div class=\"pokeball\">\n      <div class=\"pokeball__button\"></div>\n    </div>\n    \n  </div>\n</div>\n<div id=\"resultError\" *ngIf=\"isError\">\n  <span>Error 404<br>Pokémon not found</span>\n</div>"

/***/ }),

/***/ "./src/app/components/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(ds, trans) {
        this.ds = ds;
        this.trans = trans;
        //Shows the pokeball's loading view;
        this.isLoading = true;
        this.isError = false;
        var param = trans.params();
        this.current_pokemon = null;
        this.current_image = "";
        this.loadPokemonData(param.name);
    }
    //Consumew the service to obtain the detail of the pokémon
    DetailComponent.prototype.loadPokemonData = function (name) {
        var _this = this;
        this.subscription = this.ds
            .getPokemon(name)
            .subscribe(function (res) {
            //Hides the main loading view if required;
            _this.ds.setLoadingStatus(false);
            //Timeout for animation
            setTimeout(function () {
                //Sets the pokémon object
                _this.current_pokemon = res;
                //Uses of the types dictionary to set colorsand backgrounds according to the name of the pokemon type
                for (var _i = 0, _a = _this.current_pokemon.types; _i < _a.length; _i++) {
                    var type_data = _a[_i];
                    type_data.type.background = _this.ds.types['' + type_data.type.name].bg;
                    type_data.type.color = _this.ds.types['' + type_data.type.name].cr;
                }
                //Calculates the percentage of stats points according to the maximum number.
                for (var _b = 0, _c = _this.current_pokemon.stats; _b < _c.length; _b++) {
                    var stat = _c[_b];
                    stat.percent = parseInt("" + ((stat.base_stat / 252) * 100));
                }
                //Sets the current index for show it in the side bar if required
                _this.ds.setCurrentIndex(_this.current_pokemon.id - 1);
                //Uses a service to get large images of the pokémon selected according to its id
                _this.current_image = "https://pokeres.bastionbot.org/images/pokemon/" + _this.current_pokemon.id + ".png";
                //Hides the pokeball's loading view;
                _this.isLoading = false;
            }, 300);
        }, function (err) {
            if (err.status == 404) {
                //Hides the main loading view if required;
                _this.ds.setLoadingStatus(false);
                //Timeout for animation
                setTimeout(function () {
                    _this.ds.currentIndex = null;
                    //Shows the error message
                    _this.isError = true;
                    //Hides the pokeball's loading view;
                    _this.isLoading = false;
                }, 300);
            }
        });
    };
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'detail',
            template: __webpack_require__("./src/app/components/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/components/detail/detail.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: '0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(500)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: '0' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["Transition"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/components/empty/empty.component.css":
/***/ (function(module, exports) {

module.exports = ".no-pokemon{\r\n\tposition: absolute;\r\n\twidth: calc(100% - 16px);\r\n\ttop:50%;\r\n\tleft: 50%;\t\r\n\t-webkit-transform: translate(-50%,-50%);\t\r\n\t        transform: translate(-50%,-50%);\r\n\ttext-align: center;\r\n\tfont-family: Montserrat-SemiBold, sans-serif;\r\n    font-size: 24px;\r\n    letter-spacing: 1px;\r\n    color: rgba(0,0,0,0.3);\r\n    -webkit-transition: all 0.2s linear;\r\n    transition: all 0.2s linear;\r\n\r\n}\r\n.btnMenu{\r\n\tposition: relative;\r\n\twidth: 36px;\r\n    height: 36px;\r\n    margin: 32px 0px 0px 24px;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n    -webkit-transition: opacity 0.15s linear;\r\n    transition: opacity 0.15s linear;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/components/empty/empty.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"no-pokemon\" >CHOOSE A POKÉMON</span>\n<div>\n\t<img class=\"btnMenu\" src=\"../assets/images/ic_menu.svg\" (click)=\"ds.setMenuStatus(true)\">\n</div>"

/***/ }),

/***/ "./src/app/components/empty/empty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyComponent = /** @class */ (function () {
    function EmptyComponent(ds) {
        this.ds = ds;
    }
    EmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty',
            template: __webpack_require__("./src/app/components/empty/empty.component.html"),
            styles: [__webpack_require__("./src/app/components/empty/empty.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.side{\r\n\tposition: absolute;\r\n\twidth: 200px;\r\n\theight: 100%;\r\n\ttop: 0px;\r\n\tbackground: #565252;\r\n\tbottom: 0px;\r\n\tleft: 0px;\r\n\tz-index: 4;\r\n\t-webkit-transform: translate(-100%, 0px);\r\n\t        transform: translate(-100%, 0px);\r\n\t-webkit-transition: all 0.25s linear;\r\n\ttransition: all 0.25s linear;\t\r\n}\r\n.side.open{\r\n\t-webkit-transform: translate(0, 0px)!important;\r\n\t        transform: translate(0, 0px)!important;\r\n}\r\n.side .header{\r\n\theight: 64px;\r\n\tmin-height: 64px;\r\n\tbackground: #343030;\r\n\t-webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12);\r\n\t        box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12);\r\n\tz-index: 6;\r\n}\r\n.side .header img{\r\n\theight: 36px;\r\n    width: 36px;\r\n    margin-right: 6px;\r\n    margin-left: 16px;\r\n}\r\n.side .header span{\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n\tfont-size: 24px;\r\n\tcolor: #fff;\r\n}\r\n.side .itemsContainer{\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tz-index: 5;\r\n}\r\n.side .itemsContainer .item{\r\n\twidth: 100%;\r\n\tpadding: 8px 16px;\r\n\t-webkit-transition: background 0.2s linear;\r\n\ttransition: background 0.2s linear;\r\n\tcursor: pointer;\r\n}\r\n.side .itemsContainer .item:first-child{\r\n\tmargin-top: 8px;\r\n}\r\n.side .itemsContainer .item:hover{\r\n\tbackground:rgba(0,0,0,0.15);\r\n}\r\n.side .itemsContainer .item.selected{\r\n\tbackground:rgba(0,0,0,0.3);\r\n}\r\n.side .itemsContainer .item .number{\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n\tfont-size: 12px;\r\n\tcolor: rgba(255,255,255,0.25);\r\n\tmargin-right: 16px;\r\n\twidth: 30px;\r\n\ttext-align: right;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n}\r\n.side .itemsContainer .item .name{\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n\tfont-size: 12px;\r\n\tcolor: #fff;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/side-bar/side.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side\" fxLayout=\"column\"  [ngClass]=\"{'open': ds.isOpenMenu}\">\n  <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"none center\">\n    <img src=\"../assets/images/pokeball.png\" (click)=\"loadData()\">\n    <span>POKÉDEX</span>\n  </div>\n  <div fxFlex class=\"itemsContainer\">\n    <div *ngFor=\"let item of pokemon_response.results; let i = index\" class=\"item\" fxLayout=\"row\" (click)=\"loadPokemonPage(item.name, i)\" [ngClass]=\"{'selected': ds.currentIndex == i}\" [id]=\"'poke-' + i\">\n      <span class=\"number\">{{i+1}}</span>\n      <span class=\"name\">{{item.name}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/side-bar/side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pokemon_response__ = __webpack_require__("./src/app/models/pokemon_response.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;



var SideComponent = /** @class */ (function () {
    function SideComponent(ds, $state) {
        this.ds = ds;
        this.$state = $state;
        this.pokemon_response = new __WEBPACK_IMPORTED_MODULE_1__models_pokemon_response__["a" /* Pokemon_response */]([]);
        this.loadListData();
    }
    SideComponent.prototype.loadListData = function () {
        var _this = this;
        //Consumes the service to obtain the pokémon list
        this.subscription = this.ds
            .getPokemonList()
            .subscribe(function (res) {
            _this.pokemon_response = res;
            setTimeout(function () {
                _this.ds.setLoadingStatus(false);
            }, 500);
        });
    };
    SideComponent.prototype.loadPokemonPage = function (name, index) {
        //Sets the current index for show it in the side bar
        this.ds.currentIndex = index;
        this.ds.setMenuStatus(false);
        //Loads the pokemon detail view
        this.$state.go("detail", { name: name });
    };
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'side',
            template: __webpack_require__("./src/app/components/side-bar/side.component.html"),
            styles: [__webpack_require__("./src/app/components/side-bar/side.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ opacity: '0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(500)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ opacity: '0' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__["StateService"]])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_async_cache__ = __webpack_require__("./node_modules/angular-async-cache/fesm5/angular-async-cache.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, asyncCache, memoryDriver, _scrollToService) {
        this.http = http;
        this.asyncCache = asyncCache;
        this.memoryDriver = memoryDriver;
        this._scrollToService = _scrollToService;
        this._pokemon_response = null;
        //Initial state
        this.isOpenMenu = false;
        this.isMainLoading = true;
        this.currentIndex = null;
        //Dictionary of pokémon types
        this.types = {
            "normal": {
                "bg": "#BDBDBD",
                "cr": "#212121"
            },
            "fighting": {
                "bg": "#B71C1C",
                "cr": "#FFFFFF"
            },
            "flying": {
                "bg": "#A890F0",
                "cr": "#212121"
            },
            "poison": {
                "bg": "#673AB7",
                "cr": "#FFFFFF"
            },
            "ground": {
                "bg": "#E0C068",
                "cr": "#212121"
            },
            "rock": {
                "bg": "#795548",
                "cr": "#FFFFFF"
            },
            "bug": {
                "bg": "#CDDC39",
                "cr": "#212121"
            },
            "ghost": {
                "bg": "#3F51B5",
                "cr": "#FFFFFF"
            },
            "steel": {
                "bg": "#607D8B",
                "cr": "#FFFFFF"
            },
            "fire": {
                "bg": "#F44336",
                "cr": "#FFFFFF"
            },
            "water": {
                "bg": "#2196F3",
                "cr": "#212121"
            },
            "grass": {
                "bg": "#00C853",
                "cr": "#212121"
            },
            "electric": {
                "bg": "#FFC107",
                "cr": "#212121"
            },
            "psychic": {
                "bg": "#E91E63",
                "cr": "#FFFFFF"
            },
            "ice": {
                "bg": "#4FC3F7",
                "cr": "#212121"
            },
            "dragon": {
                "bg": "#5C6BC0",
                "cr": "#FFFFFF"
            },
            "dark": {
                "bg": "#212121",
                "cr": "#FFFFFF"
            },
            "fairy": {
                "bg": "#F48FB1",
                "cr": "#212121"
            }
        };
    }
    //Return the pokémon list.
    DataService.prototype.getPokemonList = function () {
        var resp$ = this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=150');
        return this.asyncCache.wrap(resp$, 'https://pokeapi.co/api/v2/pokemon/?limit=150', {
            driver: this.memoryDriver // override the default and cache the data in memory
        });
    };
    //Returns the pokémon data according to its id
    DataService.prototype.getPokemon = function (name) {
        var resp$ = this.http.get("https://pokeapi.co/api/v2/pokemon/" + name + "/");
        return this.asyncCache.wrap(resp$, "https://pokeapi.co/api/v2/pokemon/" + name + "/", {
            driver: this.memoryDriver // override the default and cache the data in memory
        });
    };
    //Loading View Control
    DataService.prototype.setLoadingStatus = function (bool) {
        this.isMainLoading = bool;
    };
    //Menu View Control
    DataService.prototype.setMenuStatus = function (bool) {
        this.isOpenMenu = bool;
    };
    //Scrolls to the pokemon name in the list
    DataService.prototype.setCurrentIndex = function (index) {
        if (this.currentIndex == null) {
            var config = {
                target: 'poke-' + index,
                duration: 300,
                easing: 'easeOutElastic',
                offset: -6
            };
            this._scrollToService.scrollTo(config);
        }
        this.currentIndex = index;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angular_async_cache__["a" /* AsyncCache */], __WEBPACK_IMPORTED_MODULE_3_angular_async_cache__["e" /* MemoryDriver */], __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/models/pokemon_response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pokemon_response; });
/* unused harmony export Pokemon_data */
var Pokemon_response = /** @class */ (function () {
    function Pokemon_response(results) {
        this.results = results;
    }
    return Pokemon_response;
}());

var Pokemon_data = /** @class */ (function () {
    function Pokemon_data(url, name) {
        this.url = url;
        this.name = name;
    }
    return Pokemon_data;
}());



/***/ }),

/***/ "./src/app/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerConfigFn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core__ = __webpack_require__("./node_modules/@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uirouter_core__);

function routerConfigFn(router) {
    var transitionService = router.transitionService;
    router.trace.enable(__WEBPACK_IMPORTED_MODULE_0__uirouter_core__["Category"].TRANSITION);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map