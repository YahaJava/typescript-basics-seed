
console.log('HelloTypeScript!');

const users = [{name: 'andrew', surname:'yahovskiy'},{name: 'leha', surname:'gfdgd'}];

const mappedUsers = users.map(user => user.surname.charAt(1));

console.log(mappedUsers);

const user ={
    name: "afsd",
    getName: () => user.name,
}

console.log(user.getName());

function multi(a,b,c=2):number {
    return a*b*c;
}

console.log(multi(3,1));
console.log(multi(3,1));

function sumAll(...arr) {
    console.log(arguments[2]);
    return arr.reduce((prev, next) =>prev + next)
}

const sum = sumAll(1,3,4,5,6);

console.log(sum);

const mas1 = ["1","2"];

const mas2 = ["3","4","5"];

const mas3 = [mas1,mas2];
console.log(mas3);

const mas4 = [...mas1,...mas2];
console.log(mas4);

