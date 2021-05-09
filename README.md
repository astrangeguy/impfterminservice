# impfterminservice
Impftermine kinderleicht in Hamburg bekommen

Werde mit einem lauten Warnton benachrichtigt, sobald es neue Termine in deinem Impfzentrum gibt!

## Technischer Hintergrund

Auf der Webseite [impfterminservice.de](https://impfterminservice.de/) bekommt jeder mit einem Zugangscode alle 10 Minuten die Chance auf einen der begehrten Impftermine. Sind alle Termine vergeben, bringt es auch nichts, die Seite ständig neuzuladen, da man nur nach 10 Minuten neue Termine vorgeschlagen bekommt. Um dennoch die Chance auf einen Termin zu erhöhen, wird der Computer über den gesamten Tag regelmäßig nach Terminen Ausschau halten und den Anwender benachrichtigen.

## Installation

1. Tampermonkey für [Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=de), [Mozilla Firefox](https://addons.mozilla.org/de/firefox/addon/tampermonkey/), [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/) oder [einem Browser deiner Wahl](https://www.tampermonkey.net/) installieren oder [Greasemonkey für Firefox](https://addons.mozilla.org/de/firefox/addon/greasemonkey/) installieren
2. Auf `Impfterminservice.user.js` auf `View Raw` drücken oder [diesen Link benutzen](https://github.com/Windowsfreak/impfterminservice/raw/main/Impfterminservice.user.js)
3. Den Anweisungen zum Installieren folgen
4. Auf der Webseite [impfterminservice.de](https://impfterminservice.de/) bis zu dem Punkt gehen, wo verfügbare Termine angezeigt werden würden
5. Die Seite wird laufend aktualisiert, der Tab kann auch im Hintergrund verbleiben
6. Ist ein Termin verfügbar, wird ein lautes akustisches Warnsignal auf dem Lautsprecher ausgegeben.
