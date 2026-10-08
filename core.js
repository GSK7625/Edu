(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.SPMCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const VERSION='spm-slides-exam-300-v3';
 function shuffle(input){const a=input.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function makeSession(bank,config){
  let chosen=bank.filter(q=>config.parts.includes(q.part)&&(!config.ids||config.ids.includes(q.id)));
  if(config.shuffleQuestions)chosen=shuffle(chosen);
  const positions=shuffle(chosen.map((_,i)=>i%4));
  const items=chosen.map((q,i)=>{
   const item={...q,options:q.options.slice(),slides:q.slides.slice()};
   if(config.shuffleOptions){const correct=q.options[q.correct];const other=shuffle(q.options.filter((_,j)=>j!==q.correct));item.correct=positions[i];other.splice(item.correct,0,correct);item.options=other;}
   return item;
  });
  return {version:VERSION,items,answers:{},checked:[],index:0,mode:config.mode==='exam'?'exam':'practice',finished:false,review:false};
 }
 function score(s){let correct=0,wrong=0,unanswered=0;for(const q of s.items){const a=s.answers[q.id];if(a===undefined)unanswered++;else if(a===q.correct)correct++;else wrong++;}const total=s.items.length;return{correct,wrong,unanswered,total,percent:total?Math.round(correct/total*100):0};}
 function wrongIds(s){return s.items.filter(q=>s.answers[q.id]!==undefined&&s.answers[q.id]!==q.correct).map(q=>q.id);}
 function restore(raw,bank){
  try{
   const s=JSON.parse(raw);if(!s||s.version!==VERSION||!Array.isArray(s.items)||!s.items.length||!s.answers||typeof s.answers!=='object'||Array.isArray(s.answers)||!Array.isArray(s.checked)||!['exam','practice'].includes(s.mode)||typeof s.finished!=='boolean'||typeof s.review!=='boolean'||!Number.isInteger(s.index)||s.index<0||s.index>=s.items.length)return null;
   const map=new Map(bank.map(q=>[q.id,q]));const ids=new Set();
   for(const q of s.items){const original=map.get(q.id);if(!original||ids.has(q.id)||q.part!==original.part||q.question!==original.question||q.explanation!==original.explanation||JSON.stringify(q.slides)!==JSON.stringify(original.slides)||!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||!q.options.every(x=>original.options.includes(x))||!Number.isInteger(q.correct)||q.options[q.correct]!==original.options[original.correct])return null;ids.add(q.id);}
   if(Object.entries(s.answers).some(([id,a])=>!ids.has(id)||!Number.isInteger(a)||a<0||a>3)||s.checked.some(id=>!ids.has(id)||s.answers[id]===undefined))return null;
   return s;
  }catch{return null;}
 }
 return {VERSION,shuffle,makeSession,score,wrongIds,restore};
});
