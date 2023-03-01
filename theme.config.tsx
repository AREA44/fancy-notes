import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/AREA44/fancy-note",
  },
  docsRepositoryBase: "https://github.com/AREA44/fancy-note",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Fancy Notes",
    };
  },
  logo: <span>Fancy Notes</span>,
  head: function useHead() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://fancy-note.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Fancy Notes"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Fany notes about all kinds of interesting topics"
          }
        />
        <meta name="apple-mobile-web-app-title" content="Fancy Notes" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
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
