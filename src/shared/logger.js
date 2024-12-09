const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
  },
};

// Create a logger instance
const logger = winston.createLogger({
  levels: logLevels.levels,
  level: 'info', // Global log level; 'info' includes 'warn' and 'error'
  transports: [
    // Console transport
    new winston.transports.Console({
      level: 'info', // Log 'info' and more severe levels ('warn' and 'error')
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        }),
      ),
    }),

    // File transport with daily rotation
    new DailyRotateFile({
      filename: 'logs/%DATE%-app.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error', // Log only 'error' level to files
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      maxFiles: '15d', // Keep log files for 15 days
    }),
  ],
});

winston.addColors(logLevels.colors);

module.exports = logger;

// const winston = require('winston');
// const DailyRotateFile = require('winston-daily-rotate-file');

// const logLevels = {
//     levels: {
//         info: 0,
//         warn: 1,
//         error: 2,
//     },
//     colors: {
//         info: 'green',
//         warn: 'yellow',
//         error: 'red',
//     },
// };

// // Create a logger instance with daily rotation for logs
// const logger = winston.createLogger({
//     levels: logLevels.levels,
//     transports: [
//         // Console logging
//         new winston.transports.Console({
//             level: 'info',
//             format: winston.format.combine(
//                 winston.format.colorize({ all: true }), // Apply color to the whole line
//                 winston.format.timestamp(),
//                 winston.format.printf(({ timestamp, level, message }) => {
//                     return `[${timestamp}] ${level}: ${message}`;
//                 })
//             ),
//         }),

//         // Daily rotation file logging
//         new DailyRotateFile({
//             filename: 'logs/%DATE%-app.log',
//             datePattern: 'YYYY-MM-DD',
//             level: 'info',
//             format: winston.format.combine(
//                 winston.format.timestamp(),
//                 winston.format.json()
//             ),
//             maxFiles: '15d', // Keep log files for 14 days
//         }),
//     ],
// });

// winston.addColors(logLevels.colors);

// module.exports = logger;
