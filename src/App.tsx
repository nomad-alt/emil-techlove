import React, { useEffect, useState } from 'react';
import { RepoData, fetchRepos } from './api/fetchRepos';
import RepoList from './components/RepoList';

const App: React.FC = () => {
    const [repoData, setRepoData] = useState<RepoData[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const data: RepoData[] = await fetchRepos();
            setRepoData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <RepoList repos={repoData} />
        </div>
    );
};

export default App;

