//R
//1.Se lanzan dos dados, probabilidad d q la suma d los valores q aparecen sea multiplo de 3

#install.packages("prob")
#install.packages("combinat") library(combinat)
library(prob)
S <- expand.grid(D1 =c(1,2,3,4,5,6), D2=c(1,2,3,4,5,6))#dos columnas con cabeza D1 y D2 Todos contra todos
S <- probspace(S) #se agrega una nueva columna
A <- subset(S,D1==D2) # se crea una variable A; Si D1==D2
B <- subset(S,(D1+D2)>8) # se Crea una variable B; Si D1+D2 >8
prob(A) #La probabilidad de A Dado el total(S)
Prob(A,given =B) #Probabilidad dado B (primero se da B luego A)
Prob(B,given = A)#Probabilidad dado A (primero se da A luego B)
Prob(union(A,B)) #Probabilidad union de A y B
Prob(intersect(A,B)) #intersect
Prob(setdiff(A,B)) #diferencia entre A y B

##sobre el ejemplo
S <- expand.grid(D1 =c(1,2,3,4,5,6), D2=c(1,2,3,4,5,6))
S <- probspace(S)
lusho<-subset(S,(D1+D2)%% 3==0)
Prob(lusho)

/*
D la ferreteria se compran 135 destornillador, se aluden a su longitud(largo y cortos) y su forma (plano o estrella)
    A1 A2
B1  40 60
B2  15 20;; dtminar la prob de los destornilladores cortos con punta plana
*/
library(combinat) #utilizar combinat
library(prob) #utilizar prob

E <- expand.grid(A = c('Largo','COrto'),B=c('Plana','Estrella')) #se crea un grid todos contra todos de 4
Cant <- c(40,60,15,20) #Se crea un array de 40 60 15 20; Cant[4] = 20
E <- data.frame(E,Cant) #nueva columna el array 40 60 15 20
E <- probspace(E) #se agrego la probabilidad 0.25 de los 4 grid
for(i in  1:4){E$probs[i] = E$Cant[i]/sum(E$Cant)   }#prob del total?
Largo <- subset(E,A =='Largo') #sakar un subset del E q sea columna A largo
Corto <- subset(E,B =='COrto') #sakar un subset del E q sea columna A Corto
Estrella <- subset(E,B =='Estrella') #estrella
Plana <- subset(E,B =='Plana') #plana

cat('Probabilidad de que se Largo: ',Prob(Largo),'\n')##como un println
cat('Probabilidad de que se Corto: ',Prob(Corto),'\n')
cat('Probabilidad de que se Plana: ',Prob(Plana),'\n')
cat('Probabilidad de que se Estrella: ',Prob(Estrella),'\n')

cat('Probabilidad de que se Largo y Plano : ',Prob(intersect(Largo,Plana)),'\n')

cat('Probabilidad de que se Largo y Estrella : ',Prob(intersect(Largo,Estrella)),'\n')

cat('Probabilidad de que se Largo o Plano : ',Prob(union(Largo,Plana)),'\n')

cat('Probabilidad de que se Largo o estrella : ',Prob(union(Largo,Estrella)),'\n')

#inferencias

cat('Probabilidad de que se Largo cunado se dio plana : ',Prob(Largo,given = Largo),'\n')

/*
Una empresa peruana que fabrica productos tiene tres sucursales, Lima, Are, Truj. De un determinado farmaco se produce
el 45% en la delegacion de Lima, el 30% en Are y el 25% en truj. Del total de los farmacos, son defectuosos el 5% de los producidos en Lima,
el 3% en arequipa y el 4% en trujillo. Calcular:
a)probabilidad d q un farmcao sea defectuoso
b)si un farmaco es defectuoso, cual es la probabilidad d q haya sido producido por la delegaciond e trujillo?
c)imlemente en prolog la solucion.
*/

#PROGRAMA IMNFERERNCIAS FARMACOS

library(prob)
x <- c('L','L','A','A','T','T') #array de char
y <- c('D','N','D','N','D','N')

E <- data.frame(x,y) #se crea un grid pero no se multiplican

E <- probspace(E) #se agrega la col con probspace

E$probs[1] = 0.05*0.45
E$probs[2] = 0.95*0.45
E$probs[3] = 0.03*0.30
E$probs[4] = 0.97*0.30
E$probs[5] = 0.04*0.25
E$probs[6] = 0.96*0.25
L <- subset(E,x=='L')
A <- subset(E,x=='A')
T <- subset(E,x=='T')

D <- subset(E,y=='D')
N <- subset(E,y=='N')

print('Espacion muestral \n') #cambiar a cat seria mejor
print(E)
print('Productos lima \n')
print(L)

print('Productos arequipa \n')
print(A)

print('Productos Trujillo \n')
print(T)

#RESULT

cat('Probabilidad de Lima',Prob(L),'\n')
cat('Probabilidad de Arequipa',Prob(A),'\n')
cat('Probabilidad de Trujillo',Prob(T),'\n')

cat('Probabilidad de Defectuosos',Prob(D),'\n')
cat('Probabilidad defectuosos dado lima',Prob(D,given = L),'\n')
cat('Probabilidad de defecutoso dado Arequipa',Prob(D, given=A),'\n')
cat('Probabilidad de defecutoso dado Trujillo',Prob(D, given=T),'\n')


cat('Probabilidad de No Defectuosos',Prob(N),'\n')
cat('Probabilidad No defectuosos dado lima',Prob(N,given = L),'\n')
cat('Probabilidad de No defecutoso dado Arequipa',Prob(N, given=A),'\n')
cat('Probabilidad de No  defecutoso dado Trujillo',Prob(D, given=T),'\n')



cat('Probabilidad de Lima dado defectuoso',Prob(L, given=D),'\n')
cat('Probabilidad de Arequipa dado defectuoso',Prob(A, given=D),'\n')
cat('Probabilidad de Trujillo dado defectuoso',Prob(T, given=D),'\n')


cat('Probabilidad de Lima dado no defectuoso',Prob(L, given=N),'\n')
cat('Probabilidad de Arequipa dado no  defectuoso',Prob(A, given=N),'\n')
cat('Probabilidad de Trujillo dado no defectuoso',Prob(T, given=N),'\n')

/*
PROLOG
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
