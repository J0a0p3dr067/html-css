//2.	Escreva uma função chamada ehPrimo que verifica se um número inteiro é Plimo.
//a.	Defina a função ehPrimo que recebe um inteiro n e retorna I se n for um número primo e 0 caso contrário.
//b.	Um número é primo se for maior que I e não for divisível por nenhum número além de I e ele mesmo.









#include <stdio.h>



int ehPrimo(int n) {
  if (n <= 1) {
    return 0;
  }
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return 0;
    }
  }
  return 1;
}

int main() {
  int n;

  printf("Digite um numero inteiro: ");
  scanf("%d", &n);

  if (ehPrimo(n)) {
    printf("%d eh um numero primo.\n", n);
  } else {
    printf("%d nao eh um numero primo.\n", n);
  }

  return 0;
}