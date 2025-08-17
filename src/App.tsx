import { Waitlist } from '@clerk/clerk-react'
import './App.css'
import BlurText from './blocks/TextAnimations/BlurText/BlurText'
import ScrollReveal from './blocks/TextAnimations/ScrollReveal/ScrollReveal'

function App() {
  return (
    <main className="app-main">
      <div className="app-container">
        <header className="app-header">
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
          <div className="waitlist-container">
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
