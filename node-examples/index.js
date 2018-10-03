var rect=require('./rectangle');
function solveRect(l,b){
    console.log("solving for rectangle with l=" + l + "and b=" + b);
    if (l<=0||b<=0)
        {
            console.log("Rectangle dimension should be greter than zero");
        }
    else{
    console.log("The perimeter of the rectangle is:" + rect.perimeter(l,b));
    console.log("The area of the rectangle is:" + rect.area(l,b));
    
    }
}
solveRect(23,45)
solveRect(0,45)
solveRect(2,5)
solveRect(23,-45)
