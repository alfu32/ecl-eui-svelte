
<script lang="ts">
    import type { T_EuiButtonKind } from "./T_EuiBadgeKind";
    import type { T_NullableProp } from "./T_NullableProp";

    export let disabled: T_NullableProp = null;
    export let outline: T_NullableProp = null;
    export let flat: T_NullableProp = null;
    export let kind: T_EuiButtonKind = null;
</script>
<div class="eui-label">
    <slot></slot>
</div>
<style lang="scss">
    @import 'base';
    @import 'label';
    @import 'label.states';
    @import 'label.sizes';

</style>