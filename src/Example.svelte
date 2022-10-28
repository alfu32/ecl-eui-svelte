<script lang="ts">
    import type { T_NullableProp } from "./lib/T_NullableProp";


    export let title:string=""
    export let phase:'todo'|'plan'|'work'|'done'|'test'|'ready'='todo';
    $:iconclass=` ${phase}`;
</script>

<details title={title}>
    <summary class="{iconclass}">
        <strong>{title}</strong>
    </summary>
    <hr/>
    <div>
        <slot></slot>
    </div>
</details>
<style>
    details{
        border:1px solid #3330;
    }
    details:hover{
        border:1px solid #333;
    }
    summary{
        cursor:pointer;
    }
    summary::marker{
        font-family: 'Courier New', Courier, monospace;
    }
    summary.todo::marker{
        content:'\1f311[todo]';
        color:#263488;
    }
    summary.plan::marker{
        content:'\1f312[plan]';
        color:#263488;
    }
    summary.work::marker{
        content:'\1f313[work]';

        color:#922706;
    }
    summary.done::marker{
        content:'\1f314[done]';
        color:#2d6328;
    }
    summary.test::marker{
        content:'\1f315[test]';
        color:#292863;
    }
    summary.ready::marker{
        content:'\1f31f[ready]';
        color:#292863;
    }
    summary::marker{
        font-size: 1.2em;
        border:1px solid #3330;
    }
</style>