declare const _default: import("vue").DefineComponent<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    darkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    headerStyle: import("vue").ComputedRef<"bg-black text-gray-50" | "bg-gray-50 text-gray-500">;
    bodyStyle: import("vue").ComputedRef<"bg-gray-900 text-gray-50 divide-y divide-gray-500" | "bg-white text-gray-900 divide-y divide-gray-200">;
    footerStyle: import("vue").ComputedRef<"bg-black text-gray-50" | "bg-gray-50 text-gray-500">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    bordered?: unknown;
    darkMode?: unknown;
} & {
    bordered: boolean;
    darkMode: boolean;
} & {}>, {
    bordered: boolean;
    darkMode: boolean;
}>;
export default _default;
