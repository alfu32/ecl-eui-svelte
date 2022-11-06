
<!-- file: "src/examples/EuiDatepickerExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiDatepicker from "../lib/EuiDatepicker.svelte";
    import type { T_DateLocale } from "../lib/datepicker/T_DatepickerLocale";
    
    let selectionList=[];
    function datepickerSelect(ev){
        console.log(ev);
        selectionList=[...selectionList,ev.detail]
    }
    let t:Array<T_DateLocale>=["uk","en-ie","fr","nl","de"]
    let locale:T_DateLocale="en-ie";
</script>
<Example title="EuiDatepicker" >
    <select bind:value={locale}>
        {#each t as loc}
            <option value={loc} selected={loc===locale}>{loc}</option>
        {/each}
    </select>
    <EuiDatepicker on:select={datepickerSelect} {locale}/>
    <pre>{JSON.stringify(selectionList,null,' ')}</pre>
    <Code value={`
        <EuiChip>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
            iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
            modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
            t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
            upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
        </EuiChip>
    `}></Code>
</Example>