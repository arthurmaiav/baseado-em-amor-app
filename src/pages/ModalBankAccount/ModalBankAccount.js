import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

export default class ModalTester extends Component {
    state = {
        isModalVisible: false,
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View>
                <Text style={styles.actionText} onPress={this.toggleModal}>Mostrar Conta</Text>

                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalBox}>

                        <View style={styles.sectionInfo}>
                            <Text style={styles.sectionTitle}>Banco:</Text>
                            <Text style={styles.sectionDescription}>Itaú</Text>
                        </View>

                        <View style={styles.sectionInfo}>
                            <Text style={styles.sectionTitle}>Agencia:</Text>
                            <Text style={styles.sectionDescription}>1189</Text>
                        </View>

                        <View style={styles.sectionInfo}>
                            <Text style={styles.sectionTitle}>Conta:</Text>
                            <Text style={styles.sectionDescription}>123456-8</Text>
                        </View>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action} onPress={this.toggleModal}>
                                <Text style={styles.actionText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
            </View >
        );
    }
}