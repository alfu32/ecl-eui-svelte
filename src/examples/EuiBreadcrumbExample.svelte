
<!-- file: "src/examples/EuiBreadcrumbExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiBreadcrumb from "../lib/EuiBreadcrumb.svelte";
</script>
<Example title="EuiBreadcrumb"  phase="todo">
    <EuiBreadcrumb>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
        iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
        modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
        t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
        upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum."
    </EuiBreadcrumb>
    <Code value={`
        <EuiBreadcrumb>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
            iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
            modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
            t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
            upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
        </EuiBreadcrumb>
    `}></Code>
</Example>