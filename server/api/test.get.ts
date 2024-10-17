export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  // Sleep
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    message: query,
  };
});
