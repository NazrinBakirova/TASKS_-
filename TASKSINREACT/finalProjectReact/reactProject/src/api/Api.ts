import axios from "axios";

const API = axios.create({
baseURL: "https://quizapi.io/api/v1",
headers: {
    "X-Api-Key":"3GiDsdmcN0Fu9T49vDD8CM251c0SnWbw6g8B1Ryy",
},

});

export const fetchQuestions = (category: string)=>{
    return API.get("/questions", {
        params: {
            category: category.toLowerCase(),
            difficulty: "easy",
            limit: 10,
        },
    });
};