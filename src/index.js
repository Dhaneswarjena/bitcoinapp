import { ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher pos={'fixed'} right={'4'} top={'4'}/>
       <App />
    </ChakraProvider>
   
  </StrictMode>
);

export const server="https://api.coingecko.com/api/v3"


