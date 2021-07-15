import { curry } from './curry';

export const S = curry((f, g, h, x) => f(g(x))(h(x)));
export const K = curry(a => () => a);

export const B = curry((f, x, g, y) => f(x)(g(y)));


/*

Function Abstraction	Symbol	Bird	Combinator	SK Combinator
labc.a(bc)	B	Bluebird	S(KS)K	((S(KS))K)
labcd.a(bcd)	B1	Blackbird	BBB	((S(K((S(KS))K)))((S(KS))K))
labcde.a(bcde)	B2	Bunting	B(BBB)B	((S(K((S(K((S(KS))K)))((S(KS))K))))((S(KS))K))
labcd.a(b(cd))	B3	Becard	B(BB)B	((S(K((S(K((S(KS))K)))((S(KS))K))))((S(KS))K))
labc.acb	C	Cardinal	S(BBS)(KK)	((S((S(K((S(KS))K)))S))(KK))
labcd.ab(cd)	D	Dove	BB	(S(K((S(KS))K)))
labcde.abc(de)	D1	Dickcissel	B(BB)	(S(K(S(K((S(KS))K)))))
labcde.a(bc)(de)	D2	Dovekies	BB(BB)	((S(K((S(KS))K)))(S(K((S(KS))K))))
labcde.ab(cde)	E	Eagle	B(BBB)	(S(K((S(K((S(KS))K)))((S(KS))K))))
labcdefg.a(bcd)(efg)	Ê	Bald Eagle	B(BBB)(B(BBB))	((S(K((S(K((S(KS))K)))((S(KS))K))))(S(K((S(K((S(KS))K)))((S(KS))K)))))
labc.cba	F	Finch	ETTET	((S(K((S((SK)K))(K((S(K(S((SK)K))))K)))))((S(K((S(K((S(KS))K)))((S(KS))K))))((S(K(S((SK)K))))K)))
labcd.ad(bc)	G	Goldfinch	BBC	((S(K((S(KS))K)))((S((S(K((S(KS))K)))S))(KK)))
labc.abcb	H	Hummingbird	BW(BC)	((S(K((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)))(S(K((S((S(K((S(KS))K)))S))(KK)))))
la.a	I	Identity Bird (aka Idiot)	SKK	((SK)K)
labcd.ab(adc)	J	Jay	B(BC)(W(BC(B(BBB))))	((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))(K((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S(K((S(KS))K)))((S(KS))K))))))))
lab.a	K	Kestrel (True)	K	K
lab.a(bb)	L	Lark	CBM	((S((S(KS))K))(K((S((SK)K))((SK)K))))
la.aa	M	Mockingbird	SII	((S((SK)K))((SK)K))
lab.ab(ab)	M2	Double Mockingbird	BM	(S(K((S((SK)K))((SK)K))))
lab.b(ab)	O	Owl	SI	(S((SK)K))
labc.b(ac)	Q	Queer Bird	CB	((S(K(S((S(KS))K))))K)
labc.a(cb)	Q1	Quixotic Bird	BCB	((S(K((S((S(K((S(KS))K)))S))(KK))))((S(KS))K))
labc.b(ca)	Q2	Quizzical Bird	C(BCB)	((S(K(S((S(K((S((S(K((S(KS))K)))S))(KK))))((S(KS))K)))))K)
labc.c(ab)	Q3	Quirky Bird	BT	(S(K((S(K(S((SK)K))))K)))
labc.c(ba)	Q4	Quacky Bird	F*B	((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S((S(K((S((S(K((S(KS))K)))S))(KK))))((S(KS))K)))))K))
labc.bca	R	Robin	BBT	((S(K((S(KS))K)))((S(K(S((SK)K))))K))
labc.ac(bc)	S	Starling	S	S
lab.ba	T	Thrush	CI	((S(K(S((SK)K))))K)
lab.b(aab)	U	Turing	LO	((S(K(S((SK)K))))((S((SK)K))((SK)K)))
labc.cab	V	Vireo (aka Pairing)	BCT	((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S((SK)K))))K))
lab.abb	W	Warbler	C(BMR)	((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)
lab.baa	W1	Converse Warbler	CW	((S(K(S((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K))))K)
la.a(la)	Y	Why Bird (aka Sage Bird)	SLL	(((SS)K)((S(K((SS)(S((SS)K)))))K)
lab.ab	I*	Identity Bird Once Removed	S(SK)	(S(SK))
labc.abcc	W*	Warbler Once Removed	BW	(S(K((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)))
labcd.abdc	C*	Cardinal Once Removed	BC	(S(K((S((S(K((S(KS))K)))S))(KK))))
labcd.acdb	R*	Robin Once Removed	C*C*	((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))
labcd.adcb	F*	Finch Once Removed	BC*R*	((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK))))))
labcd.acbd	V*	Vireo Once Removed	C*F*	((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))))
labc.abc	I**	Identity Bird Twice Removed
labcd.abcdd	W**	Warbler Twice Removed	B(BW)	(S(K(S(K((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)))))
labcde.abced	C**	Cardinal Twice Removed	BC*	(S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))
labcde.abdec	R**	Robin Twice Removed	BR*	(S(K((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))))
labcde.abedc	F**	Finch Twice Removed	BF*	(S(K((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK))))))))
labcde.abecd	V**	Vireo Twice Removed	BV*	(S(K((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))))))
lab.b	KI	Kite (False)	KI	(K((SK)K))
l	W	Omega	MM	(((S((SK)K))((SK)K))((S((SK)K))((SK)K)))
lab.bb	KM	Konstant Mocker	KM	(K((S((SK)K))((SK)K)))
lab.aa	C(KM)	Crossed Konstant Mocker	C(KM)	((S(K(S(K((S((SK)K))((SK)K))))))K)
l	Q	Theta	YO	((((SS)K)((S(K((SS)(S((SS)K)))))K)(S((SK)K)))
 */
