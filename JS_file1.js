var a=10;
document.write(a);


var o=new Object();
o.name="nivetha";
o.no="25";

document.write("valur is" + o.no + "<br>");

function meth(amt){

this.amount=amt;

}

function forobj (an,na) {

this.name=an;
this.mane=na;
this.meth=meth; // we can assign a method to object ,, but naming shud be same ,eg this.meth=meth,, "meth" shud be same
//document.write();
//document.write();

}

var object1=new forobj("nivi","cbe");
object1.husband="arun";

object1.meth(200);

document.write("list" + "<br>");
document.write(object1.name);
document.write(object1.mane);
document.write(object1.husband);
document.write(object1.amount); // prints 200
	

function callme(m,b){

var a="local";
//alert("thanks for clicking" + a);
var c;

alert("hi" +m);

document.write(m);
c=m+b;


document.write(a + "</br>");
document.write(c);
}

var call2 =function (){
document.write("Helllllllllllo");
};

function validate(){
document.write("validating");
if (document.fd.tb.value == "nive"){
 alert("somboda");
	}

}

document.write("<br>");
var array=[1,2,3,4,5];
document.write(array[4]);


var hashobj=
{
"arun":1,
"nive":2,
"Shrithik":3
};

//perl syntax : foreach(@a){print $_} or foreach my $a (@arr){}  foreach my $key(%hash){print $key;print $hash{key}};

document.write("hash example" + hashobj.arun);

//how to get key alone & value alone
//  for(var key in a) {}
	for(var key in hashobj){
		document.write(key);
		document.write(hashobj[key]);
	}
	
	

