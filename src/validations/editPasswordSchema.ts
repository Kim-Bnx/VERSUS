import { z } from 'zod';

const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const editPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Impossible de deviner ton nouveau mot de passe.')
      .min(6, 'Le mot de passe doit comporter au moins 8 caractéres.')
      .regex(
        PASSWORD_REGEX,
        'Le mot de passe doit contenir au minimum une Majuscule, un chiffre et un caractère spécial.'
      ),
    confirmation: z
      .string()
      .min(1, 'La confirmation de mot de passe ne peux pas être vide.'),
  })
  .refine((data) => data.password === data.confirmation, {
    message: 'Les mots de passe ne correspondent pas.',
    path: ['confirmation'],
  });

export type EditPasswordSchemaType = z.infer<typeof editPasswordSchema>;

export default editPasswordSchema;
