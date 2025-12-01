import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff, Calendar, Globe, Users } from 'lucide-react-native';
import { styles } from '../styles/register.style';
import { SuccessModal } from '../components/SuccessModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../navegation/type';
import { Picker } from '@react-native-picker/picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const countries = [
    "México", "España", "Argentina", "Colombia", "Chile", "Perú", "Venezuela",
    "Ecuador", "Guatemala", "Bolivia", "República Dominicana", "Honduras",
    "Paraguay", "El Salvador", "Nicaragua", "Costa Rica", "Panamá", "Uruguay",
    "Puerto Rico", "Estados Unidos",
];

const genders = ["Masculino", "Femenino", "Otro", "Prefiero no decir"];

export function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [country, setCountry] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);



    // Errores
    const [errors, setErrors] = useState<Record<string, string>>({});

    const navigation = useNavigation<NavigationProp>();
    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: birthdate ? new Date(birthdate) : new Date(),
            onChange: (event, date) => {
                if (event.type === "set" && date) {
                    setBirthdate(date.toISOString().split("T")[0]); // YYYY-MM-DD
                }
            },
            mode: "date",
            is24Hour: true,
            minimumDate: new Date(1900, 0, 1),
            maximumDate: new Date(),
        });
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!name.trim()) {
            newErrors.name = "El nombre es requerido";
        } else if (name.trim().length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres";
        }

        if (!email.trim()) {
            newErrors.email = "El email es requerido";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email inválido";
        }

        if (!password) {
            newErrors.password = "La contraseña es requerida";
        } else if (password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Confirma tu contraseña";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }

        if (!gender) {
            newErrors.gender = "Selecciona tu género";
        }

        if (!birthdate) {
            newErrors.birthdate = "La fecha de nacimiento es requerida";
        } else {
            const birth = new Date(birthdate);
            const today = new Date();
            let age = today.getFullYear() - birth.getFullYear(); // ✅ let en lugar de const
            const monthDiff = today.getMonth() - birth.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--;  // ✅ Ahora SÍ funciona
            }
            if (age < 13) {
                newErrors.birthdate = "Debes tener al menos 13 años";
            }
            if (age > 120) {
                newErrors.birthdate = "Fecha inválida";
            }
        }

        if (!country) {
            newErrors.country = "Selecciona tu país";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = () => {
        if (validateForm()) {
            // Aquí iría tu llamada a la API
            setModalVisible(true);
        }
    };

    const handleModalClose = () => {
        setModalVisible(false);
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#047857" />

            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <ArrowLeft color="white" size={24} />
                </TouchableOpacity>
                <Text style={styles.title}>Crear Cuenta</Text>
                <Text style={styles.subtitle}>Únete a FinanzasPro hoy mismo</Text>
            </View>

            <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
                <View style={{ height: 20 }} />

                {/* Nombre */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nombre Completo</Text>
                    <View style={[styles.inputWrapper, errors.name && styles.inputError]}>
                        <User color="#64748b" size={20} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Ej. Juan Pérez"
                            placeholderTextColor="#94a3b8"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Correo Electrónico</Text>
                    <View style={[styles.inputWrapper, errors.email && styles.inputError]}>
                        <Mail color="#64748b" size={20} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="ejemplo@correo.com"
                            placeholderTextColor="#94a3b8"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                </View>

                {/* Género */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Género</Text>
                    <View style={[styles.inputWrapper, errors.gender && styles.inputError]}>
                        <Users color="#64748b" size={20} style={styles.icon} />
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            style={{ flex: 1, color: '#000' }}
                            dropdownIconColor="#64748b"
                        >
                            <Picker.Item label="Selecciona tu género" value="" color="#94a3b8" />
                            {genders.map((g) => (
                                <Picker.Item key={g} label={g} value={g} color="#000" />
                            ))}
                        </Picker>
                    </View>
                    {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
                </View>

                {/* Fecha de nacimiento */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Fecha de Nacimiento</Text>
                    <TouchableOpacity
                        style={[styles.inputWrapper, errors.birthdate && styles.inputError]}
                        onPress={showDatePicker}
                    >
                        <Calendar color="#64748b" size={20} style={styles.icon} />
                        <Text style={styles.inputText}>
                            {birthdate || "Selecciona tu fecha"}
                        </Text>
                    </TouchableOpacity>
                    {errors.birthdate && <Text style={styles.errorText}>{errors.birthdate}</Text>}
                </View>


                {/* País */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>País</Text>
                    <View style={[styles.inputWrapper, errors.country && styles.inputError]}>
                        <Globe color="#64748b" size={20} style={styles.icon} />
                        <Picker
                            selectedValue={country}
                            onValueChange={(itemValue) => setCountry(itemValue)}
                            style={{ flex: 1, color: '#000' }}
                            dropdownIconColor="#64748b"
                        >
                            <Picker.Item label="Selecciona tu país" value="" color="#94a3b8" />
                            {countries.map((c) => (
                                <Picker.Item key={c} label={c} value={c} color="#000" />
                            ))}
                        </Picker>
                    </View>
                    {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
                </View>

                {/* Contraseña */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Contraseña</Text>
                    <View style={[styles.passwordWrapper, errors.password && styles.inputError]}>
                        <Lock color="#64748b" size={20} style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.flexInput]}
                            placeholder="••••••••"
                            placeholderTextColor="#94a3b8"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeButton}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff color="#64748b" size={20} />
                            ) : (
                                <Eye color="#64748b" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                </View>

                {/* Confirmar Contraseña */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Confirmar Contraseña</Text>
                    <View style={[styles.passwordWrapper, errors.confirmPassword && styles.inputError]}>
                        <Lock color="#64748b" size={20} style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.flexInput]}
                            placeholder="••••••••"
                            placeholderTextColor="#94a3b8"
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeButton}
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <EyeOff color="#64748b" size={20} />
                            ) : (
                                <Eye color="#64748b" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                </View>

                {/* Botón Registro */}
                <TouchableOpacity
                    style={[
                        styles.registerButton,
                        Object.values(errors).some(Boolean) && styles.registerButtonDisabled
                    ]}
                    onPress={handleRegister}
                    disabled={Object.values(errors).some(Boolean)}
                >
                    <Text style={styles.registerButtonText}>Registrarse</Text>
                </TouchableOpacity>

                {/* Link a Login */}
                <View style={styles.loginLinkContainer}>
                    <Text style={styles.loginLinkText}>¿Ya tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>Inicia Sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modales */}


            <SuccessModal
                visible={modalVisible}
                onClose={handleModalClose}
                title="¡Bienvenido!"
                message={`Tu cuenta ha sido creada exitosamente, ${name.split(' ')[0] || 'usuario'}.`}
                buttonText="Ir al Inicio"
            />
        </SafeAreaView>
    );
}
