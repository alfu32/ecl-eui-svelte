
<!-- file: "src/examples/EuiAlertExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiAlert from "../lib/EuiAlert.svelte";
</script>

<Example title="EuiAlert" phase="test">
    <EuiAlert>this is a great info</EuiAlert>
    <EuiAlert kind="success">this is a great success</EuiAlert>
    <EuiAlert kind="warning">this is a great warning</EuiAlert>
    <EuiAlert kind="danger">this is a great danger</EuiAlert>
    <EuiAlert kind="secondary">this is a great secondary</EuiAlert>
    <EuiAlert isCloseable={true}>this is a great closable info</EuiAlert>
    <EuiAlert isCloseable={true} kind="success">this is a great closable success</EuiAlert>
    <EuiAlert isCloseable={true} kind="warning">this is a great closable warning</EuiAlert>
    <EuiAlert isCloseable={true} kind="danger">this is a great closable danger</EuiAlert>
    <EuiAlert isCloseable={true} kind="secondary">this is a great closable secondary</EuiAlert>
    <Code value={`
        <EuiAlert>this is a great info</EuiAlert>
        <EuiAlert kind="success">this is a great success</EuiAlert>
        <EuiAlert kind="warning">this is a great warning</EuiAlert>
        <EuiAlert kind="danger">this is a great danger</EuiAlert>
        <EuiAlert kind="secondary">this is a great secondary</EuiAlert>
        <EuiAlert isCloseable={true}>this is a great closable info</EuiAlert>
        <EuiAlert isCloseable={true} kind="success">this is a great closable success</EuiAlert>
        <EuiAlert isCloseable={true} kind="warning">this is a great closable warning</EuiAlert>
        <EuiAlert isCloseable={true} kind="danger">this is a great closable danger</EuiAlert>
        <EuiAlert isCloseable={true} kind="secondary">this is a great closable secondary</EuiAlert>
    `}></Code>
</Example>