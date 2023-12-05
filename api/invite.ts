import axiosInstance from "../utils/axiosInstance";
import { getEstateId } from "./user";

export const addMembers = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(
        `/estate_users/resident_invite_mobile/?estate_id=${id}`,
        body,
        { headers: { "Content-Type": "multipart/form-data", Accept: "application/json" } }
    );
}

export const getMembers = async (option) => {
    const id = await getEstateId();
    return await axiosInstance.get(`/estate_users/resident_list/?estate_id=${id}&user_category=${option}`,);
}

