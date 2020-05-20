var deck = [];

function addCard(name, img) {
    if(deck.length < 40) {
        var n = {
            "name": name, "img": img
        }
        deck.push(n);

        showDeck();
    }
}

function removeCard(pos) {
    deck.splice(pos, 1);

    showDeck();
}

function showDeck() {
    document.getElementById("cardCount").innerHTML = "Deck Size: " + deck.length + "<br>";
    document.getElementById("deckPlace").innerHTML = "";
    for(var card in deck)
        document.getElementById("deckPlace").innerHTML += "<img src=" + deck[card].img + " width=75px onclick='removeCard(" + card + ")'>";
 
}
