import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, Linking, ScrollView } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import Modal from '../ModalBankAccount/ModalBankAccount';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const cases = route.params.cases;
    const message = `Olá, estou entrando em contato pois gostaria de contribuir no caso ${cases.title}`;
    const whatsapp = 555197492100;

    function navigateBack() {
        navigation.goBack();
    }

    function handleClick() {
        Linking.canOpenURL(cases.donationUrl).then(supported => {
            if (supported) {
                Linking.openURL(cases.donationUrl);
            }
        });
    };

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Ajuda no caso: ${cases.title}`,
            recipients: ['baseadoemamoresteio@gmail.com'],
            body: message,
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#324c22" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.cases}>

                    <Text style={styles.casesProperty}>CASO:</Text>
                    <Text style={styles.casesValue}>{cases.title}</Text>

                    <Text style={styles.casesProperty}>DESCRIÇÃO:</Text>
                    <Text style={styles.casesValue}>{cases.description}</Text>

                    {cases.value !== null &&
                        <View>
                            <Text style={styles.casesProperty}>VALOR:</Text>
                            <Text style={styles.casesValue}>{Intl.NumberFormat('pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(cases.value)}
                            </Text>
                        </View>
                    }
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.sectionTitle}>Contato</Text>

                    <Text style={styles.sectionDescription}>Entre em contato por E-mail ou pelo WhatsApp!</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {cases.donationUrl !== '' &&
                    <View style={styles.contactBox}>
                        <Text style={styles.sectionTitle}>Doar</Text>
                        <Text style={styles.sectionDescription}>Você pode ajudar doando pelo link ou transferindo diretamente para a conta da ONG! :)</Text>

                        < View style={styles.actions}>
                            <TouchableOpacity style={styles.action} onPress={handleClick}>
                                <Text style={styles.actionText}>Link Doação</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.action}>
                                <Modal />
                            </TouchableOpacity>
                        </View>
                    </View>
                }

            </ScrollView>
        </View >
    );
}