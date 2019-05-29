# jplex
jplex japanese word lexer
```
jplex(text) //return original array
jplex2(text,keywords) //return html. keywords option. 'word,word2,word3....'=><span class="keyword">word</span>
```
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
```js
let options={
keyword:{num:1,cls:'keyword',data:'...,...'}
,tu:{num:2,cls:'tu',data:'...,...'}
,setuzokusi:{num:3,cls:'setuzokusi',data:'...,...'}
,sijigo:{num:4,cls:'sijigo',data:'...,...'}
}
//
jplex2(text,options)
```
