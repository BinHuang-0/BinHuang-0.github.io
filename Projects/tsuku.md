---
layout: page
title: Tsukuyomi Deck Tracker
permalink: /Projects/tsuku.html
---

Still in Development

<script src="../js/tsuku.js"></script>

<!-- Fill Deck -->
<ul>
{% for item in site.data.oracleCards %}
    <img src="{{item.img}}" width=100px onclick="addCard('{{item.name}}', '{{item.img}}')">
{% endfor%}
</ul>

<!--
    draw starting hand
    draw
    tell what cards you've drawn
    search tsukuyomi
    draw and replace
-->
<h2>Deck</h2>
<ul>
    <span id="deckPlace"></span>
</ul>
<button>Start</button>