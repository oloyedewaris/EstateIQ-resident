import axiosInstance from "../utils/axiosInstance"

export const getEstateDetails = async (id) => {
    return await axiosInstance.get(`/estates/estate_detail/${id}`)
}

export const getUserEstates = async () => {
    return await axiosInstance.get(`/estate_users/user_list/`)
}

