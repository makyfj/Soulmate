import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { userRouter } from "./routers/user";
import { soulmateRouter } from "./routers/soulmate";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  soulmate: soulmateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
