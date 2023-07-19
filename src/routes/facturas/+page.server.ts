import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
  const facturas = prisma.facturas.findMany({
    include: {
      cliente: true,
    },
  });

  return { facturas };
};
