// write a program that mocksup a donation database to calculated , the total donated amount

const donations = [
  {
    name: "James",
    amount: 210,
    currency: "Kes",
  },
  {
    name: "Miriam",
    amount: 200,
    currency: "usd",
  },
  {
    name: "Kevin",
    amount: 700,
    currency: "Kes",
  },
  {
    name: "Leonard",
    amount: 450,
    currency: "usd",
  },
  {
    name: "Riz",
    amount: 400,
    currency: "usd",
  },
];


const rate = 129

function calculateTotalDonations(){
   
    let total = 0;

    for(let i = 0; i < donations.length; i++){
          
        let {amount , currency , name} = donations[i]

          if(currency === "Kes"){
              amount = amount/rate
              console.log(`amount contributed by ${name} is ${amount}`)
          }

          total = total + amount
    }

    return total
}

function filterPeopleByCurrency(cur){
     
    const result = []

    for(let i = 0; i < donations.length; i++){
        const {currency} = donations[i]

        if(currency === cur){
            result.push(donations[i])
        }
    }

    return result
}

const total = calculateTotalDonations()


console.log(filterPeopleByCurrency("usd"))

console.log(total)

