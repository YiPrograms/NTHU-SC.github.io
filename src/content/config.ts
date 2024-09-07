import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing:  z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const competitionsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    blogPost: z.string().optional(),
    badge: z.string().optional(),
});

const eventsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const newsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type CompetitionsSchema = z.infer<typeof competitionsSchema>;
export type EventsSchema = z.infer<typeof eventsSchema>;
export type NewsSchema = z.infer<typeof newsSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const competitionsCollection = defineCollection({ schema: competitionsSchema });
const eventsCollection = defineCollection({ schema: eventsSchema });
const newsCollection = defineCollection({ schema: newsSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'competitions': competitionsCollection,
    'events': eventsCollection,
    'news': newsCollection,
}