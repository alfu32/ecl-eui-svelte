<script lang="ts">
    import RouterLink from './RouterLink.svelte';
    import type { T_Nullable } from './T_NullableProp';

    export let imageClickUrl:T_Nullable<string>=null;
    export let imageClickUrlExternal:T_Nullable<string>=null;
    export let imageUrl:T_Nullable<string>=null;
    export let imageHeight:T_Nullable<string>=null;
    export let imageLegend:T_Nullable<string>=null;
    export let imageDescription:T_Nullable<string>=null;
</script>
<div class="eui-card-media">
    <div class="eui-card-media__container">
        {#if !imageClickUrl && !imageClickUrlExternal}
            <RouterLink routerLink={imageClickUrl}>
                <img class="eui-card-media__image" src={imageUrl} height={imageHeight} alt={!imageLegend? imageDescription: '' }>
                {#if imageLegend}
                    <div class="eui-card-media__legend">{ imageLegend }</div>
                {/if}
            </RouterLink>
        {/if}
        {#if imageClickUrlExternal}
            <a href={imageClickUrlExternal} rel="noreferrer" target="_blank" class="eui-card-media__container-content">
                <img class="eui-card-media__image" src={imageUrl} height={imageHeight} alt={!imageLegend? imageDescription: '' }>
                {#if imageLegend}
                    <div class="eui-card-media__legend">{ imageLegend }</div>
                {/if}
            </a>
        {/if}
        {#if !imageClickUrl && !imageClickUrlExternal}
            <img class="eui-card-media__image" src={imageUrl} height={imageHeight} alt={!imageLegend? imageDescription: '' }>
            {#if imageLegend}
                <div class="eui-card-media__legend">{ imageLegend }</div>
            {/if}
        {/if}
    </div>
</div>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/card';
    @import 'scss/card-mq';
    @import 'scss/card.sizes';
    @import 'scss/card.sizes-mq';
    @import 'scss/card.states';
</style>