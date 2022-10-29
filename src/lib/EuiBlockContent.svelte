<script lang="ts">
    export let isBlocked: boolean = false;
</script>

<div aria-disabled="false"
    class="eui-block-content{isBlocked?" eui-block-content--blocked":""}"
    >
    <div class="eui-block-content__wrapper" aria-label="eUI Block Content wrapper" role="region">
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'base';
    @import 'block-content';
</style>
