<script lang="ts">
    import type { T_EuiButtonKind } from "../lib/T_EuiBadgeKind";
    import type { T_NullableProp } from "../lib/T_NullableProp";
    import EuiIconSvg from "./EuiIconSvg.svelte";

    export let disabled: T_NullableProp = null;
    export let outline: T_NullableProp = null;
    export let flat: T_NullableProp = null;
    export let kind: T_EuiButtonKind = null;
    export let isLoading: T_NullableProp = null;
    $: disabledClass = disabled === true ? " eui-button--disabled" : "";
    $: outlineClass = outline === true ? " eui-button--outline" : "";
    $: flatClass = flat === true ? " eui-button--basic" : "";
    $: kindClass = kind !== null ? ` eui-button--${kind}` : "";
</script>

<button
    {disabled}
    on:click
    aria-disabled={disabled ? "true" : "false"}
    data-e2e="eui-button"
    class="eui-button{outlineClass}{flatClass}{kindClass}{disabledClass}"
>
    {#if isLoading}
    <EuiIconSvg icon="ecl-download"></EuiIconSvg>
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
</style>
