<script lang="ts">
    import type { T_EuiIcon } from "./T_EuiIcon";
    import EuiIconSvg from "./EuiIconSvg.svelte";
    import type { T_EuiAlertKind } from "./T_EuiAlertKind";
    import type { T_EuiSize } from "./T_EuiSize";

    let clazz:  string = "";
    export { clazz as class };
    export let euiAlertMuted: boolean = false;
    export let size: T_EuiSize  = "m";
    export let kind: T_EuiAlertKind  = "information";
    $:classList = [
        "eui-alert",
        euiAlertMuted ? ' eui-alert--muted' : '',
        kind ? ` eui-alert--${kind}`: '',
        clazz,
    ].join(" ")
    const infocatToIconIdMap:{[cat in T_EuiAlertKind]:T_EuiIcon} = {
        "information":"ecl-information",
        "success":"ecl-success",
        "secondary":"old-eui-question",
        "warning":"ecl-warning",
        "danger":"ecl-error",
    };
    function getIconForInfoCategory(c:T_EuiAlertKind):T_EuiIcon{
        return infocatToIconIdMap[c];
    }
    export let isCloseable: boolean = false;
    let isClosed:boolean = false;
    function onCloseClick(e){
        isClosed=true;
    }
</script>
<div class={classList} {...$$restProps}>
    {#if !isClosed}
    <div class="eui-alert__content-wrapper">
        <div role="alert">
            <slot></slot>
        </div>
        {#if isCloseable}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-missing-content -->
        <a role="button" aria-label="Close Icon Button" on:click={onCloseClick} class="eui-alert__close" tabindex="0"></a>
        {/if}
    </div>
    {/if}
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/alert';
    @import 'scss/alert.states';
</style>
