
<!-- file: "src/examples/EuiBlockContentExample.svelte" -->
<script lang="ts">
    import EuiButton from "../lib/EuiButton.svelte";
    import Code from "../Code.svelte";
    import Example from "../Example.svelte";
    import EuiBlockContent from "../lib/EuiBlockContent.svelte";
    
    let contentIsBlocked:boolean=false;
</script>
<Example title="EuiBlockContent" phase="test">
    <EuiBlockContent isBlocked={contentIsBlocked}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </EuiBlockContent>
    <EuiButton on:click={e => contentIsBlocked=!contentIsBlocked}>{contentIsBlocked?"unblock":"block"}</EuiButton>
    <Code value={`
        <EuiBlockContent isBlocked={contentIsBlocked}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </EuiBlockContent>
        <EuiButton on:click={e => contentIsBlocked=!contentIsBlocked}>{contentIsBlocked?"unblock":"block"}</EuiButton>
    `}></Code>
</Example>