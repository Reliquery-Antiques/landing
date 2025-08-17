import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { PostHogProvider } from 'posthog-js/react'
import './index.css'
import App from './App.tsx'

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string
const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={posthogKey}
      options={{
        api_host: posthogHost,
        defaults: '2025-05-24',
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking
        debug: import.meta.env.MODE === 'development',
      }}
    >
      <ClerkProvider publishableKey={clerkPublishableKey}>
        <App />
      </ClerkProvider>
    </PostHogProvider>
  </StrictMode>,
)
