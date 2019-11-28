---
title: Demoing Frontmatter
someValue: abc
---

<div class="someValue" v-for="page in $site.pages" style="margin: 2rem; font-size: x-large;">
    {{page.regularPath}}: <b>{{page.frontmatter.someValue}}</b>
</div>
