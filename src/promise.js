// let a = 10;

// let p = new Promise((resolve, reject) => {
//     if (a > 0) {
//         let result = Math.sqrt(a);
//         resolve(result);
//     }
//     else {
//         reject('Input only positive numbers!')
//     }
// });

// console.log(p, 'p')

// p.then((res) => {
//     console.log(res, 'res1')
//     return res

// })
//     .then((res) => {
//         console.log(res, 'res2')
//     })
//     .then((res) => {
//         console.log(res, 'res3')
//     })
//     .catch((error) => {
//         console.log(error, 'error')
//     })




// function sqrt(num, callback) {
//     setTimeout(() => {
//         if (typeof num !== 'number') {
//             throw new Error('Input only numbers')
//         }

//         if (num < 0) {
//             throw new Error('Input only positive numbers')
//         }
//          let sqr = Math.sqrt(num)
//         callback(sqr)

//     }, 1000)
// }

// function sum(a,b, callback) {
//     setTimeout(() => {
//         callback(a+b)
//     },2000)
// }


// sum(20, 30, (result) =>  {
//     console.log('result', result)
//     sqrt(result, () => {

//     })
// })

// sqrt(100, (res) => {
//     let s = res/2

//     sum(s, 50, (summary) => {
//         console.log(summary)
//     })
// })
//callback hell

// console.log('start')

// sqrt(100)
// sum(20,30)
// console.log('end')



//var 1

const newPost = {
    title: 'as as as ass a',
    content: 'asdasd asasnasdjsa'
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(newPost)
})
.then((result) => {
   return result.json()
})
.then((posts) => {
    console.log(posts);
})

//var2
// async function getPosts() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
//     console.log(res)
//     const posts = await res.json();

//     console.log(posts)
// }

// getPosts()