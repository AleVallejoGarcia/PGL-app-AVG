import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveRecord = async (object: string) => {
    await AsyncStorage.setItem('record', object);
} 

export const removeRecord = async () => {
    await AsyncStorage.removeItem('record')
}

export const getRecords = async () => {
    return await AsyncStorage.getItem('record')
}

