
<!-- file: "src/examples/EuiIconSvgExample.svelte" -->
<script lang="ts">
    import type { T_EuiIcon } from "src/lib/T_EuiIcon";
    import Example from "/src/Example.svelte";
    import EuiIconSvg from "/src/lib/EuiIconSvg.svelte";

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

</Example>