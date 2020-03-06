/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.MAF";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Josefina Pérez",
				Photo: "josefina.jpg",
				Quote: "Viajar es vivir",
				Age: 65,
				Occupation: "Celadora jubilada",
				Family: "Divorciada, con dos hijos independientes y 3 nietos",
				Location: "Granada",
				Character: "Le gusta viajar y leer",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Ver a sus hijos y a sus nietos más a menudo", "Aprender alemán para hablar con sus nietos"],
				Frustrations: ["No ve a sus hijos frecuentemente porque viven en otro país", "Aunque se defiende con las nuevas tecnologías, le gustaría manejarse mejor", "Como está divorciada y sus hijos viven en Alemania, a veces se siente sola"],
				Bio: "Es de Granada y ha vivido aquí toda su vida. Hace tres meses que está jubilada; hasta entonces trabajaba de celadora. Se casó con 20 años, con 23 tuvo su primer hijo, y con 27 el segundo. Hace doce años que sus hijos se fueron a trabajar a Alemania y después de visitarlos, descubrió que le gustaba viajar.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Ahora que se que acaba de jubilar, tiene mucho tiempo libre y quiere ocurparlo viajando.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Mario Fernández",
				Photo: "mario.jpg",
				Quote: "La vida, o es una aventura o no es nada",
				Age: 23,
				Occupation: "Estudiante de idiomas",
				Family: "sus padres y su hermana",
				Location: "Granada",
				Character: "Es muy extrovertido, le encanta conocer gente nueva, viajar y conocer otras culturas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Aprender nuevos idiomas.", "Conocer gente de todo el mundo.", "Visitar todos los países de Europa."],
				Frustrations: ["No tiene mucho dinero para viajar.", "Solo puede viajar durante sus vacaciones."],
				Bio: "Es de Jaén y vino a Granada a estudiar Traducción e Interpretación. Vive en un piso de alquiler con otros tres estudiantes. Durante el curso, trabaja como camarero, y ahorra lo que puede para viajar durante las vacaciones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Siempre le ha gustado viajar, y ahora que estudia Traducción e Interpretación además aprovecha sus viajes para aprender idiomas y conocer la cultura del lugar que visita." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])