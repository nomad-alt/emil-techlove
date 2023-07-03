import React from 'react';
import { RepoData } from '../api/fetchRepos';
import styles from './RepoCard.module.css';

interface RepoCardProps {
    repo: RepoData;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
    return (
        <div className={styles['repo-card']}>
            <h2>{repo.full_name}</h2>
            <p>{repo.description}</p>
            <p>Watchers: {repo.watchers}</p>
            <p>Stargazers: {repo.stargazers_count}</p>
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">Visit Homepage</a>
        </div>
    );
};

export default RepoCard;
