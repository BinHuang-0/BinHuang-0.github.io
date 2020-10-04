---
layout: page
title: Korean Numbers Practice
permalink: /Projects/koreanNumbersPractice.html
---

<link rel="stylesheet" href="../css/koreanNumbersPractice.css">

<h3>Sino-Korean Numbers</h3>
<h4>Numbers to Words</h4>
<p id="numberToKorean" class="question"></p>
<input type="text" id="koreanAnswer" class="answer">
<p class="correct" id="koreanCorrect"></p><br>
<button class="first-button" onclick="generateNumber()">New Number</button>
<button onclick="checkSino()">Check Answer</button>

<h4>Words to Numbers</h4>
<p id="ktnSinoShow" class="question"></p>
<input type="text" id="ktnSinoAnswer" class="answer">
<p class="correct" id="ktnSinoCorrect"></p ><br>
<button class="first-button" onclick="generatektnSinoNumber()">New Number</button>
<button onclick="checkktnSinoNumber()">Check Answer</button>

<script src="../js/koreanNumbersPractice.js"></script>