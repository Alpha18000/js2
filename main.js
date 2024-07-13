let num__one = +prompt("please enter firstnumber!");
let num__two = +prompt("please enter secondnumber!");
let num__third = +prompt("please enter thirdnumber!");
if(num__one>num__two && num__one>num__third){
    document.write(`<h1>firstnumber is the biggest number beacuace its ${num__one}</h1>`);
}
else if(num__two>num__one && num__two>num__third){
    document.write(`<h1>secondnumber is the biggest number beacuace its ${num__two}</h1>`);
}
else if(num__third>num__one && num__third>num__two){
    document.write(`<h1>thirdnumber is the biggest number beacuace its ${num__third}</h1>`);
}
else if(num__one===num__two && num__one===num__third && num__two===num__third){
    document.write(`<h1>all equal</h1>`);
}
else{
    document.write(`<h1>Unvaliable</h1>`);
}