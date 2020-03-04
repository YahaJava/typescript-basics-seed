let a =1;
let b:number = 2;

function doSum(a,b): number{
    return a+b;
}

function error():never {
    throw new Error();
}

let man:string = 'andrew';
function setMan(m:'leha'|'anton') {
    man = m;
}

setMan('anton');
console.log(man);