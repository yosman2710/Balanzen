import { Platform } from "react-native";
export const API_URL =
    Platform.OS === "android"
        ? "http://10.0.2.2:3000" // Android Emulator
        : "http://localhost:3000"; // iOS Simulator

export const TOKEN_KEY = "balanzen_token";