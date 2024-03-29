import { getClient } from "@/lib/apollo-client";
import { QUERY_ALL_MENUS } from "@/data/menus";
import { MENU_REVALIDATE_TIME } from "./utils";

export const MENU_LOCATION_NAVIGATION_DEFAULT = "HEADER";

/**
 * getAllMenus
 */

export async function getAllMenus() {
  const apolloClient = getClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_MENUS,
    context: {
      fetchOptions: {
        next: { revalidate: MENU_REVALIDATE_TIME },
      },
    },
  });

  const menus = data?.data.menus.edges.map(mapMenuData);

  return {
    menus,
  };
}

/**
 * mapMenuData
 */

export function mapMenuData(menu = {}) {
  const { node } = menu;
  const data = { ...node };

  data.menuItems = data.menuItems.edges.map(({ node }) => {
    return { ...node };
  });

  return data;
}

/**
 * mapPagesToMenuItems
 */

export function mapPagesToMenuItems(pages) {
  return pages.map(({ id, uri, title }) => {
    return {
      label: title,
      path: uri,
      id,
    };
  });
}

/**
 * parseHierarchicalMenu
 */
export const parseHierarchicalMenu = (
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) => {
  const tree = [];
  const childrenOf = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};

/**
 * findMenuByLocation
 */

export function findMenuByLocation(menus, location) {
  if (typeof location !== "string") {
    throw new Error(
      "Failed to find menu by location - location is not a string."
    );
  }

  const menu = menus.find(({ locations }) => {
    return locations
      .map((loc) => loc.toUpperCase())
      .includes(location.toUpperCase());
  });

  return menu && parseHierarchicalMenu(menu.menuItems);
}
