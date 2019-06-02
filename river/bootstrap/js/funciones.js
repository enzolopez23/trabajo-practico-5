function cargar(div, pagina)
{
	$(document).ready(function() 
	{
		$(div).load(pagina);
	});
}

$(document).ready(function() 
{
	$(".navbar-nav li a").click( function(event) 
	{
		$('.navbar-nav li a').removeClass('active');

		$(this).addClass('active');

    	if (!$(this).parent().hasClass('dropdown'))
        	$(".navbar-collapse").collapse('hide');
	});			
});

