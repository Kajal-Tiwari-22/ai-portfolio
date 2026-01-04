import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Kajal Tiwari. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation: "My journey into tech wasn't planned; it began with curiosity and grew into a passion for building and problem-solving. I enjoy learning, experimenting, and turning ideas into projects.",
    };
  },
});