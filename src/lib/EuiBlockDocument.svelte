<script lang="ts">
    import type { T_Nullable } from "./T_NullableProp";

    let clazz:  string = "";
    export { clazz as class };
    export let isBlocked: T_Nullable<boolean> = false;
    $:classList=[
        'eui-block-document',
        isBlocked ? `eui-block-document--blocked` : "",
        clazz,
    ].join(" ")
</script>
<div class={classList}>
    <div class="eui-block-document__loader" aria-label="eUI Block Document"></div>
</div>
<style lang="scss">
    @import "scss/_base.scss";
    @import "scss/block-document.scss";
</style>