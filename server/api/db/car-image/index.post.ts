import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { images, carListingId } = body;
  const data = images.map((image: any) => {
    return {
      carListingId: carListingId,
      imageUrl: image,
    };
  });
  const dataCreated = await prisma.carImage.createMany({
    data: data,
  });

  if (dataCreated)
    return {
      message: "Success",
    };
});
