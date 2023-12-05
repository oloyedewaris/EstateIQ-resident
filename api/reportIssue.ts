import axiosInstance from "../utils/axiosInstance";
import { getEstateId } from "./user";

export const reportIssueApi = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(`/estate_complaints/?estate_id=${id}`, body);
}
export const fetchIssues = async (status) => {
    const id = await getEstateId();
    return await axiosInstance.get(`/estate_complaints/?estate_id=${id}&status=${status}`);
}

