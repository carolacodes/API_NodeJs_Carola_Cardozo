//console.log("iniciando programa");

//const suma = (a: number, b: number) => a + b

//const resultado = suma(3, 5);

//console.log(resultado);

//console.log("programa finalizado");


// interface User{
//     id: number;
//     name: string;
// }

// const users: User[] | [] = [//{id: 1, name: "user1"}, {id: 2, name: "user2"}, {id: 3 , name: "user3"}
// ]

//callbacks

/**
 * 
 * @param a
 * @param b
 * @param callback
 * 
 * 
 * function fakeAsync(a: number, b: number, callback: (arg: number) => void) {
    const suma = a + b;
    console.log("inicio de la funcion suma...");

    setTimeout(() => {
        callback(suma);
    }, 2000);
}
 */

/**
 * 
console.log("iniciando programa...");

fakeAsync(3, 5, (resultado) => {
    console.log(' resulatdo: ', resultado)
})
 */

//promesas

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(users.length === 0){
//                 reject(new Error("NO HAY USUARIOS"));
//             }
//             resolve(users);
//         }, 2000)
//     })
// }


//asynawait

// async function gettingUsers(){
//     try{
//         const users = await getUser();

//         console.log(users);

//     }catch(error){
//         console.log(String(error));

//     }
// }

//gettingUsers()

// fetch('https://api.escuelajs.co/api/v1/users')
//     .then((response) => {
//         const result = response.json();
//         return result;
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error)
//     })


//getUser().then((users)=>{
//    console.log(users);
//}).catch((error) => {
//    console.log(error.message);
//})


//middlewares

