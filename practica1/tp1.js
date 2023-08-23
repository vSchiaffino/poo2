/*Un local tiene varios empleados. Por un lado, tiene empleados administrativos que cumplen un
régimen de 8 horas diarias y trabajan 5 días a la semana, estos cobran un sueldo fijo. También
existen otros empleados que se los contacta únicamente cuando falta el personal administrativo,
en este caso se les paga por las horas trabajadas, habiendo pactado previamente el valor de la hora.
Luego, tienen el personal de ventas quienes cobran una comisión sobre las ventas realizadas, y por
último, los vendedores con mayor antigüedad en el local, tienen un sueldo fijo, al cuál se le sumará
una comisión por las ventas realizadas.

Desarrollar un programa que almacene la información de cada empleado (nombre, apellido
y dni) y que nos permita calcular el monto que se le debe pagar a cada uno.

*/

class Empleado{
    constructor(nombre,apellido,dni,tipoEmpleado){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.tipoEmpleado = tipoEmpleado
    }

}

class TipoEmpleado{
    calcularSueldo(){
        
    }
}