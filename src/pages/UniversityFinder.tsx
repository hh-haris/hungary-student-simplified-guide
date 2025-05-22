import React, { useState } from 'react';
import axios from 'axios';

const UniversityFinder: React.FC = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUniversities = async () => {
    if (!country.trim()) {
      setError('Please enter a country name.');
      return;
    }

    setLoading(true);
    setError(null);
    setUniversities([]);

    try {
      const response = await axios.get(
        `https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`
      );
      setUniversities(response.data);
    } catch (err) {
      setError('Failed to fetch universities. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>University Finder</h1>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ padding: 8, width: '300px', marginRight: 10 }}
      />
      <button onClick={fetchUniversities} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {universities.map((uni) => (
          <li key={uni.name}>
            <strong>{uni.name}</strong> — {uni.country} <br />
            Website: <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">{uni.web_pages[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityFinder;
