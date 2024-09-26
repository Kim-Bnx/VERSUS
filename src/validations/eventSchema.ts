import { z } from 'zod';

const eventSchema = z.object({
  title: z.string().min(1, `Le titre de l'événement est obligatoire.`),
  startDate: z.date({
    required_error: 'La date de début est obligatoire.',
  }),
  endDate: z.date({
    required_error: 'La date de fin est obligatoire.',
  }),
  banner: z.string().optional(),
  thumbnail: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  contact: z.string().optional(),
  game: z.number().optional(),
  platform: z.number().optional(),
  type: z.number().optional(),
  rules: z.string().optional(),
});

export type EventSchemaType = z.infer<typeof eventSchema>;

export default eventSchema;
