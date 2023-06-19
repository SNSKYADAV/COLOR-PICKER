import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={handleButtonClick}>Pick a colour</button>
      {showColors && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                margin: '5px',
                cursor: 'pointer'
              }}
              onClick={() => handleColorClick(color)}
            >
              {color === selectedColor ? 'Selected' : ''}
            </li>
          ))}
        </ul>
      )}
      {selectedColor && <p>Selected color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;