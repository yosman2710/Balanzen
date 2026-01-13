import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { ArrowLeft, Lock, Eye, EyeOff, Fingerprint, Shield } from 'lucide-react-native';
import { Button } from '../component/ui/Button';
import { Card } from '../component/ui/Card';
import { styles } from '../styles/Security.styles';
import { updatePassword } from '../api/auth';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';


export function SecurityScreen() {
    const navigation = useNavigation();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [biometricEnabled, setBiometricEnabled] = useState(false);

    // Validar contraseña
    const validatePassword = (password: string) => {
        return password.length >= 6;
    };

    const handleChangePassword = async () => {
        const newErrors: Record<string, string> = {};

        if (!currentPassword) {
            newErrors.currentPassword = 'La contraseña actual es requerida';
        }

        if (!validatePassword(newPassword)) {
            newErrors.newPassword = 'La contraseña debe tener al menos 6 caracteres';
        }

        if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                await updatePassword(newPassword);
                Toast.show({
                    type: 'success',
                    text1: 'Éxito',
                    text2: 'Contraseña actualizada correctamente',
                });
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } catch (error) {
                console.error(error);
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'No se pudo actualizar la contraseña',
                });
            }
        }
    };

    const handleTwoFactorToggle = (value: boolean) => {
        setTwoFactorEnabled(value);
    };

    const handleBiometricToggle = (value: boolean) => {
        setBiometricEnabled(value);
    };

    const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) => (
        <View style={[styles.switchContainer, checked && styles.switchActive]}>
            <TouchableOpacity
                style={[styles.switchThumb, checked && styles.switchThumbActive]}
                onPress={() => onChange(!checked)}
            />
        </View>
    );

    const PasswordInput = ({
        label,
        value,
        onChangeText,
        secureTextEntry,
        error,
        placeholder,
        showPassword,
        setShowPassword,
    }: {
        label: string;
        value: string;
        onChangeText: (text: string) => void;
        secureTextEntry: boolean;
        error?: string;
        placeholder: string;
        showPassword: boolean;
        setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    }) => (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.passwordInputWrapper, error && styles.inputError]}>
                <Lock color="#94A3B8" size={20} style={styles.inputIcon} />
                <TextInput
                    style={styles.textInput}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor="#94A3B8"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    {secureTextEntry ? <Eye color="#94A3B8" size={20} /> : <EyeOff color="#94A3B8" size={20} />}
                </TouchableOpacity>
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <ArrowLeft color="rgba(255,255,255,0.9)" size={20} />
                    <Text style={styles.backButtonText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Seguridad</Text>
                <Text style={styles.headerSubtitle}>Protege tu cuenta y datos</Text>
            </View>

            {/* Contenido */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Cambiar contraseña */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cambiar contraseña</Text>

                    <PasswordInput
                        label="Contraseña actual"
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry={!showCurrentPassword}
                        error={errors.currentPassword}
                        placeholder="••••••••"
                        showPassword={showCurrentPassword}
                        setShowPassword={setShowCurrentPassword}
                    />

                    <PasswordInput
                        label="Nueva contraseña"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={!showNewPassword}
                        error={errors.newPassword}
                        placeholder="••••••••"
                        showPassword={showNewPassword}
                        setShowPassword={setShowNewPassword}
                    />
                    <Text style={styles.helperText}>Debe tener al menos 6 caracteres</Text>

                    <PasswordInput
                        label="Confirmar nueva contraseña"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        error={errors.confirmPassword}
                        placeholder="••••••••"
                        showPassword={showConfirmPassword}
                        setShowPassword={setShowConfirmPassword}
                    />

                    <Button
                        onPress={handleChangePassword}
                        style={styles.changePasswordButton}
                    >
                        <Text style={styles.changePasswordButtonText}>Cambiar Contraseña</Text>
                    </Button>
                </View>

                {/* Autenticación adicional */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Autenticación adicional</Text>
                    <Card style={styles.authCard}>
                        <TouchableOpacity
                            style={styles.toggleRow}
                            onPress={() => handleTwoFactorToggle(!twoFactorEnabled)}
                        >
                            <View style={styles.toggleContent}>
                                <View style={[styles.iconCircle, styles.blueIcon]}>
                                    <Shield color="#2563EB" size={20} />
                                </View>
                                <View>
                                    <Text style={styles.toggleTitle}>Autenticación de dos factores</Text>
                                    <Text style={styles.toggleSubtitle}>Protección adicional con código</Text>
                                </View>
                            </View>
                            <ToggleSwitch checked={twoFactorEnabled} onChange={handleTwoFactorToggle} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.toggleRow}
                            onPress={() => handleBiometricToggle(!biometricEnabled)}
                        >
                            <View style={styles.toggleContent}>
                                <View style={[styles.iconCircle, styles.purpleIcon]}>
                                    <Fingerprint color="#7C3AED" size={20} />
                                </View>
                                <View>
                                    <Text style={styles.toggleTitle}>Autenticación biométrica</Text>
                                    <Text style={styles.toggleSubtitle}>Huella digital o Face ID</Text>
                                </View>
                            </View>
                            <ToggleSwitch checked={biometricEnabled} onChange={handleBiometricToggle} />
                        </TouchableOpacity>
                    </Card>
                </View>

                <Card style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <Shield color="#2563EB" size={20} style={styles.infoIcon} />
                        <View style={styles.infoContent}>
                            <Text style={styles.infoTitle}>Mantén tu cuenta segura</Text>
                            <Text style={styles.infoText}>
                                Te recomendamos usar una contraseña fuerte y habilitar la autenticación de dos
                                factores para proteger tu información financiera.
                            </Text>
                        </View>
                    </View>
                </Card>
            </ScrollView>
        </View>
    );
}
