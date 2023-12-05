import axiosInstance from "../utils/axiosInstance";
import { getEstateId } from "./user";

export const getUtilitiesApi = async () => {
    const id = await getEstateId();
    return await axiosInstance.get(`/estate_utilities/?estate_id=${id}`);
}

export const getUtilityApi = async (utilId) => {
    const id = await getEstateId();
    return await axiosInstance.get(`estate_utilities/${utilId}/?estate_id=${id}`);
}
