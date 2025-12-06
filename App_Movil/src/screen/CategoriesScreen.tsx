import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
    Pressable,
} from 'react-native';
import {
    Plus,
    Trash2,
    ChevronRight,
    Search,
    AlertTriangle,
    ArrowLeft,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Categories.style';
import type { RootStackParamList } from '../navegation/type'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: 'income' | 'expense' | 'both';
    isDefault: boolean;
    transactionCount?: number;
}

interface CategoriesScreenProps {
    categories: Category[];
    onAddCategory: () => void;
    onDeleteCategory: (categoryId: string) => void;
    onViewCategory: (categoryId: string) => void;
    onClose: () => void;
}

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
    categories,
    onAddCategory,
    onDeleteCategory,
    onViewCategory,
    onClose,
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const incomeCategories = filteredCategories.filter(
        cat => cat.type === 'income' || cat.type === 'both'
    );

    const expenseCategories = filteredCategories.filter(
        cat => cat.type === 'expense' || cat.type === 'both'
    );

    const handleDeleteClick = (category: Category) => {
        if (category.isDefault) return;
        setCategoryToDelete(category);
    };

    const handleConfirmDelete = () => {
        if (categoryToDelete) {
            onDeleteCategory(categoryToDelete.id);
            setCategoryToDelete(null);
        }
    };

    const handleAddCategory = () => {
        navigation.navigate('AddCategory'); // nueva ruta para crear categoría
    };

    const handleViewCategory = (categoryId: string) => {
        console.log('Ver categoría:', categoryId);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Back Button - SOLO cuando hay onClose */}
                    {onClose && (
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.backButton}
                            activeOpacity={0.8}
                        >
                            <ArrowLeft size={20} color="#ffffff" />
                            <Text style={styles.backText}>Volver</Text>
                        </TouchableOpacity>
                    )}
                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.headerTitle}>Categorías</Text>
                            <Text style={styles.headerCount}>{categories.length} categorías</Text>
                        </View>
                        <TouchableOpacity
                            onPress={handleAddCategory}
                            style={styles.addButton}
                            activeOpacity={0.8}
                        >
                            <Plus size={18} color="#ffffff" />
                            <Text style={styles.addButtonText}>Nueva</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Búsqueda */}
                    <View style={styles.searchContainer}>
                        <Search size={18} color="#94a3b8" style={styles.searchIcon} />
                        <TextInput
                            placeholder="Buscar categorías..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            style={styles.searchInput}
                            placeholderTextColor="#94a3b8"
                        />
                    </View>
                </View>

                {/* Lista de categorías */}
                <View style={styles.listContainer}>
                    {/* Ingresos */}
                    {incomeCategories.length > 0 && (
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <View style={[styles.sectionIndicator, { backgroundColor: '#10b981' }]} />
                                <Text style={styles.sectionTitle}>Ingresos</Text>
                                <Text style={styles.sectionBadge}>{incomeCategories.length}</Text>
                            </View>
                            {incomeCategories.map(category => (
                                <CategoryItem
                                    key={category.id}
                                    category={category}
                                    onPress={() => handleViewCategory(category.id)}
                                    onDelete={() => handleDeleteClick(category)}
                                />
                            ))}
                        </View>
                    )}

                    {/* Gastos */}
                    {expenseCategories.length > 0 && (
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <View style={[styles.sectionIndicator, { backgroundColor: '#dc2626' }]} />
                                <Text style={styles.sectionTitle}>Gastos</Text>
                                <Text style={styles.sectionBadge}>{expenseCategories.length}</Text>
                            </View>
                            {expenseCategories.map(category => (
                                <CategoryItem
                                    key={category.id}
                                    category={category}
                                    onPress={() => handleViewCategory(category.id)}
                                    onDelete={() => handleDeleteClick(category)}
                                />
                            ))}
                        </View>
                    )}

                    {/* Sin resultados */}
                    {filteredCategories.length === 0 && (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>No se encontraron categorías</Text>
                            {searchQuery && (
                                <TouchableOpacity
                                    onPress={() => setSearchQuery('')}
                                    style={styles.clearButton}
                                >
                                    <Text style={styles.clearButtonText}>Limpiar búsqueda</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* Alert de confirmación */}
            <Modal
                visible={!!categoryToDelete}
                transparent
                animationType="fade"
                onRequestClose={() => setCategoryToDelete(null)}
            >
                <Pressable style={styles.alertOverlay} onPress={() => setCategoryToDelete(null)}>
                    <View style={styles.alertContent}>
                        <View style={styles.alertHeader}>
                            <AlertTriangle size={24} color="#dc2626" />
                            <Text style={styles.alertTitle}>¿Eliminar categoría?</Text>
                        </View>
                        <Text style={styles.alertDescription}>
                            ¿Estás seguro de eliminar "{categoryToDelete?.name}"?
                        </Text>
                        {categoryToDelete?.transactionCount && categoryToDelete.transactionCount > 0 && (
                            <Text style={styles.alertWarning}>
                                ⚠️ Esta categoría tiene {categoryToDelete.transactionCount} transacciones asociadas.
                            </Text>
                        )}
                        <View style={styles.alertButtons}>
                            <TouchableOpacity
                                onPress={() => setCategoryToDelete(null)}
                                style={[styles.alertButton, styles.alertCancel]}
                            >
                                <Text style={styles.alertCancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleConfirmDelete}
                                style={[styles.alertButton, styles.alertDelete]}
                            >
                                <Text style={styles.alertDeleteText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </SafeAreaView>
    );
};

// Componente reutilizable para cada ítem
interface CategoryItemProps {
    category: Category;
    onPress: () => void;
    onDelete: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onPress, onDelete }) => {
    return (
        <TouchableOpacity style={styles.categoryCard} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.categoryContent}>
                <View style={[styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                    <Text style={[styles.categoryIconText, { color: category.color }]}>●</Text>
                </View>
                <View style={styles.categoryInfo}>
                    <View style={styles.categoryHeader}>
                        <Text style={styles.categoryName}>{category.name}</Text>
                        {category.isDefault && (
                            <Text style={styles.defaultBadge}>Predet.</Text>
                        )}
                    </View>
                    <Text style={styles.categoryCount}>
                        {category.transactionCount || 0} transacciones
                    </Text>
                </View>
            </View>
            <View style={styles.categoryActions}>
                {!category.isDefault && (
                    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                        <Trash2 size={18} color="#dc2626" />
                    </TouchableOpacity>
                )}
                <ChevronRight size={20} color="#94a3b8" />
            </View>
        </TouchableOpacity>
    );
};
