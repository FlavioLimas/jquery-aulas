$(function(){ // Place holder dinamico
	$('.place').each(function(){
		var place = $(this).attr('title');
		var input = $(this);

		input
		.val(place)
		.css('color','#ccc')
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
	var ex = $('.ex1');
/*
	$('.ev1').focus(function(){ 
		ex.text($(this).attr('title'));
	}).keyup(function(){
		if($(this).val() == 'pontocom'){
			$('.ev2').focus();
		}
	});
	// blur evento similar ao focusout dispara quando vc sai de um campo de formulario
	$('.ev1').blur(function(){
		ex.text("Saida do Campo: "+$(this).attr('name'));
	});
	*/
	// Evento dispara quando há alguma alteração no campo
	$('.ev1').change(function(){
		ex.text("Campo Alterado: "+$(this).val());
	});

	$('.selecionar').click(function(){
		$('.ev4').select(); // Selecionando o conteudo
		$('form').submit(function(){ // Bloqueando o envio do formulario
			return false;
		});
	});
});