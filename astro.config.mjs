import { defineConfig } from "astro/config";
import { siteMeta } from "./src/lib/constants";
const { siteUrl } = siteMeta;
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: siteUrl,
    integrations: [icon()],
});
