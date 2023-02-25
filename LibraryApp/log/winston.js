import { createLogger, transports, format } from 'winston'
const formatter = format.combine(format.timestamp(), format.json())

export const customerLog = createLogger({
  transports: [
    new transports.File({
      filename: 'log/info.log',
      level: 'info',
      format: formatter
    }),
    new transports.File({
      filename: 'log/error.log',
      level: 'error',
      format: formatter
    })
  ],
  statuslevel: true
})

export default customerLog
