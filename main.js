const km = parseInt(prompt('Quanti kilometri devi percorrere?'));
const eta = parseInt(prompt('Quanti anni hai?'));
const priceKm = 0.21;
const neededKm= km * priceKm;

 if (isNaN(km) || isNaN(eta)) 
{
    document.getElementById("message").innerHTML = "Errore: inserisci valori corretti";
}
document.getElementById("neededKm").innerHTML = "Il costo sarà di " + neededKm;


if (eta < 18)
{
    const newPrice= neededKm - (neededKm * 0.2);
    document.getElementById("neededKm").innerHTML = "Il nuovo prezzo scontato del 20% è " + newPrice;
}

if (eta >= 65)
{
    const newPrice= neededKm - (neededKm * 0.4);
    document.getElementById("neededKm").innerHTML = "Il nuovo prezzo scontato del 40% è " + newPrice;
}



