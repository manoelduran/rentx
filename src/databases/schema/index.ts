import { appSchema } from '@nozbe/watermelondb';
import { carSchema } from './CarSchema';
import { userSchema } from './userSchema';

const schemas = appSchema({
    version: 2,
    tables: [
        userSchema,
        carSchema
    ]
});

export { schemas };