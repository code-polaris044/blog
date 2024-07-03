import { defineConfig } from "astro/config";
import { siteMeta } from "./src/lib/constants";
import icon from "astro-icon";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
const {
  siteUrl
} = siteMeta;


// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [icon(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), prefetch()]
});