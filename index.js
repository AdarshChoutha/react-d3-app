const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const Employee = require('./models/jsondata');
require('dotenv').config();
const port = process.env.PORT || 5500;
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'models/jsondata.json')));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.get('/', async (req, res) => {
    Employee.find({}, (error, result) => {
        if (error) return res.send(error)
        return res.send(result);
    })
});

app.get('/put_data', async (req, res) => {
    const employees = [];
    data.forEach(async (data_) => {
        const employee = new Employee({
            end_year: data_.end_year,
            intensity: data_.intensity,
            sector: data_.sector,
            topic: data_.topic,
            insight: data_.insight,
            url: data_.url,
            region: data_.region,
            start_year: data_.start_year,
            impact: data_.impact,
            added: data_.added,
            published: data_.published,
            country: data_.country,
            relevance: data_.relevance,
            pestle: data_.pestle,
            source: data_.source,
            title: data_.title,
            likelihood: data_.likelihood,
        });
        try {
            await employee.save();
            employees.push(employee);
        } catch (error) { console.log(error) }
    })
    return res.status(200).send(employees);
});

app.listen(port, (error) => {
    if (error) { console.log(error) }
    else { console.log(`Listening on port: ${port}`) }
});
