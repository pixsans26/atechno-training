import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    //   server: {
    //     DATABASE_URL: z.string().url(),
    //     OPEN_AI_API_KEY: z.string().min(1),
    //   },
    client: {
        NEXT_PUBLIC_API_URL: z.string().min(1),
        // NEXT_PUBLIC_GA_ID: z.string().min(1),
        // NEXT_PUBLIC_GTM_ID: z.string().min(1)
    },
    runtimeEnv: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        // NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
        // NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID
    }
});