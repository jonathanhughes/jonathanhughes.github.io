import axios from 'axios';

const githubApi = {
    getUser: async (user) => (await axios.get(`https://api.github.com/users/${user}`))?.data,
    getReposByUser: async (user) => (await axios.get(`https://api.github.com/users/${user}/repos`))?.data,
    getStarredByUser: async (user) => (await axios.get(`https://api.github.com/users/${user}/starred`))?.data
};

export default githubApi;