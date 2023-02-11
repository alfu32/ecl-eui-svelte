
<!-- file: "src/examples/EuiButtonGroupExample.svelte" -->
<script lang="ts">
    import EuiButton from "../lib/EuiButton.svelte";
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiButtonGroup from "../lib/EuiButtonGroup.svelte";
</script>
<Example title="EuiButtonGroup" phase="done">
    <EuiButtonGroup>
        <EuiButton>button 1</EuiButton>
        <EuiButton>button 2</EuiButton>
        <EuiButton slot="first">button 3</EuiButton>
    </EuiButtonGroup>
    <br/>
    <EuiButtonGroup>
        <EuiButton kind="primary">button 1</EuiButton>
        <EuiButton slot="first" kind="primary">button 2</EuiButton>
        <EuiButton kind="primary">button 3</EuiButton>
    </EuiButtonGroup>
    <br/>
    <EuiButtonGroup>
        <EuiButton kind="primary">kind="primary"</EuiButton>
        <EuiButton kind="secondary">euiSecondary</EuiButton>
        <EuiButton slot="first" kind="success">euiSuccess</EuiButton>
        <EuiButton kind="info">euiInfo</EuiButton>
        <EuiButton kind="warning">euiWarning</EuiButton>
        <EuiButton kind="danger">euiDanger</EuiButton>
    </EuiButtonGroup>
    <Code value={`
        <EuiButtonGroup>
            <EuiButton>button 1</EuiButton>
            <EuiButton>button 2</EuiButton>
            <EuiButton slot="first">button 3</EuiButton>
        </EuiButtonGroup>
        <br/>
        <EuiButtonGroup>
            <EuiButton kind="primary">button 1</EuiButton>
            <EuiButton slot="first" kind="primary">button 2</EuiButton>
            <EuiButton kind="primary">button 3</EuiButton>
        </EuiButtonGroup>
        <br/>
        <EuiButtonGroup>
            <EuiButton kind="primary">kind="primary"</EuiButton>
            <EuiButton kind="secondary">euiSecondary</EuiButton>
            <EuiButton slot="first" kind="success">euiSuccess</EuiButton>
            <EuiButton kind="info">euiInfo</EuiButton>
            <EuiButton kind="warning">euiWarning</EuiButton>
            <EuiButton kind="danger">euiDanger</EuiButton>
        </EuiButtonGroup>
    `}></Code>
</Example>