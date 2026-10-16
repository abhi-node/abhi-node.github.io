import rss from '@astrojs/rss';
import { getPosts } from '../posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'abhi-node',
    description: 'Notes and projects by Abhijith Balagurusamy.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
  });
}
