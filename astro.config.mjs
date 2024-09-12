import { defineConfig } from "astro/config";
import { siteMeta } from "./src/lib/constants";
import icon from "astro-icon";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

const { siteUrl } = siteMeta;

// https://astro.build/config
export default defineConfig({
    site: siteUrl,
    base: "/",
    integrations: [
        icon(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        prefetch(),
        sitemap(),
        mdx(),
        react(),
    ],
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
