import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    User,
    Mail,
    Calendar,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';  // ← TU COMPONENTE
import { styles } from '../styles/EditProfile.style';
import { updateUsuario, UsuarioResponse, getUserById } from '../api/usuario';
import { idUser } from '../api/client';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';



export const EditProfileScreen: React.FC = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        gender: '',
        birthdate: '',
        country: '',
    });
    const navigation = useNavigation();
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [tempDate, setTempDate] = useState(new Date());

    const onDateChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || tempDate;
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setTempDate(currentDate);
            setUser({ ...user, birthdate: currentDate.toISOString().split('T')[0] });
        }
    };

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userId = await idUser();
                if (userId) {
                    const userData = await getUserById(userId);
                    setUser({
                        name: userData.nombre || '',
                        email: userData.email || '',
                        gender: userData.genero || '',
                        birthdate: userData.fecha_nacimiento ? userData.fecha_nacimiento.split('T')[0] : '',
                        country: userData.pais || '',
                    });
                }
            } catch (error) {
                console.error("Error cargando perfil:", error);
                Alert.alert("Error", "No se pudo cargar la información del usuario");
            }
        };
        loadUserData();
    }, []);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!user.name.trim()) {
            newErrors.name = "El nombre es obligatorio";
        }

        if (!user.email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            newErrors.email = "Correo electrónico inválido";
        }

        if (!user.gender) {
            newErrors.gender = "Selecciona tu género";
        }

        if (!user.birthdate) {
            newErrors.birthdate = "La fecha de nacimiento es obligatoria";
        }

        if (!user.country) {
            newErrors.country = "Selecciona tu país";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const userId = await idUser();
                if (!userId) {
                    Alert.alert("Error", "No se pudo identificar al usuario.");
                    return;
                }

                // Mapeo de datos para el backend
                const payload: UsuarioResponse = {
                    nombre: user.name.trim(),
                    email: user.email.trim(),
                    fecha_nacimiento: user.birthdate,
                    genero: user.gender,
                    pais: user.country,
                };

                await updateUsuario(userId, payload);

                Alert.alert("Perfil actualizado", "Tu información se ha guardado correctamente", [
                    {
                        text: "OK", onPress: () => {
                            navigation.goBack();
                        }
                    }
                ]);

            } catch (error) {
                console.error("Error al actualizar perfil:", error);
                Alert.alert("Error", "No se pudo actualizar el perfil. Intenta de nuevo.");
            }
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    const genders = ["masculino", "femenino"];

    const countries = [
        "México", "España", "Argentina", "Colombia", "Chile", "Perú", "Venezuela",
        "Ecuador", "Guatemala", "Bolivia", "República Dominicana", "Honduras",
        "Paraguay", "El Salvador", "Nicaragua", "Costa Rica", "Panamá", "Uruguay",
        "Puerto Rico", "Estados Unidos",
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: '#059669' }]}>
                <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Editar Perfil</Text>
                <Text style={styles.headerSubtitle}>Actualiza tu información personal</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Formulario en Card */}
                <Card style={styles.formCardStyle}>
                    {/* Nombre completo */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Nombre completo</Text>
                        <View style={[styles.inputWrapper, errors.name && styles.inputError]}>
                            <User size={20} color="#94a3b8" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Juan Pérez"
                                value={user.name}
                                onChangeText={(name) => setUser({ ...user, name })}
                                autoCapitalize="words"
                            />
                        </View>
                        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                    </View>

                    {/* Correo electrónico */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <View style={[styles.inputWrapper, errors.email && styles.inputError]}>
                            <Mail size={20} color="#94a3b8" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="correo@ejemplo.com"
                                value={user.email}
                                onChangeText={(email) => setUser({ ...user, email })}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    </View>

                    {/* Género */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Género</Text>
                        <View style={[styles.selectWrapper, errors.gender && styles.inputError]}>
                            <View style={styles.selectContainer}>
                                <Picker
                                    selectedValue={user.gender}
                                    onValueChange={(itemValue) => setUser({ ...user, gender: itemValue })}
                                    style={{ width: '100%', height: 50 }}
                                    dropdownIconColor="#94a3b8"
                                >
                                    <Picker.Item label="Selecciona tu género" value="" color="#94a3b8" />
                                    {genders.map((g) => (
                                        <Picker.Item key={g} label={g} value={g} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                        {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
                    </View>

                    {/* Fecha de nacimiento */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Fecha de nacimiento</Text>
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            style={[styles.inputWrapper, errors.birthdate && styles.inputError]}
                        >
                            <Calendar size={20} color="#94a3b8" style={styles.inputIcon} />
                            <Text style={[styles.input, { paddingVertical: 12 }]}>
                                {user.birthdate || 'AAAA-MM-DD'}
                            </Text>
                        </TouchableOpacity>
                        {errors.birthdate && <Text style={styles.errorText}>{errors.birthdate}</Text>}
                        {showDatePicker && (
                            <DateTimePicker
                                value={user.birthdate ? new Date(user.birthdate) : new Date()}
                                mode="date"
                                display="default"
                                onChange={onDateChange}
                                maximumDate={new Date()}
                            />
                        )}
                    </View>

                    {/* País */}
                    <View style={styles.field}>
                        <Text style={styles.label}>País</Text>
                        <View style={[styles.selectWrapper, errors.country && styles.inputError]}>
                            <View style={styles.selectContainer}>
                                <Picker
                                    selectedValue={user.country}
                                    onValueChange={(itemValue) => setUser({ ...user, country: itemValue })}
                                    style={{ width: '100%', height: 50 }}
                                    dropdownIconColor="#94a3b8"
                                >
                                    <Picker.Item label="Selecciona tu país" value="" color="#94a3b8" />
                                    {countries.map((c) => (
                                        <Picker.Item key={c} label={c} value={c} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                        {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
                    </View>
                </Card>

                {/* Botones */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
};
