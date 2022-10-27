<script lang="ts">
    import type { T_EuiIcon } from "./T_EuiIcon.d";
    import EuiIconSvg from "./EuiIconSvg.svelte";
    import type { T_EuiAlertKind } from "./T_EuiAlertKind.d";
    import type { T_EuiSize } from "./T_EuiSize.d";
    export let euiAlertMuted: boolean = false;
    export let size: T_EuiSize  = "m";
    export let kind: T_EuiAlertKind  = "information";
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
</script>

{#if !isClosed}
<eui-alert
    aria-disabled="false"
    data-e2e="eui-alert"
    class="eui-alert{euiAlertMuted ? ' eui-alert--muted' : ''}{kind
        ? ` eui-alert--${kind}`
        : ''}"
    ><div class="eui-alert__content-wrapper">
        <div class="eui-alert__type-container">
            <EuiIconSvg
                icon={getIconForInfoCategory(kind)}
                fillcolor="grey-100"
                size={size}
            />
        </div>
        <!---->
        <div role="alert" class="eui-alert__content"><slot /></div>
        {#if isCloseable}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a
            on:click={e => isClosed=true}
            role="button"
            aria-label="Close Icon Button"
            tabindex="0"
            class="eui-alert__close"
            >
            <EuiIconSvg
                icon="eui-close"
                fillcolor="grey-50"
                size="m"
            /></a
        >
        {/if}
    </div></eui-alert
>
{/if}
<style>
    .eui-alert {
        border: 1px solid;
        display: flex;
        background-color: transparent;
        background-position: var(--eui-base-spacing-m);
        background-repeat: no-repeat;
        border-color: var(--eui-base-color-info-50);
        color: var(--eui-base-color-text);
        position: relative;
    }
    .eui-alert__type-container {
        display: flex;
        background-color: var(--eui-base-color-info-75);
        width: var(--eui-base-spacing-3xl);
        padding: var(--eui-base-spacing-xs);
    }
    .eui-alert__content {
        padding: var(--eui-base-spacing-s);
    }
    .eui-alert__content-wrapper {
        display: flex;
        flex-basis: auto;
        flex-shrink: 1;
        overflow: auto;
        width: 100%;
    }
    .eui-alert__content-wrapper::-webkit-scrollbar {
        display: inherit;
        height: 8px;
        width: 8px;
        background-color: var(--eui-base-color-grey-10);
    }
    .eui-alert__content-wrapper::-webkit-scrollbar-thumb {
        background-color: var(--eui-base-color-grey-20);
        border-radius: 5rem;
    }
    .eui-alert__content-wrapper::-webkit-scrollbar-thumb:hover {
        background-color: var(--eui-base-color-grey-25);
    }
    .eui-alert__content-wrapper::-webkit-scrollbar-track {
        background-color: var(--eui-base-color-grey-10);
        border-radius: 0;
    }
    .eui-alert__close {
        margin-top: var(--eui-base-spacing-xs);
        margin-right: var(--eui-base-spacing-xs);
        margin-left: auto;
    }
    .eui-alert__close:hover {
        color: var(--eui-base-color-text);
        text-decoration: none;
    }
    .eui-alert--hidden {
        display: none;
    }
    .eui-alert--success {
        border-color: var(--eui-base-color-success-50);
    }
    .eui-alert--success .eui-alert__type-container {
        background-color: var(--eui-base-color-success-75);
    }
    .eui-alert--danger {
        border-color: var(--eui-base-color-danger-50);
    }
    .eui-alert--danger .eui-alert__type-container {
        background-color: var(--eui-base-color-danger-75);
    }
    .eui-alert--warning {
        border-color: var(--eui-base-color-warning-50);
    }
    .eui-alert--warning .eui-alert__type-container {
        background-color: var(--eui-base-color-warning-75);
    }
    .eui-alert--secondary {
        border-color: var(--eui-base-color-grey-50);
    }
    .eui-alert--secondary .eui-alert__type-container {
        background-color: var(--eui-base-color-grey-75);
    }
</style>
