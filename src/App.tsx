import { Waitlist } from '@clerk/clerk-react'
import { useEffect, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'
import './App.css'
import BlurText from './blocks/TextAnimations/BlurText/BlurText'
import ScrollReveal from './blocks/TextAnimations/ScrollReveal/ScrollReveal'

function App() {
  const posthog = usePostHog()
  const waitlistContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerElement = waitlistContainerRef.current
    if (!containerElement) return

    const handleSubmit = () => {
      try {
        // Prefer the Clerk-provided id for the email field
        const emailInputById = document.getElementById('emailAddress-field') as HTMLInputElement | null
        const emailInput =
          (containerElement.querySelector('#emailAddress-field input[type="email"]') as HTMLInputElement | null) ||
          (containerElement.querySelector('input[type="email"], input[name="email"]') as HTMLInputElement | null)

        const submittedEmail = (emailInputById?.value || emailInput?.value)?.trim()
        if (submittedEmail) {
          posthog?.identify(submittedEmail, { email: submittedEmail })
          posthog?.capture('waitlist_signup', { email: submittedEmail })
        }
      } catch {
        // no-op
      }
    }

    // Use capture phase to reliably catch form submissions inside the Clerk component
    containerElement.addEventListener('submit', handleSubmit, true)
    return () => containerElement.removeEventListener('submit', handleSubmit, true)
  }, [posthog])

  return (
    <main className="app-main">
      <div className="app-container">
        <header className="app-header">
          <div className="brand">
            <img
              src="/reliquery-white-square.png"
              alt="ReliQuery logo"
              className="brand-logo"
            />
            <h1 className="brand-title">Reliquery</h1>
          </div>
          <BlurText
            text={"Built in the Past, Made for the Future"}
            animateBy="words"
            direction="top"
            delay={100}
            className="app-title"
          />
        </header>

        <ScrollReveal as="section" className="app-intro" origin="bottom" distance={24} duration={0.6} stagger={0.12}>
          <p>
            You've inherited your grandmother's watch, found a strange painting at a flea market, or have a dusty box of heirlooms in the attic. You've always wondered: <em>What is this? Where did it come from? What is it worth?</em>
          </p>
          <p>
            <strong>Reliquery</strong> is the new platform that unlocks the secrets in your objects. Using a unique blend of AI technology and a global network of real experts, we help you discover the history, value, and story behind your personal treasures.
          </p>
        </ScrollReveal>

        <hr className="divider" />

        <ScrollReveal as="section" className="features-section" origin="bottom" distance={28} duration={0.6} stagger={0.08}>
          <h2 className="section-heading">Coming Soon to Your Collection</h2>
          <ul className="feature-list">
            <li><strong>Analyze Your Items:</strong> AI Assisted Historical Analysis and Real Expert Valuations</li>
            <li><strong>The Trusted Marketplace:</strong> Confidently buy and sell unique pieces, each one backed by a Reliquery analysis report.</li>
            <li><strong>Play & Learn:</strong> Join our free weekly game to test your knowledge, have fun, and connect with a community of fellow history lovers.</li>
          </ul>
        </ScrollReveal>

        <hr className="divider" />

        <ScrollReveal as="section" className="signup-section" origin="bottom" distance={24} duration={0.6} stagger={0.12}>
          <h2 className="signup-heading">Be the First to Know</h2>
          <div className="waitlist-container" ref={waitlistContainerRef}>
            <Waitlist />
          </div>
        </ScrollReveal>

        <footer className="app-footer">
          © {new Date().getFullYear()} ReliQuery
        </footer>
      </div>
    </main>
  )
}

export default App
