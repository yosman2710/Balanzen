import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import {
    ArrowLeft,
    DollarSign,
    FileText,
    Calendar as CalendarIcon,
    Tag,
} from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../styles/AddTransactionScreen.style';

type TransactionType = 'income' | 'expense';

interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: 'income' | 'expense' | 'both';
    isDefault: boolean;
}

interface Transaction {
    type: TransactionType;
    amount: number;
    description: string;
    categoryId: string;
    date: string;
    notes?: string;
}

interface AddTransactionScreenProps {
    categories: Category[];
    onAddTransaction: (transaction: Transaction) => void;
}

export const AddTransactionScreen: React.FC<AddTransactionScreenProps> = ({
    categories,
    onAddTransaction,
}) => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const defaultType: TransactionType = route.params?.defaultType ?? 'expense';

    const [type, setType] = useState<TransactionType>(defaultType);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [notes, setNotes] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);

    const filteredCategories = categories.filter(
        cat => cat.type === type || cat.type === 'both',
    );

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!amount || parseFloat(amount) <= 0) {
            newErrors.amount = 'Ingresa un monto válido';
        }

        if (!description.trim()) {
            newErrors.description = 'La descripción es requerida';
        }

        if (!categoryId) {
            newErrors.categoryId = 'Selecciona una categoría';
        }

        if (!date) {
            newErrors.date = 'Selecciona una fecha';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const transaction: Transaction = {
            type,
            amount: parseFloat(amount),
            description: description.trim(),
            categoryId,
            date,
            notes: notes.trim() || undefined,
        };

        onAddTransaction(transaction);
        navigation.goBack(); // vuelve al dashboard
    };



    const selectedCategory = filteredCategories.find(c => c.id === categoryId);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    activeOpacity={0.8}
                >
                    <ArrowLeft size={20} color="#ffffff" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Nueva Transacción</Text>
                <Text style={styles.headerSubtitle}>
                    Registra un {type === 'income' ? 'ingreso' : 'gasto'}
                </Text>
            </View>

            {/* Formulario */}
            <ScrollView
                contentContainerStyle={styles.formContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Tipo */}
                <View style={styles.field}>
                    <Text style={styles.label}>Tipo</Text>
                    <View style={styles.tabsRow}>
                        <TouchableOpacity
                            onPress={() => setType('income')}
                            style={[
                                styles.tab,
                                type === 'income' && styles.tabActiveIncome,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    type === 'income' && styles.tabTextActive,
                                ]}
                            >
                                Ingreso
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setType('expense')}
                            style={[
                                styles.tab,
                                type === 'expense' && styles.tabActiveExpense,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    type === 'expense' && styles.tabTextActive,
                                ]}
                            >
                                Gasto
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Monto */}
                <View style={styles.field}>
                    <Text style={styles.label}>Monto</Text>
                    <View style={styles.inputWrapper}>
                        <DollarSign size={18} color="#72767cff" style={styles.inputIcon} />
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
                </View>

                {/* Descripción */}
                <View style={styles.field}>
                    <Text style={styles.label}>Descripción</Text>
                    <View style={styles.inputWrapper}>
                        <FileText
                            size={18}
                            color="#94a3b8"
                            style={[styles.inputIcon, { top: 12 }]}
                        />
                        <TextInput
                            placeholder={
                                type === 'income'
                                    ? 'Ej: Salario mensual'
                                    : 'Ej: Compra en supermercado'
                            }
                            value={description}
                            onChangeText={setDescription}
                            style={[
                                styles.input,
                                errors.description && styles.inputError,
                                { paddingLeft: 36 },
                            ]}
                            placeholderTextColor="#94a3b8"
                        />
                    </View>
                    {errors.description && (
                        <Text style={styles.errorText}>{errors.description}</Text>
                    )}
                </View>

                {/* Categoría */}
                <View style={styles.field}>
                    <Text style={styles.label}>Categoría</Text>
                    <TouchableOpacity
                        onPress={() => setCategoryModalVisible(true)}
                        style={[
                            styles.inputWrapper,
                            errors.categoryId && styles.inputErrorWrapper,
                        ]}
                    >
                        <Tag size={18} color="#94a3b8" style={styles.inputIcon} />
                        <View style={styles.selectContent}>
                            <Text
                                style={
                                    selectedCategory
                                        ? styles.selectText
                                        : styles.selectPlaceholder
                                }
                            >
                                {selectedCategory
                                    ? selectedCategory.name
                                    : 'Selecciona una categoría'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {errors.categoryId && (
                        <Text style={styles.errorText}>{errors.categoryId}</Text>
                    )}
                </View>

                {/* Fecha */}
                <View style={styles.field}>
                    <Text style={styles.label}>Fecha</Text>
                    <View style={styles.inputWrapper}>
                        <CalendarIcon size={18} color="#94a3b8" style={styles.inputIcon} />
                        <TextInput
                            value={date}
                            onChangeText={setDate}
                            style={[
                                styles.input,
                                errors.date && styles.inputError,
                                { paddingLeft: 36 },
                            ]}
                            placeholder="YYYY-MM-DD"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>
                    {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
                </View>

                {/* Notas */}
                <View style={styles.field}>
                    <Text style={styles.label}>Notas (opcional)</Text>
                    <TextInput
                        value={notes}
                        onChangeText={setNotes}
                        style={[styles.input, styles.textarea]}
                        placeholder="Agrega cualquier detalle adicional..."
                        placeholderTextColor="#94a3b8"
                        multiline
                    />
                </View>

                {/* Botones */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.button, styles.buttonOutline]}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.buttonOutlineText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={[
                            styles.button,
                            type === 'income' ? styles.buttonIncome : styles.buttonExpense,
                        ]}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.buttonPrimaryText}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modal de categorías */}
            <Modal
                visible={categoryModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setCategoryModalVisible(false)}
            >
                <Pressable
                    style={styles.modalOverlay}
                    onPress={() => setCategoryModalVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Selecciona una categoría</Text>
                        {filteredCategories.map(cat => (
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
