// screens/CategoriesScreen.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable,
    ActivityIndicator,
} from 'react-native';
import {
    Plus,
    Trash2,
    ChevronRight,
    Search,
    AlertTriangle,
    ArrowLeft,
} from 'lucide-react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '../styles/Categories.style';
import type { RootStackParamList } from '../navegation/type';
import {
    getCategories,
    deleteCategory,
    type CategoryDTO,
} from '../api/categories';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Categories'>;

export const CategoriesScreen: React.FC = () => {
    const navigation = useNavigation<Nav>();
    const [categories, setCategories] = useState<CategoryDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryToDelete, setCategoryToDelete] =
        useState<CategoryDTO | null>(null);

    const loadCategories = async () => {
        try {
            setLoading(true);
            const data = await getCategories();
            setCategories(data);
        } catch (e) {
            console.error('Error cargando categorías', e);
        } finally {
            setLoading(false);
        }
    };

    // recargar al entrar en la pantalla
    useFocusEffect(
        useCallback(() => {
            loadCategories();
        }, []),
    );

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const incomeCategories = filteredCategories.filter(
        cat => cat.type === 'income',
    );
    const expenseCategories = filteredCategories.filter(
        cat => cat.type === 'expense',
    );

    const handleDeleteClick = (category: CategoryDTO) => {
        if (category.isDefault) return;
        setCategoryToDelete(category);
    };

    const handleConfirmDelete = async () => {
        if (!categoryToDelete) return;
        try {
            await deleteCategory(categoryToDelete.id);
            setCategories(prev =>
                prev.filter(c => c.id !== categoryToDelete.id),
            );
        } catch (e) {
            console.error('Error eliminando categoría', e);
        } finally {
            setCategoryToDelete(null);
        }
    };

    const handleAddCategory = () => {
        navigation.navigate('AddCategory');
    };

    const handleViewCategory = (categoryId: string) => {
        navigation.navigate('CategoryDetail', { categoryId });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        activeOpacity={0.8}
                    >
                        <ArrowLeft size={20} color="#ffffff" />
                        <Text style={styles.backText}>Volver</Text>
                    </TouchableOpacity>

                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.headerTitle}>Categorías</Text>
                            <Text style={styles.headerCount}>
                                {categories.length} categorías
                            </Text>
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

                {/* Loading */}
                {loading && (
                    <View style={{ paddingVertical: 24, alignItems: 'center' }}>
                        <ActivityIndicator color="#10b981" />
                    </View>
                )}

                {/* Lista */}
                {!loading && (
                    <View style={styles.listContainer}>
                        {incomeCategories.length > 0 && (
                            <View style={styles.section}>
                                <View style={styles.sectionHeader}>
                                    <View
                                        style={[
                                            styles.sectionIndicator,
                                            { backgroundColor: '#10b981' },
                                        ]}
                                    />
                                    <Text style={styles.sectionTitle}>Ingresos</Text>
                                    <Text style={styles.sectionBadge}>
                                        {incomeCategories.length}
                                    </Text>
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

                        {expenseCategories.length > 0 && (
                            <View style={styles.section}>
                                <View style={styles.sectionHeader}>
                                    <View
                                        style={[
                                            styles.sectionIndicator,
                                            { backgroundColor: '#dc2626' },
                                        ]}
                                    />
                                    <Text style={styles.sectionTitle}>Gastos</Text>
                                    <Text style={styles.sectionBadge}>
                                        {expenseCategories.length}
                                    </Text>
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

                        {filteredCategories.length === 0 && !loading && (
                            <View style={styles.emptyState}>
                                <Text style={styles.emptyText}>
                                    No se encontraron categorías
                                </Text>
                                {searchQuery && (
                                    <TouchableOpacity
                                        onPress={() => setSearchQuery('')}
                                        style={styles.clearButton}
                                    >
                                        <Text style={styles.clearButtonText}>
                                            Limpiar búsqueda
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                    </View>
                )}
            </ScrollView>

            {/* Modal eliminar */}
            <Modal
                visible={!!categoryToDelete}
                transparent
                animationType="fade"
                onRequestClose={() => setCategoryToDelete(null)}
            >
                <Pressable
                    style={styles.alertOverlay}
                    onPress={() => setCategoryToDelete(null)}
                >
                    <View style={styles.alertContent}>
                        <View style={styles.alertHeader}>
                            <AlertTriangle size={24} color="#dc2626" />
                            <Text style={styles.alertTitle}>¿Eliminar categoría?</Text>
                        </View>
                        <Text style={styles.alertDescription}>
                            ¿Estás seguro de eliminar "{categoryToDelete?.name}"?
                        </Text>
                        {categoryToDelete?.transactionCount &&
                            categoryToDelete.transactionCount > 0 && (
                                <Text style={styles.alertWarning}>
                                    ⚠️ Esta categoría tiene {categoryToDelete.transactionCount}{' '}
                                    transacciones asociadas.
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

interface CategoryItemProps {
    category: CategoryDTO;
    onPress: () => void;
    onDelete: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
    category,
    onPress,
    onDelete,
}) => (
    <TouchableOpacity
        style={styles.categoryCard}
        onPress={onPress}
        activeOpacity={0.8}
    >
        <View style={styles.categoryContent}>
            <View
                style={[
                    styles.categoryIcon,
                    { backgroundColor: `${category.color}20` },
                ]}
            >
                <Text style={[styles.categoryIconText, { color: category.color }]}>
                    ●
                </Text>
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
