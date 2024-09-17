import { z } from 'zod';

const forgottenPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Sans adresse email, ca rique d'être trés compliqué.")
    .email("L'adresse email n'est pas valide."),
});

export type ForgottenPasswordSchema = z.infer<typeof forgottenPasswordSchema>;

export default forgottenPasswordSchema;
