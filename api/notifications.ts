import axiosInstance from "../utils/axiosInstance";
import { getEstateId } from "./user";

export const fetchNotifications = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.get(`/estate_user_notifications/estate_users/?estate_id=${id}`);
}