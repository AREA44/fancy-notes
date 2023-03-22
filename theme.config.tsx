import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/AREA44/fancy-note",
  },
  docsRepositoryBase: "https://github.com/AREA44/fancy-note",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | Fancy Notes",
      };
    }
  },
  logo: <span>Fancy Notes</span>,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://fancy-notes.vercel.app/og.svg"
        : `https://fancy-notes.vercel.app/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Fany notes about all kinds of interesting topics."
        />
        <meta
          name="og:description"
          content="Fany notes about all kinds of interesting topics."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:url" content="https://fancy-notes.vercel.app" />
        <meta
          name="og:title"
          content={title ? title + " | Fancy Notes" : "Fancy Notes"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Fancy Notes" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2837724975096238"
          crossorigin="anonymous"
        ></script>
      </>
    );
  },
  navigation: {
    prev: false,
    next: false,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://fancy-notes.vercel.app" target="_blank">
          Fancy Notes
        </a>
        .
      </span>
    ),
  },
};

export default config;
