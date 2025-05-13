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

              <h3 className="text-2xl font-medium mt-6 mb-2">IT Services for Telecoms</h3>
              <p className="text-gray-700">
                Design and implement efficient systems to support telecom operations, from traffic management to infrastructure scaling.
              </p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-10 mt-10">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-700 mb-1">Andrii Sydorenko</p>
            <p className="text-gray-700 mb-1">
              <a href="mailto:andrii@ylbvconsulting.co.uk" className="underline text-blue-600">
                andrii@ylbvconsulting.co.uk
              </a>
            </p>
            <p className="text-gray-700">+44 7846 516144</p>
          </section>
        </div>
      </main>
    </>
  );
}
