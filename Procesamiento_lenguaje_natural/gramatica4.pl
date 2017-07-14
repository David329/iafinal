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
