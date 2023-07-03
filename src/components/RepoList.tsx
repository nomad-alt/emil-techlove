import React from 'react';
import { RepoData } from '../api/fetchRepos';
import styles from './RepoList.module.css';

interface RepoListProps {
    repos: RepoData[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
        <div>
            {repos.map((repo: RepoData) => (
                <div className={styles['repo-card']} key={repo.full_name}>
                    <h2>{repo.full_name}</h2>
                    <p>{repo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RepoList;

