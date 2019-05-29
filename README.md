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

```js
let opt={
 keyword:{num:100,cls:'keyword',data:''}
 ,tu:{num:200,cls:'tu',data:'っ'}
 ,setuzokusi:{num:300,cls:'setuzokusi',data:`これ,ここ,こっち,こちら,こいつ,こなた,この,こう,こんな
それ,そこ,そっち,そちら,そいつ,そなた,その,そう,そんな
あれ,あそこ,あっち,あちら,あいつ,あなた,あの,ああ,あんな
どれ,どこ,どっち,どちら,どいつ,どなた,どの,どう,どんな`}
 ,sijigo:{num:500,cls:'sijigo',data:`だから,そこで,従って,故に,それ故,すると,それなら,それでは,したがって,ゆえに,それゆえ
しかし,けれども,処が,にも関わらず,それでも,ところが,にもかかわらず
また,および,かつ,ならびに,同じく,又,おなじく
そして,それに,それから,しかも,その上,そればかりか,そればかりでなく
一方,他方,逆に,反対に,反面,いっぽう,たほう,ぎゃくに,はんたいに,はんめん
または,それとも,あるいは,もしくは,又は
なぜなら,というのは,何故なら
なお,但し,ただ,尤も,ちなみに,そもそも,その割,ただし,もっとも,そのわり
つまり,すなわち,要するに,例えば,いわば,ようするに,たとえば
特に,とりわけ,中でも,とくに,なかでも
さて,処で,ところで`}
}

```
