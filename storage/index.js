import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async obj => {
  try {
    await AsyncStorage.setItem(Object.keys(obj)[0], obj[Object.keys(obj)[0]]);
  } catch (e) {}
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {}
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};
