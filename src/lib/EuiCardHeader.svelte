
<script lang="ts">
    import EuiButton from "./EuiButton.svelte";
    import type { T_Nullable } from "./T_NullableProp";


    export let avatarUrl: T_Nullable<string>=null;
    export let expandLabel = 'expand';
    export let collapseLabel = 'collapse';
    export let iconClass: T_Nullable<string>=null;
    export let avatarDerscription = 'eUI card header avatar';
    export let iconDescription = 'eUI card header icon';

    export let isHeaderBodyOnly:T_Nullable<true>=null;
    export let hasFullTitle:T_Nullable<true>=null;
    export let isHeaderMultilines:T_Nullable<true>=null;
    export let isCollapsible:T_Nullable<true>=null;
    export let hasBottomExpander:T_Nullable<true>=null;
    export let isCollapsed:T_Nullable<true>=null;

    function onToggleHeader(e){}

    function onToggle(e){}
</script>
{#if !isHeaderBodyOnly}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="eui-card-header__container" on:click={onToggleHeader}>
    <div class="eui-card-header__left-content">
        <slot></slot>
    </div>
    {#if avatarUrl && !iconClass}
        <div class="eui-card-header__avatar" style="background-image': 'url({avatarUrl})'" aria-label=avatarDerscription role="img"></div>
    {/if}
    {#if iconClass}
        <div class="eui-card-header__icon {iconClass.indexOf('eui-icon--rounded') !== -1 ? "eui-card-header__icon--rounded":""}">
            <span class={iconClass} aria-label={iconDescription} role="img"></span>
        </div>
    {/if}
    {#if !hasFullTitle}
    <div>
        <div class="eui-card-header__title-container {isHeaderMultilines?'eui-card-header__title-container--multilines':''}">
            <div class="eui-card-header__title-container-title">
                <slot name=title></slot>
            </div>
            <div class="eui-card-header__title-container-subtitle">
                <slot name=subtitle></slot>
            </div>
        </div>
        <div class="eui-card-header__right-content">
            <slot name=rightContent></slot>
        </div>
    </div>
    {:else}
        <div class="eui-card-header__middle-container">
            <div class="eui-card-header__title-container {isHeaderMultilines?'eui-card-header__title-container--multilines':''}">
                <div class="eui-card-header__title-container-title">
                    <slot name=title></slot>
                </div>
            </div>
            <div class="eui-card-header__middle-content">
                <div class="eui-card-header__title-container-subtitle">
                    <slot name=subtitle></slot>
                </div>
                <div class="eui-card-header__right-content">
                    <slot name=rightContent></slot>
                </div>
            </div>
        </div>
    {/if}
    {#if isCollapsible}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
          class="eui-card-header__expander {hasBottomExpander?'eui-card-header__expander--bottom':''} {isHeaderMultilines?'eui-card-header__expander--top':''}"
          on:click={onToggle}>
        <EuiButton euiRounded euiIconButton euiSize="m" euiBasicButton kind="secondary" class="eui-card-header__expander-icon"
                ariaLabel={isCollapsed ? collapseLabel : expandLabel}>
            <span class="eui-icon eui-icon-angle-up"></span>
        </EuiButton>
    </div>
    {/if}
</div>
{/if}
<div class="eui-card-header__urgent-indicator"></div>
<div class="eui-card-header-body">
    <slot></slot>
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/card';
    @import 'scss/card-mq';
    @import 'scss/card.sizes';
    @import 'scss/card.sizes-mq';
    @import 'scss/card.states';
</style>