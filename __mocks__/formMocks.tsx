import z from 'zod'

export const mockZodSchema = z.object({
     email: z.string().email({ message: 'fieldRequired' }),
})

export const mockZodSchemaWPassword = z.object({
     email: z.string().email({ message: 'fieldRequired' }),
     password: z.string().min(1, { message: 'passwordErrorLength,1' }),
})
