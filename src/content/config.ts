import { z, defineCollection } from "astro:content";
import { fromZonedTime } from "date-fns-tz";

const blogCollection = defineCollection({
    type: "content", // v2.5.0以降
    schema: z.object({
        title: z.string(),
        pubDate: z.string().transform((str) => {
            const date = new Date(fromZonedTime(str, "Asia/Tokyo"));
            console.log(date);
            return date;
        }),
        image: z.string(),
        alt: z.string().optional(),
        category: z.array(z.string()),
        description: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
