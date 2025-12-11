import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Wallet } from "lucide-react-native";
import { styles } from "../styles/Login.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navegation/type";
import { login } from "../api/auth"; // 👈 tu servicio de login

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function LoginScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!email.trim()) {
            newErrors.email = "El correo electrónico es requerido";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El correo electrónico no es válido";
        }
        if (!password) {
            newErrors.password = "La contraseña es requerida";
        } else if (password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        setLoading(true);
        setApiError(null);
        try {
            const user = await login(email, password); // 👈 llamada al backend
            console.log("Usuario logueado:", user);
            navigation.navigate("MainTabs"); // 👈 navega a tu pantalla principal
        } catch (err: any) {
            setApiError(err?.response?.data?.error || "Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowLeft size={24} color="rgba(255,255,255,0.9)" />
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <View style={styles.iconContainer}>
                        <Wallet size={32} color="white" strokeWidth={2.5} />
                    </View>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                    <Text style={styles.subtitle}>Accede a tu cuenta de FinanzasPro</Text>
                </View>
            </View>

            {/* Formulario */}
            <ScrollView
                contentContainerStyle={styles.formContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {/* Campo de correo */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Correo electrónico</Text>
                    <View style={[styles.inputWrapper, errors.email && styles.inputError]}>
                        <Mail size={20} color="#94a3b8" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="tu@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                </View>

                {/* Campo de contraseña */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Contraseña</Text>
                    <View style={[styles.passwordWrapper, errors.password && styles.inputError]}>
                        <Lock size={20} color="#94a3b8" style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.flexInput]}
                            secureTextEntry={!showPassword}
                            placeholder="••••••••"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.eyeButton}
                        >
                            {showPassword ? (
                                <EyeOff size={20} color="#64748b" />
                            ) : (
                                <Eye size={20} color="#64748b" />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                </View>

                {/* Botón de login */}
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                    )}
                </TouchableOpacity>

                {apiError && <Text style={{ color: "red", marginTop: 8 }}>{apiError}</Text>}
            </ScrollView>

            {/* Separador */}
            <View style={styles.separator}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorText}>¿No tienes cuenta?</Text>
                <View style={styles.separatorLine} />
            </View>

            {/* Botón registro */}
            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate("Register")}
            >
                <Text style={styles.registerButtonText}>Crear una cuenta</Text>
            </TouchableOpacity>
        </View>
    );
}
