import { getClient } from '@/lib/apollo-client';

import { QUERY_ALL_CATEGORIES, QUERY_CATEGORY_BY_SLUG } from '@/data/categories';

/**
 * categoryPathBySlug
 */

export function categoryPathBySlug(slug) {
  return `/categories/${slug}`;
}

/**
 * getAllCategories
 */

export async function getAllCategories() {
  const apolloClient = getClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}

/**
 * getCategoryBySlug
 */

export async function getCategoryBySlug(slug) {
  const apolloClient = getClient();
  let categoryData;

  try {
    categoryData = await apolloClient.query({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[categories][getCategoryBySlug] Failed to query category data: ${e.message}`);
    throw e;
  }

  if (!categoryData?.data.category) return { category: undefined };

  const category = mapCategoryData(categoryData?.data.category);

  return {
    category,
  };
}

/**
 * getCategories
 */

export async function getCategories({ count } = {}) {
  const { categories } = await getAllCategories();
  return {
    categories: categories.slice(0, count),
  };
}

/**
 * mapCategoryData
 */

export function mapCategoryData(category = {}) {
  const data = { ...category };
  return data;
}
