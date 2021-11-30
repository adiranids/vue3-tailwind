'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$7 = vue.defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"]
});var _hoisted_1$3 = ["value"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("input", vue.mergeProps(_ctx.$attrs, {
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    class: "p-1 focus:outline-none rounded shadow transition-all duration-200 ease-in-out"
  }), null, 16, _hoisted_1$3);
}script$7.render = render$7;var script$6 = vue.defineComponent({
  props: {
    size: {
      type: String,
      validator: function validator(propValue) {
        return ["h1", "h2", "h3", "small", "normal"].indexOf(propValue) > -1;
      }
    }
  },
  setup: function setup() {
    var sizeClassMapArray = vue.ref({
      h1: "md:text-3xl text-2xl",
      h2: "md:text-2xl text-xl",
      h3: "md:text-xl text-lg",
      small: "text-sm",
      normal: "text-base"
    });
    return {
      sizeClassMapArray: sizeClassMapArray
    };
  }
});function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("h1", vue.mergeProps(_ctx.$attrs, {
    class: _ctx.sizeClassMapArray[_ctx.size]
  }), [vue.renderSlot(_ctx.$slots, "default")], 16);
}script$6.render = render$6;var script$5 = vue.defineComponent({
  props: {
    buttonType: {
      type: String,
      validator: function validator(propValue) {
        return ["primary", "success", "danger", "dark", "light", "warning", "secondary"].indexOf(propValue) > -1;
      },
      default: "primary"
    },
    gradient: {
      type: Boolean,
      default: true
    },
    gradientDirection: {
      type: String,
      validator: function validator(propValue) {
        return ["r", "l", "t", "b"].indexOf(propValue) > -1;
      },
      default: "r"
    },
    pillShape: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var typeMap = vue.ref({
      primary: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-blue-400 to-blue-500 text-gray-50") : "bg-blue-400 text-gray-50",
      danger: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-red-400 to-red-500 text-gray-50") : "bg-red-400 text-gray-50",
      success: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-green-400 to-green-500 text-gray-50") : "bg-green-400 text-gray-50",
      dark: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-gray-800 to-gray-900 text-gray-50") : "bg-gray-900 text-gray-50",
      light: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-gray-50 to-gray-100 text-gray-700") : "bg-gray-100 text-gray-700",
      warning: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-yellow-400 to-yellow-500 text-gray-50") : "bg-yellow-400 text-gray-50",
      secondary: props.gradient ? "bg-gradient-to-".concat(props.gradientDirection, " from-gray-500 to-gray-600 text-gray-50") : "bg-gray-600 text-gray-50"
    });
    return {
      typeMap: typeMap
    };
  }
});function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", vue.mergeProps({
    class: "".concat(_ctx.typeMap[_ctx.buttonType], " ").concat(_ctx.pillShape ? 'rounded-full' : 'rounded', " ").concat(_ctx.buttonType, "-ringoutline px-5 \n    py-2 font-semibold focus:outline-none focus:ring-1")
  }, _ctx.$attrs), [vue.renderSlot(_ctx.$slots, "default")], 16);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n.primary-ringoutline[data-v-528d9b3d]{\n@apply ring-blue-600;\n}\n.danger-ringoutline[data-v-528d9b3d]{\n@apply ring-red-600;\n}\n.success-ringoutline[data-v-528d9b3d]{\n@apply ring-green-600;\n}\n.dark-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-900;\n}\n.secondary-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-600;\n}\n.light-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-200;\n}\n.warning-ringoutline[data-v-528d9b3d]{\n@apply ring-yellow-600;\n}\r\n\r\n";
styleInject(css_248z);script$5.render = render$5;
script$5.__scopeId = "data-v-528d9b3d";var script$4 = vue.defineComponent({
  props: {
    type: {
      type: String,
      validator: function validator(propValue) {
        return ['error', 'success', 'normal'].indexOf(propValue) > -1;
      },
      default: 'normal'
    }
  },
  setup: function setup(props) {
    var typeClass = vue.computed(function () {
      if (props.type == 'error') return 'text-red-500';else if (props.type == "success") return 'text-green-500';else if (props.type == "normal") return 'text-base';
    });
    return {
      typeClass: typeClass
    };
  }
});function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps(_ctx.$attrs, {
    class: _ctx.typeClass
  }), [vue.renderSlot(_ctx.$slots, "default")], 16);
}script$4.render = render$4;var script$3 = vue.defineComponent({
  name: "Table",
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var headerStyle = vue.computed(function () {
      return props.darkMode ? 'bg-black text-gray-50' : 'bg-gray-50 text-gray-500';
    });
    var bodyStyle = vue.computed(function () {
      return props.darkMode ? 'bg-gray-900 text-gray-50 divide-y divide-gray-500' : 'bg-white text-gray-900 divide-y divide-gray-200';
    });
    var footerStyle = vue.computed(function () {
      return props.darkMode ? 'bg-black text-gray-50' : 'bg-gray-50 text-gray-500';
    });
    return {
      headerStyle: headerStyle,
      bodyStyle: bodyStyle,
      footerStyle: footerStyle
    };
  }
});var _hoisted_1$2 = {
  class: "overflow-x-auto"
};
var _hoisted_2 = {
  class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
};
var _hoisted_3 = {
  class: "min-w-full divide-y divide-gray-200"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createElementVNode("div", _hoisted_2, [vue.createElementVNode("div", {
    class: vue.normalizeClass("overflow-hidden ".concat(_ctx.bordered ? 'border border-gray-100' : 'border-none', " shadow"))
  }, [vue.createElementVNode("table", _hoisted_3, [vue.createElementVNode("thead", {
    class: vue.normalizeClass(_ctx.headerStyle)
  }, [vue.renderSlot(_ctx.$slots, "header")], 2), vue.createElementVNode("tbody", {
    class: vue.normalizeClass(_ctx.bodyStyle)
  }, [vue.renderSlot(_ctx.$slots, "body")], 2), vue.createElementVNode("tfoot", {
    class: vue.normalizeClass(_ctx.footerStyle)
  }, [vue.renderSlot(_ctx.$slots, "footer")], 2)])], 2)])]);
}script$3.render = render$3;var script$2 = vue.defineComponent({
  name: 'TH'
});var _hoisted_1$1 = {
  scope: "col",
  class: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("th", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "default")]);
}script$2.render = render$2;var script$1 = vue.defineComponent({
  name: 'TR'
});function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("tr", null, [vue.renderSlot(_ctx.$slots, "default")]);
}script$1.render = render$1;var script = vue.defineComponent({
  name: 'TD'
});var _hoisted_1 = {
  class: "px-6 py-4 whitespace-nowrap"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("td", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")]);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Input:script$7,Title:script$6,Button:script$5,ToastMessage:script$4,Table:script$3,TH:script$2,TR:script$1,TD:script});var install = function installArdsVue3Tailwind(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,Input:script$7,Title:script$6,Button:script$5,ToastMessage:script$4,Table:script$3,TH:script$2,TR:script$1,TD:script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;