var a, b, c, d, D, x1, x2;

a = prompt('type a' ,a);
b = prompt('type b' ,b);
c = prompt('type c' ,c);
D = b * b - 4 * a * c;
d= Math.sqrt(D);
if (D >=0) 
{
x1= (-b + d) / 2 * a;
x2= (-b - d) / 2 * a;
alert(x1+" "+x2);
}
else
{
alert('no solv');
}

document.write("x1="+x1+"<br>");
document.write("x2="+x2+"<br>");
document.write(a+"x<sup>2</sup>+"+b+"x+"+c+"=0");