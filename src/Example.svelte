<script lang="ts">
    /*import "brace/mode/html";
    import "brace/theme/monokai";*/


    export let title:string=""
    export let phase:'todo'|'plan'|'work'|'done'|'test'|'ready'='todo';
    $:iconclass=` ${phase}`;
    //$:childrenCount=Array.prototype.slice.call(children[0].children).map(c => (c.nodeValue||c.tagName))
    export let childrenCount=10
    let slotElement:HTMLDivElement;
</script>

<details title={title}>
    <summary class="{iconclass}">
        <strong>{title}</strong>[{childrenCount}]
    </summary>
    
    <hr/>
        <div bind:this={slotElement}>
            <slot></slot>
        </div>
</details>
<style lang="scss">
    details{
        border:1px solid #3330;
        padding-left:24px;
        &:hover{
            border:1px solid #333;
        }
        summary{
            cursor:pointer;
            &::marker{
                font-family: 'Courier New', Courier, monospace;
                font-size: 1.2em;
                border:1px solid #3330;
            }
            &.todo::marker{
                content:'\1f311[todo]';
                color:#263488;
            }
            &.plan::marker{
                content:'\1f312[plan]';
                color:#263488;
            }
            &.work::marker{
                content:'\1f313[work]';

                color:#922706;
            }
            &.done::marker{
                content:'\1f314[done]';
                color:#2d6328;
            }
            &.test::marker{
                content:'\1f315[test]';
                color:#292863;
            }
            &.ready::marker{
                content:'\1f31f[ready]';
                color:#292863;
            }
        }
    }
</style>