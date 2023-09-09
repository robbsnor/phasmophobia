import { Ghost } from '../models/ghost.model';

export const DEFAULT_GHOSTS: Ghost[] = [
  {
    name: 'Spirit',
    evidences: ['EMF Level 5', 'Spirit Box', 'Ghost Writing'],
    status: 'shown',
    data: {
      bulitPoints: [
        "When you smudge a spirit's room, it prevents it from hunting for 3 MINUTES, instead of the usual 90 seconds for most ghosts.",
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Spirit',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Wraith',
    evidences: ['EMF Level 5', 'Spirit Box', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'The Wraith will never step in the salt.',
        "They can teleport to players (just while it's not hunting) which will give a EMF 2 reading.",
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Wraith',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Phantom',
    evidences: ['Spirit Box', 'Ultra Violet', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'The Phantom blinks much more during hunts, making it seem almost invisible.',
        'Will immediately disappear when you take a picture during a ghost event and you will continue to hear the ghost event audio.',
        'Will not appear in the picture when you take a ghost picture.',
        'Also able to wander to a targeted player (not to be mistaken with the Wraith teleport).',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Phantom',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Poltergeist',
    evidences: ['Spirit Box', 'Ultra Violet', 'Ghost Writing'],
    status: 'shown',
    data: {
      bulitPoints: [
        'More likely to throw items, decreases player sanity by 2% for every item thrown.',
        'During hunts, it has a 100% chance to thrown an object nearby every 0.5 seconds compared to 50% for other ghosts.',
        'Can do an “explosion” of items Create a pile of items in the ghost room, and it will explode the items.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Poltergeist',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Banshee',
    evidences: ['Ultra Violet', 'Ghost Orb', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Targets only one player as long as they’re alive and inside the house.',
        'Hunts based off the target’s sanity: 50% sanity.',
        'If the target leaves the house, the banshee will hunt normally.',
        'When the target dies, the banshee will select a new target.',
        'Will ignore all noargets during a hunt.',
        'Increased chance for singing ghost events.',
        'Has a unique parabolic microphone sound known as Banshee Scream',
        'Will follow target around.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Banshee',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Jinn',
    evidences: ['EMF Level 5', 'Ultra Violet', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'When the breaker is on and the Jinn get’s line of site with a player, it will get faster (not as fast as a revenant and not as slow as a Revenant).',
        'When it gets within 3m of a player, it will slow down to normal ghost speed.',
        'Has the ability to zap 25% sanity when near a player and the breaker is on: will give an emf reading at the breaker when this ability is performed.',
        'Unable to turn off the breaker.',
        'Turn off the breaker to disable all his abilities.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Jinn',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Mare',
    evidences: ['Spirit Box', 'Ghost Orb', 'Ghost Writing'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Can hunt at 60% sanity when the lights are off, 40% sanity when the lights are on.',
        'Unable to turn on a light.',
        'Higher chance of performing a light breaking event.',
        'Wanders more if lights are on in its room.',
        'Has a chance of immediately switching a light off that has been turned on.',
        'Mare test consists of turning on a light in its room and seeing if it immediately turns it off.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Mare',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Revenant',
    evidences: ['Ghost Orb', 'Ghost Writing', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Will be very slow when player location is unknown (1m/s).',
        'When it sees a player, it will immediately speed up to 3m/s.',
        'After reaching the players last known location, it will gradually slow back down if it doesn’t see the player.',
        'Best tell for a revenant: slow steps when it does not see a player, and instantly fast speeds when it does see a player.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Revenant',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Shade',
    evidences: ['EMF Level 5', 'Ghost Writing', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Very shy and boring ghost.',
        'Will often show up in shadow form during ghost events or do more airball ghost events.',
        'Ghost event chance increases the lower the average sanity.',
        'Will not throw objects if you are in the same room as it.',
        'Will not hunt if there is a player nearby.',
        'To test for a shade, sit in the ghost room with a crucifix, if your sanity is low enough for the ghost to hunt and it’s not hunting or using a crucifix, probably a shade.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Shade',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Demon',
    evidences: ['Ultra Violet', 'Ghost Writing', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Very aggressive ghost hunt wise.',
        'Can hunt at 70% naturally with a rare chance to hunt at any sanity.',
        'Minimum cooldown between hunts is 20 seconds (other ghosts is 25 seconds).',
        'Smudging a demon will prevent it from hunting for 60 seconds (compared to 90 seconds for most ghosts and 180 seconds for spirit).',
        'Crucifix will prevent a hunt for a demon with an increased range of 5m (instead of 3m for other ghosts).',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Demon',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Yurei',
    evidences: ['Ghost Orb', 'Freezing Temperatures', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Has the ability to zap 15% sanity if a player is nearby.',
        'When he uses his ability, it will fully close a door after touching it twice (known as Yurei Double Door Touch).',
        'When smudged, the yurei will be trapped in its room for a period of time.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Yurei',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Oni',
    evidences: ['EMF Level 5', 'Freezing Temperatures', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Unable to do the “ghost mist” or “air ball” ghost event.',
        'Much more visible during a hunt, meaning it blinks a lot less than other ghosts.',
        'Has a higher chance of showing its full form during ghost events (instead of being a shadow or transparent).',
        'Will drain double the sanity when a ghost event hits you.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Oni',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Yokai',
    evidences: ['Spirit Box', 'Ghost Orb', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Has a chance to hunt at 80% sanity when players nearby are talking (otherwise hunts at 50% sanity).',
        'a hunt, unable to detect your voice or equipment further than 2.5m away.',
        'can get much loser to a yokai with a music box before the box will break.',
        'activity is increased when talking near a Yokai.',
        'test for a Yokai, hide in a room nearby with equipment on and yell at it during a hunt: if you’re close enough and the ghost doesn’t find you, probably a yokai.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Yokai',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Hantu',
    evidences: ['Ultra Violet', 'Ghost Orb', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Lower the temps, the quicker a hantu will be.',
        '- 15ºC+ = 1.4m/s',
        '- 12ºC = 1.75m/s',
        '- 9ºC = 2.1m/s',
        '- 6ºC = 2.3m/s',
        '- 3ºC = 2.5m/s',
        '- 0ºC and below = 2.7m/s',
        'Does not gradually speed up with line of sight.',
        'Has an increased chance to turn off the breaker.',
        'Will produce freezing breath during a hunt in any room if the breaker is off.',
        'Will always have freezing temps on Nightmare mode.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Hantu',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Goryo',
    evidences: ['EMF Level 5', 'Ultra Violet', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Goryo dots can only be seen through the video camera.',
        'Will also not show dots if you’re in the same room as it.',
        'To check for a goryo, make sure no players are in its room and look for dots through the video camera.',
        'Dots is forced evidence on Nightmare mode.',
        'If you see dots without the use of a video camera, you can rule out goryo.',
        'Will not leave its room as often as other ghosts and will not change its favorite room.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Goryo',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Myling',
    evidences: ['EMF Level 5', 'Ultra Violet', 'Ghost Writing'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Can only be heard during a hunt at a range of 12 meters or less (which includes footsteps AND vocal hunt noises).',
        'All other ghosts can be heard up to 20 meters away.',
        'Myling will also respond more on the parabolic microphone.',
        'To test for a myling, hide with your flashlight or put dots on the floor, if you only hear footsteps during a hunt right when your equipment starts flickering, its likely a Myling.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Myling',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Onryo',
    evidences: ['Spirit Box', 'Ghost Orb', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Unable to hunt within 4m of a flame.',
        'If it blows out 3 flames and there are no other flames nearby to prevent it from hunting, it will trigger a hunt at any sanity.',
        'To test for an Onryo, put candles and crucifixes in its room.',
        'If the ghost uses a crucifix without blowing out the candle, rule out Onryo.',
        'If it only uses a crucifix after blowing out all the candles with a 4m range, it’s likely an Onryo.',
        'May also wander away from the candles and initiate a hunt.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Onryo',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'The Twins',
    evidences: ['EMF Level 5', 'Spirit Box', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Able to interact with multiple objects at the same time in different rooms.',
        'Over the course of multiple hunts, you may hear different speeds.',
        'Twins has the chance during a hunt to send out either a slightly faster ghost (110%) or a slightly slower ghost (90%).',
        'Will only send out one ghost during a hunt.',
        'May also hunt from a different location from the ghost room if it’s sending out its “decoy” twin.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/The_Twins',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Raiju',
    evidences: ['EMF Level 5', 'Ghost Orb', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Faster around electronics that are turned on.',
        'Must be within 6m of equipment on small maps, 8m on medium maps, and 10m on large maps.',
        'Headcams are the only equipment that does not effect a Raiju.',
        'When hunting, electronics will malfunction at 15m for a Raji as opposed to 10m for other ghosts.',
        'May be easy to confuse a Raiju with a Myling because of the above fact, so make sure to pay attention to its speed near powered electronics.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Raiju',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Obake',
    evidences: ['EMF Level 5', 'Ultra Violet', 'Ghost Orb'],
    status: 'shown',
    data: {
      bulitPoints: [
        'The only ghost that can leave a 6 fingered fingerprint.',
        'Fingerprints are forced evidence on Nightmare.',
        'Has a 25% to not leave fingerprints .',
        'Also able to cut the duration of fingerprints in half if it uses its ability.',
        'During a hunt, the Obake has a chance to shapeshift.',
        'It will briefly flash as another ghost model of the same gender.',
        'It was a 6.66% chance every time it blinks during a hunt to shapeshift.',
        'To test for an obake during a hunt, loop it for as long as possible and see if it changes ghost models.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Obake',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'The Mimic',
    evidences: ['Spirit Box', 'Ultra Violet', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'The only ghost to have 4 pieces of evidence on professional difficulty and below (Orbs being the piece of evidence you will get that is not listed in the journal for Mimic).',
        'Will always have Orbs even on no evidence runs.',
        'Will change the ghost it mimics every 30 seconds to 2 minutes.',
        'Cannot change its behavior mid hunt.',
        'So if you notice a ghost changes its behavior every couple hunts, check for mimic.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/The_Mimic',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Moroi',
    evidences: ['Spirit Box', 'Ghost Writing', 'Freezing Temperatures'],
    status: 'shown',
    data: {
      bulitPoints: [
        'Speed demon.',
        'Curses a player when they get a response on either the spirit box or the parabolic mic.',
        'Curse causes the players sanity to drain twice as fast, with lights and candles unable to prevent this curse.',
        'To remove the curse, take sanity pills.',
        'Smudging during a hunt will blind the moroi for 12 seconds, instead of 6 seconds for other ghosts.',
        'The lower your sanity, the faster the moroi.',
        'Moroi will also get line of site speed, so at 0% sanity and enough LOS speed, Moroi becomes the fastest ghost in the game.',
        'Spirit box is forced evidence on nightmare.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Moroi',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Deogen',
    evidences: ['Spirit Box', 'Ghost Writing', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'You’re unable to hide from this ghost, he knows the position of every player at anytime.',
        'To tell if its a Deo while hiding, listen to its speed: if its super fast and then slows down when it gets closer to your hiding spot, try and leave your hiding spot and move somewhere that you can loop the ghost.',
        'Deos are VERY slow when they are near you so they are super easy to loop.',
        'Has a unique spirit box response that sounds like a growl or heavy breathing.',
        'Increased chanced of writing and dots.',
        'Spirit Box is forced evidence.',
        "HAHAHAH STUPID GHOST CAN'T RUN XDXDXD",
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Deogen',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
  {
    name: 'Thaye',
    evidences: ['Ghost Orb', 'Ghost Writing', 'D.O.T.S. Projector'],
    status: 'shown',
    data: {
      bulitPoints: [
        'The only ghost capable of aging.',
        'Will start out young at the beginning of the game, making it more active and more aggressive and can hunt at 75% sanity and be super fast 2.5m/s.',
        'Every 1-2 minutes that you’re near a Thaye, it has a chance of aging.',
        'At it’s oldest, it lowers the hunting threshold to 15% and speed 1m/s.',
        'Does not have line of site speed increase, so it will not speed up gradually while chasing you.',
        'If it seems to slow down each hunt, its likely a Thaye.',
        'It will also tell you a different age on the ouija board if you ask it its age at the beginning of the game and then again later on once you’ve aged it.',
      ],
      resources: [
        {
          title: 'Wiki',
          url: 'https://phasmophobia.fandom.com/wiki/Thaye',
        },
        {
          title: 'General Steam guide',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3025678165',
        },
      ],
    },
  },
];
