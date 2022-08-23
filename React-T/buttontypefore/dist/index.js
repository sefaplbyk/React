function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var styles = {"test":"_3ybTi","container":"_1Lxpd","primary":"_3ljpl","dashed":"_27xYC","link":"_71S8l","secondary":"_2Lfm6"};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: props.type && styles[props.type]
  }, props), props.type, " Button"));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
