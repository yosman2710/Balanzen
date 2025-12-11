import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_KEY } from "../config/constants";

export const setToken = async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => {
    return AsyncStorage.getItem(TOKEN_KEY);
};

export const removeToken = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
};
