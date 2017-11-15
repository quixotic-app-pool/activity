'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _sensitiveWordChecker = require('./../util/sensitiveWordChecker.js');

var _sensitiveWordChecker2 = _interopRequireDefault(_sensitiveWordChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      content: '',
      title: '',
      contentValid: false,
      titleValid: false,
      dateValid: false,
      timeValid: false,
      locationValid: false,
      date: '',
      time: '',
      locationName: '',
      location: '',
      images: ['./sample.jpg', './sample.jpg', './sample.jpg']
    }, _this.computed = {
      valid: function valid() {
        return this.contentValid && this.titleValid && this.dateValid && this.timeValid && this.locationValid;
      }
    }, _this.methods = {
      inputChange: function inputChange(e) {
        this.content = e.detail.value;
        this.contentValid = !(e.detail.value === '');
      },
      inputtitle: function inputtitle(e) {
        this.title = e.detail.value;
        this.titleValid = !(e.detail.value === '');
      },
      send: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var pack;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _wepy2.default.showToast({
                    title: '发送中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });

                  if (!((0, _sensitiveWordChecker2.default)(this.title) || (0, _sensitiveWordChecker2.default)(this.content))) {
                    _context.next = 5;
                    break;
                  }

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '包含敏感词汇，发送失败：）',
                    showCancel: false
                  });
                  return _context.abrupt('return');

                case 5:
                  pack = { title: this.title, detail: this.detail, date: this.date, time: this.time, location: this.location };

                  console.log(pack);

                  setTimeout(function () {
                    _wepy2.default.hideToast();
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  }, 1000);

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function send() {
          return _ref2.apply(this, arguments);
        }

        return send;
      }(),
      bindDateChange: function bindDateChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.date = e.detail.value;
        this.dateValid = true;
        this.$apply();
      },
      bindTimeChange: function bindTimeChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.time = e.detail.value;
        this.timeValid = true;
        this.$apply();
      },

      /**
       * 选择图片
       */
      chooseImage: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _images;

          var _ref4, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 9 - this.images.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref4 = _context2.sent;
                  tempFilePaths = _ref4.tempFilePaths;

                  (_images = this.images).push.apply(_images, _toConsumableArray(tempFilePaths));
                  this.$apply();

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function chooseImage() {
          return _ref3.apply(this, arguments);
        }

        return chooseImage;
      }(),


      /**
       * 查看大图
       * @param {String} cur 当前展示图片
       * @param {Array}  imageList 展示的图片列表
       */
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },


      /**
       * 删除选中图片
       * @param {Number} idx 要删除的图片索引
       */
      deleteImage: function deleteImage(idx) {
        this.images.splice(idx, 1);
        this.$apply();
      },
      chooseLocation: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var self;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  self = this;

                  _wepy2.default.chooseLocation({
                    success: function success(res) {
                      self.locationName = res.name ? res.name : res.address;
                      self.location = { name: self.locationName, latitude: res.latitude, longitude: res.longitude };
                      self.locationValid = true;
                      self.$apply();
                    }
                  });

                case 2:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function chooseLocation() {
          return _ref5.apply(this, arguments);
        }

        return chooseLocation;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return NewActivity;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewActivity , 'pages/NewActivity'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5ld0FjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIk5ld0FjdGl2aXR5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb250ZW50IiwidGl0bGUiLCJjb250ZW50VmFsaWQiLCJ0aXRsZVZhbGlkIiwiZGF0ZVZhbGlkIiwidGltZVZhbGlkIiwibG9jYXRpb25WYWxpZCIsImRhdGUiLCJ0aW1lIiwibG9jYXRpb25OYW1lIiwibG9jYXRpb24iLCJpbWFnZXMiLCJjb21wdXRlZCIsInZhbGlkIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiaW5wdXR0aXRsZSIsInNlbmQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiaGlkZVRvYXN0Iiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsInBhY2siLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiYmluZERhdGVDaGFuZ2UiLCIkYXBwbHkiLCJiaW5kVGltZUNoYW5nZSIsImNob29zZUltYWdlIiwiY291bnQiLCJsZW5ndGgiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJwdXNoIiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJkZWxldGVJbWFnZSIsImlkeCIsInNwbGljZSIsImNob29zZUxvY2F0aW9uIiwic2VsZiIsInN1Y2Nlc3MiLCJyZXMiLCJuYW1lIiwiYWRkcmVzcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLG9CQUFjLEtBSFQ7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7OztFQXhCNkIsZUFBS3dCLEk7O2tCQUF6Qi9ELFciLCJmaWxlIjoiTmV3QWN0aXZpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgc2Vuc2l0aXZlV29yZENoZWNrZXIgZnJvbSAnLi4vdXRpbC9zZW5zaXRpdmVXb3JkQ2hlY2tlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3QWN0aXZpdHkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIm+W7uua0u+WKqCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgY29udGVudDogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGNvbnRlbnRWYWxpZDogZmFsc2UsXG4gICAgdGl0bGVWYWxpZDogZmFsc2UsXG4gICAgZGF0ZVZhbGlkOiBmYWxzZSxcbiAgICB0aW1lVmFsaWQ6IGZhbHNlLFxuICAgIGxvY2F0aW9uVmFsaWQ6IGZhbHNlLFxuICAgIGRhdGU6ICcnLFxuICAgIHRpbWU6ICcnLFxuICAgIGxvY2F0aW9uTmFtZTogJycsXG4gICAgbG9jYXRpb246ICcnLFxuICAgIGltYWdlczogWycuL3NhbXBsZS5qcGcnLCAnLi9zYW1wbGUuanBnJywgJy4vc2FtcGxlLmpwZyddXG4gIH1cbiAgY29tcHV0ZWQgPSB7XG4gICAgdmFsaWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudFZhbGlkICYmIHRoaXMudGl0bGVWYWxpZCAmJiB0aGlzLmRhdGVWYWxpZCAmJiB0aGlzLnRpbWVWYWxpZCAmJiB0aGlzLmxvY2F0aW9uVmFsaWRcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBpbnB1dENoYW5nZSAoZSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuY29udGVudFZhbGlkID0gIShlLmRldGFpbC52YWx1ZSA9PT0gJycpXG4gICAgfSxcbiAgICBpbnB1dHRpdGxlIChlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMudGl0bGVWYWxpZCA9ICEoZS5kZXRhaWwudmFsdWUgPT09ICcnKVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZCAoKSB7XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Y+R6YCB5LitLi4uJyxcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMDAsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG4gICAgICBpZiAoc2Vuc2l0aXZlV29yZENoZWNrZXIodGhpcy50aXRsZSkgfHwgc2Vuc2l0aXZlV29yZENoZWNrZXIodGhpcy5jb250ZW50KSkge1xuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+WMheWQq+aVj+aEn+ivjeaxh++8jOWPkemAgeWksei0pe+8mu+8iScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB2YXIgcGFjayA9IHt0aXRsZTogdGhpcy50aXRsZSwgZGV0YWlsOiB0aGlzLmRldGFpbCwgZGF0ZTogdGhpcy5kYXRlLCB0aW1lOiB0aGlzLnRpbWUsIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9ufVxuICAgICAgY29uc29sZS5sb2cocGFjaylcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSlcbiAgICAgIH0sIDEwMDApXG4gICAgfSxcbiAgICBiaW5kRGF0ZUNoYW5nZSAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuZGF0ZVZhbGlkID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYmluZFRpbWVDaGFuZ2UgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIHRoaXMudGltZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnRpbWVWYWxpZCA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmAieaLqeWbvueJh1xuICAgICAqL1xuICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5IC0gdGhpcy5pbWFnZXMubGVuZ3RoLFxuICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICB9KVxuICAgICAgdGhpcy5pbWFnZXMucHVzaCguLi50ZW1wRmlsZVBhdGhzKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmn6XnnIvlpKflm75cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3VyIOW9k+WJjeWxleekuuWbvueJh1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBpbWFnZUxpc3Qg5bGV56S655qE5Zu+54mH5YiX6KGoXG4gICAgICovXG4gICAgcHJldmlld0ltYWdlIChjdXIsIGltYWdlTGlzdCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgIHVybHM6IGltYWdlTGlzdFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk6YCJ5Lit5Zu+54mHXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCDopoHliKDpmaTnmoTlm77niYfntKLlvJVcbiAgICAgKi9cbiAgICBkZWxldGVJbWFnZSAoaWR4KSB7XG4gICAgICB0aGlzLmltYWdlcy5zcGxpY2UoaWR4LCAxKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgY2hvb3NlTG9jYXRpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUxvY2F0aW9uKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5sb2NhdGlvbk5hbWUgPSByZXMubmFtZSA/IHJlcy5uYW1lIDogcmVzLmFkZHJlc3NcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uID0ge25hbWU6IHNlbGYubG9jYXRpb25OYW1lLCBsYXRpdHVkZTogcmVzLmxhdGl0dWRlLCBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGV9XG4gICAgICAgICAgc2VsZi5sb2NhdGlvblZhbGlkID0gdHJ1ZVxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==