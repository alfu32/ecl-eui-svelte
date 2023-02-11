
<!-- file: "src/examples/EuiButtonExample.svelte" -->
<script lang="ts">
    import EuiIconSvg from "../lib/EuiIconSvg.svelte";
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiButton from "../lib/EuiButton.svelte";
    import EuiIcon from "../lib/EuiIcon.svelte";
    import EuiLabel from "../lib/EuiLabel.svelte";
    import type { T_Nullable } from "src/lib/T_NullableProp";

    let isLoading:T_Nullable<true> = true
    function toggleLoadingState(e){
      isLoading=isLoading === null ? true : null
    }
</script>
<Example title="EuiButton" phase="work">

  <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
    <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
    <EuiButton class="eui-u-mr-s eui-u-mb-s" isLoading>default</EuiButton>
    <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
    <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
    <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
    <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
  </div>
  <Code value={`
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
      <EuiButton class="eui-u-mr-s eui-u-mb-s" isLoading>default</EuiButton>
      <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
      <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
      <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
      <EuiButton class="eui-u-mr-s eui-u-mb-s">default</EuiButton>
    </div>
  `}></Code>
  <hr/>
    <h6 class="section-title">Explicit variant</h6>
    <p>Using one of the following input option : <code>kind="primary"</code> | <code>kind="secondary"</code> | <code>kind="info"</code> | <code>kind="success"</code> | <code>kind="warning"</code> | <code>kind="danger"</code> | <code>kind="accent"</code></p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton kind="primary" class="eui-u-mr-s eui-u-mb-s">primary</EuiButton>
        <EuiButton kind="secondary" class="eui-u-mr-s eui-u-mb-s">secondary</EuiButton>
        <EuiButton kind="info" class="eui-u-mr-s eui-u-mb-s">info</EuiButton>
        <EuiButton kind="success" class="eui-u-mr-s eui-u-mb-s">success</EuiButton>
        <EuiButton kind="warning" class="eui-u-mr-s eui-u-mb-s">warning</EuiButton>
        <EuiButton kind="danger" class="eui-u-mr-s eui-u-mb-s">danger</EuiButton>
        <EuiButton kind="accent" class="eui-u-mr-s eui-u-mb-s">accent</EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton kind="primary" class="eui-u-mr-s eui-u-mb-s">primary</EuiButton>
        <EuiButton kind="secondary" class="eui-u-mr-s eui-u-mb-s">secondary</EuiButton>
        <EuiButton kind="info" class="eui-u-mr-s eui-u-mb-s">info</EuiButton>
        <EuiButton kind="success" class="eui-u-mr-s eui-u-mb-s">success</EuiButton>
        <EuiButton kind="warning" class="eui-u-mr-s eui-u-mb-s">warning</EuiButton>
        <EuiButton kind="danger" class="eui-u-mr-s eui-u-mb-s">danger</EuiButton>
        <EuiButton kind="accent" class="eui-u-mr-s eui-u-mb-s">accent</EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title eui-u-mt-m">Flat styled buttons</h6>
    <p>Using the <code>flat</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton kind="primary" flat class="eui-u-mr-s eui-u-mb-s">flat primary</EuiButton>
      <EuiButton kind="secondary" flat class="eui-u-mr-s eui-u-mb-s">flat secondary</EuiButton>
      <EuiButton kind="info" flat class="eui-u-mr-s eui-u-mb-s">flat info</EuiButton>
      <EuiButton kind="success" flat class="eui-u-mr-s eui-u-mb-s">flat success</EuiButton>
      <EuiButton kind="warning" flat class="eui-u-mr-s eui-u-mb-s">flat warning</EuiButton>
      <EuiButton kind="danger" flat class="eui-u-mr-s eui-u-mb-s">flat danger</EuiButton>
      <EuiButton kind="accent" flat class="eui-u-mr-s eui-u-mb-s">flat accent</EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton kind="primary" flat class="eui-u-mr-s eui-u-mb-s">flat primary</EuiButton>
        <EuiButton kind="secondary" flat class="eui-u-mr-s eui-u-mb-s">flat secondary</EuiButton>
        <EuiButton kind="info" flat class="eui-u-mr-s eui-u-mb-s">flat info</EuiButton>
        <EuiButton kind="success" flat class="eui-u-mr-s eui-u-mb-s">flat success</EuiButton>
        <EuiButton kind="warning" flat class="eui-u-mr-s eui-u-mb-s">flat warning</EuiButton>
        <EuiButton kind="danger" flat class="eui-u-mr-s eui-u-mb-s">flat danger</EuiButton>
        <EuiButton kind="accent" flat class="eui-u-mr-s eui-u-mb-s">flat accent</EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title eui-u-mt-m">Outline styled buttons</h6>
    <p>Using the <code>outline</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton kind="primary" outline class="eui-u-mr-s eui-u-mb-s">outline primary</EuiButton>
      <EuiButton kind="secondary" outline class="eui-u-mr-s eui-u-mb-s">outline secondary</EuiButton>
      <EuiButton kind="info" outline class="eui-u-mr-s eui-u-mb-s">outline info</EuiButton>
      <EuiButton kind="success" outline class="eui-u-mr-s eui-u-mb-s">outline success</EuiButton>
      <EuiButton kind="warning" outline class="eui-u-mr-s eui-u-mb-s">outline warning</EuiButton>
      <EuiButton kind="danger" outline class="eui-u-mr-s eui-u-mb-s">outline danger</EuiButton>
      <EuiButton kind="accent" outline class="eui-u-mr-s eui-u-mb-s">outline accent</EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton kind="primary" outline class="eui-u-mr-s eui-u-mb-s">outline primary</EuiButton>
        <EuiButton kind="secondary" outline class="eui-u-mr-s eui-u-mb-s">outline secondary</EuiButton>
        <EuiButton kind="info" outline class="eui-u-mr-s eui-u-mb-s">outline info</EuiButton>
        <EuiButton kind="success" outline class="eui-u-mr-s eui-u-mb-s">outline success</EuiButton>
        <EuiButton kind="warning" outline class="eui-u-mr-s eui-u-mb-s">outline warning</EuiButton>
        <EuiButton kind="danger" outline class="eui-u-mr-s eui-u-mb-s">outline danger</EuiButton>
        <EuiButton kind="accent" outline class="eui-u-mr-s eui-u-mb-s">outline accent</EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title">Disabled Explicit variant</h6>
    <p>Using one of the following input option : <code>kind="primary"</code> | <code>kind="secondary"</code> | <code>kind="info"</code> | <code>kind="success"</code> | <code>kind="warning"</code> | <code>kind="danger"</code> | <code>kind="accent"</code></p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="primary">primary</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="secondary">secondary</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="info">info</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="success">success</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="warning">warning</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="danger">danger</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="accent">accent</EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="primary">primary</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="secondary">secondary</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="info">info</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="success">success</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="warning">warning</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="danger">danger</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="accent">accent</EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title eui-u-mt-m">Disabled Flat styled buttons</h6>
    <p>Using the <code>flat</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="primary" flat>flat primary</EuiButton>
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="secondary" flat>flat secondary</EuiButton>
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="info" flat>flat info</EuiButton>
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="success" flat>flat success</EuiButton>
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="warning" flat>flat warning</EuiButton>
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="danger" flat>flat danger</EuiButton>
      <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="accent" flat>flat accent</EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="primary" flat>flat primary</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="secondary" flat>flat secondary</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="info" flat>flat info</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="success" flat>flat success</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="warning" flat>flat warning</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="danger" flat>flat danger</EuiButton>
        <EuiButton disabled class="eui-u-mr-s eui-u-mb-s" kind="accent" flat>flat accent</EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title eui-u-mt-m">Disabled Outline styled buttons</h6>
    <p>Using the <code>outline</code> input option</p>

    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="primary" outline>outline primary</EuiButton>
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="secondary" outline>outline secondary</EuiButton>
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="info" outline>outline info</EuiButton>
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="success" outline>outline success</EuiButton>
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="warning" outline>outline warning</EuiButton>
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="danger" outline>outline danger</EuiButton>
      <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="accent" outline>outline accent</EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="primary" outline>outline primary</EuiButton>
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="secondary" outline>outline secondary</EuiButton>
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="info" outline>outline info</EuiButton>
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="success" outline>outline success</EuiButton>
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="warning" outline>outline warning</EuiButton>
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="danger" outline>outline danger</EuiButton>
        <EuiButton disabled  class="eui-u-mr-s eui-u-mb-s" kind="accent" outline>outline accent</EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h4>Icon Button</h4>
    <p>Using the <code>euiIconButton</code> input option</p>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
      </div>
    `}></Code>
    <hr/>

    <h6 class="section-title eui-u-mt-m">BASIC</h6>
    <p>Using the <code>euiIconButton euiBasicButton</code> input options</p>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title eui-u-mt-m">OUTLINE</h6>
    <p>Using the <code>euiIconButton euiOutline</code> input options</p>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
    </div>
    <Code value={`
      <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
      </div>
    `}></Code>
    <hr/>
    <h6 class="section-title eui-u-mt-m">Using eui-icon-svg</h6>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton class="eui-u-mr-s eui-u-mb-s">
            <EuiLabel>Default</EuiLabel>
            <EuiIconSvg icon="eui-chevron-forward" class="eui-u-ml-2xs"></EuiIconSvg>
        </EuiButton>
        <EuiButton kind=primary class="eui-u-mr-s eui-u-mb-s">
            <EuiLabel>Primary</EuiLabel>
            <EuiIconSvg icon="eui-chevron-forward" class="eui-u-ml-2xs"></EuiIconSvg>
        </EuiButton>
        <EuiButton kind=secondary class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="old-eui-list" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>View list</EuiLabel>
        </EuiButton>
        <EuiButton class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="eui-chevron-back" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Back</EuiLabel>
        </EuiButton>
        <EuiButton kind=primary class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="eui-pencil" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Edit</EuiLabel>
        </EuiButton>
        <EuiButton kind=secondary class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="old-eui-list" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>View</EuiLabel>
        </EuiButton>
        <EuiButton kind=info class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="eui-information-circle" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Info</EuiLabel>
        </EuiButton>
        <EuiButton kind=success class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="eui-checkmark" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Ok</EuiLabel>
        </EuiButton>
        <EuiButton kind=secondary class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="eui-close" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Cancel</EuiLabel>
        </EuiButton>
        <EuiButton kind=warning class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="thumbs-up-outline" set="outline" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Warning</EuiLabel>
        </EuiButton>
        <EuiButton kind=danger class="eui-u-mr-s eui-u-mb-s">
            <EuiIconSvg icon="trash-sharp" set="sharp" class="eui-u-mr-2xs"></EuiIconSvg>
            <EuiLabel>Delete</EuiLabel>
        </EuiButton>
        <EuiButton kind=accent class="eui-u-mr-s eui-u-mb-s">
            <EuiLabel>More</EuiLabel>
            <EuiIconSvg icon="eui-ellipsis-horizontal" class="eui-u-ml-2xs"></EuiIconSvg>
        </EuiButton>
    </div>
    <Code value={`
        <h6 class="section-title eui-u-mt-m">Using eui-icon-svg</h6>
        <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
            <EuiButton class="eui-u-mr-s eui-u-mb-s">
                <EuiLabel>Default</EuiLabel>
                <EuiIconSvg icon="eui-chevron-forward" class="eui-u-ml-2xs"></EuiIconSvg>
            </EuiButton>
            <EuiButton kind=primary class="eui-u-mr-s eui-u-mb-s">
                <EuiLabel>Primary</EuiLabel>
                <EuiIconSvg icon="eui-chevron-forward" class="eui-u-ml-2xs"></EuiIconSvg>
            </EuiButton>
            <EuiButton kind=secondary class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="old-eui-list" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>View list</EuiLabel>
            </EuiButton>
            <EuiButton class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="eui-chevron-back" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Back</EuiLabel>
            </EuiButton>
            <EuiButton kind=primary class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="eui-pencil" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Edit</EuiLabel>
            </EuiButton>
            <EuiButton kind=secondary class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="old-eui-list" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>View</EuiLabel>
            </EuiButton>
            <EuiButton kind=info class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="eui-information-circle" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Info</EuiLabel>
            </EuiButton>
            <EuiButton kind=success class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="eui-checkmark" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Ok</EuiLabel>
            </EuiButton>
            <EuiButton kind=secondary class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="eui-close" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Cancel</EuiLabel>
            </EuiButton>
            <EuiButton kind=warning class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="thumbs-up-outline" set="outline" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Warning</EuiLabel>
            </EuiButton>
            <EuiButton kind=danger class="eui-u-mr-s eui-u-mb-s">
                <EuiIconSvg icon="trash-sharp" set="sharp" class="eui-u-mr-2xs"></EuiIconSvg>
                <EuiLabel>Delete</EuiLabel>
            </EuiButton>
            <EuiButton kind=accent class="eui-u-mr-s eui-u-mb-s">
                <EuiLabel>More</EuiLabel>
                <EuiIconSvg icon="eui-ellipsis-horizontal" class="eui-u-ml-2xs"></EuiIconSvg>
            </EuiButton>
        </div>
    `}></Code>
    <hr/>

    <h6 class="section-title eui-u-mt-m">DEFAULT</h6>
    <p>Using the <code>euiRounded euiIconButton</code> input options</p>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
          <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
    </div>
    <Code value={`
        <h6 class="section-title eui-u-mt-m">DEFAULT</h6>
        <p>Using the <code>euiRounded euiIconButton</code> input options</p>
        <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
              <EuiButton euiRounded euiIconButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        </div>
    `}></Code>
    <hr/>

    <h6 class="section-title eui-u-mt-m">BASIC</h6>
    <p>Using the <code>euiRounded euiIconButton euiBasicButton</code> input options</p>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
    </div>
    <Code value={`
        <h6 class="section-title eui-u-mt-m">BASIC</h6>
        <p>Using the <code>euiRounded euiIconButton euiBasicButton</code> input options</p>
        <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiBasicButton class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        </div>
    `}></Code>
    <hr/>

    <h6 class="section-title eui-u-mt-m">OUTLINE</h6>
    <p>Using the <code>euiRounded euiIconButton euiOutline</code> input options</p>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
    </div>
    <Code value={`
        <h6 class="section-title eui-u-mt-m">OUTLINE</h6>
        <p>Using the <code>euiRounded euiIconButton euiOutline</code> input options</p>
        <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s"><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=primary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=secondary><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=info><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=success><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=warning><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=danger><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
            <EuiButton euiRounded euiIconButton euiOutline class="eui-u-mr-s eui-u-mb-s" kind=accent><EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"/></EuiButton>
        </div>
    `}></Code>
    <hr/>
    <p>Action buttons with a loading state visual is used in some cases to improve better user experience when an action takes too long time to complete.
      Use the <code>isLoading</code> input option with <code>true</code> | <code>false</code> value to enable/disable it.</p>
      
      
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
      <EuiButton {isLoading} kind="primary" class="eui-u-mr-s eui-u-mb-s">primary</EuiButton>
      <EuiButton {isLoading} kind="secondary" class="eui-u-mr-s eui-u-mb-s">secondary</EuiButton>
      <EuiButton {isLoading} kind="info" class="eui-u-mr-s eui-u-mb-s">info</EuiButton>
      <EuiButton {isLoading} kind="success" class="eui-u-mr-s eui-u-mb-s">success</EuiButton>
      <EuiButton {isLoading} kind="warning" class="eui-u-mr-s eui-u-mb-s">warning</EuiButton>
      <EuiButton {isLoading} kind="danger" class="eui-u-mr-s eui-u-mb-s">danger</EuiButton>
      <EuiButton {isLoading} kind="accent" class="eui-u-mr-s eui-u-mb-s">accent</EuiButton>
  </div>
      
      <br>
      <EuiButton euiOutline kind="primary" class="eui-u-mr-s eui-u-mb-s" on:click={toggleLoadingState}>Toggle loading state</EuiButton>
      <Code value={`
        <p>Action buttons with a loading state visual is used in some cases to improve better user experience when an action takes too long time to complete.
          Use the <code>isLoading</code> input option with <code>true</code> | <code>false</code> value to enable/disable it.</p>
          
          
        <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
          <EuiButton {isLoading} kind="primary" class="eui-u-mr-s eui-u-mb-s">primary</EuiButton>
          <EuiButton {isLoading} kind="secondary" class="eui-u-mr-s eui-u-mb-s">secondary</EuiButton>
          <EuiButton {isLoading} kind="info" class="eui-u-mr-s eui-u-mb-s">info</EuiButton>
          <EuiButton {isLoading} kind="success" class="eui-u-mr-s eui-u-mb-s">success</EuiButton>
          <EuiButton {isLoading} kind="warning" class="eui-u-mr-s eui-u-mb-s">warning</EuiButton>
          <EuiButton {isLoading} kind="danger" class="eui-u-mr-s eui-u-mb-s">danger</EuiButton>
          <EuiButton {isLoading} kind="accent" class="eui-u-mr-s eui-u-mb-s">accent</EuiButton>
      </div>
      `}></Code>
    <hr/>
</Example>