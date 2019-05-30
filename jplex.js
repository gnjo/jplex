/*histroy

*/
;(function(root){

 function entry(_data,_opt){
  if(!_data)return console.log('data null')
  ;
  let debug=root.jplexDebug
  ,t=(debug)?performance.now():void 0  
  ,opt=_opt||[{cls:'kata',re:'[\u30a0-\u30ff]{1,20}'}]
  ,data=_data
  ,re=new RegExp(opt.map(d=>`(${d.re})`).join('|'),'g')  
  ,calc=function(){
   let ary=Array.from(arguments)
   ,word=ary.slice(0,1).pop()
   ,i=ary.slice(1).findIndex((d)=>d===word)
   ,cls=opt[i].cls
   ;
   return `<span class="${cls}">${word}</span>`
  }
  ,ret=data.replace(re,calc)
  ;
  if(debug) console.log(`calc time=${performance.now()-t}[ms]`)
  return ret;
  }
  root.jplexDebug=false
  root.jplex=entry;
 /*usage
let data=`
片仮名に対して、検索する。コーヒー牛乳。末尾代入はラストテイルだが。
複数のカタカナにマッチするように。漢字を含む途中語、明日ノ明日は、のを検索する。
`
let m=[
 {cls:'kata',re:'[\u30a0-\u30ff]{1,20}'}
 ,{cls:'keyword',re:'明日ノ明日'}
]
jplexDebug=true;
let a=jplex(data,m)
document.body.innerHTML=a;
//css
//span.kata{color:orange;}
//span.keyword{color:red;}
 */
})(this);
