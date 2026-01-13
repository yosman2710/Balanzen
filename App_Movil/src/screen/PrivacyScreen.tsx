import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { ArrowLeft, Shield, Eye, Lock, Database, Download, Trash2, AlertCircle } from 'lucide-react-native';
import { Button } from '../component/ui/Button';
import { Card } from '../component/ui/Card';
import { styles } from '../styles/Privacy.styles';
import { useNavigation } from '@react-navigation/native';

export function PrivacyScreen() {
    const navigation = useNavigation();
    const [shareAnalytics, setShareAnalytics] = useState(true);
    const [shareUsageData, setShareUsageData] = useState(true);
    const [personalizedAds, setPersonalizedAds] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleExportData = () => {
        console.log('Exportando datos');
    };

    const handleDeleteAccount = () => {
        console.log('Solicitud enviada');
        setShowDeleteConfirm(false);
    };

    const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) => (
        <View style={[styles.switchContainer, checked && styles.switchActive]}>
            <TouchableOpacity
                style={[styles.switchThumb, checked && styles.switchThumbActive]}
                onPress={() => onChange(!checked)}
            />
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
                <Text style={styles.headerTitle}>Privacidad</Text>
                <Text style={styles.headerSubtitle}>Controla tus datos y privacidad</Text>
            </View>

            {/* Contenido */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Configuración de privacidad */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Configuración de datos</Text>
                    <Card style={styles.card}>
                        {/* Analíticas */}
                        <TouchableOpacity style={styles.toggleRow} onPress={() => setShareAnalytics(!shareAnalytics)}>
                            <View style={styles.toggleContent}>
                                <View style={[styles.iconCircle, styles.blueIcon]}>
                                    <Eye color="#2563EB" size={20} />
                                </View>
                                <View>
                                    <Text style={styles.toggleTitle}>Compartir analíticas</Text>
                                    <Text style={styles.toggleSubtitle}>Ayuda a mejorar la app</Text>
                                </View>
                            </View>
                            <ToggleSwitch checked={shareAnalytics} onChange={setShareAnalytics} />
                        </TouchableOpacity>

                        {/* Datos de uso */}
                        <TouchableOpacity style={styles.toggleRow} onPress={() => setShareUsageData(!shareUsageData)}>
                            <View style={styles.toggleContent}>
                                <View style={[styles.iconCircle, styles.purpleIcon]}>
                                    <Database color="#7C3AED" size={20} />
                                </View>
                                <View>
                                    <Text style={styles.toggleTitle}>Datos de uso</Text>
                                    <Text style={styles.toggleSubtitle}>Análisis de comportamiento</Text>
                                </View>
                            </View>
                            <ToggleSwitch checked={shareUsageData} onChange={setShareUsageData} />
                        </TouchableOpacity>

                        {/* Anuncios personalizados */}
                        <TouchableOpacity style={styles.toggleRow} onPress={() => setPersonalizedAds(!personalizedAds)}>
                            <View style={styles.toggleContent}>
                                <View style={[styles.iconCircle, styles.orangeIcon]}>
                                    <Lock color="#EA580C" size={20} />
                                </View>
                                <View>
                                    <Text style={styles.toggleTitle}>Anuncios personalizados</Text>
                                    <Text style={styles.toggleSubtitle}>Basados en tu actividad</Text>
                                </View>
                            </View>
                            <ToggleSwitch checked={personalizedAds} onChange={setPersonalizedAds} />
                        </TouchableOpacity>
                    </Card>
                </View>

                {/* Gestión de datos */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tus datos</Text>
                    <Card style={styles.card}>
                        <TouchableOpacity style={styles.actionRow} onPress={handleExportData}>
                            <View style={styles.actionContent}>
                                <View style={[styles.iconCircle, styles.emeraldIcon]}>
                                    <Download color="#059669" size={20} />
                                </View>
                                <View>
                                    <Text style={styles.actionTitle}>Descargar mis datos</Text>
                                    <Text style={styles.actionSubtitle}>Exportar toda tu información</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>

                {/* Información sobre privacidad */}
                <Card style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <Shield color="#2563EB" size={20} style={styles.infoIcon} />
                        <View style={styles.infoContent}>
                            <Text style={styles.infoTitle}>Tu privacidad es importante</Text>
                            <Text style={styles.infoText}>
                                Utilizamos tus datos únicamente para mejorar tu experiencia.
                                Nunca compartiremos tu información financiera con terceros sin tu consentimiento.
                            </Text>
                        </View>
                    </View>
                </Card>

                {/* Zona peligrosa */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Zona de peligro</Text>
                    {showDeleteConfirm ? (
                        <Card style={styles.dangerCard}>
                            <View style={styles.dangerContent}>
                                <View style={styles.dangerRow}>
                                    <AlertCircle color="#DC2626" size={20} style={styles.dangerIcon} />
                                    <View style={styles.dangerText}>
                                        <Text style={styles.dangerTitle}>¿Estás completamente seguro?</Text>
                                        <Text style={styles.dangerDescription}>
                                            Esta acción eliminará permanentemente tu cuenta y todos tus datos.
                                            No podrás recuperarlos después.
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.dangerButtons}>
                                    <Button
                                        onPress={() => setShowDeleteConfirm(false)}
                                        style={styles.cancelButton}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        onPress={handleDeleteAccount}
                                        style={styles.deleteButton}
                                    >
                                        Eliminar Cuenta
                                    </Button>
                                </View>
                            </View>
                        </Card>
                    ) : (
                        <TouchableOpacity style={styles.deleteButtonOutline} onPress={() => setShowDeleteConfirm(true)}>
                            <Trash2 color="#DC2626" size={20} style={styles.deleteIcon} />
                            <Text style={styles.deleteButtonText}>Eliminar mi cuenta</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.spacer} />
            </ScrollView>
        </View>
    );
}
