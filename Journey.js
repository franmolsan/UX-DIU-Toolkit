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
				Name: "Josefina",
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
                    " Su hijo le recomienda coachsurfing, para que no esté sola en su viaje.",
                touch3: "Móvil",
                feel3: "3",
                con3: "No conoce coachsurfing y no le suena muy bien. Aun así, como se lo ha recomendado su hijo, le da una oportunidad.",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                goal4: "Busca en su móvil la página de coachsurfing ",
                touch4: "Móvil (navegador web)",
                feel4: "2",
                con4: "Se tiene que registrar antes de buscar alojamiento, y es tedioso rellenar el formulario.",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                goal5: "Una vez entra a la página, consigue buscar anfitriones para su viaje",
                touch5: "móvil (navegador web)",
                feel5: "1",
                con5: "La web le parece un poco confusa, pues hay muchas opciones." + 
                " Además debe seleccionar varios anfitriones porque no todos los días están disponibles." + 
                " Tampoco se fía demasiado de los anfitriones, porque no hay muchos verificados por la plataforma. ",
                ima5: "cartoon-PCangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "No le gusta ni la página ni el servicio, por lo que decide que lo más sencillo es ir a una agencia de viajes",
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
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



