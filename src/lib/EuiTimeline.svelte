
// file: "src/lib/EuiTimeline.svelte"
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
<div class="EuiTimeline {clazz}">
    <h4>EuiTimeline<h4>
    <slot></slot>
</div>
<style>
    .EuiTimeline{
        border:1px solid #ccc;
    }
</style>