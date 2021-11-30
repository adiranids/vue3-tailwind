import { defineComponent, openBlock, createElementBlock, mergeProps, ref, renderSlot, computed, createElementVNode, normalizeClass } from 'vue';

var script$7 = defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"]
});

const _hoisted_1$3 = ["value"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps(_ctx.$attrs, {
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    class: "p-1 focus:outline-none rounded shadow transition-all duration-200 ease-in-out"
  }), null, 16, _hoisted_1$3);
}

script$7.render = render$7;

var script$6 = defineComponent({
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

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", mergeProps(_ctx.$attrs, {
    class: _ctx.sizeClassMapArray[_ctx.size]
  }), [renderSlot(_ctx.$slots, "default")], 16);
}

script$6.render = render$6;

var script$5 = defineComponent({
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

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
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

var css_248z = "\n.primary-ringoutline[data-v-528d9b3d]{\n@apply ring-blue-600;\n}\n.danger-ringoutline[data-v-528d9b3d]{\n@apply ring-red-600;\n}\n.success-ringoutline[data-v-528d9b3d]{\n@apply ring-green-600;\n}\n.dark-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-900;\n}\n.secondary-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-600;\n}\n.light-ringoutline[data-v-528d9b3d]{\n@apply ring-gray-200;\n}\n.warning-ringoutline[data-v-528d9b3d]{\n@apply ring-yellow-600;\n}\r\n\r\n";
styleInject(css_248z);

script$5.render = render$5;
script$5.__scopeId = "data-v-528d9b3d";

var script$4 = defineComponent({
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

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps(_ctx.$attrs, {
    class: _ctx.typeClass
  }), [renderSlot(_ctx.$slots, "default")], 16);
}

script$4.render = render$4;

var script$3 = defineComponent({
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

const _hoisted_1$2 = {
  class: "overflow-x-auto"
};
const _hoisted_2 = {
  class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
};
const _hoisted_3 = {
  class: "min-w-full divide-y divide-gray-200"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2, [createElementVNode("div", {
    class: normalizeClass(`overflow-hidden ${_ctx.bordered ? 'border border-gray-100' : 'border-none'} shadow`)
  }, [createElementVNode("table", _hoisted_3, [createElementVNode("thead", {
    class: normalizeClass(_ctx.headerStyle)
  }, [renderSlot(_ctx.$slots, "header")], 2), createElementVNode("tbody", {
    class: normalizeClass(_ctx.bodyStyle)
  }, [renderSlot(_ctx.$slots, "body")], 2), createElementVNode("tfoot", {
    class: normalizeClass(_ctx.footerStyle)
  }, [renderSlot(_ctx.$slots, "footer")], 2)])], 2)])]);
}

script$3.render = render$3;

var script$2 = defineComponent({
  name: 'TH'
});

const _hoisted_1$1 = {
  scope: "col",
  class: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("th", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")]);
}

script$2.render = render$2;

var script$1 = defineComponent({
  name: 'TR'
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", null, [renderSlot(_ctx.$slots, "default")]);
}

script$1.render = render$1;

var script = defineComponent({
  name: 'TD'
});

const _hoisted_1 = {
  class: "px-6 py-4 whitespace-nowrap"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Input: script$7,
  Title: script$6,
  Button: script$5,
  ToastMessage: script$4,
  Table: script$3,
  TH: script$2,
  TR: script$1,
  TD: script
});

// Import vue components

const install = function installArdsVue3Tailwind(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$5 as Button, script$7 as Input, script as TD, script$2 as TH, script$1 as TR, script$3 as Table, script$6 as Title, script$4 as ToastMessage, install as default };
