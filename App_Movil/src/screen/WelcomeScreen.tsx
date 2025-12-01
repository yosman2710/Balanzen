import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { TrendingUp, PiggyBank, Wallet, ArrowRight } from "lucide-react-native";
import { styles } from "../styles/welcome.style";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../navegation/type';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export function WelcomeScreen() {

  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header con imagen de fondo */}
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/welcome.jpg")}
          style={styles.headerImage}
        >
          <View style={styles.headerContent}>
            <View style={styles.logoCircle}>
              <Wallet color="white" size={40} strokeWidth={2.5} />
            </View>
            <Text style={styles.title}>FinanzasPro</Text>
            <Text style={styles.subtitle}>Tu compañero financiero personal</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Contenido principal */}
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Toma el control de tu dinero</Text>
          <Text style={styles.sectionText}>
            Gestiona tus ingresos, gastos y ahorros de manera inteligente
          </Text>
        </View>

        {/* Características */}
        <View style={styles.feature}>
          <View style={[styles.iconBox, { backgroundColor: "#D1FAE5" }]}>
            <TrendingUp color="#059669" size={24} />
          </View>
          <View>
            <Text style={styles.featureTitle}>Análisis en tiempo real</Text>
            <Text style={styles.featureText}>Visualiza tus finanzas con gráficos detallados</Text>
          </View>
        </View>

        <View style={styles.feature}>
          <View style={[styles.iconBox, { backgroundColor: "#DBEAFE" }]}>
            <PiggyBank color="#2563EB" size={24} />
          </View>
          <View>
            <Text style={styles.featureTitle}>Metas de ahorro</Text>
            <Text style={styles.featureText}>Establece objetivos y alcanza tus sueños</Text>
          </View>
        </View>

        <View style={styles.feature}>
          <View style={[styles.iconBox, { backgroundColor: "#EDE9FE" }]}>
            <Wallet color="#7C3AED" size={24} />
          </View>
          <View>
            <Text style={styles.featureTitle}>Control de gastos</Text>
            <Text style={styles.featureText}>Registra y categoriza cada transacción</Text>
          </View>
        </View>

        {/* Botones */}
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.primaryButtonText}>Comenzar</Text>
          <ArrowRight color="white" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryButtonText}>Ya tengo cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Gratis • Sin tarjeta de crédito</Text>
      </View>
    </ScrollView>
  );
}