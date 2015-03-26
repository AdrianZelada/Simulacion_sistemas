var table=function(){
	var datos='[{"mes":"Ene","2001 ":"5012","2002 ":"7759","2003 ":"4529","2004 ":"7299","2005 ":"487","2006 ":"4554","2007 ":"309","2008 ":"3269","2009 ":"9831","2010 ":"4537","2011 ":"7412","2012 ":"3980","2013 ":"1650","2014 ":"6495"},{"mes":"Feb","2001 ":"3201","2002 ":"8537","2003 ":"2462","2004 ":"858","2005 ":"4752","2006 ":"7617","2007 ":"1332","2008 ":"836","2009 ":"6117","2010 ":"8805","2011 ":"6755","2012 ":"9738","2013 ":"4903","2014 ":"4199"},{"mes":"Mar","2001 ":"7733","2002 ":"6371","2003 ":"316","2004 ":"2744","2005 ":"4130","2006 ":"4745","2007 ":"9944","2008 ":"4517","2009 ":"9200","2010 ":"252","2011 ":"7686","2012 ":"9031","2013 ":"4690","2014 ":"5098"},{"mes":"Abr","2001 ":"3010","2002 ":"6241","2003 ":"1592","2004 ":"6112","2005 ":"4777","2006 ":"3955","2007 ":"6871","2008 ":"9429","2009 ":"1571","2010 ":"8103","2011 ":"265","2012 ":"7588","2013 ":"6908","2014 ":"6920"},{"mes":"May","2001 ":"7326","2002 ":"1810","2003 ":"1119","2004 ":"5058","2005 ":"8082","2006 ":"1336","2007 ":"7703","2008 ":"2211","2009 ":"5982","2010 ":"7646","2011 ":"6629","2012 ":"5182","2013 ":"7798","2014 ":"4315"},{"mes":"Jun","2001 ":"4212","2002 ":"2488","2003 ":"9313","2004 ":"7123","2005 ":"8629","2006 ":"905","2007 ":"3234","2008 ":"3405","2009 ":"4761","2010 ":"105","2011 ":"2833","2012 ":"6232","2013 ":"8109","2014 ":"2999"},{"mes":"Jul","2001 ":"3820","2002 ":"5016","2003 ":"9820","2004 ":"1145","2005 ":"6727","2006 ":"938","2007 ":"6104","2008 ":"4808","2009 ":"2174","2010 ":"3806","2011 ":"6920","2012 ":"8056","2013 ":"1451","2014 ":"3548"},{"mes":"Ago","2001 ":"3237","2002 ":"9150","2003 ":"7764","2004 ":"7349","2005 ":"1637","2006 ":"7077","2007 ":"4472","2008 ":"266","2009 ":"7882","2010 ":"7607","2011 ":"3571","2012 ":"2643","2013 ":"7612","2014 ":"6305"},{"mes":"Sep","2001 ":"8775","2002 ":"5720","2003 ":"9204","2004 ":"2595","2005 ":"735","2006 ":"9023","2007 ":"3640","2008 ":"7362","2009 ":"9861","2010 ":"9645","2011 ":"2170","2012 ":"2035","2013 ":"3450","2014 ":"8990"},{"mes":"Oct","2001 ":"9992","2002 ":"4802","2003 ":"2538","2004 ":"3228","2005 ":"3951","2006 ":"301","2007 ":"577","2008 ":"5489","2009 ":"7278","2010 ":"4950","2011 ":"5655","2012 ":"5160","2013 ":"2556","2014 ":"9127"},{"mes":"Nov","2001 ":"7703","2002 ":"167","2003 ":"5431","2004 ":"6478","2005 ":"5787","2006 ":"4635","2007 ":"8973","2008 ":"6423","2009 ":"3657","2010 ":"2613","2011 ":"3785","2012 ":"3518","2013 ":"2257","2014 ":"5856"},{"mes":"Dic","2001 ":"0","2002 ":"0","2003 ":"0","2004 ":"0","2005 ":"0","2006 ":"0","2007 ":"0","2008 ":"0","2009 ":"0","2010 ":"58672","2011 ":"60068","2012 ":"53144","2013 ":"58591","2014 ":"12810"}]';
	datos=JSON.parse(datos);	
	var pors=[];

	var content=document.getElementById('content_1');	
	var sum2010=0,sum2011=0,sum2012=0,sum2013=0,sum2014=0
	content.innerHTML=content.innerHTML+block("");	
	for(i=2001;i<=2014;i++){
		content.innerHTML=content.innerHTML+block(i);	
	}	
	/*content.innerHTML=content.innerHTML+block("Totales");*/	
	content.innerHTML=content.innerHTML+'</br></br>';
	for(item in datos){			
		for(obj in datos[item]){
			content.innerHTML=content.innerHTML+block(datos[item][obj]);		
		}	
		var sumMes=parseInt(datos[item]["2010 "])+parseInt(datos[item]["2011 "])+parseInt(datos[item]["2012 "])+parseInt(datos[item]["2013 "])+parseInt(datos[item]["2014 "]);
		/*content.innerHTML=content.innerHTML+block(sumMes);*/		
		content.innerHTML=content.innerHTML+'</br> </br>';
		sum2010=sum2010+parseInt(datos[item]["2010 "]);
		sum2011=sum2011+parseInt(datos[item]["2011 "]);
		sum2012=sum2012+parseInt(datos[item]["2012 "]);
		sum2013=sum2013+parseInt(datos[item]["2013 "]);
		sum2014=sum2014+parseInt(datos[item]["2014 "])

	}		

	/*content.innerHTML=content.innerHTML+block("Totales");	
	content.innerHTML=content.innerHTML+block(sum2010);	
	content.innerHTML=content.innerHTML+block(sum2011);	
	content.innerHTML=content.innerHTML+block(sum2012);	
	content.innerHTML=content.innerHTML+block(sum2013);	
	content.innerHTML=content.innerHTML+block(sum2014);	
	content.innerHTML=content.innerHTML+block(sum2014+sum2013+sum2012+sum2011+sum2010);*/	

	var sum=[sum2010,sum2011,sum2012,sum2013,sum2014];
	for(index in sum){
		for(item in datos){		
			console.log(item);
			pors.push(parseInt(datos[item]["2010 "])/sum[index]);			
			pors.push(parseInt(datos[item]["2011 "])/sum[index]);			
			pors.push(parseInt(datos[item]["2012 "])/sum[index]);			
			pors.push(parseInt(datos[item]["2013"])/sum[index]);			
			pors.push(parseInt(datos[item]["2014"])/sum[index]);			
		}
	}
	console.log(pors);
}



var block=function(text){	
	var Object_block='<div class="block">'+text+'</div>'
	return Object_block;
}