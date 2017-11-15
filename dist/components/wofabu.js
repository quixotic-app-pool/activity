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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WoFaBu, [{
    key: 'onLoad',
    value: function onLoad() {
      this.list = _dummy.dummy.yijiaruList;
      this.alength = this.joinAvatar.length;
    }
  }]);

  return WoFaBu;
}(_wepy2.default.component);

exports.default = WoFaBu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvZmFidS5qcyJdLCJuYW1lcyI6WyJXb0ZhQnUiLCJkYXRhIiwic3lzSGVpZ2h0IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dIZWlnaHQiLCJsaXN0Iiwiam9pbkF2YXRhciIsImFsZW5ndGgiLCJtZXRob2RzIiwieWlqaWFydUxpc3QiLCJsZW5ndGgiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLGVBQUtDLGlCQUFMLEdBQXlCQyxZQUQvQjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsa0JBQVksQ0FBQyxjQUFELEVBQWlCLGNBQWpCLEVBQWlDLGNBQWpDLEVBQWlELGNBQWpELENBSFA7QUFJTEMsZUFBUztBQUpKLEssUUFXUEMsTyxHQUFVLEU7Ozs7OzZCQUpEO0FBQ1AsV0FBS0gsSUFBTCxHQUFZLGFBQU1JLFdBQWxCO0FBQ0EsV0FBS0YsT0FBTCxHQUFnQixLQUFLRCxVQUFOLENBQWtCSSxNQUFqQztBQUNEOzs7O0VBWGlDLGVBQUtDLFM7O2tCQUFwQlgsTSIsImZpbGUiOiJ3b2ZhYnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gJy4uL2R1bW15J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb0ZhQnUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgc3lzSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGxpc3Q6IFtdLFxuICAgIGpvaW5BdmF0YXI6IFsnLi9hdmF0YXIucG5nJywgJy4vYXZhdGFyLnBuZycsICcuL2F2YXRhci5wbmcnLCAnLi9hdmF0YXIucG5nJ10sXG4gICAgYWxlbmd0aDogMFxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubGlzdCA9IGR1bW15LnlpamlhcnVMaXN0XG4gICAgdGhpcy5hbGVuZ3RoID0gKHRoaXMuam9pbkF2YXRhcikubGVuZ3RoXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxufVxuIl19