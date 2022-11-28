import java.sql.SQLOutput;

    import java.util.Date;

public class Main {
    public static void main(String[] args) {
        //MÉTODOS PARA STRING .length(), .tooUpperCase(), .equals(), toChar()

        String nombre = "Juan";
        int cantidad;
        char inicial;

        cantidad = nombre.length(); //sabemos la longitud de la cadena (es decir cuantos carateres tiene la palabra)
        nombre = nombre.toUpperCase(); // convertir todo en mayuscula

        if (nombre.equals("JUAN")) // se comprueba que el cambio es exactamente en mayuscula
        {
            System.out.println("Se pasó a mayúscula");
        }
        inicial = nombre.charAt(0); //para obtener el caracter que querramos (en este caaso el primero que es el 0)

        //METODOS PARA INTEGER .equals(), .compareTo()
        Integer valor1 = 100;
        Integer valor2 = 10;
        int comparar;

        if (valor1.equals(valor2))
            System.out.println("Son iguales");

        else{ comparar = valor1.compareTo(valor2);
            if (comparar > 0 )
                System.out.println("valor1 es mayor que valor valor2");
            else System.out.println("Valor2 es mayor que el valor1");
        }


        //FLOAT

        Float coeficiente = 2.5f;
        Float num = new Float(0.5);

        //DATE
        Date fecha = new Date(100,10,14); // se  pone año-mes-dia y toca tener   en cuenta que los años los suma  desde el 1900 y los meses van desde el 0
        System.out.println(fecha.toString());


    }
}