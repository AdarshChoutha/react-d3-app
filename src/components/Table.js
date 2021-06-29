import React from 'react';

import TableRow from './TableRow';

function Table(props) {
    const data = props.data;
    return (
        <div className="table" key="table">
            <div className="header-column" key="head-column">
                <div className="header-row" key="header-row-1">end_year</div>
                <div className="header-row" key="header-row-2">intensity</div>
                <div className="header-row" key="header-row-3">sector</div>
                <div className="header-row" key="header-row-4">topic</div>
                <div className="header-row" key="header-row-5">insight</div>
                <div className="header-row" key="header-row-6">url</div>
                <div className="header-row" key="header-row-7">region</div>
                <div className="header-row" key="header-row-8">start_year</div>
                <div className="header-row" key="header-row-9">impact</div>
                <div className="header-row" key="header-row-10">added</div>
                <div className="header-row" key="header-row-11">published</div>
                <div className="header-row" key="header-row-12">country</div>
                <div className="header-row" key="header-row-13">relevance</div>
                <div className="header-row" key="header-row-14">pestle</div>
                <div className="header-row" key="header-row-15">source</div>
                <div className="header-row" key="header-row-16">title</div>
                <div className="header-row" key="header-row-17">likelihood</div>
            </div>
            {data.map((data_, index) => {
                return <TableRow data_={data_} index={index} key={index} />;
            })}
        </div>
    );
}

export default Table;
