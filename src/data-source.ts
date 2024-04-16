import "reflect-metadata"
import { DataSource } from "typeorm"

// In a production app use environment variables or a secrets management system instead of hardcoding credentials 

// Note: for a production-ready application, we should be changing the synchronize property in the data-source.ts 
// file to false and use the concept of DB migrations instead which is supported by TypeORM out of the box

export const AppDataSource = new DataSource({
   type: "postgres",
   url: "postgres://xifkwbke:83Uq29ghREmVLdnDWkKYMluthOe_rqrt@flora.db.elephantsql.com/xifkwbke",
   synchronize: true,
   logging: true,
   entities: [
       "src/entity/**/*.ts"

   ],
   migrations: [],
   subscribers: [],

})

