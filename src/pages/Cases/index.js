import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import api from '../../services/api';

export default function Cases() {
    const [cases, setCases] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToDetail(cases) {
        navigation.navigate('Detail', { cases });
    }

    async function loadCases() {
        if (loading) {
            return;
        }

        if (total > 0 && cases.length == total) {
            return;
        }

        setLoading(true);

        const response = await api.get('cases', {
            params: { page }
        });

        setCases([...cases, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadCases();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{cases.length}</Text> casos.
                </Text>
            </View>

            <Text style={styles.title}>Olá, seja muito bem-vindo(a)!</Text>
            <Text style={styles.description}>Abaixo estão os casos que você pode ajudar:</Text>

            <FlatList
                style={styles.caseList}
                data={cases}
                keyExtractor={cases => String(cases.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCases}
                onEndReachedThreshold={0.2}
                renderItem={({ item: cases }) => (
                    <View style={styles.cases}>
                        <Text style={styles.casesProperty}>CASO:</Text>
                        <Text style={styles.casesValue}>{cases.title}</Text>

                        {cases.value !== null &&
                            <View>
                                <Text style={styles.casesProperty}>Valor:</Text>
                                <Text style={styles.casesValue}>{Intl.NumberFormat('pt-BR',
                                    {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(cases.value)}
                                </Text>
                            </View>
                        }

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(cases)}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#324c22" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}