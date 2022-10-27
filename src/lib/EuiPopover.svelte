
// file: "src/lib/EuiPopover.svelte"
<script lang="ts">
    import type { T_EuiButtonKind } from "./T_EuiBadgeKind";
    import type { T_NullableProp } from "./T_NullableProp";

    export let disabled: T_NullableProp = null;
    export let outline: T_NullableProp = null;
    export let flat: T_NullableProp = null;
    export let kind: T_EuiButtonKind = null;
</script>
<div class="EuiPopover">
    <h4>EuiPopover<h4>
    <slot></slot>
</div>
<style>
    .EuiPopover{
        border:1px solid #ccc;
    }
</style>