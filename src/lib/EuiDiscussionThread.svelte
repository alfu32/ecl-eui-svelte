
// file: "src/lib/EuiDiscussionThread.svelte"
<script lang="ts">
    import type { T_EuiButtonKind } from "./T_EuiBadgeKind";
    import type { T_NullableProp } from "./T_NullableProp";

    export let disabled: T_NullableProp = null;
    export let outline: T_NullableProp = null;
    export let flat: T_NullableProp = null;
    export let kind: T_EuiButtonKind = null;
</script>
<div class="EuiDiscussionThread">
    <h4>EuiDiscussionThread<h4>
    <slot></slot>
</div>
<style>
    .EuiDiscussionThread{
        border:1px solid #ccc;
    }
</style>