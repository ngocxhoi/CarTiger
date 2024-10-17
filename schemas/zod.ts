import { z } from "zod";

export const formListingSchema = z.object({
  listingTitle: z.string().min(10),
  sellingPrice: z.number().min(10).max(20000),
  categories: z.string().min(1),
  condition: z.string().min(1),
  type: z.string().min(1),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().min(1900).max(2024),
  driveType: z.string().min(1),
  transmission: z.string().min(1),
  fuelType: z.string().min(1),
  mileage: z.number(),
  color: z.string().min(1),
  doorType: z.string().min(1),
  listingDescription: z.string().min(1),
  // airConditioning: z.boolean(),
  // cruiseControl: z.boolean(),
});

export type FormListingSchema = z.output<typeof formListingSchema>;
