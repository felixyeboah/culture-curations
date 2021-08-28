import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  category,
  body,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

const projectFields = `
  _id,
  title,
  date,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  category,
  backgroundcolor,
  headingcolor,
  contentcolor,
  datecolor,
  url,
  technologies,
  fonts,
  body,
`;

const bookmarksFields = `
  _id,
  title,
  name,
  date,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  url,
  body,
`;

const inspirationalFields = `
  _id,
  name,
  from,
  via, 
  to,
   'slug': slug.current,
  'coverImage': coverImage.asset->url,
  url,
`;

const websitesFields = `
  _id,
  name,
  title,
   'slug': slug.current,
  'coverImage': coverImage.asset->url,
  url,
`;

const videosFields = `
  _id,
  name,
  title,
   'slug': slug.current,
  'coverImage': coverImage.asset->url,
  url,
`;

const podcastsFields = `
  _id,
  name,
  title,
   'slug': slug.current,
  'coverImage': coverImage.asset->url,
  url,
  body
`;

const booksFields = `
  _id,
  name,
  title,
   'slug': slug.current,
  'coverImage': coverImage.asset->url,
  url,
  body
`;

const usesFields = `
  _id,
  title,
   'slug': slug.current,
  lists
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(dpublishedAtate desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForProjects(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "projects"] | order(date desc, _updatedAt desc){
      ${projectFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForBookmark(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "bookmarks"] | order(date desc, _updatedAt desc){
      ${bookmarksFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForInspirations(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "inspirations"] | order(date desc, _updatedAt desc){
      ${inspirationalFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForWebsites(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "websites"] | order(date desc, _updatedAt desc){
      ${websitesFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForVideos(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "videos"] | order(date desc, _updatedAt desc){
      ${videosFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForPodcasts(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "podcasts"] | order(date desc, _updatedAt desc){
      ${podcastsFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForBooks(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "books"] | order(date desc, _updatedAt desc){
      ${booksFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsForUses(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "uses"] | order(date desc, _updatedAt desc){
      ${usesFields}
    }`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[_type == "comment" && post._ref == ^._id]{_id, name, email, comment, _createdAt}
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
