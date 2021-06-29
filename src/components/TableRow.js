import React from 'react';

function TableRow(props) {
    const data_ = props.data_;
    const index = (props.index).toString();
    return (
        <div className="body-column" key={"body-column-" + index}>
            <div className="body-row" key={"body-row" + index + "1"}>{data_.end_year}</div>
            <div className="body-row" key={"body-row" + index + "2"}>{data_.intensity}</div>
            <div className="body-row" key={"body-row" + index + "3"}>{data_.sector}</div>
            <div className="body-row" key={"body-row" + index + "4"}>{data_.topic}</div>
            <div className="body-row" key={"body-row" + index + "5"}>{data_.insight}</div>
            <div className="body-row" key={"body-row" + index + "6"} style={{ textTransform: 'none' }}>{data_.url}</div>
            <div className="body-row" key={"body-row" + index + "7"}>{data_.region}</div>
            <div className="body-row" key={"body-row" + index + "8"}>{data_.start_year}</div>
            <div className="body-row" key={"body-row" + index + "9"}>{data_.impact}</div>
            <div className="body-row" key={"body-row" + index + "10"}>{data_.added}</div>
            <div className="body-row" key={"body-row" + index + "11"}>{data_.published}</div>
            <div className="body-row" key={"body-row" + index + "12"}>{data_.country}</div>
            <div className="body-row" key={"body-row" + index + "13"}>{data_.relevance}</div>
            <div className="body-row" key={"body-row" + index + "14"}>{data_.pestle}</div>
            <div className="body-row" key={"body-row" + index + "15"}>{data_.source}</div>
            <div className="body-row" key={"body-row" + index + "16"}>{data_.title}</div>
            <div className="body-row" key={"body-row" + index + "17"}>{data_.likelihood}</div>
        </div>
    );
}

export default TableRow;
