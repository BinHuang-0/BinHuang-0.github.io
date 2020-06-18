var deck = [];

function resetDeck() {
    var n = {
        "name": "Unknown", "img": "?"
    }
    var l = deck.length;
    for(var i = 0 ; i < l; i++) {
        deck.shift();
    }
    for(var i = 0 ; i < 40; i++) {
        deck.push(n);
    }

    showDeck();
}

function addCard(name, img) {
    deck.shift();
    var n = {
        "name": name, "img": img
    }
    deck.push(n);

    showDeck();
}

function removeCard(pos) {
    deck.splice(pos, 1);
    
    var n = {
        "name": "Unknown", "img": "?"
    }
    deck.unshift(n);

    showDeck();
}

function showDeck() {
    document.getElementById("cardCount").innerHTML = "Deck Size: " + deck.length + "<br>";
    document.getElementById("deckPlace").innerHTML = "";
    for(var card in deck) {
        if(deck[card].img != "?")
            document.getElementById("deckPlace").innerHTML += "<a onclick='removeCard(" + card + ")'><img src=" + deck[card].img + " width=20px> " + deck[card].name + "</a><br>";
        else
            document.getElementById("deckPlace").innerHTML += deck[card].img + " " + deck[card].name + "<br>";
    }
}

function drawCard() {
    deck.shift();

    showDeck();
}