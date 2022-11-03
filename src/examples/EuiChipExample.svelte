<script lang="ts">

    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiChip from "../lib/EuiChip.svelte";
    import EuiLabel from "../lib/EuiLabel.svelte";
    import EuiIcon from "../lib/EuiIcon.svelte";
    let removed=[]
    const onRemove=({id,typeclass})=>(e:Event)=>{
        alert(`chip ${id} removed`)
        removed = [...removed,{id,typeclass}]
    }
</script>
<Example title="EuiChip">
    <EuiChip>
        <EuiLabel>chip label</EuiLabel>
    </EuiChip>
    <Code value={`
        <EuiChip>
            <EuiLabel>chip label</EuiLabel>
        </EuiChip>
    `}></Code>
    <div class="eui-u-flex eui-u-flex-wrap">
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiPrimary</h6>
            <EuiChip kind=primary><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiSecondary</h6>
            <EuiChip kind=secondary><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiInfo</h6>
            <EuiChip kind=info><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiSuccess</h6>
            <EuiChip kind=success><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiWarning</h6>
            <EuiChip kind=warning><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiDanger</h6>
            <EuiChip kind=danger><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
        <div class="eui-u-mr-m eui-u-mb-m">
            <h6 class="section-title noborder eui-u-m-none">euiAccent</h6>
            <EuiChip kind=accent><EuiLabel>Chip label</EuiLabel></EuiChip>
        </div>
    </div>
    <Code value={`
        <div class="eui-u-flex eui-u-flex-wrap">
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiPrimary</h6>
                <EuiChip kind=primary><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiSecondary</h6>
                <EuiChip kind=secondary><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiInfo</h6>
                <EuiChip kind=info><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiSuccess</h6>
                <EuiChip kind=success><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiWarning</h6>
                <EuiChip kind=warning><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiDanger</h6>
                <EuiChip kind=danger><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
            <div class="eui-u-mr-m eui-u-mb-m">
                <h6 class="section-title noborder eui-u-m-none">euiAccent</h6>
                <EuiChip kind=accent><EuiLabel>Chip label</EuiLabel></EuiChip>
            </div>
        </div>
    `}></Code>
    <h6 class="section-title eui-u-mt-m">Use the close icon to retrieve the data from (remove) event</h6>
    <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
        <EuiChip isChipRemovable
            on:remove={onRemove({id:1,typeclass:"primary"})}
            data={{id: 1, label: 'Chip label', typeClass: 'primary'}}
            kind=primary class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip isChipRemovable
            on:remove={onRemove({id:2,typeclass:"secondary"})}
            data={{id: 2, label: 'Chip label', typeClass: 'secondary'}}
            kind=secondary class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip isChipRemovable
            on:remove={onRemove({id:3,typeclass:"info"})}
            data={{id: 3, label: 'Chip label', typeClass: 'info'}}
            kind=info class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip isChipRemovable
            on:remove={onRemove({id:4,typeclass:"success"})}
            data={{id: 4, label: 'Chip label', typeClass: 'success'}}
            kind=success class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip isChipRemovable
            on:remove={onRemove({id:5,typeclass:"warning"})}
            data={{id: 5, label: 'Chip label', typeClass: 'warning'}}
            kind=warning class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip isChipRemovable
            on:remove={onRemove({id:6,typeclass:"danger"})}
            data={{id: 6, label: 'Chip label', typeClass: 'danger'}}
            kind=danger class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip isChipRemovable
            on:remove={onRemove({id:7,typeclass:"accent"})}
            data={{id: 7, label: 'Chip label', typeClass: 'accent'}}
            kind=accent class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
    </div>
    
    <div class=" eui-u-mt-m"><strong>On (remove) output :</strong></div>
    {#if removed}
    <div class="eui-showcase-demo eui-u-mt-s">
        <div class="code" style="overflow-y: auto;">
            <pre>{ JSON.stringify(removed,null,' ') }</pre>
        </div>
    </div>
    {/if}
    
    <p>For chips removal management, please see <a class="eui-u-text-link" href="/style-guide/components/EuiChip-list"><code>EuiChip-list</code></a>.</p>
    <Code value={`
        <script lang="ts">
            import Example from "../Example.svelte";
            import Code from "../Code.svelte";
            import EuiChip from "../lib/EuiChip.svelte";
            import EuiLabel from "../lib/EuiLabel.svelte";
            let removed=[]
            const onRemove=({id,typeclass})=>(e:Event)=>{
                alert('chip '+ id +' removed')
                removed = [...removed,{id,typeclass}]
            }
        </script>
        <h6 class="section-title eui-u-mt-m">Use the close icon to retrieve the data from (remove) event</h6>
        <div class="eui-u-flex eui-u-flex-wrap eui-u-mt-m">
            <EuiChip isChipRemovable
                on:remove={onRemove({id:1,typeclass:"primary"})}
                data={{id: 1, label: 'Chip label', typeClass: 'primary'}}
                kind=primary class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
            <EuiChip isChipRemovable
                on:remove={onRemove({id:2,typeclass:"secondary"})}
                data={{id: 2, label: 'Chip label', typeClass: 'secondary'}}
                kind=secondary class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
            <EuiChip isChipRemovable
                on:remove={onRemove({id:3,typeclass:"info"})}
                data={{id: 3, label: 'Chip label', typeClass: 'info'}}
                kind=info class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
            <EuiChip isChipRemovable
                on:remove={onRemove({id:4,typeclass:"success"})}
                data={{id: 4, label: 'Chip label', typeClass: 'success'}}
                kind=success class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
            <EuiChip isChipRemovable
                on:remove={onRemove({id:5,typeclass:"warning"})}
                data={{id: 5, label: 'Chip label', typeClass: 'warning'}}
                kind=warning class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
            <EuiChip isChipRemovable
                on:remove={onRemove({id:6,typeclass:"danger"})}
                data={{id: 6, label: 'Chip label', typeClass: 'danger'}}
                kind=danger class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
            <EuiChip isChipRemovable
                on:remove={onRemove({id:7,typeclass:"accent"})}
                data={{id: 7, label: 'Chip label', typeClass: 'accent'}}
                kind=accent class="eui-u-mr-2xs eui-u-mb-2xs">
                <EuiLabel>Chip label</EuiLabel>
            </EuiChip>
        </div>
        
        <div class=" eui-u-mt-m"><strong>On (remove) output :</strong></div>
        {#if removed}
        <div class="eui-showcase-demo eui-u-mt-s">
            <div class="code" style="overflow-y: auto;">
                <pre>{ JSON.stringify(removed,null,' ') }</pre>
            </div>
        </div>
        {/if}
        
        <p>For chips removal management, please see <a class="eui-u-text-link" href="/style-guide/components/EuiChip-list"><code>EuiChip-list</code></a>.</p>
    `}></Code>
    <h6 class="section-title eui-u-mt-m">Using <strong>eui-icon</strong> webfont</h6>
    <div class="eui-u-flex eui-u-flex-wrap">
        <EuiChip kind=primary class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=secondary class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=info class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=success class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=warning class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=danger class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=accent class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon class="eui-icon-clock"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
    </div>
    
    
    <h6 class="section-title">Using <strong>eui-icon-svg</strong> font</h6>
    <div class="eui-u-flex eui-u-flex-wrap">
        <EuiChip kind=primary class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=secondary class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=info class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=success class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=warning class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=danger class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=accent class="eui-u-mr-2xs eui-u-mb-2xs">
            <EuiIcon icon="time" set="outline"></EuiIcon>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
    </div>
    
    
    <h6 class="section-title">Using <strong>eui-flag-icon</strong> fonts</h6>
    <div class="eui-u-flex eui-u-flex-wrap">
        <EuiChip kind=primary class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-be"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=secondary class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-fr"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=info class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-gr"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=success class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-es"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=warning class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-it"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=danger class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-de"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=accent class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-lu"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
    </div>
    
    
    <h6 class="section-title">Using <strong>eui-flag-icon eui-flag-icon--rounded</strong> fonts</h6>
    <div class="eui-u-flex eui-u-flex-wrap">
        <EuiChip kind=primary class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-be eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=secondary class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-fr eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=info class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-gr eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=success class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-es eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=warning class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-it eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=danger class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-de eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
        <EuiChip kind=accent class="eui-u-mr-2xs eui-u-mb-2xs">
            <span class="eui-flag-icon eui-flag-icon-lu eui-flag-icon--rounded"></span>
            <EuiLabel>Chip label</EuiLabel>
        </EuiChip>
    </div>
</Example>