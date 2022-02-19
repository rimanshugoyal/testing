// JavaScript Document

$(document).ready(function(){
$("#bjfnsv_lgfrm").on("submit",(function(e){
e.preventDefault();
$.ajax({
url: "../../bkld/bjfnv_apptentry.php",
type: "POST",
data:  new FormData(this),
contentType: false,
cache: false,
processData:false,
success: function(data)
	{ 
if(data == "success" )
{ 
  window.location.href = '../../dashboard';
}
else {
$("#usrpwd").css("border","1px solid #dc3545");
	$("#frm_shower").html(data);

}
},
error: function(){} 	        
});
}));
});
