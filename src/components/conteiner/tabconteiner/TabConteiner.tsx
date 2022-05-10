import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabConteiner.css';
import ListaConteiner from '../listaconteiner/ListaConteiner';
import ListaMovimentacao from '../../movimentacao/listamovimentacao/ListaMovimentacao';


function TabConteiner() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Contêiners" value="1" />
                        <Tab label="Movimentações" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaConteiner />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaMovimentacao />
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabConteiner;