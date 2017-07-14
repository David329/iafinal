
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