import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#F8F8F2'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#617256'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 8,
        marginTop: 48,
        color: '#324c22',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#617256'
    },

    caseList: {
        marginTop: 16,
    },

    cases: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    casesProperty: {
        fontSize: 14,
        color: '#324c22',
        fontWeight: 'bold',
    },

    casesValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#555e4f'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#324c22',
        fontSize: 15,
        fontWeight: 'bold'
    }
});