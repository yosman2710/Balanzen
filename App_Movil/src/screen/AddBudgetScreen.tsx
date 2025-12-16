// src/screens/AddBudgetScreen.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    DollarSign,
    Tag,
    Calendar,
    AlertCircle,
    ShoppingCart,
    Home,
    Car,
    Coffee,
    Zap,
    Heart,
    BookOpen,
    Smartphone,
    Shirt,
    Film,
    Dumbbell,
    Gift,
    Plane,
    Utensils,
    Fuel,
    Wrench,
    TrendingUp,
    Briefcase,
    LineChart,
} from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../styles/AddBudget.style';
import { CreateBudgetDTO, BudgetDTO, createBudget } from '../api/budgets';

interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: 'ingreso' | 'gasto';
}

interface AddBudgetScreenProps {
    onClose: () => void;
    onAddBudget: (budget: {
        categoryId: string;
        amount: number;
        endDate: string;
        alertThreshold: number;
    }) => void;
    categories: Category[];
}

export const AddBudgetScreen: React.FC<AddBudgetScreenProps> = ({
    onClose,
    categories,
}) => {
    const [categoryId, setCategoryId] = useState('');
    const [amount, setAmount] = useState('');
    const [endDate, setEndDate] = useState('');
    const [alertThreshold, setAlertThreshold] = useState(90);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showDatePicker, setShowDatePicker] = useState(false);

    const iconMap: Record<string, React.ComponentType<any>> = {
        ShoppingCart,
        Home,
        Car,
        Coffee,
        Zap,
        Heart,
        BookOpen,
        Smartphone,
        Shirt,
        Film,
        Dumbbell,
        Gift,
        Plane,
        Utensils,
        Fuel,
        Wrench,
        TrendingUp,
        Briefcase,
        LineChart,
    };

    const expenseCategories = categories.filter(
        cat => cat.type === 'gasto',
    );
    const selectedCategory = categories.find(c => c.id === categoryId);

    const getIcon = (iconName: string, size = 20, color = '#6b7280') => {
        const IconComponent = iconMap[iconName] ?? ShoppingCart;
        return <IconComponent size={size} color={color} />;
    };

    // FECHA MÍNIMA: HOY + 7 DÍAS
    const getMinDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 7);
        return today;
    };

    const getDefaultEndDate = () => {
        if (endDate && !isNaN(new Date(endDate).getTime())) {
            return new Date(endDate);
        }
        const d = new Date();
        d.setDate(d.getDate() + 7);
        return d;
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const iso = selectedDate.toISOString().split('T')[0];
            setEndDate(iso);
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!categoryId) newErrors.categoryId = 'Selecciona una categoría';
        if (!amount || parseFloat(amount) <= 0)
            newErrors.amount = 'Ingresa un monto válido mayor a 0';
        if (!endDate) newErrors.endDate = 'Selecciona una fecha de finalización';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            const budget: CreateBudgetDTO = {
                id_categoria: categoryId,
                monto_limite: parseFloat(amount),
                fecha_final: endDate,
                alerta: alertThreshold,
            };
            try {
                await createBudget(budget);
            } catch (error) {
                console.log(error);
            }
            onClose();
        }
    };

    const showPreview =
        amount && parseFloat(amount) > 0 && selectedCategory && endDate;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Nuevo Presupuesto</Text>
                <Text style={styles.headerSubtitle}>Establece un límite de gasto</Text>
            </View>

            <ScrollView
                style={styles.form}
                contentContainerStyle={styles.formContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Categoría */}
                <View style={styles.field}>
                    <Text style={styles.label}>Categoría de gasto</Text>
                    <View style={[styles.inputWrapper, errors.categoryId && styles.inputError]}>
                        <Tag size={18} color="#94a3b8" style={styles.inputIcon} />
                        <Text style={styles.categoryPlaceholder}>
                            {selectedCategory?.name || 'Selecciona una categoría'}
                        </Text>
                    </View>
                    {errors.categoryId && <Text style={styles.errorText}>{errors.categoryId}</Text>}
                </View>

                {/* GRID DE CATEGORÍAS */}
                <View style={styles.categoryGrid}>
                    {expenseCategories.map(category => (
                        <TouchableOpacity
                            key={category.id}
                            style={[
                                styles.categoryItem,
                                categoryId === category.id && styles.categoryItemActive,
                            ]}
                            onPress={() => setCategoryId(category.id)}
                        >
                            <View style={[styles.categoryDot, { backgroundColor: category.color }]} />
                            <Text
                                style={[
                                    styles.categoryItemText,
                                    categoryId === category.id && { color: category.color },
                                ]}
                            >
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Vista previa categoría */}
                {selectedCategory && (
                    <View style={styles.previewCategory}>
                        <Text style={styles.previewLabel}>Categoría seleccionada:</Text>
                        <View style={styles.previewRow}>
                            <View
                                style={[
                                    styles.previewIconWrapper,
                                    { backgroundColor: `${selectedCategory.color}20` },
                                ]}
                            >
                                {getIcon(selectedCategory.icon, 24, selectedCategory.color)}
                            </View>
                            <View>
                                <Text style={styles.previewName}>{selectedCategory.name}</Text>
                                <Text style={styles.previewType}>Gasto</Text>
                            </View>
                        </View>
                    </View>
                )}

                {/* Monto */}
                <View style={styles.field}>
                    <Text style={styles.label}>Monto del presupuesto</Text>
                    <View style={[styles.inputWrapper, errors.amount && styles.inputError]}>
                        <DollarSign size={18} color="#94a3b8" style={styles.inputIcon} />
                        <TextInput
                            value={amount}
                            onChangeText={setAmount}
                            placeholder="0.00"
                            placeholderTextColor="#94a3b8"
                            keyboardType="decimal-pad"
                            style={[styles.input, styles.inputLarge]}
                        />
                    </View>
                    {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
                    <Text style={styles.helperText}>
                        Establece el límite máximo de gasto para esta categoría
                    </Text>
                </View>

                {/* Fecha */}
                <View style={styles.field}>
                    <Text style={styles.label}>Fecha de finalización</Text>
                    <TouchableOpacity
                        style={[styles.inputWrapper, errors.endDate && styles.inputError]}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Calendar size={18} color="#94a3b8" style={styles.inputIcon} />
                        <Text style={styles.input}>{endDate || 'Selecciona fecha'}</Text>
                    </TouchableOpacity>
                    {errors.endDate && <Text style={styles.errorText}>{errors.endDate}</Text>}
                    {showDatePicker && (
                        <DateTimePicker
                            value={getDefaultEndDate()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                            minimumDate={getMinDate()} // ← BLOQUEA < 7 DÍAS
                        />
                    )}
                </View>

                {/* Umbral alerta */}
                <View style={styles.field}>
                    <Text style={styles.label}>Umbral de alerta</Text>
                    <View style={styles.sliderContainer}>
                        <View style={styles.sliderTrack}>
                            <View
                                style={[
                                    styles.sliderFill,
                                    { width: `${((alertThreshold - 50) / 50) * 100}%` },
                                ]}
                            />
                            <TouchableOpacity
                                style={[styles.sliderThumb, { left: `${((alertThreshold - 50) / 50) * 100}%` }]}
                                onPress={() => {
                                    // Lógica para cambiar slider si quieres
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.sliderLabels}>
                        <Text style={styles.sliderLabel}>50%</Text>
                        <Text style={styles.sliderValue}>{alertThreshold}%</Text>
                        <Text style={styles.sliderLabel}>100%</Text>
                    </View>
                    <Text style={styles.helperText}>
                        Te alertaremos al alcanzar el {alertThreshold}%
                    </Text>
                    <View style={styles.alertBox}>
                        <AlertCircle size={16} color="#d97706" style={styles.alertIcon} />
                        <Text style={styles.alertText}>
                            Recibirás notificación cuando alcances el{' '}
                            <Text style={styles.alertHighlight}>{alertThreshold}%</Text>
                        </Text>
                    </View>
                </View>

                {/* Resumen */}
                {showPreview && (
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTitle}>Resumen:</Text>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Categoría:</Text>
                            <Text style={styles.summaryValue}>{selectedCategory.name}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Límite:</Text>
                            <Text style={styles.summaryValue}>
                                $
                                {parseFloat(amount).toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                })}
                            </Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Fecha final:</Text>
                            <Text style={styles.summaryValue}>
                                {new Date(endDate).toLocaleDateString('es-ES')}
                            </Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Alerta:</Text>
                            <Text style={styles.summaryValue}>
                                $
                                {(parseFloat(amount) * (alertThreshold / 100)).toLocaleString(
                                    'es-ES',
                                    { minimumFractionDigits: 2 },
                                )}
                            </Text>
                        </View>
                    </View>
                )}

                {/* Botones */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity style={styles.buttonOutline} onPress={onClose}>
                        <Text style={styles.buttonOutlineText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPrimary} onPress={handleSubmit}>
                        <Text style={styles.buttonPrimaryText}>Crear Presupuesto</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
