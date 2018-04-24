// import winston, { createLogger } from 'winston';
// const { winston, createLogger, format, transports } = require('winston');

// const { combine, timestamp, label, prettyPrint } = format;


// const logger = createLogger({
//     format: combine(
//         label({ label: 'right meow!' }),
//         timestamp(),
//         prettyPrint()
//     ),
//     transports: [new transports.Console()],
// });
// const logger = createLogger({
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({ filename: 'combined.log' }),
//     ],
// });
// export const consoleLog = () => {
    // console.log('hit', payload);
    // winston.log('info', "127.0.0.1 - there's no place like home");
    // logger.log({
    //     level: 'info',
    //     message: 'What time is the testing at?',
    // });
// };
// export const consoleInfo = payload => logger.log(payload);
