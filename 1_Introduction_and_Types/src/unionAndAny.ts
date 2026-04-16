// ! Unions -> you can provide dataType that it can be either String | undefined | number or many more

// A subscripition can be number 1 or "1M" like this
let subs : string | number; //union
subs = 1 //both are correct
subs = "1 Million" //both are correct

// ? You can also make your type of value which only can be assign to the variable

let apiRequestStatus: "success" | "pending" | "error" = "pending" //union

apiRequestStatus = "success"

let airCraftSeat : "aisle"|"middle"| "window" = "aisle"
airCraftSeat = "window"

// ! Any -> it is most flexible but most dangerous dataType
// ? It allows u to provide anything to the variable which should be avoided in typescript

let data: any; //avoid it

data = "string" //string
data = 42 //number
data = true //boolean
data = [1,2,3] //array
data = { //object
    data: "1"
}
// Another example
let orders = ["99", "199", "249", "299", "499"]
let currentOrder; // Got Type Infered to any

for(let order of orders){
    if(order === "199"){
        currentOrder = order
    }
}
console.log(currentOrder)

