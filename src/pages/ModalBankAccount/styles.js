import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    modalBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    sectionInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#324c22',
        lineHeight: 30
    },

    sectionDescription: {
        fontSize: 18,
        color: '#617256',
        margin: 8
    },

    action: {
        backgroundColor: '#324c22',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actions: {
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

});