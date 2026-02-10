import repoConfig from "@repo/eslint-config";

export default [
  { ignores: [".vitepress/dist/**", ".vitepress/cache/**", "node_modules/**"] },
  ...repoConfig,
];
