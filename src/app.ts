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
import axios from "axios"

const form = document.querySelector('form')!
const GOOGLE_API_KEY = "api key";
const addressInput = document.getElementById('address')!as HTMLInputElement


function searchAddressHandler(event: Event){
    event.preventDefault()

    let enteredAddress = addressInput.value
    type GoogleGeocodingResponse = {
        results: {geometry:{location:{lat:number, lng:number}}}[]
        status: 'ok'
    }

    //SEND THIS TO GOOGLE API
    axios.get<GoogleGeocodingResponse >(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredAddress
        )}&key=${GOOGLE_API_KEY}`
      ).then(response =>{
        if(response.data.status != 'ok'){
            throw new Error("could not fetch")
        }
        const cordinates = response.data.results[0].geometry.location
        const map = new google.maps.Map(document.getElementById("map")!, {
            center: cordinates,
            zoom:16

        })

        new google.maps.Marker({position:cordinates, map:map})
      })
   .catch( err =>{
    alert(err.message)
    console.log(err)
   })
}


form.addEventListener('submit', searchAddressHandler)