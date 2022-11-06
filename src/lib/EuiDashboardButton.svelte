<script lang="ts">
    import EuiIcon from "./EuiIcon.svelte";
    import EuiIconSvg from "./EuiIconSvg.svelte";
import EuiLabel from "./EuiLabel.svelte";
    import type { T_EuiBadgeKind } from "./T_EuiBadgeKind";
    import type { T_EuiIcon } from "./T_EuiIcon";
    import type { T_EuiSize } from "./T_EuiSize";
    import type { T_Nullable } from "./T_NullableProp";

    export let disabled: T_Nullable<true> = null;
    let clazz:  string = "";
    export { clazz as class };
    export let mainLabel:T_Nullable<string>=null;
    export let label:T_Nullable<string>=null;
    export let icon:T_Nullable<T_EuiIcon>=null;
    export let iconClass:T_Nullable<string>=null;
    export let subLabel:T_Nullable<string>=null;
    export let url:T_Nullable<string>=null;
    export let kind:T_Nullable<T_EuiBadgeKind>=null;
    export let size:T_Nullable<T_EuiSize>=null;
    $:classList=[
        'eui-dashboard-button',
        'eui-dashboard-button--rounded',
        kind ? `eui-dashboard-button--${kind}` : "",
        size ? `eui-dashboard-button--size-${size}` : "eui-dashboard-button--size-m",
    ].join(" ")
</script>
<div class={classList}>
    <div class="eui-dashboard-button__content">
        {#if iconClass}
            <div class="eui-dashboard-button__content-main-icon">
                <span class="eui-dashboard-button__icon-element {iconClass}"></span>
            </div>
        {:else if icon}
        <div class="eui-dashboard-button__content-main-icon">
            <EuiIconSvg {icon}/>
        </div>
        {:else}
            <div class="eui-dashboard-button__content-main-label"><EuiLabel>{mainLabel??""}</EuiLabel></div>
        {/if}
        <div class="eui-dashboard-button__content-title"><EuiLabel>{label??""}</EuiLabel></div>
        <div class="eui-dashboard-button__content-sub-title"><EuiLabel>{subLabel??""}</EuiLabel></div>
    </div>
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/dashboard-button';
    @import 'scss/dashboard-button.states.scss';
    .eui-dashboard-button{
        float:unset;
    }
</style>