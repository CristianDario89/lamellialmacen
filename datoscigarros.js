var ciga1 = [ {
    id:"1",
    marca: "<strong>Phillip Morris</strong> de 10",
    descripcion: "",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga1.png" 
},
{
    id:"2",
    marca: "<strong>Malboro</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c4.png"  
},
{
    id:"3",
    marca: "<strong>Red point</strong> de 10",
    descripcion: "menta - uva",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/cigared2.jpg" 
},
{
    id:"4",
    marca: "<strong>Chesterfield</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: 95,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c1.png"  
},
{
    id:"5",
    marca: "<strong>lucky strike</strong> de 10",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c8.png"  
},
{
    id:"6",
    marca: "<strong>master</strong> de 20",
    descripcion: "menta - uva",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c7.jpg" 
},
{
    id:"7",
    marca: "<strong>benson</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: 220,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c9.png"  
},             
{
    id:"8",
    marca: "<strong>Parliament</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: 220,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c6.jpg"  
},
{
    id:"9",
    marca: "<strong>Red point</strong> menta",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/ciga44.jpg" 
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
										$ ${two}
   </div>
   `
    }     



/*
over2("#pc9", ciga1[2].marca,ciga1[2].precio,ciga1[2].img);
over2("#pc10", ciga1[5].marca,ciga1[5].precio,ciga1[5].img);
over2("#pc11", ciga1[8].marca,ciga1[8].precio,ciga1[8].img);
over2("#pc12", ciga1[11].marca,ciga1[11].precio,ciga1[11].img);*/

var over1 = function(atrr,on,tw, thre,four) {
	    var contenido2 = document.querySelector(atrr)
	        contenido2.innerHTML = `
    <div class="fh5co-food-desc " >
										<figure>
											<img src="${thre}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${on}</h3>
											<p>${four}</p>
										</div>
									</div>
									<div class="fh5co-food-pricing">
										$ ${tw}
									</div>
   `
    }  
over1("#pc1", ciga1[0].marca,ciga1[0].precio,ciga1[0].img,"de 20 <strong>$ 170</strong> / menta - uva <strong>$ 175</strong>");
 

over1("#pc2", ciga1[1].marca,ciga1[1].precio,ciga1[1].img,"de 20 <strong>$ 185</strong> / menta - uva <strong>$ 190</strong>");
over1("#pc3", ciga1[2].marca,ciga1[2].precio,ciga1[2].img,"de 20 <strong>$ 135</strong> ");
over1("#pc4", ciga1[3].marca,ciga1[3].precio,ciga1[3].img,"de 20 <strong>$ 155</strong>");


over1("#pc5", ciga1[4].marca,ciga1[4].precio,ciga1[4].img,"de 20 <strong>$ 190</strong>");
over1("#pc6", ciga1[5].marca,ciga1[5].precio,ciga1[5].img,"de 20 <strong>$200</strong>");
over1("#pc7", ciga1[6].marca,ciga1[6].precio,ciga1[6].img,"");
over1("#pc8", ciga1[7].marca,ciga1[7].precio,ciga1[7].img,"");