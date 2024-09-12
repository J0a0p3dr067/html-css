//5.	Escreva uma função chamada reverterString que reverte uma stiing de caracteres.
//a.	Defina a função reverterString que recebe uma string e reverte seus caracteres.
//b.	A função deve modificar a string original para que os caracteres apareçam na ordem Inversa.




#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void reverterString(char *str) {
  int i, j;
  int tamanho = strlen(str);
  for (i = 0, j = tamanho - 1; i < j; i++, j--) {
    char temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
}

int main() {
 system("cls");
  char str[] = "Ola Mundo";

  reverterString(str);

  printf("String invertida: %s\n", str);

  return 0;
}