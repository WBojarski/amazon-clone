import axios from "axios";

const instance = axios.create({
    baseURL: "https://amazon-stripe.herokuapp.com/",
});

export default instance;
