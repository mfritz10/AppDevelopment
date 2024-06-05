import React, { useState, useEffect } from 'react';

function AppTest() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetch JSON data
    fetch('..movie.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []); // Empty dependency array ensures the effect runs once after initial render

  if (jsonData === null) {
    return <div>Loading...</div>;
  }

  // Now you can use jsonData in your component
  return (
    <div>
      {jsonData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default AppTest;
