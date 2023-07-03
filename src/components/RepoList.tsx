import React from 'react';
import { RepoData } from '../api/fetchRepos';

interface RepoListProps {
    repos: RepoData[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
        <div>
            {repos.map((repo: RepoData) => (
                <div key={repo.full_name}>
                    <h2>{repo.full_name}</h2>
                </div>
            ))}
        </div>
    );
};

export default RepoList;
