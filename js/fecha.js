var fechactual= new Date();
var dia= fechactual.getDate();
var mes=fechactual.getMonth()+1;
var año=fechactual.getUTCFullYear();

document.write(dia+"/"+ mes+"/" +año);