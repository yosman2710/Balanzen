import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckCircle } from 'lucide-react-native';

interface SuccessModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    buttonText?: string;
}

export const SuccessModal = ({
    visible,
    onClose,
    title = "¡Éxito!",
    message = "Operación completada correctamente.",
    buttonText = "Continuar"
}: SuccessModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.iconContainer}>
                        <CheckCircle size={48} color="#059669" />
                    </View>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalMessage}>{message}</Text>

                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={onClose}
                    >
                        <Text style={styles.modalButtonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 24,
        width: '100%',
        maxWidth: 340,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconContainer: {
        backgroundColor: '#D1FAE5', // emerald-100
        padding: 16,
        borderRadius: 50,
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b', // slate-800
        marginBottom: 8,
        textAlign: 'center',
    },
    modalMessage: {
        fontSize: 16,
        color: '#64748b', // slate-500
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 22,
    },
    modalButton: {
        backgroundColor: '#059669', // emerald-600
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
