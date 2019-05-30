# jplex
jplex japanese word lexer
```
jplex(text,opt) //return original array
```
css
```css
/*jplex2*/
span.keyword{ border-bottom:1px dotted }
span.kata{color:#f26}
span.kanji{color:#2cc}
span.kanji2{color:#cc2}
span.hira{}
span.sijigo{color:#f26}
span.setuzokusi{color:#f26}
span.tu{color:#f26}
```
opt
```js
let m=[
 {cls:'kata',re:'[\u30a0-\u30ff]{1,20}'}
 ,{cls:'keyword',re:'明日ノ明日|牛乳'}
]
```

# usage
```js
let data=`
片仮名に対して、検索する。コーヒー牛乳。末尾代入はラストテイルだが。
複数のカタカナにマッチするように。漢字を含む途中語、明日ノ明日は、のを検索する。
`
let m=[
 {cls:'kata',re:'[\u30a0-\u30ff]{1,20}'}
 ,{cls:'keyword',re:'明日ノ明日|牛乳'}
]

jplexDebug=true;
let a=jplex(data,m)
document.body.innerHTML=a;
```
