<script lang="ts">
    import type { T_EuiIcon } from "./T_EuiIcon";
    import EuiIconSvg from "./EuiIconSvg.svelte";
    import type { T_EuiBadgeKind } from "./T_EuiBadgeKind";
    import type { T_EuiSize } from "./T_EuiSize";
    export let size: T_EuiSize  = "m";
    export let kind: T_EuiBadgeKind  = "primary";
    let isClosed:boolean = false;
</script>

<eui-badge aria-disabled="false" role="status" aria-label="eUI Badge" class="eui-badge eui-badge--size-{size} eui-badge--{kind}"><slot></slot></eui-badge>
<style>
    .eui-badge {
        align-items: center;
        background-color: var(--eui-base-color-primary-100);
        border: 1px solid rgba(255,255,255,.8);
        border-radius: var(--eui-base-spacing-2xl);
        color: var(--eui-base-color-white);
        display: inline-flex;
        font-size: var(--eui-base-font-size-s);
        justify-content: center;
        height: calc(var(--eui-base-spacing-m) + var(--eui-base-spacing-2xs));
        min-width: calc(var(--eui-base-spacing-m) + var(--eui-base-spacing-2xs));
        padding: 0 var(--eui-base-spacing-2xs);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .eui-badge--size-s {
        font-size: var(--eui-base-font-size-xs);
        height: var(--eui-base-spacing-m);
        min-width: var(--eui-base-spacing-m);
    }
    .eui-badge--size-m {
        font-size: var(--eui-base-font-size-s);
        height: calc(var(--eui-base-spacing-m) + var(--eui-base-spacing-2xs));
        min-width: calc(var(--eui-base-spacing-m) + var(--eui-base-spacing-2xs));
    }
    .eui-badge--size-l {
        font-size: var(--eui-base-font-size-l);
        height: var(--eui-base-spacing-l);
        min-width: var(--eui-base-spacing-l);
        padding: 0 var(--eui-base-spacing-2xs);
    }
    .eui-badge--size-xl {
        font-size: var(--eui-base-font-size-xl);
        height: var(--eui-base-spacing-xl);
        min-width: var(--eui-base-spacing-xl);
        padding: 0 var(--eui-base-spacing-xs);
    }
    .eui-badge--size-2xl {
        font-size: var(--eui-base-font-size-2xl);
        height: var(--eui-base-spacing-2xl);
        min-width: var(--eui-base-spacing-2xl);
        padding: 0 var(--eui-base-spacing-s);
    }
    .eui-badge--primary {
        background-color: var(--eui-base-color-primary-100);
        color: var(--eui-base-color-white);
    }
    .eui-badge--secondary {
        background-color: var(--eui-base-color-grey-75);
        color: var(--eui-base-color-white);
    }
        .eui-badge--info {
        background-color: var(--eui-base-color-info-100);
        color: var(--eui-base-color-white);
    }
    .eui-badge--success {
        background-color: var(--eui-base-color-success-100);
        color: var(--eui-base-color-white);
    }
    .eui-badge--warning {
        background-color: var(--eui-base-color-warning-100);
        color: var(--eui-base-color-black);
    }
    .eui-badge--danger {
        background-color: var(--eui-base-color-danger-100);
        color: var(--eui-base-color-white);
    }
    .eui-badge--accent {
        background-color: var(--eui-base-color-accent-100);
        color: var(--eui-base-color-black);
    }
</style>
