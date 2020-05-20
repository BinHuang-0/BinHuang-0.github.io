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

<h2>Cards</h2>

<ul>
{% for item in site.data.oracleCards %}
    <img src="{{item.img}}" width=75px onclick="addCard('{{item.name}}', '{{item.img}}')">
{% endfor%}
</ul>

</div>
 

<!--
    draw starting hand
    draw
    tell what cards you've drawn
    search tsukuyomi
    draw and replace
-->
<div class="right-half">

<h2>Deck</h2>
<span id="cardCount">Deck Size: 0</span>
<ul>
    <span id="deckPlace"></span>
</ul>
<button>Start</button>

</div>