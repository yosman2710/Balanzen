import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Palette,
    Sun,
    Moon,
    Monitor,
    Check,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';  // ← TU COMPONENTE
import { styles } from '../styles/Appearance.style';
import { useNavigation } from '@react-navigation/native';


type Theme = "light" | "dark" | "system";

export const AppearanceScreen: React.FC = () => {
    const navigation = useNavigation();
    const [selectedTheme, setSelectedTheme] = useState<Theme>("light");
    const [selectedAccent, setSelectedAccent] = useState("emerald");

    const themes = [
        {
            id: "light" as Theme,
            name: "Claro",
            icon: Sun,
            description: "Interfaz brillante y clara",
        },
        {
            id: "dark" as Theme,
            name: "Oscuro",
            icon: Moon,
            description: "Reduce el brillo de la pantalla",
        },
        {
            id: "system" as Theme,
            name: "Sistema",
            icon: Monitor,
            description: "Sigue la configuración del dispositivo",
        },
    ];

    const accentColors = [
        { id: "emerald", name: "Esmeralda", color: "#10b981", gradient: "#059669" },
        { id: "blue", name: "Azul", color: "#3b82f6", gradient: "#2563eb" },
        { id: "purple", name: "Púrpura", color: "#8b5cf6", gradient: "#7c3aed" },
        { id: "pink", name: "Rosa", color: "#ec4899", gradient: "#db2777" },
        { id: "orange", name: "Naranja", color: "#f97316", gradient: "#ea580c" },
        { id: "teal", name: "Turquesa", color: "#14b8a6", gradient: "#0d9488" },
    ];

    const handleThemeChange = (theme: Theme) => {
        setSelectedTheme(theme);
        // toast.success("Tema actualizado", {
        //   description: `Tema ${theme === "light" ? "claro" : theme === "dark" ? "oscuro" : "del sistema"} aplicado`,
        // });
        console.log(`Tema ${theme} aplicado`);
    };

    const handleAccentChange = (accent: string) => {
        setSelectedAccent(accent);
        const accentName = accentColors.find((a) => a.id === accent)?.name;
        // toast.success("Color de acento actualizado", {
        //   description: `Color ${accentName?.toLowerCase()} aplicado`,
        // });
        console.log(`Color ${accentName} aplicado`);
    };

    const currentAccent = accentColors.find((a) => a.id === selectedAccent)!;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: '#059669' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Apariencia</Text>
                <Text style={styles.headerSubtitle}>Personaliza cómo se ve la app</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Tema */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tema</Text>
                    <View style={styles.themeList}>
                        {themes.map((theme) => {
                            const Icon = theme.icon;
                            const isSelected = selectedTheme === theme.id;
                            return (
                                <TouchableOpacity
                                    key={theme.id}
                                    style={[
                                        styles.themeCard,
                                        isSelected && styles.themeCardSelected,
                                    ]}
                                    onPress={() => handleThemeChange(theme.id)}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.themeCardContent}>
                                        <View
                                            style={[
                                                styles.themeIcon,
                                                isSelected && { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
                                            ]}
                                        >
                                            <Icon
                                                size={24}
                                                color={isSelected ? '#10b981' : '#6b7280'}
                                            />
                                        </View>
                                        <View style={styles.themeInfo}>
                                            <Text style={styles.themeName}>{theme.name}</Text>
                                            <Text style={styles.themeDescription}>{theme.description}</Text>
                                        </View>
                                        {isSelected && (
                                            <View style={styles.checkIcon}>
                                                <Check size={20} color="#ffffff" />
                                            </View>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Color de acento */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Color de acento</Text>
                    <Card style={styles.accentCardStyle}>
                        <View style={styles.accentGrid}>
                            {accentColors.map((accent) => {
                                const isSelected = selectedAccent === accent.id;
                                return (
                                    <TouchableOpacity
                                        key={accent.id}
                                        style={styles.accentButton}
                                        onPress={() => handleAccentChange(accent.id)}
                                    >
                                        <View style={[
                                            styles.accentColor,
                                            { backgroundColor: accent.gradient },
                                            isSelected && styles.accentSelected,
                                        ]}>
                                            {isSelected && (
                                                <View style={styles.accentCheckWrapper}>
                                                    <View style={styles.accentCheck}>
                                                        <Check size={16} color="#111827" />
                                                    </View>
                                                </View>
                                            )}
                                        </View>
                                        <Text style={[
                                            styles.accentName,
                                            isSelected && styles.accentNameSelected,
                                        ]}>
                                            {accent.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </Card>
                </View>

                {/* Vista previa */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Vista previa</Text>
                    <Card style={styles.previewCardStyle}>
                        {/* Header preview */}
                        <View style={[styles.previewHeader, { backgroundColor: currentAccent.gradient }]}>
                            <Text style={styles.previewTitle}>Panel de Control</Text>
                            <Text style={styles.previewSubtitle}>Así se verá tu aplicación con esta configuración</Text>
                        </View>
                        {/* Content preview */}
                        <View style={styles.previewContent}>
                            <View style={styles.previewItem}>
                                <View style={[
                                    styles.previewIcon,
                                    { backgroundColor: `${currentAccent.color}20` },
                                ]}>
                                    <Palette size={20} color={currentAccent.color} />
                                </View>
                                <View style={styles.previewInfo}>
                                    <Text style={styles.previewItemTitle}>Elemento de ejemplo</Text>
                                    <Text style={styles.previewItemSubtitle}>Texto descriptivo</Text>
                                </View>
                            </View>
                            <View style={styles.previewProgress}>
                                <View style={[
                                    styles.previewProgressTrack,
                                    { backgroundColor: '#f1f5f9' },
                                ]}>
                                    <View style={[
                                        styles.previewProgressBar,
                                        { backgroundColor: currentAccent.color, width: '66%' },
                                    ]} />
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>

                {/* Información */}
                <Card style={styles.infoCardStyle}>
                    <View style={styles.infoContent}>
                        <Palette size={20} color="#6b7280" style={styles.infoIcon} />
                        <View style={styles.infoText}>
                            <Text style={styles.infoTitle}>Personaliza tu experiencia</Text>
                            <Text style={styles.infoSubtitle}>
                                Los cambios se aplicarán inmediatamente en toda la aplicación.
                            </Text>
                        </View>
                    </View>
                </Card>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
};
