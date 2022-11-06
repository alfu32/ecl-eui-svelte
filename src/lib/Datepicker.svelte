<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { isDate } from "../date";
  import Day from "./datepicker/Day.svelte";
  import Month from "./datepicker/Month.svelte";
  import Year from "./datepicker/Year.svelte";
    import type { T_Nullable } from "./T_NullableProp";

  export let locale:string="fr-FR";
  export let isAllowed = (date:Date) => true;
  export let header = true;
  export let value;
  let clazz:T_Nullable<string>="";
  export { clazz as class}
  export let style:T_Nullable<string>="";

  const dispatch = createEventDispatcher();

  let type:"days"|"month"|"year" = "days";
  let month;
  let year;
  let elm:HTMLDivElement;

  if (!isDate(value)) {
    value = new Date(NaN);
  }

  let d = isNaN(value) ? new Date() : new Date(value.getTime());
  month = d.getMonth();
  year = d.getFullYear();

  $: if (elm) {
    setTimeout(() => {
      if (elm) {
        //elm.style.height = elm.offsetHeight + "px";
        //elm.style.width = elm.offsetWidth + "px";
      }
    }, 100);
  }

  function onView({ detail }) {
    type = detail.type;
  }
  function onYear({ detail }) {
    year = +detail.year;
    type = "days";
  }
  function onMonth({ detail }) {
    month = +detail.month;
    year = +detail.year;
    type = "days";
  }
  function onDay({ detail }) {
    value = new Date(detail.getTime());
    dispatch("select", value);
  }
  function addMonths(amount) {
    let d = new Date(new Date().setFullYear(year, month, 1));
    d.setMonth(d.getMonth() + amount);
    month = d.getMonth();
    year = d.getFullYear();
  }
</script>

<div class="datepicker{clazz}" {style}>
  {#if header}
    <div class="header">
      {#if !isNaN(value)}
        <div class="year">{("000" + value.getFullYear()).slice(-4)}</div>
        <div class="wrap">
          <div class="date">
            {new Intl.DateTimeFormat(locale, {
              weekday: "short",
              month: "short",
              day: "numeric",
            }).format(value)}
          </div>
        </div>
      {:else}
        <div class="year">&nbsp;</div>
        <div class="date">No Date</div>
      {/if}
    </div>
  {/if}
  <div class="body" bind:this={elm}>
    {#if type === "year"}
      <Year {year} on:select={onYear}></Year>
    {:else if type === "month"}
      <Month {locale} bind:year {value} on:select={onMonth} on:changeView={onView}></Month>
    {:else}
      <Day {locale} {isAllowed} bind:month bind:year {value} on:select={onDay} on:changeView={onView}>
        <slot name="dayview-toolbar" slot="dayview-toolbar" let:addMonths {addMonths}/>
        <slot name="dayview-dayweek" slot="dayview-dayweek" let:value {value}>{value}</slot>
        <slot name="dayview-day" slot="dayview-day" let:value {value}>{value}</slot>
      </Day>
    {/if}
  </div>
</div>

<style lang="scss">
  .disabled-style{
    .datepicker {
      position: relative;
      overflow: hidden;
    }
    .header {
      box-sizing: border-box;
      /*color: #fff;
      color: var(--alternate, #fff);
      background: #1976d2;
      background: var(--primary, #1976d2);
      padding: 16px;
      height: 97px;*/
    }
    .wrap {
      position: relative;
    }
    .wrap .date {
      position: absolute;
      left: 0;
      top: 0;
      width: calc(100% - 32px);
      overflow: hidden;
      /* text-overflow: ellipsis; */
      white-space: nowrap;
    }

    .year {
      border-left:1px solid #333;
      /*font-size: 16px;
      font-weight: 700;
      opacity: 0.6;
      margin-bottom: 8px;*/
    }
    .date {
      border-left:1px solid #333;
      /*font-size: 34px;
      font-weight: 500;*/
    }
    .body {
      border-left:1px solid #333;
      overflow: hidden;
    }

    @media only screen and (max-height: 400px) and (min-width: 420px) {
      .datepicker {
        display: flex;
      }
      .header {
        height: auto;
        /*width: 148px;*/
      }
      .wrap .date {
        white-space: unset;
      }
    }
  }
</style>
