import { z } from "zod";

export const ProjectformValidation = z.object({
  title: z.string().min(1, { message: "This field is required" }),
  overview: z.string().min(1, { message: "This field is required" }),
  role: z.string().min(1, { message: "This field is required" }),
  challenge: z.string().min(1, { message: "This field is required" }),
});
