'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewActivity = function (_wepy$page) {
  _inherits(NewActivity, _wepy$page);

  function NewActivity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewActivity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewActivity.__proto__ || Object.getPrototypeOf(NewActivity)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '创建活动'
    }, _this.data = {
      blog: {},
      disabled: true,
      date: '',
      time: '',
      location: ''
    }, _this.methods = {
      inputChange: function inputChange(e) {
        console.log('input change');
        this.disabled = e.detail.value === '';
      },
      inputtitle: function inputtitle(e) {
        console.log('input title');
      },
      send: function send() {},
      bindDateChange: function bindDateChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.date = e.detail.value;
        this.$apply();
      },
      bindTimeChange: function bindTimeChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.time = e.detail.value;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return NewActivity;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewActivity , 'pages/NewActivity'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5ld0FjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIk5ld0FjdGl2aXR5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJibG9nIiwiZGlzYWJsZWQiLCJkYXRlIiwidGltZSIsImxvY2F0aW9uIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImlucHV0dGl0bGUiLCJzZW5kIiwiYmluZERhdGVDaGFuZ2UiLCIkYXBwbHkiLCJiaW5kVGltZUNoYW5nZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVLElBRkw7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxnQkFBVTtBQUxMLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNLQyxDQURMLEVBQ1E7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsYUFBS1IsUUFBTCxHQUFnQk0sRUFBRUcsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5DO0FBQ0QsT0FKTztBQUtSQyxnQkFMUSxzQkFLSUwsQ0FMSixFQUtPO0FBQ2JDLGdCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNELE9BUE87QUFRUkksVUFSUSxrQkFRQSxDQUVQLENBVk87QUFXUkMsb0JBWFEsMEJBV1FQLENBWFIsRUFXVztBQUNqQkMsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUExQztBQUNBLGFBQUtULElBQUwsR0FBWUssRUFBRUcsTUFBRixDQUFTQyxLQUFyQjtBQUNBLGFBQUtJLE1BQUw7QUFDRCxPQWZPO0FBZ0JSQyxvQkFoQlEsMEJBZ0JRVCxDQWhCUixFQWdCVztBQUNqQkMsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUExQztBQUNBLGFBQUtSLElBQUwsR0FBWUksRUFBRUcsTUFBRixDQUFTQyxLQUFyQjtBQUNBLGFBQUtJLE1BQUw7QUFDRDtBQXBCTyxLOzs7O0VBWjZCLGVBQUtFLEk7O2tCQUF6QnJCLFciLCJmaWxlIjoiTmV3QWN0aXZpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdBY3Rpdml0eSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yib5bu65rS75YqoJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBibG9nOiB7fSxcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICBkYXRlOiAnJyxcbiAgICB0aW1lOiAnJyxcbiAgICBsb2NhdGlvbjogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGlucHV0Q2hhbmdlIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5wdXQgY2hhbmdlJylcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBlLmRldGFpbC52YWx1ZSA9PT0gJydcbiAgICB9LFxuICAgIGlucHV0dGl0bGUgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbnB1dCB0aXRsZScpXG4gICAgfSxcbiAgICBzZW5kICgpIHtcblxuICAgIH0sXG4gICAgYmluZERhdGVDaGFuZ2UgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIHRoaXMuZGF0ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBiaW5kVGltZUNoYW5nZSAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgdGhpcy50aW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbn1cbiJdfQ==