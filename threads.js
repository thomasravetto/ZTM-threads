const { isMainThread, Worker, workerData} = require('worker_threads')

if (isMainThread) {
    console.log(`Main thread process id: ${process.pid}`)
    new Worker(__filename, {
        workerData: [3, 2, 1, 6, 5, 4]
    })
    new Worker(__filename, {
        workerData: [0, 7, 2, 3, 6, 8, 1]
    })
} else {
    console.log(`Worker process id: ${process.pid}`)
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}