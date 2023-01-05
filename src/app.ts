// import { Product } from './product.model';
// import 'reflect-metadata';
// import { plainToClass } from 'class-transformer';
// import{validate} from 'class-validator'


// const products = [
//    {title: 'A carpet', price: 654.999} ,
//     {title: "deos", price: 76}
// ]

// const newProd = new Product('', -555)
// validate(newProd).then(err =>{
//     if(err.length > 0){
//       alert('there was errors')
//     }
//     console.log(newProd.getInformation())
// })


// // const p1 = new Product('a book', 12.99)

// // const loadedProducts = products.map((product) =>{
// // return new Product(product.title, product.price)
// // })

// const loadedProducts = plainToClass(Product, products)

// for( const Prod of loadedProducts ){
//     console.log(Prod.getInformation())
// }

// // console.log(p1)


//FORM

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')!as HTMLInputElement


function searchAddressHandler(event: Event){
    event.preventDefault()

    let enteredAddress = addressInput.value

    //SEND THIS TO GOOGLE API
    
}


form.addEventListener('submit', searchAddressHandler)