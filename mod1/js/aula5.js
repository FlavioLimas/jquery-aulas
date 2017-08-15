$(function(){
	// Função que pega o erro e altera a imagem 
	/*$('img').error(function(){
		$('img').attr("src","../img/error.jpg");
	});
	*/
	// Função que pega o erro, apresenta mensagem e altera a imagem
	/*$('img').error(function() {
		var imagem = $(this).attr("src");
		alert('Imagem ' + imagem + ' Indisponível!');
		$('img').attr("src","../img/error.jpg");
	});*/
	// Função que seta a imagem com o tamanho da pagina
	// $('img').width($(window).width()).height($(window).height());

	// Pegando o tamanho da janela
	/*$(window).resize(function() {
		// Função que seta a imagem com o tamanho da pagina
		$('img').width($(window).width()).height($(window).height());
	});*/
	// Trabalhando com a scroll - Ao rolar a imagem aplica o efeito fadeOut
	/*$(window).scroll(function() {
		$('img').fadeOut('1000'); imagem saindo com efeito
	});*/
	// Encapsulando o body
	$('body').css("height","5000px");
	
	/*$(window).scroll(function() {
		var topo = $(window).scrollTop();
		alert(topo);
	});*/

	$(window).scroll(function() {
		var topo = $(window).scrollTop();
		if (topo>400) {
			$('img').fadeOut('1000');
		} else {
			$('img').fadeIn('1000');
		}
	});
});