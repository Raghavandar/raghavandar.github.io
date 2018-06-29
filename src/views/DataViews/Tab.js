"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactstrap = _interopRequireDefault(require("reactstrap"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../../../node_modules/@material-ui/core/styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("../../../node_modules/@material-ui/core/ButtonBase"));

var _helpers = require("../../../node_modules/@material-ui/core/utils/helpers");

var _Select = _interopRequireDefault(require("../../../node_modules/@material-ui/core/Select"));

var _reactstrap = require('reactstrap');

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
    return {
        root: (0, _objectSpread3.default)({}, theme.typography.button, (0, _defineProperty2.default)({
            maxWidth: 264,
            position: 'relative',
            textDecoration: 'none !important',
            minWidth: 72,
            padding: 0,
            minHeight: 48,
            flexShrink: 0,
            overflow: 'hidden'
        }, theme.breakpoints.up('md'), {
            minWidth: 160
        })),
        labelIcon: {
            minHeight: 72
        },
        textColorInherit: {
            color: 'inherit',
            opacity: 0.7,
            '&$selected': {
                opacity: 1
            },
            '&$disabled': {
                opacity: 0.4
            }
        },
        textColorPrimary: {
            color: '#0070BA',
            'selected': {
                color: theme.palette.primary.main
            },
            '&$disabled': {
                color: theme.palette.text.disabled
            }
        },
        textColorSecondary: {
            color: theme.palette.text.secondary,
            '&$selected': {
                color: theme.palette.secondary.main
            },
            '&$disabled': {
                color: theme.palette.text.disabled
            }
        },
        selected: {
            color: '#505050 !important',
            borderLeft: '2px solid #D3D3D3',
            borderRight: '2px solid #D3D3D3',
            borderTop: '5px solid #015EA6',
            borderRadius: '8px 8px 0px 0px'
        },
        disabled: {},
        fullWidth: {
            flexShrink: 1,
            flexGrow: 1
        },
        wrapper: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'column'
        },
        labelContainer: (0, _defineProperty2.default)({
            textTransform: 'none',
            fontWeight: 550,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 12,
            paddingRight: 12
        }, theme.breakpoints.up('md'), {
            paddingLeft: theme.spacing.unit * 3,
            paddingRight: theme.spacing.unit * 3
        }),
        label: (0, _defineProperty2.default)({
            fontSize: theme.typography.pxToRem(14),
            whiteSpace: 'normal'
        }, theme.breakpoints.up('md'), {
            fontSize: theme.typography.pxToRem(13)
        }),
        labelWrapped: (0, _defineProperty2.default)({}, theme.breakpoints.down('sm'), {
            fontSize: theme.typography.pxToRem(12)
        })
    };
};

exports.styles = styles;

var Tab =
    /*#__PURE__*/
    function(_React$Component) {
        (0, _inherits2.default)(Tab, _React$Component);

        function Tab() {
            var _ref;

            var _temp, _this;

            (0, _classCallCheck2.default)(this, Tab);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this.state = {
                labelWrapped: false
            }, _this.handleChange = function(event) {
                var _this$props = _this.props,
                    onChange = _this$props.onChange,
                    value = _this$props.value,
                    onClick = _this$props.onClick;

                if (onChange) {
                    onChange(event, value);
                }

                if (onClick) {
                    onClick(event);
                }

            }, _this.label = undefined, _this.checkTextWrap = function() {
                if (_this.label) {
                    var labelWrapped = _this.label.getClientRects().length > 1;

                    if (_this.state.labelWrapped !== labelWrapped) {
                        _this.setState({
                            labelWrapped: labelWrapped
                        });
                    }
                }
            }, _this.toggle = function(event) {
                _this.setState(prevState => ({
                    dropdownOpen: !prevState.dropdownOpen
                }));
            }, _temp));
        }

        (0, _createClass2.default)(Tab, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.checkTextWrap();
                this.toggle = this.toggle.bind(this);
                this.state = {
                    dropdownOpen: false
                };
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {

                if (this.state.labelWrapped === prevState.labelWrapped) {
                    /**
                     * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
                     * font size still only requires one line.  This check will prevent an infinite render loop
                     * fron occurring in that scenario.
                     */
                    this.checkTextWrap();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this,
                    _classNames2;

                var _props = this.props,
                    classes = _props.classes,
                    classNameProp = _props.className,
                    disabled = _props.disabled,
                    fullWidth = _props.fullWidth,
                    icon = _props.icon,
                    indicator = _props.indicator,
                    labelProp = _props.label,
                    onChange = _props.onChange,
                    selected = _props.selected,
                    textColor = _props.textColor,
                    url = '#' + _props.link,
                    value = _props.value,
                    children = _props.children,
                    other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "disabled", "fullWidth", "icon", "indicator", "label", "onChange", "selected", "textColor", "value"]);
                var label;

                if (labelProp !== undefined) {
                    label = _react.default.createElement("span", {
                        className: classes.labelContainer
                    }, _react.default.createElement("span", {
                        className: (0, _classnames.default)(classes.label, (0, _defineProperty2.default)({}, classes.labelWrapped, this.state.labelWrapped)),
                        ref: function ref(node) {
                            _this2.label = node;
                        }
                    }, labelProp));
                }
                var className = (0, _classnames.default)(classes.root, classes["textColor".concat((0, _helpers.capitalize)(textColor))], (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames2, classes.selected, selected), (0, _defineProperty2.default)(_classNames2, classes.labelIcon, icon && label), (0, _defineProperty2.default)(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);

                if (_props.children && _props.children.length > 0) {
                    var childList = [];
                    for (let item of _props.children) {
                        var child = _react.default.createElement(
                            _reactstrap.DropdownItem, {
                                className: '',
                                href: '#' + item.url
                            }, item.name);
                        childList.push(child);
                    }

                    var left = null;
                    if (document.body.classList.contains('sidebar-minimized')) {
                        left = this.props.indicatorStyle.left + 106;
                    } else {
                        left = this.props.indicatorStyle.left + 312;
                    }

                    return _react.default.createElement('div', (0, _extends2.default)({
                        focusRipple: true,
                        className: className,
                        role: "tab",
                        "aria-selected": selected,
                        disabled: disabled,
                    }, other, {
                        onClick: this.handleChange
                    }), _react.default.createElement(
                        _reactstrap.Dropdown, {
                            className: '',
                            isOpen: this.state.dropdownOpen,
							toggle: this.toggle
                        }, _react.default.createElement(
                            _reactstrap.DropdownToggle, {
                                className: 'sub-menu-dropDown'
                            },
                            labelProp, _react.default.createElement(
                                'i', {
                                    className: 'fa fa-angle-down',
                                    style: {
                                        marginLeft: '5px',
                                        fontWeight: 600
                                    }
                                }
                            )),
                        _react.default.createElement(
                            _reactstrap.DropdownMenu, {
                                className: 'sub-menu-dropDownMenu',
                                style: {
                                    marginLeft: left,
                                    width: this.props.indicatorStyle.width
                                }
                            },
                            childList
                        )
                    ));

                } else {
                    return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
                        focusRipple: true,
                        className: className,
                        role: "tab",
                        "aria-selected": selected,
                        disabled: disabled,
                        href: url,
                    }, other, {
                        onClick: this.handleChange
                    }), _react.default.createElement("span", {
                        className: classes.wrapper
                    }, icon, label), indicator);
                }
            }
        }]);
        return Tab;
    }(_react.default.Component);

Tab.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: _propTypes.default.object.isRequired,

    /**
     * @ignore
     */
    className: _propTypes.default.string,

    /**
     * If `true`, the tab will be disabled.
     */
    disabled: _propTypes.default.bool,

    /**
     * @ignore
     */
    fullWidth: _propTypes.default.bool,

    /**
     * The icon element.
     */
    icon: _propTypes.default.node,

    /**
     * @ignore
     * For server side rendering consideration, we let the selected tab
     * render the indicator.
     */
    indicator: _propTypes.default.node,

    /**
     * The label element.
     */
    label: _propTypes.default.node,

    /**
     * @ignore
     */
    onChange: _propTypes.default.func,

    /**
     * @ignore
     */
    onClick: _propTypes.default.func,

    /**
     * @ignore
     */
    selected: _propTypes.default.bool,

    /**
     * @ignore
     */
    textColor: _propTypes.default.oneOf(['secondary', 'primary', 'inherit']),

    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value: _propTypes.default.any
} : {};
Tab.defaultProps = {
    disabled: false,
    textColor: 'inherit'
};

var _default = (0, _withStyles.default)(styles, {
    name: 'MuiTab'
})(Tab);

exports.default = _default;