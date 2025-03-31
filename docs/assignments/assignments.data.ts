import { createContentLoader } from "vitepress";

export default createContentLoader("assignments/*.md", {
    transform: (assignments) => {
      return assignments.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
    },
  });