import assets from "../assets/assets";

const data = {
    pools: [
        {
            'name': 'Redondeta',
            'desc_corta':'Proyecto realizado con venecitas biseladas y un borde atermico de 12x4".',
            'color':'white',
            'portada': "/images/Redondeta/pileta 6.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'6 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Sin secciones rectas',
            'demas_fotos':["/images/Redondeta/pileta 6.jpeg", "/images/Redondeta/union 2.jpeg", "/images/Redondeta/constr.jpeg",
             "/images/Redondeta/constr 2.jpg", "/images/Redondeta/constr 3.jpg","/images/Redondeta/antes.jpg"]
        },
        {
            'name': 'Finlandesa',
            'desc_corta':'Finura trabajada con venecitas biseladas, en piscina y jacuzzi.',
            'color':'white',
            'portada': "/images/Finlandesa/adentro.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'8 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Reduadrada y Nivelada',
            'demas_fotos':["/images/Finlandesa/Pileta 3.jpeg","/images/Finlandesa/jacuzzi.jpeg","/images/Finlandesa/Detalle 1.jpeg",
            "/images/Finlandesa/adentro.jpeg","/images/Finlandesa/Detalle 2.jpeg","/images/Finlandesa/detalle 3.jpeg",
            "/images/Finlandesa/escalera 1.jpeg","/images/Finlandesa/escalera 2.jpeg","/images/Finlandesa/escalera 3.jpeg"]
        },
        {
            'name': 'Argentineta',
            'desc_corta':'La inmensidad recubierta en venecitas biseladas y travertina utilizada en todo el piso aledaño.',        
            'color':'white',    
            'portada': "/images/Argentineta/portada.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'6 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Reduadrada y Nivelada',
            'demas_fotos':["/images/Argentineta/portada.jpeg", "/images/Argentineta/decote.jpg", "/images/Argentineta/jaquzzi.jpeg"]
        },
        {
            'name': 'Fuente',
            'desc_corta':'Esta majestuosa fuente utiliza porcelanato, marmol, simil madera y el borde atermico.',
            'color':'black',
            'portada': "/images/Fuente/fuente.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'1 mes',
            'ubicacion':'Miami-USA',
            'recuadre':'Sin nivelar',
            'demas_fotos':["/images/Fuente/fuente.jpeg","/images/Fuente/puente.png",'/images/Fuente/centro 2.png']
        },
        {
            'name': 'Piscina',
            'desc_corta':'Trabajo realizado con venecitas biseladas y un borde atermico de 12x4".',
            'color':'white',
            'portada': "/images/Clasica/detalle.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'5 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Sin recuadrar',
            'demas_fotos':["/images/Clasica/detalle.jpeg","/images/Clasica/escalera.jpeg","/images/Clasica/proceso.jpeg",
            "/images/Clasica/transicion.jpeg","/images/Clasica/Portada.jpeg","/images/Clasica/WhatsApp Image 2023-10-30 at 11.43.14 (1).jpeg"]
        },
        {
            'name': 'Multicolor',
            'desc_corta':'Arcoiris realizado con venecitas biseladas multicolor y borde atermico de 12x4".',
            'color':'white',
            'portada': "/images/LGBT/Portada.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'6 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Reduadrada y Nivelada',
            'demas_fotos':["/images/LGBT/Portada.jpeg","/images/LGBT/portada 2.jpeg","/images/LGBT/Porceso.jpg",
            "/images/LGBT/proceso 2.jpeg", "/images/LGBT/detalle 4.jpeg", "/images/LGBT/Detalle.jpeg"]
        },
        {
            'name': 'Clasica',
            'desc_corta':'Trabajo realizado con venecitas biseladas y un borde atermico de 2x1 pie.',
            'color':'white',
            'portada': "/images/Adefinir/Portada.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'2 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Sin nivelar',
            'demas_fotos':["/images/Adefinir/Panora.jpeg","/images/Adefinir/Detalle.jpeg","/images/Adefinir/Detalle 2.jpeg"]
        },
        {
            'name': 'Escaloneta',
            'desc_corta':'Obra realizada con venecitas biseladas y un borde atermico de 12x4".',
            'color':'white',
            'portada': "/images/Escaloneta/detalle.jpeg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'5 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Reduadrada y Nivelada',
            'demas_fotos':["/images/Escaloneta/comparativa 1.jpg", "/images/Escaloneta/proceso 1.jpg",
            "/images/Escaloneta/proceso 3.jpg","/images/Escaloneta/detalle.jpeg","/images/Escaloneta/detalle 2.jpeg",
            "/images/Escaloneta/detalle 3.jpeg"]
        },
        {
            'name': 'Celeste',
            'desc_corta':'Trabajo realizado con cerecita y marmol',
            'color':'white',
            'portada': "/images/celeste/frente.jpg",
            'puentesDeAdherencia': ["Klaukol","Epoxi"],
            'puentesDeAdherenciaLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'caracteristicas':['680 pies cuadrados. ', 'Borde atermico de 6x2 pies', '6 Días','Sin secciones rectas.'], 
            'pegamentos': ["Klaukol","Epoxi"],
            'pegamentosLink': ["https://www.mercadolibre.com.ar/klaukol-impermeable-30-kgs-pegamento-adhesivo-para-ceramica/p/MLA26692991?pdp_filters=category:MLA433729#searchVariation=MLA26692991&position=2&search_layout=grid&type=product&tracking_id=cbe0e08d-77ff-4e10-94bc-22f4bd6a48f9","Epoxi"],
            'tiempo':'5 Días',
            'ubicacion':'Miami-USA',
            'recuadre':'Reduadrada y Nivelada',
            'demas_fotos':["/images/celeste/frente.jpg", "/images/celeste/escalera.jpeg", "/images/celeste/proceso.jpeg"]
        },
        
    ]
};

export default data;