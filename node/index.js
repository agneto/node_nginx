const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;

(async () => {
  db.createTable();
  db.insertPeople({name: 'Abilio G. Neto'});
})();


app.get('/', (req,res) => {
  (async () => {
    const peoples = await db.findPeoples();

    let names = '';
    peoples.map(function(n, i) {
      names = names + '<li>' + n.name + '</li>';
    });

    res.send('<h1>Full Cycle Rocks!</h1><br>' + names);
  })();
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
