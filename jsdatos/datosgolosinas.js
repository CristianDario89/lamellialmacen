var alfajores = [ {
    id:"1",
    marca: "alfajor <strong>milka</strong>",
    descripcion: "dulce de leche - Mousse",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>coffler </strong>block",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "<strong>aguila </strong>minitorta",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "alfajor <strong>tri-shot</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    img:"../images/golo/gol6.jpg" 
},
{
    id:"5",
    marca: "alfajor <strong>bon-o-bon</strong>",
    descripcion: "blanco - negro",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
                 {
    id:"6",
    marca: "alfajor <strong>bon-o-bon</strong>",
    descripcion: "triple",
    cantidad:"",
    precio: "60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"7",
    marca: "alfajor <strong>jorgelin</strong>",
    descripcion: "blanco - negro",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"8",
    marca: "alfajor <strong>pepitos</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"9",
    marca: "alfajor <strong>tofi</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    img:"../images/golo/gol3.jpg" 
},
{
    id:"10",
    marca: "<strong>guaymallen</strong>",
    descripcion: "simple chocolate - dulce de leche",
    cantidad:"",
    precio: "$30",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"11",
    marca: "alfajor <strong>jorgito</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"12",
    marca: "alfajor <strong>Jorgelin</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    img:"../images/golo/gol5.png" 
}
];
/*----------------------------*/
var chocolates = [ {
    id:"1",
    marca: "<strong>milka </strong> dulce de leche",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>milka leger </strong> combinado",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "<strong>milka leger </strong> almendras",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "<strong>milka leger </strong> leche",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"5",
    marca: "<strong>milka </strong> bis",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
                 {
    id:"6",
    marca: "<strong>milka </strong> oreo",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"7",
    marca: "<strong>milka </strong> blanco - negro",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"8",
    marca: "<strong>Bon o bom</strong>",
    descripcion: "dulce de leche - blanco",
    cantidad:"",
    precio: "$20",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"9",
    marca: "<strong>rodhesia </strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$30",
    cantidad:"",
    seccion:"",
    img:"../images/golo/gol1.jpg" 
},
                 {
    id:"10",
    marca: "<strong>tita </strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$30",
    cantidad:"",
    seccion:"",
    img:"../images/golo/gol2.jpg" 
},
{
    id:"11",
    marca: "<strong>tofi</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"12",
    marca: "<strong>Kinder</strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$80",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
 {
    id:"13",
    marca: "<strong>Ferrero roger </strong> caja",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
 {
    id:"14",
    marca: "<strong>rocklets </strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
 {
    id:"16",
    marca: "<strong>cardbury </strong> almendras",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
 {
    id:"17",
    marca: "<strong>cofler block </strong>170g",
    descripcion: "",
    cantidad:"",
    precio: "215",
    cantidad:"",
    seccion:"",
    proveedor:"" 
} 
];
/*--------------------------*/ 
/*--------------------------------*/
var galletitas = [ {
    id:"",
    secciones:["budines","facturas","dulces","saladas"],
    descripcion: "",
    proveedores:["budines","facturas","dulces","saladas"]   
} 
] 

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


over2("#pg1", alfajores[0].marca,alfajores[0].precio,alfajores[0].img);
over2("#pg2", alfajores[1].marca,alfajores[1].precio,alfajores[1].img);
over2("#pg3", alfajores[2].marca,alfajores[2].precio,alfajores[2].img);
over2("#pg4", alfajores[3].marca,alfajores[3].precio,alfajores[3].img);


over2("#pg15", alfajores[8].marca,alfajores[8].precio,alfajores[8].img);
over2("#pg16", alfajores[11].marca,alfajores[11].precio,alfajores[11].img); 

/*
over2("#p5", alfajores[4].marca,alfajores[4].precio,alfajores[4].descripcion);
over2("#p6", alfajores[5].marca,alfajores[5].precio,alfajores[5].descripcion);
over2("#p7", alfajores[6].marca,alfajores[6].precio,alfajores[6].descripcion);
over2("#p8", alfajores[7].marca,alfajores[7].precio,alfajores[7].descripcion);
over2("#p9", alfajores[8].marca,alfajores[8].precio,alfajores[8].descripcion);
over2("#p10", alfajores[9].marca,alfajores[9].precio,alfajores[9].descripcion);

*/

over2("#pg5", chocolates[0].marca,chocolates[0].precio,chocolates[0].img);
over2("#pg6", chocolates[1].marca,chocolates[1].precio,chocolates[1].img);
over2("#pg7", chocolates[2].marca,chocolates[2].precio,chocolates[2].img);
over2("#pg8", chocolates[3].marca,chocolates[3].precio,chocolates[3].img);

over2("#pg9", chocolates[7].marca,chocolates[7].precio,chocolates[7].img);
over2("#pg10", chocolates[8].marca,chocolates[8].precio,chocolates[8].img);
over2("#pg11", chocolates[9].marca,chocolates[9].precio,chocolates[9].img);
over2("#pg12", chocolates[10].marca,chocolates[10].precio,chocolates[10].img);





 