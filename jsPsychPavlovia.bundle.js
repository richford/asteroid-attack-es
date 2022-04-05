/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/jsPsychPavlovia.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable */

/**
 * jsPsych plugin (version > 7.0) for pavlovia.org
 *
 * This plugin handles communications with the pavlovia.org server: it opens and closes sessions,
 * and uploads data to the server.
 *
 * @author Alain Pitiot
 * @version 2022.1.1
 * @copyright (c) 2017-2020 Ilixa Ltd. (http://ilixa.com) (c) 2020-2021 Open Science Tools Ltd.
 *   (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 *
 * With edits by: Adam Richie-Halford <richiehalford@gmail.com>
 */

/**
 * **pavlovia**
 *
 * This plugin handles communications with the pavlovia.org server: it opens and closes sessions,
 * and uploads data to the server.
 *
 * @author Alain Pitiot
 * @see {@link https://pavlovia.org/docs/experiments/create-jsPsych Running jsPsych experiments from Pavlovia}
 *
 * With edits by: Adam Richie-Halford <richiehalford@gmail.com>
 */
var PavloviaPlugin = /*#__PURE__*/function () {
  function PavloviaPlugin(jsPsych) {
    _classCallCheck(this, PavloviaPlugin);

    this._jsPsych = jsPsych;
  }
  /**
   * Run the plugin.
   *
   * @param {HTMLElement} display_element - the HTML DOM element where jsPsych content
   * 	is rendered
   * @param {Object} trial - the jsPsych trial
   * @public
   */


  _createClass(PavloviaPlugin, [{
    key: "trial",
    value: function () {
      var _trial2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(display_element, _trial) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _trial.command.toLowerCase();
                _context.next = _context.t0 === 'init' ? 3 : _context.t0 === 'finish' ? 6 : 10;
                break;

              case 3:
                _context.next = 5;
                return this._init(_trial);

              case 5:
                return _context.abrupt("break", 11);

              case 6:
                data = this._jsPsych.data.get().csv();
                _context.next = 9;
                return this._finish(_trial, data);

              case 9:
                return _context.abrupt("break", 11);

              case 10:
                _trial.errorCallback('unknown command: ' + _trial.command);

              case 11:
                // end trial
                this._jsPsych.finishTrial();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function trial(_x, _x2) {
        return _trial2.apply(this, arguments);
      }

      return trial;
    }()
    /**
     * The default error callback function.
     *
     * Error messages are displayed in the body of the document and in the browser's console.
     *
     * @param {Object} error - the error json object to be displayed.
     * @public
     */

  }, {
    key: "_init",
    value:
    /**
     * Initialise the connection with pavlovia.org: configure the plugin and open a new session.
     *
     * @param {Object} trial - the jsPsych trial
     * @param {string} [configURL= "config.json"] - the URL of the pavlovia.org json configuration file
     * @returns {Promise<void>}
     * @private
     */
    function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(trial) {
        var _this = this;

        var configURL,
            response,
            _beforeunloadCallback,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                configURL = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'config.json';
                _context2.prev = 1;
                _context2.next = 4;
                return this._configure(configURL);

              case 4:
                response = _context2.sent;
                PavloviaPlugin._config = response.config;

                this._log('init | _configure.response=', response); // open a new session:


                _context2.next = 9;
                return this._openSession();

              case 9:
                response = _context2.sent;

                // _config.experiment.token = response.token;
                this._log('init | _openSession.response=', response); // warn the user when they attempt to close the tab or browser:


                _beforeunloadCallback = function _beforeunloadCallback(event) {
                  // preventDefault should ensure that the user gets prompted:
                  event.preventDefault(); // Chrome requires returnValue to be set:

                  event.returnValue = '';
                };

                window.addEventListener('beforeunload', _beforeunloadCallback); // when the user closes the tab or browser, we attempt to close the session
                // and optionally save the results
                // note: we communicate with the server using the Beacon API

                window.addEventListener('unload', function (event) {
                  if (PavloviaPlugin._config.session.status === 'OPEN') {
                    // get and save the incomplete results if need be:
                    if (PavloviaPlugin._config.experiment.saveIncompleteResults) {
                      var data = _this._jsPsych.data.get().csv();

                      _this._save(trial, data, true);
                    } // close the session:


                    _this._closeSession(false, true);
                  }
                });
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](1);
                trial.errorCallback(_context2.t0);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 16]]);
      }));

      function _init(_x3) {
        return _init2.apply(this, arguments);
      }

      return _init;
    }()
    /**
     * Finish the connection with pavlovia.org: upload the collected data and close the session.
     *
     * @param {Object} trial - the jsPsych trial
     * @param {Object} data - the experiment data to be uploaded
     * @returns {Promise<void>}
     * @private
     */

  }, {
    key: "_finish",
    value: function () {
      var _finish2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(trial, data) {
        var msg, displayElement, sync, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                // remove the beforeunload listener:
                window.removeEventListener('beforeunload', PavloviaPlugin._beforeunloadCallback); // tell the participant that the data is being uploaded:

                msg = 'Please wait a moment while the data are uploaded to the pavlovia.org server...';
                displayElement = this._jsPsych.getDisplayElement();
                displayElement.innerHTML = '<pre id="pavlovia-data-upload"></pre>';
                document.getElementById('pavlovia-data-upload').textContent = msg; // upload the data to pavlovia.org:

                sync = typeof trial.sync !== 'undefined' ? trial.sync : false;
                _context3.next = 9;
                return this._save(trial, data, sync);

              case 9:
                response = _context3.sent;

                this._log('finish | _save.response=', response); // check for errors:


                if (!('serverData' in response && 'error' in response.serverData)) {
                  _context3.next = 13;
                  break;
                }

                throw response.serverData;

              case 13:
                _context3.next = 15;
                return this._closeSession(true, false);

              case 15:
                response = _context3.sent;

                this._log('finish | _closeSession.response=', response);

                _context3.next = 22;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](0);
                trial.errorCallback(_context3.t0);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19]]);
      }));

      function _finish(_x4, _x5) {
        return _finish2.apply(this, arguments);
      }

      return _finish;
    }()
    /**
     * Configure the plugin by reading the configuration file created upon activation
     * of the experiment.
     *
     * @param {string} [configURL= "config.json"] - the URL of the pavlovia.org json
     * 	configuration file
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_configure",
    value: function () {
      var _configure2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(configURL) {
        var response, configurationResponse, urlQuery, urlParameters;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                response = {
                  origin: '_configure',
                  context: 'when configuring the plugin'
                };
                _context4.prev = 1;
                _context4.next = 4;
                return this._getConfiguration(configURL);

              case 4:
                configurationResponse = _context4.sent;

                // legacy experiments had a psychoJsManager block instead of a pavlovia block, and the URL
                // pointed to https://pavlovia.org/server
                if ('psychoJsManager' in configurationResponse.config) {
                  delete configurationResponse.config.psychoJsManager;
                  configurationResponse.config.pavlovia = {
                    URL: 'https://pavlovia.org'
                  };
                } // tests for the presence of essential blocks in the configuration:


                if ('experiment' in configurationResponse.config) {
                  _context4.next = 8;
                  break;
                }

                throw 'missing experiment block in configuration';

              case 8:
                if ('name' in configurationResponse.config.experiment) {
                  _context4.next = 10;
                  break;
                }

                throw 'missing name in experiment block in configuration';

              case 10:
                if ('fullpath' in configurationResponse.config.experiment) {
                  _context4.next = 12;
                  break;
                }

                throw 'missing fullpath in experiment block in configuration';

              case 12:
                if ('pavlovia' in configurationResponse.config) {
                  _context4.next = 14;
                  break;
                }

                throw 'missing pavlovia block in configuration';

              case 14:
                if ('URL' in configurationResponse.config.pavlovia) {
                  _context4.next = 16;
                  break;
                }

                throw 'missing URL in pavlovia block in configuration';

              case 16:
                // get the server parameters (those starting with a double underscore):
                urlQuery = window.location.search.slice(1);
                urlParameters = new URLSearchParams(urlQuery);
                urlParameters.forEach(function (value, key) {
                  if (key.indexOf('__') === 0) {
                    PavloviaPlugin._serverMsg.set(key, value);
                  }
                });
                return _context4.abrupt("return", configurationResponse);

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](1);
                throw _objectSpread(_objectSpread({}, response), {}, {
                  error: _context4.t0
                });

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 22]]);
      }));

      function _configure(_x6) {
        return _configure2.apply(this, arguments);
      }

      return _configure;
    }()
    /**
     * Get the pavlovia.org json configuration file.
     *
     * @param {string} configURL - the URL of the pavlovia.org json configuration file
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_getConfiguration",
    value: function _getConfiguration(configURL) {
      var response = {
        origin: '_getConfiguration',
        context: 'when reading the configuration file: ' + configURL
      };
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
          var serverResponse, serverData;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return fetch(configURL, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer'
                  });

                case 3:
                  serverResponse = _context5.sent;
                  _context5.next = 6;
                  return serverResponse.json();

                case 6:
                  serverData = _context5.sent;
                  resolve(_objectSpread(_objectSpread({}, response), {}, {
                    config: serverData
                  }));
                  _context5.next = 14;
                  break;

                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5["catch"](0);
                  console.error(_context5.t0);
                  reject(_objectSpread(_objectSpread({}, response), {}, {
                    error: _context5.t0
                  }));

                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[0, 10]]);
        }));

        return function (_x7, _x8) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * Open a new session for this experiment on pavlovia.org.
     *
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_openSession",
    value: function _openSession() {
      var response = {
        origin: '_openSession',
        context: 'when opening a session for experiment: ' + PavloviaPlugin._config.experiment.fullpath
      }; // prepare a POST query:

      var formData = new FormData();

      if (PavloviaPlugin._serverMsg.has('__pilotToken')) {
        formData.append('pilotToken', PavloviaPlugin._serverMsg.get('__pilotToken'));
      } // query pavlovia server:


      return new Promise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
          var url, serverResponse, serverData;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  url = "".concat(PavloviaPlugin._config.pavlovia.URL, "/api/v2/experiments/").concat(PavloviaPlugin._config.gitlab.projectId, "/sessions");
                  _context6.prev = 1;
                  _context6.next = 4;
                  return fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: formData
                  });

                case 4:
                  serverResponse = _context6.sent;
                  _context6.next = 7;
                  return serverResponse.json();

                case 7:
                  serverData = _context6.sent;

                  // check for required attributes:
                  if (!('token' in serverData)) {
                    reject(Object.assign(response, {
                      error: 'unexpected answer from server: no token'
                    }));
                  }

                  if (!('experiment' in serverData)) {
                    reject(Object.assign(response, {
                      error: 'unexpected answer from server: no experiment'
                    }));
                  } // update the configuration:


                  PavloviaPlugin._config.session = {
                    token: serverData.token,
                    status: 'OPEN'
                  };
                  PavloviaPlugin._config.experiment.status = serverData.experiment.status2;
                  PavloviaPlugin._config.experiment.saveFormat = Symbol["for"](serverData.experiment.saveFormat);
                  PavloviaPlugin._config.experiment.saveIncompleteResults = serverData.experiment.saveIncompleteResults;
                  PavloviaPlugin._config.experiment.license = serverData.experiment.license;
                  PavloviaPlugin._config.runMode = serverData.experiment.runMode;
                  resolve(Object.assign(response, {
                    token: serverData.token,
                    status: serverData.experiment.status2
                  }));
                  _context6.next = 23;
                  break;

                case 19:
                  _context6.prev = 19;
                  _context6.t0 = _context6["catch"](1);
                  console.error(_context6.t0);
                  reject(_objectSpread(_objectSpread({}, response), {}, {
                    error: _context6.t0
                  }));

                case 23:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[1, 19]]);
        }));

        return function (_x9, _x10) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    /**
     * Close the previously opened session on pavlovia.org.
     *
     * @param {boolean} isCompleted - whether or not the participant completed the experiment
     * @param {boolean} [sync = false] - whether or not to use the Beacon API to communicate
     * 	with the server
     * @private
     */

  }, {
    key: "_closeSession",
    value: function _closeSession() {
      var isCompleted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var response = {
        origin: '_closeSession',
        context: 'when closing the session for experiment: ' + PavloviaPlugin._config.experiment.fullpath
      }; // prepare a DELETE query:

      var url = PavloviaPlugin._config.pavlovia.URL + '/api/v2/experiments/' + PavloviaPlugin._config.gitlab.projectId + '/sessions/' + PavloviaPlugin._config.session.token;
      var formData = new FormData();
      formData.append('isCompleted', isCompleted); // synchronously query the pavlovia server:

      if (sync) {
        navigator.sendBeacon(url + '/delete', formData);
        PavloviaPlugin._config.session.status = 'CLOSED';
      } else {
        // asynchronously query the pavlovia server:
        return new Promise( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
            var serverResponse, serverData;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return fetch(url, {
                      method: 'DELETE',
                      mode: 'cors',
                      cache: 'no-cache',
                      credentials: 'same-origin',
                      redirect: 'follow',
                      referrerPolicy: 'no-referrer',
                      body: formData
                    });

                  case 3:
                    serverResponse = _context7.sent;
                    _context7.next = 6;
                    return serverResponse.json();

                  case 6:
                    serverData = _context7.sent;
                    PavloviaPlugin._config.session.status = 'CLOSED';
                    resolve(Object.assign(response, {
                      serverData: serverData
                    }));
                    _context7.next = 15;
                    break;

                  case 11:
                    _context7.prev = 11;
                    _context7.t0 = _context7["catch"](0);
                    console.error(_context7.t0);
                    reject(_objectSpread(_objectSpread({}, response), {}, {
                      error: _context7.t0
                    }));

                  case 15:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, null, [[0, 11]]);
          }));

          return function (_x11, _x12) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    }
    /**
     * Upload data to the pavlovia.org server.
     *
     * @param {Object} trial - the jsPsych trial
     * @param {string} data - the experiment data to be uploaded
     * @param {boolean} [sync = false] - whether or not to use the Beacon API to communicate
     * 	with the server
     * @return {Promise<any>}
     * @private
     */

  }, {
    key: "_save",
    value: function () {
      var _save2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(trial, data) {
        var sync,
            date,
            dateString,
            key,
            filteredData,
            _args8 = arguments;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                sync = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : false;
                date = new Date();
                dateString = date.getFullYear() + '-' + ('0' + (1 + date.getMonth())).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + '_';
                dateString += ('0' + date.getHours()).slice(-2) + 'h' + ('0' + date.getMinutes()).slice(-2) + '.' + ('0' + date.getSeconds()).slice(-2) + '.' + date.getMilliseconds();
                key = PavloviaPlugin._config.experiment.name + '_' + trial.participantId + '_' + 'SESSION' + '_' + dateString + '.csv';
                filteredData = trial.dataFilter(data);

                if (!(PavloviaPlugin._config.experiment.status === 'RUNNING' && !PavloviaPlugin._serverMsg.has('__pilotToken'))) {
                  _context8.next = 12;
                  break;
                }

                _context8.next = 9;
                return this._uploadData(key, filteredData, sync);

              case 9:
                return _context8.abrupt("return", _context8.sent);

              case 12:
                this._offerDataForDownload(key, filteredData, 'text/csv');

                return _context8.abrupt("return", {
                  origin: '_save',
                  context: 'when saving results for experiment: ' + PavloviaPlugin._config.experiment.fullpath,
                  message: 'offered the .csv file for download'
                });

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _save(_x13, _x14) {
        return _save2.apply(this, arguments);
      }

      return _save;
    }()
    /**
     * Upload data (a key/value pair) to pavlovia.org.
     *
     * @param {string} key - the key
     * @param {string} value - the value
     * @param {boolean} [sync = false] - whether or not to upload the data using the Beacon API
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_uploadData",
    value: function _uploadData(key, value) {
      var sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var response = {
        origin: '_uploadData',
        context: "when uploading participant' results for experiment: " + PavloviaPlugin._config.experiment.fullpath
      };
      var url = PavloviaPlugin._config.pavlovia.URL + '/api/v2/experiments/' + PavloviaPlugin._config.gitlab.projectId + '/sessions/' + PavloviaPlugin._config.session.token + '/results';
      var formData = new FormData();
      formData.append('key', key);
      formData.append('value', value); // synchronous query the pavlovia server:

      if (sync) {
        navigator.sendBeacon(url, formData);
      } // asynchronously query the pavlovia server:
      else {
        return new Promise( /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
            var serverResponse, serverData;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return fetch(url, {
                      method: 'POST',
                      mode: 'cors',
                      cache: 'no-cache',
                      credentials: 'same-origin',
                      redirect: 'follow',
                      referrerPolicy: 'no-referrer',
                      body: formData
                    });

                  case 3:
                    serverResponse = _context9.sent;
                    _context9.next = 6;
                    return serverResponse.json();

                  case 6:
                    serverData = _context9.sent;
                    resolve(Object.assign(response, {
                      serverData: serverData
                    }));
                    _context9.next = 14;
                    break;

                  case 10:
                    _context9.prev = 10;
                    _context9.t0 = _context9["catch"](0);
                    console.error(_context9.t0);
                    reject(_objectSpread(_objectSpread({}, response), {}, {
                      error: _context9.t0
                    }));

                  case 14:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, null, [[0, 10]]);
          }));

          return function (_x15, _x16) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
    }
    /**
     * Log messages to the browser's console.
     *
     * @param {...*} messages - the messages to be displayed in the browser's console
     * @private
     */

  }, {
    key: "_log",
    value: function _log() {
      var _console;

      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ['[pavlovia ' + PavloviaPlugin.version + ']'].concat(messages));
    }
    /**
     * Offer data as download in the browser.
     *
     * @param {string} filename - the name of the file to be downloaded
     * @param {*} data - the data
     * @param {string} type - the MIME type of the data, e.g. 'text/csv' or 'application/json'
     * @private
     */

  }, {
    key: "_offerDataForDownload",
    value: function _offerDataForDownload(filename, data, type) {
      var blob = new Blob([data], {
        type: type
      });

      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    }
  }], [{
    key: "defaultErrorCallback",
    value: function defaultErrorCallback(error) {
      // output the error to the console:
      console.error('[pavlovia ' + PavloviaPlugin.version + ']', error); // output the error to the html body:

      var htmlCode = '<h3>[jspsych-pavlovia plugin ' + PavloviaPlugin.version + '] Error</h3><ul>';

      while (true) {
        if (_typeof(error) === 'object' && 'context' in error) {
          htmlCode += '<li>' + error.context + '</li>';
          error = error.error;
        } else {
          htmlCode += '<li><b>' + error + '</b></li>';
          break;
        }
      }

      htmlCode += '</ul>';
      document.querySelector('body').innerHTML = htmlCode;
    }
    /**
     * The default data filter, applied to the data gathered by jsPsych, before they are
     * uploaded to the server.
     *
     * The filter typically prunes and reformat jsPsych.data.get().csv().
     *
     * @param {Object} data - input data, typically from jsPsych.data.get().csv()
     * @returns filtered data, ready for upload to the server
     * @public
     */

  }, {
    key: "defaultDataFilter",
    value: function defaultDataFilter(data) {
      return data;
    }
  }]);

  return PavloviaPlugin;
}();
/**
 * Plugin version:
 * @public
 */


PavloviaPlugin.version = '2022.1.1';
/**
 * The pavlovia.org configuration (usually read from the config.json configuration file).
 *
 * @type {Object}
 * @private
 */

PavloviaPlugin._config = {};
/**
 * The callback for the beforeunload event, which is triggered when the participant
 * tries to leave the experiment by closing the tab or browser.
 *
 * @type {null}
 * @private
 */

PavloviaPlugin._beforeunloadCallback = null;
/**
 * The server parameters (those starting with a double underscore).
 *
 * @type {Object}
 * @private
 */

PavloviaPlugin._serverMsg = new Map();
/**
 * Plugin information.
 * @public
 */

PavloviaPlugin.info = {
  name: 'pavlovia',
  description: 'communication with pavlovia.org',
  parameters: {
    command: {
      type: 1,
      pretty_name: 'Command',
      "default": 'init',
      description: 'The pavlovia command: "init" (default) or "finish"'
    },
    participantId: {
      type: 1,
      pretty_name: 'Participant Id',
      "default": 'PARTICIPANT',
      description: 'The participant Id: "PARTICIPANT" (default) or any string'
    },
    errorCallback: {
      type: 4,
      pretty_name: 'ErrorCallback',
      "default": PavloviaPlugin.defaultErrorCallback,
      description: 'The callback function called whenever an error has occurred'
    },
    dataFilter: {
      type: 4,
      pretty_name: 'DataFilter',
      "default": PavloviaPlugin.defaultDataFilter,
      description: 'The filter applied to the data gathered by jsPsych before upload to the server'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PavloviaPlugin);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUVibUIsTUFBQUEsV0FBVyxFQUFFLGdCQUZBO0FBR2IsaUJBQVMsYUFISTtBQUliRixNQUFBQSxXQUFXLEVBQUU7QUFKQSxLQVBMO0FBYVYzSCxJQUFBQSxhQUFhLEVBQUU7QUFDYjBHLE1BQUFBLElBQUksRUFBRSxDQURPO0FBRWJtQixNQUFBQSxXQUFXLEVBQUUsZUFGQTtBQUdiLGlCQUFTekksY0FBYyxDQUFDMEksb0JBSFg7QUFJYkgsTUFBQUEsV0FBVyxFQUNUO0FBTFcsS0FiTDtBQW9CVnpCLElBQUFBLFVBQVUsRUFBRTtBQUNWUSxNQUFBQSxJQUFJLEVBQUUsQ0FESTtBQUVWbUIsTUFBQUEsV0FBVyxFQUFFLFlBRkg7QUFHVixpQkFBU3pJLGNBQWMsQ0FBQzJJLGlCQUhkO0FBSVZKLE1BQUFBLFdBQVcsRUFDVDtBQUxRO0FBcEJGO0FBSFEsQ0FBdEI7QUFpQ0EsaUVBQWV2SSxjQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWQtYXR0YWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svLi9zcmMvanNQc3ljaFBhdmxvdmlhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICoganNQc3ljaCBwbHVnaW4gKHZlcnNpb24gPiA3LjApIGZvciBwYXZsb3ZpYS5vcmdcbiAqXG4gKiBUaGlzIHBsdWdpbiBoYW5kbGVzIGNvbW11bmljYXRpb25zIHdpdGggdGhlIHBhdmxvdmlhLm9yZyBzZXJ2ZXI6IGl0IG9wZW5zIGFuZCBjbG9zZXMgc2Vzc2lvbnMsXG4gKiBhbmQgdXBsb2FkcyBkYXRhIHRvIHRoZSBzZXJ2ZXIuXG4gKlxuICogQGF1dGhvciBBbGFpbiBQaXRpb3RcbiAqIEB2ZXJzaW9uIDIwMjIuMS4xXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LTIwMjAgSWxpeGEgTHRkLiAoaHR0cDovL2lsaXhhLmNvbSkgKGMpIDIwMjAtMjAyMSBPcGVuIFNjaWVuY2UgVG9vbHMgTHRkLlxuICogICAoaHR0cHM6Ly9vcGVuc2NpZW5jZXRvb2xzLm9yZylcbiAqIEBsaWNlbnNlIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBXaXRoIGVkaXRzIGJ5OiBBZGFtIFJpY2hpZS1IYWxmb3JkIDxyaWNoaWVoYWxmb3JkQGdtYWlsLmNvbT5cbiAqL1xuXG4vKipcbiAqICoqcGF2bG92aWEqKlxuICpcbiAqIFRoaXMgcGx1Z2luIGhhbmRsZXMgY29tbXVuaWNhdGlvbnMgd2l0aCB0aGUgcGF2bG92aWEub3JnIHNlcnZlcjogaXQgb3BlbnMgYW5kIGNsb3NlcyBzZXNzaW9ucyxcbiAqIGFuZCB1cGxvYWRzIGRhdGEgdG8gdGhlIHNlcnZlci5cbiAqXG4gKiBAYXV0aG9yIEFsYWluIFBpdGlvdFxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9wYXZsb3ZpYS5vcmcvZG9jcy9leHBlcmltZW50cy9jcmVhdGUtanNQc3ljaCBSdW5uaW5nIGpzUHN5Y2ggZXhwZXJpbWVudHMgZnJvbSBQYXZsb3ZpYX1cbiAqXG4gKiBXaXRoIGVkaXRzIGJ5OiBBZGFtIFJpY2hpZS1IYWxmb3JkIDxyaWNoaWVoYWxmb3JkQGdtYWlsLmNvbT5cbiAqL1xuY2xhc3MgUGF2bG92aWFQbHVnaW4ge1xuICBjb25zdHJ1Y3Rvcihqc1BzeWNoKSB7XG4gICAgdGhpcy5fanNQc3ljaCA9IGpzUHN5Y2g7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRoZSBwbHVnaW4uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRpc3BsYXlfZWxlbWVudCAtIHRoZSBIVE1MIERPTSBlbGVtZW50IHdoZXJlIGpzUHN5Y2ggY29udGVudFxuICAgKiBcdGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0cmlhbCAtIHRoZSBqc1BzeWNoIHRyaWFsXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFzeW5jIHRyaWFsKGRpc3BsYXlfZWxlbWVudCwgdHJpYWwpIHtcbiAgICAvLyBleGVjdXRlIHRoZSBjb21tYW5kOlxuICAgIHN3aXRjaCAodHJpYWwuY29tbWFuZC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgYXdhaXQgdGhpcy5faW5pdCh0cmlhbCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdmaW5pc2gnOlxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fanNQc3ljaC5kYXRhLmdldCgpLmNzdigpO1xuICAgICAgICBhd2FpdCB0aGlzLl9maW5pc2godHJpYWwsIGRhdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdHJpYWwuZXJyb3JDYWxsYmFjaygndW5rbm93biBjb21tYW5kOiAnICsgdHJpYWwuY29tbWFuZCk7XG4gICAgfVxuXG4gICAgLy8gZW5kIHRyaWFsXG4gICAgdGhpcy5fanNQc3ljaC5maW5pc2hUcmlhbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGVycm9yIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBFcnJvciBtZXNzYWdlcyBhcmUgZGlzcGxheWVkIGluIHRoZSBib2R5IG9mIHRoZSBkb2N1bWVudCBhbmQgaW4gdGhlIGJyb3dzZXIncyBjb25zb2xlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3IgLSB0aGUgZXJyb3IganNvbiBvYmplY3QgdG8gYmUgZGlzcGxheWVkLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdEVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICAvLyBvdXRwdXQgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlOlxuICAgIGNvbnNvbGUuZXJyb3IoJ1twYXZsb3ZpYSAnICsgUGF2bG92aWFQbHVnaW4udmVyc2lvbiArICddJywgZXJyb3IpO1xuXG4gICAgLy8gb3V0cHV0IHRoZSBlcnJvciB0byB0aGUgaHRtbCBib2R5OlxuICAgIGxldCBodG1sQ29kZSA9XG4gICAgICAnPGgzPltqc3BzeWNoLXBhdmxvdmlhIHBsdWdpbiAnICtcbiAgICAgIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gK1xuICAgICAgJ10gRXJyb3I8L2gzPjx1bD4nO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnY29udGV4dCcgaW4gZXJyb3IpIHtcbiAgICAgICAgaHRtbENvZGUgKz0gJzxsaT4nICsgZXJyb3IuY29udGV4dCArICc8L2xpPic7XG4gICAgICAgIGVycm9yID0gZXJyb3IuZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sQ29kZSArPSAnPGxpPjxiPicgKyBlcnJvciArICc8L2I+PC9saT4nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaHRtbENvZGUgKz0gJzwvdWw+JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5uZXJIVE1MID0gaHRtbENvZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgZGF0YSBmaWx0ZXIsIGFwcGxpZWQgdG8gdGhlIGRhdGEgZ2F0aGVyZWQgYnkganNQc3ljaCwgYmVmb3JlIHRoZXkgYXJlXG4gICAqIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIFRoZSBmaWx0ZXIgdHlwaWNhbGx5IHBydW5lcyBhbmQgcmVmb3JtYXQganNQc3ljaC5kYXRhLmdldCgpLmNzdigpLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIGlucHV0IGRhdGEsIHR5cGljYWxseSBmcm9tIGpzUHN5Y2guZGF0YS5nZXQoKS5jc3YoKVxuICAgKiBAcmV0dXJucyBmaWx0ZXJlZCBkYXRhLCByZWFkeSBmb3IgdXBsb2FkIHRvIHRoZSBzZXJ2ZXJcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc3RhdGljIGRlZmF1bHREYXRhRmlsdGVyKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXNlIHRoZSBjb25uZWN0aW9uIHdpdGggcGF2bG92aWEub3JnOiBjb25maWd1cmUgdGhlIHBsdWdpbiBhbmQgb3BlbiBhIG5ldyBzZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJpYWwgLSB0aGUganNQc3ljaCB0cmlhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZ1VSTD0gXCJjb25maWcuanNvblwiXSAtIHRoZSBVUkwgb2YgdGhlIHBhdmxvdmlhLm9yZyBqc29uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9pbml0KHRyaWFsLCBjb25maWdVUkwgPSAnY29uZmlnLmpzb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbmZpZ3VyZTpcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2NvbmZpZ3VyZShjb25maWdVUkwpO1xuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZyA9IHJlc3BvbnNlLmNvbmZpZztcbiAgICAgIHRoaXMuX2xvZygnaW5pdCB8IF9jb25maWd1cmUucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBvcGVuIGEgbmV3IHNlc3Npb246XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX29wZW5TZXNzaW9uKCk7XG4gICAgICAvLyBfY29uZmlnLmV4cGVyaW1lbnQudG9rZW4gPSByZXNwb25zZS50b2tlbjtcbiAgICAgIHRoaXMuX2xvZygnaW5pdCB8IF9vcGVuU2Vzc2lvbi5yZXNwb25zZT0nLCByZXNwb25zZSk7XG5cbiAgICAgIC8vIHdhcm4gdGhlIHVzZXIgd2hlbiB0aGV5IGF0dGVtcHQgdG8gY2xvc2UgdGhlIHRhYiBvciBicm93c2VyOlxuICAgICAgY29uc3QgX2JlZm9yZXVubG9hZENhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0IHNob3VsZCBlbnN1cmUgdGhhdCB0aGUgdXNlciBnZXRzIHByb21wdGVkOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIENocm9tZSByZXF1aXJlcyByZXR1cm5WYWx1ZSB0byBiZSBzZXQ6XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gJyc7XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIF9iZWZvcmV1bmxvYWRDYWxsYmFjayk7XG5cbiAgICAgIC8vIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSB0YWIgb3IgYnJvd3Nlciwgd2UgYXR0ZW1wdCB0byBjbG9zZSB0aGUgc2Vzc2lvblxuICAgICAgLy8gYW5kIG9wdGlvbmFsbHkgc2F2ZSB0aGUgcmVzdWx0c1xuICAgICAgLy8gbm90ZTogd2UgY29tbXVuaWNhdGUgd2l0aCB0aGUgc2VydmVyIHVzaW5nIHRoZSBCZWFjb24gQVBJXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnNlc3Npb24uc3RhdHVzID09PSAnT1BFTicpIHtcbiAgICAgICAgICAvLyBnZXQgYW5kIHNhdmUgdGhlIGluY29tcGxldGUgcmVzdWx0cyBpZiBuZWVkIGJlOlxuICAgICAgICAgIGlmIChQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc2F2ZUluY29tcGxldGVSZXN1bHRzKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fanNQc3ljaC5kYXRhLmdldCgpLmNzdigpO1xuICAgICAgICAgICAgdGhpcy5fc2F2ZSh0cmlhbCwgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2xvc2UgdGhlIHNlc3Npb246XG4gICAgICAgICAgdGhpcy5fY2xvc2VTZXNzaW9uKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRyaWFsLmVycm9yQ2FsbGJhY2soZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIGNvbm5lY3Rpb24gd2l0aCBwYXZsb3ZpYS5vcmc6IHVwbG9hZCB0aGUgY29sbGVjdGVkIGRhdGEgYW5kIGNsb3NlIHRoZSBzZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJpYWwgLSB0aGUganNQc3ljaCB0cmlhbFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIHRoZSBleHBlcmltZW50IGRhdGEgdG8gYmUgdXBsb2FkZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfZmluaXNoKHRyaWFsLCBkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlbW92ZSB0aGUgYmVmb3JldW5sb2FkIGxpc3RlbmVyOlxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdiZWZvcmV1bmxvYWQnLFxuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fYmVmb3JldW5sb2FkQ2FsbGJhY2tcbiAgICAgICk7XG5cbiAgICAgIC8vIHRlbGwgdGhlIHBhcnRpY2lwYW50IHRoYXQgdGhlIGRhdGEgaXMgYmVpbmcgdXBsb2FkZWQ6XG4gICAgICBjb25zdCBtc2cgPVxuICAgICAgICAnUGxlYXNlIHdhaXQgYSBtb21lbnQgd2hpbGUgdGhlIGRhdGEgYXJlIHVwbG9hZGVkIHRvIHRoZSBwYXZsb3ZpYS5vcmcgc2VydmVyLi4uJztcbiAgICAgIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gdGhpcy5fanNQc3ljaC5nZXREaXNwbGF5RWxlbWVudCgpO1xuICAgICAgZGlzcGxheUVsZW1lbnQuaW5uZXJIVE1MID0gJzxwcmUgaWQ9XCJwYXZsb3ZpYS1kYXRhLXVwbG9hZFwiPjwvcHJlPic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF2bG92aWEtZGF0YS11cGxvYWQnKS50ZXh0Q29udGVudCA9IG1zZztcblxuICAgICAgLy8gdXBsb2FkIHRoZSBkYXRhIHRvIHBhdmxvdmlhLm9yZzpcbiAgICAgIGNvbnN0IHN5bmMgPSB0eXBlb2YgdHJpYWwuc3luYyAhPT0gJ3VuZGVmaW5lZCcgPyB0cmlhbC5zeW5jIDogZmFsc2U7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9zYXZlKHRyaWFsLCBkYXRhLCBzeW5jKTtcbiAgICAgIHRoaXMuX2xvZygnZmluaXNoIHwgX3NhdmUucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBjaGVjayBmb3IgZXJyb3JzOlxuICAgICAgaWYgKCdzZXJ2ZXJEYXRhJyBpbiByZXNwb25zZSAmJiAnZXJyb3InIGluIHJlc3BvbnNlLnNlcnZlckRhdGEpIHtcbiAgICAgICAgdGhyb3cgcmVzcG9uc2Uuc2VydmVyRGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gY2xvc2UgdGhlIHNlc3Npb246XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2Nsb3NlU2Vzc2lvbih0cnVlLCBmYWxzZSk7XG4gICAgICB0aGlzLl9sb2coJ2ZpbmlzaCB8IF9jbG9zZVNlc3Npb24ucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0cmlhbC5lcnJvckNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIHRoZSBwbHVnaW4gYnkgcmVhZGluZyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGNyZWF0ZWQgdXBvbiBhY3RpdmF0aW9uXG4gICAqIG9mIHRoZSBleHBlcmltZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZ1VSTD0gXCJjb25maWcuanNvblwiXSAtIHRoZSBVUkwgb2YgdGhlIHBhdmxvdmlhLm9yZyBqc29uXG4gICAqIFx0Y29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfY29uZmlndXJlKGNvbmZpZ1VSTCkge1xuICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgIG9yaWdpbjogJ19jb25maWd1cmUnLFxuICAgICAgY29udGV4dDogJ3doZW4gY29uZmlndXJpbmcgdGhlIHBsdWdpbicsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWd1cmF0aW9uUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXRDb25maWd1cmF0aW9uKGNvbmZpZ1VSTCk7XG5cbiAgICAgIC8vIGxlZ2FjeSBleHBlcmltZW50cyBoYWQgYSBwc3ljaG9Kc01hbmFnZXIgYmxvY2sgaW5zdGVhZCBvZiBhIHBhdmxvdmlhIGJsb2NrLCBhbmQgdGhlIFVSTFxuICAgICAgLy8gcG9pbnRlZCB0byBodHRwczovL3BhdmxvdmlhLm9yZy9zZXJ2ZXJcbiAgICAgIGlmICgncHN5Y2hvSnNNYW5hZ2VyJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnKSB7XG4gICAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLnBzeWNob0pzTWFuYWdlcjtcbiAgICAgICAgY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5wYXZsb3ZpYSA9IHtcbiAgICAgICAgICBVUkw6ICdodHRwczovL3BhdmxvdmlhLm9yZycsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIHRlc3RzIGZvciB0aGUgcHJlc2VuY2Ugb2YgZXNzZW50aWFsIGJsb2NrcyBpbiB0aGUgY29uZmlndXJhdGlvbjpcbiAgICAgIGlmICghKCdleHBlcmltZW50JyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnKSkge1xuICAgICAgICB0aHJvdyAnbWlzc2luZyBleHBlcmltZW50IGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ25hbWUnIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcuZXhwZXJpbWVudCkpIHtcbiAgICAgICAgdGhyb3cgJ21pc3NpbmcgbmFtZSBpbiBleHBlcmltZW50IGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ2Z1bGxwYXRoJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLmV4cGVyaW1lbnQpKSB7XG4gICAgICAgIHRocm93ICdtaXNzaW5nIGZ1bGxwYXRoIGluIGV4cGVyaW1lbnQgYmxvY2sgaW4gY29uZmlndXJhdGlvbic7XG4gICAgICB9XG4gICAgICBpZiAoISgncGF2bG92aWEnIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcpKSB7XG4gICAgICAgIHRocm93ICdtaXNzaW5nIHBhdmxvdmlhIGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ1VSTCcgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5wYXZsb3ZpYSkpIHtcbiAgICAgICAgdGhyb3cgJ21pc3NpbmcgVVJMIGluIHBhdmxvdmlhIGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgdGhlIHNlcnZlciBwYXJhbWV0ZXJzICh0aG9zZSBzdGFydGluZyB3aXRoIGEgZG91YmxlIHVuZGVyc2NvcmUpOlxuICAgICAgY29uc3QgdXJsUXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpO1xuICAgICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsUXVlcnkpO1xuICAgICAgdXJsUGFyYW1ldGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignX18nKSA9PT0gMCkge1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25SZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgeyAuLi5yZXNwb25zZSwgZXJyb3IgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXZsb3ZpYS5vcmcganNvbiBjb25maWd1cmF0aW9uIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdVUkwgLSB0aGUgVVJMIG9mIHRoZSBwYXZsb3ZpYS5vcmcganNvbiBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRDb25maWd1cmF0aW9uKGNvbmZpZ1VSTCkge1xuICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgIG9yaWdpbjogJ19nZXRDb25maWd1cmF0aW9uJyxcbiAgICAgIGNvbnRleHQ6ICd3aGVuIHJlYWRpbmcgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZTogJyArIGNvbmZpZ1VSTCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29uZmlnVVJMLCB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSBhd2FpdCBzZXJ2ZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3BvbnNlLCBjb25maWc6IHNlcnZlckRhdGEgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVqZWN0KHsgLi4ucmVzcG9uc2UsIGVycm9yIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBuZXcgc2Vzc2lvbiBmb3IgdGhpcyBleHBlcmltZW50IG9uIHBhdmxvdmlhLm9yZy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vcGVuU2Vzc2lvbigpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICBvcmlnaW46ICdfb3BlblNlc3Npb24nLFxuICAgICAgY29udGV4dDpcbiAgICAgICAgJ3doZW4gb3BlbmluZyBhIHNlc3Npb24gZm9yIGV4cGVyaW1lbnQ6ICcgK1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuZnVsbHBhdGgsXG4gICAgfTtcblxuICAgIC8vIHByZXBhcmUgYSBQT1NUIHF1ZXJ5OlxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKFBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cuaGFzKCdfX3BpbG90VG9rZW4nKSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAncGlsb3RUb2tlbicsXG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cuZ2V0KCdfX3BpbG90VG9rZW4nKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBxdWVyeSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IGAke1BhdmxvdmlhUGx1Z2luLl9jb25maWcucGF2bG92aWEuVVJMfS9hcGkvdjIvZXhwZXJpbWVudHMvJHtQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmdpdGxhYi5wcm9qZWN0SWR9L3Nlc3Npb25zYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciByZXF1aXJlZCBhdHRyaWJ1dGVzOlxuICAgICAgICBpZiAoISgndG9rZW4nIGluIHNlcnZlckRhdGEpKSB7XG4gICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwge1xuICAgICAgICAgICAgICBlcnJvcjogJ3VuZXhwZWN0ZWQgYW5zd2VyIGZyb20gc2VydmVyOiBubyB0b2tlbicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ2V4cGVyaW1lbnQnIGluIHNlcnZlckRhdGEpKSB7XG4gICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwge1xuICAgICAgICAgICAgICBlcnJvcjogJ3VuZXhwZWN0ZWQgYW5zd2VyIGZyb20gc2VydmVyOiBubyBleHBlcmltZW50JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgY29uZmlndXJhdGlvbjpcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uID0ge1xuICAgICAgICAgIHRva2VuOiBzZXJ2ZXJEYXRhLnRva2VuLFxuICAgICAgICAgIHN0YXR1czogJ09QRU4nLFxuICAgICAgICB9O1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc3RhdHVzID1cbiAgICAgICAgICBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQuc3RhdHVzMjtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LnNhdmVGb3JtYXQgPSBTeW1ib2wuZm9yKFxuICAgICAgICAgIHNlcnZlckRhdGEuZXhwZXJpbWVudC5zYXZlRm9ybWF0XG4gICAgICAgICk7XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zYXZlSW5jb21wbGV0ZVJlc3VsdHMgPVxuICAgICAgICAgIHNlcnZlckRhdGEuZXhwZXJpbWVudC5zYXZlSW5jb21wbGV0ZVJlc3VsdHM7XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5saWNlbnNlID1cbiAgICAgICAgICBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQubGljZW5zZTtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5ydW5Nb2RlID0gc2VydmVyRGF0YS5leHBlcmltZW50LnJ1bk1vZGU7XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB7XG4gICAgICAgICAgICB0b2tlbjogc2VydmVyRGF0YS50b2tlbixcbiAgICAgICAgICAgIHN0YXR1czogc2VydmVyRGF0YS5leHBlcmltZW50LnN0YXR1czIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZWplY3QoeyAuLi5yZXNwb25zZSwgZXJyb3IgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgdGhlIHByZXZpb3VzbHkgb3BlbmVkIHNlc3Npb24gb24gcGF2bG92aWEub3JnLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGxldGVkIC0gd2hldGhlciBvciBub3QgdGhlIHBhcnRpY2lwYW50IGNvbXBsZXRlZCB0aGUgZXhwZXJpbWVudFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzeW5jID0gZmFsc2VdIC0gd2hldGhlciBvciBub3QgdG8gdXNlIHRoZSBCZWFjb24gQVBJIHRvIGNvbW11bmljYXRlXG4gICAqIFx0d2l0aCB0aGUgc2VydmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2xvc2VTZXNzaW9uKGlzQ29tcGxldGVkID0gdHJ1ZSwgc3luYyA9IGZhbHNlKSB7XG4gICAgbGV0IHJlc3BvbnNlID0ge1xuICAgICAgb3JpZ2luOiAnX2Nsb3NlU2Vzc2lvbicsXG4gICAgICBjb250ZXh0OlxuICAgICAgICAnd2hlbiBjbG9zaW5nIHRoZSBzZXNzaW9uIGZvciBleHBlcmltZW50OiAnICtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LmZ1bGxwYXRoLFxuICAgIH07XG5cbiAgICAvLyBwcmVwYXJlIGEgREVMRVRFIHF1ZXJ5OlxuICAgIGNvbnN0IHVybCA9XG4gICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnBhdmxvdmlhLlVSTCArXG4gICAgICAnL2FwaS92Mi9leHBlcmltZW50cy8nICtcbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZ2l0bGFiLnByb2plY3RJZCArXG4gICAgICAnL3Nlc3Npb25zLycgK1xuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnRva2VuO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdpc0NvbXBsZXRlZCcsIGlzQ29tcGxldGVkKTtcblxuICAgIC8vIHN5bmNocm9ub3VzbHkgcXVlcnkgdGhlIHBhdmxvdmlhIHNlcnZlcjpcbiAgICBpZiAoc3luYykge1xuICAgICAgbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsICsgJy9kZWxldGUnLCBmb3JtRGF0YSk7XG4gICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnNlc3Npb24uc3RhdHVzID0gJ0NMT1NFRCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFzeW5jaHJvbm91c2x5IHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnN0YXR1cyA9ICdDTE9TRUQnO1xuICAgICAgICAgIHJlc29sdmUoT2JqZWN0LmFzc2lnbihyZXNwb25zZSwgeyBzZXJ2ZXJEYXRhIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICByZWplY3QoeyAuLi5yZXNwb25zZSwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWQgZGF0YSB0byB0aGUgcGF2bG92aWEub3JnIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRyaWFsIC0gdGhlIGpzUHN5Y2ggdHJpYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSB0aGUgZXhwZXJpbWVudCBkYXRhIHRvIGJlIHVwbG9hZGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N5bmMgPSBmYWxzZV0gLSB3aGV0aGVyIG9yIG5vdCB0byB1c2UgdGhlIEJlYWNvbiBBUEkgdG8gY29tbXVuaWNhdGVcbiAgICogXHR3aXRoIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX3NhdmUodHJpYWwsIGRhdGEsIHN5bmMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkYXRlU3RyaW5nID1cbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgICAnLScgK1xuICAgICAgKCcwJyArICgxICsgZGF0ZS5nZXRNb250aCgpKSkuc2xpY2UoLTIpICtcbiAgICAgICctJyArXG4gICAgICAoJzAnICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArXG4gICAgICAnXyc7XG4gICAgZGF0ZVN0cmluZyArPVxuICAgICAgKCcwJyArIGRhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICtcbiAgICAgICdoJyArXG4gICAgICAoJzAnICsgZGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArXG4gICAgICAnLicgK1xuICAgICAgKCcwJyArIGRhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMikgK1xuICAgICAgJy4nICtcbiAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgICBjb25zdCBrZXkgPVxuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50Lm5hbWUgK1xuICAgICAgJ18nICtcbiAgICAgIHRyaWFsLnBhcnRpY2lwYW50SWQgK1xuICAgICAgJ18nICtcbiAgICAgICdTRVNTSU9OJyArXG4gICAgICAnXycgK1xuICAgICAgZGF0ZVN0cmluZyArXG4gICAgICAnLmNzdic7XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdHJpYWwuZGF0YUZpbHRlcihkYXRhKTtcblxuICAgIGlmIChcbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zdGF0dXMgPT09ICdSVU5OSU5HJyAmJlxuICAgICAgIVBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cuaGFzKCdfX3BpbG90VG9rZW4nKVxuICAgICkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3VwbG9hZERhdGEoa2V5LCBmaWx0ZXJlZERhdGEsIHN5bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vZmZlckRhdGFGb3JEb3dubG9hZChrZXksIGZpbHRlcmVkRGF0YSwgJ3RleHQvY3N2Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcmlnaW46ICdfc2F2ZScsXG4gICAgICAgIGNvbnRleHQ6XG4gICAgICAgICAgJ3doZW4gc2F2aW5nIHJlc3VsdHMgZm9yIGV4cGVyaW1lbnQ6ICcgK1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5mdWxscGF0aCxcbiAgICAgICAgbWVzc2FnZTogJ29mZmVyZWQgdGhlIC5jc3YgZmlsZSBmb3IgZG93bmxvYWQnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBsb2FkIGRhdGEgKGEga2V5L3ZhbHVlIHBhaXIpIHRvIHBhdmxvdmlhLm9yZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N5bmMgPSBmYWxzZV0gLSB3aGV0aGVyIG9yIG5vdCB0byB1cGxvYWQgdGhlIGRhdGEgdXNpbmcgdGhlIEJlYWNvbiBBUElcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGxvYWREYXRhKGtleSwgdmFsdWUsIHN5bmMgPSBmYWxzZSkge1xuICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgIG9yaWdpbjogJ191cGxvYWREYXRhJyxcbiAgICAgIGNvbnRleHQ6XG4gICAgICAgIFwid2hlbiB1cGxvYWRpbmcgcGFydGljaXBhbnQnIHJlc3VsdHMgZm9yIGV4cGVyaW1lbnQ6IFwiICtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LmZ1bGxwYXRoLFxuICAgIH07XG5cbiAgICBjb25zdCB1cmwgPVxuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5wYXZsb3ZpYS5VUkwgK1xuICAgICAgJy9hcGkvdjIvZXhwZXJpbWVudHMvJyArXG4gICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmdpdGxhYi5wcm9qZWN0SWQgK1xuICAgICAgJy9zZXNzaW9ucy8nICtcbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbi50b2tlbiArXG4gICAgICAnL3Jlc3VsdHMnO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2tleScsIGtleSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd2YWx1ZScsIHZhbHVlKTtcblxuICAgIC8vIHN5bmNocm9ub3VzIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgZm9ybURhdGEpO1xuICAgIH1cbiAgICAvLyBhc3luY2hyb25vdXNseSBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgcmVzb2x2ZShPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB7IHNlcnZlckRhdGEgfSkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHJlamVjdCh7IC4uLnJlc3BvbnNlLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvZyBtZXNzYWdlcyB0byB0aGUgYnJvd3NlcidzIGNvbnNvbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Li4uKn0gbWVzc2FnZXMgLSB0aGUgbWVzc2FnZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBicm93c2VyJ3MgY29uc29sZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2xvZyguLi5tZXNzYWdlcykge1xuICAgIGNvbnNvbGUubG9nKCdbcGF2bG92aWEgJyArIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gKyAnXScsIC4uLm1lc3NhZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPZmZlciBkYXRhIGFzIGRvd25sb2FkIGluIHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBiZSBkb3dubG9hZGVkXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHRoZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gdGhlIE1JTUUgdHlwZSBvZiB0aGUgZGF0YSwgZS5nLiAndGV4dC9jc3YnIG9yICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29mZmVyRGF0YUZvckRvd25sb2FkKGZpbGVuYW1lLCBkYXRhLCB0eXBlKSB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxlbSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBlbGVtLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgIGVsZW0uZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICBlbGVtLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFBsdWdpbiB2ZXJzaW9uOlxuICogQHB1YmxpY1xuICovXG5QYXZsb3ZpYVBsdWdpbi52ZXJzaW9uID0gJzIwMjIuMS4xJztcblxuLyoqXG4gKiBUaGUgcGF2bG92aWEub3JnIGNvbmZpZ3VyYXRpb24gKHVzdWFsbHkgcmVhZCBmcm9tIHRoZSBjb25maWcuanNvbiBjb25maWd1cmF0aW9uIGZpbGUpLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5QYXZsb3ZpYVBsdWdpbi5fY29uZmlnID0ge307XG5cbi8qKlxuICogVGhlIGNhbGxiYWNrIGZvciB0aGUgYmVmb3JldW5sb2FkIGV2ZW50LCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcGFydGljaXBhbnRcbiAqIHRyaWVzIHRvIGxlYXZlIHRoZSBleHBlcmltZW50IGJ5IGNsb3NpbmcgdGhlIHRhYiBvciBicm93c2VyLlxuICpcbiAqIEB0eXBlIHtudWxsfVxuICogQHByaXZhdGVcbiAqL1xuUGF2bG92aWFQbHVnaW4uX2JlZm9yZXVubG9hZENhbGxiYWNrID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgc2VydmVyIHBhcmFtZXRlcnMgKHRob3NlIHN0YXJ0aW5nIHdpdGggYSBkb3VibGUgdW5kZXJzY29yZSkuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogUGx1Z2luIGluZm9ybWF0aW9uLlxuICogQHB1YmxpY1xuICovXG5QYXZsb3ZpYVBsdWdpbi5pbmZvID0ge1xuICBuYW1lOiAncGF2bG92aWEnLFxuICBkZXNjcmlwdGlvbjogJ2NvbW11bmljYXRpb24gd2l0aCBwYXZsb3ZpYS5vcmcnLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tbWFuZDoge1xuICAgICAgdHlwZTogMSxcbiAgICAgIHByZXR0eV9uYW1lOiAnQ29tbWFuZCcsXG4gICAgICBkZWZhdWx0OiAnaW5pdCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBwYXZsb3ZpYSBjb21tYW5kOiBcImluaXRcIiAoZGVmYXVsdCkgb3IgXCJmaW5pc2hcIicsXG4gICAgfSxcbiAgICBwYXJ0aWNpcGFudElkOiB7XG4gICAgICB0eXBlOiAxLFxuICAgICAgcHJldHR5X25hbWU6ICdQYXJ0aWNpcGFudCBJZCcsXG4gICAgICBkZWZhdWx0OiAnUEFSVElDSVBBTlQnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgcGFydGljaXBhbnQgSWQ6IFwiUEFSVElDSVBBTlRcIiAoZGVmYXVsdCkgb3IgYW55IHN0cmluZycsXG4gICAgfSxcbiAgICBlcnJvckNhbGxiYWNrOiB7XG4gICAgICB0eXBlOiA0LFxuICAgICAgcHJldHR5X25hbWU6ICdFcnJvckNhbGxiYWNrJyxcbiAgICAgIGRlZmF1bHQ6IFBhdmxvdmlhUGx1Z2luLmRlZmF1bHRFcnJvckNhbGxiYWNrLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW5ldmVyIGFuIGVycm9yIGhhcyBvY2N1cnJlZCcsXG4gICAgfSxcbiAgICBkYXRhRmlsdGVyOiB7XG4gICAgICB0eXBlOiA0LFxuICAgICAgcHJldHR5X25hbWU6ICdEYXRhRmlsdGVyJyxcbiAgICAgIGRlZmF1bHQ6IFBhdmxvdmlhUGx1Z2luLmRlZmF1bHREYXRhRmlsdGVyLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgZmlsdGVyIGFwcGxpZWQgdG8gdGhlIGRhdGEgZ2F0aGVyZWQgYnkganNQc3ljaCBiZWZvcmUgdXBsb2FkIHRvIHRoZSBzZXJ2ZXInLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXZsb3ZpYVBsdWdpbjtcbiJdLCJuYW1lcyI6WyJQYXZsb3ZpYVBsdWdpbiIsImpzUHN5Y2giLCJfanNQc3ljaCIsImRpc3BsYXlfZWxlbWVudCIsInRyaWFsIiwiY29tbWFuZCIsInRvTG93ZXJDYXNlIiwiX2luaXQiLCJkYXRhIiwiZ2V0IiwiY3N2IiwiX2ZpbmlzaCIsImVycm9yQ2FsbGJhY2siLCJmaW5pc2hUcmlhbCIsImNvbmZpZ1VSTCIsIl9jb25maWd1cmUiLCJyZXNwb25zZSIsIl9jb25maWciLCJjb25maWciLCJfbG9nIiwiX29wZW5TZXNzaW9uIiwiX2JlZm9yZXVubG9hZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlc3Npb24iLCJzdGF0dXMiLCJleHBlcmltZW50Iiwic2F2ZUluY29tcGxldGVSZXN1bHRzIiwiX3NhdmUiLCJfY2xvc2VTZXNzaW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1zZyIsImRpc3BsYXlFbGVtZW50IiwiZ2V0RGlzcGxheUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJzeW5jIiwic2VydmVyRGF0YSIsIm9yaWdpbiIsImNvbnRleHQiLCJfZ2V0Q29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb25SZXNwb25zZSIsInBzeWNob0pzTWFuYWdlciIsInBhdmxvdmlhIiwiVVJMIiwidXJsUXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNsaWNlIiwidXJsUGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsImZvckVhY2giLCJ2YWx1ZSIsImtleSIsImluZGV4T2YiLCJfc2VydmVyTXNnIiwic2V0IiwiZXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJyZWZlcnJlclBvbGljeSIsInNlcnZlclJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJmdWxscGF0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJoYXMiLCJhcHBlbmQiLCJ1cmwiLCJnaXRsYWIiLCJwcm9qZWN0SWQiLCJib2R5IiwiT2JqZWN0IiwiYXNzaWduIiwidG9rZW4iLCJzdGF0dXMyIiwic2F2ZUZvcm1hdCIsIlN5bWJvbCIsImxpY2Vuc2UiLCJydW5Nb2RlIiwiaXNDb21wbGV0ZWQiLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwiZGF0ZSIsIkRhdGUiLCJkYXRlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwibmFtZSIsInBhcnRpY2lwYW50SWQiLCJmaWx0ZXJlZERhdGEiLCJkYXRhRmlsdGVyIiwiX3VwbG9hZERhdGEiLCJfb2ZmZXJEYXRhRm9yRG93bmxvYWQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJsb2ciLCJ2ZXJzaW9uIiwiZmlsZW5hbWUiLCJ0eXBlIiwiYmxvYiIsIkJsb2IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsImVsZW0iLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkIiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiaHRtbENvZGUiLCJxdWVyeVNlbGVjdG9yIiwiTWFwIiwiaW5mbyIsImRlc2NyaXB0aW9uIiwicGFyYW1ldGVycyIsInByZXR0eV9uYW1lIiwiZGVmYXVsdEVycm9yQ2FsbGJhY2siLCJkZWZhdWx0RGF0YUZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=