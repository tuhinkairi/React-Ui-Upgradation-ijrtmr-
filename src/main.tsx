import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './lib/store/store.ts'
import BaseLayout from './ui/components/layout/BaseLayout.tsx'
import { BrowserRouter } from 'react-router-dom'
import Loading from './ui/components/Loading.tsx'
import { ErrorBoundary } from './ui/components/layout/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Suspense fallback={<Loading />} name='Loading...'>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </Suspense>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
