import React from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Card, Body, Header } from 'native-base';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CursosScreen extends React.Component {

    constructor(props){
        super(props);
        this.getLista = this.getLista.bind(this);
    }

    state = {
        refreshing: false,
        lista: [] 
    }

    componentDidMount(){
        this.getLista();
    }

    async getLista(){
        try{
            this.setState({refreshing: true});
            const timeout = await setTimeout(async() => {
                const response = await axios.get(URL);
                this.setState({
                    lista: response.data,
                    refreshing: false
                });
            }, 2000);
        }catch(e){
            console.log(e);
            this.setState({refreshing: false});
        }
    }

    render() {
        const { lista, refreshing } = this.state;

        return (
            <View style={cursosStyles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={() => this.getLista()}
                        />
                      }
                    data={lista}
                    renderItem={({ item }) => (
                        <Card>
                            <Header style={cursosStyles.header}><Text style={[cursosStyles.label, {color: 'white'}]}>{item.descricao}</Text></Header>
                            <Body style={{padding: 20}}>
                                <View style={cursosStyles.horizontal}>
                                    <Text style={cursosStyles.label}>Código</Text>
                                    <Text style={cursosStyles.text}>{item.codigo}</Text>
                                </View>

                                <View style={cursosStyles.horizontal}>
                                    <Text style={cursosStyles.label}>Carga Horária</Text>
                                    <Text style={cursosStyles.text}>{item.cargaHoraria}h</Text>
                                </View>

                                <View style={cursosStyles.horizontal}>
                                    <Text style={cursosStyles.label}>Preço</Text>
                                    <Text style={cursosStyles.text}>R${item.preco}</Text>
                                </View>

                                <View style={cursosStyles.horizontal}>
                                    <Text style={cursosStyles.label}>Categoria</Text>
                                    <Text style={cursosStyles.text}>{item.categoria}</Text>
                                </View>
                            </Body>
                        </Card>
                    )}
                    keyExtractor={item => item._id}
                />
            </View>
        )
    }
}

const cursosStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#5C73F2'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    itemLista: {
        width: '95%',
        borderColor: '#ccc',
        borderWidth: 2
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#230A59',
        marginRight: 5
    },
    text: {
        fontSize: 20,
        color: '#0029FA',
        marginRight: 5
    }
})