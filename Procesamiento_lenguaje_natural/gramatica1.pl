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