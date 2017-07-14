/*
1.FRASE:
    frase --> sujeto,predicado.
    sujeto -->[juan];[pedro];[maria];[salgado].
    predicado --> verboTransitivo,objetoDirecto.
    predicado --> verboIntransitivo.
    verboTransitivo --> [ama];[lava];[peina];[adora].
    objetoDirecto --> [paula];[antonio];[sultan].
    verboIntransitivo --> [corre];[salta];[camina].
ΣT{juan, pedro, salgado, antonio, maría, pepa, ama, lava, peina, adora, paula,
sultán, corre, salta, camina }
ΣN{={<frase>, <sujeto>, <predicado>, <verbo transitivo>, <verbo intransitivo>,
<objeto directo>}
S<frase> es el axioma
P es el conjunto formado por las diecisiete reglas:
1) <frase>::= <sujeto><predicado>
2) <sujeto>::= juan / pedro / maría / salgado
3) <predicado>::= <verbo transitivo><objeto directo>
4) <predicado>::= <verbo intransitivo>
5) <verbo transitivo>::= ama / lava / peina / adora
6) <objeto directo>::= paula / antonio/ sultán
7) <verbo intransitivo>::= corre / salta / camina

2.FRASE:
    frase --> <sintagma nominal>, <sintagma verbal>
    <sintagma nominal> --> <determinante>, <nombre>.
    <sintagma verbal> --> <verbo transitivo>, <sintagma nominal>
    <sintagma verbal>--> <verbo intransitivo>
    <determinante> --> el
    <determinante> --> la
    <determinante> --> un
    <determinante> --> una
    <nombre> --> casa
    <nombre> --> juan
    <nombre> --> pedro
    <verbo intransitivo> --> compra
    <verbo intransitivo> --> lee
    <verbo intransitivo> --> mira
    <verbo transitivo> --> juega
    <verbo transitivo> --> nada
    <verbo transitivo> --> sonríe

3.FRASE:
    frase --> <articulo>,<sujeto>,<adjetivo>.
    <articulo> --> <sujeto>.
    <frase> --> <articulo>,<sujeto>.
    <articulo> --> el.
    <articulo> --> un.
    <sujeto> --> estudiante.
    <sujeto> --> lima.
    <adjetivo> --> universitario.
*/
//ejercicio1
frase --> sujeto,predicado.
sujeto -->[juan];[pedro];[maria];[salgado].
predicado --> verboTransitivo,objetoDirecto.
predicado --> verboIntransitivo.
verboTransitivo --> [ama];[lava];[peina];[adora].
objetoDirecto --> [paula];[antonio];[sultan].
verboIntransitivo --> [corre];[sala];[camina].

lusho(Ora):-
  phrase(frase,Ora),
writef('La frase: %w',[Ora]),writef(' es valida').

%%lusho([juan,ama,paula]).

//ejercicio3
Teniendo las siguientes frases
- El estudiante
- Un estudiante universitario
- Lima
a) Describa ΣT, ΣN, S,P
b) Implemente las reglas gramaticales
c) Implemente en Prolog
d) Analice y verifique las frases dadas

a).
ΣT{el, estudiante, un, universitario, lima}
ΣN{={<frase>, <articulo>, <sujeto>, <adjetivo>}
S<frase> es el axioma
P:
frase --> <articulo>,<sujeto>,<adjetivo>.
    <articulo> --> <sujeto>.
    <frase> --> <articulo>,<sujeto>.
    <articulo> --> el.
    <articulo> --> un.
    <sujeto> --> estudiante.
    <sujeto> --> lima.
    <adjetivo> --> universitario.
b)
frase --> articulo,sujeto,adjetivo.
frase --> sujeto.
frase --> articulo,sujeto.
articulo --> [el];[un].
sujeto --> [estudiante];[lima].
adjetivo --> [universitario].

//ejercicio4
sn --> det(G,N),nom(G,N).
sn --> nom(_,_).
det(m,s) --> [el];[un].
det(f,s) --> [la];[una].
det(m,p) --> [los];[unos].
det(f,p) --> [las];[unas].
nom(m,s) --> [gato].
nom(f,s) --> [piedra];[gata].
nom(m,p) --> [gatos].
nom(f,p) --> [piedras];[gatas].

%Programa que genera arbol sintactico
oracion(o(SN,SV)) --> sintagma_nominal(SN), sintagma_verbal(SV).
sintagma_nominal(sn(N)) --> nombre(N).
sintagma_nominal(sn(Art,N)) --> articulo(Art), nombre(N).
sintagma_verbal(sv(V,SN)) --> verbo(V), sintagma_nominal(SN).
articulo(art(el)) --> [el].
nombre(n(gato)) --> [gato].
nombre(n(perro)) --> [perro].
nombre(n(pescado)) --> [pescado].
nombre(n(carne)) --> [carne].
verbo(v(come)) --> [come].

%ingles
sentence(s(S,V,O)) --> nom_p(S,N), verb(V,N), nom_p(O,_).
nom_p(np(M,S),N) --> modifier(M),noun(S,N).
modifier(m(art)) --> [the].
noun(n(n_1),sg) --> [stone].
noun(n(n_2),sg) --> [paper].
noun(n(n_3),pl) --> [gifts].
verb(v(v_1),sg) --> [cuts].
verb(v(v_2),sg) --> [wraps].
verb(v(v_3),sg) --> [breaks].
verb(v(v_1),pl) --> [cut].
verb(v(v_1),pl) --> [wrap].
verb(v(v_1),pl) --> [break].

%español
oracion(s(S,V,O)) --> sint_n(S,N), verbo(V,N), sint_n(O,_).
sint_n(np(M,S),N) --> articulo(M,G,N), nombre(S,G,N).
articulo(m(art),f,sg) --> [la].
articulo(m(art),m,sg) --> [el].
articulo(m(art),f,pl) --> [las].
articulo(m(art),m,pl) --> [los].
nombre(n(n_1),f,sg) --> [piedra].
nombre(n(n_2),m,sg) --> [papel].
nombre(n(n_3),m,pl) --> [regalos].
verbo(v(v_1),sg) -->[corta].
verbo(v(v_2),sg) --> [envuelve].
verbo(v(v_3),sg) --> [rompe].
verbo(v(v_1),pl) --> [cortan].
verbo(v(v_2),pl) --> [envuelven].
verbo(v(v_3),pl) --> [rompen].
