import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [storyblok({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page',
    }
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
});