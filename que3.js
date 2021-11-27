function paintWall(l, i, p) {
    
    var areaOfWall = l * p;
    return n/areaOfWall;
}

var l = 4;
var i = 6;
var p = 8;

var totalWallPaint = paintWall(l, i, p);

if (totalWallPaint > 0) {
    console.log('total wall painted is --->' + totalWallPaint);
}
else {
    console.log('You need to go shop for buy more paint');
}