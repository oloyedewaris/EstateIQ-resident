import axiosInstance from "../utils/axiosInstance";
import { getEstateId } from "./user";

export const createPrivateCodeApi = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(`/estate_access_logs/?estate_id=${id}`, body);
}

export const createExitCodeApi = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(`/estate_access_logs/exit_pass_create/?estate_id=${id}`, body);
}

export const createWayBillCodeApi = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(`/estate_access_logs/waybill_create/?estate_id=${id}`, body);
}

export const getAccessLogs = async (search, status) => {
    const id = await getEstateId();
    return await axiosInstance.get(`/estate_access_logs/?estate_id=${id}&search=${search}&status=${status}`);
}
export const modifyAccessLog = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(`/estate_access_logs/modify/?estate_id=${id}`, body);
}
