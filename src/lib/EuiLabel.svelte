
<script lang="ts">
    import type { T_EuiBadgeKind } from "./T_EuiBadgeKind";
    import type { T_Nullable } from "./T_NullableProp";

    export let disabled: T_Nullable<true> = null;
    let clazz:  string = "";
    export { clazz as class };
    export let outline: T_Nullable<true> = null;
    export let flat: T_Nullable<true> = null;
    export let kind: T_Nullable<T_EuiBadgeKind> = null;
</script>
<div class="eui-label">
    <slot></slot>
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/label';
    @import 'scss/label.states';
    @import 'scss/label.sizes';

</style>