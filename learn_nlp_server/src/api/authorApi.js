import { find } from "./api";
const API_URL = "http://localhost:8080/api/author";

export async function findByName(name) {
    return find(API_URL, "name", name);
}