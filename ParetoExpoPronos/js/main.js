var v2010=[],v2011=[],v2012=[],v2013=[],v2014=[];
var table=function(){
	var datos='[{"mes":"Ene","2010 ":"54685","2011 ":"52325","2012 ":"36800","2013 ":"11923","2014 ":"48034"},{"mes":"Feb","2010 ":"25936","2011 ":"43199","2012 ":"55234","2013 ":"66139","2014 ":"70537"},{"mes":"Mar","2010 ":"78711","2011 ":"80837","2012 ":"41583","2013 ":"61602","2014 ":"64930"},{"mes":"Abr","2010 ":"73865","2011 ":"46788","2012 ":"44024","2013 ":"80246","2014 ":"36647"},{"mes":"May","2010 ":"41214","2011 ":"95844","2012 ":"55268","2013 ":"91782","2014 ":"40286"},{"mes":"Jun","2010 ":"54002","2011 ":"84891","2012 ":"28965","2013 ":"29704","2014 ":"58446"},{"mes":"Jul","2010 ":"15161","2011 ":"74390","2012 ":"10770","2013 ":"41962","2014 ":"76313"},{"mes":"Ago","2010 ":"48805","2011 ":"57899","2012 ":"19511","2013 ":"94039","2014 ":"24037"},{"mes":"Sep","2010 ":"80048","2011 ":"72750","2012 ":"94875","2013 ":"21631","2014 ":"34351"},{"mes":"Oct","2010 ":"59804","2011 ":"85497","2012 ":"71139","2013 ":"93829","2014 ":"65742"},{"mes":"Nov","2010 ":"97787","2011 ":"35043","2012 ":"61586","2013 ":"53054","2014 ":"26824"},{"mes":"Dic","2010 ":"91873","2011 ":"97057","2012 ":"11715","2013 ":"20837","2014 ":"26760"}]';
	datos=JSON.parse(datos);	
	var pors=[];
	var TotalSum=0;

	var content=document.getElementById('content_1');	
	var sum2010=0,sum2011=0,sum2012=0,sum2013=0,sum2014=0
	content.innerHTML=content.innerHTML+block("");	
	for(i=2010;i<=2014;i++){
		content.innerHTML=content.innerHTML+block(i);	
	}	
	content.innerHTML=content.innerHTML+block("Totales");	
	content.innerHTML=content.innerHTML+'</br></br>';
	for(item in datos){			
		for(obj in datos[item]){
			content.innerHTML=content.innerHTML+block(datos[item][obj]);		
		}	
		var sumMes=parseInt(datos[item]["2010 "])+parseInt(datos[item]["2011 "])+parseInt(datos[item]["2012 "])+parseInt(datos[item]["2013 "])+parseInt(datos[item]["2014 "]);
		content.innerHTML=content.innerHTML+block(sumMes);		
		content.innerHTML=content.innerHTML+'</br> </br>';
		sum2010=sum2010+parseInt(datos[item]["2010 "]);
		sum2011=sum2011+parseInt(datos[item]["2011 "]);
		sum2012=sum2012+parseInt(datos[item]["2012 "]);
		sum2013=sum2013+parseInt(datos[item]["2013 "]);
		sum2014=sum2014+parseInt(datos[item]["2014 "]);

	}		

	content.innerHTML=content.innerHTML+block("Totales");	
	content.innerHTML=content.innerHTML+block(sum2010);	
	content.innerHTML=content.innerHTML+block(sum2011);	
	content.innerHTML=content.innerHTML+block(sum2012);	
	content.innerHTML=content.innerHTML+block(sum2013);	
	content.innerHTML=content.innerHTML+block(sum2014);	
	content.innerHTML=content.innerHTML+block(sum2014+sum2013+sum2012+sum2011+sum2010);	
	TotalSum=sum2014+sum2013+sum2012+sum2011+sum2010

	var sum=[sum2010,sum2011,sum2012,sum2013,sum2014];	
	porcentaje(datos,sum);	
}
var porcentaje=function(datos,sum){
	var i=0;
	var p_anio='';
	var V_2010=[];
	var V_2011=[];
	var V_2012=[];
	var V_2013=[];
	var V_2014=[];		
	for(item in datos){			
		for(obj in datos[item]){			
			if(obj!='mes'){
				p_anio='porcentaje_'+obj;
				datos[item][p_anio]=datos[item][obj]/sum[i];
				i++;	
			}
		}	
		i=0;	
	}		

	for(item in datos){
		V_2010.push(datos[item]['porcentaje_2010 ']);
		V_2011.push(datos[item]['porcentaje_2011 ']);
		V_2012.push(datos[item]['porcentaje_2012 ']);
		V_2013.push(datos[item]['porcentaje_2013 ']);
		V_2014.push(datos[item]['porcentaje_2014 ']);		
	}	


	v2010=V_2010;
	v2011=V_2011;
	v2012=V_2012;
	v2013=V_2013;
	v2014=V_2014;

	console.log(v2010);

	V_2010.sort();
	V_2011.sort();
	V_2012.sort();
	V_2013.sort();
	V_2014.sort();

	console.log('__________');

	console.log(v2010);
	
	console.log('__________');

	var content_2=document.getElementById('content_2');
	content_2.innerHTML=content_2.innerHTML+'</br></br>';
	content_2.innerHTML=content_2.innerHTML+'</br></br>';
	content_2.innerHTML=content_2.innerHTML+block('');
	content_2.innerHTML=content_2.innerHTML+block('Mes 1');
	content_2.innerHTML=content_2.innerHTML+block('Mes 2');
	content_2.innerHTML=content_2.innerHTML+block('Mes 3');
	content_2.innerHTML=content_2.innerHTML+'</br></br>';
	V_Total=[V_2010,V_2011,V_2012,V_2013,V_2014];
	var x=0;		
	for(i=2010;i<2015;i++){	
		content_2.innerHTML=content_2.innerHTML+block(i);
		var anio='porcentaje_'+i+' ';		
		for(j=0;j<3;j++){			
			var mess=search_num(datos,V_Total[x][j],anio);	
			content_2.innerHTML=content_2.innerHTML+block(mess);
		}	
		content_2.innerHTML=content_2.innerHTML+'</br></br>';
		x++;
	}	

	var ok=document.getElementById('ok');
	ok.onclick=function(){
		var v_generado;
		var dato=document.getElementById('gestion').value;		
		v_generado=Array_for_year(datos,'porcentaje_'+dato+' ').join(';');
		var graph = new BAR_GRAPH("hBar");
		graph.values = v_generado;
		graph.legend = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
		var content_gr=document.getElementById('graf');
		content_gr.innerHTML=graph.create();
	}	
}


var block=function(text){	
	var Object_block='<div class="block">'+text+'</div>'
	return Object_block;
}

var search_num=function(datos,num,text){
	for(item in datos){							
		if(datos[item][text]==num){
			return datos[item]['mes'];
		}
	}	
	return "xxx";
}	

var Array_for_year=function(datos,text){
	var result=[];	
	for(item in datos){
		result.push(datos[item][text]);
	}	
	return result;

}
