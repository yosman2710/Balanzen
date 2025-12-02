import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ProgressBarProps {
    value: number; // porcentaje 0 - 100
    style?: ViewStyle;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.progress, { width: `${Math.min(Math.max(value, 0), 100)}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 12,
        backgroundColor: '#ede9fe', // violeta claro
        borderRadius: 6,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: '#7c3aed', // violeta oscuro
    },
});
