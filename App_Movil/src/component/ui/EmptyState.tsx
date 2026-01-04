import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { Button } from './Button';

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    message: string;
    actionLabel?: string;
    onAction?: () => void;
    style?: ViewStyle;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon: Icon,
    title,
    message,
    actionLabel,
    onAction,
    style,
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.iconContainer}>
                <Icon size={48} color="#94a3b8" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            {actionLabel && onAction && (
                <Button onPress={onAction} style={styles.button}>
                    <Text style={styles.buttonText}>{actionLabel}</Text>
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 48,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f1f5f9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 8,
        textAlign: 'center',
    },
    message: {
        fontSize: 14,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 24,
    },
    button: {
        minWidth: 140,
        height: 44,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
    },
});
