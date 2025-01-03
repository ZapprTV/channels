Le liste di canali, in formato JSON, usate da Zappr.

Questa repo contiene le liste di canali, nazionali e locali, usate da Zappr. Sono in formato JSON e seguono il seguente "schema":
```json
[
  {
    "lcn": 3,  <- numero, LCN del canale sul digitale terrestre

    "logo": "rai3.svg",  <- stringa, nome del file del logo del canale
                            IMPORTANTE: specificare l'estensione del file solo se in formato SVG.
                            non specificare nessuna estensione se è in formato PNG/WEBP.

    "name": "Rai 3",  <- stringa, nome del canale

    "subtitle": "(nazionale)",  <- stringa, sottotitolo che verrà mostrato sotto il nome del canale in
                                   testo grigio più piccolo

    "hd": true,  <- boolean, indica se il canale è in alta definizione (e qualità)

    "type": "hls",  <- stringa, tipo di stream del canale [hls, dash, flv, twitch, iframe]

    "api": true,  <- boolean, indica se usare l'API di Zappr per riprodurre il canale
                     (vedere https://github.com/ZapprTV/backend)

    "url": "...",  <- stringa, URL della stream del canale
                      se il tipo di stream è "twitch" l'URL è lo username di Twitch, mentre se è "iframe"
                      è l'URL del sito che si vuole embeddare tramite iframe

    "seek": false  <- boolean, indica se disattivare o no la seek bar di Plyr (utile
                      soprattutto per la maggior parte dei canali con stream di tipo DASH,
                      che non permettono di andare avanti e indietro nel player)
  },
  {
    "lcn": 4,
    "logo": "rete4.svg",
    "name": ...
  }
]
```

Questa repo è distribuita con "licenza" [Unlicense](https://en.wikipedia.org/wiki/Unlicense), quindi è nel pubblico dominio e può essere usata liberamente. ("Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.")
