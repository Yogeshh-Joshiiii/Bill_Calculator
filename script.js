/*
<== APP TIP CALCULATOR ==>
these are the 3 functions you must use :
========================================
calculateBill()
increasePeople()
decreasePeople()
*/
/*
DIV's ID's you're gonna need access to
========================================
'billTotalInput' = user input for bill total
'tipInput' = user input for tip
'numberOfPeople' = current number of people you're splitting the bill
'perPersonTotal' = Total Rs value owed per person
*/
const billInput=document.getElementById('billTotalInput')
const tipTotal=document.getElementById('tipInput')
const numberOfPeopleD=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')
let numberOfPeople=Number(numberOfPeopleD.innerText)


const calculateBill=()=>{
    //get the value from user input and convert it into a number
    const bill=Number(billInput.value)

    // get the tip from user and convert it into percentage
    const tipP=Number(tipTotal.value)/100

    //get the total tip amount
    const tipAmount=bill*tipP

    //get the total amount 
    const totalAmount=bill+tipAmount

    // calculate the per person total amount each
    const perPerson=totalAmount / numberOfPeople

    //update the perPersonTotal and display it
    perPersonTotal.innerText= `₹${perPerson.toFixed(2)}`
}
const increasePeople=()=>{
    //increase the number of people
    numberOfPeople+=1

    // display it on DOM
    numberOfPeopleD.innerText=numberOfPeople

    // calculate the bill based on number of people
    calculateBill()

}
const decreasePeople=()=>{
    if(numberOfPeople<=1){
        alert('hey you cannot have less than 1 person !');
        throw 'Hey, user wants to input wrong information';
        return
    }
    numberOfPeople-=1
    numberOfPeopleD.innerText=numberOfPeople
    calculateBill()
}
