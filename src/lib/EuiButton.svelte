<script lang="ts">
    import type { T_EuiButtonKind } from "./T_EuiBadgeKind";

    export let disabled: null | true = undefined;
    export let outline: undefined | true = undefined;
    export let flat: undefined | true = undefined;
    export let kind: T_EuiButtonKind = null;
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
    <span class="eui-button__container">
        <slot />
    </span>
</button>

<style>
    .eui-button {
        font: 400 1rem/1.25rem arial, sans-serif;
        align-items: center;
        background-color: var(--eui-base-color-white);
        background-image: none;
        border: none;
        border-radius: var(--eui-base-border-radius);
        box-sizing: border-box;
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        font-size: var(--eui-base-font-size);
        justify-content: center;
        min-height: calc(
            var(--eui-base-spacing-2xl) + var(--eui-base-spacing-2xs)
        );
        min-width: calc(
            var(--eui-base-spacing-2xl) + var(--eui-base-spacing-2xs)
        );
        outline: none;
        padding: calc(var(--eui-base-spacing-s) - 1px) var(--eui-base-spacing-m);
        text-transform: none;
        transition: none;
        vertical-align: middle;
        white-space: nowrap;
    }
    .eui-button {
        border: 1px solid var(--eui-base-color-grey-100);
        color: var(--eui-base-color-grey-100);
    }
    .eui-button:hover {
        background-color: var(--eui-base-color-grey-5);
    }
    .eui-button .eui-button__container {
        align-items: center;
        display: inline-flex;
        position: relative;
    }
    .eui-button:active,
    .eui-button.active,
    .eui-button:focus {
        z-index: 1;
        border-color: var(--eui-base-color-accessible-focus) !important;
        box-shadow: inset 0 0 0 1px var(--eui-base-color-accessible-focus),
            inset 0 0 0 2px var(--eui-base-color-grey-5);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .eui-button--basic:active,
    .eui-button--basic:focus,
    .eui-button--basic:hover {
        background-color: var(--eui-base-color-grey-5);
    }
    .eui-button.disabled, .eui-button:disabled {
        pointer-events: none;
        background-image: none;
        box-shadow: none;
        cursor: not-allowed;
        opacity: var(--eui-base-disabled-opacity);
    }


    .eui-button--primary {
        background-color: var(--eui-base-color-primary-100);
        border-color: var(--eui-base-color-primary-120);
        color: var(--eui-base-color-white);
    }
    .eui-button--primary:hover {
        background-color: var(--eui-base-color-primary-110);
    }
    .eui-button--basic.eui-button--primary:active,
    .eui-button--basic.eui-button--primary:focus,
    .eui-button--basic.eui-button--primary:hover {
        background-color: var(--eui-base-color-primary-10);
    }
    .eui-button--basic.eui-button--primary {
        color: var(--eui-base-color-primary-100);
    }
    .eui-button--outline.eui-button--primary {
        border-color: var(--eui-base-color-primary-100);
        color: var(--eui-base-color-primary-100);
    }
    .eui-button--outline.eui-button--primary:active,
    .eui-button--outline.eui-button--primary:focus,
    .eui-button--outline.eui-button--primary:hover {
        background-color: var(--eui-base-color-primary-100);
        border-color: var(--eui-base-color-primary-120);
        color: var(--eui-base-color-white);
    }

    .eui-button--secondary {
        background-color: var(--eui-base-color-grey-15);
        border-color: var(--eui-base-color-grey-50);
        color: var(--eui-base-color-grey-100);
    }
    .eui-button--secondary:hover {
        background-color: var(--eui-base-color-grey-25);
    }
    .eui-button--basic.eui-button--secondary:active,
    .eui-button--basic.eui-button--secondary:focus,
    .eui-button--basic.eui-button--secondary:hover {
        background-color: var(--eui-base-color-grey-10);
    }
    .eui-button--basic.eui-button--secondary {
        color: var(--eui-base-color-grey-75);
    }
    .eui-button--outline.eui-button--secondary {
        border-color: var(--eui-base-color-grey-50);
        color: var(--eui-base-color-grey-75);
    }
    .eui-button--outline.eui-button--secondary:active,
    .eui-button--outline.eui-button--secondary:focus,
    .eui-button--outline.eui-button--secondary:hover {
        background-color: var(--eui-base-color-grey-25);
    }

    .eui-button--info {
        background-color: var(--eui-base-color-info-100);
        border-color: var(--eui-base-color-info-120);
        color: var(--eui-base-color-white);
    }
    .eui-button--info:hover {
        background-color: var(--eui-base-color-info-110);
    }
    .eui-button--basic.eui-button--info:active,
    .eui-button--basic.eui-button--info:focus,
    .eui-button--basic.eui-button--info:hover {
        background-color: var(--eui-base-color-info-10);
    }
    .eui-button--basic.eui-button--info {
        color: var(--eui-base-color-info-100);
    }
    .eui-button--outline.eui-button--info {
        border-color: var(--eui-base-color-info-100);
        color: var(--eui-base-color-info-100);
    }
    .eui-button--outline.eui-button--info:active,
    .eui-button--outline.eui-button--info:focus,
    .eui-button--outline.eui-button--info:hover {
        background-color: var(--eui-base-color-info-100);
        border-color: var(--eui-base-color-info-120);
        color: var(--eui-base-color-white);
    }

    .eui-button--success {
        background-color: var(--eui-base-color-success-100);
        border-color: var(--eui-base-color-success-120);
        color: var(--eui-base-color-white);
    }
    .eui-button--success:hover {
        background-color: var(--eui-base-color-success-110);
    }
    .eui-button--basic.eui-button--success:active,
    .eui-button--basic.eui-button--success:focus,
    .eui-button--basic.eui-button--success:hover {
        background-color: var(--eui-base-color-success-10);
    }
    .eui-button--basic.eui-button--success {
        color: var(--eui-base-color-success-100);
    }
    .eui-button--outline.eui-button--success {
        border-color: var(--eui-base-color-success-100);
        color: var(--eui-base-color-success-100);
    }
    .eui-button--outline.eui-button--success:active,
    .eui-button--outline.eui-button--success:focus,
    .eui-button--outline.eui-button--success:hover {
        background-color: var(--eui-base-color-success-100);
        border-color: var(--eui-base-color-success-120);
        color: var(--eui-base-color-white);
    }

    .eui-button--warning {
        background-color: var(--eui-base-color-warning-100);
        border-color: var(--eui-base-color-warning-120);
        color: var(--eui-base-color-black);
    }
    .eui-button--warning:hover {
        background-color: var(--eui-base-color-warning-110);
    }
    .eui-button--basic.eui-button--warning:active,
    .eui-button--basic.eui-button--warning:focus,
    .eui-button--basic.eui-button--warning:hover {
        background-color: var(--eui-base-color-warning-10);
    }
    .eui-button--basic.eui-button--warning {
        color: var(--eui-base-color-warning-140);
    }
    .eui-button--outline.eui-button--warning {
        border-color: var(--eui-base-color-warning-100);
        color: var(--eui-base-color-warning-140);
    }
    .eui-button--outline.eui-button--warning:active,
    .eui-button--outline.eui-button--warning:focus,
    .eui-button--outline.eui-button--warning:hover {
        background-color: var(--eui-base-color-warning-100);
        border-color: var(--eui-base-color-warning-120);
        color: var(--eui-base-color-black);
    }

    .eui-button--danger {
        background-color: var(--eui-base-color-danger-100);
        border-color: var(--eui-base-color-danger-120);
        color: var(--eui-base-color-white);
    }
    .eui-button--danger:hover {
        background-color: var(--eui-base-color-danger-110);
    }
    .eui-button--basic.eui-button--danger {
        color: var(--eui-base-color-danger-100);
    }
    .eui-button--basic.eui-button--danger:active,
    .eui-button--basic.eui-button--danger:focus,
    .eui-button--basic.eui-button--danger:hover {
        background-color: var(--eui-base-color-danger-10);
    }
    .eui-button--outline.eui-button--danger {
        border-color: var(--eui-base-color-danger-100);
        color: var(--eui-base-color-danger-100);
    }
    .eui-button--outline.eui-button--danger:active,
    .eui-button--outline.eui-button--danger:focus,
    .eui-button--outline.eui-button--danger:hover {
        background-color: var(--eui-base-color-danger-100);
        border-color: var(--eui-base-color-danger-120);
        color: var(--eui-base-color-white);
    }

    .eui-button--accent {
        background-color: var(--eui-base-color-accent-100);
        border-color: var(--eui-base-color-accent-120);
        color: var(--eui-base-color-black);
    }
    .eui-button--accent:hover {
        background-color: var(--eui-base-color-accent-110);
    }
    .eui-button--basic.eui-button--accent {
        color: var(--eui-base-color-accent-100);
    }
    .eui-button--basic.eui-button--accent:active,
    .eui-button--basic.eui-button--accent:focus,
    .eui-button--basic.eui-button--accent:hover {
        background-color: var(--eui-base-color-accent-10);
    }
    .eui-button--outline.eui-button--accent {
        border-color: var(--eui-base-color-accent-120);
        color: var(--eui-base-color-black);
    }
    .eui-button--outline.eui-button--accent:active,
    .eui-button--outline.eui-button--accent:focus,
    .eui-button--outline.eui-button--accent:hover {
        background-color: var(--eui-base-color-accent-100);
        border-color: var(--eui-base-color-accent-120);
        color: var(--eui-base-color-black);
    }

    .eui-button--basic {
        background-color: transparent;
        border: 1px solid transparent;
    }
    .eui-button--outline {
        background-color: var(--eui-base-color-white);
    }
</style>
