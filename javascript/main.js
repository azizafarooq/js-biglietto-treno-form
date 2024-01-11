
const genderInput = document.getElementById('user-age');
const kmInput = document.getElementById('user-km');
const generatore = document.getElementById('button-genera');
const ticketPrice = document.getElementById('ticket-price');

generatore.addEventListener('click', function(){
    const km = kmInput.value;
    console.log(km);

    const age =genderInput.value;
    console.log(age);

    const priceKm = 0.21;
    const prezzoBase = km * priceKm;
    console.log(prezzoBase);

    let discount = 0;
    if (age == 'minorenne'){
        discount = 20;

    } else if ( age == 'over-65'){
        discount = 40;

    } else {
        console.log(prezzoBase);
    }

    const discountEur = prezzoBase * discount / 100;
    console.log(discountEur);

    const finalPrice = prezzoBase - discountEur;

    const priceFinalText = "Il prezzo del tuo biglietto è £" + finalPrice.toFixed(2);
    console.log(priceFinalText);
})





/*const prezzoBiglietto = document.getElementById("prezzo-biglietto");

const utenteKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(utenteKm);

const utenteEtà = parseInt(prompt("Quanti anni hai?"));
console.log(utenteEtà);

const result = utenteKm * 0.21;
console.log(result);

const finalResult = result.toFixed(2);

if (!isNaN(utenteEtà) && !isNaN(utenteKm)){
    if (utenteEtà < 18) {
        const discountPerc= 20;
    
        const discount = result * discountPerc / 100;
        console.log(discount);
    
        const price = result - discount;
       
        const finalPrice =price.toFixed(2);
        console.log(finalPrice);
    
        prezzoBiglietto.innerText = "Il prezzo del tuo biglietto è " + finalPrice;
    } else if (utenteEtà >= 65) 
    {
        const discountPerc= 40;
    
        const discount = result * discountPerc / 100;
        console.log(discount);
    
        const price = result - discount;
        
        const finalPrice =price.toFixed(2);
        console.log(finalPrice);
    
        prezzoBiglietto.innerText = "Il prezzo del tuo biglietto è " + finalPrice;
    } else {
        prezzoBiglietto.innerText = "Il prezzo del tuo biglietto è " + finalResult;
    }    
} else{
    prezzoBiglietto.innerText = "I valori inseriti non sono validi. Ricaricare la pagina.";
}
*/