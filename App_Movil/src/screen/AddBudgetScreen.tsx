import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable
} from 'react-native';
import Slider from '@react-native-community/slider';
import {
    ArrowLeft,
    DollarSign,
    Tag,
    Calendar as CalendarIcon,
    AlertCircle,
} from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../styles/AddBudget.style';

interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: 'income' | 'expense';
}

interface Budget {
    categoryId: string;
    amount: number;
    period: string;
    alertThreshold: number;
}

interface AddBudgetScreenProps {
    categories: Category[];
    onAddBudget: (budget: Budget) => void;
}

export const AddBudgetScreen: React.FC<AddBudgetScreenProps> = ({
    categories,
    onAddBudget,
}) => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const [categoryId, setCategoryId] = useState('');
    const [amount, setAmount] = useState('');
    const [period, setPeriod] = useState('monthly');
    const [alertThreshold, setAlertThreshold] = useState(90);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);

    // Filtrar solo categorías de gastos
    const expenseCategories = categories.filter(
        cat => cat.type === 'expense'
    );

    const selectedCategory = categories.find(c => c.id === categoryId);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!categoryId) {
            newErrors.categoryId = 'Selecciona una categoría';
        }

        if (!amount || parseFloat(amount) <= 0) {
            newErrors.amount = 'Ingresa un monto válido mayor a 0';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        onAddBudget({
            categoryId,
            amount: parseFloat(amount),
            period,
            alertThreshold,
        });

        navigation.goBack();
    };

    const handleClose = () => {
        navigation.goBack();
    };

    const periodLabels = {
        weekly: 'Semanal',
        monthly: 'Mensual',
        yearly: 'Anual',
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={handleClose}
                    style={styles.backButton}
                    activeOpacity={0.8}
                >
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Nuevo Presupuesto</Text>
                <Text style={styles.headerSubtitle}>Establece un límite de gasto</Text>
            </View>

            {/* Formulario */}
            <ScrollView contentContainerStyle={styles.formContent}>
                {/* Categoría */}
                <View style={styles.field}>
                    <Text style={styles.label}>Categoría de gasto</Text>
                    <TouchableOpacity
                        onPress={() => setCategoryModalVisible(true)}
                        style={[
                            styles.inputWrapper,
                            errors.categoryId && styles.inputErrorWrapper,
                        ]}
                    >
                        <Tag size={18} color="#94a3b8" style={styles.inputIcon} />
                        <View style={styles.selectContent}>
                            <Text style={selectedCategory ? styles.selectText : styles.selectPlaceholder}>
                                {selectedCategory ? selectedCategory.name : 'Selecciona una categoría'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {errors.categoryId && <Text style={styles.errorText}>{errors.categoryId}</Text>}
                </View>

                {/* Vista previa categoría */}
                {selectedCategory && (
                    <View style={styles.categoryPreview}>
                        <Text style={styles.previewTitle}>Categoría seleccionada:</Text>
                        <View style={styles.previewRow}>
                            <View style={[styles.previewIcon, { backgroundColor: `${selectedCategory.color}20` }]}>
                                <Text style={[styles.previewIconText, { color: selectedCategory.color }]}>●</Text>
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
                    <View style={styles.inputWrapper}>
                        <DollarSign size={18} color="#94a3b8" style={styles.inputIcon} />
                        <TextInput
                            keyboardType="decimal-pad"
                            placeholder="0.00"
                            value={amount}
                            onChangeText={setAmount}
                            style={[
                                styles.input,
                                styles.inputBig,
                                errors.amount && styles.inputError,
                                { paddingLeft: 36 },
                            ]}
                            placeholderTextColor="#94a3b8"
                        />
                    </View>
                    {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
                    <Text style={styles.helpText}>
                        Establece el límite máximo de gasto para esta categoría
                    </Text>
                </View>

                {/* Periodo */}
                <View style={styles.field}>
                    <Text style={styles.label}>Periodo</Text>
                    <View style={styles.periodsRow}>
                        {(['weekly', 'monthly', 'yearly'] as const).map(p => (
                            <TouchableOpacity
                                key={p}
                                onPress={() => setPeriod(p)}
                                style={[
                                    styles.periodButton,
                                    period === p && styles.periodButtonActive,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.periodButtonText,
                                        period === p && styles.periodButtonTextActive,
                                    ]}
                                >
                                    {periodLabels[p]}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Umbral de alerta */}
                <View style={styles.field}>
                    <Text style={styles.label}>Umbral de alerta</Text>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={50}
                            maximumValue={100}
                            step={5}
                            value={alertThreshold}
                            onValueChange={setAlertThreshold}
                            minimumTrackTintColor="#10b981"
                            maximumTrackTintColor="#e2e8f0"
                            thumbTintColor="#10b981"
                        />
                        <View style={styles.sliderValue}>
                            <Text style={styles.sliderValueText}>{alertThreshold}%</Text>
                        </View>
                    </View>
                    <Text style={styles.sliderLabel}>Te alertaremos al alcanzar el {alertThreshold}%</Text>

                    <View style={styles.alertBox}>
                        <AlertCircle size={16} color="#f59e0b" />
                        <Text style={styles.alertText}>
                            Recibirás una notificación cuando tus gastos alcancen el {alertThreshold}% de tu presupuesto
                        </Text>
                    </View>
                </View>

                {/* Resumen */}
                {amount && parseFloat(amount) > 0 && selectedCategory && (
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTitle}>Resumen del presupuesto:</Text>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Categoría:</Text>
                            <Text style={styles.summaryValue}>{selectedCategory.name}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Límite:</Text>
                            <Text style={styles.summaryValue}>
                                ${parseFloat(amount).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                            </Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Periodo:</Text>
                            <Text style={styles.summaryValue}>{periodLabels[period as keyof typeof periodLabels]}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Alerta al:</Text>
                            <Text style={styles.summaryValue}>
                                ${(parseFloat(amount) * (alertThreshold / 100)).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                            </Text>
                        </View>
                    </View>
                )}

                {/* Botones */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        onPress={handleClose}
                        style={[styles.button, styles.buttonOutline]}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.buttonOutlineText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={[styles.button, styles.buttonPrimary]}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.buttonPrimaryText}>Crear Presupuesto</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modal categorías */}
            <Modal
                visible={categoryModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setCategoryModalVisible(false)}
            >
                <Pressable style={styles.modalOverlay} onPress={() => setCategoryModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Selecciona categoría</Text>
                        {expenseCategories.map(cat => (
                            <TouchableOpacity
                                key={cat.id}
                                onPress={() => {
                                    setCategoryId(cat.id);
                                    setCategoryModalVisible(false);
                                }}
                                style={styles.modalItem}
                            >
                                <View style={[styles.modalDot, { backgroundColor: cat.color }]} />
                                <Text style={styles.modalItemText}>{cat.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};
