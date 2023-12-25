var checkCL=true;
function pre1()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(3); //  ho tro
nn1.trigger("change");
setTimeout(function(){
var nn2 = $("#precl_Type").data("kendoDropDownList");
nn2.select(1); //  thong tin
nn2.trigger("change");},600);
setTimeout(function(){
var nn3 = $("#precl_Division").data("kendoDropDownList");
nn3.select(1); //  online
nn3.trigger("change");},1200);
setTimeout(function(){
var nn4 = $("#precl_InfoProvide").data("kendoDropDownList");
nn4.select(4); //  HTKT
var nn5 = $("#precl_ResultInfo").data("kendoDropDownList");
nn5.select(2); //  ccttin
},1800);

var nn6 = $("#precl_SupStatus").data("kendoDropDownList");
nn6.select(1);
}
function pre9()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(5); //  sai thong tin
nn1.trigger("change");
setTimeout(function(){
var nn2 = $("#precl_Type").data("kendoDropDownList");
nn2.select(1); //  thong tin
nn2.trigger("change");},600);

setTimeout(function(){
var nn3 = $("#precl_Division").data("kendoDropDownList");
nn3.select(1); //  online
nn3.trigger("change");},1200);
setTimeout(function(){
var nn4 = $("#precl_InfoProvide").data("kendoDropDownList");
nn4.select(4); //  HTKT
var nn5 = $("#precl_ResultInfo").data("kendoDropDownList");
nn5.select(2); //  ccttin
},1800);
var nn6 = $("#precl_SupStatus").data("kendoDropDownList");
nn6.select(1);
}
function pre2()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(3); //  ho tro
nn1.trigger("change");
setTimeout(function(){
var nn2 = $("#precl_Type").data("kendoDropDownList");
nn2.select(2); //  ky thuat
nn2.trigger("change");},600);
setTimeout(function(){
var nn3 = $("#precl_Division").data("kendoDropDownList");
nn3.select(2); //  ha tang
nn3.trigger("change");},1200);
setTimeout(function(){
document.getElementById("precl_CheckList").click();},1800);
}
function pre10()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(5); //  sai thong tin
nn1.trigger("change");
setTimeout(function(){
var nn2 = $("#precl_Type").data("kendoDropDownList");
nn2.select(2); //  ky thuat
nn2.trigger("change");},600);

setTimeout(function(){
var nn3 = $("#precl_Division").data("kendoDropDownList");
nn3.select(2); //  ha tang
nn3.trigger("change");},1200);
setTimeout(function(){
document.getElementById("precl_CheckList").click();},1800);
}
function pre3()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
var nn2 = $("#precl_SupStatus").data("kendoDropDownList");
if(nn1.select() ==0){
nn1.select(1); //  kbm
nn1.trigger("change");
	setTimeout(function(){
nn1.select(0); //  tb
nn1.trigger("change");
document.getElementById("precl_SupDescription").value+= ", ";
},600);
	nn2.select(1);
}
else{
nn1.select(0); //  tb
nn1.trigger("change");
setTimeout(function(){
nn2.select(0);},600);
}
document.getElementById("precl_SupDescription").value+= " " + document.getElementById("precl_Location_Phone").value + " thuê bao";
}
function pre4()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
var nn2 = $("#precl_SupStatus").data("kendoDropDownList");
if(nn1.select() ==1){
	nn1.select(0); //  tb
nn1.trigger("change");
	setTimeout(function(){
nn1.select(1); //  kbm
nn1.trigger("change");
document.getElementById("precl_SupDescription").value+= ", ";
},600);

	nn2.select(1);
}
else{
nn1.select(1); //  kbm
nn1.trigger("change");
setTimeout(function(){
nn2.select(0);},600);
}
document.getElementById("precl_SupDescription").value+= " " + document.getElementById("precl_Location_Phone").value + " không nghe máy";
}
function pre5()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(2); //  ok
nn1.trigger("change");
var nn2 = $("#precl_SupStatus").data("kendoDropDownList");
nn2.select(1);
}
function pre6()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(4); //  rj
nn1.trigger("change");
var nn2 = $("#precl_SupStatus").data("kendoDropDownList");
nn2.select(1);
}
function pre7()
{
var nn1 = $("#precl_Appointment").data("kendoDropDownList");
nn1.select(6); //  cl
nn1.trigger("change");
var nn2 = $("#precl_SupStatus").data("kendoDropDownList");
nn2.select(1);
}
function searchHD()
{
setTimeout(function(){
document.getElementById("precl_Location_Phone").select();
document.execCommand("copy");
if(checkCL){
document.getElementById("btnCheckAllCL").click(); checkCL=false;}
document.getElementById("tblThongTinHoTro").getElementsByTagName("label")[0].firstChild.click();},200);
setTimeout(function(){
document.getElementById("list-group-support").getElementsByTagName("a")[1].click();
document.getElementById("list-group-support").getElementsByTagName("a")[0].click();
},400);
setTimeout(function(){
var a = parent.frames[0].document.querySelectorAll("div[class='col-md-6 col-xs-6 col-sm-6 col-lg-6 input-right']");
document.getElementById("precl_SupDescription").value+= " ONU RX " + a[5].firstElementChild.value + ", ";
document.getElementById("list-group-support").getElementsByTagName("a")[0].click();
},5000);
}
