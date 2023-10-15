module.exports = function (){
    var data = {
        usuarios:[
            {
                id: 1,
                nombre: "Alan",
                contrasena: "1234a",
                email: "alan@user.com",
                rol:"user"
            },
            {
                id: 2,
                nombre: "Leno",
                contrasena: "abcd",
                email: "leno@admin.com",
                rol:"admin"
            }
        ],
    
        gatos: [
        {
            id: 1,
            tipo: "gato",
            nombre: "Luna",
            genero: "Hembra",
            raza: "Mestiza",
            urlImg: "https://forrajerialafamilia.files.wordpress.com/2016/11/fotos-de-gatos-gatitos-y-mininos-3.jpg",
            descripcion: "Luna es una gata muy solitaria, no es tan afectuosa pero come mucho"
        },
        {
            id: 2,
            tipo: "gato",
            nombre: "Sol",
            genero: "Macho",
            raza: "Egipcio",
            urlImg: "https://curiosfera-animales.com/wp-content/uploads/2017/11/gato-egipcio-o-esfinge.jpg",
            descripcion: "Sol es un gato muy afectuoso que constantemente busca estar a tu lado, le gusta descansar y ponerse donde hay Sol"
        },
        {
            id: 3,
            tipo: "gato",
            nombre: "Mania",
            genero: "Hembra",
            raza: "Mestiza",
            urlImg: "https://okdiario.com/img/2020/02/30/alimentacion-gato-cachorro-655x368.jpg",
            descripcion: "Mania es una gata revoltosa y muy juguetona, le encanta arañar y morder todo"
        }
        ],
    
        perros:[
        {
            id: 1,
            tipo: "perro",
            nombre: "Ralfi",
            genero: "Macho",
            raza: "Pastor aleman",
            urlImg: "https://previews.123rf.com/images/sergeyussr/sergeyussr1109/sergeyussr110900154/10580215-cachorro-de-perro-pastor-alem%C3%A1n-la-edad-de-4-meses.jpg",
            descripcion: "Ralfi es un perro muy responsable, poco juguetón pero siempre esta pendiente del cuidado de sus dueños"
        },
        {
            id: 2,
            tipo: "perro",
            nombre: "Max",
            genero: "Macho",
            raza: "Salchica",
            urlImg: "https://www.nombresdeperros.eu/wp-content/uploads/2019/04/perro-salchicha-colornegro.jpg",
            descripcion: "Max es un perro cariñoso, es muy tierno con todos los que le rodean y nunca busca hacer daño"
        },
        {
            id: 3,
            tipo: "perro",
            nombre: "Canela",
            genero: "hembra",
            raza: "Labrador",
            urlImg: "https://t1.ea.ltmcdn.com/es/posts/3/7/7/nombres_para_perritas_labrador_20773_2_600.jpg",
            descripcion: "Canela es una cachorra bien servicial y muy juguetona, le gusta explorar y sabe guíar a personas ciegas"
        }
        ]		
    }
    
    return data;
}