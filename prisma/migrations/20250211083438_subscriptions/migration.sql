-- CreateTable
CREATE TABLE "Subscriptions" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "subscribed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);
