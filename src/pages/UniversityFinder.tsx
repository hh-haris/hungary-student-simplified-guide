// src/pages/UniversityFinder.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const UniversityFinder: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [country, setCountry] = useState<string>('United States');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`
        );
        setUniversities(response.data);
      } catch (err) {
        setError('Failed to fetch universities.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [country]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>University Finder</h1>

      <label htmlFor="country">Select a country: </label>
      <input
        id="country"
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {universities.map((uni, index) => (
            <li key={index}>
              <strong>{uni.name}</strong> - {uni.country}{' '}
              <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UniversityFinder;
