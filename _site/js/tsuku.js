var deck = [];

function addCard(name) {
    deck.push(name);

    showDeck();
}

function showDeck() {
    document.getElementById("deckPlace").innerHTML = "Deck Size: " + deck.length + "<br>";
    for(var card in deck)
    document.getElementById("deckPlace").innerHTML += deck[card] + "<br>";
}