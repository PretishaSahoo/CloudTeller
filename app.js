const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/map', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'indexmap.html'));
});

app.get('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'public', 'script.js'));
});

app.get('/mapstyle.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'mapstyle.css'));
});

app.get('/icon.png',(req,res)=>{
    res.setHeader('Content-Type', 'image/png');
    res.sendFile(path.join(__dirname, 'public', 'icon.png'));
})

app.get('/favicon.png', (req, res) => {
    res.setHeader('Content-Type', 'image/png');
    res.sendFile(path.join(__dirname, 'public', 'favicon.png'));
});


app.get('/background.webp',(req,res)=>{
    res.setHeader('Content-Type', 'image/wepb');
    res.sendFile(path.join(__dirname, 'public', 'background.webp'));
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
