// all data retrieved from https://igdb.com

export interface VideoGame {
  id: number;
  name: string;
  url: string;
  synopsis: string;
  avg_critic_rating: number;
  avg_user_rating: number;
  artwork_url: string;
  developer: string;
  publisher: string;
  initial_release_date: string;
  platforms: string[];
  genre: string[];
  multiplayer: boolean;
  trailer_url?: string;
}

export const videoGames: VideoGame[] = [
  {
    id: 350392,
    name: "Elden Ring",
    url: "https://www.igdb.com/games/elden-ring",
    synopsis: "Elden Ring is an action RPG developed by FromSoftware and published by Bandai Namco Entertainment, released in February 2022. Directed by Hidetaka Miyazaki, with world-building contributions from novelist George R. R. Martin, the game features an expansive open world called the Lands Between. Players assume the role of a customisable character known as the Tarnished, who must explore this world, battle formidable enemies, and seek to restore the Elden Ring to become the Elden Lord. The game builds on the challenging gameplay mechanics familiar from the Dark Souls series but introduces a more open-ended structure with vast exploration, dynamic weather, and a day-night cycle. It offers deep lore, complex characters, and an interconnected world filled with secrets, dungeons, and powerful bosses.",
    avg_critic_rating: 9.7,
    avg_user_rating: 9.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    initial_release_date: "02-25-2022",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Role-playing",
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/AKXiKBnzpBQ"
  },
  {
    id: 30492,
    name: "Clair Obscur: Expedition 33",
    url: "https://www.igdb.com/games/clair-obscur-expedition-33",
    synopsis: "Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.",
    avg_critic_rating: 8.7,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9gam.jpg",
    developer: "Sandfall Interactive",
    publisher: "Kepler Interactive",
    initial_release_date: "04-24-2025",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    genre: [
      "Role-playing",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/ejgW-upPMgk"
  },
  {
    id: 339266,
    name: "Donkey Kong Bananza",
    url: "https://www.igdb.com/games/donkey-kong-bananza",
    synopsis: "Donkey Kong Bananza is exclusively on Nintendo Switch 2! Explore a vast underground world—by smashing your way through it! Bash, throw, and climb through just about anything in DK’s brand-new 3D platforming action-adventure game!",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa082.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "07-17-2025",
    platforms: [
      "Nintendo Switch 2"
    ],
    genre: [
      "Platformer",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/tdsRPs6rX4w"
  },
  {
    id: 371776,
    name: "ARC Raiders",
    url: "https://www.igdb.com/games/arc-raiders",
    synopsis: "",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9rk1.jpg",
    developer: "Embark Studios",
    publisher: "Embark Studios",
    initial_release_date: "10-30-2025",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    genre: [
      "Shooter",
      "Extraction",
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/U0jK145mxec"
  },
  {
    id: 376989,
    name: "Street Fighter 6",
    url: "https://www.igdb.com/games/street-fighter-6",
    synopsis: "",
    avg_critic_rating: 9.3,
    avg_user_rating: 8.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9wxo.jpg",
    developer: "Capcom",
    publisher: "Capcom",
    initial_release_date: "06-02-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Fighting",
      "Arcade",
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/4EnsDg6DCTE"
  },
  {
    id: 85727,
    name: "Call of Duty: Black Ops 7",
    url: "https://www.igdb.com/games/call-of-duty-black-ops-7",
    synopsis: "Embrace the madness. In Call of Duty: Black Ops 7, Treyarch and Raven Software are bringing players the most mind-bending Black Ops ever. The year is 2035 and the world is on the brink of chaos, ravaged by violent conflict and psychological warfare following the events of the fan-favorite titles Black Ops 2 and Black Ops 6. Wielding cutting-edge technology, the Black Ops team led by David Mason must fight back against a manipulative enemy who weaponizes fear above all else.",
    avg_critic_rating: 6.6,
    avg_user_rating: 3.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9xwv.jpg",
    developer: "Treyarch",
    publisher: "Activision",
    initial_release_date: "11-14-2025",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Shooter",
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/65Yrv8Q2bco"
  },
  {
    id: 63844,
    name: "Baldur's Gate III",
    url: "https://www.igdb.com/games/baldurs-gate-iii",
    synopsis: "An ancient evil has returned to Baldur's Gate, intent on devouring it from the inside out. The fate of Faerun lies in your hands. Alone, you may resist. But together, you can overcome.",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    initial_release_date: "08-03-2023",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Role-playing",
      "Strategy",
      "Turn-based",
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/1T22wNvoNiU"
  },
  {
    id: 371149,
    name: "The Witcher 3: Wild Hunt",
    url: "https://www.igdb.com/games/the-witcher-3-wild-hunt",
    synopsis: "Set in a dark fantasy world, the game follows Geralt of Rivia, a monster hunter searching for his adopted daughter, Ciri, while navigating political conflicts and supernatural threats. Gameplay features exploration, combat, character progression, and branching narratives shaped by player choices. Widely acclaimed for its writing, world-building, and depth, it is considered one of the most influential RPGs of its generation.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaarl.jpg",
    developer: "CD Projekt RED",
    publisher: "WB Games",
    initial_release_date: "05-19-2015",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    genre: [
      "Role-playing",
      "Adventure",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/XHrskkHf958"
  },
  {
    id: 330684,
    name: "Chrono Trigger",
    url: "https://www.igdb.com/games/chrono-trigger",
    synopsis: "In this turn-based Japanese RPG, young Crono must travel through time through a misfunctioning teleporter to rescue his misfortunate companion and take part in an intricate web of past and present perils. The adventure that ensues soon unveils an evil force set to destroy the world, triggering Crono's race against time to change the course of history and bring about a brighter future.",
    avg_critic_rating: 9.1,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3plw.jpg",
    developer: "Square",
    publisher: "Square",
    initial_release_date: "03-11-1995",
    platforms: [
      "Super Famicom",
      "Satellaview",
      "Super Nintendo Entertainment System",
      "Nintendo Wii",
    ],
    genre: [
      "Role-playing",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/iNfTdFMz6E"
  },
  {
    id: 220875,
    name: "The Legend of Zelda: Tears of the Kingdom",
    url: "https://www.igdb.com/games/the-legend-of-zelda-tears-of-the-kingdom",
    synopsis: "An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda: Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you'll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link's new abilities to fight back against the malevolent forces that threaten the kingdom?",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "05-11-2023",
    platforms: [
      "Nintendo Switch",
      "Nintendo Switch 2",
    ],
    genre: [
      "Puzzle",
      "Adventure",
      "Action",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/SSVYVgm4tH4"
  },
  {
    id: 94850,
    name: "Hollow Knight: Silksong",
    url: "https://www.igdb.com/games/hollow-knight-silksong",
    synopsis: "Hollow Knight: Silksong is the epic sequel to Hollow Knight, the epic action-adventure of bugs and heroes. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobccf.jpg",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    initial_release_date: "09-04-2025",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "Nintendo Switch 2"
    ],
    genre: [
      "Platformer",
      "Metroidvania",
      "Adventure",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/6XGeJwsUP9c",
  },
  {
    id: 152887,
    name: "Metroid Prime",
    url: "https://www.igdb.com/games/metroid-prime",
    synopsis: "A 3D exploration-focused metroidvania with first-person shooting mechanics and the first 3D entry in the Metroid series, Metroid Prime follows Samus Aran after the events of Metroid (1986) as she boards a Space Pirate frigate, then chases her escaping archrival Ridley into the intricately structured Tallon IV, a planet full of deadly wildlife and former home to the advanced and ancient Chozo race.",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3w4w.jpg",
    developer: "Retro Studios",
    publisher: "Nintendo",
    initial_release_date: "11-17-2002",
    platforms: [
      "Nintendo GameCube",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter",
      "Platformer",
      "Adventure",
      "Metroidvania",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/e9OQOJC1QII"
  },
  {
    id: 120563,
    name: "Metal Gear Solid 3: Snake Eater",
    url: "https://www.igdb.com/games/metal-gear-solid-3-snake-eater",
    synopsis: "Metal Gear Solid 3: Snake Eater is the prequel to the entire Metal Gear series. Most of the series' defining gameplay elements have been carried over and as before, Snake must use stealth and wits rather than brute force to infiltrate enemy zones and eliminate his major adversaries. Unlike the previous games, this installment takes place in a large outdoor jungle. Snake is able to use camouflage, climb trees, hide in tall grass or wear clothes that make him less noticeable.",
    avg_critic_rating: 8.6,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ei5.jpg",
    developer: "Konami Computer",
    publisher: "Konami",
    initial_release_date: "11-17-2004",
    platforms: [
      "PlayStation 2"
    ],
    genre: [
      "Stealth",
      "Tactical",
      "Adventure",
      "Shooter"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/hXUono66wxI"
  },
  {
    id: 367989,
    name: "Portal 2",
    url: "https://www.igdb.com/games/portal-2",
    synopsis: "Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg",
    developer: "Valve Software",
    publisher: "Valve",
    initial_release_date: "04-18-2011",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 3",
      "Xbox 360",
      "Nintendo Switch",
    ],
    genre: [
      "Puzzle",
      "Platformer",
      "Adventure",
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/H50wW4eAFKo"
  },
  {
    id: 138930,
    name: "Silent Hill 2",
    url: "https://www.igdb.com/games/silent-hill-2",
    synopsis: "The second entry in the Silent Hill franchise, Silent Hill 2 is a narrative-focused third-person psychological survival horror game with emphasis on combat, exploration and puzzle-solving elements which follows James Sunderland, a man who receives a letter, seemingly sent by his three-years-deceased wife Mary, in which he is beckoned to the fog-ridden town of Silent Hill at the same time as numerous other people troubled by their past.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2vyg.jpg",
    developer: "Team Silent",
    publisher: "Konami",
    initial_release_date: "09-24-2001",
    platforms: [
      "PlayStation 2",
    ],
    genre: [
      "Horror",
      "Puzzle",
      "Survival",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/21s45Yel5VM"
  },
  {
    id: 363578,
    name: "Final Fantasy VII",
    url: "https://www.igdb.com/games/final-fantasy-vii",
        synopsis: "Final Fantasy VII is a role-playing game set in a post-modern, steampunk world where technology and fantasy elements coexist. Players control Cloud Strife, an ex-soldier who joins the eco-terrorist group AVALANCHE to oppose Shinra Inc., a corporation draining the planet's life energy. The game features turn-based combat with an active time element, a customizable Materia system for abilities, and unique Limit Break attacks for each character. Players explore 3D environments, engage in various mini-games, and uncover a complex plot involving Cloud's mysterious past and a powerful threat to the world. As the story progresses, players gain access to different vehicles, allowing them to explore new areas and uncover additional content.",
    avg_critic_rating: 8.5,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kx2.jpg",
    developer: "Square",
    publisher: "Sony Computer Entertainment",
    initial_release_date: "01-31-1997",
    platforms: [
      "PlayStation 1"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/utVE4aUKYuY"
  },
  {
    id: 79850,
    name: "Half-Life 2",
    url: "https://www.igdb.com/games/half-life-2",
    synopsis: "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. NOW. By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around them, from the physical environment to the behaviors even the emotions of both friends and enemies",
    avg_critic_rating: 7.9,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nmw.jpg",
    developer: "Valve Software",
    publisher: "Valve",
    initial_release_date: "11-16-2004",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "Android",
      "Xbox",
      "Xbox 360",
      "PlayStation 3",
    ],
    genre: [
      "Shooter",
      "Puzzle",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/F809l4SQi1o"
  },
  {
    id: 264844,
    name: "NieR: Automata",
    url: "https://www.igdb.com/games/nier-automata",
    synopsis: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
    avg_critic_rating: 8.6,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pcj.jpg",
    developer: "PlatinumGames",
    publisher: "Square Enix",
    initial_release_date: "02-23-2017",
    platforms: [
      "Windows",
      "PlayStation 4",
    ],
    genre: [
      "Role-playing",
      "Hack and slash"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/wJxNhJ8fjFk"
  },
  {
    id: 111651,
    name: "Hades",
    url: "https://www.igdb.com/games/hades--1",
    synopsis: "A rogue-lite hack and slash dungeon crawler in which Zagreus, son of Hades the Greek god of the dead, attempts to escape his home and his oppressive father by fighting the souls of the dead through the various layers of the ever-shifting underworld, while getting to know and forging relationships with its inhabitants.",
    avg_critic_rating: 9.4,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob9kr.jpg",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    initial_release_date: "09-17-2020",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "iOS"
    ],
    genre: [
      "Role-playing",
      "Roguelike",
      "Hack and slash",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/Bz8l935Bv0Y"
  },
  {
    id: 274434,
    name: "Super Mario Odyssey",
    url: "https://www.igdb.com/games/super-mario-odyssey",
    synopsis: "Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities, like the power to capture and control objects, animals, and enemies to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!",
    avg_critic_rating: 9.7,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "10-27-2017",
    platforms: [
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Adventure",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/5kcdRBHM7kM"
  },
  {
    id: 1020,
    name: "Grand Theft Auto V",
    url: "https://www.igdb.com/games/grand-theft-auto-v",
    synopsis: "Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game's three lead characters, playing all sides of the game's interwoven story.",
    avg_critic_rating: 9.0,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.jpg",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    initial_release_date: "09-17-2013",
    platforms: [
      "Windows",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox 360",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Shooter",
      "Racing",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/hvoD7ehZPcM"
  },
  {
    id: 25076,
    name: "Red Dead Redemption 2",
    url: "https://www.igdb.com/games/red-dead-redemption-2",
    synopsis: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
    avg_critic_rating: 9.4,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    initial_release_date: "10-26-2018",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Shooter",
      "Role-playing",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/HVRzx17WHVk"
  },
  {
    id: 121,
    name: "Minecraft",
    url: "https://www.igdb.com/games/minecraft",
    synopsis: "Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the game include mining for ore, fighting hostile mobs, and crafting new blocks and tools.",
    avg_critic_rating: 9.3,
    avg_user_rating: 8.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa77e.jpg",
    developer: "Mojang Studios",
    publisher: "Microsoft Studios",
    initial_release_date: "11-18-2011",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "iOS",
      "Android",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Sandbox",
      "Survival",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/MmB9b5njVbA"
  },
  {
    id: 11208,
    name: "God of War (2018)",
    url: "https://www.igdb.com/games/god-of-war--1",
    synopsis: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive and teach his son to do the same.",
    avg_critic_rating: 9.4,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob9h2.jpg",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "04-20-2018",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Role-playing",
      "Hack and slash",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/rClXqZD2Xrs"
  },
  {
    id: 1009,
    name: "The Last of Us",
    url: "https://www.igdb.com/games/the-last-of-us",
    synopsis: "A third-person action-adventure game featuring exploration, stealth and combat. Players face both infected creatures and hostile human enemies while progressing through various environments. Set twenty years after a parasitic fungus outbreak devastates civilization, the game follows Joel and Ellie on a dangerous journey across post-apocalyptic America.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg",
    developer: "Naughty Dog",
    publisher: "Sony Computer Entertainment",
    initial_release_date: "06-14-2013",
    platforms: [
      "PlayStation 3",
      "PlayStation 4"
    ],
    genre: [
      "Shooter",
      "Adventure",
      "Survival"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/OQpdSVF_k_w"
  },
  {
    id: 2155,
    name: "Dark Souls",
    url: "https://www.igdb.com/games/dark-souls",
    synopsis: "Dark Souls is an action role-playing game set in a dark, decaying kingdom of Lordran. The player assumes the role of an Undead, a cursed being who is fated to resurrect repeatedly after death. The game is known for its challenging difficulty and deep lore.",
    avg_critic_rating: 9.1,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x78.jpg",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    initial_release_date: "09-22-2011",
    platforms: [
      "Windows",
      "PlayStation 3",
      "Xbox 360"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/o1780AqAa20"
  },
  {
    id: 76882,
    name: "Sekiro: Shadows Die Twice",
    url: "https://www.igdb.com/games/sekiro-shadows-die-twice",
    synopsis: "Carve your own clever path to vengeance as you come face-to-face with larger than life foes in FromSoftware's dark and twisted adventure set in feudal Japan. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral combat.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2a23.jpg",
    developer: "FromSoftware",
    publisher: "Activision",
    initial_release_date: "03-22-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "Xbox One"
    ],
    genre: [
      "Adventure",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/rXMX4YJ7Lks"
  },
  {
    id: 7346,
    name: "The Legend of Zelda: Breath of the Wild",
    url: "https://www.igdb.com/games/the-legend-of-zelda-breath-of-the-wild",
    synopsis: "Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure.",
    avg_critic_rating: 9.7,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "03-03-2017",
    platforms: [
      "Nintendo Switch",
      "Wii U"
    ],
    genre: [
      "Puzzle",
      "Adventure",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/zw47_q9wbBE"
  },
  {
    id: 1942,
    name: "The Elder Scrolls V: Skyrim",
    url: "https://www.igdb.com/games/the-elder-scrolls-v-skyrim",
    synopsis: "The Elder Scrolls V: Skyrim is an open world action role-playing video game. The game's main story revolves around the player character's quest to defeat Alduin the World-Eater, a dragon prophesied to destroy the world.",
    avg_critic_rating: 9.4,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tnw.jpg",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    initial_release_date: "11-11-2011",
    platforms: [
      "Windows",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox 360",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/6umhTJQltak"
  },
  {
    id: 1877,
    name: "Cyberpunk 2077",
    url: "https://www.igdb.com/games/cyberpunk-2077",
    synopsis: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.",
    avg_critic_rating: 8.6,
    avg_user_rating: 8.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaih8.jpg",
    developer: "CD Projekt RED",
    publisher: "CD Projekt",
    initial_release_date: "12-10-2020",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Role-playing",
      "Shooter"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/nLhWWoAaZ0Q"
  },
  {
    id: 9498,
    name: "Bloodborne",
    url: "https://www.igdb.com/games/bloodborne",
    synopsis: "Bloodborne is an action RPG from the creators of Dark Souls, set in a dark and gothic city plagued by a mysterious illness. Players must hunt their way through the decrepit streets, uncovering the city's mysteries while battling terrifying creatures.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob99l.jpg",
    developer: "FromSoftware",
    publisher: "Sony Computer Entertainment",
    initial_release_date: "03-24-2015",
    platforms: [
      "PlayStation 4"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/fDELdR97OkU"
  },
  {
    id: 7334,
    name: "Horizon Zero Dawn",
    url: "https://www.igdb.com/games/horizon-zero-dawn",
    synopsis: "Experience Aloy's legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her past, discover her destiny and stop a catastrophic threat to the future.",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2una.jpg",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "02-28-2017",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/wzx96gYA8ek"
  },
  {
    id: 26192,
    name: "The Last of Us Part II",
    url: "https://www.igdb.com/games/the-last-of-us-part-ii",
    synopsis: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other survivors.",
    avg_critic_rating: 9.3,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg",
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "06-19-2020",
    platforms: [
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Shooter",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/eOiUtRF8k28"
  },
  {
    id: 1905,
    name: "Fortnite",
    url: "https://www.igdb.com/games/fortnite",
    synopsis: "Fortnite is a free-to-play Battle Royale game where 100 players fight to be the last one standing. Build structures, find weapons, and outlast your opponents in this ever-evolving multiplayer experience.",
    avg_critic_rating: 8.1,
    avg_user_rating: 7.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaxt6.jpg",
    developer: "Epic Games",
    publisher: "Epic Games",
    initial_release_date: "07-21-2017",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "iOS",
      "Android"
    ],
    genre: [
      "Shooter",
      "Battle Royale"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/NcQnHvvnehY"
  },
  {
    id: 11198,
    name: "Apex Legends",
    url: "https://www.igdb.com/games/apex-legends",
    synopsis: "Apex Legends is a free-to-play hero shooter game where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier.",
    avg_critic_rating: 8.8,
    avg_user_rating: 7.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa93z.jpg",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    initial_release_date: "02-04-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter",
      "Battle Royale"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/innmNewjkuk"
  },
  {
    id: 115,
    name: "League of Legends",
    url: "https://www.igdb.com/games/league-of-legends",
    synopsis: "League of Legends is a multiplayer online battle arena game in which two teams of five players compete to destroy the opposing team's Nexus. Players control champions with unique abilities and must work together strategically to achieve victory.",
    avg_critic_rating: 8.0,
    avg_user_rating: 7.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coabh7.jpg",
    developer: "Riot Games",
    publisher: "Riot Games",
    initial_release_date: "10-27-2009",
    platforms: [
      "Windows",
      "Mac"
    ],
    genre: [
      "MOBA",
      "Strategy"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/ZHhqwBwmRkI"
  },
  {
    id: 8173,
    name: "Valorant",
    url: "https://www.igdb.com/games/valorant",
    synopsis: "Valorant is a 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities. Learn to master your agent's abilities, use your guns, and outplay your opponents.",
    avg_critic_rating: 8.0,
    avg_user_rating: 7.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coau39.jpg",
    developer: "Riot Games",
    publisher: "Riot Games",
    initial_release_date: "06-02-2020",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    genre: [
      "Shooter",
      "Tactical"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/AnGdzz-XWcE"
  },
  {
    id: 126459,
    name: "Overwatch 2",
    url: "https://www.igdb.com/games/overwatch-2",
    synopsis: "Overwatch 2 is a free-to-play team-based action game set in the optimistic future, where every match is the ultimate 5v5 battlefield brawl. Play as a time-jumping freedom fighter, a## Pro-level cyborg ninja, or a super-intelligent scientist.",
    avg_critic_rating: 7.9,
    avg_user_rating: 6.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co885f.jpg",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    initial_release_date: "10-04-2022",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/LGgqyer-qr4"
  },
  {
    id: 1372,
    name: "Counter-Strike 2",
    url: "https://www.igdb.com/games/counter-strike-2",
    synopsis: "Counter-Strike 2 is the largest technical leap forward in Counter-Strike's history, ensuring new features and updates for years to come. A next-generation version of the iconic tactical shooter.",
    avg_critic_rating: 8.3,
    avg_user_rating: 6.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaczd.jpg",
    developer: "Valve",
    publisher: "Valve",
    initial_release_date: "09-27-2023",
    platforms: [
      "Windows"
    ],
    genre: [
      "Shooter",
      "Tactical"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/c80dVYcL69E"
  },
  {
    id: 113,
    name: "Dota 2",
    url: "https://www.igdb.com/games/dota-2",
    synopsis: "Dota 2 is a multiplayer online battle arena video game. Two teams of five players compete to collectively destroy a large structure defended by the opposing team known as the 'Ancient', whilst defending their own.",
    avg_critic_rating: 9.0,
    avg_user_rating: 7.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ene.jpg",
    developer: "Valve",
    publisher: "Valve",
    initial_release_date: "07-09-2013",
    platforms: [
      "Windows",
      "Mac",
      "Linux"
    ],
    genre: [
      "MOBA",
      "Strategy"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/SmnqsdeHFT0"
  },
  {
    id: 2963,
    name: "Destiny 2",
    url: "https://www.igdb.com/games/destiny-2",
    synopsis: "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere. Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat.",
    avg_critic_rating: 8.5,
    avg_user_rating: 7.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa8q3.jpg",
    developer: "Bungie",
    publisher: "Bungie",
    initial_release_date: "09-06-2017",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Shooter",
      "Role-playing"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/hdWkpbPTpmE"
  },
  {
    id: 17000,
    name: "Marvel's Spider-Man",
    url: "https://www.igdb.com/games/marvels-spider-man",
    synopsis: "Experience the story of an experienced Peter Parker and the tangled web of his personal life, facing the biggest threat ever to New York City. Web-swing, wall-run and battle villains in this open-world action adventure.",
    avg_critic_rating: 8.7,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r77.jpg",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "09-07-2018",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Hack and slash",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/bbFh-Hbd81o"
  },
  {
    id: 9727,
    name: "Hollow Knight",
    url: "https://www.igdb.com/games/hollow-knight",
    synopsis: "Hollow Knight is a classically styled 2D action adventure across a vast interconnected world. Explore twisting caverns, ancient cities and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom's heart.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob9sw.jpg",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    initial_release_date: "02-24-2017",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Metroidvania",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/UAO2urG23S4"
  },
  {
    id: 10035,
    name: "Celeste",
    url: "https://www.igdb.com/games/celeste",
    synopsis: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight, hand-crafted platformer from the creators of TowerFall.",
    avg_critic_rating: 9.2,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob9dh.jpg",
    developer: "Extremely OK Games",
    publisher: "Matt Makes Games",
    initial_release_date: "01-25-2018",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Indie"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/70d9irlxiB4"
  },
  {
    id: 112875,
    name: "Stardew Valley",
    url: "https://www.igdb.com/games/stardew-valley",
    synopsis: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa93h.jpg",
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    initial_release_date: "02-26-2016",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "Android"
    ],
    genre: [
      "Simulation",
      "Role-playing"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/xf9e3c-nMRA"
  },
  {
    id: 28540,
    name: "Terraria",
    url: "https://www.igdb.com/games/terraria",
    synopsis: "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. The world is your canvas and the ground itself is your paint. Grab your tools and go!",
    avg_critic_rating: 8.3,
    avg_user_rating: 8.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaamg.jpg",
    developer: "Re-Logic",
    publisher: "Re-Logic",
    initial_release_date: "05-16-2011",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "iOS",
      "Android"
    ],
    genre: [
      "Platformer",
      "Sandbox",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/HHNLfxBxcvo"
  },
  {
    id: 119277,
    name: "Monster Hunter: World",
    url: "https://www.igdb.com/games/monster-hunter-world",
    synopsis: "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand.",
    avg_critic_rating: 9.0,
    avg_user_rating: 8.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rst.jpg",
    developer: "Capcom",
    publisher: "Capcom",
    initial_release_date: "01-26-2018",
    platforms: [
      "Windows",
      "PlayStation 4",
      "Xbox One"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/OotQrKEqe94"
  },
  {
    id: 127044,
    name: "Animal Crossing: New Horizons",
    url: "https://www.igdb.com/games/animal-crossing-new-horizons",
    synopsis: "Escape to a deserted island and create your own paradise as you explore, create, and customize in Animal Crossing: New Horizons. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts.",
    avg_critic_rating: 9.0,
    avg_user_rating: 8.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wls.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "03-20-2020",
    platforms: [
      "Nintendo Switch"
    ],
    genre: [
      "Simulation",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/_3YNL0OWio0"
  },
  {
    id: 19560,
    name: "God of War Ragnarök",
    url: "https://www.igdb.com/games/god-of-war-ragnarok",
    synopsis: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle.",
    avg_critic_rating: 9.4,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coba3d.jpg",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "11-09-2022",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Role-playing",
      "Hack and slash",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/g1wr0DfV73E"
  },
  {
    id: 26758,
    name: "Ghost of Tsushima",
    url: "https://www.igdb.com/games/ghost-of-tsushima",
    synopsis: "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by Khotun Khan.",
    avg_critic_rating: 8.3,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2crj.jpg",
    developer: "Sucker Punch Productions",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "07-17-2020",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Adventure",
      "Action"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/0HTfLqHoTmg"
  },
  {
    id: 114283,
    name: "Resident Evil 4 (2023)",
    url: "https://www.igdb.com/games/resident-evil-4--1",
    synopsis: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.",
    avg_critic_rating: 9.3,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.jpg",
    developer: "Capcom",
    publisher: "Capcom",
    initial_release_date: "03-24-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter",
      "Adventure",
      "Horror"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/j5Xv2lM9wes"
  },
  {
    id: 119133,
    name: "Doom Eternal",
    url: "https://www.igdb.com/games/doom-eternal",
    synopsis: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
    avg_critic_rating: 8.8,
    avg_user_rating: 8.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p5n.jpg",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    initial_release_date: "03-20-2020",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/qgvV4GE8vVA"
  },
  {
    id: 16,
    name: "Doom (2016)",
    url: "https://www.igdb.com/games/doom--2",
    synopsis: "Doom is a 2016 first-person shooter developed by id Software. As the unnamed marine, you arrive on Mars to find the UAC facility overrun by demons. Engage in powerful gunplay with a variety of weapons and glory kill demons for health.",
    avg_critic_rating: 8.5,
    avg_user_rating: 8.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nc7.jpg",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    initial_release_date: "05-13-2016",
    platforms: [
      "Windows",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/s6I9CA6s1gw"
  },
  {
    id: 1887,
    name: "BioShock",
    url: "https://www.igdb.com/games/bioshock",
    synopsis: "BioShock is a first-person shooter where players explore the underwater city of Rapture, a dystopian utopia gone wrong. Use plasmids to modify your body and conventional weapons to survive the city's crazed inhabitants.",
    avg_critic_rating: 9.6,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mli.jpg",
    developer: "2K Boston",
    publisher: "2K Games",
    initial_release_date: "08-21-2007",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 3",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One",
      "Nintendo Switch",
      "iOS"
    ],
    genre: [
      "Shooter",
      "Role-playing"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/CoYorK3E4aM"
  },
  {
    id: 538,
    name: "BioShock Infinite",
    url: "https://www.igdb.com/games/bioshock-infinite",
    synopsis: "Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and hired gun Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood in the flying city of Columbia.",
    avg_critic_rating: 9.4,
    avg_user_rating: 8.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2n12.jpg",
    developer: "Irrational Games",
    publisher: "2K Games",
    initial_release_date: "03-26-2013",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 3",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/T9CcbwO9LFk"
  },
  {
    id: 9630,
    name: "Fallout 4",
    url: "https://www.igdb.com/games/fallout-4",
    synopsis: "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.",
    avg_critic_rating: 8.7,
    avg_user_rating: 8.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc6.jpg",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    initial_release_date: "11-10-2015",
    platforms: [
      "Windows",
      "PlayStation 4",
      "Xbox One"
    ],
    genre: [
      "Shooter",
      "Role-playing"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/WAMBwnpO_SI"
  },
  {
    id: 7605,
    name: "Persona 5 Royal",
    url: "https://www.igdb.com/games/persona-5-royal",
    synopsis: "Prepare for an all-new RPG experience in Persona 5 Royal with a ton of new content! The Phantom Thieves strike again with a semester's worth of new story content, new characters, and more!",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobaqh.jpg",
    developer: "Atlus",
    publisher: "Atlus",
    initial_release_date: "10-31-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Role-playing",
      "Turn-based"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/SKpSpvFCZRw"
  },
  {
    id: 103298,
    name: "Death Stranding",
    url: "https://www.igdb.com/games/death-stranding",
    synopsis: "Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time.",
    avg_critic_rating: 8.2,
    avg_user_rating: 8.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vq8.jpg",
    developer: "Kojima Productions",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "11-08-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Shooter",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/K09zxLiF5q0"
  },
  {
    id: 73,
    name: "Mass Effect 2",
    url: "https://www.igdb.com/games/mass-effect-2",
    synopsis: "Are you prepared to lose everything to save the galaxy? You'll need to be, Commander Shepard. It's time to bring together your greatest allies and recruit the galaxy's fighting elite to continue the resistance against the invading Reapers.",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20ac.jpg",
    developer: "BioWare",
    publisher: "Electronic Arts",
    initial_release_date: "01-26-2010",
    platforms: [
      "Windows",
      "PlayStation 3",
      "Xbox 360"
    ],
    genre: [
      "Role-playing",
      "Shooter"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/PZK9vrBNRys"
  },
  {
    id: 1195,
    name: "Dragon Age: Inquisition",
    url: "https://www.igdb.com/games/dragon-age-inquisition",
    synopsis: "When the sky opens up and rains down chaos, the world needs heroes. Become the savior of Thedas in Dragon Age: Inquisition. You are the Inquisitor, tasked with saving the world from itself.",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvy.jpg",
    developer: "BioWare",
    publisher: "Electronic Arts",
    initial_release_date: "11-18-2014",
    platforms: [
      "Windows",
      "PlayStation 3",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One"
    ],
    genre: [
      "Role-playing"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/xnXlKrBItc0"
  },
  {
    id: 7352,
    name: "Divinity: Original Sin 2",
    url: "https://www.igdb.com/games/divinity-original-sin-2",
    synopsis: "Divinity: Original Sin 2 is a single and multiplayer top-down, party-based role-playing game with pen & paper RPG-like levels of freedom. It features turn-based combat, a strong focus on exploration and experimentation, and lots of player choice.",
    avg_critic_rating: 9.3,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1y5v.jpg",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    initial_release_date: "09-14-2017",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "iOS"
    ],
    genre: [
      "Role-playing",
      "Strategy",
      "Turn-based"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/_OduHbAUw0U"
  },
  {
    id: 11118,
    name: "Disco Elysium",
    url: "https://www.igdb.com/games/disco-elysium",
    synopsis: "Disco Elysium is a groundbreaking open world role playing game. You're a detective with a unique skill system at your disposal and a whole city block to carve your path across. Interrogate unforgettable characters, crack murders, or take bribes.",
    avg_critic_rating: 9.1,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1sfj.jpg",
    developer: "ZA/UM",
    publisher: "ZA/UM",
    initial_release_date: "10-15-2019",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Role-playing"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/nk_K5DM0UTk"
  },
  {
    id: 11156,
    name: "Cuphead",
    url: "https://www.igdb.com/games/cuphead",
    synopsis: "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era.",
    avg_critic_rating: 8.6,
    avg_user_rating: 8.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co62ao.jpg",
    developer: "Studio MDHR",
    publisher: "Studio MDHR",
    initial_release_date: "09-29-2017",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter",
      "Platformer"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/NN-9SQXoi50"
  },
  {
    id: 132181,
    name: "It Takes Two",
    url: "https://www.igdb.com/games/it-takes-two",
    synopsis: "Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free with Friend's Pass and work together across a huge variety of gleefully disruptive gameplay challenges.",
    avg_critic_rating: 8.8,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob22v.jpg",
    developer: "Hazelight Studios",
    publisher: "Electronic Arts",
    initial_release_date: "03-26-2021",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/2AysHTv7X8k"
  },
  {
    id: 19164,
    name: "Outer Wilds",
    url: "https://www.igdb.com/games/outer-wilds",
    synopsis: "Outer Wilds is an open world mystery about a solar system trapped in an endless time loop. Welcome to the Space Program! You're the newest recruit of Outer Wilds Ventures, a fledgling space program searching for answers in a strange, constantly evolving solar system.",
    avg_critic_rating: 8.5,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co65ac.jpg",
    developer: "Mobius Digital",
    publisher: "Annapurna Interactive",
    initial_release_date: "05-28-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Adventure",
      "Puzzle"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/ZKJUMMCJvGM"
  },
  {
    id: 113360,
    name: "Subnautica",
    url: "https://www.igdb.com/games/subnautica",
    synopsis: "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more.",
    avg_critic_rating: 8.4,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa938.jpg",
    developer: "Unknown Worlds Entertainment",
    publisher: "Unknown Worlds Entertainment",
    initial_release_date: "01-23-2018",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Adventure",
      "Survival"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/Rz2SNm8VguE"
  },
  {
    id: 58550,
    name: "Dead Cells",
    url: "https://www.igdb.com/games/dead-cells",
    synopsis: "Dead Cells is a roguelike-metroidvania action-platformer. You'll explore a sprawling, ever-changing castle... assuming you're able to fight your way past its keepers.",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7jfv.jpg",
    developer: "Motion Twin",
    publisher: "Motion Twin",
    initial_release_date: "08-07-2018",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "Android"
    ],
    genre: [
      "Roguelike",
      "Platformer",
      "Metroidvania"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/RvGaSPTcTxc"
  },
  {
    id: 11739,
    name: "Slay the Spire",
    url: "https://www.igdb.com/games/slay-the-spire",
    synopsis: "We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1iyf.jpg",
    developer: "Mega Crit Games",
    publisher: "Mega Crit Games",
    initial_release_date: "01-23-2019",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "Android"
    ],
    genre: [
      "Roguelike",
      "Card Game",
      "Strategy"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/9SZUtyYSOjQ"
  },
  {
    id: 119388,
    name: "Ori and the Will of the Wisps",
    url: "https://www.igdb.com/games/ori-and-the-will-of-the-wisps",
    synopsis: "The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm's way, it will take more than bravery to bring a family back together, heal a broken land, and discover Ori's true destiny.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2e1l.jpg",
    developer: "Moon Studios",
    publisher: "Xbox Game Studios",
    initial_release_date: "03-11-2020",
    platforms: [
      "Windows",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Metroidvania",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/-QFOJ_L6yFM"
  },
  {
    id: 427,
    name: "Final Fantasy X",
    url: "https://www.igdb.com/games/final-fantasy-x",
    synopsis: "The tenth main installment in the Final Fantasy series, FFX follows the journey of Tidus, a star athlete who finds himself in the land of Spira after his city is destroyed by a massive creature known as Sin.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tr1.jpg",
    developer: "Square",
    publisher: "Square",
    initial_release_date: "07-19-2001",
    platforms: [
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation Vita",
      "Windows",
      "Nintendo Switch",
      "Xbox One"
    ],
    genre: [
      "Role-playing",
      "Turn-based"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/riNzVUJumM8"
  },
  {
    id: 2457,
    name: "Kingdom Hearts II",
    url: "https://www.igdb.com/games/kingdom-hearts-ii",
    synopsis: "Kingdom Hearts II is an action RPG that continues the story of Sora, Donald, and Goofy as they search for their friends and battle the mysterious Organization XIII across Disney worlds.",
    avg_critic_rating: 8.7,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co30t1.jpg",
    developer: "Square Enix",
    publisher: "Square Enix",
    initial_release_date: "12-22-2005",
    platforms: [
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4",
      "Xbox One",
      "Windows"
    ],
    genre: [
      "Role-playing",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/zCa8w6mrDJg"
  },
  {
    id: 127,
    name: "Shadow of the Colossus",
    url: "https://www.igdb.com/games/shadow-of-the-colossus",
    synopsis: "A young man named Wander enters an ancient, forbidden land ruled by Dormin, a powerful entity. Wander must seek out and destroy sixteen colossal beings to revive a girl named Mono. The remake brings the beloved adventure to modern consoles.",
    avg_critic_rating: 9.1,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ozz.jpg",
    developer: "Team Ico",
    publisher: "Sony Computer Entertainment",
    initial_release_date: "10-18-2005",
    platforms: [
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4"
    ],
    genre: [
      "Adventure",
      "Puzzle"
    ],
    multiplayer: false,
  },
  {
    id: 732,
    name: "Super Smash Bros. Ultimate",
    url: "https://www.igdb.com/games/super-smash-bros-ultimate",
    synopsis: "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join the battle alongside every Super Smash Bros. fighter in the series!",
    avg_critic_rating: 9.3,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2255.jpg",
    developer: "Bandai Namco Studios",
    publisher: "Nintendo",
    initial_release_date: "12-07-2018",
    platforms: [
      "Nintendo Switch"
    ],
    genre: [
      "Fighting",
      "Platformer"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/EXnbMp1yr1k"
  },
  {
    id: 3072,
    name: "Rocket League",
    url: "https://www.igdb.com/games/rocket-league",
    synopsis: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
    avg_critic_rating: 8.5,
    avg_user_rating: 8.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaiyq.jpg",
    developer: "Psyonix",
    publisher: "Psyonix",
    initial_release_date: "07-07-2015",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Sports",
      "Racing"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/SgSX3gOrj60"
  },
  {
    id: 11133,
    name: "Among Us",
    url: "https://www.igdb.com/games/among-us",
    synopsis: "An online and local party game of teamwork and betrayal for 4-15 players...in space! Play online or over local wifi with your friends as you attempt to prepare your spaceship for departure, but beware as one or more random players are the Impostors!",
    avg_critic_rating: 8.0,
    avg_user_rating: 7.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6kqt.jpg",
    developer: "Innersloth",
    publisher: "Innersloth",
    initial_release_date: "11-16-2018",
    platforms: [
      "Windows",
      "iOS",
      "Android",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Strategy",
      "Party"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/0YKjFoGxbec"
  },
  {
    id: 9631,
    name: "Sea of Thieves",
    url: "https://www.igdb.com/games/sea-of-thieves",
    synopsis: "Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right.",
    avg_critic_rating: 6.9,
    avg_user_rating: 7.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2558.jpg",
    developer: "Rare",
    publisher: "Xbox Game Studios",
    initial_release_date: "03-20-2018",
    platforms: [
      "Windows",
      "Xbox One",
      "Xbox Series X/S",
      "PlayStation 5"
    ],
    genre: [
      "Adventure",
      "Action"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/r5JIBaasuE8"
  },
  {
    id: 107299,
    name: "Fall Guys",
    url: "https://www.igdb.com/games/fall-guys",
    synopsis: "Fall Guys is a free-to-play party game that brings a large number of online players together to compete through escalating rounds of absolute chaos until one winner is crowned!",
    avg_critic_rating: 7.9,
    avg_user_rating: 7.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa7cs.jpg",
    developer: "Mediatonic",
    publisher: "Epic Games",
    initial_release_date: "08-04-2020",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Party"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/AyADwdiW7rQ"
  },
  {
    id: 24426,
    name: "Monster Hunter Rise",
    url: "https://www.igdb.com/games/monster-hunter-rise",
    synopsis: "Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you'll become the newest hunter of Kamura Village.",
    avg_critic_rating: 8.7,
    avg_user_rating: 8.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3uzk.jpg",
    developer: "Capcom",
    publisher: "Capcom",
    initial_release_date: "03-26-2021",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/qFoh7ogDYl8"
  },
  {
    id: 386,
    name: "Super Mario Galaxy",
    url: "https://www.igdb.com/games/super-mario-galaxy",
    synopsis: "Launch into a journey across the universe! Become Mario as he traverses gravity-bending galaxies, traveling in and out of gravitational fields by blasting from planet to planet.",
    avg_critic_rating: 9.7,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co21ro.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "11-01-2007",
    platforms: [
      "Nintendo Wii",
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/6qR7JU33Ao4"
  },
  {
    id: 18225,
    name: "The Legend of Zelda: Ocarina of Time",
    url: "https://www.igdb.com/games/the-legend-of-zelda-ocarina-of-time",
    synopsis: "The Legend of Zelda: Ocarina of Time is an action-adventure game developed by Nintendo. Players control Link in the land of Hyrule as he embarks on a quest to stop Ganondorf from obtaining the Triforce.",
    avg_critic_rating: 9.9,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3nnx.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "11-21-1998",
    platforms: [
      "Nintendo 64",
      "Nintendo GameCube",
      "Nintendo 3DS",
      "Nintendo Switch"
    ],
    genre: [
      "Puzzle",
      "Adventure",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/_NElFLzgdUs"
  },
  {
    id: 19,
    name: "Half-Life",
    url: "https://www.igdb.com/games/half-life",
    synopsis: "Half-Life is a first-person shooter developed by Valve. Players assume the role of Gordon Freeman, a scientist who must escape the Black Mesa Research Facility after an experiment goes wrong, unleashing aliens and military forces.",
    avg_critic_rating: 9.6,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coag8n.jpg",
    developer: "Valve",
    publisher: "Sierra Entertainment",
    initial_release_date: "11-19-1998",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 2"
    ],
    genre: [
      "Shooter"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/5Wavn29LMrs"
  },
  {
    id: 109462,
    name: "World of Warcraft",
    url: "https://www.igdb.com/games/world-of-warcraft",
    synopsis: "World of Warcraft is a massively multiplayer online role-playing game released by Blizzard Entertainment. It is set within the Warcraft fantasy universe and allows players to explore the world of Azeroth.",
    avg_critic_rating: 9.3,
    avg_user_rating: 8.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.jpg",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    initial_release_date: "11-23-2004",
    platforms: [
      "Windows",
      "Mac"
    ],
    genre: [
      "Role-playing",
      "MMORPG"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/vlVSJ0AvZe0"
  },
  {
    id: 113114,
    name: "Final Fantasy XIV",
    url: "https://www.igdb.com/games/final-fantasy-xiv-online",
    synopsis: "Final Fantasy XIV is a massively multiplayer online role-playing game for Windows, PlayStation, and Xbox. Set in the fantasy realm of Hydaelyn, players take on the role of an adventurer exploring the lands of Eorzea.",
    avg_critic_rating: 8.3,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob1vd.jpg",
    developer: "Square Enix",
    publisher: "Square Enix",
    initial_release_date: "08-27-2013",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    genre: [
      "Role-playing",
      "MMORPG"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/h542YbZuwkQ"
  },
  {
    id: 11370,
    name: "Diablo IV",
    url: "https://www.igdb.com/games/diablo-iv",
    synopsis: "Diablo IV is the next-gen action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish dungeons, and legendary loot. Embark on the campaign alone or with friends.",
    avg_critic_rating: 8.7,
    avg_user_rating: 7.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co69sm.jpg",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    initial_release_date: "06-06-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Role-playing",
      "Hack and slash"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/HukrLKMCz1I"
  },
  {
    id: 9882,
    name: "Path of Exile",
    url: "https://www.igdb.com/games/path-of-exile",
    synopsis: "Path of Exile is a free-to-play action RPG set in the dark fantasy world of Wraeclast. You are an Exile, struggling to survive on a cursed continent, while fighting for power and redemption.",
    avg_critic_rating: 8.6,
    avg_user_rating: 8.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1n6w.jpg",
    developer: "Grinding Gear Games",
    publisher: "Grinding Gear Games",
    initial_release_date: "10-23-2013",
    platforms: [
      "Windows",
      "PlayStation 4",
      "Xbox One"
    ],
    genre: [
      "Role-playing",
      "Hack and slash"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/brZT-Qdg8TY"
  },
  {
    id: 29813,
    name: "Control",
    url: "https://www.igdb.com/games/control",
    synopsis: "A corruptive presence has invaded the Federal Bureau of Control. After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.",
    avg_critic_rating: 8.4,
    avg_user_rating: 8.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2evj.jpg",
    developer: "Remedy Entertainment",
    publisher: "505 Games",
    initial_release_date: "08-27-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Shooter",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/_jr8HkUAyJ4"
  },
  {
    id: 118226,
    name: "A Plague Tale: Innocence",
    url: "https://www.igdb.com/games/a-plague-tale-innocence",
    synopsis: "Follow the grim tale of young Amicia and her little brother Hugo, in a heartrending journey through the darkest hours of history. Hunted by Inquisition soldiers and surrounded by unstoppable swarms of rats, Amicia and Hugo will come to know and trust each other.",
    avg_critic_rating: 8.1,
    avg_user_rating: 8.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1lat.jpg",
    developer: "Asobo Studio",
    publisher: "Focus Entertainment",
    initial_release_date: "05-14-2019",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Adventure",
      "Puzzle"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/gjIb9dQgUF0"
  },
  {
    id: 257,
    name: "Uncharted 4: A Thief's End",
    url: "https://www.igdb.com/games/uncharted-4-a-thiefs-end",
    synopsis: "Several years after his last adventure, retired fortune hunter Nathan Drake is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy.",
    avg_critic_rating: 9.3,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.jpg",
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "05-10-2016",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5"
    ],
    genre: [
      "Shooter",
      "Adventure"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/XiZIL-i39yc"
  },
  {
    id: 3025,
    name: "Returnal",
    url: "https://www.igdb.com/games/returnal",
    synopsis: "Returnal is a roguelike third-person shooter in which players control Selene, an ASTRA astronaut who crash-lands on a hostile alien planet called Atropos. Each time she dies, she must begin her journey again from the start.",
    avg_critic_rating: 8.5,
    avg_user_rating: 8.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wc1.jpg",
    developer: "Housemarque",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "04-30-2021",
    platforms: [
      "Windows",
      "PlayStation 5"
    ],
    genre: [
      "Shooter",
      "Roguelike"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/lL2Qa0MQyuE"
  },
  {
    id: 117069,
    name: "Hades II",
    url: "https://www.igdb.com/games/hades-ii",
    synopsis: "Battle beyond the Underworld using dark sorcery to take on the Titan of Time in the sequel to the Best Game of 2020. You are Melinoe, immortal Princess of the Underworld, out to slay Chronos.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaknx.jpg",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    initial_release_date: "05-06-2024",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Role-playing",
      "Roguelike",
      "Hack and slash"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/U8lJRcUeEMs"
  },
  {
    id: 119171,
    name: "Marvel's Spider-Man 2",
    url: "https://www.igdb.com/games/marvels-spider-man-2",
    synopsis: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel's Spider-Man franchise. Swing, jump and utilize the new Web Wings to travel across Marvel's New York.",
    avg_critic_rating: 9.0,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobb2j.jpg",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    initial_release_date: "10-20-2023",
    platforms: [
      "PlayStation 5"
    ],
    genre: [
      "Adventure",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/9fVYKsEmuRo"
  },
  {
    id: 133136,
    name: "Alan Wake 2",
    url: "https://www.igdb.com/games/alan-wake-2",
    synopsis: "Saga Anderson arrives to investigate ritualistic murders in a small town. Alan Wake pens a dark story to shape reality and escape a nightmare. Two heroes face a supernatural threat.",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6jar.jpg",
    developer: "Remedy Entertainment",
    publisher: "Epic Games",
    initial_release_date: "10-27-2023",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    genre: [
      "Shooter",
      "Adventure",
      "Horror"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/dlQ3FeNu5Yw"
  },
  {
    id: 156052,
    name: "Star Wars Jedi: Survivor",
    url: "https://www.igdb.com/games/star-wars-jedi-survivor",
    synopsis: "The story of Cal Kestis continues in Star Wars Jedi: Survivor. Five years after Cal narrowly escaped the Inquisitorius, he continues to fight for the Rebellion and remains one of the last remaining Jedi in the galaxy.",
    avg_critic_rating: 8.5,
    avg_user_rating: 8.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5uzk.jpg",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    initial_release_date: "04-28-2023",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    genre: [
      "Adventure",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/bmj3ty-Wt48"
  },
  {
    id: 133358,
    name: "Hogwarts Legacy",
    url: "https://www.igdb.com/games/hogwarts-legacy",
    synopsis: "Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions.",
    avg_critic_rating: 8.4,
    avg_user_rating: 8.5,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaav6.jpg",
    developer: "Avalanche Software",
    publisher: "Warner Bros. Games",
    initial_release_date: "02-10-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/BtyBjOW8sGY"
  },
  {
    id: 137009,
    name: "Lies of P",
    url: "https://www.igdb.com/games/lies-of-p",
    synopsis: "Lies of P is a souls-like action RPG inspired by the classic tale of Pinocchio. Once upon a time in the city of Krat, a puppet named P awakens and sets off to find Geppetto while discovering the mystery behind his existence.",
    avg_critic_rating: 8.0,
    avg_user_rating: 8.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6lxr.jpg",
    developer: "Round8 Studio",
    publisher: "Neowiz",
    initial_release_date: "09-19-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/kXZoKdr-xeo"
  },
  {
    id: 252637,
    name: "Armored Core VI: Fires of Rubicon",
    url: "https://www.igdb.com/games/armored-core-vi-fires-of-rubicon",
    synopsis: "FromSoftware returns to its flagship mech combat series with a new installment that combines intense combat with customizable mechs in a war-torn sci-fi setting.",
    avg_critic_rating: 8.7,
    avg_user_rating: 8.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coan1v.jpg",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    initial_release_date: "08-25-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S"
    ],
    genre: [
      "Shooter",
      "Mech",
      "Action"
    ],
    multiplayer: true,
    trailer_url: "https://www.youtube.com/embed/kQJb8He0pYA"
  },
  {
    id: 347668,
    name: "Resident Evil Requiem",
    url: "https://www.igdb.com/games/resident-evil-requiem",
    synopsis: "A dual-narrative between veteran agent Leon S. Kennedy and new FBI analyst Grace Ashcroft investigating a fresh bioterror outbreak at a condemned hotel in Raccoon City. Set decades after the original incident, the story revisits the city's dark history, with Grace seeking answers about her mother, reporter Alyssa Ashcroft.",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.7,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobmj0.jpg",
    developer: "Capcom",
    publisher: "Capcom",
    initial_release_date: "02-26-2026",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Survival",
      "Horror",
      "Action"
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/9lrThxCoznw"
  },
  {
    id: 8042,
    name: "Mewgenics",
    url: "https://www.igdb.com/games/mewgenics",
    synopsis: "Adopt, breed and adventure with a crew of cats, featuring music by Ridiculon, from the creator of Super Meat Boy.",
    avg_critic_rating: 9.1,
    avg_user_rating: 7.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9n5k.png",
    developer: "Edmund McMillen and Tyler Glaiel",
    publisher: "Edmund McMillen and Tyler Glaiel",
    initial_release_date: "02-09-2026",
    platforms: [
      "Windows",
    ],
    genre: [
      "Comedy",
      "Turn-based",
      "Role-playing",
      "Adventure",
    ],
    multiplayer: false,
    trailer_url: "https://www.youtube.com/embed/9ruLQ1Hmhjs"
  },
];
