import { inngest } from "@/config/inngest";
import { syncUserCreation, syncUserupdation, syncUserDeletion } from "@/config/functions";
import { serve } from "inngest/next";

// Default export is required for Next.js 16 Turbopack compatibility
export default serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserupdation,
    syncUserDeletion
  ],
});
