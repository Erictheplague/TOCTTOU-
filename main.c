#include <stdio.h>

int main()
{
   char string[4]="cat";
   char key[4]="KEY";

   for(int x=0; x<3; x++)
   {
     string[x]=string[x]^key[x];

     printf("%c",string[x]);
   }

   printf("\n");

   return 1;
}