var articulos = [ {
    id:"1",
    marca: "<strong>ayudin</strong> lavandina",
    descripcion: "",
    precio: 70,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l1.jpg"
},
{
    id:"2",
    marca: "<strong>ala</strong> detergente",
    descripcion: "",
    cantidad:"",
    precio: 110,
    cantidad:"",
    seccion:"",
    img:"images/limpi/ll1.jpg" 
},
{
    id:"3",
    marca: "<strong>raid</strong> matacucarachas",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"",
    marca: "desodorante de ambiente",
    descripcion: "",
    cantidad:"",
    precio: 10,
    cantidad:"",
    seccion:"",
    img:"images/limpi/ll3.webp" 
}
];

var higiene = [ {
    id:"1",
    marca: " <strong>shampoo</strong> plusbelle",
    descripcion: "",
    precio: "",
    cantidad:100,
    seccion:"",
    img:"images/limpi/l5.jpg"
},
{
    id:"2",
    marca: "jabon",
    descripcion: "",
    cantidad:"",
    precio: 35,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l7.jpg" 
},
{
    id:"3",
    marca: "alcohol en gel",
    descripcion: "",
    cantidad:"",
    precio: 85,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l3.jpg" 
},
{
    id:"4",
    marca: "barbijos",
    descripcion: "",
    cantidad:"",
    precio: 80,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l8.jpg" 
},
{
    id:"5",
    marca: "Jabon en polvo <strong>Vanish</strong>",
    descripcion: "",
    cantidad:"",
    precio: 80,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l6.jpg" 
}
];

var desoH = [ {
    id:"1",
    marca: "<strong>axe</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"images/limpi/l10.jpg"
},
{
    id:"2",
    marca: "<strong>rexona</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"" 
},
             {
    id:"3",
    marca: "<strong>Kevin</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"images/limpi/ll5.webp"
},
{
    id:"4",
    marca: "<strong>patric</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"images/limpi/ll5.webp " 
}
             
];

var desoM = [ {
    id:"",
    marca: "<strong>axe</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"",
    marca: "<strong>rexona</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"../images/limpi/l9.png" 
},
             {
    id:"",
    marca: "<strong>Kevin</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"",
    marca: "<strong>patric</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"" 
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
										$ ${two}
   </div>
   `
    }     


over2("#pl1", articulos[0].marca,articulos[0].precio,articulos[0].img);
over2("#pl2", articulos[1].marca,articulos[1].precio,articulos[1].img);
over2("#pl3", higiene[2].marca,higiene[2].precio,higiene[2].img);
over2("#pl4", articulos[3].marca,articulos[3].precio,articulos[3].img);

over2("#pl5", desoH[0].marca,desoH[0].precio,desoH[0].img);
over2("#pl6", desoM[1].marca,desoM[1].precio,desoM[1].img);
over2("#pl7", desoH[2].marca,desoH[2].precio,desoH[2].img);
over2("#pl8", desoH[3].marca,desoH[3].precio,desoH[3].img);
 
over2("#pl13", higiene[0].marca,higiene[0].precio,higiene[0].img);
over2("#pl14", higiene[1].marca,higiene[1].precio,higiene[1].img);
over2("#pl15",higiene[4].marca,higiene[4].precio,higiene[4].img);
over2("#pl16", higiene[3].marca,higiene[3].precio,higiene[3].img);

  
  


 