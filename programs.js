'use strict'

///////////////////////////////////////////////////////////////////////////////
// Add programs here, format... [icon, src, width, height, flags, name, help, folder]

const programStubs = 
[
['❌',,,,closeAll,'Close All'],
['<b><span style=color:#0f0>?','help.html',300,350,resize|shortcut,,'Check here to see help, code, or edit user programs.\n\nHave fun! ✌️😄'],
['⚙️',,,,shortcut,'System',,
[
    ['🏆','system/trophyCase.html',,,full|resize|sticky,,'View all your trophies here.\nAny JS13k game can add trophies, play to win more!'],
    ['✏️','system/stickyNote.html',300,263,sticky|reload|sticky,,'Ctrl+B = Bold\nCtrl+I = Italic\nCtrl+U = Underline\nReload = Clear'],
    ['🕰️','system/clock.dweet.js',198,198,sticky|code|awake|sticky],
    ['🎚️','system/settings.html',470,190,sticky|sticky],
    ['📁',,,,,'Test',,
    [
        [,'system/systemTest.html',600,370,defaultFlags|code],
        ['⌨️🖱️','system/inputTest.dweet.js'],
        ['✌️😄','index.html',,,,'Meta OS13k'],
    ]],
]],
['🛠️',,,,shortcut,'Apps',,
[
    ['🌐','apps/webBrowser.html',,,defaultFlags|shortcut,,'Tiny web browser with history controls.\nMany websites will prevent opening in a frame like this.'],
    ['⌛','apps/timer.html',400,139,reload|shortcut],
    ['👾','apps/spriteGenerator.html'],
    ['📈','apps/graphingCalculator.html',,,defaultFlags|shortcut,,'Enter a math equation or function of x to see the graph.\n\nMouse = Show Values\nWheel = Zoom'],
    ['📸','apps/camera.html',640,480],
    ['<span style=color:#0f0;background:#000;font-family:monospace>JS>','apps/console.html']
]],
['🎶',,,,shortcut,'Music',,
[
    ['🎵','music/musicPlayer.html',400,330,sticky,,'OS13k can play music using the tiny ZzFXM format.\nJS13k games can add their music to your library.\nPlay games to collect more music.'],
    ['👁️','music/visualizer.dweet.js',,,awake|full|resize|code],
    ['🎹','music/piano.html',520,510,reload|shortcut],
    ['🥁','music/sequencer.html',800,,,,'Keyboard = Note\nUp/Down = Volume\nSpace = Stop\nEnter = End'],
    ['🌱','music/soundSeeds.html',350,480,resize|reload,,'OS13k can play sounds using a hashed string.\nYou can also paste in ZzFX sounds.'],
    ['🦈','music/byteBeatPlayer.html',320,89,reload,,'Enter a funtion and length in seconds to generate music.'],
    ['🎼','music/bach.dweet.js',,,,,'By Rodrigo Siqueira'],
    ['<span style=color:#f00>𝓜','music/minBytes.html',450,450],
    ['🦗','music/smallSeeds.html',520,340,full|reload,,'This is a special tool for devs.\nUse smaller seeds to save space.\nYou can also tab through the list.'],
    ['𝐙𝐙','music/zzfxSoundBoard.html',700,420,,'ZzFX Sound Board'],
]],
['🕹️',,,,shortcut,'Games',,
[
    ['🚀','games/spaceHuggers.html',1280,720,defaultFlags|shortcut,,"A procedural run and gun roguelike for JS13k!\n\nWASD = Move\nC or Left Click = Shoot\nX or Middle Click = Roll\nC or Right Click = Grenade\n"],
    ['💖','games/bounceBack.html',1280,720,defaultFlags|shortcut,,"When life gets you down, it's never too late to... BOUNCE BACK!\n\nWASD = Move\nMouse = Aim\nClick = Throw\nShift = Dash\n\nBy Frank Force"],
    ['🐍','games/sheddingSnake.dweet.js',800,600,defaultFlags|shortcut,,"Eat apples to grow and don't hit your skin!\n\nBy Niklas Berg and Frank Force"],
    ['🙉','games/dontFall.dweet.js',,,defaultFlags|shortcut,,'Build energy to bounce higher.\n\nLeft/Right = Move\nDown = Bounce\n\nBy Tomxor'],
    ['🏂🏻','games/bogusSlopes.dweet.js',,,defaultFlags|shortcut,,'Star = Invincible\nClick = Move\nR = Reset\n\nBy Frank Force'],
    ['🌋','games/lavaRush.html',640,400,defaultFlags|shortcut,,'Escape the rising lava for as long as you can.\n\nWASD = Move\nMouse = Look\nSpace = Jump\n\nBy Jeremy Burns'],
    ['🌈','games/swatch.html',320,340,reload|shortcut,,'Create a smooth gradient.\n\nClick = Swap Colors\n\nBy Nicholas Ortenzio'],
    ['🧜🏽‍♂️','games/aquaPop.html',640,480,defaultFlags|shortcut,,'Left/Right = Move\nSpace = Shoot\nEnter = Restart\n\nBy Kang Seonghoon and Erik Sombroek'],
    ['<span style=color:#fff;background:#000;font-family:monospace>&nbsp;☻&nbsp;','games/digitDilemma.html',400,560,defaultFlags|shortcut,,'Push numbers until none are left.\nAll puzzles are solvable!\n\nArrows = Move\nSpace = Undo\n+/- = Up/Down Level and Randomize\n\nBy Frank Force'],
    ['<span style=color:#000;background:#fff>&nbsp♠️&nbsp','games/freeCell.html',800,800,full|reload|shortcut,,'The classic game of Freecell Solitaire By Frank Force'],
    ['🌲','games/hueJumper.html',,,defaultFlags|shortcut,,'Reach checkpoints to get more time.\nThe road ends at 1000.\n\nMouse = Turn\nClick = Brake\nDouble Click = Jump\n\nBy Frank Force'],
    ['4x4','games/4x4.html',800,440,,'Four Fours','Use 4 4s and math operators to form each number.\nHow many can you find?\n\nBy Frank Force'],
    ['🛣️','games/bogusRoadsMini.dweet.js'],
    ['💗','games/myHeartJumped.dweet.js'],
    ['🦋','games/batafuraiko.html',,,defaultFlags|shortcut,,'Use mouse to fly.\nYou have 1 life to survive 9 waves.\nReload to start over.\n\nBy Frank Force'],
    ['⛱️','games/sandbox.dweet.js'],
]],
['<b style=color:#000;background:#fff>&nbspIII&nbsp',,,,shortcut,'Dweets',,
[
    ['🔎','https://dweetview.3d2k.com'],
    ['🌌','dweets/blackHole.dweet.js'],
    ['🌊','dweets/underwaterCavern.dweet.js'],
    ['🚌','dweets/cityTraffic.dweet.js'],
    ['🚂','dweets/trainSet.dweet.js'],
    ['■','dweets/automaticBreakout.dweet.js'],
    ['❤️','dweets/colorZoom.dweet.js'],
    ['🔺','dweets/triFractal.dweet.js'],
    ['⛏️','dweets/lavaCave.dweet.js'],
    ['👉💧','dweets/touchWater.dweet.js'],
    ['🏃‍♀️','dweets/runningMan.dweet.js'],
    ['🔥','dweets/heatWaves.dweet.js'],
    ['🦠','dweets/simbiotic.dweet.js'],
    ['🏙️','dweets/cityOfShadows.dweet.js'],
    ['🩸','dweets/bloodstream.dweet.js'],
    ['📓','dweets/notebook.dweet.js'],
    ['🌴','dweets/palmTreeSunset.dweet.js'],
    ['🌆','dweets/oceanCity.dweet.js'],
    ['☸️','dweets/buddhabrot.dweet.js'],
]],
['<span style=color:#f40><b>𝓢',,,,shortcut,'Shader Toys',,
[
    ['𝓩𝔃','shaders/zzartLandscape.shader.txt',,,,'ZzArt Landscape'],
    ['<span style=color:#f00>☯','shaders/infiniteYinYangs.shader.txt'],
    ['🌀','shaders/vogelSpiral.shader.txt'],
    ['◣◣','shaders/sierpinskiTowers.shader.txt'],
    ['🕰️','shaders/timeGate.shader.txt'],
    ['👨‍💻','shaders/infinityMatrix.shader.txt'],
]],
['📼',,,,shortcut,'Videos',,
[
    ['🐈','https://www.youtube.com/embed/dpuqKAWISN0',,,,'Alien Cat vs Super Dog'],
    ['🛣️','https://www.youtube.com/embed/txcH9sB9UTM',,,,'Bogus Roads Trailer'],
    ['<span style=color:#00a>π√','https://www.youtube.com/embed/i4Z8TMFQGJ0',,,,'π√ (Piroot) Trailer'],
    ['💫','https://www.youtube.com/embed/d69sIsu3kGQ',,,,'Dual Axis Illusion'],
    ['🔲','https://www.youtube.com/embed/nbZyXP7SCEg',,,,'Squaresville Sifteo Cubes'],
    ['🌳','https://www.youtube.com/embed/GxgwprJVs9c',,,,'Go Bonsai'],
    ['<span style=color:#0f0>F','https://www.youtube.com/embed/lA8xqr14QIY',,,,'Frank Engine Demo'],
    ['🌆','https://www.youtube.com/embed/vnx8kI4EcVc',,,,'Dwitter Coding Demo'],
]]
];