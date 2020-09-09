# Test Cypress Audio

The purpose of the repo is to see if we can run a cypress on GitHub Actions,
such that it mock a microphone audio device with a test file.

The reason for investigating this is to see whether GitHub Actions and Cypress
could be used to create persistent fake users in a High Fidelity space.

This would allow push-button access to having fake users in spaces, like:
- DJs who play music for an hour and then leave
- Ocean wave sounds coming from a beach
- Koisk-like narration of spaces or exhibits
- Stretch goal: Automated walking tours of spaces

See: https://hackmd.io/Wv8m0dxvSmu4tF02Htb24Q

## Usage

(This process isn't ideal, but is the current way to use this yourself.)

1. Clone this repo.
2. `npm install`
3. Drop your preferred WAV audio file into place at `cypress/fixtures/audio.wav`
3. Edit file `cypress/integration/hifi-fake-user.spec.js` to hardcode your own preferences in `config`.
    - Current configuration is for the fake user to appear behind the
      turntables onstage in the default HQ map.
    - If you'd like to set a new position and orientation, experiment with moving your own avatar into place, and then click:

      `Menu (top-left) > Invite`

      You can find the `x` and `y` position and the `o` orientation in the URL it provides.
4. `npm run fake-user`
