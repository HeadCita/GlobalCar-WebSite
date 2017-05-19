/**
 * Created by joseph on 12/04/17.
 */
"use strict";
class PageController{
	getHome(req, res, next){
		res.render('home',{
			title: "Global Car: Escuela de manejo para obtener tu brevete.",
			description: "Global Car es tu mejor opción como escuela de manejo y te brinda asesoramiento total para el trámite de tu brevete."
		});
	}
	getUs(req, res, next){
		res.render('nosotros',{
			title: "Global Car| Nosotros",
			description: "Somos una empresa especializada en ensearte a manejar."
		});
	}
	//----COURSES-->
	getCursoNuevoAi(req, res, next){
		res.render('cursos/nuevos-ai',{
			title: "Global Car | Brevetes AI",
			description: "El curso con el que debes empezar para aprender a conducir y obtener tu brevete."
		});
	}
	getCursoRecategorizacion(req, res, next){
		res.render('cursos/recategorizacion', {
			title: "Global Car | Recategorización",
			description: "Asciende de categoría con este curso."
		});
	}
	getCursoSoloManejo(req, res, next){
		res.render('cursos/solo-manejo',{
			title: "Global Car | Sólo manejo",
			description: "Aprende a conducir como un profesional."
		});
	}
	getCursoManejoDefensivo(req, res, next){
		res.render('cursos/manejo-defensivo', {
			title: "Global Car | Manejo Defensivo",
			description: "Capacítate con los mejores, aprende todo lo necesario para conducir seguro."
		});
	}
	getCursoCamioneta(req, res, next){
		res.render('cursos/camioneta', {
			title: "Global Car | Camioneta 4x4",
			description: "Aprende a conducir camionetas 4x4 como los mejores."
		});
	}
	//----CATEGORIES-->
	getCategoryAi(req, res, next){
		res.render('categories/ai', {
			title: "Global Car | Categoría AI",
			description: "Primera categoría de brevetes."
		});
	}
	getCategoryAiia(req, res, next){
		res.render('categories/aiia', {
			title: "Global Car | Catgoría AIIa",
			description: "Aprende sobre la categoría AIIa."
		});
	}
	getCategoryAiib(req, res, next){
		res.render('categories/aiib', {
			title: "Global Car | Catgoría AIIb",
			description: "Aprende sobre la categoría AIIb."
		});
	}
	getCategoryAiiia(req, res, next){
		res.render('categories/aiiia', {
			title: "Global Car | Catgoría AIIIa",
			description: "Aprende sobre la categoría AIIIa."
		});
	}
	getCategoryAiiib(req, res, next){
		res.render('categories/aiiib', {
			title: "Global Car | Catgoría AIIIb",
			description: "Aprende sobre la categoría AIIIb."
		});
	}
	getCategoryAiiic(req, res, next){
		res.render('categories/aiiic', {
			title: "Global Car | Catgoría AIIIc",
			description: "Aprende sobre la categoría AIIIc."
		});
	}
	getContacto(req, res, next){
		res.render('contacto', {
			title: "Global Car | Contacto",
			description: "Contáctanos y decide por tu brevete!."
		});
	}

	getGaleria(req, res, next){
		res.render('galery', {
			title: "Global Car | Galería",
			description: "Ellos ya saben conducir, solo faltas tu!"
		});
	}
}

module.exports = PageController;