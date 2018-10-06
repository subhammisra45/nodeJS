var rect=require('./rectangle');
function solveRect(l,b){
    console.log("solving for rectangle with l=" + l + "and b=" + b);
    rect(l,b,(err,rectangle)=>{
    if(err)
        {
            console.log("ERROR:"+err.message);
        }
    else{
    console.log("The perimeter of the rectangle is:" + rectangle.perimeter());
    console.log("The area of the rectangle is:" + rectangle.area());
        }
});
    console.log("this statement is after rect() call");
};
solveRect(23,45)
solveRect(0,45)
solveRect(2,5)
solveRect(23,-45)
