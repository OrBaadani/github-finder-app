import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
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
    console.log(res.data);
    return res.data.items;
};

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        githubAPI.get(`/users/${login}`),
        githubAPI.get(`/users/${login}/repos`),
    ]);

    return { user: user.data, repos: repos.data };
};
