

let products = [
  {
    id : 1,
    name : "Mango",
    price : 300,
  },
  {
    id : 2,
    name : "Banana",
    price : 500,
  },
  {
    id : 3,
    name : "Orange",
    price : 800,
  },
  {
    id : 4,
    name : "Pineapple",
    price : 100,
  },
  {
    id : 5,
    name : "Watermalon",
    price : 900,
  },
]

let selec = document.querySelector("#select")
let quan = document.querySelector("#qanti")
let formm = document.querySelector("#inpform")
let bttn = document.querySelector("#bb")
let tb = document.querySelector("#rows")
let totals = document.querySelector("#total")

let calcu = () =>{
  let costs = document.querySelectorAll("#cost")
  totals.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0)
}

let del=(event)=>{
  alert("Are u sure to delete this item")
  event.target.parentElement.parentElement.remove()
  calcu( )

  
  
}

products.forEach(product =>{
  let newOptionj = new Option (product.name,product.id)
  selec.append(newOptionj)
})

formm.addEventListener("submit",(event)=>{
event.preventDefault()
let currentProduct = products.find(product => {
  return selec.value == product.id
})



let cost = currentProduct.price * quan.value

let trr = document.createElement("tr")

trr.innerHTML = `

         <td>${currentProduct.name}<h6 onclick=del(event)>Delete</h6></td>
         <td class="text-end">${currentProduct.price}</td>
         <td class="text-end">${quan.value}</td>
         <td class="text-end" id ="cost">${cost}</td>

`
tb.append(trr)


calcu()


})






