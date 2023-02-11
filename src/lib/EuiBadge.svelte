<script lang="ts">
    import type { T_EuiIcon } from "../lib/T_EuiIcon";
    import EuiIconSvg from "./EuiIconSvg.svelte";
    import type { T_EuiBadgeKind } from "../lib/T_EuiBadgeKind";
    import type { T_EuiSize } from "../lib/T_EuiSize";

    let clazz:  string = "";
    export { clazz as class };
    export let size: T_EuiSize  = "m";
    export let kind: T_EuiBadgeKind  = "primary";
    let isClosed:boolean = false;

    $:classList=[
        'eui-badge',
        `eui-badge--size-${size}`,
        `eui-badge--${kind}`,
        clazz,
    ].join(" ")
</script>

<span aria-disabled="false" role="status" aria-label="eUI Badge" class={classList}  {...$$restProps}>
    <slot></slot>
</span>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/badge';
    @import 'scss/badge.states';
    @import 'scss/badge.sizes';
</style>
