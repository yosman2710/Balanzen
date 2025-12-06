// src/screens/AddSavingsGoalScreen.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Target, DollarSign, Calendar, Type } from 'lucide-react-native';
import DateTimePicker, {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { styles } from '../styles/AddSavingsGoal.style';

interface AddSavingsGoalScreenProps {
    onClose: () => void;
    onAddGoal: (goal: {
        name: string;
        targetAmount: number;
        deadline: string;
        description?: string;
    }) => void;
}

export const AddSavingsGoalScreen: React.FC<AddSavingsGoalScreenProps> = ({
    onClose,
    onAddGoal,
}) => {
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [deadline, setDeadline] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showDatePicker, setShowDatePicker] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!name.trim()) {
            newErrors.name = 'Ingresa un nombre para la meta';
        }

        const parsedAmount = parseFloat(targetAmount.replace(',', '.'));
        if (!targetAmount || isNaN(parsedAmount) || parsedAmount <= 0) {
            newErrors.targetAmount = 'Ingresa un monto válido mayor a 0';
        }

        if (!deadline) {
            newErrors.deadline = 'Selecciona una fecha límite';
        } else {
            const selectedDate = new Date(deadline);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate <= today) {
                newErrors.deadline = 'La fecha debe ser futura';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const amount = parseFloat(targetAmount.replace(',', '.'));

        onAddGoal({
            name: name.trim(),
            targetAmount: amount,
            deadline,
            description: description.trim() || undefined,
        });

        Alert.alert(
            'Meta creada',
            `${name} - $${amount.toLocaleString('es-ES', {
                minimumFractionDigits: 2,
            })}`,
        );

        onClose();
    };

    // fecha por defecto para el picker (mañana)
    const getDefaultDeadlineDate = () => {
        if (deadline && !isNaN(new Date(deadline).getTime())) {
            return new Date(deadline);
        }
        const t = new Date();
        t.setDate(t.getDate() + 1);
        return t;
    };

    const handleChangeDate = (
        event: DateTimePickerEvent,
        selectedDate?: Date,
    ) => {
        setShowDatePicker(false);
        if (event.type === 'set' && selectedDate) {
            const iso = selectedDate.toISOString().split('T')[0];
            setDeadline(iso);
        }
    };

    const showPreview =
        name &&
        targetAmount &&
        !isNaN(parseFloat(targetAmount.replace(',', '.'))) &&
        parseFloat(targetAmount.replace(',', '.')) > 0 &&
        deadline;

    let previewAmountText = '';
    if (showPreview) {
        const amount = parseFloat(targetAmount.replace(',', '.'));
        previewAmountText = amount.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
        });
    }

    let previewDeadlineText = '';
    let previewTimeLeft = '';
    if (showPreview) {
        const d = new Date(deadline);
        previewDeadlineText = d.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

        const today = new Date();
        const diffTime = d.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffMonths = Math.floor(diffDays / 30);
        previewTimeLeft =
            diffMonths > 0 ? `${diffMonths} meses` : `${diffDays} días`;
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.backButton}
                >
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Nueva Meta de Ahorro</Text>
                <Text style={styles.headerSubtitle}>Define tu objetivo financiero</Text>
            </View>

            {/* Formulario */}
            <ScrollView
                style={styles.form}
                contentContainerStyle={styles.formContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Nombre */}
                <View style={styles.field}>
                    <Text style={styles.label}>Nombre de la meta</Text>
                    <View
                        style={[
                            styles.inputWrapper,
                            errors.name && styles.inputWrapperError,
                        ]}
                    >
                        <Target size={18} color="#94a3b8" style={styles.inputIcon} />
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Ej: Vacaciones, Auto nuevo, Fondo de emergencia"
                            placeholderTextColor="#94a3b8"
                            maxLength={50}
                            style={styles.input}
                        />
                    </View>
                    {errors.name && (
                        <Text style={styles.errorText}>{errors.name}</Text>
                    )}
                </View>

                {/* Monto objetivo */}
                <View style={styles.field}>
                    <Text style={styles.label}>Monto objetivo</Text>
                    <View
                        style={[
                            styles.inputWrapper,
                            errors.targetAmount && styles.inputWrapperError,
                        ]}
                    >
                        <DollarSign size={18} color="#94a3b8" style={styles.inputIcon} />
                        <TextInput
                            value={targetAmount}
                            onChangeText={setTargetAmount}
                            placeholder="0.00"
                            placeholderTextColor="#94a3b8"
                            keyboardType="decimal-pad"
                            style={[styles.input, styles.inputAmount]}
                        />
                    </View>
                    {errors.targetAmount && (
                        <Text style={styles.errorText}>{errors.targetAmount}</Text>
                    )}
                    <Text style={styles.helperText}>
                        ¿Cuánto dinero necesitas ahorrar?
                    </Text>
                </View>

                {/* Fecha límite con calendario */}
                <View style={styles.field}>
                    <Text style={styles.label}>Fecha límite</Text>
                    <TouchableOpacity
                        style={[
                            styles.inputWrapper,
                            errors.deadline && styles.inputWrapperError,
                        ]}
                        onPress={() => setShowDatePicker(true)}
                        activeOpacity={0.8}
                    >
                        <Calendar size={18} color="#94a3b8" style={styles.inputIcon} />
                        <Text style={styles.input}>
                            {deadline || 'Selecciona una fecha'}
                        </Text>
                    </TouchableOpacity>
                    {errors.deadline && (
                        <Text style={styles.errorText}>{errors.deadline}</Text>
                    )}
                    <Text style={styles.helperText}>
                        ¿Cuándo quieres alcanzar esta meta?
                    </Text>

                    {showDatePicker && (
                        <DateTimePicker
                            value={getDefaultDeadlineDate()}
                            mode="date"
                            display="calendar"
                            onChange={handleChangeDate}
                            minimumDate={new Date()}
                        />
                    )}
                </View>

                {/* Descripción */}
                <View style={styles.field}>
                    <Text style={styles.label}>Descripción (opcional)</Text>
                    <View style={styles.textAreaWrapper}>
                        <Type size={18} color="#94a3b8" style={styles.textAreaIcon} />
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Agrega detalles sobre tu meta..."
                            placeholderTextColor="#94a3b8"
                            style={styles.textArea}
                            multiline
                            maxLength={200}
                        />
                    </View>
                    <Text style={styles.counterText}>
                        {description.length}/200
                    </Text>
                </View>

                {/* Preview */}
                {showPreview && (
                    <View style={styles.previewCard}>
                        <Text style={styles.previewTitle}>Resumen de tu meta:</Text>
                        <View style={styles.previewRow}>
                            <Text style={styles.previewLabel}>Meta:</Text>
                            <Text style={styles.previewValue}>{name}</Text>
                        </View>
                        <View style={styles.previewRow}>
                            <Text style={styles.previewLabel}>Objetivo:</Text>
                            <Text style={styles.previewValue}>${previewAmountText}</Text>
                        </View>
                        <View style={styles.previewRow}>
                            <Text style={styles.previewLabel}>Fecha límite:</Text>
                            <Text style={styles.previewValue}>{previewDeadlineText}</Text>
                        </View>
                        <View style={styles.previewRow}>
                            <Text style={styles.previewLabel}>Tiempo restante:</Text>
                            <Text style={styles.previewTime}>{previewTimeLeft}</Text>
                        </View>
                    </View>
                )}

                {/* Botones */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={styles.buttonOutline}
                        onPress={onClose}
                    >
                        <Text style={styles.buttonOutlineText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonPrimaryText}>Crear Meta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
