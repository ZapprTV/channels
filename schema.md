

# Schema canali Zappr



<table>
<tbody>

<tr><th>$schema</th><td>http://json-schema.org/draft-07/schema#</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#channels">channels</a></td><td>Array</td></tr></tbody></table>



<hr />


## channels


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Array dei canali</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">L&#x27;array contenente tutti i canali.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### channels.lcn


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">LCN canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">La LCN del canale sul digitale terrestre.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### channels.logo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Logo canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il nome del file del logo del canale. Se è in formato SVG, serve aggiungere &#x27;.svg&#x27; alla fine; altrimenti, se è in formato PNG/WEBP è necessario non specificare alcuna estensione.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(?!.*\.(png|webp)$).*</td>
    </tr>
  </tbody>
</table>




### channels.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Nome canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il nome del canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.subtitle


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Sottotitolo canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il sottotitolo del canale, che verrà mostrato sotto il canale in grigio e con un font più piccolo.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale HD</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è in alta definizione (e qualità).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.uhd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale 4K</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è in 4K.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.radio


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale radio</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è una radio (cioè se ha una stream senza video o con un&#x27;immagine fissa).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.ondemand


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come contenuto on-demand</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è un video on-demand (e non una diretta).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Tipo stream</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il tipo della stream.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>flv</dt><dd>Flash Video (.flv)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (ID video)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>direct</dt><dd>&#x27;Diretto&#x27; (non HLS, DASH, ecc.), cioè una diretta/contenuto on-demand riproducibile da una sorgente &lt;video&gt; o &lt;audio&gt; senza bisogno di librerie JavaScript aggiuntive. Usato di solito per le dirette audio Icecast.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">URL stream</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">L&#x27;URL della stream.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.http


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna stream come non visibile tramite HTTPS</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se l&#x27;URL della stream non usa il protocollo HTTPS e va per forza visto tramite HTTP, l&#x27;URL viene riprodotto in una nuova finestra che usa il protocollo HTTP.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.license


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Tipo di licenza/DRM</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Quale sistema di licenza/DRM usare per riprodurre il canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>xdevel-wms</dt><dd>Xdevel WMS Auth Sign (play.xdevel.com/was)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.seek


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mostra/nascondi barra seek del player</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se attivare o no la barra seek del player per mandare avanti e indietro la stream. Abilitato di default per stream di tipo DASH, Flash Video e diretto.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtvapp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come app HbbTV</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se contrassegnare il canale come app HbbTV.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtvmosaic


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come mosaico interattivo HbbTV</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se contrassegnare il canale come mosaico interattivo di canali HbbTV.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.adult


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale 18+</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale trasmette contenuti vietati ai minori di 18 anni, e se lo fa tutto il giorno o solo la notte.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[string, boolean]</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>true</dt><dd>Il canale trasmette solo contenuti vietati ai minori di 18 anni.</dd><dt>night</dt><dd>Il canale trasmette contenuti vietati ai minori di 18 anni nella fascia oraria dalle 23:00 alle 07:00 (durante la quale è legale per i canali oltre la numerazione 99 trasmettere programmi espliciti ma non troppo hardcore).</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.disabled


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Disattiva canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se disattivare o no il canale, e perché.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>not-working</dt><dd>Lo streaming del canale non funziona al momento.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Usa l&#x27;API per il canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se usare una delle API di Zappr per il canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Usa l&#x27;API di Vercel (https://github.com/ZapprTV/vercel-api). Per canali Rai e Babylon Cloud.</dd><dt>cloudflare</dt><dd>Usa l&#x27;API di Cloudflare (https://github.com/ZapprTV/cloudflare-api). Per canali Dailymotion, Vimeo Livestream e YouTube (in base all&#x27;ID di un canale).</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.cssfix


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Fix CSS da applicare</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Alcuni canali IFrame hanno bisogno di un po&#x27; di CSS per essere più belli.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>streamshow-embed</dt><dd>Embed StreamShow (embed.streamshow.net)</dd><dt>raiplay-sound</dt><dd>RaiPlay Sound</dd><dt>stretch</dt><dd>Stretcha il video di un canale con una width schiacciata all&#x27;aspect ratio 16:9.</dd><dt>squashed-height</dt><dd>Stretcha il video di un canale con una height schiacciata all&#x27;aspect ratio 16:9.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Canali HbbTV</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">I canali visibili tramite l&#x27;app HbbTV del canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>



### channels.hbbtv.categorySeparator


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Separatore di categoria</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Questa key crea un separatore di categoria nella lista di canali HbbTV.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.sublcn


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">&#x27;SubLCN&#x27; canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">La &#x27;subLCN&#x27; del canale, cioè la &#x27;numerazione&#x27; basata sull&#x27;ordine dei canali nell&#x27;applicazione HbbTV del canale &#x27;parente&#x27;.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.logo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Logo canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il nome del file del logo del canale. Se è in formato SVG, serve aggiungere &#x27;.svg&#x27; alla fine; altrimenti, se è in formato PNG/WEBP è necessario non specificare alcuna estensione.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(?!.*\.(png|webp)$).*</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Nome canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il nome del canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.subtitle


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Sottotitolo canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il sottotitolo del canale, che verrà mostrato sotto il canale in grigio e con un font più piccolo.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.hd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale HD</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è in alta definizione (e qualità).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.uhd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale 4K</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è in 4K.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.radio


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale radio</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è una radio (cioè se ha una stream senza video o con un&#x27;immagine fissa).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.ondemand


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come contenuto on-demand</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale è un video on-demand (e non una diretta).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Tipo stream</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Il tipo della stream.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>flv</dt><dd>Flash Video (.flv)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (ID video)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>direct</dt><dd>&#x27;Diretto&#x27; (non HLS, DASH, ecc.), cioè una diretta/contenuto on-demand riproducibile da una sorgente &lt;video&gt; o &lt;audio&gt; senza bisogno di librerie JavaScript aggiuntive. Usato di solito per le dirette audio Icecast.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">URL stream</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">L&#x27;URL della stream.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.http


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna stream come non visibile tramite HTTPS</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se l&#x27;URL della stream non usa il protocollo HTTPS e va per forza visto tramite HTTP, l&#x27;URL viene riprodotto in una nuova finestra che usa il protocollo HTTP.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.license


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Tipo di licenza/DRM</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Quale sistema di licenza/DRM usare per riprodurre il canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>xdevel-wms</dt><dd>Xdevel WMS Auth Sign (play.xdevel.com/was)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.seek


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mostra/nascondi barra seek del player</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se attivare o no la barra seek del player per mandare avanti e indietro la stream. Abilitato di default per stream di tipo DASH, Flash Video e diretto.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.hbbtvapp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come app HbbTV</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se contrassegnare il canale come app HbbTV.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.hbbtvmosaic


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come mosaico interattivo HbbTV</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se contrassegnare il canale come mosaico interattivo di canali HbbTV.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.adult


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Contrassegna come canale 18+</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se è il canale trasmette contenuti vietati ai minori di 18 anni, e se lo fa tutto il giorno o solo la notte.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[string, boolean]</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>true</dt><dd>Il canale trasmette solo contenuti vietati ai minori di 18 anni.</dd><dt>night</dt><dd>Il canale trasmette contenuti vietati ai minori di 18 anni nella fascia oraria dalle 23:00 alle 07:00 (durante la quale è legale per i canali oltre la numerazione 99 trasmettere programmi espliciti ma non troppo hardcore).</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.disabled


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Disattiva canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se disattivare o no il canale, e perché.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>not-working</dt><dd>Lo streaming del canale non funziona al momento.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Usa l&#x27;API per il canale</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se usare una delle API di Zappr per il canale.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Usa l&#x27;API di Vercel (https://github.com/ZapprTV/vercel-api). Per canali Rai e Babylon Cloud.</dd><dt>cloudflare</dt><dd>Usa l&#x27;API di Cloudflare (https://github.com/ZapprTV/cloudflare-api). Per canali Dailymotion, Vimeo Livestream e YouTube (in base all&#x27;ID di un canale).</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.cssfix


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Fix CSS da applicare</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Alcuni canali IFrame hanno bisogno di un po&#x27; di CSS per essere più belli.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>streamshow-embed</dt><dd>Embed StreamShow (embed.streamshow.net)</dd><dt>raiplay-sound</dt><dd>RaiPlay Sound</dd><dt>stretch</dt><dd>Stretcha il video di un canale con una width schiacciata all&#x27;aspect ratio 16:9.</dd><dt>squashed-height</dt><dd>Stretcha il video di un canale con una height schiacciata all&#x27;aspect ratio 16:9.</dd></dl></td>
    </tr>
  </tbody>
</table>












