import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: screenHeight * 0.8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
    },
    closeButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    closeText: {
        color: '#059669', // emerald-600
        fontSize: 16,
        fontWeight: '500',
    },
    searchInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        paddingHorizontal: 20,
        paddingVertical: 16,
        fontSize: 16,
        backgroundColor: '#f9fafb',
    },
    list: {
        flex: 1,
        maxHeight: 400,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f9fafb',
    },
    optionSelected: {
        backgroundColor: '#f0fdf4', // emerald-50
    },
    optionText: {
        fontSize: 16,
        color: '#1f2937',
        flex: 1,
    },
    checkmark: {
        color: '#059669', // emerald-600
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
