declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        validator: (propValue: string) => boolean;
        default: string;
    };
}, {
    typeClass: import("vue").ComputedRef<"text-red-500" | "text-green-500" | "text-base" | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
} & {
    type: string;
} & {}>, {
    type: string;
}>;
export default _default;
