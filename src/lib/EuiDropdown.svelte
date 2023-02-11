
// file: "src/lib/EuiDropdown.svelte"
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
<div class="EuiDropdown {clazz}">
    <h4>EuiDropdown<h4>
    <slot></slot>
</div>
<style>
    .EuiDropdown{
        border:1px solid #ccc;
    }
</style>