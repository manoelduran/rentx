import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.15.8:3333",
})

export async function searchCars(): Promise<Car[]> {
    const result = await api.get<Car[]>('/cars')
    return result.data
}