import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import { Button, Body, Header } from 'native-base';
import axios from 'axios';

const URL = 'http://localhost:3200/api/contatos';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export class ContatoScreen extends React.Component {

    constructor(props) {
        super(props);

        this.limpar = this.limpar.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    initialState = {
        nome: '',
        email: '',
        assunto: ''
    }

    state = this.initialState

    limpar() {
        this.setState(this.initialState);
    }

    async salvar() {
        try {
            const { nome, email, assunto } = this.state;

            if (!nome || !email || !assunto) {
                this.showAlert('Contato', 'Favor preencher todos os campos', () => {});
                return;
            }

            await axios.post(URL, {
                data: new Date().toISOString(),
                nome,
                email,
                assunto
            });

            this.showAlert('Contato', 'Sua mensagem foi enviada, aguarde a resposta', () => {
                this.limpar();
                this.props.navigation.navigate('Home')
            });
        } catch (e) {
            console.log(e);
        }
    }

    showAlert(title, message, callback) {
        Alert.alert(
            title,
            message,
            [
                { text: 'OK', onPress: callback }
            ]);
    }

    render() {
        const { nome, email, assunto } = this.state;

        return (
            <View style={cursosStyles.container}>
                <Header style={cursosStyles.header}>
                    <Text style={cursosStyles.headerText}>Envie suas dúvidas para que nossa equipe!</Text>
                </Header>
                <Body style={cursosStyles.container}>
                    <TextInput
                        style={cursosStyles.input}
                        placeholder="Digite seu nome"
                        value={nome}
                        onChangeText={str => this.setState({ nome: str })}
                    />
                    <TextInput
                        style={cursosStyles.input}
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={str => this.setState({ email: str })}
                    />
                    <TextInput
                        style={[cursosStyles.input, cursosStyles.area]}
                        placeholder="Digite o assunto"
                        value={assunto}
                        onChangeText={str => this.setState({ assunto: str })}
                    />

                    <View style={cursosStyles.horizontal}>
                        <Button bordered info style={cursosStyles.button} onPress={this.salvar}><Text style={cursosStyles.buttonText}>Enviar Dados </Text></Button>
                        <Button bordered dark style={cursosStyles.button} onPress={this.limpar}><Text style={cursosStyles.buttonText}>Limpar</Text></Button>
                    </View>
                </Body>
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
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    headerText: {
        color: '#230A59',
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        width: screenWidth * 0.95,
        padding: 20,
        borderBottomColor: '#230A59',
        borderBottomWidth: 2,
        fontSize: 20
    },
    area: {
        height: screenHeight * 0.25
    },
    horizontal: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        padding: 10
    },
    buttonText: {
        color: '#230A59'
    }
})