import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
//   out: '',
  schema: './config/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: NEXT_PUBLIC_DATABAE_URL,
  },
});
