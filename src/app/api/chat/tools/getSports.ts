
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Kajal",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some pictures.";
  },
});