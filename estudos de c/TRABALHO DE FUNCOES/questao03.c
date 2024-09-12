// 3.	Escreva uma função chamada somaLista que calcula a soma de uma lista de números inteiros.
// a.	Defina a função somaLista que recebe array de inteiros e o número de elementos no array, e retoma a soma dos elementos.///
// b.	A função deve iterar sobre o anay e somar todos os valores.//




#include <stdio.h>
#include <stdlib.h>

int somaLista(int lista[], int tamanho) {
  int soma = 0;
  for (int i = 0; i < tamanho; i++) {
    soma += lista[i];
  }
  return soma;
}

int main() {
    system("cls");
  int lista[] = {1, 2, 3, 4, 5};
  int tamanho = sizeof(lista) / sizeof(lista[0]);

  int soma = somaLista(lista, tamanho);

  printf("A soma dos elementos da lista eh: %d\n", soma);

  return 0;
}