public class Main {
    public static void main(String[] args) {

       /* Ejercicio 1
        Definir dos cadenas de texto. Comprobar si son iguales o distintas e indicar mediante un mensaje.*/

        String tex1 = "Pao la mejor 1";
        String tex2 = "Pao la mejor 1";

        if (tex1.equals(tex2))
            System.out.println("Estos dos  textos son iguales");
        else {
            System.out.println("Estos dos  textos son distintos");
        }

        /* Ejercicio 2

        Definir dos Integer y determinar cuál es mayor, cuál es menor o si son iguales.Informar el resultado obtenido..*/

        Integer valor1 = 110;
        Integer valor2 = 10;
        int comparar ;

        if (valor1.equals(valor2))
            System.out.println("Estos valores son iguales " + valor1 + valor2 );
        else {
            comparar = valor1.compareTo(valor2);
            if (comparar > 0)
                System.out.println("El valor1 es mayor que el valor2, el resultado es: " + valor1 );
            else System.out.println("El valor2 es mayor que el valor1, el resultado es: " +valor2);
        }

    }
}