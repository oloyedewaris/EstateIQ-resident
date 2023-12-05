import axiosInstance from "../utils/axiosInstance";

export const fetchAdverts = async () => {
    return await axiosInstance.get(`/estate_adverts/adverts/`);
}

export const fetchAnnouncements = async () => {
    return await axiosInstance.get(`/estate_adverts/announcement/`);
}
