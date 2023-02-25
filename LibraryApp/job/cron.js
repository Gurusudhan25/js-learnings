import { CronJob } from 'cron'
import { spawn } from 'child_process'


// Cron job
const job = new CronJob(' * * * * * *', () => {
    console.log('------------------------------------------------')
    const mongodump = spawn('mongodump', [
      '--uri',
      process.env.lib,
      '--out',
      '/home/gurusudhan16/Calibraint/Earnest-Techies-2k23/Gurusudhan V/LibraryApp/dump'
    ])
    mongodump.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`)
    })
  
    mongodump.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`)
    })
  
    mongodump.on('close', (code) => {
      console.log(`child process exited with code ${code}`)
    })
  })
  job.start()
  