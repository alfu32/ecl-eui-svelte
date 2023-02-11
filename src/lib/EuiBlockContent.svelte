<script lang="ts">
    import type { T_Nullable } from "./T_NullableProp";


    let clazz:  string = "";
    export { clazz as class };
    export let isBlocked: T_Nullable<boolean> = false;
    $:classList=[
        'eui-block-content',
        isBlocked ? `eui-block-content--blocked` : "",
        clazz,
    ].join(" ")
</script>

<div aria-disabled="false" {...$$restProps}
    class={classList}
    >
    <div class="eui-block-content__wrapper" aria-label="eUI Block Content wrapper" role="region">
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'scss/base';
    @import 'scss/block-content';
</style>
