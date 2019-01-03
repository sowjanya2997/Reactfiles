import React from "react";

import Column from "./column";

class Row extends React.Component {
    render () {
        const values =this.props.values;
        let renderedCols = values.map((val,index)=>
        <Column key={index} isHeader={this.props.isHeader} value={val}/>
        );
        return (<tr>{renderedCols}</tr>)
    }
}

export default Row;