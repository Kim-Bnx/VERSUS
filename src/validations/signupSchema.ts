import { z } from 'zod';

const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "L'adresse email est obligatoire.")
      .email("L'adresse email n'est pas valide."),
    password: z
      .string()
      .min(1, 'Le mot de passe est obligatoire.')
      .min(6, 'Le mot de passe doit comporter au moins 8 caractéres.')
      .regex(
        PASSWORD_REGEX,
        'Le mot de passe doit contenir au minimum une Majuscule, un chiffre et un caractère spécial.'
      ),
    confirmation: z
      .string()
      .min(1, 'La confirmation du mot de passe est obligatoire.'),
  })
  .refine((data) => data.password === data.confirmation, {
    message: 'Les mots de passe ne correspondent pas.',
    path: ['confirmation'],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;

export default signupSchema;
