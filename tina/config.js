import { defineConfig } from "tinacms";
import { categories } from "../src/lib/constants";

const tinacmsCategories = categories.map((category) => {
    return { label: category.categoryName, value: category.categorySlug };
});

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
    branch,
    clientId: process.env.CLIENTID, // Get this from tina.io
    token: process.env.TOKEN, // Get this from tina.io
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "assets",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "blog",
                label: "Blog記事",
                path: "src/content/blog",
                format: "mdx",
                ui: {
                    filename: {
                        readonly: false,
                        slugify: (values) => {
                            return `${values?.slug}`;
                        },
                    },
                },
                defaultItem: () => {
                    const today = new Date();
                    const yyyy = today.getFullYear();
                    const mm = String(today.getMonth() + 1).padStart(2, "0"); // 月は0から始まるため+1
                    const dd = String(today.getDate()).padStart(2, "0");
                    return {
                        pubDate: `${yyyy}-${mm}-${dd}`, // 'YYYY-MM-DD'形式の文字列に変更
                    };
                },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "タイトル",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "slug",
                        label: "スラッグ",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "pubDate",
                        label: "投稿日",
                        dateFormat: "YYYY-MM-DD",
                        required: true,
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "画像",
                    },
                    {
                        type: "string",
                        name: "category",
                        label: "カテゴリー",
                        list: true,
                        options: tinacmsCategories,
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "タグ",
                        list: true,
                        ui: {
                            component: "tags",
                        },
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "記事本文",
                        isBody: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "説明",
                        component: "textarea",
                        required: true,
                    },
                ],
            },
        ],
    },
});
