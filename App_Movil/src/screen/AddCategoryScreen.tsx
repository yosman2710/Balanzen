import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    ArrowLeft,
    Tag,
    Palette,
    ShoppingCart, Home, Car, Coffee, Zap, Heart, BookOpen,
    Smartphone, Shirt, Film, Dumbbell, Gift, Plane, Utensils, Fuel, Wrench,
} from 'lucide-react-native';
import { styles } from '../styles/AddCategory.style';

interface AddCategoryScreenProps {
    onClose: () => void;
    onAddCategory: (category: {
        name: string;
        icon: string;
        color: string;
        type: 'income' | 'expense';
    }) => void;
}

export const AddCategoryScreen: React.FC<AddCategoryScreenProps> = ({
    onClose,
    onAddCategory,
}) => {
    const [name, setName] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('expense');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const iconOptions = [
        { name: 'ShoppingCart', Icon: ShoppingCart },
        { name: 'Home', Icon: Home },
        { name: 'Car', Icon: Car },
        { name: 'Coffee', Icon: Coffee },
        { name: 'Zap', Icon: Zap },
        { name: 'Heart', Icon: Heart },
        { name: 'BookOpen', Icon: BookOpen },
        { name: 'Smartphone', Icon: Smartphone },
        { name: 'Shirt', Icon: Shirt },
        { name: 'Film', Icon: Film },
        { name: 'Dumbbell', Icon: Dumbbell },
        { name: 'Gift', Icon: Gift },
        { name: 'Plane', Icon: Plane },
        { name: 'Utensils', Icon: Utensils },
        { name: 'Fuel', Icon: Fuel },
        { name: 'Wrench', Icon: Wrench },
    ];

    const colorOptions = [
        { name: 'Rojo', value: '#ef4444' },
        { name: 'Naranja', value: '#f97316' },
        { name: 'Amarillo', value: '#eab308' },
        { name: 'Verde', value: '#10b981' },
        { name: 'Azul', value: '#3b82f6' },
        { name: 'Índigo', value: '#6366f1' },
        { name: 'Púrpura', value: '#8b5cf6' },
        { name: 'Rosa', value: '#ec4899' },
        { name: 'Gris', value: '#64748b' },
    ];

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!name.trim()) newErrors.name = 'El nombre es requerido';
        else if (name.trim().length < 3) newErrors.name = 'Mínimo 3 caracteres';
        if (!selectedIcon) newErrors.icon = 'Selecciona un ícono';
        if (!selectedColor) newErrors.color = 'Selecciona un color';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onAddCategory({
                name: name.trim(),
                icon: selectedIcon,
                color: selectedColor,
                type,
            });
            console.log('✅ ¡Categoría creada!', name);
            onClose();
        }
    };

    const typeLabels = { income: 'Ingreso', expense: 'Gasto' };

    // ✅ FIX VISTA PREVIA - Encuentra el ícono correcto
    const SelectedIcon = iconOptions.find(i => i.name === selectedIcon)?.Icon;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Nueva Categoría</Text>
                <Text style={styles.headerSubtitle}>Crea una categoría personalizada</Text>
            </View>

            <ScrollView contentContainerStyle={styles.formContent} showsVerticalScrollIndicator={false}>
                {/* Nombre */}
                <View style={styles.field}>
                    <Text style={styles.label}>Nombre</Text>
                    <View style={[styles.inputWrapper, errors.name && styles.inputErrorWrapper]}>
                        <Tag size={18} color="#94a3b8" style={styles.inputIcon} />
                        <TextInput
                            placeholder="Ej: Restaurantes"
                            value={name}
                            onChangeText={setName}
                            style={[styles.input, errors.name && styles.inputError]}
                            placeholderTextColor="#94a3b8"
                        />
                    </View>
                    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                </View>

                {/* Tipo */}
                <View style={styles.field}>
                    <Text style={styles.label}>Tipo</Text>
                    <View style={styles.typeButtons}>
                        {(['income', 'expense'] as const).map(t => (
                            <TouchableOpacity
                                key={t}
                                onPress={() => setType(t)}
                                style={[styles.typeButton, type === t && styles.typeButtonActive]}
                            >
                                <Text style={[styles.typeButtonText, type === t && styles.typeButtonTextActive]}>
                                    {typeLabels[t]}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Íconos */}
                <View style={styles.field}>
                    <Text style={styles.label}>Ícono</Text>
                    <View style={styles.iconGrid}>
                        {iconOptions.map(({ name, Icon }) => (
                            <TouchableOpacity
                                key={name}
                                onPress={() => setSelectedIcon(name)}
                                style={[
                                    styles.iconButton,
                                    selectedIcon === name && styles.iconButtonActive,
                                ]}
                            >
                                <Icon size={28} color={selectedIcon === name ? "#ffffff" : "#6b7280"} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    {errors.icon && <Text style={styles.errorText}>{errors.icon}</Text>}
                </View>

                {/* Colores */}
                <View style={styles.field}>
                    <Text style={styles.label}>Color</Text>
                    <View style={styles.colorGrid}>
                        {colorOptions.map(option => (
                            <TouchableOpacity
                                key={option.value}
                                onPress={() => setSelectedColor(option.value)}
                                style={[
                                    styles.colorButton,
                                    selectedColor === option.value && styles.colorButtonActive,
                                ]}
                            >
                                <View style={[styles.colorSwatch, { backgroundColor: option.value }]} />
                                {selectedColor === option.value && (
                                    <Palette size={16} color="#ffffff" style={styles.colorCheck} />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                    {errors.color && <Text style={styles.errorText}>{errors.color}</Text>}
                </View>

                {/* ✅ VISTA PREVIA CORREGIDA */}
                {name && selectedIcon && selectedColor && SelectedIcon && (
                    <View style={styles.previewCard}>
                        <Text style={styles.previewTitle}>Vista previa:</Text>
                        <View style={styles.previewContent}>
                            <View style={[styles.previewIcon, { backgroundColor: `${selectedColor}20` }]}>
                                <SelectedIcon size={24} color={selectedColor} />
                            </View>
                            <View>
                                <Text style={styles.previewName}>{name}</Text> {/* ✅ NOMBRE USUARIO */}
                                <Text style={styles.previewType}>{typeLabels[type]}</Text>
                            </View>
                        </View>
                    </View>
                )}

                {/* Botones */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity onPress={onClose} style={styles.buttonOutline}>
                        <Text style={styles.buttonOutlineText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={styles.buttonPrimary}>
                        <Text style={styles.buttonPrimaryText}>Crear Categoría</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
