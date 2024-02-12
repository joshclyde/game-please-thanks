export const execConcurrentPromises = (
  promises: Array<() => Promise<void>>,
  concurrency: number,
) => {
  let promisesLeftToDo = promises.length;
  return new Promise<void>((resolve) => {
    const concurrent = async () => {
      const current = promises.pop();
      if (current) {
        await current();
        await concurrent();
        promisesLeftToDo--;
        if (promisesLeftToDo === 0) {
          resolve();
        }
      }
    };
    for (let i = 0; i < concurrency; i++) {
      concurrent();
    }
  });
};
