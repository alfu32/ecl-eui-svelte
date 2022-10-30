<script lang="ts">
    import type { T_Nullable } from "../lib/T_NullableProp";
    import EuiIcon from "./EuiIcon.svelte";
    import EuiIconSvg from "./EuiIconSvg.svelte";
    import type { T_EuiBadgeKind } from "./T_EuiBadgeKind";

    export let disabled: T_Nullable<true> = null;
    let clazz:  string = "";
    export { clazz as class };
    export let euiBasicButton: T_Nullable<true> = null;
    export let euiRaisedButton: T_Nullable<true> = null;
    export let euiBlockButton: T_Nullable<true> = null;
    export let euiIconButton: T_Nullable<true> = null;
    export let euiLineWrap: T_Nullable<true> = null;
    export let outline: T_Nullable<true> = null;
    export let euiOutline: T_Nullable<true> = null;
    export let flat: T_Nullable<true> = null;
    export let kind: T_Nullable<T_EuiBadgeKind> = null;
    export let isLoading: T_Nullable<true> = null;
    export let rounded: T_Nullable<true> = null;
    export let euiRounded: T_Nullable<true> = null;
    $:classList=[
        "eui-button",
        euiBasicButton ? `eui-button--basic` : ``,
        euiRaisedButton ? `eui-button--raised` : ``,   // TODO: remove in eUI 15
        euiBlockButton ? `eui-button--block` : ``,
        isLoading ? `eui-button--loading` : ``,
        euiIconButton ? `eui-button--icon-only` : ``,
        euiLineWrap ? `eui-button--line-wrap` : ``,
        disabled === true ? " eui-button--disabled" : "",
        (euiOutline===true || outline === true) ? " eui-button--outline" : "",
        flat === true ? " eui-button--basic" : "",
        kind !== null ? ` eui-button--${kind}` : "",
        (rounded !== null || euiRounded !== null) ? ` eui-button--rounded` : "",
        clazz,
    ].join(" ")
</script>

<button
    {disabled}
    on:click
    aria-disabled={disabled ? "true" : "false"}
    data-e2e="eui-button"
    class={classList}
>
    {#if isLoading}
    <EuiIcon {isLoading} class="eui-button__loading-icon"></EuiIcon>
    {/if}
    <span class="eui-button__container">
        <slot />
    </span>
</button>

<style lang="scss">
    @import 'base';
    @import 'button';
    @import 'button.sizes';
    @import 'button.states';

    .eui-button .eui-button__loading-icon .eui-icon.eui-icon--loading {
        margin-right: var(--eui-base-spacing-xl);
    }
</style>
