 import Herrajes from '../../assets/herrajes.jpg'
 import Vigas from '../../assets/vigas.jpg'
 import Machimbre from '../../assets/machimbre.jpg'
 import Placas from '../../assets/placas.jpg'
 import Cantos from '../../assets/cantos.jpg'
 import Herramientas from '../../assets/maquinas.jpg'

 const productos = [
 	{
         id: 1, 
         title: 'HERRAJES', 
         description: 'Los herrajes que sirven para accionar un dispositivo de apertura y cierre son: manijas, manijones, pomos, tiradores, cubetas, brazos de empuje; los que funcionan para mover se conocen como: bisagras, ruedas, rieles; y los que se utilizan para trabar son: fallebas, aldabas, pasadores, cerraduras, cerrojos', 
         price: 150, 
         stock: 10,
         pictureUrl: Herrajes
       
     },
    
     {
         id: 2, 
         title: 'VIGAS', 
         description: 'Una viga es un elemento estructurales que normalmente se colocan en posición horizontal, (aunque pueden ser también inclinadas) que se apoyan sobre los pilares, destinados a soportar cargas', 
         price: 4500, 
         stock: 6,
         pictureUrl: Vigas
     },
         {id: 3, 
         title: 'MACHIMBRES', 
         description: 'El machimbre es un sistema que utiliza tablas de madera unidas para dar terminaciones en cielo rasos, paredes y pisos', 
         price: 290, 
         stock: 15,
         pictureUrl: Machimbre 
     },
     {id: 4, 
         title: 'PLACAS', 
         description: 'MDF significa tablero de fibra de densidad media, un tipo de madera de ingeniería que se usa ampliamente en la fabricación de muebles de paquete plano y puertas de gabinetes.', 
         price: 290, 
         stock: 15,
         pictureUrl: Placas 
     },
     {id: 5, 
         title: 'HERRAMIENTAS', 
         description: 'Encabezando la lista de las mejores marcas de herramientas mecánicas o para talleres mecánicos tenemos a la marca líder a nivel mundial Crescent, seguida por GearWrench y Stanley, especialistas en manufactura de herramientas manuales de alta calidad y resistencia', 
         price: 290, 
         stock: 5,
         pictureUrl: Herramientas 
     },
     {id: 6, 
         title: 'CANTOS', 
         description: 'Los cantos de PVC ofrecen una muy buena resistencia al impacto y a la abrasión, y presentan un excelente comportamiento al maquinado en procesos de corte y fresado. ', 
         price: 290, 
         stock: 10,
         pictureUrl: Cantos 
     },
      
      
 ]

 export default productos