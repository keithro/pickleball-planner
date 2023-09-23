import { mysqlTable, serial, text, varchar, int } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
  phone: varchar("phone", { length: 256 }),
  email: text("email"),
});

// export const post = mysqlTable('post', {
//   id: serial('id').primaryKey(),
//   title: text('title'),
//   likes: int('likes'),
//   userId: int('userId'),
// })

// export const countries = mysqlTable('countries', {
//   id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
//   name: varchar('name', { length: 256 }),
// }, (countries) => ({
//   nameIndex: uniqueIndex('name_idx').on(countries.name),
// }));

// export const cities = mysqlTable('cities', {
//   id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
//   name: varchar('name', { length: 256 }),
//   countryId: int('country_id').references(() => countries.id),
//   popularity: mysqlEnum('popularity', ['unknown', 'known', 'popular']),
// });
