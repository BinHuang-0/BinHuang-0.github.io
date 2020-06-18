---
layout: page
title: Tsukuyomi Deck Tracker
permalink: /Projects/tsuku.html
---

<link rel="stylesheet" href="../css/tsuku.css">
<script src="../js/tsuku.js"></script>

Still in Development

<!-- Fill Deck -->


<div class="left-half">

<h2>Add to Stack</h2>

<ul>

{% for item in site.data.ottStack %}
    <img src="{{item.img}}" width=75px onclick=
    "addCard('{{item.name}}', '{{item.img}}')"/>

{% endfor%}

</ul>

<button onclick="drawCard()">Draw</button>
<button onclick="resetDeck()">Reset</button>

</div>
 

<div class="right-half">

<h2>Deck</h2>
<span id="cardCount">Deck Size: 40</span>
<ul>
    <span id="deckPlace"></span>
</ul>

</div>

<script> 
    resetDeck();
</script>