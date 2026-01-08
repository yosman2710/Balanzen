import React from 'react';
import { Modal, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface LoadingModalProps {
    visible: boolean;
    message?: string;
}

export const LoadingModal = ({
    visible,
    message = "Procesando..."
}: LoadingModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            statusBarTranslucent
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <ActivityIndicator size="large" color="#059669" style={styles.spinner} />
                    <Text style={styles.modalMessage}>{message}</Text>
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
        padding: 32,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        minWidth: 200,
    },
    spinner: {
        marginBottom: 16,
    },
    modalMessage: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b', // slate-800
        textAlign: 'center',
    },
});
