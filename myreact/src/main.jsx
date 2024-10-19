import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
 // Make sure this path is correct
import router from './router.jsx';
import './index.css';
import ContextProvider from './context/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </StrictMode>
);
