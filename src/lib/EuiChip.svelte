
<!--// file: "src/lib/EuiChip.svelte"-->
<script lang="ts">
    import * as uuid from 'uuid';
    import { createEventDispatcher } from 'svelte';
    import type { T_EuiBadgeKind } from "./T_EuiBadgeKind";
    import type { T_Nullable } from "./T_NullableProp";
    import EuiIcon from './EuiIcon.svelte';
    import type { T_EuiSize } from './T_EuiSize';
    let emit = createEventDispatcher();


    let clazz:  string = "";
    export { clazz as class };

    export let role:T_Nullable<string>=null;
    let ariaLabel:T_Nullable<string>=null;
    export let isChipRemovable:T_Nullable<true>=null;
    export let isSquared:T_Nullable<true>=null;
    export let kind:T_EuiBadgeKind='primary';
    export let euiRounded: T_Nullable<true> = null;
    export let euiOutline: T_Nullable<true> = null;
    export let euiSize: T_Nullable<T_EuiSize> = null;

    export let data: any = {
        id: uuid.v4(),
        tooltip: {
            color: 'euiTooltipPrimary',
            contentAlignment: null,
            rounded: true,
            arrows: true,
        },
    };
    let chipLabel:HTMLElement;
    $:classList=[
        "eui-chip",
        `eui-chip--${kind}`,
        isChipRemovable ? `eui-chip--removable` : ``,
        isSquared ? `eui-chip--squared` : ``,
        ( euiRounded !== null) ? ` eui-button--rounded` : "",
        ( euiOutline===true  ) ? " eui-button--outline" : "",
        ( euiSize !== null  ) ? `eui-chip--size-${euiSize}` : "",
        clazz,
    ].join(" ")
    function onRemove(event?: Event): void {
        if (event instanceof KeyboardEvent){
            switch ((<KeyboardEvent>event).code) {
                case 'Backspace': emit("remove",{ chip: data, event });break;
                case 'Enter': emit("remove",data);break;
            }
        } else {
                emit("remove",data)
        }
    }
</script>
<div class={classList} {role} aria-label={ariaLabel}>
    <!--div class="eui-chip-wrapper"
     euiTooltip={tooltipMessage ? tooltipMessage : null} 
     euiTooltipPrimary={data?.tooltip?.color==='euiTooltipPrimary'} 
     euiTooltipSecondary={data?.tooltip?.color==='euiTooltipSecondary'} 
     euiTooltipInfo={data?.tooltip?.color==='euiTooltipInfo'} 
     euiTooltipSuccess={data?.tooltip?.color==='euiTooltipSuccess'} 
     euiTooltipWarning={data?.tooltip?.color==='euiTooltipWarning'} 
     euiTooltipDanger={data?.tooltip?.color==='euiTooltipDanger'} 
     euiTooltipAccent={data?.tooltip?.color==='euiTooltipAccent'} 
     content={data?.tooltip?.contentAlignment ? data.tooltip.contentAlignment : 'center'} 
     position={data && data.tooltip && data.tooltip.position ? data.tooltip.position : 'above'} 
     euiTooltipRounded={data?.tooltip?.rounded} 
     euiTooltipArrows={data?.tooltip?.arrows} 
    -->
    <div class="eui-chip-wrapper">
    <div class="eui-chip__content-container" bind:this={chipLabel}>
         <slot></slot>
    </div>
    {#if isChipRemovable}
    <EuiIcon
          class="eui-chip__remove-icon eui-icon eui-icon-ecl-close-filled"
          on:keydown={onRemove}
          on:click={onRemove}>
    </EuiIcon>
    {/if}
</div>
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/chip';
    @import 'scss/chip.states';
    @import 'scss/chip.sizes';
</style>