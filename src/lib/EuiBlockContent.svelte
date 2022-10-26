<script lang="ts">
    export let isBlocked: boolean = false;
</script>

<div>
</div>
<eui-block-content
    aria-disabled="false"
    class="eui-block-content{isBlocked?" eui-block-content--blocked":""}"
    ><div
        aria-label="eUI Block Content wrapper"
        role="region"
        class="eui-block-content__wrapper"
    >
    <slot />
    </div></eui-block-content
>

<style>
    .eui-block-content--blocked .eui-block-content__wrapper {
        min-height: 100px;
        position: relative;
        z-index: var(--eui-base-z-index-overlay);
    }
    .eui-block-content--blocked .eui-block-content__wrapper:before {
        animation: spin .8s linear infinite;
        border: 8px solid transparent;
        border-radius: 50%;
        border-top-color: var(--eui-base-color-primary-100);
        content: "";
        display: block;
        height: 80px;
        left: 50%;
        margin: -40px 0 0 -40px;
        position: absolute;
        top: 50%;
        width: 80px;
        z-index: 10002;
    }
    .eui-block-content--blocked .eui-block-content__wrapper:after {
        background-color: #fff6;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 10001;
    }
</style>
