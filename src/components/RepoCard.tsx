import React from 'react';
import { RepoData } from '../api/fetchRepos';
import styles from './RepoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';

interface RepoCardProps {
    repo: RepoData;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className={styles.card}>
      <h2>{repo.full_name}</h2>
      <p>{repo.description}</p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <FontAwesomeIcon icon={faEye} />
          <p>{repo.watchers}</p>
        </div>
        <div className={styles.stat}>
          <FontAwesomeIcon icon={faStar} />
          <p>{repo.stargazers_count}</p>
        </div>
      </div>
      <a className={styles.link} href={repo.homepage} target="_blank" rel="noopener noreferrer">
        Visit Homepage
      </a>
    </div>
  );
};

export default RepoCard;

