//template literal

// let name = `John`;
// let surname = `Doe`
// let age=23


// let message = 'Hello I am'+name+' '+surname+' '+' ' +'I am '+age;

// let message = `Hello I am ${name} ${surname} I am ${age}`


// console.log(message, 'message')

// array destructuring

// let arr = [5,6,7,8]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let [a,b,c] = arr;

// console.log(a,b,c)

// object destructuring

// let user = {
//     name: 'Adam',
//     surname: 'Smith',
//     age: 45
// }

// let surname = user.surname

//console.log(surname, 'surname')

//let {surname} = user

// let {name,surname,age} = user


// console.log(surname,'surname')
// console.log(name, 'name')
// console.log(age, 'age')



// let dimentions = {
//     width: 150,
//     height: 200,
// }



// function getArea({width, height}, unit) {
//      let {width, height} = obj

//     return `${width*height} sq ${unit}`
// }

// console.log(getArea(dimentions, 'sm'))


// function sum(...numbers) {
//    //let sum = 0;
//    return numbers.reduce((sum, num) => {
//        return sum+num;
//    })
// }

// const sum = (...numbers) => numbers.reduce((sum,num) => sum+num)


// console.log(sum(3,4,5,5,6,7,4,5,7,8,9,12,3,3,5,3,4))


// let a1 = [1,2,45]
// let b1 = [3,4,76]

// let c1 = a1.concat(b1)


