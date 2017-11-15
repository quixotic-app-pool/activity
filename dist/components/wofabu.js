'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dummy = require('./../dummy.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WoFaBu = function (_wepy$component) {
  _inherits(WoFaBu, _wepy$component);

  function WoFaBu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WoFaBu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WoFaBu.__proto__ || Object.getPrototypeOf(WoFaBu)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      sysHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      list: [],
      joinAvatar: ['./avatar.png', './avatar.png', './avatar.png', './avatar.png'],
      alength: 0
    }, _this.computed = {
      test: function test() {
        return 'it works';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WoFaBu, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.list = _dummy.dummy.yijiaruList;
                _context.next = 3;
                return this.updateGpsDistance();

              case 3:
                this.alength = this.joinAvatar.length;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'updateGpsDistance',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var currentLocation, self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentLocation = {};
                self = this;

                _wepy2.default.getLocation({
                  type: 'wgs84',
                  success: function success(res) {
                    currentLocation = { latitude: res.latitude, longitude: res.longitude };
                    console.log(currentLocation);
                  }
                });
                this.list.forEach(function (item) {
                  self.getDistance(currentLocation, item);
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateGpsDistance() {
        return _ref3.apply(this, arguments);
      }

      return updateGpsDistance;
    }()
  }, {
    key: 'getDistance',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(current, target) {
        var lat1, lng1, lat2, lng2, rad;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                lat1 = current.latitude || 0;
                lng1 = current.longitude || 0;
                lat2 = target.location.latitude || 0;
                lng2 = target.location.longitude || 0;


                lng1 = this.changeToRad(lng1);
                lat1 = this.changeToRad(lat1);

                lng2 = this.changeToRad(lng2);
                lat2 = this.changeToRad(lat2);

                rad = Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng1 - lng2) + Math.sin(lat1) * Math.sin(lat2));

                if (rad > Math.PI) {
                  rad = Math.PI * 2 - rad;
                }
                target.distance = (6371.004 * rad / 1000).toFixed(1);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getDistance(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return getDistance;
    }()
  }, {
    key: 'changeToRad',
    value: function changeToRad(angle) {
      return angle / 180 * Math.PI;
    }
  }]);

  return WoFaBu;
}(_wepy2.default.component);

exports.default = WoFaBu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvZmFidS5qcyJdLCJuYW1lcyI6WyJXb0ZhQnUiLCJkYXRhIiwic3lzSGVpZ2h0IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dIZWlnaHQiLCJsaXN0Iiwiam9pbkF2YXRhciIsImFsZW5ndGgiLCJjb21wdXRlZCIsInRlc3QiLCJ5aWppYXJ1TGlzdCIsInVwZGF0ZUdwc0Rpc3RhbmNlIiwibGVuZ3RoIiwiY3VycmVudExvY2F0aW9uIiwic2VsZiIsImdldExvY2F0aW9uIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsImdldERpc3RhbmNlIiwiY3VycmVudCIsInRhcmdldCIsImxhdDEiLCJsbmcxIiwibGF0MiIsImxvY2F0aW9uIiwibG5nMiIsImNoYW5nZVRvUmFkIiwicmFkIiwiTWF0aCIsImFjb3MiLCJjb3MiLCJzaW4iLCJQSSIsImRpc3RhbmNlIiwidG9GaXhlZCIsImFuZ2xlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLGVBQUtDLGlCQUFMLEdBQXlCQyxZQUQvQjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsa0JBQVksQ0FBQyxjQUFELEVBQWlCLGNBQWpCLEVBQWlDLGNBQWpDLEVBQWlELGNBQWpELENBSFA7QUFJTEMsZUFBUztBQUpKLEssUUFZUEMsUSxHQUFXO0FBRVRDLFVBRlMsa0JBRUY7QUFDTCxlQUFPLFVBQVA7QUFDRDtBQUpRLEs7Ozs7Ozs7Ozs7O0FBSlQscUJBQUtKLElBQUwsR0FBWSxhQUFNSyxXQUFsQjs7dUJBQ00sS0FBS0MsaUJBQUwsRTs7O0FBQ04scUJBQUtKLE9BQUwsR0FBZ0IsS0FBS0QsVUFBTixDQUFrQk0sTUFBakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTSUMsK0IsR0FBa0IsRTtBQUNsQkMsb0IsR0FBTyxJOztBQUNYLCtCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLHdCQUFNLE9BRFM7QUFFZkMsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkwsc0NBQWtCLEVBQUNNLFVBQVVELElBQUlDLFFBQWYsRUFBeUJDLFdBQVdGLElBQUlFLFNBQXhDLEVBQWxCO0FBQ0FDLDRCQUFRQyxHQUFSLENBQVlULGVBQVo7QUFDRDtBQUxjLGlCQUFqQjtBQU9BLHFCQUFLUixJQUFMLENBQVVrQixPQUFWLENBQWtCLFVBQVNDLElBQVQsRUFBZTtBQUMvQlYsdUJBQUtXLFdBQUwsQ0FBaUJaLGVBQWpCLEVBQWtDVyxJQUFsQztBQUNELGlCQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUlnQkUsTyxFQUFTQyxNOzs7Ozs7QUFDckJDLG9CLEdBQU9GLFFBQVFQLFFBQVIsSUFBb0IsQztBQUMzQlUsb0IsR0FBT0gsUUFBUU4sU0FBUixJQUFxQixDO0FBQzVCVSxvQixHQUFPSCxPQUFPSSxRQUFQLENBQWdCWixRQUFoQixJQUE0QixDO0FBQ25DYSxvQixHQUFPTCxPQUFPSSxRQUFQLENBQWdCWCxTQUFoQixJQUE2QixDOzs7QUFFeENTLHVCQUFPLEtBQUtJLFdBQUwsQ0FBaUJKLElBQWpCLENBQVA7QUFDQUQsdUJBQU8sS0FBS0ssV0FBTCxDQUFpQkwsSUFBakIsQ0FBUDs7QUFFQUksdUJBQU8sS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBUDtBQUNBRix1QkFBTyxLQUFLRyxXQUFMLENBQWlCSCxJQUFqQixDQUFQOztBQUVJSSxtQixHQUFNQyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLEdBQUwsQ0FBU1QsSUFBVCxJQUFpQk8sS0FBS0UsR0FBTCxDQUFTUCxJQUFULENBQWpCLEdBQWtDSyxLQUFLRSxHQUFMLENBQVNSLE9BQU9HLElBQWhCLENBQWxDLEdBQTBERyxLQUFLRyxHQUFMLENBQVNWLElBQVQsSUFBaUJPLEtBQUtHLEdBQUwsQ0FBU1IsSUFBVCxDQUFyRixDOztBQUNWLG9CQUFJSSxNQUFNQyxLQUFLSSxFQUFmLEVBQW1CO0FBQ2pCTCx3QkFBTUMsS0FBS0ksRUFBTCxHQUFVLENBQVYsR0FBY0wsR0FBcEI7QUFDRDtBQUNEUCx1QkFBT2EsUUFBUCxHQUFrQixDQUFDLFdBQVdOLEdBQVgsR0FBaUIsSUFBbEIsRUFBd0JPLE9BQXhCLENBQWdDLENBQWhDLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBRVVDLEssRUFBTztBQUNqQixhQUFPQSxRQUFRLEdBQVIsR0FBY1AsS0FBS0ksRUFBMUI7QUFDRDs7OztFQXJEaUMsZUFBS0ksUzs7a0JBQXBCM0MsTSIsImZpbGUiOiJ3b2ZhYnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gJy4uL2R1bW15J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb0ZhQnUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgc3lzSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGxpc3Q6IFtdLFxuICAgIGpvaW5BdmF0YXI6IFsnLi9hdmF0YXIucG5nJywgJy4vYXZhdGFyLnBuZycsICcuL2F2YXRhci5wbmcnLCAnLi9hdmF0YXIucG5nJ10sXG4gICAgYWxlbmd0aDogMFxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIHRoaXMubGlzdCA9IGR1bW15LnlpamlhcnVMaXN0XG4gICAgYXdhaXQgdGhpcy51cGRhdGVHcHNEaXN0YW5jZSgpXG4gICAgdGhpcy5hbGVuZ3RoID0gKHRoaXMuam9pbkF2YXRhcikubGVuZ3RoXG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgICB0ZXN0KCkge1xuICAgICAgcmV0dXJuICdpdCB3b3JrcydcbiAgICB9XG4gIH1cbiAgYXN5bmMgdXBkYXRlR3BzRGlzdGFuY2UgKCkge1xuICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSB7fVxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0TG9jYXRpb24oe1xuICAgICAgdHlwZTogJ3dnczg0JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjdXJyZW50TG9jYXRpb24gPSB7bGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSwgbG9uZ2l0dWRlOiByZXMubG9uZ2l0dWRlfVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50TG9jYXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBzZWxmLmdldERpc3RhbmNlKGN1cnJlbnRMb2NhdGlvbiwgaXRlbSlcbiAgICB9KVxuICB9XG4gIGFzeW5jIGdldERpc3RhbmNlKGN1cnJlbnQsIHRhcmdldCkge1xuICAgIHZhciBsYXQxID0gY3VycmVudC5sYXRpdHVkZSB8fCAwXG4gICAgdmFyIGxuZzEgPSBjdXJyZW50LmxvbmdpdHVkZSB8fCAwXG4gICAgdmFyIGxhdDIgPSB0YXJnZXQubG9jYXRpb24ubGF0aXR1ZGUgfHwgMFxuICAgIHZhciBsbmcyID0gdGFyZ2V0LmxvY2F0aW9uLmxvbmdpdHVkZSB8fCAwXG5cbiAgICBsbmcxID0gdGhpcy5jaGFuZ2VUb1JhZChsbmcxKVxuICAgIGxhdDEgPSB0aGlzLmNoYW5nZVRvUmFkKGxhdDEpXG5cbiAgICBsbmcyID0gdGhpcy5jaGFuZ2VUb1JhZChsbmcyKVxuICAgIGxhdDIgPSB0aGlzLmNoYW5nZVRvUmFkKGxhdDIpXG5cbiAgICB2YXIgcmFkID0gTWF0aC5hY29zKE1hdGguY29zKGxhdDEpICogTWF0aC5jb3MobGF0MikgKiBNYXRoLmNvcyhsbmcxIC0gbG5nMikgKyBNYXRoLnNpbihsYXQxKSAqIE1hdGguc2luKGxhdDIpKVxuICAgIGlmIChyYWQgPiBNYXRoLlBJKSB7XG4gICAgICByYWQgPSBNYXRoLlBJICogMiAtIHJhZFxuICAgIH1cbiAgICB0YXJnZXQuZGlzdGFuY2UgPSAoNjM3MS4wMDQgKiByYWQgLyAxMDAwKS50b0ZpeGVkKDEpXG4gIH1cbiAgY2hhbmdlVG9SYWQoYW5nbGUpIHtcbiAgICByZXR1cm4gYW5nbGUgLyAxODAgKiBNYXRoLlBJXG4gIH1cbn1cbiJdfQ==