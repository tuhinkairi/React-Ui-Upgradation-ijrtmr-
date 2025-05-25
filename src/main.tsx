import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './lib/store/store.ts'
import BaseLayout from './ui/components/layout/BaseLayout.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <App />
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
