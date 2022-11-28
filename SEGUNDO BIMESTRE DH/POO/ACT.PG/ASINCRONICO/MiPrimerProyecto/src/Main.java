
public class Main {

    public static void main(String[] args) {

        int edad = 18;

      /*  if (edad >= 18 && edad < 30){
            System.out.println("Eres mayor de edad");
        }
        else if (edad < 18) {
            System.out.println("Eres menor de edad");
        }

        else {
            System.out.println("Eres de la tercera edad");
        }*/

        switch (edad){
            case 1 :
                System.out.println("Eres un niño");

                break;
            case 13 :
                System.out.println("Eres un adolecente");

                break;
            case 18 :
                System.out.println("Eres un adulto");
        }

    }


    }