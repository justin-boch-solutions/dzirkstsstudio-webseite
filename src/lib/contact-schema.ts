import { z } from "zod";

const languages = ["de", "en", "lv"] as const;

const agenturTopics = [
  "social-media",
  "photography",
  "social-photo",
  "other",
] as const;

const elektroTopics = [
  "installation",
  "repair",
  "modernization",
  "consultation",
  "other",
] as const;

export const contactSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    company: z.string().trim().max(120).optional(),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().max(40).optional(),
    topic: z.enum([
      ...agenturTopics,
      ...elektroTopics,
    ]),
    contactVia: z.enum(["email", "phone", "whatsapp"]),
    timeline: z.enum(["asap", "soon", "flexible"]).optional(),
    message: z.string().trim().min(10).max(5000),
    area: z.enum(["agentur", "elektro"]),
    language: z.enum(languages),
    token: z.string().min(1),
  })
  .superRefine((data, ctx) => {
    const allowed =
      data.area === "agentur"
        ? (agenturTopics as readonly string[])
        : (elektroTopics as readonly string[]);

    if (!allowed.includes(data.topic)) {
      ctx.addIssue({
        code: "custom",
        message: "Topic does not match area",
        path: ["topic"],
      });
    }

    if (data.contactVia !== "email" && !data.phone?.trim()) {
      ctx.addIssue({
        code: "custom",
        message: "Phone required for phone/whatsapp contact",
        path: ["phone"],
      });
    }
  });

export type ContactPayload = z.infer<typeof contactSchema>;

export const agenturTopicOptions = agenturTopics;
export const elektroTopicOptions = elektroTopics;
