// import React from 'react';
import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import './App.css';
import JsonData from './jsondata.json';

import Table from './components/Table';
import Visualize from './components/Visualize';

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		// Axios.get('http://localhost:8080/').then(res => {
		// 	setData(res.data);
		// });
		setData(JsonData);
	}, []);
	const Intensity_RAW_DATA = [], Intensity_FILTERED_DATA = [], Likelihood_RAW_DATA = [], Likelihood_FILTERED_DATA = [],
		Relevance_RAW_DATA = [], Relevance_FILTERED_DATA = [], Year_RAW_DATA = [], Year_FILTERED_DATA = [],
		Country_RAW_DATA = [], Country_FILTERED_DATA = [], Topics_RAW_DATA = [], Topics_FILTERED_DATA = [],
		Region_RAW_DATA = [], Region_FILTERED_DATA = [];
	data.forEach(data_ => {
		Intensity_RAW_DATA.push(data_.intensity);
		if (!Intensity_FILTERED_DATA.includes(data_.intensity)) Intensity_FILTERED_DATA.push(data_.intensity);
		Likelihood_RAW_DATA.push(data_.likelihood);
		if (!Likelihood_FILTERED_DATA.includes(data_.likelihood)) Likelihood_FILTERED_DATA.push(data_.likelihood);
		Relevance_RAW_DATA.push(data_.relevance);
		if (!Relevance_FILTERED_DATA.includes(data_.relevance)) Relevance_FILTERED_DATA.push(data_.relevance);
		Country_RAW_DATA.push(data_.country);
		if (!Country_FILTERED_DATA.includes(data_.country)) Country_FILTERED_DATA.push(data_.country);
		Topics_RAW_DATA.push(data_.topic);
		if (!Topics_FILTERED_DATA.includes(data_.topic)) Topics_FILTERED_DATA.push(data_.topic);
		Region_RAW_DATA.push(data_.region);
		if (!Region_FILTERED_DATA.includes(data_.region)) Region_FILTERED_DATA.push(data_.region);
		let year = { "start_year": data_.start_year, "end_year": data_.start_year };
		Year_RAW_DATA.push(year);
		Year_FILTERED_DATA.forEach(YF_data_ => {
			if (!(YF_data_.start_year === data_.start_year && YF_data_.end_year === data_.end_year))
				Year_FILTERED_DATA.push({ "start_year": data_.start_year, "end_year": data_.start_year });
		})
	});
	return (
		<div className="App">
			<h1>Data Visualization using MERN and D3.js</h1>
			<Table data={data} />
			<div className="v-container">
				<Visualize total={data.length} raw_data={Intensity_RAW_DATA} filtered_data={Intensity_FILTERED_DATA} title='Intensity' />
				<Visualize total={data.length} raw_data={Likelihood_RAW_DATA} filtered_data={Likelihood_FILTERED_DATA} title='Likelihood' />
				<Visualize total={data.length} raw_data={Relevance_RAW_DATA} filtered_data={Relevance_FILTERED_DATA} title='Relevance' />
				<Visualize total={data.length} raw_data={Region_RAW_DATA} filtered_data={Region_FILTERED_DATA} title='Region' />
				<Visualize total={data.length} raw_data={Country_RAW_DATA} filtered_data={Country_FILTERED_DATA} title='Country' />
				<Visualize total={data.length} raw_data={Topics_RAW_DATA} filtered_data={Topics_FILTERED_DATA} title='Topics' />
			</div>
		</div>
	);
}

export default App;
