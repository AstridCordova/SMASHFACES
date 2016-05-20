/* Inserta tu código aqui */
$(document).ready(function(){
	$('select').change(function(){
		var select = $('select').val(); 
			alert(select);
		var foto = Math.floor(Math.random()*48) + 1 ;
	if(select=='peru'){
		//peru[0].image
		$('#fotopais').attr('src','fotos/peru/'+ peru[foto].image);
	} else {
		//mexico[0].image ;
		$('#fotopais').attr('src','fotos/mexico/'+ mexico[foto].image);
	}
	});
});
