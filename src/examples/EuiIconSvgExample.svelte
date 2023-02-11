
<!-- file: "src/examples/EuiIconSvgExample.svelte" -->
<script lang="ts">
    import type { T_EuiIcon } from "src/lib/T_EuiIcon";
    import Code from "../Code.svelte";
    import Example from "../Example.svelte";
    import EuiIconSvg from "../lib/EuiIconSvg.svelte";

    let dynamicIcon:T_EuiIcon="eui-settings"
</script>
<Example title="EuiIconSvg" phase="test">

    <h6 class="section-title">No set defined : eUI set by default</h6>

    <EuiIconSvg icon="eui-settings"></EuiIconSvg>


    <h6 class="section-title">Set is defined as with "set" property</h6>

    <EuiIconSvg icon="eui-add" set="eui"></EuiIconSvg>
    <EuiIconSvg icon="add-outline" set="sharp"></EuiIconSvg>
    <br>
    <EuiIconSvg icon="add-sharp" set="outline"></EuiIconSvg>


    <h6 class="section-title">Icon and set are defined using "icon" property</h6>

    <EuiIconSvg icon="eui-warning"></EuiIconSvg>
    <br>
    <EuiIconSvg icon="eui-arrow-down"></EuiIconSvg>


    <h6 class="section-title">Icon can be dynamically changed</h6>

    <EuiIconSvg icon={dynamicIcon}></EuiIconSvg>
    <br>
    <button on:click={e => dynamicIcon=(dynamicIcon==="eui-settings")?"eui-close":"eui-settings"}>Update icon</button>

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