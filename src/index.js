import axios from "axios";
const BASE_URL = "http://localhost:123"


// ------------------- GET

fetch(BASE_URL)
    .then(response => {

        if (!response.ok) {
            throw new Error("Error!!!")
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("finaly"))