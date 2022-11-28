import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Seleccione el numero de primos");
        Integer cantidadPrimos = scanner.nextInt();
        listaPrimos(cantidadPrimos);
    }
    public static void listaPrimos(Integer cantidad){
        Integer acomuladoPrimos = 0;
        Integer contador = 2;
        while (acomuladoPrimos < cantidad){
            if (esPrimo(contador) == true){
                System.out.println(contador);
                contador++;
                acomuladoPrimos++;
            }
            else {
                contador++;
            }
        }
    }
    public static Boolean esPrimo (Integer numero){
        Boolean primo = true;
        Integer contador = 2;
        while (primo && (contador<=(numero/2))){
            if (numero % contador == 0){
                primo = false;
            }
            else{
                contador++;
            }
        }
        return primo;
    }


}