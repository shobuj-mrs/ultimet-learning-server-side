const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// running the side
app.get('/', (req, res) => {
    res.send('News API Running all the server point');
})

//   our courses types

const courseType = require('./data/courseType.json')

app.get('/categories', (req, res) => {
    res.send(courseType)
})

// our courses api link
const courses = require('./data/courses.json')

app.get('/courses/:id', (req, res) => {

    const id = req.params.id;
    const selectedCourse = courses.find(singleCourse => singleCourse._id == id)
    res.send(selectedCourse);
})





app.listen(port, () => {
    console.log('Dragon News server running on port', port);
})


module.exports = app;

