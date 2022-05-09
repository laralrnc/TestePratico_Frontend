import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imagem'>
        <Grid item xs={6} className='bg-text'>
            <Box paddingX={20}>
                <form >
                    <Typography variant='h3' gutterBottom component='h3' align='center' className='textosL'>Entrar</Typography>
                    <TextField  id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' className='textBoxL' fullWidth required placeholder='EX: exemplo@exemplo.com' />
                    <TextField  id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' className='textBoxL' fullWidth required placeholder='Senha com no mínimo 8 caracteres' />
                    <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' className='button'>
                                Logar
                            </Button>

                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Link to="/cadastrousuario">
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                            Cadastre-se
                        </Typography>
                    </Link>

                </Box>
            </Box>
        </Grid>
        <Grid xs={6}  />
    </Grid>
    );
}

export default Login;