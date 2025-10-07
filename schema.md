

# Zappr channels schema



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
      <td colspan="2">Channels array</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The array that contains all channels.</td>
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
      <td colspan="2">Channel LCN</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channel&#x27;s LCN on DTT / Freeview.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### channels.logo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel logo</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The filename of the channel&#x27;s logo. If it&#x27;s in SVG format, you need to suffix it with &#x27;.svg&#x27;; otherwise, if it&#x27;s in PNG/WEBP format you must not specify any file extension.</td>
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
      <td colspan="2">Channel name</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channel&#x27;s name.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.subtitle


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel subtitle</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channel&#x27;s subtitle, which will be shown in a smaller and gray form under the channel name.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as HD</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is in high resolution (and quality!).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.uhd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as 4K</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is in 4K.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.radio


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as a radio channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is a radio station (if its streaming only has an audio track or if its video track is a static image).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[string, boolean]</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>true</dt><dd>The channel is a radio, without any video track.</dd><dt>video</dt><dd>The channel is a radio, with a video track only containing a static image.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.ondemand


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as VOD</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is a VOD and not a livestream.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (video or channel ID)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>audio</dt><dd>Audio (e.g. Icecast)</dd><dt>direct</dt><dd>&#x27;Direct&#x27; (not HLS, DASH, etc.): a livestream/VOD playable by a &lt;video&gt; (not audio!) element without the need of any additional JavaScript libraries</dd><dt>popup</dt><dd>Popup window (URL)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream URL</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream URL.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.http


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark stream as not visibile via HTTPS</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the stream URL doesn&#x27;t use the HTTPS protocol and has to be viewed via HTTP.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.license


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">DRM/license type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">What DRM/licensing system to use to play the channel.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>xdevel-wms</dt><dd>Xdevel WMS Auth Sign (play.xdevel.com/was)</dd><dt>rai-akamai</dt><dd>Rai channels on Akamai servers</dd><dt>clearkey</dt><dd>ClearKey (specify keys in licensedetails)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.licensedetails


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Additional DRM/licensing parameters</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtvapp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as HbbTV app</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtvmosaic


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as HbbTV/IP mosaic</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.feed


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as feed</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is to be considered a &#x27;feed&#x27; (if its stream isn&#x27;t active 24/7).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.adult


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as 18+</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel broadcasts 18+ content, and whether it does that all day or only in the night.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[string, boolean]</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>true</dt><dd>The channel exclusively broadcasts 18+ content.</dd><dt>night</dt><dd>The channel only broadcasts 18+ content in the time slot from 11 PM to 7 AM (during which it&#x27;s legal for channels in Italy with an LCN higher than 99 to broadcast explicit, but not hardcore, content).</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.disabled


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Disable channel</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>not-working</dt><dd>This channel&#x27;s streaming isn&#x27;t working at the moment.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Use an API to play the channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel needs an API to be played.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Use the Vercel API (https://github.com/ZapprTV/vercel-api) to play the channel.</dd><dt>cloudflare</dt><dd>Use the Cloudflare API (https://github.com/ZapprTV/cloudflare-api) to play the channel.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.cssfix


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Apply CSS fixes</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">For channels whose streams require some CSS to look good.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>streamshow-embed</dt><dd>StreamShow embed (embed.streamshow.net)</dd><dt>raiplay-sound</dt><dd>RaiPlay Sound</dd><dt>stretch</dt><dd>Stretch the video track of a channel in 4:3 to 16:9.</dd><dt>squashed-height</dt><dd>Stretch the video track of a channel with a squashed height to 16:9.</dd><dt>very-squashed-height</dt><dd>Stretch the video track of a channel with a VERY squashed height to 16:9.</dd><dt>five-two-squashed-height</dt><dd>Stretch the video track of a channel in 5:2 to 16:9.</dd><dt>center-iframe</dt><dd>Center IFrame</dd><dt>servizistreaming-embed</dt><dd>ServiziStreaming.it embed</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.fallback


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Fallback stream info</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Info about the fallback stream that will be used if the main one fails.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### channels.fallback.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (video or channel ID)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>audio</dt><dd>Audio (e.g. Icecast)</dd><dt>direct</dt><dd>&#x27;Direct&#x27; (not HLS, DASH, etc.): a livestream/VOD playable by a &lt;video&gt; (not audio!) element without the need of any additional JavaScript libraries</dd><dt>popup</dt><dd>Popup window (URL)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.fallback.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream URL</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream URL.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.fallback.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Use an API to play the channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel needs an API to be played.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Use the Vercel API (https://github.com/ZapprTV/vercel-api) to play the channel.</dd><dt>cloudflare</dt><dd>Use the Cloudflare API (https://github.com/ZapprTV/cloudflare-api) to play the channel.</dd></dl></td>
    </tr>
  </tbody>
</table>





### channels.geoblock


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Geoblocking settings</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is geoblocked outside of its country of origin, and whether to disable it completely or to use an alternative link that works worldwide.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[boolean, object]</td></tr>
    
  </tbody>
</table>



### channels.geoblock.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (video or channel ID)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>audio</dt><dd>Audio (e.g. Icecast)</dd><dt>direct</dt><dd>&#x27;Direct&#x27; (not HLS, DASH, etc.): a livestream/VOD playable by a &lt;video&gt; (not audio!) element without the need of any additional JavaScript libraries</dd><dt>popup</dt><dd>Popup window (URL)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.geoblock.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream URL</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream URL.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.geoblock.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Use an API to play the channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel needs an API to be played.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Use the Vercel API (https://github.com/ZapprTV/vercel-api) to play the channel.</dd><dt>cloudflare</dt><dd>Use the Cloudflare API (https://github.com/ZapprTV/cloudflare-api) to play the channel.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.geoblock.license


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">DRM/license type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">What DRM/licensing system to use to play the channel.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>xdevel-wms</dt><dd>Xdevel WMS Auth Sign (play.xdevel.com/was)</dd><dt>rai-akamai</dt><dd>Rai channels on Akamai servers</dd><dt>clearkey</dt><dd>ClearKey (specify keys in licensedetails)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.geoblock.licensedetails


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Additional DRM/licensing parameters</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### channels.epg


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">EPG info</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Info on the channel&#x27;s EPG, and from which source to fetch it from.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### channels.epg.source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Source</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.epg.id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel ID</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### channels.manualRestart


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Manual restart settings</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### channels.manualRestart.source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Source</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.manualRestart.id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel ID</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### channels.timeshift


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Timeshift settings</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Start the channel stream with a specified amount of timeshift hours.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### channels.hbbtv


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">HbbTV/IP channels</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channels visible through the channel&#x27;s HbbTV/IP app.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>



### channels.hbbtv.categorySeparator


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Category separator</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">This key creates a category separator in the HbbTV/IP channel list.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.sublcn


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel &#x27;subLCN&#x27;</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channel&#x27;s &#x27;subLCN&#x27;: that is, its &#x27;numbering&#x27; based on the order of the channels in the parent channel&#x27;s HbbTV/IP app.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.logo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel logo</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The filename of the channel&#x27;s logo. If it&#x27;s in SVG format, you need to suffix it with &#x27;.svg&#x27;; otherwise, if it&#x27;s in PNG/WEBP format you must not specify any file extension.</td>
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
      <td colspan="2">Channel name</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channel&#x27;s name.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.subtitle


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel subtitle</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The channel&#x27;s subtitle, which will be shown in a smaller and gray form under the channel name.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.hd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as HD</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is in high resolution (and quality!).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.uhd


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as 4K</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is in 4K.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.radio


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as a radio channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is a radio station (if its streaming only has an audio track or if its video track is a static image).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[string, boolean]</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>true</dt><dd>The channel is a radio, without any video track.</dd><dt>video</dt><dd>The channel is a radio, with a video track only containing a static image.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.ondemand


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as VOD</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is a VOD and not a livestream.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (video or channel ID)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>audio</dt><dd>Audio (e.g. Icecast)</dd><dt>direct</dt><dd>&#x27;Direct&#x27; (not HLS, DASH, etc.): a livestream/VOD playable by a &lt;video&gt; (not audio!) element without the need of any additional JavaScript libraries</dd><dt>popup</dt><dd>Popup window (URL)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream URL</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream URL.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.http


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark stream as not visibile via HTTPS</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the stream URL doesn&#x27;t use the HTTPS protocol and has to be viewed via HTTP.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.license


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">DRM/license type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">What DRM/licensing system to use to play the channel.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>xdevel-wms</dt><dd>Xdevel WMS Auth Sign (play.xdevel.com/was)</dd><dt>rai-akamai</dt><dd>Rai channels on Akamai servers</dd><dt>clearkey</dt><dd>ClearKey (specify keys in licensedetails)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.licensedetails


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Additional DRM/licensing parameters</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.hbbtvapp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as HbbTV app</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.hbbtvmosaic


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as HbbTV/IP mosaic</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.feed


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as feed</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is to be considered a &#x27;feed&#x27; (if its stream isn&#x27;t active 24/7).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.adult


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Mark as 18+</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel broadcasts 18+ content, and whether it does that all day or only in the night.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[string, boolean]</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>true</dt><dd>The channel exclusively broadcasts 18+ content.</dd><dt>night</dt><dd>The channel only broadcasts 18+ content in the time slot from 11 PM to 7 AM (during which it&#x27;s legal for channels in Italy with an LCN higher than 99 to broadcast explicit, but not hardcore, content).</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.disabled


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Disable channel</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>not-working</dt><dd>This channel&#x27;s streaming isn&#x27;t working at the moment.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Use an API to play the channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel needs an API to be played.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Use the Vercel API (https://github.com/ZapprTV/vercel-api) to play the channel.</dd><dt>cloudflare</dt><dd>Use the Cloudflare API (https://github.com/ZapprTV/cloudflare-api) to play the channel.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.cssfix


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Apply CSS fixes</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">For channels whose streams require some CSS to look good.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>streamshow-embed</dt><dd>StreamShow embed (embed.streamshow.net)</dd><dt>raiplay-sound</dt><dd>RaiPlay Sound</dd><dt>stretch</dt><dd>Stretch the video track of a channel in 4:3 to 16:9.</dd><dt>squashed-height</dt><dd>Stretch the video track of a channel with a squashed height to 16:9.</dd><dt>very-squashed-height</dt><dd>Stretch the video track of a channel with a VERY squashed height to 16:9.</dd><dt>five-two-squashed-height</dt><dd>Stretch the video track of a channel in 5:2 to 16:9.</dd><dt>center-iframe</dt><dd>Center IFrame</dd><dt>servizistreaming-embed</dt><dd>ServiziStreaming.it embed</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.fallback


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Fallback stream info</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Info about the fallback stream that will be used if the main one fails.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### channels.hbbtv.fallback.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (video or channel ID)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>audio</dt><dd>Audio (e.g. Icecast)</dd><dt>direct</dt><dd>&#x27;Direct&#x27; (not HLS, DASH, etc.): a livestream/VOD playable by a &lt;video&gt; (not audio!) element without the need of any additional JavaScript libraries</dd><dt>popup</dt><dd>Popup window (URL)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.fallback.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream URL</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream URL.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.fallback.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Use an API to play the channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel needs an API to be played.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Use the Vercel API (https://github.com/ZapprTV/vercel-api) to play the channel.</dd><dt>cloudflare</dt><dd>Use the Cloudflare API (https://github.com/ZapprTV/cloudflare-api) to play the channel.</dd></dl></td>
    </tr>
  </tbody>
</table>





### channels.hbbtv.geoblock


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Geoblocking settings</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel is geoblocked outside of its country of origin, and whether to disable it completely or to use an alternative link that works worldwide.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">[boolean, object]</td></tr>
    
  </tbody>
</table>



### channels.hbbtv.geoblock.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>hls</dt><dd>HLS (.m3u / .m3u8)</dd><dt>dash</dt><dd>DASH (.mpd)</dd><dt>twitch</dt><dd>Twitch (username)</dd><dt>youtube</dt><dd>YouTube (video or channel ID)</dd><dt>iframe</dt><dd>IFrame (URL)</dd><dt>audio</dt><dd>Audio (e.g. Icecast)</dd><dt>direct</dt><dd>&#x27;Direct&#x27; (not HLS, DASH, etc.): a livestream/VOD playable by a &lt;video&gt; (not audio!) element without the need of any additional JavaScript libraries</dd><dt>popup</dt><dd>Popup window (URL)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.geoblock.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Stream URL</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The stream URL.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.geoblock.api


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Use an API to play the channel</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">If the channel needs an API to be played.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>vercel</dt><dd>Use the Vercel API (https://github.com/ZapprTV/vercel-api) to play the channel.</dd><dt>cloudflare</dt><dd>Use the Cloudflare API (https://github.com/ZapprTV/cloudflare-api) to play the channel.</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.geoblock.license


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">DRM/license type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">What DRM/licensing system to use to play the channel.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><dl><dt>xdevel-wms</dt><dd>Xdevel WMS Auth Sign (play.xdevel.com/was)</dd><dt>rai-akamai</dt><dd>Rai channels on Akamai servers</dd><dt>clearkey</dt><dd>ClearKey (specify keys in licensedetails)</dd></dl></td>
    </tr>
  </tbody>
</table>




### channels.hbbtv.geoblock.licensedetails


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Additional DRM/licensing parameters</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### channels.hbbtv.epg


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">EPG info</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Info on the channel&#x27;s EPG, and from which source to fetch it from.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### channels.hbbtv.epg.source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Source</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### channels.hbbtv.epg.id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Channel ID</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>













