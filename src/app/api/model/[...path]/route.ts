import { NextRequestHandler } from "@zenstackhq/server/next";
import type { NextRequest } from "next/server";
import { enhance } from "@zenstackhq/runtime";
import { prisma } from "@/lib/db";
import { RestApiHandler } from "@zenstackhq/server/api";

function getPrisma(req: NextRequest) {
  return enhance(prisma);
}

const handler = NextRequestHandler({
  getPrisma,
  useAppDir: true,
});

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
