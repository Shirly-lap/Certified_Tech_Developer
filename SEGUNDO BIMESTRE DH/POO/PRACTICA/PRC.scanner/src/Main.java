import java.util.Scanner;

        /* nextByte() para leer un dato de tipo byte.
        nextShort() para leer un dato de tipo short.
        nextInt() para leer un dato de tipo int.
        nextLong() para leer un dato de tipo long.
        nextFloat() para leer un dato de tipo float.
        nextDouble() para leer un dato de tipo double.
        nextBoolean() para leer un dato de tipo boolean.
        nextLine() para leer un string hasta encontrar un salto de línea.
        next() para leer un string hasta el primer delimitador, generalmente
        hasta un espacio en blanco o hasta un salto de línea.*/

public class Main {
    public static void main(String[] args) {

        // INGRESO VALORES NUMERICOS

        Scanner scanner;
        scanner = new Scanner(System.in); //TODA LA INFO QUE SE INGRESA POR TECLADO
/*
        int num1;
        int num2;
        float coeficiente;

        System.out.println("Ingresa el primer valor");
        num1= scanner.nextInt();

        System.out.println("Ingresa el segundo valor");
        num2= scanner.nextInt();

        System.out.println("Ingresa el coeficiente");
        coeficiente= scanner.nextFloat();



        //INGRESO TEXTO
        String nombre;
        char inicial;
        System.out.println("Ingrese su nombre");
        nombre = scanner.nextLine();
        inicial = nombre.charAt(5);
        System.out.println(inicial);
        */

        String nombre;
        int edad;

        System.out.println("Ingresa tu nombre");
        nombre = scanner.nextLine();

        System.out.println("Ingresa tu edad");
        edad = scanner.nextInt();

        System.out.println("TE LLAMAS: " + nombre + " Y TIENES " + edad + " años");
    }
}