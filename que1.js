function volumeOfCylinder(height, radious) {
    
    return (22 / 7) * radious * radious * height;
}
function surfaceAreaOfCylinder(height, radious) {
    return (2 * (22 / 7) * radious * height) + (2 * (22 / 7) * radious * radious);
}
let cylinder = {
    "height": 20,
    "radious":5
}

var volume = volumeOfCylinder(cylinder.height, cylinder.radious);
var surfaceArea = surfaceAreaOfCylinder(cylinder.height, cylinder.radious);
console.log(volume,surfaceArea);