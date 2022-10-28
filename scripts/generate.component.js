import { writeFileSync, readdirSync} from 'fs';

const componentName = process.argv[1];

function readLibDir(){
    return readdirSync('src/lib/')
    .filter( n =>  n.substring(0,3) === "Eui")
    .map(
        e => {
            return e.split(".")[0];
        }
    )
}
String.prototype.trimIndent=function (){
    const lines = this.trimEnd().split(/\n|\r\n|\r|\n\r/gi);
    const minspace = lines.reduce( (minLength,line) => {
        if(line.length===0){
            return minLength
        }
        const startSpaces=line.match(/^(\s+)/gi)[0].length
        return Math.min(minLength,startSpaces);
    },Number.MAX_SAFE_INTEGER)
    return lines.map( line => line.substring(minspace)).join("\n")
}
"            ";
readLibDir().forEach(
    n => {
        const content=`
            // file: "src/lib/${n}.svelte"
            <script lang="ts">
                import type { T_EuiButtonKind } from "./T_EuiBadgeKind";
                import type { T_NullableProp } from "./T_NullableProp";

                export let disabled: T_NullableProp = null;
                export let outline: T_NullableProp = null;
                export let flat: T_NullableProp = null;
                export let kind: T_EuiButtonKind = null;
            </script>
            <div class="${n}">
                <h4>${n}<h4>
                <slot></slot>
            </div>
            <style>
                .${n}{
                    border:1px solid #ccc;
                }
            </style>
        `.trimIndent();
        writeFileSync(`src/lib/${n}.svelte`,content)
    }
)

