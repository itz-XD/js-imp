// sort method
// ASCII TABLE
// char : ascii value


// 32	space


// NUL	00	null character
// SOH	01	start of header
// STX	02	start of text
// ETX	03	end of text
// EOT	04	end of transmission
// ENQ	05	enquiry
// ACK	06	acknowledge
// BEL	07	bell (ring)
// BS	08	backspace
// HT	09	horizontal tab
// LF	10	line feed
// VT	11	vertical tab
// FF	12	form feed
// CR	13	carriage return
// SO	14	shift out
// SI	15	shift in
// DLE	16	data link escape
// DC1	17	device control 1
// DC2	18	device control 2
// DC3	19	device control 3
// DC4	20	device control 4
// NAK	21	negative acknowledge
// SYN	22	synchronize
// ETB	23	end transmission block
// CAN	24	cancel
// EM	25	end of medium
// SUB	26	substitute
// ESC	27	escape
// FS	28	file separator
// GS	29	group separator
// RS	30	record separator
// US	31	unit separator


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


//  :  :  58    :   colon
//  ;  :  59    :   semicolon
//  <  :  60    :   less-than
//  =  :  61    :   equals-to
//  >  :  62    :   greater-than
//  ?  :  63    :   question mark
//  @  :  64    :   at sign


//  !	33	exclamation mark
//  "	34	quotation mark
//  #	35	number sign
//  $	36	dollar sign
//  %	37	percent sign
//  &	38	ampersand
//  '	39	apostrophe
//  (	40	left parenthesis
//  )	41	right parenthesis
//  *	42	asterisk
//  +	43	plus sign
//  ,	44	comma
//  -	45	hyphen
//  .	46	period
//  /	47	slash


// [	91	left square bracket
// \	92	backslash
// ]	93	right square bracket
// ^	94	caret
// _	95	underscore
// `	96	grave accent


// {	123	left curly brace
// |	124	vertical bar
// }	125	right curly brace
// ~	126	tilde


// DEL	127	delete (rubout)


// A	65	uppercase A
// B	66	uppercase B
// C	67	uppercase C
// D	68	uppercase D
// E	69	uppercase E
// F	70	uppercase F
// G	71	uppercase G
// H	72	uppercase H
// I	73	uppercase I
// J	74	uppercase J
// K	75	uppercase K
// L	76	uppercase L
// M	77	uppercase M
// N	78	uppercase N
// O	79	uppercase O
// P	80	uppercase P
// Q	81	uppercase Q
// R	82	uppercase R
// S	83	uppercase S
// T	84	uppercase T
// U	85	uppercase U
// V	86	uppercase V
// W	87	uppercase W
// X	88	uppercase X
// Y	89	uppercase Y
// Z	90	uppercase Z


// a	97	lowercase a
// b	98	lowercase b
// c	99	lowercase c
// d	100	lowercase d
// e	101	lowercase e
// f	102	lowercase f
// g	103	lowercase g
// h	104	lowercase h
// i	105	lowercase i
// j	106	lowercase j
// k	107	lowercase k
// l	108	lowercase l
// m	109	lowercase m
// n	110	lowercase n
// o	111	lowercase o
// p	112	lowercase p
// q	113	lowercase q
// r	114	lowercase r
// s	115	lowercase s
// t	116	lowercase t
// u	117	lowercase u
// v	118	lowercase v
// w	119	lowercase w
// x	120	lowercase x
// y	121	lowercase y
// z	122	lowercase z



// 1200, 410
// a-b ---> 790
// a-b ---> positive (greater than 0) ---> b, a
// agar a - b positive hua to 'b' pahle number pe aajayega aur 'a' durse number pe chala jayega
// 410 , 1200

// a-b ---> negative ---> a, b
// 5, 9 ---> -4
// agar a-b negative hua to pahle hame 'a' ko rakhna hai fir 'b' ko rakhna hai



// sort

const numbers = [5, 9, 1200, 400, 3000];

const userNames = ['harshit', 'abcd', 'aabcd', 'XD', 'ABCD', 'ITZ', 'SHEHZADA', 'mohit', 'nitish'];

// For ascending order return: a - b
// For descending order return: b - a

// short form
numbers.sort((a, b) => a - b);

/*
// long form
numbers.sort((a, b) => {
    return a - b;
});
*/

// console.log(numbers);

// userNames.sort();
// console.log(userNames);


// some real life example

// price lowToHigh HighToLow
const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 2, productName: "p2", price: 3000 },
    { productId: 3, productName: "p3", price: 200 },
    { productId: 4, productName: "p4", price: 8000 },
    { productId: 5, productName: "p5", price: 500 },
];

// lowToHigh

const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});

const HighToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});

console.log(lowToHigh);