import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const UniversityFinder: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<University[]>(
          `http://universities.hipolabs.com/search?name=${searchTerm}`
        );
        setUniversities(response.data);
      } catch (err) {
        setError('Failed to fetch universities. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchUniversities();
    } else {
      setUniversities([]);
    }
  }, [searchTerm]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>University Finder</h1>
      <input
        type="text"
        placeholder="Search for a university"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1rem'
        }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {universities.map((university, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <strong>{university.name}</strong> - {university.country}
            <br />
            <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityFinder;
