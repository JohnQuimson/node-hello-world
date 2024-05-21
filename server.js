require('dotenv').config();
const http = require('http');
const port = process.env.PORT;
const host = process.env.HOST;
const message = process.env.MESSAGE;

const frasiMotivazionali = [
  'La vita e` per il 10% cosa ti accade e per il 90% come reagisci.',
  'Ci sono due regole nella vita: \n1. Non mollare mai; \n2. Non dimenticare mai la regola n° 1. ',
  'Se qualcosa non ti piace, cambiala. Se non puoi cambiarla, cambia il tuo atteggiamento. Non lamentarti.',
  'Se vuoi qualcosa che non hai mai avuto, devi fare qualcosa che non hai mai fatto.',
  'Non essere una "se potessi sarei o una se volessi potrei essere". Sii e basta.',
  'Il mio scopo nella vita? Fare solo cose positive.',
  'Prima ti ignorano, poi ti deridono, poi ti combattono. Poi vinci.',
  'Non e` mai troppo tardi per essere cio` che avresti voluto essere',
  'E` nel momento delle decisioni che si plasma il tuo destino.',
  'Niente e` davvero difficile se lo si divide in tanti piccoli pezzettini.',
];

const GetFrase = () => {
  const index = Math.floor(Math.random() * frasiMotivazionali.length);
  return `${index}. ${frasiMotivazionali[index]}`;
};

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const randomFrase = GetFrase();
    res.end(`.env message: ${message}\n
      <h1>${randomFrase}<h1/>
    `);
  })
  .listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
  });
