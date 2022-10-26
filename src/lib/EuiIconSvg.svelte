<script lang="ts">
    import type { T_EuiIcon } from "./EuiIcon.d";


    export let icon: T_EuiIcon;
    export let set: string="eui";
    export let fillcolor: string = "grey-100";
    export let size: "xs"|"s"|"m"|"l"|"xl" = "m";
</script>

<eui-icon-svg
    icon={icon}
    aria-disabled="false"
    aria-label="eUI Icon"
    class="eui-icon-svg"
    ><svg
        aria-hidden="true"
        focusable="false"
        class="eui-icon-svg {icon} eui-icon-svg--color-{fillcolor} eui-icon-svg--size-{size}"
        ><use href="/{set}.svg#{icon}" /></svg
    >
    </eui-icon-svg>

<style>
</style>
