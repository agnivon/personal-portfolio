import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "personal-portfolio",
  title: "Agnivo Neogi's Portfolio",

  projectId: "gx983n5f",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
