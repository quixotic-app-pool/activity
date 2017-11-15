'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '活动细节'
    }, _this.data = {
      blog: {},
      title: '职业发展协会演讲比赛',
      date: '2017年10月22日（周日）04：30',
      location: '南京市山畔水榭花苑西南（杨村二路）',
      activitydetail: '话说这次活动那真是隆重，震惊四方，各路武林豪杰悉数登场！话说这次活动那真是隆重，震惊四方，各路武林豪杰悉数登场！话说这次活动那真是隆重，震惊四方，各路武林豪杰悉数登场！话说这次活动那真是隆重，震惊四方，各路武林豪杰悉数登场！',
      status: '进行中',
      joinNum: 8,
      joinAvatar: ['./avatar.png', './avatar.png', './avatar.png', './avatar.png'],
      alength: 0
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '职业发展协会演讲比赛',
          path: '/pages/ActivityDetail',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'onLoad',
    value: function onLoad() {
      this.alength = this.joinAvatar.length;
    }
  }]);

  return Detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/ActivityDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGl2aXR5RGV0YWlsLmpzIl0sIm5hbWVzIjpbIkRldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYmxvZyIsInRpdGxlIiwiZGF0ZSIsImxvY2F0aW9uIiwiYWN0aXZpdHlkZXRhaWwiLCJzdGF0dXMiLCJqb2luTnVtIiwiam9pbkF2YXRhciIsImFsZW5ndGgiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNDOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsYUFBTyxZQUZGO0FBR0xDLFlBQU0sc0JBSEQ7QUFJTEMsZ0JBQVUsbUJBSkw7QUFLTEMsc0JBQWdCLGtIQUxYO0FBTUxDLGNBQVEsS0FOSDtBQU9MQyxlQUFTLENBUEo7QUFRTEMsa0JBQVksQ0FBQyxjQUFELEVBQWlCLGNBQWpCLEVBQWlDLGNBQWpDLEVBQWlELGNBQWpELENBUlA7QUFTTEMsZUFBUztBQVRKLEssUUFjUEMsTyxHQUFVO0FBQ1JDLHlCQUFtQiwyQkFBVUMsR0FBVixFQUFlO0FBQ2hDLFlBQUlBLElBQUlDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QjtBQUNBQyxrQkFBUUMsR0FBUixDQUFZSCxJQUFJSSxNQUFoQjtBQUNEO0FBQ0QsZUFBTztBQUNMZCxpQkFBTyxZQURGO0FBRUxlLGdCQUFNLHVCQUZEO0FBR0xDLG1CQUFTLGlCQUFTTixHQUFULEVBQWM7QUFDckI7QUFDRCxXQUxJO0FBTUxPLGdCQUFNLGNBQVNQLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBUkksU0FBUDtBQVVEOztBQWhCTyxLOzs7Ozs2QkFIQTtBQUNSLFdBQUtILE9BQUwsR0FBZ0IsS0FBS0QsVUFBTixDQUFrQlksTUFBakM7QUFDRDs7OztFQWpCaUMsZUFBS0MsSTs7a0JBQXBCeEIsTSIsImZpbGUiOiJBY3Rpdml0eURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgY29uZmlnID0ge1xuICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rS75Yqo57uG6IqCJ1xuICAgfVxuICAgZGF0YSA9IHtcbiAgICAgYmxvZzoge30sXG4gICAgIHRpdGxlOiAn6IGM5Lia5Y+R5bGV5Y2P5Lya5ryU6K6y5q+U6LWbJyxcbiAgICAgZGF0ZTogJzIwMTflubQxMOaciDIy5pel77yI5ZGo5pel77yJMDTvvJozMCcsXG4gICAgIGxvY2F0aW9uOiAn5Y2X5Lqs5biC5bGx55WU5rC05qat6Iqx6IuR6KW/5Y2X77yI5p2o5p2R5LqM6Lev77yJJyxcbiAgICAgYWN0aXZpdHlkZXRhaWw6ICfor53or7Tov5nmrKHmtLvliqjpgqPnnJ/mmK/pmobph43vvIzpnIfmg4rlm5vmlrnvvIzlkITot6/mrabmnpfosarmnbDmgonmlbDnmbvlnLrvvIHor53or7Tov5nmrKHmtLvliqjpgqPnnJ/mmK/pmobph43vvIzpnIfmg4rlm5vmlrnvvIzlkITot6/mrabmnpfosarmnbDmgonmlbDnmbvlnLrvvIHor53or7Tov5nmrKHmtLvliqjpgqPnnJ/mmK/pmobph43vvIzpnIfmg4rlm5vmlrnvvIzlkITot6/mrabmnpfosarmnbDmgonmlbDnmbvlnLrvvIHor53or7Tov5nmrKHmtLvliqjpgqPnnJ/mmK/pmobph43vvIzpnIfmg4rlm5vmlrnvvIzlkITot6/mrabmnpfosarmnbDmgonmlbDnmbvlnLrvvIEnLFxuICAgICBzdGF0dXM6ICfov5vooYzkuK0nLFxuICAgICBqb2luTnVtOiA4LFxuICAgICBqb2luQXZhdGFyOiBbJy4vYXZhdGFyLnBuZycsICcuL2F2YXRhci5wbmcnLCAnLi9hdmF0YXIucG5nJywgJy4vYXZhdGFyLnBuZyddLFxuICAgICBhbGVuZ3RoOiAwXG4gICB9XG4gICBvbkxvYWQgKCkge1xuICAgICB0aGlzLmFsZW5ndGggPSAodGhpcy5qb2luQXZhdGFyKS5sZW5ndGhcbiAgIH1cbiAgIG1ldGhvZHMgPSB7XG4gICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgIH1cbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgdGl0bGU6ICfogYzkuJrlj5HlsZXljY/kvJrmvJTorrLmr5TotZsnLFxuICAgICAgICAgcGF0aDogJy9wYWdlcy9BY3Rpdml0eURldGFpbCcsXG4gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgICB9LFxuICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuXG4gICB9XG4gfVxuICJdfQ==