import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(), // Auto-incrementing primary key
    name: varchar('name').notNull(), // String column
    email: varchar('email').notNull(), // String column
    imageUrl: varchar('imageUrl').notNull(), // String column
    credits: integer('credits').default(3) // Integer column with default value
});
