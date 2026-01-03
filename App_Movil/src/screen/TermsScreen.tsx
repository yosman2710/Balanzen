import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Shield,
    Eye,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';  // ← TU COMPONENTE
import { styles } from '../styles/Terms.style';
import { useNavigation } from '@react-navigation/native';



export const TermsScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: '#059669' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Términos y Condiciones</Text>
                <Text style={styles.headerSubtitle}>Políticas de uso de FinanzasPro</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Última actualización */}
                <Card style={styles.updateCardStyle}>
                    <Text style={styles.updateText}>
                        Última actualización: <Text style={styles.updateDate}>27 de diciembre de 2025</Text>
                    </Text>
                </Card>

                {/* Introducción */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Introducción</Text>
                    <Text style={styles.sectionText}>
                        Bienvenido a FinanzasPro. Al utilizar nuestra aplicación, aceptas estar sujeto a estos
                        Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos,
                        no debes usar la aplicación.
                    </Text>
                </View>

                {/* Uso del servicio */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Uso del Servicio</Text>
                    <Text style={styles.sectionText}>FinanzasPro es una herramienta de gestión de finanzas personales. Te comprometes a:</Text>
                    <View style={styles.list}>
                        <View style={styles.listItem}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listText}>Proporcionar información precisa y actualizada</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listText}>Mantener la confidencialidad de tu cuenta</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listText}>Usar el servicio de manera legal y apropiada</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.listText}>No compartir tu acceso con terceros</Text>
                        </View>
                    </View>
                </View>

                {/* Privacidad de datos */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Privacidad y Protección de Datos</Text>
                    <Text style={styles.sectionText}>
                        Tu privacidad es importante para nosotros. Toda la información que proporcionas
                        está protegida mediante encriptación. No compartimos tus datos financieros con
                        terceros sin tu consentimiento explícito. Para más detalles, consulta nuestra
                        Política de Privacidad.
                    </Text>
                </View>

                {/* Responsabilidad */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Limitación de Responsabilidad</Text>
                    <Text style={styles.sectionText}>
                        FinanzasPro es una herramienta de gestión y organización financiera. No ofrecemos
                        asesoría financiera profesional. Las decisiones financieras que tomes basándote en
                        la información de la app son tu responsabilidad. No nos hacemos responsables por
                        pérdidas o daños derivados del uso de la aplicación.
                    </Text>
                </View>

                {/* Propiedad intelectual */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5. Propiedad Intelectual</Text>
                    <Text style={styles.sectionText}>
                        Todo el contenido, diseño, código y marca de FinanzasPro son propiedad exclusiva
                        de nuestra empresa. No puedes copiar, modificar, distribuir o crear trabajos
                        derivados sin nuestro permiso por escrito.
                    </Text>
                </View>

                {/* Modificaciones */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>6. Modificaciones del Servicio</Text>
                    <Text style={styles.sectionText}>
                        Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier
                        momento. Te notificaremos sobre cambios importantes con anticipación razonable.
                    </Text>
                </View>

                {/* Cancelación de cuenta */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>7. Cancelación de Cuenta</Text>
                    <Text style={styles.sectionText}>
                        Puedes cancelar tu cuenta en cualquier momento desde la configuración de privacidad.
                        Nos reservamos el derecho de suspender o terminar cuentas que violen estos términos.
                    </Text>
                </View>

                {/* Ley aplicable */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>8. Ley Aplicable</Text>
                    <Text style={styles.sectionText}>
                        Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta
                        en los tribunales competentes de la Ciudad de México.
                    </Text>
                </View>

                {/* Contacto */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>9. Contacto</Text>
                    <Text style={styles.sectionText}>
                        Si tienes preguntas sobre estos términos, contáctanos en:
                    </Text>
                    <Text style={styles.contactEmail}>legal@finanzaspro.com</Text>
                </View>

                {/* Tarjetas de políticas relacionadas */}
                <View style={styles.policyGrid}>
                    <Card style={styles.policyCardStyle}>
                        <View style={[styles.policyIcon, { backgroundColor: '#dbeafe' }]}>
                            <Shield size={24} color="#3b82f6" />
                        </View>
                        <Text style={styles.policyTitle}>Privacidad</Text>
                    </Card>

                    <Card style={styles.policyCardStyle}>
                        <View style={[styles.policyIcon, { backgroundColor: '#ede9fe' }]}>
                            <Eye size={24} color="#8b5cf6" />
                        </View>
                        <Text style={styles.policyTitle}>Cookies</Text>
                    </Card>
                </View>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
};
