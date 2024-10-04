import { z } from 'zod';

const createEventSchema = z.object({
  title: z.string().min(1, `Le titre de l'événement est obligatoire.`),
  startDate: z.date({
    required_error: 'La date de début est obligatoire.',
  }),
  endDate: z.date({
    required_error: 'La date de fin est obligatoire.',
  }),
});

export type CreateEventSchemaType = z.infer<typeof createEventSchema>;

export default createEventSchema;
