import axios from 'axios';

export const getGithubRepo = async (value) => {
    return await axios.get(`https://api.github.com/users/${value}`)
        .then(res => {
            return res;
        })
}

export const getGithubFollower = async (url) => {
    return await axios.get(url)
        .then(res => {
            return res;
        })
}