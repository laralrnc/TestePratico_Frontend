import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>( //pega informação que o usuario digita
        {
            id: 0,
            usuario: '',
            senha: '',
        })

    const [userResult, setUserResult] = useState<User>( //pega resposta da requisição feita pro back-end
        {
            id: 0,
            usuario: '',
            senha: '',

        })

    useEffect(() => { //se o id != 0, foi cadastrado com sucesso, logo pode ir logar oq cadastrou
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value) //pega oq foi digitado em confirmarsenha e atualiza com a senha de cima
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) { //espera o usuario clicar no campo de texto para disparar evento

        setUser({ //
            ...user, //espalha as informações digitadas no objeto user
            [e.target.name]: e.target.value //target.name encontra o campo e atribui o valor de target.value
        })

    }
    async function cadastrar(e: ChangeEvent<HTMLFormElement>) { //Form pois o evento vem de um formulario
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                alert("Usuário cadastrado com sucesso")

            //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)
                
                //Pode modificar a msg de acordo com o erro 
                alert("Erro ao realizar o cadastro. Tente novamente")
            }

        } else {
            alert("Dados inconsistentes")

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imagem'>
            <Grid item xs={6} className='bg-text'>
                <Box paddingX={20}>
                    <form >
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textosL'>Cadastre-se</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' className='textBoxL' fullWidth required placeholder='EX: exemplo@exemplo.com' />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' className='textBoxL' fullWidth required placeholder='Senha com no mínimo 8 caracteres' />
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' className='textBoxL' fullWidth required placeholder='Digite sua senha novamente' />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;