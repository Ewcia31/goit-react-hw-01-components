import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

function getRandomColour() {
  return Math.floor(Math.random() * 360);
}

function Statistics({ title, stats }) {
  return (
    <div className="stats-card">
      <div className="stats-card-title">
        <h2 className="stats-title">{title}</h2>
      </div>
      <ul className="stats-ul">
        {stats.map(stat => {
          let saturation = 100;
          let lightness = 50;

          if (stat.percentage > 5) saturation = 80;
          if (stat.percentage > 20) saturation = 70;
          if (stat.percentage > 50) saturation = 60;

          let hue = getRandomColour();

          let style = {
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          };

          return (
            <li key={stat.id} className="item" style={style}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.string,
};
