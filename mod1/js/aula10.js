$(function(){
	var ex = $('.ex1');
	var ex2 = $('.ex2');
	var button = $(':button'); // Encapsulando diretamente pela tag
	// Um click para apagar e dois para apresentar
	/*button.click(function(){
		ex.fadeOut("slow");
	}).dblclick(function(){
		ex.fadeIn("slow");
	});*/

	// Efeito de transparencia (trabalhando com a opacidade) fadeTo()
	/*button.click(function(){
		ex.fadeTo("slow", 0.5);
	});*/

	// Surgindo e ocultando o elemento com toggle
	/*button.click(function(){
		ex.fadeToggle("slow");
	});*/
	
	// Trabalhando com efeito encadeado (um após o outro)
	/*button.click(function(){
		ex.fadeTo("slow",0.1);
		ex2.fadeTo("slow",0.5);
	});*/

	// Efeito encadeado com callback
	button.click(function(){
		ex.fadeTo("slow",0.1,function(){
			ex2.fadeTo("slow",0.5);
		});
	});
});