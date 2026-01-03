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
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  MessageCircle,
  Book,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';  // ← TU COMPONENTE
import { Button } from '../component/ui/Button'; // ← TU COMPONENTE
import { styles } from '../styles/HelpCenter.style';
import { useNavigation } from '@react-navigation/native';



interface FAQ {
  question: string;
  answer: string;
}

export const HelpCenterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "¿Cómo puedo crear un presupuesto?",
      answer: "Ve a la sección de Presupuestos y toca el botón '+'. Selecciona una categoría, define el monto límite, establece la fecha de finalización y configura el umbral de alerta. ¡Listo! Recibirás notificaciones cuando te acerques al límite.",
    },
    {
      question: "¿Cómo registro una transacción?",
      answer: "Desde la pantalla principal, toca el botón '+' flotante. Selecciona si es un ingreso o egreso, elige la categoría, ingresa el monto y descripción. Opcionalmente puedes agregar notas y cambiar la fecha.",
    },
    {
      question: "¿Puedo crear mis propias categorías?",
      answer: "Sí, ve a tu Perfil > Gestionar categorías > '+'. Elige un nombre, ícono, color y tipo (ingreso/egreso). Las categorías personalizadas se pueden eliminar, pero las predeterminadas no.",
    },
    {
      question: "¿Cómo funcionan las metas de ahorro?",
      answer: "Crea una meta desde el Dashboard indicando el nombre, monto objetivo y fecha límite. Luego puedes agregar contribuciones para acercarte a tu objetivo. El progreso se muestra visualmente en el Dashboard.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Sí, utilizamos encriptación de extremo a extremo para proteger tu información. Tus datos financieros nunca se comparten con terceros sin tu consentimiento explícito.",
    },
    {
      question: "¿Puedo exportar mis datos?",
      answer: "Sí, ve a Perfil > Privacidad > Descargar mis datos. Recibirás un archivo con toda tu información financiera en formato estándar.",
    },
    {
      question: "¿Cómo elimino una transacción?",
      answer: "En la lista de transacciones, desliza hacia la izquierda sobre la transacción que deseas eliminar, o toca sobre ella y selecciona la opción de eliminar.",
    },
    {
      question: "¿Qué significa el umbral de alerta?",
      answer: "Es el porcentaje del presupuesto al que quieres recibir una notificación de advertencia. Por ejemplo, si lo configuras en 90%, recibirás una alerta cuando hayas gastado el 90% de tu presupuesto.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'soporte@finanzaspro.com',
      color: '#3b82f6',
      bgColor: '#dbeafe',
    },
    {
      icon: MessageCircle,
      title: 'Chat',
      subtitle: 'Chat en vivo',
      color: '#059669',
      bgColor: '#d1fae5',
    },
  ];

  const resources = [
    {
      icon: Book,
      title: 'Guía de usuario',
      subtitle: 'Tutorial completo de la app',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
    },
    {
      icon: MessageCircle,
      title: 'Comunidad',
      subtitle: 'Foro de usuarios',
      color: '#6366f1',
      bgColor: '#e0e7ff',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: '#059669' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={20} color="#ffffff" />
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Centro de Ayuda</Text>
        <Text style={styles.headerSubtitle}>Encuentra respuestas a tus preguntas</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Opciones de contacto */}
        <View style={styles.contactGrid}>
          {contactOptions.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} style={styles.contactCardStyle}>
                <View style={[styles.contactIcon, { backgroundColor: contact.bgColor }]}>
                  <Icon size={24} color={contact.color} />
                </View>
                <Text style={styles.contactTitle}>{contact.title}</Text>
                <Text style={styles.contactSubtitle}>{contact.subtitle}</Text>
              </Card>
            );
          })}
        </View>

        {/* Preguntas frecuentes */}
        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>Preguntas frecuentes</Text>
          <View style={styles.faqList}>
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <Card key={index} style={styles.faqCardStyle}>
                  <TouchableOpacity
                    style={styles.faqHeaderTouchable}
                    onPress={() => toggleFaq(index)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.faqHeader}>
                      <View style={styles.faqIconWrapper}>
                        <HelpCircle size={20} color="#059669" />
                      </View>
                      <Text style={styles.faqQuestion}>{faq.question}</Text>
                      {isExpanded ? (
                        <ChevronUp size={20} color="#6b7280" />
                      ) : (
                        <ChevronDown size={20} color="#6b7280" />
                      )}
                    </View>
                  </TouchableOpacity>
                  {isExpanded && (
                    <View style={styles.faqAnswer}>
                      <View style={styles.answerLine} />
                      <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                    </View>
                  )}
                </Card>
              );
            })}
          </View>
        </View>

        {/* Recursos adicionales */}
        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>Recursos adicionales</Text>
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} style={styles.resourceCardStyle}>
                <TouchableOpacity style={styles.resourceTouchable}>
                  <View style={[styles.resourceIcon, { backgroundColor: resource.bgColor }]}>
                    <Icon size={20} color={resource.color} />
                  </View>
                  <View style={styles.resourceText}>
                    <Text style={styles.resourceTitle}>{resource.title}</Text>
                    <Text style={styles.resourceSubtitle}>{resource.subtitle}</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            );
          })}
        </View>

        {/* Contactar soporte */}
        <Card style={styles.supportCardStyle}>
          <Text style={styles.supportTitle}>¿No encontraste lo que buscabas?</Text>
          <Text style={styles.supportSubtitle}>
            Nuestro equipo está listo para ayudarte con cualquier pregunta o problema.
          </Text>
          <Button
            onPress={() => { }}
            style={styles.supportButtonStyle}
          >
            <Mail size={18} color="#ffffff" style={styles.supportButtonIcon} />
            <Text style={styles.supportButtonText}>Contactar Soporte</Text>
          </Button>
        </Card>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};
