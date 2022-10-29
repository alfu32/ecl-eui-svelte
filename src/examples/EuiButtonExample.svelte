
<!-- file: "src/examples/EuiButtonExample.svelte" -->
<script lang="ts">
    import EuiIconSvg from "../lib/EuiIconSvg.svelte";
    import Example from "../Example.svelte";
    import EuiButton from "../lib/EuiButton.svelte";
</script>
<Example title="EuiButton" phase="work">

    <EuiButton>default</EuiButton>
    <EuiButton isLoading={true}>default</EuiButton>
    <EuiButton>default</EuiButton>
    <EuiButton>default</EuiButton>
    <EuiButton>default</EuiButton>
    <EuiButton>default</EuiButton>
    <h6 class="section-title">Explicit variant</h6>
    <p>Using one of the following input option : <code>kind="primary"</code> | <code>kind="secondary"</code> | <code>kind="info"</code> | <code>kind="success"</code> | <code>kind="warning"</code> | <code>kind="danger"</code> | <code>kind="accent"</code></p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton kind="primary">primary</EuiButton>
        <EuiButton kind="secondary">secondary</EuiButton>
        <EuiButton kind="info">info</EuiButton>
        <EuiButton kind="success">success</EuiButton>
        <EuiButton kind="warning">warning</EuiButton>
        <EuiButton kind="danger">danger</EuiButton>
        <EuiButton kind="accent">accent</EuiButton>
    </div>
    <h6 class="section-title eui-u-mt-m">Flat styled buttons</h6>
    <p>Using the <code>flat</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton kind="primary" flat>flat primary</EuiButton>
      <EuiButton kind="secondary" flat>flat secondary</EuiButton>
      <EuiButton kind="info" flat>flat info</EuiButton>
      <EuiButton kind="success" flat>flat success</EuiButton>
      <EuiButton kind="warning" flat>flat warning</EuiButton>
      <EuiButton kind="danger" flat>flat danger</EuiButton>
      <EuiButton kind="accent" flat>flat accent</EuiButton>
    </div>
    <h6 class="section-title eui-u-mt-m">Outline styled buttons</h6>
    <p>Using the <code>outline</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton kind="primary" outline>outline primary</EuiButton>
      <EuiButton kind="secondary" outline>outline secondary</EuiButton>
      <EuiButton kind="info" outline>outline info</EuiButton>
      <EuiButton kind="success" outline>outline success</EuiButton>
      <EuiButton kind="warning" outline>outline warning</EuiButton>
      <EuiButton kind="danger" outline>outline danger</EuiButton>
      <EuiButton kind="accent" outline>outline accent</EuiButton>
    </div>

    <h6 class="section-title">Disabled Explicit variant</h6>
    <p>Using one of the following input option : <code>kind="primary"</code> | <code>kind="secondary"</code> | <code>kind="info"</code> | <code>kind="success"</code> | <code>kind="warning"</code> | <code>kind="danger"</code> | <code>kind="accent"</code></p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton disabled kind="primary">primary</EuiButton>
        <EuiButton disabled kind="secondary">secondary</EuiButton>
        <EuiButton disabled kind="info">info</EuiButton>
        <EuiButton disabled kind="success">success</EuiButton>
        <EuiButton disabled kind="warning">warning</EuiButton>
        <EuiButton disabled kind="danger">danger</EuiButton>
        <EuiButton disabled kind="accent">accent</EuiButton>
    </div>
    <h6 class="section-title eui-u-mt-m">Disabled Flat styled buttons</h6>
    <p>Using the <code>flat</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton disabled kind="primary" flat>flat primary</EuiButton>
      <EuiButton disabled kind="secondary" flat>flat secondary</EuiButton>
      <EuiButton disabled kind="info" flat>flat info</EuiButton>
      <EuiButton disabled kind="success" flat>flat success</EuiButton>
      <EuiButton disabled kind="warning" flat>flat warning</EuiButton>
      <EuiButton disabled kind="danger" flat>flat danger</EuiButton>
      <EuiButton disabled kind="accent" flat>flat accent</EuiButton>
    </div>
    <h6 class="section-title eui-u-mt-m">Disabled Outline styled buttons</h6>
    <p>Using the <code>outline</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton disabled kind="primary" outline>outline primary</EuiButton>
      <EuiButton disabled kind="secondary" outline>outline secondary</EuiButton>
      <EuiButton disabled kind="info" outline>outline info</EuiButton>
      <EuiButton disabled kind="success" outline>outline success</EuiButton>
      <EuiButton disabled kind="warning" outline>outline warning</EuiButton>
      <EuiButton disabled kind="danger" outline>outline danger</EuiButton>
      <EuiButton disabled kind="accent" outline>outline accent</EuiButton>
    </div>
    <h4>Icon Button</h4>
    <p>Using the <code>euiIconButton</code> input option</p>
<div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s"><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiPrimary><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiSecondary><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiInfo><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiSuccess><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiWarning><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiDanger><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
    <EuiButton euiIconButton class="eui-u-mr-s eui-u-mb-s" euiAccent><EuiIconSvg icon="eui-icon-bell" aria-label="Bell Icon"/></EuiButton>
</div>
</Example>