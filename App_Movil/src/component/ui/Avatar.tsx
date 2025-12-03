import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AvatarProps {
    size?: number;
    backgroundColor?: string;
    text: string;
}

export const Avatar: React.FC<AvatarProps> = ({
    size = 96,
    backgroundColor = '#e5e7eb',
    text }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor,
                },
            ]}
        >
            <Text style={[styles.text, { fontSize: size / 2.4 }]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    text: {
        color: '#ffffff',
        fontWeight: '700',
    },
});