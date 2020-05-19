---
layout: page
title: Projects
permalink: /projects/
---
<ul>
    {% for item in site.data.projects %}
        <li><a href="{{item.link}}">{{item.name}}</a></li>
    {% endfor%}
</ul>