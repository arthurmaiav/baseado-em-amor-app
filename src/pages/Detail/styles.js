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
        alignItems: 'center',
        paddingBottom: 8
    },

    cases: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 24
    },

    casesProperty: {
        fontSize: 14,
        color: '#324c22',
        fontWeight: 'bold',
        marginTop: 5,
    },

    casesValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#555e4f',
        marginBottom: 8,

    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#324c22',
        lineHeight: 30
    },

    sectionDescription: {
        fontSize: 15,
        color: '#617256',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#324c22',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

});