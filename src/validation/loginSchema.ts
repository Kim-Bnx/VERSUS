import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().min(1, 'Impossible de se connecter sans adresse email.'),
  password: z.string().min(1, 'Tu sembles avoir oublié le mot de passe.'),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

export default loginSchema;
