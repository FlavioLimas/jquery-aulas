$(function(){
	// Menu flutuante no topo da pagina
	
	var nav = $('.menu'); // Encapsulando a class html
	/*Pegando o scroll da janela ate uma determinada posição e setando uma configuração css*/
	$(window).scroll(function(){ 
		/*Se o menu tiver heigth = 173 px ele irá adicionar a class se não irá remover a classe*/
		var topo = $(window).scrollTop();
		var altura_header = $('.topo').height(); // Pegando altura do header
		if(topo >= altura_header){
			nav.addClass("menu-fixo");
			nav.fadeTo("flash", 0.6);

		}if(topo <= altura_header){
			nav.removeClass("menu-fixo");
			nav.fadeTo("flash", 1);
		}
		/*location.reload();*/
		/*location.reload(forceGet);*/
	});
});