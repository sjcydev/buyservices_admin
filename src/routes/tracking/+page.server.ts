import type { Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const trackingInfo = data.get("tracking") as string;

    console.log(trackingInfo);

    // const tracking = await prisma.trackings.findFirst({
    //   where: {
    //     numero_tracking: {
    //       equals: trackingInfo,
    //     },
    //   },
    // });
  },
};
