<script lang="ts">
    import {default as AceNs} from 'ace-builds';
    import 'ace-builds/src-noconflict/ace';
    import 'ace-builds/src-noconflict/ext-beautify';
    import 'ace-builds/src-noconflict/ext-options';
    import 'ace-builds/src-noconflict/ext-hardwrap';
    import 'ace-builds/src-noconflict/ext-searchbox';
    import 'ace-builds/src-noconflict/ext-settings_menu';
    
    
    import 'ace-builds/src-min-noconflict/mode-html';
    ///// import 'ace-builds/src-min-noconflict/theme-monokai';
    ///// import 'ace-builds/src-min-noconflict/theme-github';
    ///// import 'ace-builds/src-min-noconflict/theme-cloud9_day';
    ///// import 'ace-builds/src-min-noconflict/theme-cloud9_night';
    ///// import 'ace-builds/src-min-noconflict/theme-dracula';
    ///// import 'ace-builds/src-min-noconflict/theme-cobalt';
    ///// import 'ace-builds/src-min-noconflict/theme-crimson_editor';
    import 'ace-builds/src-min-noconflict/theme-eclipse';

    import EuiButton from "./lib/EuiButton.svelte";
    import { formatXml, getElementBySelector, trimIndent } from "./string-util";
    import { onDestroy } from 'svelte';

    export let value: string;
    export let height:string = "400px";
    $: formattedValue = trimIndent(value);
    let editor:AceNs.Ace.Editor;
    let session:AceNs.Ace.EditSession;

    let codeButtonText: string = "show code";
    let code: boolean = false;
    async function toggleCode(e) {
        code = !code;
        if(code && aceEditorContainer===null){
            await mountContainer()
        }
        codeButtonText = code ? "hide code" : "show code";
        formattedValue = trimIndent(value);
    }
    let id='id-'+Math.floor(Math.random()*65535).toString(16)
    let aceEditorContainer: HTMLElement=null;
    onDestroy(()=>{
        editor.destroy()
    })
    async function mountContainer() {
        
        aceEditorContainer = await getElementBySelector(`#${id}`)
        let ace = AceNs
        editor= ace.edit(id);
        session = editor.getSession();
        session.setMode("ace/mode/html");
        editor.setTheme("ace/theme/eclipse");
        aceEditorContainer.style.height = height
        aceEditorContainer.style.lineHeight = "1.4"
        aceEditorContainer.style.fontSize = "16px"
        editor.renderer.updateFontSize()
        console.log({
            ace,
            aceEditorContainer,
            editor,
            session,
        });
        let v="init"
        try{
            v=editor.setValue(trimIndent(value)) + "!!!";
        }catch(err){
            try{v=editor.setValue('trimIndent(value)') + "???";}catch(err){v="nothing"}
        }
        return v;
    };
</script>

<div>
    <EuiButton on:click={toggleCode}>{codeButtonText}</EuiButton>
    <hr />
    {#if code}
        <div {id} class="ace-container" bind:this={aceEditorContainer} />
        <hr />
    {/if}
</div>

<style lang="scss">
    .code {
        border: 1px solid #ccc;
        margin: 5px;
        padding: 5px;
        padding-left: 15px;
    }
    .ace-container {
        text-align: left;
        height:400px;
    }
</style>
