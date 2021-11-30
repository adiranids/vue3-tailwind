declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    inputClasses: {
        type: StringConstructor[];
        default: string;
    };
    searchResult: {
        type: (ArrayConstructor | ObjectConstructor)[];
        default: () => void;
    };
    resultKey: {
        type: StringConstructor;
        default: string;
    };
    resultContainerClasses: {
        type: StringConstructor;
        default: string;
    };
    resultListClasses: {
        type: StringConstructor;
        default: string;
    };
    resultCallBack: {
        type: FunctionConstructor;
        default: () => () => void;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    defaultIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    callBackFunction: () => void;
    randIndex: import("vue").ComputedRef<number>;
    show: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    inputClasses?: unknown;
    searchResult?: unknown;
    resultKey?: unknown;
    resultContainerClasses?: unknown;
    resultListClasses?: unknown;
    resultCallBack?: unknown;
    bordered?: unknown;
    placeholder?: unknown;
    defaultIcon?: unknown;
} & {
    modelValue: string | number;
    inputClasses: string;
    searchResult: unknown[] | Record<string, any>;
    resultKey: string;
    resultContainerClasses: string;
    resultListClasses: string;
    resultCallBack: Function;
    bordered: boolean;
    placeholder: string;
    defaultIcon: boolean;
} & {}>, {
    modelValue: string | number;
    inputClasses: string;
    searchResult: unknown[] | Record<string, any>;
    resultKey: string;
    resultContainerClasses: string;
    resultListClasses: string;
    resultCallBack: Function;
    bordered: boolean;
    placeholder: string;
    defaultIcon: boolean;
}>;
export default _default;
