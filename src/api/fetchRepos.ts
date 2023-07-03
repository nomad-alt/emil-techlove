import axios from 'axios';

const repos = [
    "ionic-team/ionic-framework",
    "facebook/react-native",
    "reduxjs/redux-toolkit",
    "WordPress/WordPress",
    "facebook/react",
    "laravel/laravel",
    "expressjs/express",
];

export interface RepoData {
    full_name: string;
    description: string;
    watchers: number;
    stargazers_count: number;
    homepage: string;
}

export const fetchRepos = async (): Promise<RepoData[]> => {
    const data: RepoData[] = await Promise.all(
        repos.map(async (repo): Promise<RepoData> => {
            const response = await axios.get<RepoData>(`https://api.github.com/repos/${repo}`);
            return response.data;
        })
    );
    return data;
};

