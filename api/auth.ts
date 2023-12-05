import axiosInstance from "../utils/axiosInstance"

export const requestOTP = async (body) => {
  return await axiosInstance.post(
    '/auth/request_otp/',
    body,
    { headers: { "Content-Type": "multipart/form-data" } }
  )
}

export const resetPassword = async (body) => {
  return await axiosInstance.post('/auth/forgot_password/', body, { headers: { "Content-Type": "multipart/form-data" } })
}
export const setPassword = async (body) => {
  return await axiosInstance.post('/auth/set_password/', body, { headers: { "Content-Type": "multipart/form-data" } })
}

export const registerApi = async (body) => {
  return await axiosInstance.post('/auth/registration/', body)
}

export const loginApi = async (body) => {
  return await axiosInstance.post('/auth/login/', body)
}

export const getUserApi = async () => {
  return await axiosInstance.get('/users')
}

export const createPin = async (body) => {
  return await axiosInstance.post('/users/pins/create', body)
}

export const verifyPin = async (body) => {
  return await axiosInstance.post('/users/pins/verify', body)
}
export const listEstates = async (id) => {
  return await axiosInstance.get(`/estates/estate_info/${id}`)
}
