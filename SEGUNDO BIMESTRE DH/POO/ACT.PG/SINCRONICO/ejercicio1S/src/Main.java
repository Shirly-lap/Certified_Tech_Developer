public class Main {
    public static void main(String[] args) {
        String nombreAnimal = "Gardel";

        switch (nombreAnimal){
            case "Manchitas" :
                System.out.println("- Manchitas tiene 2 años");
                System.out.println("- Manchitas come un kilo y medio y hace GAU GAU");
                break;
            case "Nemo":
                System.out.println("- Nemo tiene 1 año");
                System.out.println("- Nemo come un 140 gramos y sus burbujas suenan BLU BLU");

                break;
            case "Silvestre" :
                System.out.println("- Silvestre tiene 3 años");
                System.out.println("- Silvestre come medio kilo y sus maullidos suenan MIAUU MIAUU");

                break;
            case "Manuelita" :
                System.out.println("- Manuelita tiene 12 años");
                System.out.println("- Manuelita come 300 gramos y según la canción vivía bajo del agua");

                break;
            case "Gardel" :
                System.out.println("- Gardel tiene 1 año");
                System.out.println("- Gardel come 350 gramos y hace PIO PIO");

                break;
            default:
                System.out.println("ALERT. revisa que hayas escrito bien el nombre de tu animal, de lo contrario tu animal no se encuentra en la lista.");
        }

    }
}