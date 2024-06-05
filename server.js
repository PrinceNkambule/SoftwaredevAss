const express = require('express');
const bodyParser = require('body-parser');
const {  saveData,surveys,averageage,maxage,minage,pizzapercent,pastapercent,papandworsperc, averagerating1,averagerating2,averagerating3,averagerating4 } = require('./database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await surveys();
    res.json({ average });
});

//await functions

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await averageage();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await maxage();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await minage();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await pizzapercent();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await pastapercent();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await papandworsperc();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await averagerating1();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await averagerating2();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await averagerating3();
    res.json({ average });
});

app.post('/submit', async (req, res) => {
    const { data } = req.body;
    await saveData(data);
    const average = await averagerating4();
    res.json({ average });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
