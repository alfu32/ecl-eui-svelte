<script context="module" lang="ts">

  declare var navigator:Navigator;
</script>
<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Icon from "../Icon.svelte";
  import Button from "../EuiButton.svelte";

  export let locale;
  export let isAllowed = (date:Date) => true;
  export let value; // Date
  export let month; // Number, index
  export let year; // Number, full year

  let weekStart = 0; // Number
  let legacy = false;
  let direction = 0;

  const dispatch = createEventDispatcher();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weekStartOne =
    "af ar-tn az be bg bm br bs ca cs cv cy da de-at de-ch de el en-SG en-au en-gb en-ie en-nz eo es-do es et eu fi fo fr-ch fr fy ga gd gl gom-latn hr hu hy-am id is it-ch it jv ka kk km ky lb lt lv me mi mk ms-my ms mt my nb nl-be nl nn oc-lnc pl pt-br pt ro ru sd se sk sl sq sr-cyrl sr ss sv sw tet tg tl-ph tlh tr tzl ug-cn uk ur uz-latn uz vi x-pseudo yo zh-cn".split(
      " "
    );
  const weekStartSix = "ar-ly ar-ma ar ku tzm-latn tzm".split(" ");

  let weekdays = [];
  let cells = [];
  $: if (locale) {
    // locale changed
    if (weekStartOne.indexOf(locale.toLowerCase()) >= 0) {
      weekStart = 1;
    } else if (weekStartSix.indexOf(locale.toLowerCase()) >= 0) {
      weekStart = 6;
    } else if (weekStartOne.indexOf(locale.split("-")[0].toLowerCase()) >= 0) {
      weekStart = 1;
    } else if (weekStartSix.indexOf(locale.split("-")[0].toLowerCase()) >= 0) {
      weekStart = 6;
    } else {
      weekStart = 0;
    }

    weekdays.length = 0;
    let date = new Date(0);
    for (let i = 0; i < 7; i++) {
      date.setDate(4 + weekStart + i);
      weekdays.push(
        new Intl.DateTimeFormat(locale, {
          weekday: "narrow",
        }).format(date)
      );
    }

    cells = getDateCells(year, month).map((c) => ({
      value: c,
      allowed: allow(year, month, c),
    }));
  }

  $: cells = getDateCells(year, month, value).map((c) => ({
    value: c,
    allowed: allow(year, month, c),
  }));

  onMount(() => {
    legacy = typeof document.createElement("div").style.grid !== "string";
    if (!locale) {
      locale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language || "en";
    }
  });

  const allow = (year, month, date) => {
    if (!date) return true;
    return isAllowed(new Date(year, month, date));
  };

  const getDateCells = (year, month,value="") => {
    const rows = Array.from({ length: 42 });
    const days = new Date(year, month + 1, 0).getDate();
    let startIndex = new Date(year, month, 1).getDay();

    if (startIndex < weekStart) {
      startIndex += 7;
    }

    Array.from({ length: days }).forEach((_, i) => {
      const index = startIndex + i - weekStart;
      rows[index] = i + 1;
    });

    return rows;
  };

  function onDay(d) {
    return (e) => {
      if (isNaN(value)) {
        value = new Date(year, month, d);
      } else {
        value.setFullYear(year, month, d);
      }
      value = value;
      dispatch("select", value);
    }
  }
  function onKeydown(e) {
    // click simulate
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.stopPropagation();
      e.preventDefault();

      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      });
      e.target.dispatchEvent(clickEvent);
      e.target.blur();
    }
  }

  function isEqualDate(d1, d2) {
    return (
      d1 &&
      d2 &&
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }
  function addMonths(amount) {
    let d = new Date(new Date().setFullYear(year, month, 1));
    d.setMonth(d.getMonth() + amount);
    month = d.getMonth();
    year = d.getFullYear();
    direction = amount;
  }
</script>

<div class="view">
  <div class="toolbar">
    <slot name="dayview-toolbar"></slot>
  </div>
  <div class="grid">
    {#each [0] as item (legacy ? item : year + month)}
      <div
        class="grid-cell"
      >
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="title" tabindex="0" on:keydown={onKeydown}>
          {new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(year, month, 1))}
          {("000" + year).slice(-4)}
        </div>
        <div class="weekdays">
          {#each weekdays as day}
            <slot name="dayview-dayweek" value={day}/>
          {/each}
        </div>
        {#each Array(6) as _, week}
            {#each Array(7) as _, day}
                {#if cells[day + week * 7].value}
                  <span
                  on:keydown={onKeydown}
                  on:click={onDay(cells[day + week * 7].value)} 
                >
                <slot name="dayview-day" value={cells[day + week * 7].value || ""}/>
                </span>
                {/if}
            {/each}
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .disabled-style{
    .view {
      position: relative;
      /*padding: 0 8px 4px;*/
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      /*padding: 0 5px;
      height: 48px;
      top: 0;
      right: 0;
      left: 0;*/
    }
    .grid {
      /*width: 100%;*/
      overflow: hidden;
      user-select: none;
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: 1fr;
      -ms-grid-rows: 1fr;
    }
    .grid-cell {
      position: relative;
      z-index: 3;
      -ms-grid-column: 1;
      grid-column: 1;
      -ms-grid-row: 1;
      grid-row: 1;
      padding:32px 32px 0px 32px
    }
    .grid-cell:nth-child(2) {
      -ms-grid-row: 1;
      grid-row: 1;
    }
    .title {
      /*height: 48px;
      font-size: 16px;
      letter-spacing: 0.75px;
      margin: 0 48px;*/
      text-align: center;
      outline: none;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title:focus,
    .title:hover,
    .title:active {
      /*color: #1976d2;
      color: var(--primary, #1976d2);*/
    }
    .weekdays {
      display: flex;
      justify-content: space-between;
      /*font-weight: 500;
      margin: 8px 0;
      opacity: 0.5;*/
    }

    .row {
      display: flex;
      justify-content: space-between;
      text-align: center;
      /*margin-bottom: 2px;*/
    }
    .cell {
      position: relative;
      width: 34px;
      height: 34px;
      user-select: none;
      display:inline;
    }
    .weekdays .cell {
      text-align: center;
      /*width: 36px;*/
      height: unset;
    }
    .day-control {
      /*font-size: 14px;
      font-weight: 500;*/
      display: block; /* .selected need it */
      box-sizing: border-box;
      cursor: pointer;
      /*width: 34px;
      height: 34px;
      line-height: 34px;*/
      border-radius: 50%;
    }
    .day-control.today {
      /*border: 1px solid;
      border-color: #1976d2;
      border-color: var(--primary, #1976d2);
      color: #1976d2;
      color: var(--primary, #1976d2);
      line-height: 32px;*/ /* 2px border */
    }
    .day-control.selected {
      /*background: #1976d2;
      background: var(--primary, #1976d2);
      color: #fff;
      color: var(--alternate, #fff);
      font-weight: 700;*/
    }
    .day-control:focus {
      outline: none;
    }
    .day-control:before {
      border-radius: inherit;
      color: inherit;
      bottom: 0;
      content: "";
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
      will-change: background-color, opacity;
    }
    @media (hover: hover) {
      .day-control:hover:not([disabled]):not(.disabled):before {
        background-color: currentColor;
        opacity: 0.15;
      }
      :global(.focus-visible).day-control:focus:not([disabled]):not(.disabled):before {
        background-color: currentColor;
        opacity: 0.3;
      }
    }
  }
</style>
