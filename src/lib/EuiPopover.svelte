
// file: "src/lib/EuiPopover.svelte"
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
<div class="EuiPopover {clazz}">
    <h4>EuiPopover<h4>
    <slot></slot>
</div>
<style>
    .EuiPopover{
        border:1px solid #ccc;
    }
</style>