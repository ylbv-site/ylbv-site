import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>YLBV LTD | Telecom & Digital Marketing Growth Consultant</title>
        <link rel="icon" href="/favicon-new.ico" />
        <meta
          name="description"
          content="Helping telecom operators and digital agencies boost sales, streamline business development, and scale sustainably. Based in London, working globally."
        />
        <meta property="og:title" content="YLBV LTD | Telecom & Digital Marketing Growth Consultant" />
        <meta property="og:description" content="Helping telecom operators and digital agencies boost sales and scale sustainably." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ylbvconsulting.co.uk" />
        <meta property="og:image" content="https://ylbvconsulting.co.uk/preview.jpg" />
      </Head>

      <main className="page-wrap">

        {/* ── Header ── */}
        <header className="site-header">
          <div className="logo">
            YLBV LTD
            <span>Telecom &amp; Digital Marketing</span>
          </div>
          <nav className="site-nav">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* ── Hero ── */}
        <section className="hero">
          <h1>
            Growth Strategy for<br />
            Telecom &amp; Digital Marketing
          </h1>
          <p>
            Helping telecom operators and digital agencies boost sales,
            streamline business development, and scale sustainably.
            Based in London, working globally.
          </p>
        </section>

        {/* ── Services ── */}
        <section className="services" id="services">
          <div className="svc">
            <h3>Sales Strategy</h3>
            <p>Build effective go-to-market plans, optimize your funnel, and accelerate conversions.</p>
          </div>
          <div className="svc">
            <h3>Business Development</h3>
            <p>Set up scalable B2B systems and align commercial teams for long-term revenue.</p>
          </div>
          <div className="svc">
            <h3>Consulting &amp; Advisory</h3>
            <p>Identify bottlenecks and deploy practical, growth-driven solutions tailored to your market.</p>
          </div>
          <div className="svc">
            <h3>IT Services for Telecoms</h3>
            <p>Design and implement efficient systems to support telecom operations, from traffic management to infrastructure scaling.</p>
          </div>
          <div className="svc svc--wide">
            <h3>AI-Powered Traffic Intelligence</h3>
            <p>Machine learning models to detect anomalies in voice traffic patterns, helping telecom operators optimise routing and improve network reliability.</p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="contact" id="contact">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Andrii Sydorenko</p>
            <p>
              <a href="mailto:andriisydorenko@ylbvconsulting.co.uk">
                andriisydorenko@ylbvconsulting.co.uk
              </a>
            </p>
            <p>+44 7846 516144</p>
          </div>
          <a href="mailto:andriisydorenko@ylbvconsulting.co.uk" className="cta-btn">
            Send a Message
          </a>
        </section>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} YLBV LTD · Private Limited Company registered in England &amp; Wales</p>
        </footer>

      </main>
    </>
  );
}
