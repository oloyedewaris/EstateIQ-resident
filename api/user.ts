import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../utils/axiosInstance"

export const getEstateId = async () => {
    return await AsyncStorage.getItem('estateId')
}

export const updateBioApi = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.put(`/estate_users/estate_user_profile_update/?estate_id=${id}`, body);
}

export const getUserEstateDetails = async () => {
    const id = await getEstateId();
    return await axiosInstance.get(`/estate_users/estate_user_detail/?estate_id=${id}`)
}

export const updateUserImage = async (body) => {
    const id = await getEstateId();
    return await axiosInstance.post(
        `/estate_users/estate_user_profile_image_update/?estate_id==${id}`,
        body,
        { headers: { "Content-Type": "multipart/form-data", } }
    )
}
