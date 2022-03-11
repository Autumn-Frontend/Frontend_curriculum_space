// 【JS_6-2】 トランプの配列を用意し、ランダムでカードを２枚引くプログラムを用意しました。その２枚の手札を使って以下の通り条件分岐を行って勝負をしてください。
// 条件
// 自分より相手の数字が大きい場合 => 「残念！相手の方が大きいです」と出力
// 自分より相手の数が大きいが、差分が１の場合 => 「惜しい！相手の方が大きいです」と出力
// 自分より相手の数字が小さい場合 => 「やった！勝ちました！」と出力
// 自分より相手の数字が大きいが、差分が１の場合 => 「危ない！なんとか勝ちました」と出力
// 自分が Joker の場合 => 「おめでとうございます！圧勝です」と出力
// 相手が Joker の場合 => 「負けました。仕方がない」と出力
// 引き分けの場合 => 「引き分けです」と出力


const cardList = [
	'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Joker'
];
let num1 = Math.floor(Math.random() * 14);
let num2 = Math.floor(Math.random() * 14);
let yourCard = cardList[num1];
let enemyCard = cardList[num2];