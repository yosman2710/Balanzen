import React from 'react';
import { View, Pressable, Animated, StyleSheet } from 'react-native';

interface SwitchProps {
    defaultValue?: boolean;
    onChange?: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ defaultValue = true, onChange }) => {
    const [value, setValue] = React.useState(defaultValue);
    const translateX = new Animated.Value(value ? 16 : 0)


    const toggle = () => {
        const newValue = !value;
        setValue(newValue);
        Animated.timing(translateX, {
            toValue: newValue ? 16 : 0,
            duration: 150,
            useNativeDriver: false,
        }).start();
        onChange?.(newValue);
    };

    return (
        <Pressable
            onPress={toggle}
            style={[
                styles.track,
                { backgroundColor: value ? '#059669' : '#e2e8f0' },
            ]}
        >
            <Animated.View
                style={[
                    styles.thumb,
                    {
                        transform: [{ translateX }],
                    },
                ]}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    track: {
        width: 40,
        height: 22,
        borderRadius: 999,
        padding: 2,
    },
    thumb: {
        width: 18,
        height: 18,
        borderRadius: 999,
        backgroundColor: '#ffffff',
    },
});