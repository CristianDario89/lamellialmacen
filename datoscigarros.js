var ciga1 = [ {
    id:"1",
    marca: "<strong>Phillip Morris</strong> de 10",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga1.png" 
},
{
    id:"2",
    marca: "<strong>Phillip Morris</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga1.png"  
},
{
    id:"3",
    marca: "<strong>Phillip Morris</strong> sabores",
    descripcion: "menta - uva",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga4.jpg" 
},
{
    id:"4",
    marca: "<strong>Malboro</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../img/2/c1.jpg"  
},
{
    id:"5",
    marca: "<strong>Malboro</strong> de 20",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/c2.jpg"  
},
{
    id:"6",
    marca: "<strong>Malboro</strong> sabores",
    descripcion: "menta - uva",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../img/2/ciga44.jpg" 
},
{
    id:"7",
    marca: "<strong>Red point</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/cigared2.jpg"  
},             
{
    id:"8",
    marca: "<strong>Red point</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../img/2/cigared2.jpg"  
},
{
    id:"9",
    marca: "<strong>Red point</strong> menta",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga44.jpg" 
},
{
    id:"10",
    marca: "<strong>Chesterfield</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../img/2/cigachester.jpg"  
},
{
    id:"11",
    marca: "<strong>Chesterfield</strong> de 20",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga44.jpg" 
},
{
    id:"12",
    marca: "<strong>Chesterfield</strong> Sabores",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/cigachester.jpg" 
},
{
    id:"13",
    marca: "<strong>lucky strike</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: ""  
},
{
    id:"14",
    marca: "<strong>lucky strike</strong> de 20",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "" 
},
{
    id:"15",
    marca: "<strong>Chesterfield</strong> Sabores",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "" 
},
{
    id:"16",
    marca: "<strong>tabaco</strong> ",
    descripcion: "",
    precio: "$140",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "" 
}
             
];
 
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


over2("#pc1", ciga1[0].marca,ciga1[0].precio,ciga1[0].img);
over2("#pc2", ciga1[3].marca,ciga1[3].precio,ciga1[3].img);
over2("#pc3", ciga1[6].marca,ciga1[2].precio,ciga1[2].img);
over2("#pc4", ciga1[9].marca,ciga1[9].precio,ciga1[9].img);

over2("#pc5", ciga1[1].marca,ciga1[1].precio,ciga1[1].img);
over2("#pc6", ciga1[4].marca,ciga1[4].precio,ciga1[4].img);
over2("#pc7", ciga1[7].marca,ciga1[7].precio,ciga1[7].img);
over2("#pc8", ciga1[10].marca,ciga1[10].precio,ciga1[10].img);

over2("#pc9", ciga1[2].marca,ciga1[2].precio,ciga1[2].img);
over2("#pc10", ciga1[5].marca,ciga1[5].precio,ciga1[5].img);
over2("#pc11", ciga1[8].marca,ciga1[8].precio,ciga1[8].img);
over2("#pc12", ciga1[11].marca,ciga1[11].precio,ciga1[11].img);



 