const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('enter');        
});

app.get('/enter2', (req,res) => {
    res.render('enter2');        
});
app.get('/animation_go', (req,res) => {
    res.render('animation_go');        
});
app.get('/game', (req,res) => {
    res.render('game');        
});
app.get('/game_over', (req,res) => {
    res.render('game_over');        
});
app.get('/errors', (req,res) => {
    res.render('errors');        
});
app.get('/win', (req,res) => {
    res.render('win');        
});
const port =  process.env.PORT || 3001
app.listen(port, () => {    
    console.log(`\nserver is up and running at: http://127.0.0.1:${port}\n` )
})



