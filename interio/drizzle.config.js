import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://interio_owner:yN8X2qvcfoCm@ep-solitary-glitter-a2bqthqt.eu-central-1.aws.neon.tech/interio?sslmode=require'
  },
});
