
function productosprecargados(){
	
	producto1 = new Object();
	producto1.codigoproducto = "27654";
	producto1.descripcionproducto =  "Campera de invierno";
	producto1.categoriaproducto = "Ropa";
	producto1.marcaproducto = "Columbia";
	producto1.fechaingproducto = "30-4-2020";
	producto1.cantidad = 100;
	
	producto2 = new Object();
	producto2.codigoproducto = "45678";
	producto2.descripcionproducto =  "Pantalones";
	producto2.categoriaproducto = "Ropa";
	producto2.marcaproducto = "Levis";
	producto2.fechaingproducto = "11-6-2019";
	producto2.cantidad = 250;
	
	producto3 = new Object();
	producto3.codigoproducto = "78432";
	producto3.descripcionproducto =  "Leche en polvo";
	producto3.categoriaproducto = "Comestibles";
	producto3.marcaproducto = "Conaprole";
	producto3.fechaingproducto = "22-5-2019";
	producto3.cantidad = 150;
	
	producto4 = new Object();
	producto4.codigoproducto = "27495";
	producto4.descripcionproducto =  "Guitarra";
	producto4.categoriaproducto = "Instrumentos";
	producto4.marcaproducto = "Fender";
	producto4.fechaingproducto = "22-5-2020";
	producto4.cantidad = 70;
	
	listaproductos[listaproductos.length] = producto1; 
	listaproductos[listaproductos.length] = producto2;
	listaproductos[listaproductos.length] = producto3;
	listaproductos[listaproductos.length] = producto4;
	
	listarProductos();
}

function clientesprecargados(){
	
		cliente1 = new Object();
		cliente1.numerocliente = 1;
		cliente1.nombrecliente =  "Franco Sosa";
		cliente1.rutcliente = "30.686.957-4";
		cliente1.telefonocliente = "099345765";
		cliente1.emailcliente = "francososa@gmail.com";
		cliente1.cantidaddepedidos = 0;
		
		cliente2 = new Object();
		cliente2.numerocliente = 2;
		cliente2.nombrecliente =  "Esteban Fernandez";
		cliente2.rutcliente = "24.706.957-5";
		cliente2.telefonocliente = "095345765";
		cliente2.emailcliente = "esteban@gmail.com";
		cliente2.cantidaddepedidos = 15;
		
		cliente3 = new Object();
		cliente3.numerocliente = 3;
		cliente3.nombrecliente =  "Melina Alvarez";
		cliente3.rutcliente = "68.679.948-5";
		cliente3.telefonocliente = "099432654";
		cliente3.emailcliente = "melina@gmail.com";
		cliente3.cantidaddepedidos = 45;
		
		cliente4 = new Object();
		cliente4.numerocliente = 4;
		cliente4.nombrecliente =  "Fiorela Perez";
		cliente4.rutcliente = "73.987.436-8";
		cliente4.telefonocliente = "099234659";
		cliente4.emailcliente = "fiorela@gmail.com";
		cliente4.cantidaddepedidos = 8;
		
		listacliente[listacliente.length] = cliente1; 
		listacliente[listacliente.length] = cliente2;
		listacliente[listacliente.length] = cliente3;
		listacliente[listacliente.length] = cliente4;
		
		listarClientes();
	}