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

var YiJiaRu = function (_wepy$component) {
  _inherits(YiJiaRu, _wepy$component);

  function YiJiaRu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YiJiaRu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YiJiaRu.__proto__ || Object.getPrototypeOf(YiJiaRu)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
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

  _createClass(YiJiaRu, [{
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

  return YiJiaRu;
}(_wepy2.default.component);

exports.default = YiJiaRu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlpamlhcnUuanMiXSwibmFtZXMiOlsiWWlKaWFSdSIsImRhdGEiLCJzeXNIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsImxpc3QiLCJqb2luQXZhdGFyIiwiYWxlbmd0aCIsImNvbXB1dGVkIiwidGVzdCIsInlpamlhcnVMaXN0IiwidXBkYXRlR3BzRGlzdGFuY2UiLCJsZW5ndGgiLCJjdXJyZW50TG9jYXRpb24iLCJzZWxmIiwiZ2V0TG9jYXRpb24iLCJ0eXBlIiwic3VjY2VzcyIsInJlcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJpdGVtIiwiZ2V0RGlzdGFuY2UiLCJjdXJyZW50IiwidGFyZ2V0IiwibGF0MSIsImxuZzEiLCJsYXQyIiwibG9jYXRpb24iLCJsbmcyIiwiY2hhbmdlVG9SYWQiLCJyYWQiLCJNYXRoIiwiYWNvcyIsImNvcyIsInNpbiIsIlBJIiwiZGlzdGFuY2UiLCJ0b0ZpeGVkIiwiYW5nbGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsZUFBS0MsaUJBQUwsR0FBeUJDLFlBRC9CO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxrQkFBWSxDQUFDLGNBQUQsRUFBaUIsY0FBakIsRUFBaUMsY0FBakMsRUFBaUQsY0FBakQsQ0FIUDtBQUlMQyxlQUFTO0FBSkosSyxRQVlQQyxRLEdBQVc7QUFFVEMsVUFGUyxrQkFFRjtBQUNMLGVBQU8sVUFBUDtBQUNEO0FBSlEsSzs7Ozs7Ozs7Ozs7QUFKVCxxQkFBS0osSUFBTCxHQUFZLGFBQU1LLFdBQWxCOzt1QkFDTSxLQUFLQyxpQkFBTCxFOzs7QUFDTixxQkFBS0osT0FBTCxHQUFnQixLQUFLRCxVQUFOLENBQWtCTSxNQUFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNJQywrQixHQUFrQixFO0FBQ2xCQyxvQixHQUFPLEk7O0FBQ1gsK0JBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsd0JBQU0sT0FEUztBQUVmQywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTCxzQ0FBa0IsRUFBQ00sVUFBVUQsSUFBSUMsUUFBZixFQUF5QkMsV0FBV0YsSUFBSUUsU0FBeEMsRUFBbEI7QUFDQUMsNEJBQVFDLEdBQVIsQ0FBWVQsZUFBWjtBQUNEO0FBTGMsaUJBQWpCO0FBT0EscUJBQUtSLElBQUwsQ0FBVWtCLE9BQVYsQ0FBa0IsVUFBU0MsSUFBVCxFQUFlO0FBQy9CVix1QkFBS1csV0FBTCxDQUFpQlosZUFBakIsRUFBa0NXLElBQWxDO0FBQ0QsaUJBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBSWdCRSxPLEVBQVNDLE07Ozs7OztBQUNyQkMsb0IsR0FBT0YsUUFBUVAsUUFBUixJQUFvQixDO0FBQzNCVSxvQixHQUFPSCxRQUFRTixTQUFSLElBQXFCLEM7QUFDNUJVLG9CLEdBQU9ILE9BQU9JLFFBQVAsQ0FBZ0JaLFFBQWhCLElBQTRCLEM7QUFDbkNhLG9CLEdBQU9MLE9BQU9JLFFBQVAsQ0FBZ0JYLFNBQWhCLElBQTZCLEM7OztBQUV4Q1MsdUJBQU8sS0FBS0ksV0FBTCxDQUFpQkosSUFBakIsQ0FBUDtBQUNBRCx1QkFBTyxLQUFLSyxXQUFMLENBQWlCTCxJQUFqQixDQUFQOztBQUVBSSx1QkFBTyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFQO0FBQ0FGLHVCQUFPLEtBQUtHLFdBQUwsQ0FBaUJILElBQWpCLENBQVA7O0FBRUlJLG1CLEdBQU1DLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsR0FBTCxDQUFTVCxJQUFULElBQWlCTyxLQUFLRSxHQUFMLENBQVNQLElBQVQsQ0FBakIsR0FBa0NLLEtBQUtFLEdBQUwsQ0FBU1IsT0FBT0csSUFBaEIsQ0FBbEMsR0FBMERHLEtBQUtHLEdBQUwsQ0FBU1YsSUFBVCxJQUFpQk8sS0FBS0csR0FBTCxDQUFTUixJQUFULENBQXJGLEM7O0FBQ1Ysb0JBQUlJLE1BQU1DLEtBQUtJLEVBQWYsRUFBbUI7QUFDakJMLHdCQUFNQyxLQUFLSSxFQUFMLEdBQVUsQ0FBVixHQUFjTCxHQUFwQjtBQUNEO0FBQ0RQLHVCQUFPYSxRQUFQLEdBQWtCLENBQUMsV0FBV04sR0FBWCxHQUFpQixJQUFsQixFQUF3Qk8sT0FBeEIsQ0FBZ0MsQ0FBaEMsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FFVUMsSyxFQUFPO0FBQ2pCLGFBQU9BLFFBQVEsR0FBUixHQUFjUCxLQUFLSSxFQUExQjtBQUNEOzs7O0VBckRrQyxlQUFLSSxTOztrQkFBckIzQyxPIiwiZmlsZSI6InlpamlhcnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gJy4uL2R1bW15J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZaUppYVJ1IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgIHN5c0hlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICBsaXN0OiBbXSxcbiAgICBqb2luQXZhdGFyOiBbJy4vYXZhdGFyLnBuZycsICcuL2F2YXRhci5wbmcnLCAnLi9hdmF0YXIucG5nJywgJy4vYXZhdGFyLnBuZyddLFxuICAgIGFsZW5ndGg6IDBcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxpc3QgPSBkdW1teS55aWppYXJ1TGlzdFxuICAgIGF3YWl0IHRoaXMudXBkYXRlR3BzRGlzdGFuY2UoKVxuICAgIHRoaXMuYWxlbmd0aCA9ICh0aGlzLmpvaW5BdmF0YXIpLmxlbmd0aFxuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gICAgdGVzdCgpIHtcbiAgICAgIHJldHVybiAnaXQgd29ya3MnXG4gICAgfVxuICB9XG4gIGFzeW5jIHVwZGF0ZUdwc0Rpc3RhbmNlICgpIHtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0ge31cbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldExvY2F0aW9uKHtcbiAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uID0ge2xhdGl0dWRlOiByZXMubGF0aXR1ZGUsIGxvbmdpdHVkZTogcmVzLmxvbmdpdHVkZX1cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudExvY2F0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5saXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgc2VsZi5nZXREaXN0YW5jZShjdXJyZW50TG9jYXRpb24sIGl0ZW0pXG4gICAgfSlcbiAgfVxuICBhc3luYyBnZXREaXN0YW5jZShjdXJyZW50LCB0YXJnZXQpIHtcbiAgICB2YXIgbGF0MSA9IGN1cnJlbnQubGF0aXR1ZGUgfHwgMFxuICAgIHZhciBsbmcxID0gY3VycmVudC5sb25naXR1ZGUgfHwgMFxuICAgIHZhciBsYXQyID0gdGFyZ2V0LmxvY2F0aW9uLmxhdGl0dWRlIHx8IDBcbiAgICB2YXIgbG5nMiA9IHRhcmdldC5sb2NhdGlvbi5sb25naXR1ZGUgfHwgMFxuXG4gICAgbG5nMSA9IHRoaXMuY2hhbmdlVG9SYWQobG5nMSlcbiAgICBsYXQxID0gdGhpcy5jaGFuZ2VUb1JhZChsYXQxKVxuXG4gICAgbG5nMiA9IHRoaXMuY2hhbmdlVG9SYWQobG5nMilcbiAgICBsYXQyID0gdGhpcy5jaGFuZ2VUb1JhZChsYXQyKVxuXG4gICAgdmFyIHJhZCA9IE1hdGguYWNvcyhNYXRoLmNvcyhsYXQxKSAqIE1hdGguY29zKGxhdDIpICogTWF0aC5jb3MobG5nMSAtIGxuZzIpICsgTWF0aC5zaW4obGF0MSkgKiBNYXRoLnNpbihsYXQyKSlcbiAgICBpZiAocmFkID4gTWF0aC5QSSkge1xuICAgICAgcmFkID0gTWF0aC5QSSAqIDIgLSByYWRcbiAgICB9XG4gICAgdGFyZ2V0LmRpc3RhbmNlID0gKDYzNzEuMDA0ICogcmFkIC8gMTAwMCkudG9GaXhlZCgxKVxuICB9XG4gIGNoYW5nZVRvUmFkKGFuZ2xlKSB7XG4gICAgcmV0dXJuIGFuZ2xlIC8gMTgwICogTWF0aC5QSVxuICB9XG59XG4iXX0=