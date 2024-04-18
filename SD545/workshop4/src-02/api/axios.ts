import axios from "axios";

export default axios.create({
    baseURL: 'https://api.github.com/search/users?q=',
    headers: {
        'Content-Type': 'application/json'
    }
});