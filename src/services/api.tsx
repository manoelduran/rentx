import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:3000",
})

export async function getCars(): Promise<void> {
    const result = await api.get('/cars')
}