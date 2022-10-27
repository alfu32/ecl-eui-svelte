<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import EuiAlert from './lib/EuiAlert.svelte'
    import type { T_EuiIcon } from './lib/T_EuiIcon';
    import EuiIconSvg from './lib/EuiIconSvg.svelte';
    import EuiBadge from './lib/EuiBadge.svelte';
    import EuiBlockContent from './lib/EuiBlockContent.svelte';
    import EuiButton from './lib/EuiButton.svelte';
  let dynamicIcon:T_EuiIcon="eui-settings"
  let contentIsBlocked:boolean=false;
</script>

<main>
  <details>
    <summary><strong>EuiAlert</strong></summary>
    <hr>
    <div>
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
    </div>
  </details>
  <details>
    <summary><strong>EuiBadge</strong></summary>
    <hr>
    <div>
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
    </div>
  </details>
  <details>
    <summary><strong>EuiContentBlock</strong></summary>
    <hr>
    <div>
      <EuiBlockContent isBlocked={contentIsBlocked}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </EuiBlockContent>
      <EuiButton on:click={e => contentIsBlocked=!contentIsBlocked}>{contentIsBlocked?"unblock":"block"}</EuiButton>
    </div>
  </details>
  <details>
    <summary><strong>EuiIconSvg</strong></summary>
    <hr>
    <div>
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

    </div>
  </details>
  <details>
    <summary><strong>EuiButton</strong></summary>
    <hr>
    <div>
      <EuiButton>default</EuiButton>
      <h6 class="section-title">Explicit variant color input</h6>
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
  <EuiButton disabled kind="primary" outline>outline primary</EuiButton>
  <EuiButton kind="secondary" outline>outline secondary</EuiButton>
  <EuiButton kind="info" outline>outline info</EuiButton>
  <EuiButton kind="success" outline>outline success</EuiButton>
  <EuiButton kind="warning" outline>outline warning</EuiButton>
  <EuiButton kind="danger" outline>outline danger</EuiButton>
  <EuiButton kind="accent" outline>outline accent</EuiButton>
  <button disabled>disabled button</button>
</div>
    </div>
  </details>
</main>

<style>
</style>