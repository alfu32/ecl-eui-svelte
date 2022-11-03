
<svelte:options accessors/>
<script lang="ts">
    import { get_slot_changes } from "svelte/internal";
    import EuiCardHeader from "./EuiCardHeader.svelte";
    import EuiCardMedia from "./EuiCardMedia.svelte";
    import type { T_Nullable } from "./T_NullableProp";

    export let disabled: T_Nullable<true> = null;
    let clazz:  string = "";
    export { clazz as class };
    export let euiSelected:T_Nullable<true>=null;
    export let euiCollapsible:T_Nullable<true>=null;
    export let euiCollapsed:T_Nullable<true>=null;
    export let euiUrgent:T_Nullable<true>=null;
    export let euiNoShadow:T_Nullable<true>=null;
    export let euiNoContentPadding:T_Nullable<true>=null;
    export let euiHoverable:T_Nullable<true>=null;

    $:classList=[
        "eui-card",
        euiCollapsible ? `eui-card--collapsible` : ``,
        euiCollapsed ? `eui-card--collapsed` : ``,
        euiSelected ? `eui-card--selected` : ``,
        euiUrgent ? `eui-card--urgent` : ``,
        euiNoShadow ? `eui-card--no-shadow` : ``,
        euiNoContentPadding ? `eui-card--no-content-padding` : ``,
        euiHoverable ? `eui-card--hoverable` : ``,
        disabled ? `eui-card--disabled` : ``,
        clazz,
    ].join(" ")
</script>
<div class="{classList}" style="box-sizing:border-box">
    {#if $$slots.cardHeader}
        <slot name="cardHeader"></slot>
    {:else if $$slots.title || $$slots.subtitle || $$slots.leftContent || $$slots.rightContent}
    <EuiCardHeader isCollapsed={euiCollapsed} isCollapsible={euiCollapsible}>
        <svelte:fragment slot="title">
            <slot name="title"></slot>
        </svelte:fragment>
        <svelte:fragment slot="subtitle">
            <slot name="subtitle"></slot>
        </svelte:fragment>
        <svelte:fragment slot="leftContent"><slot name="leftContent"></slot></svelte:fragment>
        <svelte:fragment slot="rightContent"><slot name=rightContent></slot></svelte:fragment>
    </EuiCardHeader>
    {/if}
    <!-- {#if $$slots.cardMedia} -->
        <slot name="cardMedia"></slot>
    <!-- {:else}
        <EuiCardMedia>
            <slot name="cardMedia"></slot>
        </EuiCardMedia>
    {/if}-->
    <div class="eui-card-content">
        <slot></slot>
    </div>

    {#if $$slots.actionIcons || $$slots.actionMenu || $$slots.actionButtons}
        <div class="eui-card-footer">
            <div class="eui-card-footer-container">
                <div class="eui-card-footer-actions">
                    <div class="eui-card-footer-actions__buttons"><slot name=actionButtons></slot></div>
                    {#if $$slots.actionIcons || $$slots.actionMenu}
                        <div class="eui-card-footer-actions__icons-container">
                            <div class="eui-card-footer-actions__buttons"><slot name=actionIcons></slot></div>
                            <div class="eui-card-footer-actions__buttons"><slot name=actionMenu></slot></div>
                        </div>
                    {/if}
                    <!--ng-content *ngIf="actionButtons" select="eui-card-footer-action-buttons"></ng-content
                    <div *ngIf="actionIcons || actionMenu" class="eui-card-footer-actions__icons-container">
                        <ng-content *ngIf="actionIcons" select="eui-card-footer-action-icons"></ng-content>
                        <ng-content *ngIf="actionMenu" select="eui-card-footer-menu-content"></ng-content>
                    </div>-->
                </div>
            </div>
        </div>
    {/if}
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/card';
    @import 'scss/card-mq';
    @import 'scss/card.sizes';
    @import 'scss/card.sizes-mq';
    @import 'scss/card.states';
</style>