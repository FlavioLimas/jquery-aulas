$(function(){
	// Variavel global
	var ex = $('.ex1');

	// Evento click
	$('.ev1').click(function(){
		$(this).css("background","#ccc");
		ex.text("Você Clicou!")
	});

	// Evento duplo click
	$('.ev2').dblclick(function(){
		$('this').css("background","#ccc");
		ex.text("Você deu dois Cliques!");
	});

	// Evento de foco
	$('.ev3').focusin(function(){
		$(this).css("background","#ccc");
		ex.text("Você deu foco!");
	}).focusout(function(){
		$(this).css("background","#000");
		ex.text("Você tirou o Foco!");
	});

	// Evento over 
	$('.ev4').hover(function(){
		$(this).css("background","#ccc");
		ex.text("Você Passou o Mouse!");
	});

	// Evento de clique e solte
	$('.ev5').mousedown(function(){
		$(this).css("background","#ccc");
		ex.text("Você Apertou o Botão do Mouse!");
	}).mouseup(function(){
		$(this).css("background","#000");
		ex.text("Você Soltou o Botão do Mouse!")
	});

	// Contador de evento quando mouse passa por cima; OBS: Filhos desse elemento também são computados a partir desse evento
	var a = 0;
	$('.ev6').mouseenter(function(){
		a +=1;
		ex.text("Entradas do Mouse: " +a);
	}).mouseout(function(){
		ex.text("Saida do Mouse");
	});

	// Contador de evento de over de elemento OBS: Filhos desse elemento também são computados a partir desse evento
	var b = 0;
	$('.ev7').mouseover(function(){
		b +=1;
		ex.text("Mouse sob elemento: "+b);
	}).mouseleave(function(){
		ex.text("Mouse fora do elemento");
	});

	$('.ev8').mousemove(function(move){
		var localx = move.pageX;
		var localy = move.pageY;

		ex.text("Movimento X: "+ localx + " - Movimento Y: "+localy);
	});
});