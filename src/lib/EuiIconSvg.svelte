<script lang="ts">
    import type { T_EuiIcon } from "../lib/T_EuiIcon";
    import type { T_EuiSize } from "../lib/T_EuiSize";


    let clazz:  string = "";
    export { clazz as class };
    export let icon: T_EuiIcon;
    export let set: string="eui";
    export let fillcolor: string = "grey-100";
    export let size: T_EuiSize = "m";
</script>

<eui-icon-svg
    icon={icon}
    aria-disabled="false"
    aria-label="eUI Icon"
    class="eui-icon-svg"
    ><svg
        aria-hidden="true"
        focusable="false"
        class="eui-icon-svg {icon} eui-icon-svg--color-{fillcolor} eui-icon-svg--size-{size} {clazz}"
        ><use href="/{set}.svg#{icon}" /></svg
    >
    </eui-icon-svg>

<style>
</style>
