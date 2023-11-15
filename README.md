# Next.js WordPress Starter

Scaling WordPress with the power of [Next.js](https://nextjs.org/) and the static web!

### Requirements

- [WordPress](https://wordpress.org/)
- [WPGraphQL](https://www.wpgraphql.com/)
- Environment variables (see below)

```bash
yarn create next-app -e https://github.com/iambherulal/headless-wordpress-starter
# or
npx create-next-app -e https://github.com/iambherulal/headless-wordpress-starter
```

Add an `.env.local` file to the root with the following:

```
WORDPRESS_GRAPHQL_ENDPOINT="http://wordpressite.com/graphql"
WORDPRESS_PLUGIN_SEO=true
WORDPRESS_FRONT_URL="http://wordpressite.com"
```

## 🚀 Getting Started

### What is this and what does it include?

The goal of this project is to take WordPress as a headless CMS and use Next.js to create a static experience without any 3rd party services that can be deployed anywhere.

The hope is to build out as many features as we can to support what's typically expected from an out of the box theme on WordPress. Currently, those features include:

- Home (https://headless-wordpress-demo.vercel.app)
- Pages (https://headless-wordpress-demo.vercel.app/about)
- Posts (https://headless-wordpress-demo.vercel.app/posts/new-hello-world-2023)
- Categories (https://headless-wordpress-demo.vercel.app/categories/block)
- Authors (https://headless-wordpress-demo.vercel.app/authors/iambherulal/)
- Sitemap (https://headless-wordpress-demo.vercel.app/sitemap.xml)

Additionally, the theme is expected to be SEO friendly and performant out of the box, including:

- Unique page titles - (except Categories and Author page)
- Unique descriptions - (except Categories and Author page)
- Open Graph tags

You can also optionally enable Yoast SEO plugin support to supercharge your SEO! (See below)

## 🔌 Plugins

### Yoast SEO

The Yoast SEO plugin is partially supported including most major features like metadata and open graph customization.

To enable the plugin, configure `WORDPRESS_PLUGIN_SEO` to be `true` either as an environment variable or within next.config.js.

### Advanced custom fields

I have used Advanced custom fields Pro for home page content you can use free version to setup field.
