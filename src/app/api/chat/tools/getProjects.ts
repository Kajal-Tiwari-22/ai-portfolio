
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Kajal Tiwari",
  parameters: z.object({}),
  execute: async () => {
    return `Proud of just one project? That’s unfair. But if I had to pick the two that really define my work, these would be it—because they’re not just functional, they solve real problems.

First up: AI Tour Planner. This project is where creativity met intelligence. I built an AI-driven travel itinerary generator that creates personalized trip plans using Gemini AI, with real-time currency conversion and secure user data handling through Firebase. The focus wasn’t just on recommendations—it was on delivering a smooth, mobile-first experience with a clean, responsive interface using React and TailwindCSS. It’s the kind of project that feels genuinely useful, especially for users who want smart planning without the chaos.

Second: Job Insider, a full-stack MERN application designed to streamline the job search process. It supports role-based access for both job seekers and recruiters, along with advanced search, filtering, and real-time updates. I handled secure authentication using JWT, built scalable APIs with Node.js, and ensured smooth data flow with MongoDB. This project really tested my ability to think end-to-end—from backend security to frontend usability—and it’s one of the most complete systems I’ve built.

Honorable mention? The Book Store Application, because building a full-stack platform with admin controls, authentication, and efficient database handling is always satisfying. But the first two? Those are the projects that best reflect how I approach problem-solving—thoughtfully, practically, and with impact.

So, what catches your eye more—AI-powered personalization or a full-stack platform built for real users? Either way, I’m happy to let the projects speak for themselves. 😏`;
  },
});