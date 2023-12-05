import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};

export const storeData2 = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (e) {
    return false;
  }
};

//Read Date
export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return false;
  }
};

export const removeData = async key => {
  try {
    const value = await AsyncStorage.removeItem(key);
    if (value !== null) {
      return value;
    }
    if (value === null) {
      return true;
    }
  } catch (e) {
    return false;
  }
};
