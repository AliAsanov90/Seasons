import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) 
    return lat > 0 ? 'summer' : 'winter';
  return lat > 0 ? 'winter' : 'summer';
};

// SeasonDisplay Component 
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season];
  
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} massive icon`} />
      <h1 className="text">{text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
}

export default SeasonDisplay;
