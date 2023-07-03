import React from 'react';
import { RepoData } from '../api/fetchRepos';
import RepoCard from './RepoCard';

interface RepoListProps {
    repos: RepoData[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
        <div>
            {repos.map((repo: RepoData) => <RepoCard key={repo.full_name} repo={repo} />)}
        </div>
    );
};

export default RepoList;

