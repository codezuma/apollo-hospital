/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cp7dLPbKp3Y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function DownloadPDf() {
  return (
    <section className="w-full py-12 bg-gray-200  bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Choose Your Health Package</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse through our selection of health packages and choose the one that best suits your needs.
          </p>
        </div>
        <div>
          <a
            href="/pdf-checkup.pdf"
            download
            className="inline-flex h-10 items-center justify-center text-white rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Click Me 
          </a>
        </div>
      </div>
    </section>
  )
}