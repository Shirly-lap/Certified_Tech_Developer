public class Articulo {

    //atributos
    private String descripcion;
    private double precioVenta;
    private int stock;

    public String getDescripcion() {
        return descripcion;
    }

    //getter y setter o metodos de acceso
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    //constructor
    public Articulo(String descripcion, double precio, int cantidad) {
        this.descripcion = descripcion;
        this.precioVenta = precio;
        this.stock = cantidad;
    }
    //metodos
    public boolean hayStock(){
        return stock > 0;
    }
    public double consultarPrecio(){
        return precioVenta;
    }

}
