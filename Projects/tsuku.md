---
layout: page
title: Tsukuyomi Deck Tracker
permalink: /Projects/tsuku.html
---

<script src="../js/tsuku.js"></script>
<ul>
{% for item in site.data.oracleCards %}
    <img src="{{item.img}}" width=150px onclick="addCard('{{item.name}}')">
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
<span id="deckPlace"></span>