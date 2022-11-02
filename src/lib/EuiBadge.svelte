<script lang="ts">
    import type { T_EuiIcon } from "../lib/T_EuiIcon";
    import EuiIconSvg from "./EuiIconSvg.svelte";
    import type { T_EuiBadgeKind } from "../lib/T_EuiBadgeKind";
    import type { T_EuiSize } from "../lib/T_EuiSize";
    export let size: T_EuiSize  = "m";
    export let kind: T_EuiBadgeKind  = "primary";
    let isClosed:boolean = false;
</script>

<eui-badge aria-disabled="false" role="status" aria-label="eUI Badge" class="eui-badge eui-badge--size-{size} eui-badge--{kind}"><slot></slot></eui-badge>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/badge';
    @import 'scss/badge.states';
    @import 'scss/badge.sizes';
</style>
