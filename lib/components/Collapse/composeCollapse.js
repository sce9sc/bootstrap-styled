var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';
import CollapseLib from 'react-collapse';
import bsTheme from 'theme';

export default function composeCollapse(CollapseLib) {
  var Collapse = function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Collapse);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
        theme: bsTheme
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collapse, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            theme = _props.theme,
            props = _objectWithoutProperties(_props, ['children', 'theme']);
        // extract keys for div


        var isOpened = props.isOpened,
            fixedHeight = props.fixedHeight,
            springConfig = props.springConfig,
            keepCollapsedContent = props.keepCollapsedContent,
            onRest = props.onRest,
            onHeightReady = props.onHeightReady,
            rest = _objectWithoutProperties(props, ['isOpened', 'fixedHeight', 'springConfig', 'keepCollapsedContent', 'onRest', 'onHeightReady']);

        console.log(theme);
        return theme['$enable-transitions'] ? React.createElement(
          CollapseLib,
          props,
          children
        ) : React.createElement(
          'div',
          rest,
          children
        );
      }
    }]);

    return Collapse;
  }(React.Component);

  return withTheme(Collapse);
}