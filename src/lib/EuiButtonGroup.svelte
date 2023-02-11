<script lang="ts">
  import { onMount, afterUpdate } from "svelte"


  let clazz:  string = "";
  export { clazz as class };
  let self=this;
  onMount(()=>{
    console.log({mount:"EuiButtonGroup",$$props,$$slots})
  })
</script>
<div class="EuiButtonGroup {clazz}">
        <slot name="first"></slot>
        <slot></slot>
</div>
<style>
    .EuiButtonGroup{
        display: inline-block;
        padding-left:6px;
        margin:10px;
    }
    .EuiButtonGroup:global(> button.eui-button){
        margin-left:-6px;
        border-radius:0px;
        border-right-width:0px;
    }
    .EuiButtonGroup:global(> button:last-child){
        /*background-color:#F308 !important;*/
        border-top-right-radius:var(--eui-base-border-radius);
        border-bottom-right-radius:var(--eui-base-border-radius);
        border-right-width:1px;
    }
    .EuiButtonGroup:global(> button:first-child){
        /*background-color:#3F08 !important;*/
        border-top-left-radius:var(--eui-base-border-radius);
        border-bottom-left-radius:var(--eui-base-border-radius);
    }
</style>