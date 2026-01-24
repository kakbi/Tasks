function promiseAll1(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

function promiseAll2(promises) {
    return new Promise((resolve, reject) => {
        const results = [];

        function run(index) {
            if (index === promises.length) {
                resolve(results);
                return;
            }

            Promise.resolve(promises[index])
                .then((res) => {
                    results[index] = res;
                    run(index + 1);
                })
                .catch(reject);
        }

        run(0);
    });
}

function promiseAll3(promises) {
    const results = [];

    return promises
        .reduce(
            (acc, promise, index) =>
                acc.then(() =>
                    Promise.resolve(promise).then((res) => {
                        results[index] = res;
                    }),
                ),
            Promise.resolve(),
        )
        .then(() => results);
}

function promiseAll4(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let remaining = promises.length;

        if (remaining === 0) {
            resolve([]);
            return;
        }

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((value) => {
                    results[i] = value;
                    remaining--;

                    if (remaining === 0) {
                        resolve(results);
                    }
                })
                .catch((reason) => {
                    reject(reason);
                });
        }
    });
}
