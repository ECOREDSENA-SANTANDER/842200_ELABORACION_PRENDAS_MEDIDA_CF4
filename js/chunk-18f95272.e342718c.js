(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18f95272"],{"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},d5e1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tarjeta-audio"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col"},[e("div",{staticClass:"tarjeta-audio__texto h5 fst-italic mb-0",domProps:{innerHTML:t._s(t.texto)}}),t.noBarra?t._e():e("div",{staticClass:"tarjeta-audio__input mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderVal,expression:"sliderVal"}],ref:"sliderElement",style:{"background-size":this.sliderVal+"% 100%"},attrs:{type:"range",max:"100"},domProps:{value:t.sliderVal},on:{input:t.onSliderMove,__r:function(e){t.sliderVal=e.target.value}}})])]),e("div",{staticClass:"col-auto ps-0"},[e("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?e("button",{staticClass:"audio__btn",on:{click:t.play}},[e("img",{attrs:{src:a("5ccd")}})]):e("button",{staticClass:"audio__btn",on:{click:t.pause}},[e("img",{attrs:{src:a("f034")}})]):e("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[e("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)])])])},s=[],o=a("8fb3"),n={name:"TarjetaAudio",mixins:[o["a"]],props:{texto:{type:String,required:!0},noBarra:{type:Boolean,default:!1}},data:()=>({sliderVal:0}),mounted(){this.noBarra||(this.audioElement.ontimeupdate=()=>{this.sliderVal=this.audioElement.currentTime/this.audioDuration*100})},methods:{onSliderMove(){this.audioElement.currentTime=this.sliderVal/100*this.audioDuration}}},u=n,d=a("2877"),r=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=r.exports},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-18f95272.e342718c.js.map