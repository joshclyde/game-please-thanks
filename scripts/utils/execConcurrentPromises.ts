export const execConcurrentPromises = (
  promises: Array<() => Promise<void>>,
  concurrency: number,
) => {
  const concurrent = async () => {
    const current = promises.pop();
    if (current) {
      await current();
      await concurrent();
    }
  };
  for (let i = 0; i < concurrency; i++) {
    concurrent();
  }
};
