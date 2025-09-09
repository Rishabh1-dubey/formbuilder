-- CreateTable
CREATE TABLE "public"."Form" (
    "id" SERIAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" BOOLEAN NOT NULL DEFAULT false,
    "content" JSONB NOT NULL,
    "submissions" INTEGER NOT NULL DEFAULT 0,
    "shareUrl" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Submissions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "formId" INTEGER NOT NULL,
    "content" JSONB NOT NULL,

    CONSTRAINT "Submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscriptions" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "subscribed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Submissions" ADD CONSTRAINT "Submissions_formId_fkey" FOREIGN KEY ("formId") REFERENCES "public"."Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
