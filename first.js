let a = [1,2,3,4,5];
let b = {
    a:10,
    b:10
}
let c = [
    {
        a:10,
        b:10
    },
    {
        a:10,
        b:10
    }
]

// a.push(6);
// console.log(a);
// a.pop();
// console.log(a);

// let i=0;
// while(i<a.length){
//     console.log(a[i]);
//     i++;
// }


let x = [1,2,3,4,5,6,7,8,9,10];
// for(let i =0; i<x.length;i++){
//     if(x[i]%2 == 0){
//         console.log(x[i]);
//     }
// }

for(let i=0;i<x.length;i++){
    let flag =0;
    for(let j =0;j<x[i];j++){
        if(x[i]%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(x[i]);
    }
}
