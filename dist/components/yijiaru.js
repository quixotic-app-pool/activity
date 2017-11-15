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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YiJiaRu, [{
    key: 'onLoad',
    value: function onLoad() {
      this.list = _dummy.dummy.yijiaruList;
      this.alength = this.joinAvatar.length;
    }
  }]);

  return YiJiaRu;
}(_wepy2.default.component);

exports.default = YiJiaRu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlpamlhcnUuanMiXSwibmFtZXMiOlsiWWlKaWFSdSIsImRhdGEiLCJzeXNIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsImxpc3QiLCJqb2luQXZhdGFyIiwiYWxlbmd0aCIsIm1ldGhvZHMiLCJ5aWppYXJ1TGlzdCIsImxlbmd0aCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsZUFBS0MsaUJBQUwsR0FBeUJDLFlBRC9CO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxrQkFBWSxDQUFDLGNBQUQsRUFBaUIsY0FBakIsRUFBaUMsY0FBakMsRUFBaUQsY0FBakQsQ0FIUDtBQUlMQyxlQUFTO0FBSkosSyxRQVdQQyxPLEdBQVUsRTs7Ozs7NkJBSkQ7QUFDUCxXQUFLSCxJQUFMLEdBQVksYUFBTUksV0FBbEI7QUFDQSxXQUFLRixPQUFMLEdBQWdCLEtBQUtELFVBQU4sQ0FBa0JJLE1BQWpDO0FBQ0Q7Ozs7RUFYa0MsZUFBS0MsUzs7a0JBQXJCWCxPIiwiZmlsZSI6InlpamlhcnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gJy4uL2R1bW15J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZaUppYVJ1IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgIHN5c0hlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICBsaXN0OiBbXSxcbiAgICBqb2luQXZhdGFyOiBbJy4vYXZhdGFyLnBuZycsICcuL2F2YXRhci5wbmcnLCAnLi9hdmF0YXIucG5nJywgJy4vYXZhdGFyLnBuZyddLFxuICAgIGFsZW5ndGg6IDBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxpc3QgPSBkdW1teS55aWppYXJ1TGlzdFxuICAgIHRoaXMuYWxlbmd0aCA9ICh0aGlzLmpvaW5BdmF0YXIpLmxlbmd0aFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbn1cbiJdfQ==