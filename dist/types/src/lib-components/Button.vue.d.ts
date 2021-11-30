declare const _default: import("vue").DefineComponent<{
    buttonType: {
        type: StringConstructor;
        validator: (propValue: string) => boolean;
        default: string;
    };
    gradient: {
        type: BooleanConstructor;
        default: boolean;
    };
    gradientDirection: {
        type: StringConstructor;
        validator: (propValue: string) => boolean;
        default: string;
    };
    pillShape: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    typeMap: import("vue").Ref<{
        [x: string]: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    buttonType?: unknown;
    gradient?: unknown;
    gradientDirection?: unknown;
    pillShape?: unknown;
} & {
    buttonType: string;
    gradient: boolean;
    gradientDirection: string;
    pillShape: boolean;
} & {}>, {
    buttonType: string;
    gradient: boolean;
    gradientDirection: string;
    pillShape: boolean;
}>;
export default _default;
