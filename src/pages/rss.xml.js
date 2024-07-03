import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { siteMeta } from '@lib/constants';
const { siteTitle, siteDesc } = siteMeta;

console.log('siteTitle:', siteTitle);
console.log('siteDesc:', siteDesc);

export async function GET(context) {
	const blog = await getCollection('blog');
	console.log('blog:', blog);
	console.log('context.site:', context.site);
	return rss({
		title: siteTitle,
		description: siteDesc,
		site: context.site,
		items: blog.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}`,
		})),
	});
}