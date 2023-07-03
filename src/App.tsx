import React, { useEffect, useState } from 'react';
import { RepoData, fetchRepos } from './api/fetchRepos';

const App: React.FC = () => {
    const [repoData, setRepoData] = useState<RepoData[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const data: RepoData[] = await fetchRepos();
            setRepoData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(repoData);
    }, [repoData]);

    return (
        <div>
            <h1>GitHub Repos</h1>
        </div>
    );
};

export default App;

