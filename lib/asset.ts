// Префикс сайта. На GitHub Pages = "/White-cat", локально = "".
// Используется вручную там, где next/image не подставляет basePath сам.
export const BASE_PATH =
  process.env.GITHUB_PAGES === "true" ? "/White-cat" : "";

/** Склеивает путь к публичному файлу с префиксом сайта. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
