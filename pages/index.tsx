export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-8 py-16 flex items-start justify-center font-sans">
      <div className="max-w-3xl w-full text-left">
        <header className="mb-12">
          <h1 className="text-2xl font-bold tracking-tight text-gray-800">YLBV LTD</h1>
          <p className="text-sm text-gray-500 mt-1">
            Private Limited Company registered in England & Wales · Company No. 12345678
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Growth Strategy for Telecom & Digital Marketing
          </h2>
          <p className="text-lg text-gray-700 max-w-prose">
            Helping telecom operators and digital agencies boost sales, streamline business development,
            and scale sustainably.
          </p>
        </section>

        <section className="grid gap-10 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-2">Sales Strategy</h3>
            <p className="text-gray-700">
              Build effective go-to-market plans, optimize your funnel, and accelerate conversions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">Business Development</h3>
            <p className="text-gray-700">
              Set up scalable B2B systems and align commercial teams for long-term revenue.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">Consulting & Advisory</h3>
            <p className="text-gray-700">
              Identify bottlenecks and deploy practical, growth-driven solutions tailored to your market.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-sm text-gray-600 mb-1">Let’s connect</p>
          <p className="text-md">
            📧{" "}
            <a
              href="mailto:andriisydorenko@ylbvconsulting.co.uk"
              className="text-blue-600 hover:underline"
            >
              andriisydorenko@ylbvconsulting.co.uk
            </a>
          </p>
          <p className="text-md">📞 +44 7846 516144</p>
        </section>

        <footer className="text-xs text-gray-500">
          Based in London, working globally · YLBV LTD © {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
