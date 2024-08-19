import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import BuggyCounter from './App.jsx'
import Color from './AppEx2.jsx'

// Simulation 1
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      Simulation 1
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      Simulation 2
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      Simulation 3
      <StrictMode>
        <BuggyCounter />
      </StrictMode>
    </div>
    <StrictMode>
      <Color />
    </StrictMode>
  </StrictMode>
)






