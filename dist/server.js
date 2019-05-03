/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(10);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Models = __webpack_require__(11);

var port = 4000;
var server = (0, _express2.default)();

server.get('/', function (req, res) {

  Models.psqlRetrieveAll(function (data) {
    console.log('data: ', data);

    if (Array.isArray(data) === false) {
      data = [];
    }
    var body = (0, _server.renderToString)(_react2.default.createElement(_App2.default, { coordinates: data }));
    console.log('body: ', body);

    var title = 'Server side Rendering with Google Maps';

    res.send((0, _Html2.default)({
      body: body,
      title: title
    }));
  });
});

server.listen(port);
console.log('Serving at http://localhost:' + port);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _map = __webpack_require__(6);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            properties: _this.props.coordinates,
            currentProperty: _this.props.coordinates[0]
        };

        _this.getProperties = _this.getProperties.bind(_this);
        _this.changeCurrentProperty = _this.changeCurrentProperty.bind(_this);
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getProperties();
        }
    }, {
        key: 'getProperties',
        value: function getProperties() {
            // change axios to a post request
            // pas this function down as a prop
            // pass the bounds obj to it
            // send the bounds obj to the /mapChange route
            // populate the state based on the bounds of the window


            // Axios.get('/items')
            //     .then(response => {   


            //         return this.setState({
            //             properties: response.data,
            //             currentProperty: response.data[window.location.pathname.substring(1) - 1] || response.data[0]
            //         }) 
            //     })
            //     .catch(err => console.log('error fetching data'))
        }
    }, {
        key: 'changeCurrentProperty',
        value: function changeCurrentProperty(propertyId) {
            for (var i = 0; i < this.state.properties.length; i++) {
                if (this.state.properties[i].uniqueId === propertyId) {
                    this.setState({
                        currentProperty: this.state.properties[i]
                    });
                }
            }
        }
    }, {
        key: 'handleOnChange',
        value: function handleOnChange(data) {
            // console.log('data inside handleOnChange Func: ', data) 
            this.setState({
                properties: data,
                currentProperty: data[0]
            });
            // console.log('this.state inside index.jsx: ', this.state)
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.properties.length > 0) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_map2.default, { handleOnChange: this.handleOnChange, properties: this.state.properties, currentProperty: this.state.currentProperty, changeCurrentProperty: this.changeCurrentProperty })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    'No Properties yet Brett'
                );
            }
        }
    }]);

    return App;
}(_react2.default.Component);

module.exports = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _googleMapReact = __webpack_require__(7);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

var _mapProperty = __webpack_require__(9);

var _mapProperty2 = _interopRequireDefault(_mapProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.center = {
      lat: _this.props.currentProperty.latitude,
      lng: _this.props.currentProperty.longitude
    };

    _this._onClick = _this._onClick.bind(_this);
    _this.zoom = 15;

    _this.boundsChange = _this.boundsChange.bind(_this);
    return _this;
  }

  _createClass(Map, [{
    key: 'boundsChange',
    value: function boundsChange(obj) {
      var _this2 = this;

      console.log('obj: ', obj);
      console.log('this.props.properties: ', this.props.properties);
      _axios2.default.post('/mapChange', obj).then(function (response) {
        console.log('response from mapChange: ', response);
        console.log('this.props ', _this2.props);
        _this2.props.handleOnChange(response.data);
      });
    }
  }, {
    key: '_onClick',
    value: function _onClick(obj) {
      console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
    }

    // currently renders all of the properties in state
    // considering changing this to be only the properties that fit the range of the screen

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (
        // Important! Always set the container height explicitly
        _react2.default.createElement(
          'div',
          { style: { height: '50vh', width: '100%' } },
          _react2.default.createElement(
            _googleMapReact2.default,
            { onChange: this.boundsChange, bootstrapURLKeys: { key: _config2.default }, defaultCenter: this.center, center: { lat: this.props.currentProperty.latitude, lng: this.props.currentProperty.longitude }, defaultZoom: this.zoom },
            this.props.properties.map(function (property, i) {
              console.log('property: ', property);

              return _react2.default.createElement(_mapProperty2.default, { key: i, lat: property.latitude, lng: property.longitude, property: property, currentProperty: _this3.props.currentProperty, changeCurrentProperty: _this3.props.changeCurrentProperty });
            })
          )
        )
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

module.exports = Map;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'AIzaSyCbcg3TzJ9gxXqixbTZhOs5vxcZFGfWQig';

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapProperty = function (_React$Component) {
    _inherits(MapProperty, _React$Component);

    function MapProperty(props) {
        _classCallCheck(this, MapProperty);

        return _possibleConstructorReturn(this, (MapProperty.__proto__ || Object.getPrototypeOf(MapProperty)).call(this, props));
    }

    _createClass(MapProperty, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.property.uniqueId === this.props.currentProperty.uniqueId) {
                return _react2.default.createElement(
                    'div',
                    { className: 'propertyMarkerContainer' },
                    _react2.default.createElement('img', { onClick: function onClick() {
                            return window.location.pathname = '/' + _this2.props.currentProperty.uniqueId;
                        }, className: 'currentPropMapMarkerImg', border: '5', src: this.props.property.imgurl }),
                    _react2.default.createElement('div', { className: 'circle' }),
                    _react2.default.createElement(
                        'button',
                        { className: 'propertyMarkerPrice' },
                        '$' + (this.props.property.price / 1000).toFixed(0) + 'K'
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'propertyMarkerContainer' },
                    _react2.default.createElement('div', { className: 'circle' }),
                    _react2.default.createElement(
                        'button',
                        { id: this.props.property.uniqueId, className: 'propertyMarkerPrice', onClick: function onClick(e) {
                                return _this2.props.changeCurrentProperty(Number(e.target.id));
                            } },
                        '$' + (this.props.property.price / 1000).toFixed(0) + 'K'
                    )
                );
            }
        }
    }]);

    return MapProperty;
}(_react2.default.Component);

module.exports = MapProperty;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Html = function Html(_ref) {
  var body = _ref.body,
      title = _ref.title;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"neighborhood\">" + body + "</div>\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pg = __webpack_require__(12);

// development
var config = {
    user: 'postgres', //this is the db user credential
    database: 'rebuild',
    password: 'root',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};
// var awsDB = 'ec2-54-224-124-125.compute-1.amazonaws.com';

// production
// const config = {
//     user: 'postgres', //this is the db user credential
//     host: 'ec2-52-202-108-219.compute-1.amazonaws.com',
//     database: 'zillow',
//     password: 'postgres',
//     port: 5432,
//     max: 10, // max number of clients in the pool
//     idleTimeoutMillis: 30000,
// };


var pool = new pg.Pool(config);

pool.on('connect', function () {
    console.log('connected to the Database');
});

var psqlRetrieveAll = function psqlRetrieveAll(callback) {
    var getEverything = 'SELECT * FROM neighborhood limit 5';

    pool.query(getEverything).then(function (data) {
        callback(data.rows);
    }).catch(function (err) {
        console.log(err);
        pool.end();
    });
};

var psqlRetrieveOne = function psqlRetrieveOne(req, res) {

    var getOne = 'SELECT * FROM neighborhood WHERE id = ' + req.params.id;

    pool.query(getOne).then(function (data) {
        return data.rows;
    }).catch(function (err) {
        console.log(err);
        pool.end();
    });
    // let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
    //     if (err) {
    //         console.log('error db', err);
    //     } else {
    //         db.all(getOne + req.params.id, [], (err, property) => {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 res.send(property);
    //             }
    //         })
    //     }
    // })
};

// var psqlRetrieveAll = (req, res) => {
//     var getEverything = 'SELECT * FROM properties limit 100';

//     pool.query(getEverything)
//     .then((data) => {
//       res.send(data.rows)
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     }); 
// }

// var psqlRetrieveOne = (req, res) => {

//     var getOne = 'SELECT * FROM properties WHERE id = ' + req.params.id;

//     pool.query(getOne)
//         .then((data) => {
//             res.send(data.rows)
//         })
//         .catch((err) => {
//             console.log(err);
//             pool.end();
//           }); 
//     // let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
//     //     if (err) {
//     //         console.log('error db', err);
//     //     } else {
//     //         db.all(getOne + req.params.id, [], (err, property) => {
//     //             if (err) {
//     //                 console.log(err);
//     //             } else {
//     //                 res.send(property);
//     //             }
//     //         })
//     //     }
//     // })
// }

module.exports.psqlRetrieveAll = psqlRetrieveAll;
module.exports.psqlRetrieveOne = psqlRetrieveOne;
module.exports.pool = pool;

__webpack_require__(13);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("make-runnable");

/***/ })
/******/ ]);