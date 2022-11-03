
<script lang="ts">
    import type { T_EuiAlertKind } from "./T_EuiAlertKind";
    import type { T_EuiBadgeKind} from "./T_EuiBadgeKind";
    import type { T_EuiIconSize } from "./T_EuiIconSize";
    import type { T_EuiSize } from "./T_EuiSize";
    import type { T_Nullable, T_NullableProp } from "./T_NullableProp";

    let clazz:  string = "";
    export { clazz as class };
    export let icon: T_Nullable<string> = 'eui-icon-bell';
    export let isLoading: T_Nullable<true> = null;
    export let kind: T_Nullable<T_EuiBadgeKind> = null
    //export let iconUrl: T_Nullable<string> = null;
    //export let set: T_Nullable<string>="eui";
    export let size: T_EuiIconSize = "s";
    export let ariaHidden: T_NullableProp = null
    export let ariaLabelledby: T_Nullable<string> = null
    export let role: T_Nullable<string> = null
    export let focusable: T_Nullable<string> = null
    export let ariaLabel: T_Nullable<string> = null
    //export let style: T_Nullable<string> = null
    export let colored: T_Nullable<true> = null
    export let fillColor: T_Nullable<string> = null;

    $:cssClasses = [
            //super.getCssClasses('eui-icon-svg'),
            'eui-icon',
            icon && !isLoading ? icon : ``,
            icon && isLoading ? `eui-icon--loading` : ``,
            isLoading ? 'eui-u-loading' : '',
            fillColor!==null?`eui-icon-svg--color-${fillColor}`:'',
            `eui-icon-svg--size-${size}`,
            kind!==null?`eui-icon--${kind}`:'',
            clazz
        ].join(' ').trim()
</script>
<span class={cssClasses}
on:click
aria-hidden={ariaHidden}
aria-labelledby={ariaLabelledby}
aria-label={ariaLabel}
{role}><slot></slot></span>
<!--
{#if icon!==null && iconUrl===null}
icon
    <svg class={cssClasses}
    aria-hidden={ariaHidden}
    aria-labelledby={ariaLabelledby}
    aria-label={ariaLabel}
    {role}
    {focusable}>
    <use href={ 'assets/images/ionicons/'+ set + '/icons-sprite-' + set + '.svg#' + icon}></use>
    </svg>
{:else if icon!==null}
url
    <svg
    class={'eui-icon-svg eui-icon-svg--size-' + size}
    {style}
    aria-hidden={ariaHidden}
    aria-labelledby={ariaLabelledby}
    {role}
    {focusable}
    >
        <image href={iconUrl} class={'eui-icon-svg eui-icon-svg--size-' + size} {style}></image>
    </svg>
{:else}
other
    {icon}
{/if}
-->
<style lang="scss">
// For Webfont icons styles, see : eui/packages/eui-styles-base/src/styles/05-assets/icons-font
// @import '../../base';
@import '../../packages/eui-styles-base/private/eui-icons-v2.5/variables.scss';
@import '../../packages/eui-styles-base/private/eui-icons-v2.5/style.scss';
    :host {
        display: inline-flex;

        .eui-icon-svg {
            display: inline-flex;
        }
    }
</style>