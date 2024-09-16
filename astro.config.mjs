import { defineConfig } from "astro/config";
import { siteMeta } from "./src/lib/constants";
import icon from "astro-icon";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
// import swup from "@swup/astro"; 学習が必要

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
        // swup({
        //     theme: false, //デフォルトで用意されている遷移アニメーションは使用しない
        //     smoothScrolling: false, //スムーズスクロール無効化
        //     updateBodyClass: true, //ページ遷移時にbody要素のクラス名を更新する
        //     reloadScripts: false, //遷移後にスクリプトを再読み込みさせない
        // }),
    ],
    output: "static",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
