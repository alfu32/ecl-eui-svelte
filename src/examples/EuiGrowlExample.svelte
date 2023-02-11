
<!-- file: "src/examples/EuiGrowlExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiGrowl from "../lib/EuiGrowl.svelte";
</script>
<Example title="EuiGrowl" >
    <EuiGrowl>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
        iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
        modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
        t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
        upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum."
    </EuiGrowl>
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