
<script lang="ts">
    import type { T_EuiBadgeKind } from "./T_EuiBadgeKind";
    import type { T_Nullable } from "./T_NullableProp";
    import { createEventDispatcher } from 'svelte';
    import { getClassList } from "../string-util";
    import Datepicker from './Datepicker.svelte';
    import type { T_DateLocale } from "./datepicker/T_DatepickerLocale";
    let emit = createEventDispatcher();

    export let header:T_Nullable<true>=null
    export let isAllowed: ((date:Date)=>true) =(date:Date)=>{return true}
    export let locale:T_DateLocale="fr"
    export let value:Date=new Date();
</script>
<Datepicker class="eui-datepicker" style="max-width:300px;" {header} {isAllowed} {locale} bind:value={value} on:select>

    <div slot="dayview-toolbar" let:addMonths>
        <button on:click={(e)=>{addMonths(-1)}}>&lt;</button>
        <button on:click={(e)=>{addMonths(1)}}>&gt;</button>
    </div>
</Datepicker>
<style lang="scss">
    @import 'scss/base';
    @import 'scss/eui-datepicker';
    @import 'scss/eui-datepicker.states';
</style>