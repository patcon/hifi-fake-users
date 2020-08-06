const os = require('os')
module.exports = on => {
  on('before:browser:launch', (browser, launchOptions) => {
    console.log('before launching browser')
    console.log(browser)

    if (browser.name === 'chrome') {
      // https://www.ghacks.net/2013/10/06/list-useful-google-chrome-command-line-switches/
      launchOptions.args.push('--window-size=1920,1080')

      // See: https://github.com/cypress-io/cypress/issues/5592
      launchOptions.args.push('--use-fake-device-for-media-stream')
      launchOptions.args.push('--use-fake-ui-for-media-stream')
      launchOptions.args.push('--use-file-for-fake-audio-capture=cypress/fixtures/female.wav')

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
