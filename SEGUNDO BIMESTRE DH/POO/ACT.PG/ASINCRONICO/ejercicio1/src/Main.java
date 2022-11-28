public class Main {
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 2;

        if (num1 % num2 == 0){
            int resultado = num1 / num2;
            System.out.println("Este numero es divisible y el resultado es: " + resultado);
        }
        else{
            System.out.println("ESTE NUMERO NO ES DIVISIBLE");
        }

    }
}