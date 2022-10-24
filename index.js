const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// running the side
app.get('/', (req, res) => {
    res.send('News API Running all the server point');
})

//  iur courses categories

const courseCategories = require('./data/coursecategories.json')

app.get('/categories', (req, res) => {
    res.send(courseCategories)
})

// our courses api link
const courses = require('./data/courses.json')

app.get('/courses', (req, res) => {
    res.send(courses);
})





app.listen(port, () => {
    console.log('Dragon News server running on port', port);
})


