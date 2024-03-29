import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/AREA44/fancy-notes',
  },
  docsRepositoryBase: 'https://github.com/AREA44/fancy-notes',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Fancy Notes',
      }
    }
  },
  toc: {
    float: true,
    backToTop: true,
  },
  sidebar: {
    toggleButton: true,
  },
  logo: <span className="hidden font-bold sm:inline-block">Fancy Notes</span>,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://fancy-notes.vercel.app/og.svg'
        : `https://fancy-notes.vercel.app/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Fancy notes about all kinds of interesting topics."
        />
        <meta
          name="og:description"
          content="Fancy notes about all kinds of interesting topics."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:url" content="https://fancy-notes.vercel.app" />
        <meta
          name="og:title"
          content={title ? title + ' | Fancy Notes' : 'Fancy Notes'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Fancy Notes" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2837724975096238"
          crossOrigin="anonymous"
        ></script>
      </>
    )
  },
  navigation: {
    prev: false,
    next: false,
  },
  footer: {
    text: (
      <div className="flex justify-between gap-4 w-full text-sm">
        <span>Copyright © {new Date().getFullYear()}</span>
        <p>
          Made by{' '}
          <a
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AREA44"
          >
            AREA44
          </a>
          .
        </p>
      </div>
    ),
  },
}

export default config
