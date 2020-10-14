# Migration `20201013193119-migration`

This migration has been generated at 10/13/2020, 8:31:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
)

CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE UNIQUE INDEX "UserExample.email_unique" ON "UserExample"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201013193119-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model UserExample {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+}
+
+model Post {
+  id        Int      @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
```


