

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
    <tr><tr><td rowspan="7">Type</td><td rowspan="7">Any of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.type.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">HLS (.m3u / .m3u8)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">hls</td>
    </tr>
  </tbody>
</table>




### channels.type.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">DASH (.mpd)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">dash</td>
    </tr>
  </tbody>
</table>




### channels.type.2


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Flash Video (.flv)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">flv</td>
    </tr>
  </tbody>
</table>




### channels.type.3


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Twitch (username)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">twitch</td>
    </tr>
  </tbody>
</table>




### channels.type.4


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">YouTube (ID video)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">youtube</td>
    </tr>
  </tbody>
</table>




### channels.type.5


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">IFrame (URL)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">iframe</td>
    </tr>
  </tbody>
</table>




### channels.type.6


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">&#x27;Diretto&#x27; (non HLS, DASH, ecc.)</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Una diretta/contenuto on-demand riproducibile da una sorgente &lt;video&gt; o &lt;audio&gt; senza bisogno di librerie JavaScript aggiuntive. Usato di solito per le dirette audio Icecast.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">direct</td>
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




### channels.seek


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mostra/nascondi barra seek del player</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se attivare o no la barra seek del player per mandare avanti e indietro la stream. Principalmente per i canali DASH che non permettono il seeking.</td>
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
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>[string, boolean]</td></tr><tr><td>[string, boolean]</td></tr></tr>
    
  </tbody>
</table>



### channels.adult.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Il canale trasmette solo contenuti vietati ai minori di 18 anni.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">true</td>
    </tr>
  </tbody>
</table>




### channels.adult.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Il canale trasmette contenuti vietati ai minori di 18 anni nella fascia oraria dalle 23:00 alle 07:00 (durante la quale è legale per i canali oltre la numerazione 99 trasmettere programmi espliciti ma non troppo hardcore)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">night</td>
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
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">Any of:</td><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.disabled.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Lo streaming del canale non funziona al momento.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">not-working</td>
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
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.api.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Usa l&#x27;API di Vercel (https://github.com/ZapprTV/vercel-api). Per canali Rai e Babylon Cloud.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">vercel</td>
    </tr>
  </tbody>
</table>




### channels.api.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Usa l&#x27;API di Cloudflare (https://github.com/ZapprTV/cloudflare-api). Per canali Dailymotion e YouTube.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">cloudflare</td>
    </tr>
  </tbody>
</table>





### channels.stretch


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Allunga il video del canale a 16:9</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Allunga il video di un canale per farlo diventare in 16:9. Usato principalmente per i canali prodotti in 16:9 ma trasmessi in streaming in 4:3.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
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
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">Any of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.cssfix.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Embed StreamShow (embed.streamshow.net)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">streamshow-embed</td>
    </tr>
  </tbody>
</table>




### channels.cssfix.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">RaiPlay Sound</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">raiplay-sound</td>
    </tr>
  </tbody>
</table>




### channels.cssfix.2


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stretcha canale a 16:9</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Stretcha il video di un canale all&#x27;aspect ratio 16:9.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">stretch</td>
    </tr>
  </tbody>
</table>




### channels.cssfix.3


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stretcha altezza video</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Stretcha il video con una height schiacciata di un canale all&#x27;aspect ratio 16:9.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">squashed-height</td>
    </tr>
  </tbody>
</table>





### channels.hbbtv


<table class="jssd-property-table">
  <tbody>
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
    <tr><tr><td rowspan="7">Type</td><td rowspan="7">Any of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.hbbtv.type.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">HLS (.m3u / .m3u8)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">hls</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.type.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">DASH (.mpd)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">dash</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.type.2


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Flash Video (.flv)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">flv</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.type.3


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Twitch (username)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">twitch</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.type.4


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">YouTube (ID video)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">youtube</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.type.5


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">IFrame (URL)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">iframe</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.type.6


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">&#x27;Diretto&#x27; (non HLS, DASH, ecc.)</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Una diretta/contenuto on-demand riproducibile da una sorgente &lt;video&gt; o &lt;audio&gt; senza bisogno di librerie JavaScript aggiuntive. Usato di solito per le dirette audio Icecast.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">direct</td>
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




### channels.hbbtv.seek


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mostra/nascondi barra seek del player</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Se attivare o no la barra seek del player per mandare avanti e indietro la stream. Principalmente per i canali DASH che non permettono il seeking.</td>
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
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>[string, boolean]</td></tr><tr><td>[string, boolean]</td></tr></tr>
    
  </tbody>
</table>



### channels.hbbtv.adult.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Il canale trasmette solo contenuti vietati ai minori di 18 anni.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">true</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.adult.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Il canale trasmette contenuti vietati ai minori di 18 anni nella fascia oraria dalle 23:00 alle 07:00 (durante la quale è legale per i canali oltre la numerazione 99 trasmettere programmi espliciti ma non troppo hardcore)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">night</td>
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
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">Any of:</td><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.hbbtv.disabled.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Lo streaming del canale non funziona al momento.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">not-working</td>
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
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.hbbtv.api.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Usa l&#x27;API di Vercel (https://github.com/ZapprTV/vercel-api). Per canali Rai e Babylon Cloud.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">vercel</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.api.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Usa l&#x27;API di Cloudflare (https://github.com/ZapprTV/cloudflare-api). Per canali Dailymotion e YouTube.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">cloudflare</td>
    </tr>
  </tbody>
</table>





### channels.hbbtv.stretch


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Allunga il video del canale a 16:9</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Allunga il video di un canale per farlo diventare in 16:9. Usato principalmente per i canali prodotti in 16:9 ma trasmessi in streaming in 4:3.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
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
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">Any of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### channels.hbbtv.cssfix.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Embed StreamShow (embed.streamshow.net)</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">streamshow-embed</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.cssfix.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">RaiPlay Sound</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">raiplay-sound</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.cssfix.2


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stretcha canale a 16:9</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Stretcha il video di un canale all&#x27;aspect ratio 16:9.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">stretch</td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.cssfix.3


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stretcha altezza video</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Stretcha il video con una height schiacciata di un canale all&#x27;aspect ratio 16:9.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">squashed-height</td>
    </tr>
  </tbody>
</table>












<hr />

## Schema
```
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Schema canali Zappr",
    "type": "object",
    "properties": {
        "channels": {
            "type": "array",
            "title": "Array dei canali",
            "description": "L'array contenente tutti i canali.",
            "items": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "lcn": {
                        "type": "number",
                        "title": "LCN canale",
                        "description": "La LCN del canale sul digitale terrestre."
                    },
                    "logo": {
                        "type": "string",
                        "title": "Logo canale",
                        "description": "Il nome del file del logo del canale. Se è in formato SVG, serve aggiungere '.svg' alla fine; altrimenti, se è in formato PNG/WEBP è necessario non specificare alcuna estensione.",
                        "pattern": "^(?!.*\\.(png|webp)$).*"
                    },
                    "name": {
                        "type": "string",
                        "title": "Nome canale",
                        "description": "Il nome del canale."
                    },
                    "subtitle": {
                        "type": "string",
                        "title": "Sottotitolo canale",
                        "description": "Il sottotitolo del canale, che verrà mostrato sotto il canale in grigio e con un font più piccolo."
                    },
                    "hd": {
                        "type": "boolean",
                        "title": "Contrassegna come canale HD",
                        "description": "Se è il canale è in alta definizione (e qualità)."
                    },
                    "uhd": {
                        "type": "boolean",
                        "title": "Contrassegna come canale 4K",
                        "description": "Se è il canale è in 4K."
                    },
                    "radio": {
                        "type": "boolean",
                        "title": "Contrassegna come canale radio",
                        "description": "Se è il canale è una radio (cioè se ha una stream senza video o con un'immagine fissa)."
                    },
                    "ondemand": {
                        "type": "boolean",
                        "title": "Contrassegna come contenuto on-demand",
                        "description": "Se è il canale è un video on-demand (e non una diretta)."
                    },
                    "type": {
                        "type": "string",
                        "title": "Tipo stream",
                        "description": "Il tipo della stream.",
                        "anyOf": [
                            {
                                "const": "hls",
                                "title": "HLS (.m3u / .m3u8)"
                            },
                            {
                                "const": "dash",
                                "title": "DASH (.mpd)"
                            },
                            {
                                "const": "flv",
                                "title": "Flash Video (.flv)"
                            },
                            {
                                "const": "twitch",
                                "title": "Twitch (username)"
                            },
                            {
                                "const": "youtube",
                                "title": "YouTube (ID video)"
                            },
                            {
                                "const": "iframe",
                                "title": "IFrame (URL)"
                            },
                            {
                                "const": "direct",
                                "title": "'Diretto' (non HLS, DASH, ecc.)",
                                "description": "Una diretta/contenuto on-demand riproducibile da una sorgente <video> o <audio> senza bisogno di librerie JavaScript aggiuntive. Usato di solito per le dirette audio Icecast."
                            }
                        ]
                    },
                    "url": {
                        "type": "string",
                        "title": "URL stream",
                        "description": "L'URL della stream."
                    },
                    "seek": {
                        "type": "boolean",
                        "title": "Mostra/nascondi barra seek del player",
                        "description": "Se attivare o no la barra seek del player per mandare avanti e indietro la stream. Principalmente per i canali DASH che non permettono il seeking."
                    },
                    "hbbtvapp": {
                        "type": "boolean",
                        "title": "Contrassegna come app HbbTV",
                        "description": "Se contrassegnare il canale come app HbbTV."
                    },
                    "hbbtvmosaic": {
                        "type": "boolean",
                        "title": "Contrassegna come mosaico interattivo HbbTV",
                        "description": "Se contrassegnare il canale come mosaico interattivo di canali HbbTV."
                    },
                    "adult": {
                        "type": [
                            "string",
                            "boolean"
                        ],
                        "title": "Contrassegna come canale 18+",
                        "description": "Se è il canale trasmette contenuti vietati ai minori di 18 anni, e se lo fa tutto il giorno o solo la notte.",
                        "anyOf": [
                            {
                                "const": true,
                                "description": "Il canale trasmette solo contenuti vietati ai minori di 18 anni."
                            },
                            {
                                "const": "night",
                                "description": "Il canale trasmette contenuti vietati ai minori di 18 anni nella fascia oraria dalle 23:00 alle 07:00 (durante la quale è legale per i canali oltre la numerazione 99 trasmettere programmi espliciti ma non troppo hardcore)"
                            }
                        ]
                    },
                    "disabled": {
                        "type": "string",
                        "title": "Disattiva canale",
                        "description": "Se disattivare o no il canale, e perché.",
                        "anyOf": [
                            {
                                "const": "not-working",
                                "description": "Lo streaming del canale non funziona al momento."
                            }
                        ]
                    },
                    "api": {
                        "type": "string",
                        "title": "Usa l'API per il canale",
                        "description": "Se usare una delle API di Zappr per il canale.",
                        "anyOf": [
                            {
                                "const": "vercel",
                                "description": "Usa l'API di Vercel (https://github.com/ZapprTV/vercel-api). Per canali Rai e Babylon Cloud."
                            },
                            {
                                "const": "cloudflare",
                                "description": "Usa l'API di Cloudflare (https://github.com/ZapprTV/cloudflare-api). Per canali Dailymotion e YouTube."
                            }
                        ]
                    },
                    "stretch": {
                        "type": "boolean",
                        "title": "Allunga il video del canale a 16:9",
                        "description": "Allunga il video di un canale per farlo diventare in 16:9. Usato principalmente per i canali prodotti in 16:9 ma trasmessi in streaming in 4:3."
                    },
                    "cssfix": {
                        "type": "string",
                        "title": "Fix CSS da applicare",
                        "description": "Alcuni canali IFrame hanno bisogno di un po' di CSS per essere più belli.",
                        "anyOf": [
                            {
                                "const": "streamshow-embed",
                                "title": "Embed StreamShow (embed.streamshow.net)"
                            },
                            {
                                "const": "raiplay-sound",
                                "title": "RaiPlay Sound"
                            },
                            {
                                "const": "stretch",
                                "title": "Stretcha canale a 16:9",
                                "description": "Stretcha il video di un canale all'aspect ratio 16:9."
                            },
                            {
                                "const": "squashed-height",
                                "title": "Stretcha altezza video",
                                "description": "Stretcha il video con una height schiacciata di un canale all'aspect ratio 16:9."
                            }
                        ]
                    },
                    "hbbtv": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "additionalProperties": false,
                            "properties": {
                                "categorySeparator": {
                                    "type": "string",
                                    "title": "Separatore di categoria",
                                    "description": "Questa key crea un separatore di categoria nella lista di canali HbbTV."
                                },
                                "sublcn": {
                                    "type": "number",
                                    "title": "'SubLCN' canale",
                                    "description": "La 'subLCN' del canale, cioè la 'numerazione' basata sull'ordine dei canali nell'applicazione HbbTV del canale 'parente'."
                                },
                                "logo": {
                                    "type": "string",
                                    "title": "Logo canale",
                                    "description": "Il nome del file del logo del canale. Se è in formato SVG, serve aggiungere '.svg' alla fine; altrimenti, se è in formato PNG/WEBP è necessario non specificare alcuna estensione.",
                                    "pattern": "^(?!.*\\.(png|webp)$).*"
                                },
                                "name": {
                                    "type": "string",
                                    "title": "Nome canale",
                                    "description": "Il nome del canale."
                                },
                                "subtitle": {
                                    "type": "string",
                                    "title": "Sottotitolo canale",
                                    "description": "Il sottotitolo del canale, che verrà mostrato sotto il canale in grigio e con un font più piccolo."
                                },
                                "hd": {
                                    "type": "boolean",
                                    "title": "Contrassegna come canale HD",
                                    "description": "Se è il canale è in alta definizione (e qualità)."
                                },
                                "uhd": {
                                    "type": "boolean",
                                    "title": "Contrassegna come canale 4K",
                                    "description": "Se è il canale è in 4K."
                                },
                                "radio": {
                                    "type": "boolean",
                                    "title": "Contrassegna come canale radio",
                                    "description": "Se è il canale è una radio (cioè se ha una stream senza video o con un'immagine fissa)."
                                },
                                "ondemand": {
                                    "type": "boolean",
                                    "title": "Contrassegna come contenuto on-demand",
                                    "description": "Se è il canale è un video on-demand (e non una diretta)."
                                },
                                "type": {
                                    "type": "string",
                                    "title": "Tipo stream",
                                    "description": "Il tipo della stream.",
                                    "anyOf": [
                                        {
                                            "const": "hls",
                                            "title": "HLS (.m3u / .m3u8)"
                                        },
                                        {
                                            "const": "dash",
                                            "title": "DASH (.mpd)"
                                        },
                                        {
                                            "const": "flv",
                                            "title": "Flash Video (.flv)"
                                        },
                                        {
                                            "const": "twitch",
                                            "title": "Twitch (username)"
                                        },
                                        {
                                            "const": "youtube",
                                            "title": "YouTube (ID video)"
                                        },
                                        {
                                            "const": "iframe",
                                            "title": "IFrame (URL)"
                                        },
                                        {
                                            "const": "direct",
                                            "title": "'Diretto' (non HLS, DASH, ecc.)",
                                            "description": "Una diretta/contenuto on-demand riproducibile da una sorgente <video> o <audio> senza bisogno di librerie JavaScript aggiuntive. Usato di solito per le dirette audio Icecast."
                                        }
                                    ]
                                },
                                "url": {
                                    "type": "string",
                                    "title": "URL stream",
                                    "description": "L'URL della stream."
                                },
                                "seek": {
                                    "type": "boolean",
                                    "title": "Mostra/nascondi barra seek del player",
                                    "description": "Se attivare o no la barra seek del player per mandare avanti e indietro la stream. Principalmente per i canali DASH che non permettono il seeking."
                                },
                                "hbbtvapp": {
                                    "type": "boolean",
                                    "title": "Contrassegna come app HbbTV",
                                    "description": "Se contrassegnare il canale come app HbbTV."
                                },
                                "hbbtvmosaic": {
                                    "type": "boolean",
                                    "title": "Contrassegna come mosaico interattivo HbbTV",
                                    "description": "Se contrassegnare il canale come mosaico interattivo di canali HbbTV."
                                },
                                "adult": {
                                    "type": [
                                        "string",
                                        "boolean"
                                    ],
                                    "title": "Contrassegna come canale 18+",
                                    "description": "Se è il canale trasmette contenuti vietati ai minori di 18 anni, e se lo fa tutto il giorno o solo la notte.",
                                    "anyOf": [
                                        {
                                            "const": true,
                                            "description": "Il canale trasmette solo contenuti vietati ai minori di 18 anni."
                                        },
                                        {
                                            "const": "night",
                                            "description": "Il canale trasmette contenuti vietati ai minori di 18 anni nella fascia oraria dalle 23:00 alle 07:00 (durante la quale è legale per i canali oltre la numerazione 99 trasmettere programmi espliciti ma non troppo hardcore)"
                                        }
                                    ]
                                },
                                "disabled": {
                                    "type": "string",
                                    "title": "Disattiva canale",
                                    "description": "Se disattivare o no il canale, e perché.",
                                    "anyOf": [
                                        {
                                            "const": "not-working",
                                            "title": "Lo streaming del canale non funziona al momento."
                                        }
                                    ]
                                },
                                "api": {
                                    "type": "string",
                                    "title": "Usa l'API per il canale",
                                    "description": "Se usare una delle API di Zappr per il canale.",
                                    "anyOf": [
                                        {
                                            "const": "vercel",
                                            "description": "Usa l'API di Vercel (https://github.com/ZapprTV/vercel-api). Per canali Rai e Babylon Cloud."
                                        },
                                        {
                                            "const": "cloudflare",
                                            "description": "Usa l'API di Cloudflare (https://github.com/ZapprTV/cloudflare-api). Per canali Dailymotion e YouTube."
                                        }
                                    ]
                                },
                                "stretch": {
                                    "type": "boolean",
                                    "title": "Allunga il video del canale a 16:9",
                                    "description": "Allunga il video di un canale per farlo diventare in 16:9. Usato principalmente per i canali prodotti in 16:9 ma trasmessi in streaming in 4:3."
                                },
                                "cssfix": {
                                    "type": "string",
                                    "title": "Fix CSS da applicare",
                                    "description": "Alcuni canali IFrame hanno bisogno di un po' di CSS per essere più belli.",
                                    "anyOf": [
                                        {
                                            "const": "streamshow-embed",
                                            "title": "Embed StreamShow (embed.streamshow.net)"
                                        },
                                        {
                                            "const": "raiplay-sound",
                                            "title": "RaiPlay Sound"
                                        },
                                        {
                                            "const": "stretch",
                                            "title": "Stretcha canale a 16:9",
                                            "description": "Stretcha il video di un canale all'aspect ratio 16:9."
                                        },
                                        {
                                            "const": "squashed-height",
                                            "title": "Stretcha altezza video",
                                            "description": "Stretcha il video con una height schiacciata di un canale all'aspect ratio 16:9."
                                        }
                                    ]
                                }
                            },
                            "allOf": [
                                {
                                    "if": {
                                        "properties": {
                                            "hbbtvapp": {
                                                "const": true
                                            }
                                        },
                                        "required": [
                                            "hbbtvapp"
                                        ]
                                    },
                                    "then": {
                                        "properties": {
                                            "type": {
                                                "const": "iframe"
                                            }
                                        },
                                        "required": [
                                            "type"
                                        ]
                                    }
                                },
                                {
                                    "if": {
                                        "required": [
                                            "categorySeparator"
                                        ]
                                    },
                                    "then": {},
                                    "else": {
                                        "if": {
                                            "required": [
                                                "disabled"
                                            ]
                                        },
                                        "then": {
                                            "required": [
                                                "sublcn",
                                                "logo",
                                                "name"
                                            ]
                                        },
                                        "else": {
                                            "required": [
                                                "sublcn",
                                                "logo",
                                                "name",
                                                "type",
                                                "url"
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                "required": [
                    "lcn",
                    "logo",
                    "name"
                ],
                "allOf": [
                    {
                        "if": {
                            "properties": {
                                "hbbtvapp": {
                                    "const": true
                                }
                            },
                            "required": [
                                "hbbtvapp"
                            ]
                        },
                        "then": {
                            "properties": {
                                "type": {
                                    "const": "iframe"
                                }
                            },
                            "required": [
                                "type"
                            ]
                        }
                    },
                    {
                        "if": {
                            "anyOf": [
                                {
                                    "properties": {
                                        "hbbtvmosaic": {
                                            "const": true
                                        }
                                    },
                                    "required": [
                                        "hbbtvmosaic"
                                    ]
                                },
                                {
                                    "required": [
                                        "disabled"
                                    ]
                                }
                            ]
                        },
                        "then": {
                            "required": [
                                "lcn",
                                "logo",
                                "name"
                            ]
                        },
                        "else": {
                            "required": [
                                "lcn",
                                "logo",
                                "name",
                                "type",
                                "url"
                            ]
                        }
                    }
                ]
            }
        }
    },
    "required": [
        "channels"
    ]
}
```


