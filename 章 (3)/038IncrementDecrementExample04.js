var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o ={
	valueOf:function(){
		return -1;
	}
};

s1++;
s2++;
b++;
f--;
o--;

alert(s1);
alert(s2);
alert(b);
alert(f);
alert(o);