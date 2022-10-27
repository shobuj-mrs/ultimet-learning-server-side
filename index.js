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

const courseType = require('./data/courseType.json');
const courses = require('./data/courses.json');
const e = require('express')

app.get('/categories', (req, res) => {
    res.send(courseType)
})

// our courses api link


app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/catagory/:id', (req, res) => {
    const id = req.params.id;
    const catagory_course = courses.filter(similarCourse => similarCourse.category_id === id);
    res.send(catagory_course);
})

app.get('/courses/:id', (req, res) => {

    const id = req.params.id;
    const selectedCourse = courses.find(singleCourse => singleCourse._id === id)
    res.send(selectedCourse);
})





app.listen(port, () => {
    console.log('Dragon News server running on port', port);
})


module.exports = app;

