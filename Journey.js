/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.MAF";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Josefina Pérez",
                Photo: "josefina.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Ha visto en la televisión un programa de viajes en el que visitan Suecia, y le han dado ganas de ir.",
                touch1: "Television",
                feel1: "4",
                con1: "Tiene que buscar información sobre el viaje: qué lugares va a visitar, qué monumentos va a ver, cuánto tiempo durará el viaje, etc.",
                ima1: "cartoon-resting.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "No sabe dónde buscar la información en internet, por lo que decide llamar a sus hijos para que le ayude",
                touch2: "Movil",
                feel2: "3",
                con2: "No sabe si alguno de sus hijos estará disponible para ayudarla en ese momento.",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                goal3: "Habla con su hijo mayor, que ya ha estado en Suecia, para que le recomiende páginas donde planear su viaje." +
                    " Su hijo le recomienda couchsurfing, para que no esté sola en su viaje.",
                touch3: "Móvil",
                feel3: "3",
                con3: "No conoce couchsurfing y no le suena muy bien. Aun así, como se lo ha recomendado su hijo, le da una oportunidad.",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                goal4: "Busca en su móvil la página de couchsurfing ",
                touch4: "Móvil (navegador web)",
                feel4: "2",
                con4: "Se tiene que registrar antes de buscar alojamiento, y es tedioso rellenar el formulario.",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                goal5: "Una vez entra a la página, consigue buscar anfitriones para su viaje",
                touch5: "móvil (navegador web)",
                feel5: "1",
                con5: "La web le parece un poco confusa, pues hay muchas opciones. Accede a la ayuda, pero está en inglés. "+ 
                " Le ha costado incluso buscar un destino porque la búsqueda se realiza en inglés, pero no está indicado. " + 
                " Además no le ha gustado porque tiene que introducir mucha información personal que ella no consiedera" +
                " relevante, como los 'hobbies' o fotos suyas; simplemente para poder contactar con un anfitrión." + 
                " Tampoco se fía demasiado de los anfitriones, porque no todos están verificados por la plataforma. ",
                ima5: "cartoon-PCangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                goal6: "No le gusta ni la página ni el servicio, por lo que decide que lo más sencillo es llamar a una agencia de viajes",
                touch6: "Servicio (agencia)",
                feel6: "2",
                con6: "Sabe que el viaje le va a resultar más caro que si lo buscara online.",
                ima6: "cartoon-phoningAngry.png",

			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Mario Fernández",
                Photo: "Mario.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Hace tiempo conoció a un grupo de estudiantes polacos, y ahora que se acercan las vaciones quiere planear un viaje a Polonia. ",
                touch1: "Móvil (calendario)",
                feel1: "5",
                con1: "Su presupuesto para viajar es limitado",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Buscar en internet viajes a Polonia",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Quiere estar en Polonia durante tres semanas, y no encuentra ningún alojamiento lo suficientemente económico.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                goal3: "Contacta con uno de los estudiantes polacos para que le aconseje o le recomiende algún alojamiento.",
                touch3: "Móvil (facebook)",
                feel3: "3",
                con3: "No ha podido contactar con su mejor amigo dentro del grupo",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/   
                goal4: "El estudiante con el que contactó le recomienda usar couchsurfing",
                touch4: "Móvil (facebook)",
                feel4: "3",
                con4: "No conoce la página y no sabe si es segura",
                ima4: "cartoon-why.png",
                
               /*** PASO #5: ANALIZA ***/ 
                goal5: "Entra en la web de couchsurfing y le gusta mucho porque ofrece muchas actividades para el viaje.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "Se ha tenido que registrar antes de poder explorar la página.",
                ima5: "cartoon-PChappy.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Consiguie contactar con un anfitrión en Varsovia y llegó a un acuerdo para alojarse.",
                touch6: "Ordenador (reserva OK)",
                feel6: "3",
                con6: "Aunque el perfil del anfitrión está verificado, tiene un poco de miedo por si le deja tirado." +
                    " Además ha tenido que introducir mucha información antes de poder hablar con el anfitrión.",
                ima6: "cartoon-shaking.png",
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



