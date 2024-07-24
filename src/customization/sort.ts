import { getCollection } from 'astro:content';

export const desc = (
    await getCollection('blog', ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    })
).sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
