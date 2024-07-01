import { z, defineCollection } from 'astro:content';
import { zonedTimeToUtc } from 'date-fns-tz'; // 'zonedTimeToUtc' は 'date-fns-tz' からエクスポートされていません。

const blogCollection = defineCollection({
    type: 'content', // v2.5.0以降
    schema: z.object({
        title: z.string(),
        pubDate: z.string().transform((str) => zonedTimeToUtc(str, 'Asia/Tokyo')),
        image: z.string(),
        category: z.array(z.string()),
        description: z.string(),
    }),
});

export const collections = {
    blog: blogCollection,
}