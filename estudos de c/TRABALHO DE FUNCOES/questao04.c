//4.	Escreva uma função chamada encontrarMaiorMenor que encontra o maior e o menor elemento em an•ay de números inteiros.
//a.	Defina a função encontrarMaiorMenor que recebe um an•ay de inteiros e o número de elementos no an•ay. A função deve modificar duas variáveis de referência para armazenar o maior e o menor valor encontrado.
//b.	Use ponteiros para passar essas variáveis para a função


#include <stdio.h>
#include <stdlib.h>

void encontrarMaiorMenor(int lista[], int tamanho, int *maior, int *menor) {
  *maior = lista[0];
  *menor = lista[0];

  for (int i = 1; i < tamanho; i++) {
    if (lista[i] > *maior) {
      *maior = lista[i];
    }
    if (lista[i] < *menor) {
      *menor = lista[i];
    }
  }
}

int main() {
    system("cls");
  int lista[] = {1, 2, 3, 4, 5};
  int tamanho = sizeof(lista) / sizeof(lista[0]);

  int maior, menor;

  encontrarMaiorMenor(lista, tamanho, &maior, &menor);

  printf("O maior elemento da lista eh: %d\n", maior);
  printf("O menor elemento da lista eh: %d\n", menor);

  return 0;
}