/**
*	Plugin Estados Cidades
*	Cria duas caixas de seleção listando estado e cidades do Brasil
*	author:adriano barbosa
*	email: b.adrianobarbosa@gmail.com
**/
(function ($){
	$.fn.ufCidades = function(options){
		var settings = $.extend({
			"urlJson":"./data/estados-cidades.json",
			"captionEstados":"Estados",
			"captionCidades":"Cidades",
			"nomeCampoEstado":"estado",
			"nomeCampoCidade":"cidade",
			"defaultMessageEstado":"Selecione um estado!",
			"defaultMessageCidade":"Selecione uma cidade!",
			"selectClasses":"form-control"
		},options);
		var container = $(this);
		$.get(settings.urlJson,function(d){
			$('<label></label>').text(settings.captionEstados).appendTo(container);
			var est = $('<select></select>').attr('name',settings.nomeCampoEstado).addClass(settings.selectClasses).appendTo(container)
			.append($('<option></option>').attr('name',settings.nomeCampoCidade).prop('disabled',true).attr('selected','selected').text(settings.defaultMessageEstado))
			.change(function(){
				cid.empty();
				cid.append($('<option></option>').prop('disabled',true).attr('selected','selected').text(settings.defaultMessageCidade));
				var idx = $(this).find('option:selected').val();
				for (x=0; x<d.estados[idx].cidades.length;x++) {
					cid.append($('<option></option>').text(d.estados[idx].cidades[x]));
				}
			});
			$('<label></label>').text(settings.captionCidades).appendTo(container);
			var cid = $('<select></select>').addClass(settings.selectClasses).appendTo(container);
			for(i=0;i<d.estados.length;i++) {
				est.append($('<option></option>').val(i).text(d.estados[i].nome));
			}
		});		
		return this;
	};
}(jQuery));

