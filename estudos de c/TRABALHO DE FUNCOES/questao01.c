//1 . Escreva uma função chamada fatorial que calcule o fatorial de um número inteiro não negativo.
//a.	Defina a função fatorial que recebe um Inteiro n e retorne o fatorlal de n. 
//b.	O fatorial de um número n (denotado por n!) é o produto de todos os números inteiros positivos menores ou iguais a n.


#include <stdio.h>
#include <stdlib.h>

int fatorial(int n) {

  
  if (n == 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

int main() {
  
  int n;

  printf("Digite um numero inteiro nao negativo: ");
  scanf("%d", &n);

  printf("O fatorial de %d eh %d\n", n, fatorial(n));

  return 0;
}