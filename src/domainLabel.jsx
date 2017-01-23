import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class DomainLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      fontSize: 10
    }

    return (
    <text style={style} className="graph-label" x={this.props.x} y={this.props.y}>
      {this.props.weekStart} - {this.props.weekEnd}
    </text>
    )
  }
}

DomainLabel.propTypes = {
  x: PropTypes.number,           // x coordinate
  y: PropTypes.number,           // y coordinate
  domain: PropTypes.string,      // timestamps, days, weeks, months
  month: PropTypes.string,
  weekEnd: PropTypes.string,
  weekStart: PropTypes.string,         // time value label for domain (i.e., 01-20-2017)
}

export default DomainLabel;