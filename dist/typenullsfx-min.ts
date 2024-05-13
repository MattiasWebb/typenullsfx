export type tnsfxAudioList={[key:string]:string};export class typenullsfx{public sfx_list:tnsfxAudioList;public audioEles:{[key:string]:HTMLAudioElement};constructor(sfx_list:{[key:string]:string}){this.sfx_list=sfx_list;this.audioEles={};for(let[key,val]of Object.entries(this.sfx_list)){let sfx=document.createElement("audio");sfx.src=val;sfx.setAttribute("preload","auto");sfx.setAttribute("controls","none");sfx.volume=0;sfx.load();this.audioEles[key]=sfx;sfx.addEventListener("ended",handleEnded);function handleEnded(){sfx.removeEventListener("ended",handleEnded);sfx.pause();sfx.remove()}}this.init()}init(){const targets=document.querySelectorAll("[nsfx]");targets.forEach((ele)=>{let attrVal=ele.getAttribute("nsfx")!.trim();attrVal.split(";").forEach((soundFx:string)=>{let[eve,src]=soundFx.trim().split("?",2),key:string,vol:string;[eve,key]=eve.trim().split("!",2);[src,vol]=src.trim().split("%",2);ele.addEventListener(eve,(e:any)=>{e.stopPropagation();if(eve.substring(0,3)==="key"&&key&&e.key!==key)return;this.play(src,vol??ele.getAttribute("nsfx-vol"),e)})})})}play(src:string|number,vol:string|number|any=null,e? :any){let sfx=<HTMLAudioElement>this.audioEles[src].cloneNode();sfx.currentTime=0;sfx.volume=parseFloat(vol??"1");sfx.volume=isNaN(sfx.volume)?1:sfx.volume;sfx.play();sfx.addEventListener("ended",handleEnded);function handleEnded(){sfx.removeEventListener("ended",handleEnded);sfx.pause();sfx.remove()}}}