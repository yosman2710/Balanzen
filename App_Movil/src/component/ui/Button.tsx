import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';

interface ButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ children, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
