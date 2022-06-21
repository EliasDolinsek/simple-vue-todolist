import axios from "axios";

const BASE_ITEMS_URL = "http://127.0.0.1:8000/api/v1/items/"

export async function addTodoItem(item) {
    return axios({
        method: "post",
        url: BASE_ITEMS_URL,
        data: item
    });
}

export async function deleteTodoItem(itemId) {
    return axios({
        method: "delete",
        url: BASE_ITEMS_URL + itemId,
    });
}

export async function updateTodoItem(itemId, item){
    return axios({
        method: "put",
        url: BASE_ITEMS_URL + itemId,
        params: item
    })
}

export async function getAllItems(){
    const result = await axios({
        method: "get",
        url: BASE_ITEMS_URL
    })

    return result


}