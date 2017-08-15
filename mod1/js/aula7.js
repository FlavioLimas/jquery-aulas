$(function(){
	// Configurando place holder para cada classe
	$('.place').each(function(){
		var place = $(this).attr('title');
		var input = $(this); // pegando o input que estiver com a classe place

		input
		.val(place)
		.css('color', '#ccc')
		.focusin(function(){
			input.css('color','#000');
			if(input.val() == place){
				input.val('');
			}
		})
		.focusout(function(){
			if(input.val() == ''){
				input.val(place);
				input.css('color','#ccc');
			}
		});
	});

	// Alimentando um elemento com texto digitado em outro (Dinamicamente)
	var ex = $('.ex1');

	/* A ultima tecla não é replicada
	$('.key').keypress(function(){
		ex.text($(this).val());
	});
	

	$('.key').keydown(function(){
		ex.text($(this).val());
	});
	*/

	// Tempo real
	$('.key').keyup(function(){
		ex.text($(this).val());
	});
});