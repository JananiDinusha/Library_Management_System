function MyFunction(){
	var num=document.getElementById("textup").value;
	var num1=document.getElementById("textin").value;
	var number=num>num1;
	if(number==1){
		alert(num+" is the largest number.");
	}
	else{
		alert(num1+" is the largest number.");
	}
}