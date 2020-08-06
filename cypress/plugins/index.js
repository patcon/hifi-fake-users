const os = require('os')

const audioFile = process.env.AUDIO_URL ? '/tmp/audio.wav' : 'cypress/fixtures/voice-sample.wav'

module.exports = on => {
  on('before:browser:launch', (browser, launchOptions) => {
    console.log('before launching browser')
    console.log(browser)

    if (browser.name === 'chrome') {
      // https://www.ghacks.net/2013/10/06/list-useful-google-chrome-command-line-switches/
      launchOptions.args.push('--window-size=1920,1080')

      // See: https://github.com/cypress-io/cypress/issues/5592
      // Other flags already used be default.
      launchOptions.args.push(`--use-file-for-fake-audio-capture=${audioFile}`)
      launchOptions.args.push('--use-file-for-fake-video-capture=cypress/fixtures/beach-sample.mjpeg')

      console.log('chrome launch args:')
      console.log(launchOptions.args.join(os.EOL))
      return launchOptions
    }
  })

  on('task', {
    log(message) {
      console.log(message)
      return null
    }
  })
}
