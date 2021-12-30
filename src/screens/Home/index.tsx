import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, CarList } from './styles';
import { Car } from '../../components/Car';
import { Car as ModelCar } from '../../databases/model/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { synchronize } from '@nozbe/watermelondb/sync';
import { useNetInfo } from '@react-native-community/netinfo';
import { LoadAnimation } from '../../components/LoadAnimation';
import { database } from '../../databases';
import { Button } from '../../components/Button';

export function Home() {
    const netInfo = useNetInfo();
    const navigation = useNavigation<any>();
    const [carList, setCarList] = useState<ModelCar[]>([]);
    const [loading, setLoading] = useState(true);
    function handleCarDetails(car: ModelCar) {
        navigation.navigate('CarDetails', { car });
    };
    async function offlineSynchronize() {
        await synchronize({
            database,
            pullChanges: async ({ lastPulledAt }) => {
                const response = await api.get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
                const { changes, latestVersion } = response.data;
                return { changes, timestamp: latestVersion }
            },
            pushChanges: async ({ changes }) => {
                const user = changes.users;
                await api.post('/users/sync', user).catch(console.log);
            }
        });
    }
    useEffect(() => {
        let isMounted = true;
        async function fetchCarList() {
            try {
                const carCollection = database.get<ModelCar>('cars');
                const cars = await carCollection.query().fetch();
                if (isMounted) {
                    setCarList(cars)
                }
            } catch (err) {
                console.log(err)
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }
        fetchCarList();
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
          })
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <Logo width={RFValue(108)} height={RFValue(12)} />
                {!loading &&
                    <TotalCars>
                        Total de {carList.length} carros
                    </TotalCars>}
            </Header>
            <Button
            title='Sincronizar'
            onPress={offlineSynchronize}
            />
            {loading ?
                <LoadAnimation /> :
                <CarList
                    data={carList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />}
                />
            }
        </Container>
    );
}