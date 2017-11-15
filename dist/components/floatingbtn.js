'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Floatingbtn = function (_wepy$component) {
  _inherits(Floatingbtn, _wepy$component);

  function Floatingbtn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Floatingbtn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Floatingbtn.__proto__ || Object.getPrototypeOf(Floatingbtn)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.methods = {
      longpress: function longpress() {
        console.log('long press');
        _wepy2.default.pageScrollTo({
          scrollTop: 0
        });
      },
      write: function write() {
        _wepy2.default.navigateTo({
          url: '/pages/NewActivity'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Floatingbtn;
}(_wepy2.default.component);

exports.default = Floatingbtn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0aW5nYnRuLmpzIl0sIm5hbWVzIjpbIkZsb2F0aW5nYnRuIiwiZGF0YSIsIm1ldGhvZHMiLCJsb25ncHJlc3MiLCJjb25zb2xlIiwibG9nIiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwid3JpdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWQyxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQSx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVc7QUFESyxTQUFsQjtBQUdELE9BTk87QUFPUkMsV0FQUSxtQkFPQTtBQUNOLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBWE8sSzs7OztFQUg2QixlQUFLQyxTOztrQkFBekJYLFciLCJmaWxlIjoiZmxvYXRpbmdidG4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ2J0biBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxvbmdwcmVzcygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb25nIHByZXNzJylcbiAgICAgIHdlcHkucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgd3JpdGUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvTmV3QWN0aXZpdHknXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19