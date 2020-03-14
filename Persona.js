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
				Quote: "Cuanto más hacemos, más podemos hacer",
				Age: 65,
				Occupation: "Celadora jubilada",
				Family: "Divorciada, con dos hijos independientes y tres nietos",
				Location: "Granada",
				Character: "Le gusta viajar, leer. Es muy activa y le gusta salir con sus amigas.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar.", "Ver a sus hijos y a sus nietos más a menudo.", "Aprender alemán para hablar con sus nietos."],
				Frustrations: ["No ve a sus hijos tanto como le gustaría porque viven en otro país ", "Como está divorciada y sus hijos viven en Alemania, a veces se siente sola, y le preocupa su futuro." ],
				Bio:"Nació en Granada y ha vivido aquí toda su vida. Es hija única, sus padre murió hace diez años y su madre hace siete años. Lleva tres meses jubilada; hasta entonces trabajaba de celadora en un hospital. Se casó con 20 años, con 23 tuvo su primer hijo " +
				    "y con 27 el segundo. Se divorció con 48 años. " + 
					"Su hijo mayor estudió arquitectura y su hijo pequeño estudió ingeniería aeroespacial. Despues de terminar la carrera, ambos se fueron a trabajar a Alemania, donde se han casado y han tenido hijos. " +
					"Josefina los ha visitado todos los años desde que se fueron, hace ya 15 años. Tras estas visitas, se ha despertó su interés por los viajes: desde entonces, ha ido a Londres, Viena, París, Roma, Milán, Florencia, Praga y Cracovia. " +
					"Antes viajaba con sus hijos, pero ahora que se han asentado y son padres, ya no puede viajar con ellos. Sus dos úlitmos viajes (a Praga y a Cracovia) los ha realizado sola, y le ha gustado la experiencia. " +
					"Después de divorciarse, perdió el contacto con su exmarido. Tuvo otras dos parejas pero no conectó con ninguno. " +
					"Tiene muchas amigas con las que queda casi diariamente; es parte de asociaciones de vecinos y de un club de lectura. También está apuntada a clases de Alemán. " +
					"Lleva diez años apuntada a un gimnasio, va todos los lunes y jueves a clase de yoga, y los martes y viernes a natación. " +
					"Ha aprendido a utilizar su teléfono y las redes sociales para mantener el contacto con su familia. Utiliza Skype, Whatsapp y Facebook frecuentemente. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
				Contextos: "Ahora que se que acaba de jubilar, tiene mucho tiempo libre y quiere viajar más. Lleva tres años en clases de Alemán. " +
				"También sabe defenderse en inglés. " +
				"Hace yoga y natación a menudo, para mantenerse en forma. Utiliza las redes sociales desde su móvil para hablar con su familia. " +
				"Forma parte de un club de lectura. Su género literario favorito es la novela, especialmente la novela histórica",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
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
				Character: "Es muy extrovertido, le encanta conocer gente nueva, viajar , conocer otras culturas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Aprender nuevos idiomas.", "Conocer gente de todo el mundo.", "Visitar todos los países de Europa."],
				Frustrations: ["No tiene mucho dinero.", "Solo puede viajar durante sus vacaciones.", "Haber dejado de tocar el piano."],
				Bio: "Es de Jaén y vino a Granada a estudiar Traducción e Interpretación. Los idiomas que está aprendiendo son alemán, francés e italiano." + 
				"Vive en un piso de alquiler con otros tres estudiantes. Durante el curso, trabaja como camarero, y ahorra lo que puede para viajar durante las vacaciones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
				Contextos:   "Siempre le ha gustado viajar, y ahora que estudia Traducción e Interpretación además aprovecha sus viajes para aprender idiomas y "
				+ "conocer la cultura del lugar que visita. En su tiempo libre, practica padel con su grupo de amigos. Su padre se llama Roberto, tiene 48 años y trabaja de cocinero,"
				+ "su madre se llama María, tiene 47 años y trabaja en una farmacia y su hermana se llama Laura, tiene 19 años y es estudiante de Derecho. Hace unos años, " 
				+ "aprendió a tocar el piano pero lo dejó, ya que tuvo que irse a estudiar fuera. Su relación con sus padres es bastante buena y cada dos fines de semana vuelve a su casa "
				+ "para estar con ellos. Mario va al gimnasio con un compañero que conoció allí 4 días a la semana. No le gusta salir mucho de fiesta y solo sale unas cuantas veces"
				+ "al año.",
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