$(function(){
	// Variavel global
	var ex = $('.ex1');
	// Ocultando elemento com hide
	$('.ev1').click(function(){
		ex.hide('slow');
	});

	/*$('.ev2').click(function(){
		ex.hide('fast'); // rapido
	});

	$('.ev3').click(function(){
		ex.hide(2000); // time do efeito em milesegundos
	});*/

	// Apresentando elemento com show
	$('.ev2').click(function(){
		ex.show('slow');
	});

	// Apresentando/Ocultando o elemento com toggle
	$('.ev3').click(function(){
		ex.toggle('slow');
	});

	$('.ev4').keyup(function(){
		var texto = $(this).val();

		if(texto == 'hide'){
			ex.hide('slow');
		}
		if(texto == 'show'){
			ex.show('slow');
		}
		if(texto == 'toggle'){
			ex.toggle('slow');
		}
	});
});