import { getClient } from '@/lib/apollo-client';


import { QUERY_SITE_DATA } from '@/data/site';
import { SEO_REVALIDATE_TIME } from './utils';

/**
 * getSiteMetadata
 */

export async function getSiteMetadata() {
  const apolloClient = getClient();

  let siteData;

  try {
    siteData = await apolloClient.query({
      query: QUERY_SITE_DATA,
      context: {
        fetchOptions: {
          next: { revalidate: SEO_REVALIDATE_TIME },
        },
      },
    });
  } catch (e) {
    console.log(`[site][getSiteMetadata] Failed to query site data: ${e.message}`);
    throw e;
  }

  const { generalSettings } = siteData?.data || {};
  let { title, description, language } = generalSettings;

  const settings = {
    title,
    siteTitle: title,
    description,
    language
  };

  return settings;
}