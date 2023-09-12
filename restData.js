module.exports = function (){
    var data = {
        cuenta_user:[
            {
                nombre: "alan",
                contraseña: "1234a"
            }
        ],
    
        cuenta_admin:[
            {
                nombre: "leno",
                contraseña: "abcd"
            }
        ],
    
        gatos: [
        {
            id: 1,
            nombre: "Luna",
            genero: "Hembra",
            raza: "Mestiza",
            urlImg: "https://forrajerialafamilia.files.wordpress.com/2016/11/fotos-de-gatos-gatitos-y-mininos-3.jpg"
        },
        {
            id: 2,
            nombre: "Sol",
            genero: "Macho",
            raza: "Egipcio",
            urlImg: "https://curiosfera-animales.com/wp-content/uploads/2017/11/gato-egipcio-o-esfinge.jpg"
        },
        {
            id: 3,
            nombre: "Mania",
            genero: "Hembra",
            raza: "Mestiza",
            urlImg: "https://okdiario.com/img/2020/02/30/alimentacion-gato-cachorro-655x368.jpg"
        }
        ],
    
        perros:[
        {
            id: 1,
            nombre: "Ralfi",
            genero: "Macho",
            raza: "Pastor aleman"
        },
        {
            id: 2,
            nombre: "Max",
            genero: "Macho",
            raza: "Salchica"
        },
        {
            id: 3,
            nombre: "Canela",
            genero: "hembra",
            raza: "Labrador"
        }
        ]		
    }
    
    return data;
}