var oki=document.getElementById('ok');
console.dir(oki);
oki.onclick=function(e){
	var lam=document.getElementById('lam').value;
	var new2=document.getElementById('new').value;


	var lam_uni=document.getElementById('lam_uni');
	var new2_uni=document.getElementById('new2_uni');


	if(lam_uni==1){
		lam=lam/24;
	}
	if(new2_uni==1){
		new2=new2/24;
	}
	if(lam_uni==3){
		lam=lam*60;		
	}
	if(new2_uni==3){
		new2=new2*60;
	}
	if(lam_uni==4){
		lam=lam*3600;
	}
	if(new2_uni==4){
		new2=new2*3600;
	}

	var wq=lam/(new2*(new2-lam));
	var lq=lam*wq;
	var ws=wq+(1/new2);
	var ls=lam*ws;
	//siempre muestra en horas

	var result_uni_wq=document.getElementById('result_uni_wq').value;
	var result_uni_ws=document.getElementById('result_uni_ws').value;
	var text1="";
	var text2="";

	if(result_uni_wq==1){
		wq=wq/24;		
		text1="Cliente/Dia";
	}
	if(result_uni_wq==2){			
		text1="Cliente/Hora";
	}
	if(result_uni_wq==3){
		wq=wq*60;		
		text1="Cliente/Minuto";
	}
	if(result_uni_wq==4){
		wq=wq*3600;		
		text1="Cliente/Segundo";
	}	

	if(result_uni_ws==1){
		ws=ws/24;				
		text2="Cliente/Dia";
	}
	if(result_uni_ws==2){			
		text2="Cliente/Hora";
	}
	if(result_uni_ws==3){
		ws=ws*60;					
		text2="Cliente/Minuto";
	}
	if(result_uni_ws==4){
		ws=ws*3600;				
		text2="Cliente/Segundo";
	}	

	content.innerHTML="Wq: "+wq+"<br>Lq: "+lq+"<br>Ws: "+ws+"<br>Ls: "+ls+"<br>";	
	content.innerHTML=content.innerHTML+"Unidades Wq :"+text1+"<br>";
	content.innerHTML=content.innerHTML+"Unidades Ws :"+text2;

}