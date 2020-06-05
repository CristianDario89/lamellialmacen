var articulos = [ {
    id:"1",
    marca: "leche <strong>la serenisima</strong> ",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "leche <strong>la suipachense</strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "yogur <strong>ilolay</strong>",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "<strong>armonia</strong> 200ml",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"5",
    marca: "yogur <strong>ilolay</strong> queso untable",
    descripcion: "jamon",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:""
}
];

var higiene = [ {
    id:"1",
    marca: " <strong>shampoo</strong> plusbelle",
    descripcion: "",
    precio: "",
    cantidad:"$100",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "jabon",
    descripcion: "",
    cantidad:"",
    precio: "$35",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "alcohol en gel",
    descripcion: "",
    cantidad:"",
    precio: "$85",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"4",
    marca: "barbijos",
    descripcion: "",
    cantidad:"",
    precio: "$80",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var otros = [ {
    id:"1",
    marca: "pilas <strong>duracell</strong> ",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>poxi-ran</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
             {
    id:"3",
    marca: "<strong>la gotita</strong> ",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "cartas <strong>casino</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"5",
    marca: "parches <strong>solumit</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"6",
    marca: "velas1",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"7",
    marca: "velas2",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"8",
    marca: "velas3",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"9",
    marca: "bombillas de mate",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"10",
    marca: "cepillo de dientes",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
             
];
  
/*--------------------------------*/
var proveedores = [ {
    id:"",
    nombre:"",
    telefono: "",
    direccion:"",
    productos:["budines","facturas","dulces","saladas"]   
} 
] 
/*-------------Card Overlay---------*/
var over2 = function(atr,one,two, three) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    <div class="fh5co-food-desc " >
										<figure>
											<img src="${three}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${one}</h3>
											
										</div>
									</div>
									<div class="fh5co-food-pricing">
										${two}
   </div>
   `
    }     


over2("#pl1", articulos[0].marca,articulos[0].precio,articulos[0].img);
over2("#pl2", articulos[1].marca,articulos[1].precio,articulos[1].img);
over2("#pl3", articulos[2].marca,articulos[2].precio,articulos[2].img);
over2("#pl4", articulos[3].marca,articulos[3].precio,articulos[3].img);

over2("#pl5", desoH[0].marca,desoH[0].precio,desoH[0].img);
over2("#pl6", desoH[1].marca,desoH[1].precio,desoH[1].img);
over2("#pl7", desoH[2].marca,desoH[2].precio,desoH[2].img);
over2("#pl8", desoH[3].marca,desoH[3].precio,desoH[3].img);


over2("#pl9", desoM[0].marca,desoM[0].precio,desoM[0].img);
over2("#pl10", desoM[1].marca,desoM[1].precio,desoM[1].img);
over2("#pl11", desoM[2].marca,desoM[2].precio,desoM[2].img);
over2("#pl12", desoM[3].marca,desoM[3].precio,desoM[3].img);
  
  


 