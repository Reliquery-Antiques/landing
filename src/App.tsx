import { Waitlist } from '@clerk/clerk-react'

function App() {
  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: 880 }}>
        <header style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: '40px', margin: 0 }}>Every Object Has a Story. What's Yours?</h1>
        </header>

        <section style={{ fontSize: '18px', lineHeight: 1.7, margin: '0 auto', textAlign: 'center', maxWidth: 860 }}>
          <p>
            You've inherited your grandmother's watch, found a strange painting at a flea market, or have a dusty box of heirlooms in the attic. You've always wondered: <em>What is this? Where did it come from? What is it worth?</em>
          </p>
          <p>
            <strong>ReliQuery</strong> is the new platform that unlocks the secrets in your objects. Using a unique blend of AI technology and a global network of real experts, we help you discover the history, value, and story behind your personal treasures.
          </p>
        </section>

        <hr style={{ margin: '36px 0', border: 0, borderTop: '1px solid rgba(0,0,0,0.08)' }} />

        <section style={{ display: 'grid', gap: 16, margin: '0 auto', maxWidth: 920 }}>
          <h2 style={{ textAlign: 'center', margin: 0 }}>Coming Soon to Your Collection</h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12, fontSize: '17px' }}>
            <li><strong>Analyze Your Items:</strong> Simply upload a photo. Our AI gives you an instant historical snapshot, and our vetted experts can provide a detailed analysis and valuation.</li>
            <li><strong>The Trusted Marketplace:</strong> Confidently buy and sell unique pieces, each one backed by a ReliQuery analysis report.</li>
            <li><strong>Play & Learn:</strong> Join our free weekly "Guess the Era" game to test your knowledge, have fun, and connect with a community of fellow history lovers.</li>
          </ul>
        </section>

        <hr style={{ margin: '36px 0', border: 0, borderTop: '1px solid rgba(0,0,0,0.08)' }} />

        <section style={{ textAlign: 'center', margin: '0 auto', maxWidth: 760 }}>
          <h2 style={{ marginTop: 0 }}>Be the First to Know</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7 }}>
            The past is coming. Sign up now for exclusive early access to the ReliQuery platform and be the first to play the "Guess the Era" game.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <Waitlist />
          </div>
        </section>

        <footer style={{ textAlign: 'center', marginTop: 48, opacity: 0.7, fontSize: 14 }}>
          © {new Date().getFullYear()} ReliQuery
        </footer>
      </div>
    </main>
  )
}

export default App
