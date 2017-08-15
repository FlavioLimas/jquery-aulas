$(function() {

    ('.titulo').click(function(){
    	// Armazenando o conteudo; primeiro ancestral; procurando a classe. 
    	var conteudo = $(this).parent().find('.conteudo');
    	// Verificando se existe a classe show
    	if(!conteudo.hasClass('show')){
    		$('.caixa').find('.show').slideUp('fast',function(){ // No retorno do fast ele vai setar a classe hide e remover a show no elemento
    			$('this').addclass('hide').removeClass('show');
    		});

            conteudo.slideDown('fast',function(){
                $(this).addClass('show').removeClass('hide');
            });
    	}
    });

});