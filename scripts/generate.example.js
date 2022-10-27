import { writeFileSync, readdirSync} from 'fs';

const componentName = process.argv[2];

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
switch(process.argv[2]){
    case "--instances":generateInstances()
    break;
    case "--imports":generateImports()
    break;
    case "--stubs":generateStubs()
    break;
    default:
        console.log(`parameters ${process.argv}
        use --stubs to generate the examples stubs in the examples folder
        use --imports to generate the examples imports to console
        use --instances to generate example instances to the output`.trimIndent())
        break;
}
function generateStubs(){
    readLibDir().forEach(
        n => {
            const content=`
                <!-- file: "src/examples/${n}Example.svelte" -->
                <script lang="ts">
                    import Example from "../Example.svelte";
                    import ${n} from "../lib/${n}.svelte";
                </script>
                <Example title="${n}" >
                    <${n}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
                        iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
                        modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
                        t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                        upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum."
                    </${n}>
                </Example>
            `.trimIndent();
            writeFileSync(`src/examples/${n}Example.svelte`,content)
        }
    )
}
function generateInstances(){
    readLibDir().forEach(
        n => {
            const content=`<${n}Example/>`;
            console.log(content)
            // writeFileSync(`src/examples/${n}Example.svelte`,content)
        }
    )
}

function generateImports(){
    readLibDir().forEach(
        n => {
            const content=`import ${n}Example from './examples/${n}Example.svelte'`;
            console.log(content)
            // writeFileSync(`src/examples/${n}Example.svelte`,content)
        }
    )
}