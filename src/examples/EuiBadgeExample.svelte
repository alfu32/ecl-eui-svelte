
<!-- file: "src/examples/EuiBadgeExample.svelte" -->
<script lang="ts">
    import Code from "../Code.svelte";
    import Example from "../Example.svelte";
    import EuiBadge from "../lib/EuiBadge.svelte";
</script>

<Example title="EuiBadge" phase="test">
<div class="eui-u-flex eui-u-flex-justify-content-evenly eui-u-flex-wrap">
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiPrimary</span>
        <EuiBadge kind={"primary"}>9</EuiBadge>
    </span>
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiSecondary</span>
        <EuiBadge kind={"secondary"}>9</EuiBadge>
    </span>
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiInfo</span>
        <EuiBadge kind={"info"}>9</EuiBadge>
    </span>
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiSuccess</span>
        <EuiBadge kind={"success"}>9</EuiBadge>
    </span>
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiWarning</span>
        <EuiBadge kind={"warning"}>9</EuiBadge>
    </span>
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiDanger</span>
        <EuiBadge kind={"danger"}>9</EuiBadge>
    </span>
    <span class="col eui-u-flex eui-u-flex-column">
        <span>euiAccent</span>
        <EuiBadge kind={"accent"}>9</EuiBadge>
    </span>
</div>

<Code value={`
    <div class="eui-u-flex eui-u-flex-justify-content-evenly eui-u-flex-wrap">
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiPrimary</span>
            <EuiBadge kind={"primary"}>9</EuiBadge>
        </span>
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiSecondary</span>
            <EuiBadge kind={"secondary"}>9</EuiBadge>
        </span>
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiInfo</span>
            <EuiBadge kind={"info"}>9</EuiBadge>
        </span>
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiSuccess</span>
            <EuiBadge kind={"success"}>9</EuiBadge>
        </span>
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiWarning</span>
            <EuiBadge kind={"warning"}>9</EuiBadge>
        </span>
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiDanger</span>
            <EuiBadge kind={"danger"}>9</EuiBadge>
        </span>
        <span class="col eui-u-flex eui-u-flex-column">
            <span>euiAccent</span>
            <EuiBadge kind={"accent"}>9</EuiBadge>
        </span>
    </div>
`}></Code>

<div class="eui-u-flex eui-u-flex-justify-content-evenly eui-u-flex-align-items-start eui-u-flex-wrap">

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeS</span>
        <EuiBadge size="s">9</EuiBadge>
        <EuiBadge size="s">99</EuiBadge>
        <EuiBadge size="s">999</EuiBadge>
        <EuiBadge size="s">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeM</span>
        <EuiBadge size="m">9</EuiBadge>
        <EuiBadge size="m">99</EuiBadge>
        <EuiBadge size="m">999</EuiBadge>
        <EuiBadge size="m">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeL</span>
        <EuiBadge size="l">9</EuiBadge>
        <EuiBadge size="l">99</EuiBadge>
        <EuiBadge size="l">999</EuiBadge>
        <EuiBadge size="l">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeXL</span>
        <EuiBadge size="xl">9</EuiBadge>
        <EuiBadge size="xl">99</EuiBadge>
        <EuiBadge size="xl">999</EuiBadge>
        <EuiBadge size="xl">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSize2XL</span>
        <EuiBadge size="2xl">9</EuiBadge>
        <EuiBadge size="2xl">99</EuiBadge>
        <EuiBadge size="2xl">999</EuiBadge>
        <EuiBadge size="2xl">Badge label</EuiBadge>
    </div>
  </div>

  <Code value={`
    <div class="eui-u-flex eui-u-flex-justify-content-evenly eui-u-flex-align-items-start eui-u-flex-wrap">

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeS</span>
        <EuiBadge size="s">9</EuiBadge>
        <EuiBadge size="s">99</EuiBadge>
        <EuiBadge size="s">999</EuiBadge>
        <EuiBadge size="s">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeM</span>
        <EuiBadge size="m">9</EuiBadge>
        <EuiBadge size="m">99</EuiBadge>
        <EuiBadge size="m">999</EuiBadge>
        <EuiBadge size="m">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeL</span>
        <EuiBadge size="l">9</EuiBadge>
        <EuiBadge size="l">99</EuiBadge>
        <EuiBadge size="l">999</EuiBadge>
        <EuiBadge size="l">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSizeXL</span>
        <EuiBadge size="xl">9</EuiBadge>
        <EuiBadge size="xl">99</EuiBadge>
        <EuiBadge size="xl">999</EuiBadge>
        <EuiBadge size="xl">Badge label</EuiBadge>
    </div>

    <div class="col eui-u-flex eui-u-flex-column eui-u-mb-m eui-u-mr-m">
        <span>euiSize2XL</span>
        <EuiBadge size="2xl">9</EuiBadge>
        <EuiBadge size="2xl">99</EuiBadge>
        <EuiBadge size="2xl">999</EuiBadge>
        <EuiBadge size="2xl">Badge label</EuiBadge>
    </div>
    </div>
  `}></Code>
  </Example>