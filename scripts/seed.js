const { db } = require('@vercel/postgres');
// const {
//   qualities,
//   customers,
//   revenue,
//   users,
// } = require('../app/lib/placeholder-data.js');

// const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//     try {
//       await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//       // Create the "users" table if it doesn't exist
//       const createTable = await client.sql`
//         CREATE TABLE IF NOT EXISTS users (
//           id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//           name VARCHAR(255) NOT NULL,
//           email TEXT NOT NULL UNIQUE,
//           password TEXT NOT NULL
//         );
//       `;
  
//       console.log(`Created "users" table`);
  
//       // Insert data into the "users" table
//       const insertedUsers = await Promise.all(
//         users.map(async (user) => {
//           const hashedPassword = await bcrypt.hash(user.password, 10);
//           return client.sql`
//           INSERT INTO users (id, name, email, password)
//           VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//           ON CONFLICT (id) DO NOTHING;
//         `;
//         }),
//       );
  
//       console.log(`Seeded ${insertedUsers.length} users`);
  
//       return {
//         createTable,
//         users: insertedUsers,
//       };
//     } catch (error) {
//       console.error('Error seeding users:', error);
//       throw error;
//     }
//   }
  
  async function seedQualities(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "qualities" table if it doesn't exist
      const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS qualities (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      created DATE NOT null, 
updated Date not null,
accountable INT NOT null, 
adaptable INT NOT null, 
authentic INT NOT null, 
brave INT NOT null, 
capable INT NOT null, 
caring INT NOT null, 
confident INT NOT null, 
creative INT NOT null, 
determined INT NOT null, 
ethical INT NOT null, 
flexible INT NOT null, 
highly_skilled INT NOT null, 
honest INT NOT null, 
imaginative INT NOT null, 
independent INT NOT null, 
initiative INT NOT null, 
innovative INT NOT null, 
inspired INT NOT null, 
inquisitive INT NOT null, 
empowered INT NOT null, 
knowledgeable INT NOT null, 
motivated INT NOT null, 
organized INT NOT null, 
personable INT NOT null, 
prepared INT NOT null, 
realistic INT NOT null, 
responsible INT NOT null, 
self_managed INT NOT null, 
strategic INT NOT null, 
strong_willed INT NOT null, 
supportive INT NOT null, 
trustworthy INT NOT null, 
visionary INT NOT null, 
accountable_improve VARCHAR(255) NOT null,
adaptable_improve VARCHAR(255) NOT null,
authentic_improve VARCHAR(255) NOT null,
brave_improve VARCHAR(255) NOT null,
capable_improve VARCHAR(255) NOT null,
caring_improve VARCHAR(255) NOT null,
confident_improve VARCHAR(255) NOT null,
creative_improve VARCHAR(255) NOT null,
determined_improve VARCHAR(255) NOT null,
ethical_improve VARCHAR(255) NOT null,
flexible_improve VARCHAR(255) NOT null,
highly_skilled_improve VARCHAR(255) NOT null,
honest_improve VARCHAR(255) NOT null,
imaginative_improve VARCHAR(255) NOT null,
independent_improve VARCHAR(255) NOT null,
initiative_improve VARCHAR(255) NOT null,
innovative_improve VARCHAR(255) NOT null,
inspired_improve VARCHAR(255) NOT null,
inquisitive_improve VARCHAR(255) NOT null,
empowered_improve VARCHAR(255) NOT null,
knowledgeable_improve VARCHAR(255) NOT null,
motivated_improve VARCHAR(255) NOT null,
organized_improve VARCHAR(255) NOT null,
personable_improve VARCHAR(255) NOT null,
prepared_improve VARCHAR(255) NOT null,
realistic_improve VARCHAR(255) NOT null,
responsible_improve VARCHAR(255) NOT null,
self_managed_improve VARCHAR(255) NOT null,
strategic_improve VARCHAR(255) NOT null,
strong_willed_improve VARCHAR(255) NOT null,
supportive_improve VARCHAR(255) NOT null,
trustworthy_improve VARCHAR(255) NOT null,
visionary_improve VARCHAR(255) NOT null
    );
  `;

      console.log(`Created "qualitites" table`);
  
    //   // Insert data into the "invoices" table
    //   const insertedInvoices = await Promise.all(
    //     invoices.map(
    //       (invoice) => client.sql`
    //       INSERT INTO invoices (customer_id, amount, status, date)
    //       VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
    //       ON CONFLICT (id) DO NOTHING;
    //     `,
    //     ),
    //   );
  
    //   console.log(`Seeded ${insertedInvoices.length} invoices`);
  
    //   return {
    //     createTable,
    //     invoices: insertedInvoices,
    //   };
    } catch (error) {
      console.error('Error seeding invoices:', error);
      throw error;
    }
  }
  

async function main() {
    const client = await db.connect();
    
    await seedQualities(client);
    // await seedUsers(client);
    // await seedCustomers(client);
    // await seedInvoices(client);
    // await seedRevenue(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  