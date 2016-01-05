'use strict'
/**
 * git-song - Git hook for adding the currently playing song to a commit.
 * @author Zach Bruggeman <mail@bruggie.com>
 */

const applescript = require('applescript')

function addSong (msg, player, cb) {
  let script = `tell application "${player}" to return "\\"" & current track's name & "\\" by " & current track's artist`

  applescript.execString(script, (err, playing) => {
    if (err) return cb(err)

    return cb(null, `${msg}\n\n:musical_note: Listening to ${playing} :musical_note:`)
  })
}

module.exports = addSong
