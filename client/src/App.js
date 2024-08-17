import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [prompt, setPrompt] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleGenerateQuery = async () => {
        try {
            const response = await axios.post('/generate_query', { prompt });
            setQuery(response.data.query);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRunQuery = async () => {
        try {
            const response = await axios.post('/run_query', { query });
            setResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>SQL Query Generator</h1>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your query prompt"
            />
            <button onClick={handleGenerateQuery}>Generate Query</button>
            <button onClick={handleRunQuery}>Run Query</button>
            <div>
                <h2>Generated SQL Query</h2>
                <pre>{query}</pre>
            </div>
            <div>
                <h2>Results</h2>
                <table>
                    <thead>
                        <tr>
                            {/* Add your table headers here */}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((row, index) => (
                            <tr key={index}>
                                {/* Render your table rows here */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
