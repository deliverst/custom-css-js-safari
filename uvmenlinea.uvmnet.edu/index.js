const paymentArea = "https://uvmenlinea.uvmnet.edu/ServiciosEnLineaBanner/PagoEnLinea/Adeudos.aspx?origen=ADEU"

if (location.href === "https://uvmenlinea.uvmnet.edu/ServiciosEnLineaBanner/Opciones.aspx?origen=OPC") {
    location.assign(paymentArea)
}