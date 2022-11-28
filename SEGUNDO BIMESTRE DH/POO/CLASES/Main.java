import java.util.Scanner;

public class Main {


    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("ingresa tu nombre:");

        String nombre = scanner.nextLine();


        System.out.println("Hola " + nombre);

        System.out.println("ingresa un numero:");
        Integer unNumero = scanner.nextInt();
        System.out.println("ingresa otro numero:");
        Integer otroNumero = scanner.nextInt();

        if(esDivisible(unNumero,otroNumero)){
            System.out.println(unNumero + " es divisible por " + otroNumero);
        }else{
            System.out.println(unNumero + " no divisible por " + otroNumero);
        }

        System.out.println("hasta cuanto queres contar:");
        Integer numeroAContar = scanner.nextInt();
        contarHasta(numeroAContar);



    }


    // function esDivisible(numero1,numero2){
    public static Boolean esDivisible(Integer numero1,Integer numero2){
        return numero1 % numero2 == 0;
    }

    public static void contarHasta(Integer numero){
        for (int i = 1; i <= numero; i++) {
            System.out.println(i);
        }
    }


}