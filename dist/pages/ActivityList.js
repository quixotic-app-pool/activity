'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _yijiaru = require('./../components/yijiaru.js');

var _yijiaru2 = _interopRequireDefault(_yijiaru);

var _wofabu = require('./../components/wofabu.js');

var _wofabu2 = _interopRequireDefault(_wofabu);

var _floatingbtn = require('./../components/floatingbtn.js');

var _floatingbtn2 = _interopRequireDefault(_floatingbtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityList = function (_wepy$page) {
  _inherits(ActivityList, _wepy$page);

  function ActivityList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActivityList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivityList.__proto__ || Object.getPrototypeOf(ActivityList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '校园活动lite'
    }, _this.data = {
      list: [],
      page: 1,
      tabList: ['已加入', '我发布'],
      currentTab: 0
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:currentTab.sync": "currentTab", "v-bind:tabList.sync": "tabList" }, "yijiaru": { "xmlns:wx": "" }, "wofabu": {} }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      yijiaru: _yijiaru2.default,
      wofabu: _wofabu2.default,
      floatingbtn: _floatingbtn2.default
    }, _this.methods = {
      getCurrentTab: function getCurrentTab(cur, evt) {
        this.currentTab = cur;
        console.log('currenttab is ' + cur);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ActivityList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ActivityList , 'pages/ActivityList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGl2aXR5TGlzdC5qcyJdLCJuYW1lcyI6WyJBY3Rpdml0eUxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJwYWdlIiwidGFiTGlzdCIsImN1cnJlbnRUYWIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0YWIiLCJ5aWppYXJ1Iiwid29mYWJ1IiwiZmxvYXRpbmdidG4iLCJtZXRob2RzIiwiZ2V0Q3VycmVudFRhYiIsImN1ciIsImV2dCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTSxDQUZEO0FBR0xDLGVBQVMsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUhKO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU1SQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsY0FBYSxFQUFkLEVBQWlCLGdCQUFlLEVBQWhDLEVBQW1DLDBCQUF5QixZQUE1RCxFQUF5RSx1QkFBc0IsU0FBL0YsRUFBUCxFQUFpSCxXQUFVLEVBQUMsWUFBVyxFQUFaLEVBQTNILEVBQTJJLFVBQVMsRUFBcEosRSxRQUNUQyxPLEdBQVUsRUFBQyxPQUFNLEVBQUMsbUJBQWtCLGVBQW5CLEVBQVAsRSxRQUNUQyxVLEdBQWE7QUFDVkMsd0JBRFU7QUFFVkMsZ0NBRlU7QUFHVkMsOEJBSFU7QUFJVkM7QUFKVSxLLFFBTVpDLE8sR0FBVTtBQUNSQyxtQkFEUSx5QkFDTUMsR0FETixFQUNXQyxHQURYLEVBQ2dCO0FBQ3RCLGFBQUtaLFVBQUwsR0FBa0JXLEdBQWxCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVksbUJBQW1CSCxHQUEvQjtBQUNBLGFBQUtJLE1BQUw7QUFDRDtBQUxPLEs7Ozs7RUFuQjhCLGVBQUtqQixJOztrQkFBMUJMLFkiLCJmaWxlIjoiQWN0aXZpdHlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYidcbmltcG9ydCBZaWppYXJ1IGZyb20gJy4uL2NvbXBvbmVudHMveWlqaWFydSdcbmltcG9ydCBXb2ZhYnUgZnJvbSAnLi4vY29tcG9uZW50cy93b2ZhYnUnXG5pbXBvcnQgZmxvYXRpbmdidG4gZnJvbSAnLi4vY29tcG9uZW50cy9mbG9hdGluZ2J0bidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdHlMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmoKHlm63mtLvliqhsaXRlJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgcGFnZTogMSxcbiAgICB0YWJMaXN0OiBbJ+W3suWKoOWFpScsICfmiJHlj5HluIMnXSxcbiAgICBjdXJyZW50VGFiOiAwXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInYtYmluZDp0YWJMaXN0LnN5bmNcIjpcInRhYkxpc3RcIn0sXCJ5aWppYXJ1XCI6e1wieG1sbnM6d3hcIjpcIlwifSxcIndvZmFidVwiOnt9fTtcclxuJGV2ZW50cyA9IHtcInRhYlwiOntcInYtb246Y3VycmVudFRhYlwiOlwiZ2V0Q3VycmVudFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHRhYjogVGFiLFxuICAgIHlpamlhcnU6IFlpamlhcnUsXG4gICAgd29mYWJ1OiBXb2ZhYnUsXG4gICAgZmxvYXRpbmdidG46IGZsb2F0aW5nYnRuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRDdXJyZW50VGFiKGN1ciwgZXZ0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUYWIgPSBjdXJcbiAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50dGFiIGlzICcgKyBjdXIpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=