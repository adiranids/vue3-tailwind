import { defineComponent, openBlock, createElementBlock, mergeProps, ref, renderSlot, computed, createElementVNode, normalizeClass, watch, createVNode, TransitionGroup, withCtx, Fragment, renderList, toDisplayString, createCommentVNode, pushScopeId, popScopeId, normalizeStyle } from 'vue';

var script$9 = defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"]
});

const _hoisted_1$5 = ["value"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps(_ctx.$attrs, {
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    class: "p-1 focus:outline-none rounded shadow transition-all duration-200 ease-in-out"
  }), null, 16, _hoisted_1$5);
}

script$9.render = render$9;

var script$8 = defineComponent({
  props: {
    size: {
      type: String,
      validator: function (propValue) {
        return ["h1", "h2", "h3", "small", "normal"].indexOf(propValue) > -1;
      }
    }
  },

  setup() {
    const sizeClassMapArray = ref({
      h1: "md:text-3xl text-2xl",
      h2: "md:text-2xl text-xl",
      h3: "md:text-xl text-lg",
      small: "text-sm",
      normal: "text-base"
    });
    return {
      sizeClassMapArray
    };
  }

});

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", mergeProps(_ctx.$attrs, {
    class: _ctx.sizeClassMapArray[_ctx.size]
  }), [renderSlot(_ctx.$slots, "default")], 16);
}

script$8.render = render$8;

var script$7 = defineComponent({
  props: {
    buttonType: {
      type: String,
      validator: propValue => {
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
      validator: propValue => {
        return ["r", "l", "t", "b"].indexOf(propValue) > -1;
      },
      default: "r"
    },
    pillShape: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const typeMap = ref({
      primary: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-blue-400 to-blue-500 text-gray-50` : `bg-blue-400 text-gray-50`,
      danger: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-red-400 to-red-500 text-gray-50` : `bg-red-400 text-gray-50`,
      success: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-green-400 to-green-500 text-gray-50` : `bg-green-400 text-gray-50`,
      dark: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-gray-800 to-gray-900 text-gray-50` : `bg-gray-900 text-gray-50`,
      light: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-gray-50 to-gray-100 text-gray-700` : `bg-gray-100 text-gray-700`,
      warning: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-yellow-400 to-yellow-500 text-gray-50` : `bg-yellow-400 text-gray-50`,
      secondary: props.gradient ? `bg-gradient-to-${props.gradientDirection} from-gray-500 to-gray-600 text-gray-50` : `bg-gray-600 text-gray-50`
    });
    return {
      typeMap
    };
  }

});

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: `${_ctx.typeMap[_ctx.buttonType]} ${_ctx.pillShape ? 'rounded-full' : 'rounded'} ${_ctx.buttonType}-ringoutline px-5 
    py-2 font-semibold focus:outline-none focus:ring-1`
  }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16);
}

function styleInject(css, ref) {
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
}

var css_248z$1 = "\n.primary-ringoutline[data-v-528d9b3d]{\n@apply ring-blue-600;\n}\n.danger-ringoutline[data-v-528d9b3d]{\n@apply ring-red-600;\n}\n.success-ringoutline[data-v-528d9b3d]{\n@apply ring-green-600;\n}\n.dark-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-900;\n}\n.secondary-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-600;\n}\n.light-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-200;\n}\n.warning-ringoutline[data-v-528d9b3d]{\n@apply ring-yellow-600;\n}\r\n\r\n";
styleInject(css_248z$1);

script$7.render = render$7;
script$7.__scopeId = "data-v-528d9b3d";

var script$6 = defineComponent({
  props: {
    type: {
      type: String,
      validator: propValue => {
        return ['error', 'success', 'normal'].indexOf(propValue) > -1;
      },
      default: 'normal'
    }
  },

  setup(props) {
    const typeClass = computed(() => {
      if (props.type == 'error') return 'text-red-500';else if (props.type == "success") return 'text-green-500';else if (props.type == "normal") return 'text-base';
    });
    return {
      typeClass
    };
  }

});

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps(_ctx.$attrs, {
    class: _ctx.typeClass
  }), [renderSlot(_ctx.$slots, "default")], 16);
}

script$6.render = render$6;

var script$5 = defineComponent({
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

  setup(props) {
    const headerStyle = computed(() => props.darkMode ? 'bg-black text-gray-50' : 'bg-gray-50 text-gray-500');
    const bodyStyle = computed(() => props.darkMode ? 'bg-gray-900 text-gray-50 divide-y divide-gray-500' : 'bg-white text-gray-900 divide-y divide-gray-200');
    const footerStyle = computed(() => props.darkMode ? 'bg-black text-gray-50' : 'bg-gray-50 text-gray-500');
    return {
      headerStyle,
      bodyStyle,
      footerStyle
    };
  }

});

const _hoisted_1$4 = {
  class: "overflow-x-auto"
};
const _hoisted_2$2 = {
  class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
};
const _hoisted_3$2 = {
  class: "min-w-full divide-y divide-gray-200"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$2, [createElementVNode("div", {
    class: normalizeClass(`overflow-hidden ${_ctx.bordered ? 'border border-gray-100' : 'border-none'} shadow`)
  }, [createElementVNode("table", _hoisted_3$2, [createElementVNode("thead", {
    class: normalizeClass(_ctx.headerStyle)
  }, [renderSlot(_ctx.$slots, "header")], 2), createElementVNode("tbody", {
    class: normalizeClass(_ctx.bodyStyle)
  }, [renderSlot(_ctx.$slots, "body")], 2), createElementVNode("tfoot", {
    class: normalizeClass(_ctx.footerStyle)
  }, [renderSlot(_ctx.$slots, "footer")], 2)])], 2)])]);
}

script$5.render = render$5;

var script$4 = defineComponent({
  name: 'TH'
});

const _hoisted_1$3 = {
  scope: "col",
  class: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("th", _hoisted_1$3, [renderSlot(_ctx.$slots, "default")]);
}

script$4.render = render$4;

var script$3 = defineComponent({
  name: 'TR'
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", null, [renderSlot(_ctx.$slots, "default")]);
}

script$3.render = render$3;

var script$2 = defineComponent({
  name: 'TD'
});

const _hoisted_1$2 = {
  class: "px-6 py-4 whitespace-nowrap"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", _hoisted_1$2, [renderSlot(_ctx.$slots, "default")]);
}

script$2.render = render$2;

var script$1 = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputClasses: {
      type: [String],
      default: ""
    },
    searchResult: {
      type: [Array, Object],
      default: () => {}
    },
    //   if it's an array of object
    resultKey: {
      type: String,
      default: ""
    },
    resultContainerClasses: {
      type: String,
      default: ""
    },
    resultListClasses: {
      type: String,
      default: ""
    },
    resultCallBack: {
      type: Function,
      default: () => () => console.log("")
    },
    bordered: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    defaultIcon: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const start = ref(0);
    const randIndex = computed(() => {
      start.value += start.value;
      return start.value + 10;
    });
    const show = ref(false);
    watch(() => props.searchResult, newValue => {
      if (newValue) show.value = true;
    });

    function callBackFunction() {
      show.value = false;
      props.resultCallBack();
    }

    return {
      callBackFunction,
      randIndex,
      show
    };
  }

});

const _withScopeId = n => (pushScopeId("data-v-6497e22a"), n = n(), popScopeId(), n);

const _hoisted_1$1 = {
  key: 0,
  class: "w-5 h-5 ml-2"
};

const _hoisted_2$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("svg", {
  class: "svg-inline--fa fa-magnifying-glass",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "magnifying-glass",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [/*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
})], -1));

const _hoisted_3$1 = [_hoisted_2$1];
const _hoisted_4$1 = {
  key: 1
};
const _hoisted_5$1 = ["value", "placeholder"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    class: "flex flex-col"
  }, _ctx.$attrs), [createElementVNode("div", {
    class: normalizeClass(["w-full flex items-center relative px-2 border", _ctx.inputClasses])
  }, [_ctx.defaultIcon ? (openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_3$1)) : (openBlock(), createElementBlock("div", _hoisted_4$1, [renderSlot(_ctx.$slots, "default")])), createElementVNode("input", {
    type: "search",
    value: _ctx.modelValue,
    placeholder: _ctx.placeholder,
    onInput: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    class: "p-2 ml-12 focus:outline-none h-full border-none transition-all duration-200 ease-in-out border w-11/12"
  }, null, 40, _hoisted_5$1)], 2), _ctx.show ? (openBlock(), createElementBlock("ul", {
    key: 0,
    class: normalizeClass(["w-full border space-y-1 rounded-b transition-all duration-200 ease-in-out", _ctx.resultContainerClasses])
  }, [createVNode(TransitionGroup, {
    name: "fade"
  }, {
    default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.searchResult, (item, index) => {
      return openBlock(), createElementBlock("li", {
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.callBackFunction && _ctx.callBackFunction(...arguments);
        }),
        class: normalizeClass(["w-full p-2 cursor-pointer transition-all duration-200 ease-in-out", `${_ctx.bordered ? 'border-b-2' : ''} ${_ctx.resultListClasses}`]),
        key: index + _ctx.randIndex
      }, toDisplayString(_ctx.resultKey != "" ? item[_ctx.resultKey] : item), 3);
    }), 128))]),
    _: 1
  })], 2)) : createCommentVNode("", true)], 16);
}

var css_248z = "\n.fade-enter-active[data-v-6497e22a],\r\n.fade-leave-active[data-v-6497e22a] {\r\n  transition: opacity 0.5s ease;\n}\n.fade-enter-from[data-v-6497e22a],\r\n.fade-leave-to[data-v-6497e22a] {\r\n  opacity: 0;\n}\r\n";
styleInject(css_248z);

script$1.render = render$1;
script$1.__scopeId = "data-v-6497e22a";

var script = defineComponent({
  props: {
    profileImage: {
      type: String,
      default: ""
    },
    companyLogo: {
      type: String,
      default: ""
    },
    lineColor: {
      type: String,
      default: ""
    }
  }
});

const _hoisted_1 = {
  class: "flex w-full h-48 relative"
};
const _hoisted_2 = {
  class: "h-48 w-48 pl-3"
};
const _hoisted_3 = {
  class: "flex absolute -top-7 justify-between"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  class: "mt-12 space-y-3"
};
const _hoisted_6 = {
  class: "pl-3 space-y-1 mt-20 pr-3"
};
const _hoisted_7 = {
  class: "text-gray-800 font-bold uppercase"
};
const _hoisted_8 = {
  class: "text-xs italic tracking-wide"
};
const _hoisted_9 = {
  class: "text-xs tracking-wide"
};
const _hoisted_10 = {
  class: "space-y-2 grid grid-rows-2 place-items-center items-center mx-auto py-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps(_ctx.$attrs, {
    class: "w-80 h-52 shadow m-auto rounded-lg lg:transform lg:scale-150 flex flex-col overflow-hidden relative bg-white"
  }), [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createElementVNode("img", {
    src: _ctx.companyLogo,
    alt: "Logo",
    class: "h-36 w-36"
  }, null, 8, _hoisted_4), createElementVNode("div", _hoisted_5, [renderSlot(_ctx.$slots, "socialicons")])]), createElementVNode("div", _hoisted_6, [createElementVNode("h1", _hoisted_7, [renderSlot(_ctx.$slots, "name")]), createElementVNode("h2", _hoisted_8, [renderSlot(_ctx.$slots, "title")]), createElementVNode("h2", _hoisted_9, [renderSlot(_ctx.$slots, "contact")])])]), createElementVNode("div", _hoisted_10, [createElementVNode("div", {
    class: "h-20 w-20 rounded-md relative bg-cover bg-center",
    style: normalizeStyle(`background-image:url(${_ctx.profileImage})`)
  }, null, 4), renderSlot(_ctx.$slots, "qrcode")])]), createElementVNode("div", {
    class: normalizeClass(["col-span-2 h-4", _ctx.lineColor])
  }, null, 2)], 16);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Input: script$9,
  Title: script$8,
  Button: script$7,
  ToastMessage: script$6,
  Table: script$5,
  TH: script$4,
  TR: script$3,
  TD: script$2,
  Search: script$1,
  VCard: script
});

// Import vue components

const install = function installArdsVue3Tailwind(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$7 as Button, script$9 as Input, script$1 as Search, script$2 as TD, script$4 as TH, script$3 as TR, script$5 as Table, script$8 as Title, script$6 as ToastMessage, script as VCard, install as default };
