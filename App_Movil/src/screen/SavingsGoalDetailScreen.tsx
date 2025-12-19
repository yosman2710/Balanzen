import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Plus,
    Target,
    Calendar,
    TrendingUp,
    Trash2,
    DollarSign,
    AlertCircle,
} from 'lucide-react-native';
import { styles } from '../styles/SavingsGoalDetail.style';

interface SavingsGoal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline: string;
    description?: string;
    createdAt: string;
}

interface Contribution {
    id: string;
    amount: number;
    date: string;
    note?: string;
}

interface SavingsGoalDetailScreenProps {
    goal: SavingsGoal;
    contributions: Contribution[];
    onClose: () => void;
    onAddContribution: (goalId: string, amount: number, note?: string) => void;
    onDeleteContribution: (goalId: string, contributionId: string) => void;
    onDeleteGoal: (goalId: string) => void;
}

export const SavingsGoalDetailScreen: React.FC<SavingsGoalDetailScreenProps> = ({
    goal,
    contributions,
    onClose,
    onAddContribution,
    onDeleteContribution,
    onDeleteGoal,
}) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [contributionAmount, setContributionAmount] = useState('');
    const [contributionNote, setContributionNote] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const percentage = (goal.currentAmount / goal.targetAmount) * 100;
    const remaining = goal.targetAmount - goal.currentAmount;

    // Calcular días restantes
    const today = new Date();
    const deadlineDate = new Date(goal.deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const monthsRemaining = Math.floor(daysRemaining / 30);

    const validateContribution = () => {
        const newErrors: Record<string, string> = {};
        if (!contributionAmount || parseFloat(contributionAmount) <= 0) {
            newErrors.contributionAmount = 'Ingresa un monto válido mayor a 0';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddContribution = () => {
        if (validateContribution()) {
            onAddContribution(goal.id, parseFloat(contributionAmount), contributionNote.trim() || undefined);
            setContributionAmount('');
            setContributionNote('');
            setShowAddForm(false);
            setErrors({});
            Alert.alert('Contribución añadida', 'Tu ahorro ha sido registrado');
        }
    };

    const handleDeleteGoal = () => {
        onDeleteGoal(goal.id);
        Alert.alert('Meta eliminada', 'La meta de ahorro ha sido eliminada');
        setShowDeleteConfirm(false);
        onClose();
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: '#7c3aed' }]}>
                <TouchableOpacity onPress={onClose} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <View style={styles.headerTop}>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>{goal.name}</Text>
                        <Text style={styles.headerSubtitle}>Meta de ahorro</Text>
                    </View>
                    <View style={styles.headerIcon}>
                        <Target size={24} color="#ffffff" />
                    </View>
                </View>
            </View>

            <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent} showsVerticalScrollIndicator={false}>
                {/* Progreso */}
                <View style={styles.progressCard}>
                    <View style={styles.cardContent}>
                        <View style={styles.amountRow}>
                            <View>
                                <Text style={styles.labelSmall}>Progreso actual</Text>
                                <Text style={styles.amountLarge}>
                                    ${goal.currentAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                </Text>
                            </View>
                            <View style={styles.amountRight}>
                                <Text style={styles.labelSmall}>Meta</Text>
                                <Text style={styles.amountLarge}>
                                    ${goal.targetAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.progressTrack}>
                            <View
                                style={[
                                    styles.progressBar,
                                    { width: `${Math.min(percentage, 100)}%`, backgroundColor: '#8b5cf6' },
                                ]}
                            />
                        </View>

                        <View style={styles.progressFooter}>
                            <Text style={styles.progressPercent}>{percentage.toFixed(1)}% completado</Text>
                            <Text style={styles.remainingAmount}>
                                ${remaining.toLocaleString('es-ES', { minimumFractionDigits: 2 })} restante
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Información */}
                <View style={styles.infoCard}>
                    <Text style={styles.sectionTitle}>Información</Text>
                    <View style={styles.infoList}>
                        <View style={styles.infoItem}>
                            <View style={[styles.infoIcon, { backgroundColor: '#dbeafe' }]}>
                                <Calendar size={20} color="#2563eb" />
                            </View>
                            <View style={styles.infoContent}>
                                <Text style={styles.infoLabel}>Fecha límite</Text>
                                <Text style={styles.infoValue}>
                                    {new Date(goal.deadline).toLocaleDateString('es-ES', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </Text>
                            </View>
                            <Text style={[styles.timeRemaining, daysRemaining < 30 && styles.timeWarning]}>
                                {monthsRemaining > 0
                                    ? `${monthsRemaining} ${monthsRemaining === 1 ? 'mes' : 'meses'}`
                                    : `${daysRemaining} ${daysRemaining === 1 ? 'día' : 'días'}`}
                            </Text>
                        </View>

                        {goal.description && (
                            <View style={styles.descriptionSection}>
                                <Text style={styles.infoLabel}>Descripción</Text>
                                <Text style={styles.descriptionText}>{goal.description}</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Formulario contribución */}
                {showAddForm ? (
                    <View style={styles.addFormCard}>
                        <Text style={styles.sectionTitle}>Añadir Contribución</Text>
                        <View style={styles.formFields}>
                            <View style={styles.field}>
                                <Text style={styles.label}>Monto</Text>
                                <View style={[styles.inputWrapper, errors.contributionAmount && styles.inputError]}>
                                    <DollarSign size={18} color="#94a3b8" style={styles.inputIcon} />
                                    <TextInput
                                        value={contributionAmount}
                                        onChangeText={setContributionAmount}
                                        placeholder="0.00"
                                        placeholderTextColor="#94a3b8"
                                        keyboardType="decimal-pad"
                                        style={styles.input}
                                    />
                                </View>
                                {errors.contributionAmount && (
                                    <Text style={styles.errorText}>{errors.contributionAmount}</Text>
                                )}
                            </View>

                            <View style={styles.field}>
                                <Text style={styles.label}>Nota (opcional)</Text>
                                <TextInput
                                    value={contributionNote}
                                    onChangeText={setContributionNote}
                                    placeholder="Ej: Ahorro mensual, Bono, etc."
                                    placeholderTextColor="#94a3b8"
                                    maxLength={50}
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.formButtons}>
                                <TouchableOpacity
                                    style={styles.formCancel}
                                    onPress={() => {
                                        setShowAddForm(false);
                                        setContributionAmount('');
                                        setContributionNote('');
                                        setErrors({});
                                    }}
                                >
                                    <Text style={styles.formCancelText}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.formAdd} onPress={handleAddContribution}>
                                    <Text style={styles.formAddText}>Añadir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => setShowAddForm(true)}
                    >
                        <Plus size={20} color="#059669" style={styles.addIcon} />
                        <Text style={styles.addButtonText}>Añadir Contribución</Text>
                    </TouchableOpacity>
                )}

                {/* Contribuciones */}
                <View style={styles.contributionsSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Contribuciones ({contributions.length})</Text>
                        <Text style={styles.sectionSubtitle}>
                            Total: ${goal.currentAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                        </Text>
                    </View>

                    {contributions.length === 0 ? (
                        <View style={styles.emptyCard}>
                            <View style={styles.emptyIcon}>
                                <TrendingUp size={32} color="#9ca3af" />
                            </View>
                            <Text style={styles.emptyTitle}>Sin contribuciones aún</Text>
                            <Text style={styles.emptySubtitle}>Añade tu primera contribución para empezar</Text>
                        </View>
                    ) : (
                        <View style={styles.contributionsList}>
                            {contributions.map(contribution => (
                                <View key={contribution.id} style={styles.contributionCard}>
                                    <View style={styles.contributionLeft}>
                                        <View style={[styles.contributionIcon, { backgroundColor: '#d1fae5' }]}>
                                            <TrendingUp size={20} color="#059669" />
                                        </View>
                                        <View style={styles.contributionInfo}>
                                            <Text style={styles.contributionAmountText}>
                                                +${contribution.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                            </Text>
                                            <Text style={styles.contributionNote}>
                                                {contribution.note || 'Contribución'}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.contributionRight}>
                                        <Text style={styles.contributionDate}>
                                            {new Date(contribution.date).toLocaleDateString('es-ES', {
                                                day: 'numeric',
                                                month: 'short',
                                            })}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => {
                                                onDeleteContribution(goal.id, contribution.id);
                                                Alert.alert('Contribución eliminada', 'El ahorro ha sido removido');
                                            }}
                                            style={styles.deleteContribution}
                                        >
                                            <Trash2 size={18} color="#dc2626" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Eliminar meta */}
                <TouchableOpacity
                    style={styles.deleteGoalButton}
                    onPress={() => setShowDeleteConfirm(true)}
                >
                    <Trash2 size={18} color="#dc2626" style={styles.deleteIcon} />
                    <Text style={styles.deleteGoalText}>Eliminar Meta</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal confirmación */}
            <Modal visible={showDeleteConfirm} transparent animationType="fade">
                <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setShowDeleteConfirm(false)}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <AlertCircle size={24} color="#dc2626" />
                            <Text style={styles.modalTitle}>¿Estás seguro?</Text>
                        </View>
                        <Text style={styles.modalDescription}>
                            Esta acción eliminará la meta y todas sus contribuciones. No se puede deshacer.
                        </Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowDeleteConfirm(false)}>
                                <Text style={styles.modalCancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalDelete} onPress={handleDeleteGoal}>
                                <Text style={styles.modalDeleteText}>Eliminar Meta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
};
