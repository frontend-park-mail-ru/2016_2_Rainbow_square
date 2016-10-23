/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _router = __webpack_require__(2);

	'use strict';
	var MainMenuView = window.MainMenuView;
	var LoginView = window.LoginView;
	var SinglePlayerView = window.SinglePlayerView;
	var MainView = window.MainView;

	window.onload = function () {
	  new _router.Router().addRoute('/mainMenu', MainMenuView).addRoute('/login', LoginView).addRoute('/register', RegisterView).addRoute('/singlePlayer', SinglePlayerView).addRoute('/', MainView).start();
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Route = window.Route;

	/** Класс роутера */

	var Router = function () {
		/**
	  * Создаёт новый роутер или возвращает уже созданный инстанс
	  */
		function Router() {
			_classCallCheck(this, Router);

			if (Router.__instance) {
				return Router.__instance;
			}

			this.routes = [];
			this.activeRoute = null;

			this.history = window.history;

			Router.__instance = this;
		}

		/**
	  * Добавляет новый Route в роутер
	  * @param {string} pathname - Шаблон пути
	  * @param {View} view - Класс конкретной View
	  * @param {Object} [options={}] - Дополнительные параметры, которые будут переданы во view при её создании и инициализации
	  * @returns {Router}
	  */


		_createClass(Router, [{
			key: 'addRoute',
			value: function addRoute(pathname, view) {
				var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				var route = new Route(pathname, view, options);
				route.setRouter(this);
				this.routes.push(route);
				return this;
			}

			/**
	   * Запускает роутер и переходит по текущему пути в приложении
	   * @param {Object} [state={}] - Объект state, который передаётся в первый вызов onroute
	   */

		}, {
			key: 'start',
			value: function start() {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				window.onpopstate = function (event) {
					var state = event.state;
					var pathname = window.location.pathname;
					this.onroute(pathname, state);
				}.bind(this);

				var pathname = window.location.pathname;
				this.onroute(pathname, state);
			}

			/**
	   * Функция, вызываемая при переходе на новый роут в приложении
	   * @param {string} pathname - Путь, по которому происходит переход
	   * @param {Object} [state={}] - Объект state, который передаётся в вызов метода navigate
	   */

		}, {
			key: 'onroute',
			value: function onroute(pathname) {
				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var route = this.routes.find(function (route) {
					return route.match(pathname);
				});
				if (!route) {
					return;
				}

				if (this.activeRoute) {
					this.activeRoute.leave();
				}

				this.activeRoute = route;
				this.activeRoute.navigate(pathname, state);
			}

			/**
	   * Программный переход на новый путь
	   * @param {string} pathname - Путь
	   * @param {Object} [state={}] - Объект state, который передаётся в вызов history.pushState
	   */

		}, {
			key: 'go',
			value: function go(pathname) {
				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (window.location.pathname === pathname) {
					return;
				}
				this.history.pushState(state, '', pathname);
				this.onroute(pathname, state);
			}

			/**
	   * Позволяет установить свою собственную реализацию History API
	   * @param {Object} history - должен предоставлять реализацию методов back(), forward(), pushState()
	   */

		}, {
			key: 'setHistory',
			value: function setHistory(history) {
				this.history = history;
			}

			/**
	   * Возврат на один шаг назад в истории браузера
	   */

		}, {
			key: 'back',
			value: function back() {
				this.history.back();
			}

			/**
	   * Переход на один шаг вперёд в истории браузера
	   */

		}, {
			key: 'forward',
			value: function forward() {
				this.history.forward();
			}
		}]);

		return Router;
	}();

	// export
	//window.Router = Router;

	exports.Router = Router;

/***/ }
/******/ ]);