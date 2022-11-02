<script lang="ts">
    export let routerLink;
</script>

<a href={routerLink}  class="eui-card-media__container-content">
    <slot></slot>
</a>