let myname: unknown = "tooba";
console.log(myname as string);
console.log((<string>myname).length);

let n: any = 78;
let t = <number>n;
console.log(typeof t);
