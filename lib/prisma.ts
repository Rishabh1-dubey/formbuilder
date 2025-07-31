
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;



// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// // Prevent multiple instances during development
// export const prisma =
//   global.prisma || new PrismaClient({ log: ["query", "error", "warn"] });

// if (process.env.NODE_ENV !== "production") global.prisma = prisma;
