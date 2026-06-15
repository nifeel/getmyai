import { getCollection, type CollectionEntry } from "astro:content";

export type DocsEntry = CollectionEntry<"docs">;

export function docsPath(entry: DocsEntry) {
  const slug = entry.slug.replace(/\/index$/, "");
  return `/docs/${slug}`;
}

export async function getDocsEntries() {
  return (await getCollection("docs")).sort((a, b) => {
    if (a.data.groupOrder !== b.data.groupOrder) {
      return a.data.groupOrder - b.data.groupOrder;
    }

    if (a.data.pageOrder !== b.data.pageOrder) {
      return a.data.pageOrder - b.data.pageOrder;
    }

    return a.data.title.localeCompare(b.data.title, "zh-CN");
  });
}

export async function getDocsGroups() {
  const entries = await getDocsEntries();
  const grouped = new Map<string, DocsEntry[]>();

  for (const entry of entries) {
    const items = grouped.get(entry.data.group) ?? [];
    items.push(entry);
    grouped.set(entry.data.group, items);
  }

  return Array.from(grouped.entries()).map(([title, items]) => ({ title, items }));
}
