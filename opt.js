let m=[
 {cls:'keyword',re:'明日ノ明日|コーヒー'}
 ,{cls:'sijigo',re:`これ,ここ,こっち,こちら,こいつ,こなた,この,こう,こんな
それ,そこ,そっち,そちら,そいつ,そなた,その,そう,そんな
あれ,あそこ,あっち,あちら,あいつ,あなた,あの,ああ,あんな
どれ,どこ,どっち,どちら,どいつ,どなた,どの,どう,どんな`.replace(/\n|,/g,'|')}  
,{cls:'setuzokusi',re:`だから,そこで,従って,故に,それ故,すると,それなら,それでは,したがって,ゆえに,それゆえ
しかし,けれども,処が,にも関わらず,それでも,ところが,にもかかわらず
また,および,かつ,ならびに,同じく,又,おなじく
そして,それに,それから,しかも,その上,そればかりか,そればかりでなく
一方,他方,逆に,反対に,反面,いっぽう,たほう,ぎゃくに,はんたいに,はんめん
または,それとも,あるいは,もしくは,又は
なぜなら,というのは,何故なら
なお,但し,ただ,尤も,ちなみに,そもそも,その割,ただし,もっとも,そのわり
つまり,すなわち,要するに,例えば,いわば,ようするに,たとえば
特に,とりわけ,中でも,とくに,なかでも
さて,処で,ところで`.replace(/\n|,/g,'|')}
,{cls:'tu',re:'っ'} 
,{cls:'kata',re:'[\u30a0-\u30ff]{1,20}'} 
]
