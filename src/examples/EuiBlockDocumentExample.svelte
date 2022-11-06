
<script lang="ts">
    import type { T_Nullable } from "src/lib/T_NullableProp";

    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiBlockDocument from "../lib/EuiBlockDocument.svelte";
    import EuiButton from "../lib/EuiButton.svelte";
    let isBlocking:T_Nullable<boolean>=false;
    function toggle(){
        isBlocking=true;
        setTimeout(()=>{isBlocking=false},2000)
    }
</script>
<Example title="EuiBlockDocument"  phase="done">
    <pre>{JSON.stringify({isBlocking})}</pre>
    <EuiBlockDocument isBlocked={isBlocking}></EuiBlockDocument>
    <EuiButton on:click={toggle}>block document</EuiButton>
    <Code value={`
    <script lang="ts">
        // --
        import EuiBlockDocument from "../lib/EuiBlockDocument.svelte";
    </script>
    <EuiBlockDocument isBlocked={blocking}>a</EuiBlockDocument>
    <EuiButton on:click={toggle}>toggle</EuiButton>
    `}></Code>
</Example>