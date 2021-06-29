import React, { useRef } from 'react';
import * as d3 from 'd3';

function Visualize(props) {
    const pieChart = useRef();
    const DATA = [];
    props.filtered_data.forEach((data_, index) => {
        DATA.push({ index, "value": data_, "count": props.raw_data.filter(e => e === data_).length });
    });
    const colors = d3.scaleOrdinal(d3.schemeDark2);
    const data = d3.pie().sort(null).value(function (d) { return d.count; })(DATA);
    const segments = d3.arc().innerRadius(60).outerRadius(180).padAngle(.05).padRadius(50);
    const svg = d3.select(pieChart.current).attr('width', 500).attr('height', 500).style('background', 'pink');
    const sections = svg.append('g').attr('transform', 'translate(250, 250)').selectAll('path').data(data);
    sections.enter().append('path').attr('d', segments).attr('fill', function (d) { return colors(d.data.value) });
    sections.enter().append('text').each(function (d) {
        d3.select(this).attr('x', segments.centroid(d)[0] * 1.6).attr('y', segments.centroid(d)[1] * 1.6).text(d.data.index);
    })
    return (
        <div className="v-frame" >
            <h1 className="v-heading">{props.title}</h1>
            <svg ref={pieChart} key="svg"></svg>
            <div className="data-container" key="data-sub-container">
                <div className="data-sub-container-1" key="data-sub-container-1">
                    {DATA.map((data_, index) => {
                        if (index < (DATA.length / 2)) return (<p key={index}>{data_.index}:&emsp;&emsp;{data_.value}</p>)
                        else return []
                    })}
                </div>
                <div className="data-sub-container-2" key="data-sub-container-2">
                    {DATA.map((data_, index) => {
                        if (index >= (DATA.length / 2)) return (<p key={index}>{data_.index}:&emsp;&emsp;{data_.value}</p>)
                        else return []
                    })}
                </div>
            </div>
        </div>
    );
}

export default Visualize;
