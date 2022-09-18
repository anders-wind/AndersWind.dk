// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"acrylic.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"base.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Press.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Press = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Press = /*#__PURE__*/_createClass(function Press(id) {
  _classCallCheck(this, Press);

  _defineProperty(this, "current", {
    x: 0,
    y: 0
  });

  _defineProperty(this, "old", {
    x: 0,
    y: 0
  });

  _defineProperty(this, "delta", {
    x: 0,
    y: 0
  });

  _defineProperty(this, "power", 0);

  _defineProperty(this, "isDead", false);

  _defineProperty(this, "isMouse", false);

  _defineProperty(this, "id", void 0);

  this.id = id;
});

exports.Press = Press;
},{}],"glsl/2d-vertex-shader.glsl":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute vec2 position;\n  void main() {\n    gl_Position = vec4(position, 0, 1);\n  }";
},{}],"glsl/2d-fragment-shader.glsl":[function(require,module,exports) {
module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float gravity;\nuniform float reach;\nuniform int amtPresses;\nuniform vec2 resolution;\nuniform vec2 rotation;\nuniform vec2 pitch; // number of grids\nuniform vec3 presses[6];\n\nvec4 grid(float modX, float modY, float strength) {\n\tfloat density = 0.4 * (1.0 - abs((2.0-min(modX, modY))/2.0)); // grid alpa 0.5 and then anti alias.\n\treturn vec4(0.0, 0.0, 0.0, density*strength);\n}\n\nvoid main() {\n    float resLength = length(resolution);\n\n    vec2 pull = vec2(0.0, 0.0);\n    float strength = 0.15;\n    for(int i = 0; i<=6; i++){\n        if (amtPresses==i)\n            break;\n        vec3 press = presses[i];\n        vec2 delta = press.xy-gl_FragCoord.xy;\n        float distance = length(delta);\n        pull += delta * (gravity*press.z / (distance*distance + reach));\n        \n        float fade = max(0.0, 0.9-distance/resLength); // 1.2 due to some scaling\n        float dist = min(1.0, max(0.0, press.z));\n        strength = max(strength, fade*dist);\n    }\n\n    vec2 newPos = pitch + pull;\n\n    float modX = mod(reach + gl_FragCoord.x, newPos.x);\n    float modY = mod(reach + gl_FragCoord.y, newPos.y);\n\n\tgl_FragColor = grid(modX, modY, strength);\n}";
},{}],"renderer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _Press = require("./Press");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var vertexShaderSource = function () {
  return require('./glsl/2d-vertex-shader.glsl');
}();

var fragmentShaderSource = function () {
  return require('./glsl/2d-fragment-shader.glsl');
}();

var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    _classCallCheck(this, Renderer);

    _defineProperty(this, "gl", null);

    _defineProperty(this, "program", null);

    _defineProperty(this, "canvas", document.createElement('canvas'));

    _defineProperty(this, "start", new Date().getTime());

    _defineProperty(this, "idMapper", Array(0));

    _defineProperty(this, "presses", Array(6));
  }

  _createClass(Renderer, [{
    key: "renderGravityGrid",
    value: // mouse + 5 touch points.
    function renderGravityGrid(div) {
      var _this = this;

      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      div.appendChild(this.canvas);
      this.gl = this.canvas.getContext('experimental-webgl');

      window.onload = function () {
        _this.init();

        _this.render();
      };
    }
  }, {
    key: "takeFirstFreeIndex",
    value: function takeFirstFreeIndex(id) {
      for (var i = 0; i < this.presses.length; i++) {
        if (!this.presses[i] || this.presses[i].id === -1) {
          this.idMapper[id] = i;
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "takeFirstFreeIndexMouse",
    value: function takeFirstFreeIndexMouse() {
      for (var i = this.presses.length - 1; i >= 0; i--) {
        if (!this.presses[i] || this.presses[i].id === -1) {
          // no press
          this.idMapper[i] = i;
          return i;
        } else if (this.presses[i].isMouse && this.presses[i].isDead && this.presses[i].power <= 2) {
          // dead press
          this.idMapper[i] = i;
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "findActiveMouse",
    value: function findActiveMouse() {
      for (var i = this.presses.length - 1; i >= 0; i--) {
        if (this.presses[i] && this.presses[i].id !== -1 && !this.presses[i].isDead && this.presses[i].isMouse) {
          return this.presses[i];
        }
      }

      return null;
    }
  }, {
    key: "getPos",
    value: function getPos(canvas, x, y) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: (x - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (y - rect.bottom) / (rect.top - rect.bottom) * canvas.height
      };
    }
  }, {
    key: "getMousePos",
    value: function getMousePos(canvas, evt) {
      var mouseEvt = evt;
      return this.getPos(canvas, mouseEvt.clientX, mouseEvt.clientY);
    }
  }, {
    key: "getTouchPos",
    value: function getTouchPos(canvas, touch) {
      var rect = canvas.getBoundingClientRect();
      return this.getPos(canvas, touch.clientX, touch.clientY);
    }
  }, {
    key: "getSize",
    value: function getSize() {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
    }
  }, {
    key: "setTimedInterval",
    value: function setTimedInterval(callbackInterval, callbackTimeout, delay, timeout) {
      var id = window.setInterval(callbackInterval, delay);
      window.setTimeout(function () {
        window.clearInterval(id);
        callbackTimeout();
      }, timeout);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this2 = this;

      this.canvas.addEventListener('mouseenter', function (evt) {
        var id = _this2.takeFirstFreeIndexMouse();

        if (id > 0) {
          var press = new _Press.Press(id);
          press.isMouse = true;
          press.current = _this2.getMousePos(_this2.canvas, evt);
          press.old = press.current;
          _this2.presses[id] = press;
        }
      }, false);
      this.canvas.addEventListener('mousemove', function (evt) {
        var press = _this2.findActiveMouse();

        if (!press) {
          var id = _this2.takeFirstFreeIndexMouse();

          if (id) {
            press = new _Press.Press(id);
            press.isMouse = true;
            press.current = _this2.getMousePos(_this2.canvas, evt);
            press.old = press.current;
            _this2.presses[id] = press;
          }
        } else if (press) {
          press.old = press.current;
          press.current = _this2.getMousePos(_this2.canvas, evt);
        }
      }, false);
      this.canvas.addEventListener('mouseleave', function (evt) {
        var press = _this2.findActiveMouse();

        if (press) {
          press.isDead = true;
        }
      }, false);
      this.canvas.addEventListener('touchstart', function (evt) {
        evt.preventDefault(); // tslint:disable-next-line:prefer-for-of

        for (var i = 0; i < evt.changedTouches.length; i++) {
          var touch = evt.changedTouches[i];

          var id = _this2.takeFirstFreeIndex(touch.identifier);

          if (id >= 0) {
            var press = new _Press.Press(id);
            press.current = _this2.getTouchPos(_this2.canvas, touch);
            press.old = press.current;
            _this2.presses[press.id] = press;
          }
        }
      }, false);
      this.canvas.addEventListener('touchmove', function (evt) {
        evt.preventDefault(); // tslint:disable-next-line:prefer-for-of

        for (var i = 0; i < evt.changedTouches.length; i++) {
          var touch = evt.changedTouches[i];
          var id = _this2.idMapper[touch.identifier];

          if (id >= 0) {
            var press = _this2.presses[id];
            press.old = press.current;
            press.current = _this2.getTouchPos(_this2.canvas, touch);
          }
        }
      }, false);
      this.canvas.addEventListener('touchend', function (evt) {
        evt.preventDefault();
        var ids = Array(); // tslint:disable-next-line:prefer-for-of

        for (var i = 0; i < evt.changedTouches.length; i++) {
          var touch = evt.changedTouches[i];
          var id = _this2.idMapper[touch.identifier];

          if (id >= 0) {
            var press = _this2.presses[id];
            press.delta = {
              x: press.current.x - press.old.x,
              y: press.current.y - press.old.y
            };
            press.isDead = true;
            ids.push(id);
          }
        }

        _this2.setTimedInterval(function () {
          // interval
          // tslint:disable-next-line:prefer-for-of
          for (var _i = 0; _i < ids.length; _i++) {
            var _id = ids[_i];

            if (_id >= 0) {
              var _press = _this2.presses[_id];
              _press.current = {
                x: _press.current.x + _press.delta.x * _press.power / 250,
                y: _press.current.y + _press.delta.y * _press.power / 250
              };
            }
          }
        }, function () {
          // timeout
          // tslint:disable-next-line:prefer-for-of
          for (var _i2 = 0; _i2 < ids.length; _i2++) {
            var _id2 = ids[_i2];
            _this2.presses[_id2] = new _Press.Press(-1);
          }
        }, 18, 2000);
      }, false);

      window.onresize = function () {
        return setTimeout(function () {
          return _this2.getSize();
        }, 1);
      };
    }
  }, {
    key: "init",
    value: function init() {
      var vertexShader;
      var fragmentShader;
      this.addListeners();
      this.getSize();

      if (this.gl) {
        var buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), this.gl.STATIC_DRAW);
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vertexShader, vertexShaderSource);
        this.gl.compileShader(vertexShader);
        fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(fragmentShader, fragmentShaderSource);
        this.gl.compileShader(fragmentShader);
        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        this.gl.useProgram(this.program);
      }
    }
  }, {
    key: "addGLProperties",
    value: function addGLProperties() {
      if (this.gl) {
        var positionLocation = this.gl.getAttribLocation(this.program, 'position');
        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, true, 0, 0);
        var resolutionPosition = this.gl.getUniformLocation(this.program, 'resolution');
        this.gl.uniform2f(resolutionPosition, this.canvas.width, this.canvas.height);
        var rotationPosition = this.gl.getUniformLocation(this.program, 'rotation');
        this.gl.uniform2f(rotationPosition, 0.5, 0.8);
        var timePosition = this.gl.getUniformLocation(this.program, 'time');
        this.gl.uniform1f(timePosition, (new Date().getTime() - this.start) / 1000);
        var gravityPosition = this.gl.getUniformLocation(this.program, 'gravity');
        this.gl.uniform1f(gravityPosition, 70);
        var reachPosition = this.gl.getUniformLocation(this.program, 'reach');
        this.gl.uniform1f(reachPosition, 10000);
        var offsetPosition = this.gl.getUniformLocation(this.program, 'offset');
        this.gl.uniform2f(offsetPosition, 0, 0);
        var pitchPosition = this.gl.getUniformLocation(this.program, 'pitch');
        this.gl.uniform2f(pitchPosition, 80, 80);
        var presses = 0;

        for (var i = 0; i < 7; i++) {
          if (this.presses[i] && this.presses[i].id !== -1) {
            var pressPosition = this.gl.getUniformLocation(this.program, 'presses[' + presses + ']');
            this.gl.uniform3f(pressPosition, this.presses[i].current.x, this.presses[i].current.y, this.presses[i].power / 250);
            presses++;
          }
        }

        var amtPressesPosition = this.gl.getUniformLocation(this.program, 'amtPresses');
        this.gl.uniform1i(amtPressesPosition, presses);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.gl) {
        this.addGLProperties();
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        requestAnimationFrame(function () {
          return _this3.render();
        });

        var _iterator = _createForOfIteratorHelper(this.presses),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var press = _step.value;

            if (press && press.isDead && press.power > 0) {
              press.power -= 2;
            } else if (press && !press.isDead && press.power < 200) {
              press.power += 7;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;
},{"./Press":"Press.ts","./glsl/2d-vertex-shader.glsl":"glsl/2d-vertex-shader.glsl","./glsl/2d-fragment-shader.glsl":"glsl/2d-fragment-shader.glsl"}],"app.ts":[function(require,module,exports) {
"use strict";

require("./acrylic.scss");

require("./base.scss");

var _renderer = require("./renderer");

var renderer = new _renderer.Renderer();
var el = document.getElementById('grid');

if (el) {
  renderer.renderGravityGrid(el);
}
},{"./acrylic.scss":"acrylic.scss","./base.scss":"base.scss","./renderer":"renderer.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56137" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map