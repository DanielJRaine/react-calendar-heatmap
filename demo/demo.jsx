import React from 'react';
import ReactDOM from 'react-dom';
import range from 'lodash.range';
import CalendarHeatmap from '../src';
import { shiftDate } from '../src/dateHelpers';

const today = new Date();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomValues(count, date = today) {
  return range(count).map((index) => {
    return {
      date: shiftDate(date, -index),
      count: getRandomInt(1, 3),
    };
  })
}

function githubClassForValue(value) {
  if (!value) {
    return 'color-empty';
  }
  return `color-github-${value.count}`;
}

function gitlabClassForValue(value) {
  if (!value) {
    return 'color-empty';
  }
  return `color-gitlab-${value.count}`;
}

function customTitleForValue(value) {
  return value ? `You're hovering over ${value.date.toDateString()} with value ${value.count}` : null;
}

function customOnClick(value) {
  if (value) {
    alert(`Clicked on ${value.date.toDateString()} with value ${value.count}`);
  }
}

const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };
const randomValues = generateRandomValues(200);

const githubURL = "https://github.com/patientslikeme/react-calendar-heatmap";

const DemoItem = (props) => (
  <div className="row m-b-3">
    <div className="col-xs-12 col-md-6 offset-md-3">
      <p><code>{props.name}</code><small className="text-muted m-l-1">{props.example ? `e.g. ${props.example}` : null}</small></p>
      <p>{props.description}</p>
      <div className="row">
        <div className="col-xs-6 offset-xs-3">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

class Demo extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="m-b-2 header">Verizon Thingspace Automated Feature Validation</h1>
        <hr/>
        <div className="row">
          <div className="col-xs-1 col-md-1">
            <strong>NPDISC-2414</strong>
          </div>
          <div className="col-xs-3 col-md-3 truncate">
            <small>As the CT, I want to know the counts and percentage of cars making illegal moves.</small>
          </div>
          <div className="col-xs-8 col-md-8">
            <CalendarHeatmap
              values={randomValues}
              classForValue={githubClassForValue}
              titleForValue={customTitleForValue}
              tooltipDataAttrs={customTooltipDataAttrs}
              onClick={customOnClick}
              numDays={25}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-md-1">
            <strong>NPDISC-2437</strong>
          </div>
          <div className="col-xs-3 col-md-3 truncate">
            <small>As the CT, I want to know the counts and percentage of bikes making illegal moves.</small>
          </div>
          <div className="col-xs-8 col-md-8">

            <CalendarHeatmap
              values={randomValues}
              classForValue={githubClassForValue}
              titleForValue={customTitleForValue}
              tooltipDataAttrs={customTooltipDataAttrs}
              onClick={customOnClick}
              numDays={25}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(Demo), document.getElementById('demo'));
