import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
    /*
        //FUNCION DIVISIBLE
        int n;
        int divisor;
        System.out.println("DIGITA EN VALOR DE n");
        n = scanner.nextInt();
        System.out.println("DIGITA EN VALOR DEl divisor");
        divisor = scanner.nextInt();
        //llamar una funcion:
        esDivisible(n,divisor);
*/
        //FUNCION CALCULADORA
        int a;
        System.out.println("DIGITA EN VALOR DE a");
        a = scanner.nextInt();
        int b;
        System.out.println("DIGITA EN VALOR DE b");
        b = scanner.nextInt();

        System.out.println("el resultado es : " + division(a,b));



    }

   /* public static boolean esDivisible(int n, int divisor) {
        if (n % divisor == 0) {
            int resultado = n / divisor;
            System.out.println("Este numero es divisible y el resultado es: " + resultado);
            return true;

        } else {
            System.out.println("ESTE NUMERO NO ES DIVISIBLE");
            return  false;
        }
    }*/


   /* Vamos a crear nuestras primeras funciones
    Tenemos la clase Calculadora que por ahora solo va trabajar con nuestro tipo primitivo int
    Tenemos que crearle cuatro funciones a nuestra calculadora sumar, restar, dividir y multiplicar
    La función sumar ya te la declaramos solo te falta completarla */

    public static  int sumar(int a, int b) {
        int resultado = a+b;
        return resultado;
    }
    public static  int restar(int a, int b) {
        //completa esta funcion
        int resultado = a-b;
        return resultado;
    }
    public int dividir(int a, int b){
        if(b == 0){

            System.out.println("CON ESTE NUMERO NO ES POSIBLE LA OPERACION");
            return 0;
        }
        else {
            return a/b;
        }
    }

    public static  int division(int a , int b){
     if (b == 0){
         System.out.println("CON ESTE NUMERO NO ES POSIBLE LA OPERACION");
         return 0;
     }
        else {
            return a/b;
     }
    }



}

