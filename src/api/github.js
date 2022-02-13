import axios from 'axios';

const githubApi = {
    getPublicReposForUser: async (user) => await axios.get(`https://api.github.com/users/${user}/repos`)
};

export default githubApi;