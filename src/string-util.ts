
import format from 'xml-formatter';
import type { T_Nullable } from './lib/T_NullableProp';

export function trimIndent(string:string):string{
    let start = /(\n\r|\r\n|\n|\r)+/gi
    let re    = /(\n\r|\r\n|\n|\r)(\s|\t)+/gi
    let min = string.trimEnd().match(re).reduce( (min,v) => {
        if(v.length==0)return min
        else return Math.min(min,(v.replace(start,"").length))
    },Number.MAX_SAFE_INTEGER);
    let replacer = new RegExp(`^\\s{${min}}`,"gi")
    // console.log({
    //     start,
    //     re,
    //     min,
    //     replacer,
    // })
    return string.trim().split(start).map( row => row.replace(replacer,"")).join("")
}
export function querySelectorAll(elementRef: Element):Array<Node>{
    return Array.prototype.slice.call((elementRef||document).querySelectorAll(this));
}

export function formatXml(xmlString: string): string{
    const opts = {collapseContent:true,indentation:" ",whiteSpaceAtEndOfSelfclosingTag:true};
    const rn = Math.floor(Math.random()*65535).toString(16)
    const regex = new RegExp(`(^<div id="${rn}">|</div>$)`,"gi")
    const x = trimIndent(xmlString)
    const y = `<?xml version="1.0" encoding="UTF-8"?><div id="${rn}">${trimIndent(xmlString)}</div>`
    try{
        return format(x,opts)
    }catch(err1){
        try{
            console.log({err1,x})
            console.error(err1)
            return format(y,opts).replace(regex,"")
        }catch(err2){
            const z = trimIndent(xmlString)
            console.log({err2,y})
            console.error(err2)
            return z
        }
    }
}
export function matchAll(regex: RegExp,string:string):Array<RegExpMatchArray>{
    let match:RegExpExecArray;
    const matches=[]
    while ((match = regex.exec(string)) != null) {
        matches.push(match)
    };
    return matches
}
export class XmlElement{
    static from(start:RegExpMatchArray,end:RegExpMatchArray): XmlElement {
        const el = new XmlElement();
        el.text=start.input
        el.start=start;
        el.end=end;
        return el;
    }
    private text:string;
    private start:RegExpMatchArray;
    private end:RegExpMatchArray;
    public constructor(){}
    public outerHTML():string{
        const html = this.text.substring(this.start.index,this.end.index+this.end[1].length)
        return html;
    }
    public innerHTML():string{
        const html = this.text.substring(this.start.index+this.start[1].length,this.end.index)
        return html;
    }
    public children():Array<XmlElement>{
        const children:Array<XmlElement>= [];
        return children;
    }
}
export function formatXmlString(t: string):string{
    const SELF_CLOSING_TAG:RegExp=/(\<(\w|\d|-)+?.*?\/\>)/gim
    const OPEN_TAG:RegExp=/(\<(\w|\d|-)+?.*?\>)/gims
    const CLOSE_TAG:RegExp=/(\<\/(\w|\d|-)+?\>)/gi
    console.log({
        SELF_CLOSING_TAG,
        OPEN_TAG,
        CLOSE_TAG,
    })
    let indentLevel=0;
    " ".repeat(indentLevel)
    const selfClosingTags:RegExpMatchArray[] = matchAll(SELF_CLOSING_TAG,t)
    const openTags:RegExpMatchArray[] = matchAll(OPEN_TAG,t).filter( si => {
        const f = selfClosingTags.reduce( (found,sct) => found || (sct[1]===si[1] && sct.index===si.index),false)
        // console.log(f,si);
        return !f
    }).sort( function(a,b){
        return a.index-b.index
    })
    const closeTags:RegExpMatchArray[] = matchAll(CLOSE_TAG,t).sort( function(a,b){
        return b.index-a.index
    })
    const domList=openTags.map( (start,i) => {
        return XmlElement.from(start,closeTags[i])
    }).concat(selfClosingTags.map( sct => XmlElement.from(sct,sct[2].match(/$/gi))))
    console.log({domList})
    Array.prototype.slice.call(t).forEach(char => {
        
    });
    return t;
}

formatXmlString(`
<EuiAlert>this is a great info</EuiAlert>
<EuiAlert kind="success">this is a great success</EuiAlert>
<EuiAlert kind="warning">this is a great warning</EuiAlert>
<EuiAlert kind="danger">this is a great danger</EuiAlert>
<EuiAlert kind="secondary">this is a great secondary</EuiAlert>
<EuiAlert isCloseable={true}>this is a great closable info</EuiAlert>
<EuiAlert isCloseable={true} kind="success">this is a great closable success</EuiAlert>
<EuiAlert isCloseable={true} kind="warning">this is a great closable warning</EuiAlert>
<EuiAlert isCloseable={true} kind="danger">this is a great closable danger</EuiAlert>
<EuiAlert isCloseable={true} kind="secondary">this is a great closable secondary</EuiAlert>
`)


formatXmlString(`
<button
{disabled}
on:click
aria-disabled={disabled ? "true" : "false"}
data-e2e="eui-button"
class={classList}
>
{#if isLoading}
<EuiIcon {isLoading} class="eui-button__loading-icon"></EuiIcon>
{/if}
<span class="eui-button__container">
    <slot />
</span>
</button>
`)

export function later<T>(fn:()=>T,intv:number):Promise<T>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let r = fn();
            if(r===null) resolve(null)
            else resolve(r);
        },intv)
    })
}
class Option<T>{
    empty=false
    constructor(public value:T){
        if(this.value==null) {
            this.empty=true;
        }
    }
}
class Resource<T>{
    constructor(public id:string,public value:T){}
}
const cache:{[key:string]:Resource<any>}={}
window["resourceCache"] = window["resourceCache"]||cache;

export async function getResource<T>(getter:()=>Resource<T>,intv=100,iterLimit=100):Promise<T>{
    let result:Resource<T>=await getter();
    if(result.id in window["resourceCache"]){
        return window["resourceCache"][result.id]
    }
    while(result === null && iterLimit>0){
        result = await later<Resource<T>>(getter,intv);
        iterLimit--;
    }
    if(result.value!==null){
        window["resourceCache"][result.id]=result;
    }
    return result.value;
}
window["selectorCache"]={}
export async function getElementBySelector(selector: string,intv=100,iterLimit=100):Promise<HTMLElement> {
    if(selector in window["selectorCache"]){
        console.log({op:"get",cache:"hit",selector,element:window["selectorCache"][selector]})
        return window["selectorCache"][selector]
    }
    let fn = () => document.querySelector<HTMLElement>(selector)
    let elm:HTMLElement = await later<HTMLElement>(fn,intv);
    while(elm === null && iterLimit>0){
        elm=await later(fn,intv)
        // console.log(`searching ${selector} for ${elm} on ${iterLimit} iteration`)
        iterLimit--;
    }
    if(elm!==null){
        window["resourceCache"][selector]=elm;
    }
    return elm
}
export function removeFromCache(selector:string){
    if(selector in window["selectorCache"]){
        console.log({op:"delete",cache:"hit",selector,element:window["selectorCache"][selector]})
        const v = window["selectorCache"][selector]
        delete window["selectorCache"][selector]
        return v;
    }
    return null;
}
export function getClassList(classes:{[key:string]:T_Nullable<true>}):string{
    return Object.keys(classes).reduce( (classList:Array<string>,key:string) => {
        const val = classes[key];
        if(!(val??false)){
            classList=[...classList,key]
        }
        return classList
    },[]).join(" ")
}