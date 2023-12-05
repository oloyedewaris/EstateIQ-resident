import axiosInstance from "../utils/axiosInstance";

export const fetchEmergency = async () => {
    return await axiosInstance.get(`/estate_adverts/emergency/`);
}

export const fetchHomeServices = async () => {
    return await axiosInstance.get(`/estate_adverts/home_service/`);
}

export const fetchMarketplace = async () => {
    return await axiosInstance.get(`/estate_adverts/marketplace/`);
}

