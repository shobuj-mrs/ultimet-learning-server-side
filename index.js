const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// running the side
app.get('/', (req, res) => {
    res.send('News API Running all the server point');
})



// our courses api link
const courses = require('./data/courses.json')

app.get('/courses', (req, res) => {
    res.send(courses);
})





app.listen(port, () => {
    console.log('Dragon News server running on port', port);
})


// module.exports = app;

