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

var Filter = function (_wepy$component) {
  _inherits(Filter, _wepy$component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      currentTab: {
        default: 0
      },
      tabList: {
        type: Object
      }
    }, _this.methods = {
      /**
       * 点击tab切换
       */
      swichNav: function swichNav(e) {
        var that = this;
        if (this.currentTab === e.target.dataset.current) {
          return false;
        } else {
          that.currentTab = e.target.dataset.current;
          that.$apply();
        }
        this.$emit('currentTab', that.currentTab);
      },

      /**
       * 头部红点标识
       * @param  {[type]} dotList [description]
       * @return {[type]}         [description]
       */
      changeList: function changeList(dotList) {
        this.tabList = dotList;
      }
    }, _this.watch = {
      currentTab: function currentTab(newValue, oldValue) {
        console.log('currentTab value: ' + oldValue + ' -> ' + newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // onLoad() {
  //   let that = this
  // }


  return Filter;
}(_wepy2.default.component);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJGaWx0ZXIiLCJwcm9wcyIsImN1cnJlbnRUYWIiLCJkZWZhdWx0IiwidGFiTGlzdCIsInR5cGUiLCJPYmplY3QiLCJtZXRob2RzIiwic3dpY2hOYXYiLCJlIiwidGhhdCIsInRhcmdldCIsImRhdGFzZXQiLCJjdXJyZW50IiwiJGFwcGx5IiwiJGVtaXQiLCJjaGFuZ2VMaXN0IiwiZG90TGlzdCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxpQkFBUztBQURDLE9BRE47QUFJTkMsZUFBUztBQUNQQyxjQUFNQztBQURDO0FBSkgsSyxRQVFSQyxPLEdBQVU7QUFDUjs7O0FBR0FDLGNBSlEsb0JBSUNDLENBSkQsRUFJSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUksS0FBS1IsVUFBTCxLQUFvQk8sRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUF6QyxFQUFrRDtBQUNoRCxpQkFBTyxLQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILGVBQUtSLFVBQUwsR0FBa0JPLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBbkM7QUFDQUgsZUFBS0ksTUFBTDtBQUNEO0FBQ0QsYUFBS0MsS0FBTCxDQUFXLFlBQVgsRUFBeUJMLEtBQUtSLFVBQTlCO0FBQ0QsT0FiTzs7QUFjUjs7Ozs7QUFLQWMsZ0JBbkJRLHNCQW1CR0MsT0FuQkgsRUFtQlk7QUFDbEIsYUFBS2IsT0FBTCxHQUFlYSxPQUFmO0FBQ0Q7QUFyQk8sSyxRQTBCVkMsSyxHQUFRO0FBQ05oQixnQkFETSxzQkFDS2lCLFFBREwsRUFDZUMsUUFEZixFQUN5QjtBQUM3QkMsZ0JBQVFDLEdBQVIsd0JBQWlDRixRQUFqQyxZQUFnREQsUUFBaEQ7QUFDRDtBQUhLLEs7O0FBSFI7QUFDQTtBQUNBOzs7O0VBbENrQyxlQUFLSSxTOztrQkFBcEJ2QixNIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBjdXJyZW50VGFiOiB7XG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICB0YWJMaXN0OiB7XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgKiDngrnlh7t0YWLliIfmjaJcbiAgICAgKi9cbiAgICBzd2ljaE5hdihlKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT09IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudFxuICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdjdXJyZW50VGFiJywgdGhhdC5jdXJyZW50VGFiKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5aS06YOo57qi54K55qCH6K+GXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSBkb3RMaXN0IFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNoYW5nZUxpc3QoZG90TGlzdCkge1xuICAgICAgdGhpcy50YWJMaXN0ID0gZG90TGlzdFxuICAgIH1cbiAgfVxuICAvLyBvbkxvYWQoKSB7XG4gIC8vICAgbGV0IHRoYXQgPSB0aGlzXG4gIC8vIH1cbiAgd2F0Y2ggPSB7XG4gICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50VGFiIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApXG4gICAgfVxuICB9XG59XG5cbiJdfQ==