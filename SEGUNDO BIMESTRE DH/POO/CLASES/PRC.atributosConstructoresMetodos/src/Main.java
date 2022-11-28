public class Main {
    public static void main(String[] args) {

    Articulo articulo = new Articulo("Articulo 1",100,110000);
    Articulo articulo2 = new Articulo("Articulo 2", 1200,0);

    if (articulo2.hayStock()) {
        System.out.println("Hay stock disponible");
        System.out.println("El precio de venta es " + articulo2.consultarPrecio());
    }
    else{
            System.out.println("NO HAY SCTOCK DISPONIBLE " + articulo2.getStock() );
        }
    }
}