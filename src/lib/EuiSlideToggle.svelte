
// file: "src/lib/EuiSlideToggle.svelte"
<script lang="ts">
    import type { T_EuiButtonKind } from "./T_EuiBadgeKind";
    import type { T_NullableProp } from "./T_NullableProp";

    export let disabled: T_NullableProp = null;
    export let outline: T_NullableProp = null;
    export let flat: T_NullableProp = null;
    export let kind: T_EuiButtonKind = null;
</script>
<div class="EuiSlideToggle">
    <h4>EuiSlideToggle<h4>
    <slot></slot>
</div>
<style>
    .EuiSlideToggle{
        border:1px solid #ccc;
    }
</style>