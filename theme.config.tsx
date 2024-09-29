import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/AREA44/fancy-notes',
  },
  docsRepositoryBase: 'https://github.com/AREA44/fancy-notes',
  toc: {
    float: true,
    backToTop: true,
  },
  sidebar: {
    toggleButton: true,
  },
  logo: <span className="hidden font-bold sm:inline-block">Fancy Notes</span>,
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title
    const ogImage =
      'https://fancy-notes.vercel.app' +
      (isDefault ? 'og.svg' : `api/og?title=${config.title}`)

    const description =
      config.frontMatter.description ||
      'Fancy notes about all kinds of interesting topics.'
    const title = config.title + (route === '/' ? '' : ' - Fancy Notes')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="Fancy Notes" />
        <meta name="twitter:url" content="https://fancy-notes.vercel.app" />
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
    content: (
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
