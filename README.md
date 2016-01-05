# git-song

Git hook for adding the currently playing song to a commit. [Experimental, and not actively maintained.](#caveats)

## Install

```bash
npm install git-song -g
```

## Usage

Enter a git repository directory, and run `git-song --player=<player name>`. The only tested players are `itunes` and `spotify`. For example, if you use iTunes, run:

```bash
git-song --player="itunes"
```

This will automatically add a `commit-msg` hook that'll add the currently playing song from iTunes. If there's no song playing, or the player isn't running, it won't add anything to your commit message. Otherwise, it'll add the following to the very bottom of your commit message:

```
:musical_note: Listening to "Song Name" by Artist :musical_note:
```

## Caveats

* Mac OS X only.
* If the player currently isn't running, it'll launch it. This is an applescript limitation.
