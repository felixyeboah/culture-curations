import SanityClient from '@sanity/client';
import SanityImage from '@sanity/image-url';

const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
};

const client = SanityClient(options);

export const imageBuilder = SanityImage(client);

export const previewClient = SanityClient({
  ...options,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
