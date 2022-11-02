
<!-- file: "src/examples/EuiBlockDocumentExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiBlockDocument from "../lib/EuiBlockDocument.svelte";
</script>
<Example title="EuiBlockDocument"  phase="todo">
    <EuiBlockDocument>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
        iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
        modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
        t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
        upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum."
    </EuiBlockDocument>
    <Code value={`
    <script lang="ts">
        // --
        import EuiBlockDocument from "../lib/EuiBlockDocument.svelte";
    </script>
        <EuiBlockDocument>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
            iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
            modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
            t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
            upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
        </EuiBlockDocument>
    `}></Code>
</Example>