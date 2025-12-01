import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    TextInput,
    Dimensions,
} from 'react-native';
import { styles as modalStyles } from '../styles/ModalSelector.style'; // o crea este archivo

interface ModalSelectorProps {
    visible: boolean;
    onClose: () => void;
    onSelect: (value: string) => void;
    title: string;
    options: string[];
    selectedValue: string;
    placeholder?: string;
}

export function ModalSelector({
    visible,
    onClose,
    onSelect,
    title,
    options,
    selectedValue,
    placeholder = '',
}: ModalSelectorProps) {
    const [search, setSearch] = useState('');

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (option: string) => {
        onSelect(option);
        onClose();
    };

    const renderOption = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[
                modalStyles.option,
                item === selectedValue && modalStyles.optionSelected,
            ]}
            onPress={() => handleSelect(item)}
            activeOpacity={0.7}
        >
            <Text style={modalStyles.optionText}>{item}</Text>
            {item === selectedValue && (
                <Text style={modalStyles.checkmark}>✓</Text>
            )}
        </TouchableOpacity>
    );

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={modalStyles.overlay}>
                <View style={modalStyles.modal}>
                    {/* Header */}
                    <View style={modalStyles.header}>
                        <Text style={modalStyles.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose} style={modalStyles.closeButton}>
                            <Text style={modalStyles.closeText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Campo de búsqueda */}
                    <TextInput
                        style={modalStyles.searchInput}
                        placeholder={`Buscar ${placeholder}`}
                        value={search}
                        onChangeText={setSearch}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    {/* Lista de opciones */}
                    <FlatList
                        data={filteredOptions}
                        keyExtractor={(item) => item}
                        renderItem={renderOption}
                        style={modalStyles.list}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Modal>
    );
}
