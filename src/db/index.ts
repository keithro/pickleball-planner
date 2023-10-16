import { PrismaClient } from "@prisma/client";
import "server-only";

// "declare global" is used here to declare a global variable named cachedPrisma, which is used for caching the PrismaClient instance to ensure that only one instance is created and reused across the application in non-production environments. This helps improve performance and resource management when dealing with database connections.

// Adding new type "cachedPrisma" into the global scope
declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  // prisma = new PrismaClient();
  prisma = new PrismaClient({ log: ["query"] });
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
