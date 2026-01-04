import { tool } from 'ai';
import { z } from 'zod';

export const getHire = tool({
  description: "This tool explains why you should hire Kajal Tiwari.",
  parameters: z.object({}),
  execute: async () => {
    return `You should hire me because I bring a rare combination of strong technical skills, real project experience, and a mindset focused on impact rather than just tasks. I don’t approach work as a checklist—I approach it as a problem to be understood, improved, and delivered in the most effective way possible. With hands-on experience in full-stack development, I’ve built and deployed complete applications using modern technologies, handled authentication, databases, APIs, and responsive user interfaces, and ensured that what I build is both functional and user-centric. I’m comfortable taking ownership of features end to end, learning new tools quickly, and adapting to changing requirements without losing momentum. Beyond technical ability, I bring consistency, curiosity, and accountability—I ask the right questions, I don’t give up when something breaks, and I actively look for ways to optimize systems rather than just making them “work.” I communicate clearly, collaborate well with teams, and understand that good software is not just about clean code, but about reliability, usability, and real-world value. If you’re looking for someone who is proactive, detail-oriented, and genuinely invested in building meaningful, scalable solutions—not just someone who writes code and moves on—I’m someone you can rely on to grow with your team and contribute from day one.`;
  },
});