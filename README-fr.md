<div align="center">
    <a href="README.md">Italiano</a> | <a href="README-en.md">English</a> | <b>Français</b>
</div>
Les logos des chaînes, aux formats PNG, WEBP et SVG, et les listes des chaînes, au format JSON, utilisés par Zappr.

Les listes des chaînes suivent le schéma JSON présent dans le fichier [schema.json](schema.json), également disponible en version Markdown dans [schema.md](schema.md).

Les logos des chaînes se trouvent dans le dossier `logos/`. À la racine du dossier de chaque pays se trouvent les logos en haute qualité, dans la résolution la plus élevée disponible, aux formats PNG et SVG.

Dans les dossiers de chaque pays, vous trouverez aussi le dossier `optimized/`, qui contient les logos transformés et optimisés aux formats WEBP et SVG grâce à la GitHub Action [optimize-images](https://github.com/ZapprTV/optimize-images). En ce qui concerne les logos au format PNG, l'Action les transforme au format WEBP puis les redimensionne à une largeur de 300px, tandis que ceux au format SVG sont simplement compressés.

**Puisque l'Action s'occupe de tout, lorsque vous ouvrez une pull request et ajoutez un logo, inutile de l'optimiser ou de le compresser. Téléchargez la version de meilleure qualité dont vous disposez.**

Ce dépôt est distribué sous la « licence » [Unlicense](https://en.wikipedia.org/wiki/Unlicense), il est donc dans le domaine public et peut être utilisé librement. (« Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. »)