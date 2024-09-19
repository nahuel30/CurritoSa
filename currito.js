var producto = 
{
	"codigoproducto":"",
	"descripcionproducto":"", 
	"categoriaproducto":"",
	"marcaproducto":"",
	"fechaingproducto":"",
	"cantidad":""
};

var listaproductos=[];


var stock = 
{
	"codigoproducto":"",
	"cantidadstock":"", 
	"fechaingstock":"",
	"fechaactstock":"",
	"vencimientostock":""
};

var  listastock=[];


var cliente = 
{
	"numerocliente":"",
	"nombrecliente":"", 
	"rutcliente":"",
	"telefonocliente":"",
	"emailcliente":"",
	"cantidaddepedidos":""
};

var  listacliente=[];


var pedido = 
{
	"numpedidoint":"",
	"codigopedido":"", 
	"numerocliente":"",
	"producto":"",
	"cantidadpedido":"",
	"fechaingproducto":""
};

var  listapedidos=[];


//creacion de productos

function AgregarProducto(){
	
	producto = new Object();
	producto.codigoproducto = $("#codigoproducto").val();
	producto.descripcionproducto =  $("#descripcionproducto").val();
	producto.categoriaproducto = $("#categoriaproducto").val();
	producto.marcaproducto = $("#marcaproducto").val();
	producto.fechaingproducto = $("#fechaingproducto").val();
	producto.cantidad = 0;
	
	var CodigoDeProducto = producto.codigoproducto;

	console.log(listaproductos);

	//evalua campos vacios

	if (producto.codigoproducto == ""){
		alert("Debe ingresar un Codigo");
		return false;
	}

	if (producto.descripcionproducto == ""){
		alert("Debe ingresar una Descripcion");
		return false;
	}

	if (producto.categoriaproducto == ""){
		alert("Debe ingresar una Categoria");
		return false;
	}

	if (producto.marcaproducto == ""){
		alert("Debe ingresar una Marca");
		return false;
	}

	if (producto.fechaingproducto == ""){
		alert("Debe ingresar una Fecha de Ingreso");
		return false;
	}

		//evalua longitud de campos
			
	if (producto.codigoproducto.length>20){
		alert("El Codigo es muy largo");
		return false;
	}

	if (producto.descripcionproducto.length>100){
		alert("La Descripcion es muy larga");
		return false;
	}

	if (producto.categoriaproducto.length>70){
		alert("La Categoria es muy larga");
		return false;
	}

	if (producto.marcaproducto.length>70){
		alert("La Marca es muy larga");
		return false;
	}

		//verifica si hay un producto con el mismo codigo

	var i=0;
	
	for(i in listaproductos){
		var pepe = listaproductos[i];
		if(CodigoDeProducto == pepe.codigoproducto){
			alert("Este Codigo de Producto ya existe");
			return false;
		}
	}
	
	

	listaproductos[listaproductos.length] = producto;
	alert("Se guardo exitosamente su producto");

	listarProductos();

	$("#codigoproducto").val("");
	$("#descripcionproducto").val("");
	$("#categoriaproducto").val("");
	$("#marcaproducto").val("");
	$("#fechaingproducto").val("");
}

		//lista de productos
		
function listarProductos(){
	var tabla = "";
	tabla+="<table border=1><thead> <tr> <th>Codigo</th> <th>Descripcion</th>";
	tabla+=" <th>Categoria</th> <th>Marca</th> <th>Fecha de Ingreso</th> <th>Cantidad</th></tr>";
	for (var v=0;v<listaproductos.length;v++){
		tabla+= "<tr><th>" + listaproductos[v].codigoproducto + "</th><th>";
		tabla+= "" +  listaproductos[v].descripcionproducto + "</th><th>" + listaproductos[v].categoriaproducto + "</th>";
		tabla+= "</th><th>" +  listaproductos[v].marcaproducto + "</th><th>" + listaproductos[v].fechaingproducto + "</th> <th>" + listaproductos[v].cantidad + "</th></tr>";
	}
	tabla+="</thead><tbody></tbody></table>"
	
	$("#mostrartablaproductos").html(tabla);
}

		//funciones para agregar stock

function AgregarStock(){
	
	stock = new Object;
	stock.codigoproducto = $("#codigoproductostock").val();
	stock.cantidadstock =  parseInt($("#cantidadstock").val());
	stock.fechaingstock = $("#fechaingstock").val();
	stock.fechaactstock = $("#fechaactstock").val();
	stock.vencimientostock = $("#vencimientostock").val();
	
	var CodigoDeProducto = stock.codigoproducto;
	var CantidadStock = stock.cantidadstock;
	
	console.log(stock);

	if (stock.codigoproducto == ""){
		alert("Debe ingresar un Codigo");
		return false;
	}

	if (stock.cantidadstock == ""){
		alert("Debe ingresar una Cantidad de Stock");
		return false;
	}

	if (stock.vencimientostock == ""){
		alert("Debe ingresar un Vencimiento");
		return false;
	}

	if (stock.fechaingstock == ""){
		alert("Debe ingresar una Fecha de Ingreso");
		return false;
	}

	if (stock.fechaactstock == ""){
		alert("Debe ingresar una Fecha de Actualizacion");
		return false;
	}
		//evalua campos vacios
		
	var expresionnumero = /[0-9]/;
	
	if (!expresionnumero.test($("#cantidadstock").val())){
		alert("La Cantidad de Stock tiene que ser un numero");
		return false;
		}

		//agrega stock a tabla productos

	var i=0;
	var booleana = false;
	
	for(i in listaproductos){
		var pepe = listaproductos[i];
		if(CodigoDeProducto == pepe.codigoproducto){
			booleana = true;
			pepe.cantidad = pepe.cantidad + CantidadStock;
			break;
		}
	}
	
	
	if (booleana == false){
		for(i in listaproductos){
			var pepe = listaproductos[i];
			if(CodigoDeProducto !== pepe.codigoproducto){
			alert("El Stock de producto que quiere ingresar no coincide con uno de los productos cargados.");
			return false;
			}
		}
	}
	
	if (booleana == true){
	listastock[listastock.length] = stock;
	alert("El stock se guardo exitosamente");
	
	$("#codigoproductostock").val("");
	$("#cantidadstock").val("");
	$("#vencimientostock").val("");
	$("#fechaingstock").val("");
	$("#fechaactstock").val("");
	}
}

	//div de clientes

function AgregarClientes(){
	
	cliente = new Object;
	cliente.numerocliente = parseInt($("#numerocliente").val());
	cliente.nombrecliente =  $("#nombrecliente").val();
	cliente.rutcliente = $("#rutcliente").val();
	cliente.telefonocliente = $("#telefonocliente").val();
	cliente.emailcliente = $("#emailcliente").val();
	cliente.cantidaddepedidos = 0;
	
	var NumeroCliente = cliente.numerocliente;
	
	console.log(cliente);
	
		//evalua campos vacios

	if (cliente.numerocliente == ""){
		alert("Debe ingresar un Numero de Cliente");
		return false;
	}
	
	if (cliente.nombrecliente == ""){
		alert("Debe ingresar un Nombre");
		return false;
	}
	
	if (cliente.rutcliente == ""){
		alert("Debe ingresar un RUT");
		return false;
	}
	
		//evalua longitud de campos
	
	if (cliente.nombrecliente.length>70){
		alert("El Nombre es muy largo");
		return false;
	}
	
	if (cliente.rutcliente.length>30){
		alert("El RUT es muy largo");
		return false;
	}
		
		//verifica si ya hay un cliente existente con el mismo numero
		
		var i=0;
	
	for(i in listacliente){
		var pepe = listacliente[i];
		if(NumeroCliente == pepe.numerocliente){
			alert("Este Numero de Cliente ya existe");
			return false;
		}
	}

	listacliente[listacliente.length] = cliente;
	alert("El cliente se guardo exitosamente");
	
	listarClientes();
	
	$("#numerocliente").val("");
	$("#nombrecliente").val("");
	$("#rutcliente").val("");
	$("#telefonocliente").val("");
	$("#emailcliente").val("");
}

function listarClientes(){
		
	var tabla = "";
	tabla+="<table border=1><thead> <tr> <th>Numero</th> <th>Nombre</th>";
	tabla+=" <th>RUT</th> <th>Telefono</th> <th>Email</th> <th>Cantidad De Pedidos</th> </tr>";
	for (var v=0;v<listacliente.length;v++){
		tabla+= "<tr><th>" + listacliente[v].numerocliente + "</th><th>";
		tabla+= "" +  listacliente[v].nombrecliente + "</th><th>" + listacliente[v].rutcliente + "</th>";
		tabla+= "</th><th>" +  listacliente[v].telefonocliente + "</th><th>" + listacliente[v].emailcliente + "</th><th>" + listacliente[v].cantidaddepedidos + "</th></tr>";
	}
	tabla+="</thead><tbody></body></table>"
	$("#mostrartablaclientes").html(tabla);
	}
	
	

		// div pedidos

function AgregarPedidos(){
	
	if(verificarCliente() == true){
		
		if(verificarProducto() == true){
			
			if(verificarCantidadStock() == true){
		
	pedido = new Object;
	pedido.numpedidoint = listapedidos.length+1;
	pedido.codigopedido =  parseInt($("#codigopedido").val());
	pedido.numerocliente = parseInt($("#numeroClientePedido").val());
	pedido.producto = $("#producto").val();
	pedido.cantidadpedido = parseInt($("#cantidadpedido").val());
	pedido.fechaingproducto = $("#fechaIngProductoPedidos").val();
	
	
	var CodigoDeProductoEnPedido = pedido.producto;
	var CantidadStockDelProducto = pedido.cantidadpedido;
	var NumeroCliente = parseInt(pedido.numerocliente);
	var CantidadDelProductoIngresada = pedido.cantidadpedido;
	
	console.log(pedido);
	
		//evalua campos vacios
	
	if (pedido.codigopedido == ""){
		alert("Debe ingresar un Codigo de Pedido");
		return false;
	}
	
	if (pedido.numerocliente == ""){
		alert("Debe ingresar un Numero de Cliente");
		return false;
	}
	
	if (pedido.producto == ""){
		alert("Debe ingresar un Producto");
		return false;
	}
	
	if (pedido.cantidadpedido == ""){
		alert("Debe ingresar una Cantidad de Pedido");
		return false;
	}
	
	if (pedido.fechaingproducto === ""){
		alert("Debe ingresar una Fecha de Ingreso de Pedido");
		return false;
	}
		//evalua longitud de campos

	if (pedido.codigopedido.length>30){
		alert("El Codigo de pedido es muy largo");
		return false;
	}
		
	var i=0;
	
	 //agrega cantidad de pedido a tabla clientes
	 
	for(i in listacliente){
		var pepe = listacliente[i];
		if(NumeroCliente == pepe.numerocliente){
			pepe.cantidaddepedidos = pepe.cantidaddepedidos + CantidadStockDelProducto;
			break;
		}
	}
	
	//	quita stock a tabla productos
		
	for(i in listaproductos){
		var pepe = listaproductos[i];
		if(CodigoDeProductoEnPedido == pepe.codigoproducto){
			pepe.cantidad = pepe.cantidad - CantidadDelProductoIngresada;
			break;
		}
	}
	
	listapedidos[listapedidos.length] = pedido;
	alert("Se realizo exitosamente su pedido");
	
	$("#numpedidoint").val("");
	$("#codigopedido").val("");
	$("#numeroClientePedido").val("");
	$("#producto").val("");
	$("#cantidadpedido").val("");
	$("#fechaIngProductoPedidos").val("");
			
			}else{
			alert("Stock insuficiente");
			}
			
		}else{
			alert("Producto no Creado");
		}
		
	}else{
		alert("Cliente no Creado");
	}
}
		//verifica clientes existentes
		
function verificarCliente(){
		var NumeroClientefuncion = parseInt($("#numeroClientePedido").val());
		for(i=0; i<listacliente.length; i++){
			if (NumeroClientefuncion == listacliente[i].numerocliente){
				return true;
			}
		}return false;
	}
		//verifica productos existentes
		
function verificarProducto(){
		var NumeroProductofuncion = $("#producto").val();
		for(i=0; i<listaproductos.length; i++){
			if (NumeroProductofuncion == listaproductos[i].codigoproducto){
				return true;
			}
		}return false;
	}
		//verifica cantidad de stock suficiente
		
function verificarCantidadStock(){
		var NumeroCantidadPedidofuncion = parseInt($("#cantidadpedido").val());
		for(i=0; i<listaproductos.length; i++){
			if (NumeroCantidadPedidofuncion <= listaproductos[i].cantidad){
				return true;
			}
		}return false;
	}
		//div reportes

		//reporte de lista de stock por producto

	function ListarStockPorProducto(){
		
		var tablalista="";
		tablalista+="<table border=1><thead> <tr> <th>Producto</th> <th>Stock</th> </tr><tr>";
		
		for (var v=0;v<listaproductos.length;v++){
			tablalista+= "<tr> <th>" + listaproductos[v].codigoproducto + "</th> <th>" + listaproductos[v].cantidad + "</th> </tr>";
		}
		tablalista+="</tr></thead><tbody></tbody></table>";
		
		$("#MostrarTablaStockPorProducto").html(tablalista);
		}
		
	//reporte de lista de stock general por cliente

	function ListarStockPorCliente(){
		
		var TablaStockPorCliente="";
		TablaStockPorCliente+="<table border=1><thead> <tr> <th>Nombre de Cliente</th> <th>Stock Generado</th> </tr><tr>";
		
		for (var v=0;v<listacliente.length;v++){
			TablaStockPorCliente+= "<tr> <th>" + listacliente[v].nombrecliente + "</th> <th>" + listacliente[v].cantidaddepedidos + "</th> </tr>";
		}
		TablaStockPorCliente+="</tr></thead><tbody></tbody></table>";
		
		$("#MostrarTablaStockPorCliente").html(TablaStockPorCliente);
		}


		function InicializarDivs(){
			productosprecargados();
			clientesprecargados();
			ListarStockPorProducto();
			ListarStockPorCliente();
			$("#divproductos").hide();
			$("#divstock").hide();
			$("#divclientes").hide();
			$("#divpedidos").hide();
			$("#divreportes").hide();
		}
		
		//pagina de inicio

		function ingproductos (){
			$("#divproductos").show();
			$("#divstock").hide();
			$("#divclientes").hide();
			$("#divpedidos").hide();
			$("#divreportes").hide();
		}
		
		//mostrar productos

		function ingstock (){
			$("#divproductos").hide();
			$("#divstock").show();
			$("#divclientes").hide();
			$("#divpedidos").hide();
			$("#divreportes").hide();
		}
		
		//mostrar stock

		function ingclientes (){
			$("#divproductos").hide();
			$("#divstock").hide();
			$("#divclientes").show();
			$("#divpedidos").hide();
			$("#divreportes").hide();
		}
		
		//mostrar clientes

		function ingpedidos (){
			$("#divproductos").hide();
			$("#divstock").hide();
			$("#divclientes").hide();
			$("#divpedidos").show();
			$("#divreportes").hide();
		}

		//mostrar pedidos

		function ingreportes (){
			$("#divproductos").hide();
			$("#divstock").hide();
			$("#divclientes").hide();
			$("#divpedidos").hide();
			$("#divreportes").show();
		}

		//mostrar reportes
