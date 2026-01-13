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
    Globe,
    Check,
    DollarSign,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';  // ← TU COMPONENTE
import { styles } from '../styles/Language.style';
import { useNavigation } from '@react-navigation/native';



export const LanguageScreen: React.FC = () => {
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState("es-MX");
    const [selectedCurrency, setSelectedCurrency] = useState("MXN");

    const languages = [
        { code: "es-MX", name: "Español (México)", flag: "🇲🇽" },
        { code: "es-ES", name: "Español (España)", flag: "🇪🇸" },
        { code: "es-AR", name: "Español (Argentina)", flag: "🇦🇷" },
        { code: "es-CO", name: "Español (Colombia)", flag: "🇨🇴" },
        { code: "es-CL", name: "Español (Chile)", flag: "🇨🇱" },
        { code: "en-US", name: "English (United States)", flag: "🇺🇸" },
        { code: "pt-BR", name: "Português (Brasil)", flag: "🇧🇷" },
    ];

    const currencies = [
        { code: "MXN", name: "Peso Mexicano", symbol: "$" },
        { code: "USD", name: "Dólar Estadounidense", symbol: "$" },
        { code: "EUR", name: "Euro", symbol: "€" },
        { code: "ARS", name: "Peso Argentino", symbol: "$" },
        { code: "COP", name: "Peso Colombiano", symbol: "$" },
        { code: "CLP", name: "Peso Chileno", symbol: "$" },
        { code: "PEN", name: "Sol Peruano", symbol: "S/" },
        { code: "BRL", name: "Real Brasileño", symbol: "R$" },
    ];

    const handleLanguageChange = (code: string) => {
        setSelectedLanguage(code);
        const language = languages.find((l) => l.code === code);
        // toast.success("Idioma actualizado", {
        //   description: `Idioma cambiado a ${language?.name}`,
        // });
        console.log(`Idioma cambiado a ${language?.name}`);
    };

    const handleCurrencyChange = (code: string) => {
        setSelectedCurrency(code);
        const currency = currencies.find((c) => c.code === code);
        // toast.success("Moneda actualizada", {
        //   description: `Moneda cambiada a ${currency?.name}`,
        // });
        console.log(`Moneda cambiada a ${currency?.name}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: '#059669' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Idioma y Región</Text>
                <Text style={styles.headerSubtitle}>Configura tu idioma y moneda</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Idioma */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Idioma de la aplicación</Text>
                    <Card style={styles.languageCardStyle}>
                        <View style={styles.listContainer}>
                            {languages.map((language) => {
                                const isSelected = selectedLanguage === language.code;
                                return (
                                    <TouchableOpacity
                                        key={language.code}
                                        style={[
                                            styles.listItem,
                                            isSelected && styles.listItemSelected,
                                        ]}
                                        onPress={() => handleLanguageChange(language.code)}
                                        activeOpacity={0.7}
                                    >
                                        <View style={styles.languageLeft}>
                                            <Text style={styles.flag}>{language.flag}</Text>
                                            <Text style={[
                                                styles.languageName,
                                                isSelected && styles.languageNameSelected,
                                            ]}>
                                                {language.name}
                                            </Text>
                                        </View>
                                        {isSelected && (
                                            <View style={styles.checkIcon}>
                                                <Check size={20} color="#ffffff" />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </Card>
                </View>

                {/* Moneda */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Moneda preferida</Text>
                    <Card style={styles.currencyCardStyle}>
                        <View style={styles.listContainer}>
                            {currencies.map((currency) => {
                                const isSelected = selectedCurrency === currency.code;
                                return (
                                    <TouchableOpacity
                                        key={currency.code}
                                        style={[
                                            styles.listItem,
                                            isSelected && styles.listItemSelected,
                                        ]}
                                        onPress={() => handleCurrencyChange(currency.code)}
                                        activeOpacity={0.7}
                                    >
                                        <View style={styles.currencyLeft}>
                                            <View style={[
                                                styles.currencyIcon,
                                                isSelected && { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
                                            ]}>
                                                <Text style={[
                                                    styles.currencySymbol,
                                                    isSelected && { color: '#10b981' },
                                                ]}>
                                                    {currency.symbol}
                                                </Text>
                                            </View>
                                            <View style={styles.currencyInfo}>
                                                <Text style={[
                                                    styles.currencyName,
                                                    isSelected && styles.currencyNameSelected,
                                                ]}>
                                                    {currency.name}
                                                </Text>
                                                <Text style={styles.currencyCode}>{currency.code}</Text>
                                            </View>
                                        </View>
                                        {isSelected && (
                                            <View style={styles.checkIcon}>
                                                <Check size={20} color="#ffffff" />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </Card>
                </View>

                {/* Información */}
                <Card style={styles.infoCardStyle}>
                    <View style={styles.infoContent}>
                        <Globe size={20} color="#2563eb" style={styles.infoIcon} />
                        <View style={styles.infoText}>
                            <Text style={styles.infoTitle}>Configuración regional</Text>
                            <Text style={styles.infoSubtitle}>
                                El idioma y la moneda afectan cómo se muestran los textos, fechas y cantidades
                                en toda la aplicación.
                            </Text>
                        </View>
                    </View>
                </Card>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
};
