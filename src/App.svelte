<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import EuiAlert from './lib/EuiAlert.svelte'
    import type { T_EuiIcon } from './lib/EuiIcon';
    import EuiIconSvg from './lib/EuiIconSvg.svelte';
  let dynamicIcon:T_EuiIcon="eui-settings"
</script>

<main>
  <details>
    <summary><strong>EuiAlert</strong></summary>
    <hr>
    <div>
      <EuiAlert>this is a great info</EuiAlert>
      <EuiAlert euiAlertKind="success">this is a great success</EuiAlert>
      <EuiAlert euiAlertKind="warning">this is a great warning</EuiAlert>
      <EuiAlert euiAlertKind="danger">this is a great danger</EuiAlert>
      <EuiAlert euiAlertKind="secondary">this is a great secondary</EuiAlert>
      <EuiAlert isCloseable={true}>this is a great closable info</EuiAlert>
      <EuiAlert isCloseable={true} euiAlertKind="success">this is a great closable success</EuiAlert>
      <EuiAlert isCloseable={true} euiAlertKind="warning">this is a great closable warning</EuiAlert>
      <EuiAlert isCloseable={true} euiAlertKind="danger">this is a great closable danger</EuiAlert>
      <EuiAlert isCloseable={true} euiAlertKind="secondary">this is a great closable secondary</EuiAlert>
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
</main>

<style>
</style>