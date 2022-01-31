import axios from 'axios';
const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubAPI = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    },
});

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    });
    const res = await githubAPI.get(`/search/users?${params}`);
    return res.data.items;
};

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        githubAPI.get(`/users/${login}`),
        githubAPI.get(`/users/${login}/repos`),
    ]);

    return { user: user.data, repos: repos.data };
};
