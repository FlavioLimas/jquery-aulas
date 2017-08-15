$(function(){
    // Pegando o id slide e seu primeiro filho e tornando visivel
	$('#slide img:eq(0)').addClass('ativo').show();

    var texto = $(".ativo").attr("alt");
    $('#slide').prepend("<p>"+texto+"</p>");
    setInterval(slide,3000); /*Setando intervalo*/

    function slide(){
    	/*Se houver um proximo elemento ou tamanho*/
    	if($('.ativo').next().size()){
            /*Na classe ativo removendo a imagem; removendo a classe ativo; passar para proxima; apresentar a proxima imagem; apresenta para usuário; adicionar a classe ativo*/
    		$('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
    	}else{
    		/*Se não ira fazer o fade out; remover a classe*/
    		$('.ativo').fadeOut().removeClass("ativo");
    		/*Ativando a visualização da primeira imagem; adicionando a classe ativo*/
    		$('#slide img:eq(0)').fadeIn().addClass("ativo");
    	}
        var texto = $(".ativo").attr("alt");
        $('#slide p').hide().html(texto).delay(500).fadeIn();
    }
});