I loghi dei canali, nei formati PNG, WEBP e SVG, e le liste dei canali, in formato JSON, usati da Zappr.

Le liste dei canali seguono il JSON Schema presente nel file [schema.json](schema.json), disponibile anche in versione Markdown in [schema.md](schema.md).

I loghi dei canali sono presenti nella cartella `logos/`. Nella root della cartella si trovano i loghi in alta qualità, nella risoluzione più alta disponibile, e nei formati PNG e SVG. Dentro la cartella `optimized/`, invece, sono presenti i loghi trasformati e ottimizzati nei formati WEBP e SVG, grazie alla GitHub Action [optimize-images](https://github.com/ZapprTV/optimize-images). Per quanto riguarda i loghi in formato PNG, l'action li trasforma in formato WEBP e poi li ridimensiona a una width di 300px, mentre quelli in formato SVG vengono solamente compressi.

Questa repo è distribuita con "licenza" [Unlicense](https://en.wikipedia.org/wiki/Unlicense), quindi è nel pubblico dominio e può essere usata liberamente. ("Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.")