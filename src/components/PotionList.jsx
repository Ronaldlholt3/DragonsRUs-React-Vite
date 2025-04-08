import React, { useState, useEffect } from 'react';

function PotionList() {
  const [potions, setPotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/potions') // Assuming your backend is running on the same domain or you've set up a proxy
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPotions(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading potions...</p>;
  }

  if (error) {
    return <p>Error fetching potions: {error.message}</p>;
  }

  return (
    <div>
      <h2>Available Potions</h2>
      <ul>
        {potions.map(potion => (
          <li key={potion._id}>
            {potion.name} - ${potion.price} - {potion.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PotionList;