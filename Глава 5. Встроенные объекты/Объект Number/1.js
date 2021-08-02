var x = -1 * Number.MAX_VALUE
var y = -1 * Number.MAX_VALUE
var z = x + y;
if(z===Number.NEGATIVE_INFINITY)
    document.write("отрицательная неопределенность");
else
    document.write(z);