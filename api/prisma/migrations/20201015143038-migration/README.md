# Migration `20201015143038-migration`

This migration has been generated at 10/15/2020, 3:30:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."UserExample" (
"id" SERIAL,
"email" text   NOT NULL ,
"name" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
"id" SERIAL,
"title" text   NOT NULL ,
"body" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Contact" (
"id" SERIAL,
"name" text   NOT NULL ,
"email" text   NOT NULL ,
"message" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "UserExample.email_unique" ON "public"."UserExample"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201014211558-migration..20201015143038-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
-  provider = "sqlite"
-  url = "***"
+  provider = "postgresql"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
```


