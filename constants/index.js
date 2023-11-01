// An array of objects containing the name and id of each genre from IDGB API
export const genres = [
  { genreId: 2, name: "Point & click" },
  { genreId: 4, name: "Fighting" },
  { genreId: 5, name: "Shooter" },
  { genreId: 7, name: "Music" },
  { genreId: 8, name: "Platform" },
  { genreId: 9, name: "Puzzle" },
  { genreId: 10, name: "Racing" },
  { genreId: 11, name: "RTS" },
  { genreId: 12, name: "RPG" },
  { genreId: 13, name: "Simulator" },
  { genreId: 14, name: "Sport" },
  { genreId: 15, name: "Strategy" },
  { genreId: 16, name: "TBS" },
  { genreId: 24, name: "Tactical" },
  { genreId: 26, name: "Quiz/Trivia" },
  { genreId: 25, name: "Hack'n'slash" },
  { genreId: 30, name: "Pinball" },
  { genreId: 31, name: "Adventure" },
  { genreId: 33, name: "Arcade" },
  { genreId: 34, name: "Visual Novel" },
  { genreId: 32, name: "Indie" },
  { genreId: 35, name: "Board Game" },
  { genreId: 36, name: "MOBA" },
];
// An array of objects containing the name and id of each theme from IDGB API
export const themes = [
  { id: 20, name: "Thriller" },
  { id: 18, name: "Science fiction" },
  { id: 1, name: "Action" },
  { id: 19, name: "Horror" },
  { id: 21, name: "Survival" },
  { id: 17, name: "Fantasy" },
  { id: 22, name: "Historical" },
  { id: 23, name: "Stealth" },
  { id: 27, name: "Comedy" },
  { id: 28, name: "Business" },
  { id: 31, name: "Drama" },
  { id: 32, name: "Non-fiction" },
  { id: 35, name: "Kids" },
  { id: 33, name: "Sandbox" },
  { id: 38, name: "Open world" },
  { id: 39, name: "Warfare" },
  { id: 34, name: "Educational" },
  { id: 43, name: "Mystery" },
  { id: 40, name: "Party" },
  { id: 44, name: "Romance" },
  { id: 42, name: "Erotic" },
];
// For randomizing by letters
export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
];
// Sorting methods
export const igdbSortMethods = [
  "total_rating",
  "first_release_date",
  "rating",
  "aggregated_rating",
];
// Order methods
export const igdbSortOrders = ["asc", "desc"];
// An array of objects representing each game mode
export const gameModes = [
  {
    id: 1,
    created_at: 1298937600,
    name: "Single player",
    slug: "single-player",
    updated_at: 1323216000,
    url: "https://www.igdb.com/game_modes/single-player",
    checksum: "a43b1688-f968-3541-0897-9735ffde1745",
  },
  {
    id: 2,
    created_at: 1298937600,
    name: "Multiplayer",
    slug: "multiplayer",
    updated_at: 1323216000,
    url: "https://www.igdb.com/game_modes/multiplayer",
    checksum: "288b548c-11e4-d910-f037-21d4e6a33b38",
  },
  {
    id: 3,
    created_at: 1298937600,
    name: "Co-op",
    slug: "co-operative",
    updated_at: 1323216000,
    url: "https://www.igdb.com/game_modes/co-operative",
    checksum: "e8329d55-33e6-f7ae-ae09-2848cb7ccc90",
  },
  {
    id: 4,
    created_at: 1298937600,
    name: "Split screen",
    slug: "split-screen",
    updated_at: 1323216000,
    url: "https://www.igdb.com/game_modes/split-screen",
    checksum: "98247b75-6f46-7c77-521f-0945c684d842",
  },
  {
    id: 5,
    created_at: 1298937600,
    name: "MMO",
    slug: "massively-multiplayer-online-mmo",
    updated_at: 1323216000,
    url: "https://www.igdb.com/game_modes/massively-multiplayer-online-mmo",
    checksum: "307d1126-6e3b-9215-06f1-10c8ecce05b4",
  },
  {
    id: 6,
    created_at: 1588809600,
    name: "Battle Royale",
    slug: "battle-royale",
    updated_at: 1588809600,
    url: "https://www.igdb.com/game_modes/battle-royale",
    checksum: "bfc388ac-0502-ba05-af25-3dcc94a0acf3",
  },
];
// An array of objects containing each gaming platform
export const platforms = [
  { id: 3, name: "Linux" },
  { id: 4, name: "Nintendo 64" },
  { id: 5, name: "Wii" },
  { id: 6, name: "PC (Microsoft Windows)" },
  { id: 7, name: "PlayStation" },
  { id: 8, name: "PlayStation 2" },
  { id: 9, name: "PlayStation 3" },
  { id: 11, name: "Xbox" },
  { id: 12, name: "Xbox 360" },
  { id: 13, name: "DOS" },
  { id: 14, name: "Mac" },
  { id: 15, name: "Commodore C64/128/MAX" },
  { id: 16, name: "Amiga" },
  { id: 18, name: "Nintendo Entertainment System" },
  { id: 19, name: "Super Nintendo Entertainment System" },
  { id: 20, name: "Nintendo DS" },
  { id: 21, name: "Nintendo GameCube" },
  { id: 22, name: "Game Boy Color" },
  { id: 23, name: "Dreamcast" },
  { id: 24, name: "Game Boy Advance" },
  { id: 25, name: "Amstrad CPC" },
  { id: 26, name: "ZX Spectrum" },
  { id: 27, name: "MSX" },
  { id: 29, name: "Sega Mega Drive/Genesis" },
  { id: 30, name: "Sega 32X" },
  { id: 32, name: "Sega Saturn" },
  { id: 33, name: "Game Boy" },
  { id: 34, name: "Android" },
  { id: 35, name: "Sega Game Gear" },
  { id: 37, name: "Nintendo 3DS" },
  { id: 38, name: "PlayStation Portable" },
  { id: 39, name: "iOS" },
  { id: 41, name: "Wii U" },
  { id: 42, name: "N-Gage" },
  { id: 44, name: "Tapwave Zodiac" },
  { id: 46, name: "PlayStation Vita" },
  { id: 47, name: "Virtual Console" },
  { id: 48, name: "PlayStation 4" },
  { id: 49, name: "Xbox One" },
  { id: 50, name: "3DO Interactive Multiplayer" },
  { id: 51, name: "Family Computer Disk System" },
  { id: 52, name: "Arcade" },
  { id: 53, name: "MSX2" },
  { id: 55, name: "Legacy Mobile Device" },
  { id: 57, name: "WonderSwan" },
  { id: 58, name: "Super Famicom" },
  { id: 59, name: "Atari 2600" },
  { id: 60, name: "Atari 7800" },
  { id: 61, name: "Atari Lynx" },
  { id: 62, name: "Atari Jaguar" },
  { id: 63, name: "Atari ST/STE" },
  { id: 64, name: "Sega Master System/Mark III" },
  { id: 65, name: "Atari 8-bit" },
  { id: 66, name: "Atari 5200" },
  { id: 67, name: "Intellivision" },
  { id: 68, name: "ColecoVision" },
  { id: 69, name: "BBC Microcomputer System" },
  { id: 70, name: "Vectrex" },
  { id: 71, name: "Commodore VIC-20" },
  { id: 72, name: "Ouya" },
  { id: 73, name: "BlackBerry OS" },
  { id: 74, name: "Windows Phone" },
  { id: 75, name: "Apple II" },
  { id: 77, name: "Sharp X1" },
  { id: 78, name: "Sega CD" },
  { id: 79, name: "Neo Geo MVS" },
  { id: 80, name: "Neo Geo AES" },
  { id: 82, name: "Web browser" },
  { id: 84, name: "SG-1000" },
  { id: 85, name: "Donner Model 30" },
  { id: 86, name: "TurboGrafx-16/PC Engine" },
  { id: 87, name: "Virtual Boy" },
  { id: 88, name: "Odyssey" },
  { id: 89, name: "Microvision" },
  { id: 90, name: "Commodore PET" },
  { id: 91, name: "Bally Astrocade" },
  { id: 93, name: "Commodore 16" },
  { id: 94, name: "Commodore Plus/4" },
  { id: 95, name: "PDP-1" },
  { id: 96, name: "PDP-10" },
  { id: 97, name: "PDP-8" },
  { id: 98, name: "DEC GT40" },
  { id: 99, name: "Family Computer" },
  { id: 100, name: "Analogue electronics" },
  { id: 101, name: "Ferranti Nimrod Computer" },
  { id: 102, name: "EDSAC" },
  { id: 103, name: "PDP-7" },
  { id: 104, name: "HP 2100" },
  { id: 105, name: "HP 3000" },
  { id: 106, name: "SDS Sigma 7" },
  {
    id: 107,
    name: "Call-A-Computer time-shared mainframe computer system",
  },
  { id: 108, name: "PDP-11" },
  { id: 109, name: "CDC Cyber 70" },
  { id: 110, name: "PLATO" },
  { id: 111, name: "Imlac PDS-1" },
  { id: 112, name: "Microcomputer" },
  { id: 113, name: "OnLive Game System" },
  { id: 114, name: "Amiga CD32" },
  { id: 115, name: "Apple IIGS" },
  { id: 116, name: "Acorn Archimedes" },
  { id: 117, name: "Philips CD-i" },
  { id: 118, name: "FM Towns" },
  { id: 119, name: "Neo Geo Pocket" },
  { id: 120, name: "Neo Geo Pocket Color" },
  { id: 121, name: "Sharp X68000" },
  { id: 122, name: "Nuon" },
  { id: 123, name: "WonderSwan Color" },
  { id: 124, name: "SwanCrystal" },
  { id: 125, name: "PC-8800 Series" },
  { id: 126, name: "TRS-80" },
  { id: 127, name: "Fairchild Channel F" },
  { id: 128, name: "PC Engine SuperGrafx" },
  { id: 129, name: "Texas Instruments TI-99" },
  { id: 130, name: "Nintendo Switch" },
  { id: 131, name: "Nintendo PlayStation" },
  { id: 132, name: "Amazon Fire TV" },
  { id: 133, name: "Odyssey 2 / Videopac G7000" },
  { id: 134, name: "Acorn Electron" },
  { id: 135, name: "Hyper Neo Geo 64" },
  { id: 136, name: "Neo Geo CD" },
  { id: 137, name: "New Nintendo 3DS" },
  { id: 138, name: "VC 4000" },
  { id: 139, name: "1292 Advanced Programmable Video System" },
  { id: 140, name: "AY-3-8500" },
  { id: 141, name: "AY-3-8610" },
  { id: 142, name: "PC-50X Family" },
  { id: 143, name: "AY-3-8760" },
  { id: 144, name: "AY-3-8710" },
  { id: 145, name: "AY-3-8603" },
  { id: 146, name: "AY-3-8605" },
  { id: 147, name: "AY-3-8606" },
  { id: 148, name: "AY-3-8607" },
  { id: 149, name: "PC-9800 Series" },
  { id: 150, name: "Turbografx-16/PC Engine CD" },
  { id: 151, name: "TRS-80 Color Computer" },
  { id: 152, name: "FM-7" },
  { id: 153, name: "Dragon 32/64" },
  { id: 154, name: "Amstrad PCW" },
  { id: 155, name: "Tatung Einstein" },
  { id: 156, name: "Thomson MO5" },
  { id: 157, name: "NEC PC-6000 Series" },
  { id: 158, name: "Commodore CDTV" },
  { id: 159, name: "Nintendo DSi" },
  { id: 161, name: "Windows Mixed Reality" },
  { id: 162, name: "Oculus VR" },
  { id: 163, name: "SteamVR" },
  { id: 164, name: "Daydream" },
  { id: 165, name: "PlayStation VR" },
  { id: 166, name: "Pokémon mini" },
  { id: 167, name: "PlayStation 5" },
  { id: 169, name: "Xbox Series X|S" },
  { id: 170, name: "Google Stadia" },
  { id: 203, name: "DUPLICATE Stadia" },
  { id: 236, name: "Exidy Sorcerer" },
  { id: 237, name: "Sol-20" },
  { id: 238, name: "DVD Player" },
  { id: 239, name: "Blu-ray Player" },
  { id: 240, name: "Zeebo" },
  { id: 274, name: "PC-FX" },
  { id: 306, name: "Satellaview" },
  { id: 307, name: "Game & Watch" },
  { id: 308, name: "Playdia" },
  { id: 309, name: "Evercade" },
  { id: 339, name: "Sega Pico" },
  { id: 372, name: "OOParts" },
  { id: 373, name: "Sinclair ZX81" },
  { id: 374, name: "Sharp MZ-2200" },
  { id: 375, name: "Epoch Cassette Vision" },
  { id: 376, name: "Epoch Super Cassette Vision" },
  { id: 377, name: "Plug & Play" },
  { id: 378, name: "Gamate" },
  { id: 379, name: "Game.com" },
  { id: 380, name: "Casio Loopy" },
  { id: 381, name: "Playdate" },
  { id: 382, name: "Intellivision Amico" },
  { id: 384, name: "Oculus Quest" },
  { id: 385, name: "Oculus Rift" },
  { id: 386, name: "Meta Quest 2" },
  { id: 387, name: "Oculus Go" },
  { id: 388, name: "Gear VR" },
  { id: 389, name: "AirConsole" },
  { id: 390, name: "PlayStation VR2" },
  { id: 405, name: "Windows Mobile" },
  { id: 406, name: "Sinclair QL" },
  { id: 407, name: "HyperScan" },
  { id: 408, name: "Mega Duck/Cougar Boy" },
  { id: 409, name: "Legacy Computer" },
  { id: 410, name: "Atari Jaguar CD" },
  { id: 411, name: "Handheld Electronic LCD" },
  { id: 412, name: "Leapster" },
  { id: 413, name: "Leapster Explorer/LeadPad Explorer" },
  { id: 414, name: "LeapTV" },
  { id: 415, name: "Watara/QuickShot Supervision" },
  { id: 416, name: "Nintendo 64DD" },
  { id: 417, name: "Palm OS" },
  { id: 438, name: "Arduboy" },
  { id: 439, name: "V.Smile" },
  { id: 440, name: "Visual Memory Unit / Visual Memory System" },
  { id: 441, name: "PocketStation" },
  { id: 471, name: "Meta Quest 3" },
];
// An array of objects for each decade
export const years = [
  {
    name: "1970s",
    years: "0-315532799",
  },
  {
    name: "1980s",
    years: "315532800-631152999",
  },
  {
    name: "1990s",
    years: "631153000-946684799",
  },
  {
    name: "2000s",
    years: "946684800-1262303999",
  },
  {
    name: "2010s",
    years: "1262304000-1577836799",
  },
  {
    name: "2020s",
    years: "1577836800-1893455999",
  },
];
// An array of objects for ratings
export const ratings = [
  {
    name: "1.0+",
    rating: 10,
  },
  {
    name: "2.0+",
    rating: 20,
  },
  {
    name: "3.0+",
    rating: 30,
  },
  {
    name: "4.0+",
    rating: 40,
  },
  {
    name: "5.0+",
    rating: 50,
  },
  {
    name: "6.0+",
    rating: 60,
  },
  {
    name: "7.0+",
    rating: 70,
  },
  {
    name: "8.0+",
    rating: 80,
  },
  {
    name: "9.0+",
    rating: 90,
  },
];
// An array of objects merging all sub-platforms into main ones
export const filterPlatforms = [
  {
    name: "Playstation",
    hardware: "7, 8, 9, 38, 46, 48, 165, 167, 390",
  },
  {
    name: "Xbox",
    hardware: "11, 12, 49, 169",
  },
  {
    name: "Nintendo",
    hardware:
      "4, 5, 18, 19, 20, 21, 22, 23, 33, 37, 41, 87, 130, 137, 159, 166, 307, 416",
  },
  {
    name: "PC",
    hardware: "3, 6, 14, 82",
  },
  {
    name: "Sega",
    hardware: "29, 30, 32, 35, 64, 78, 339",
  },
  {
    name: "Mobile",
    hardware: "39, 34, 73, 74",
  },
  {
    name: "Atari",
    hardware: "59, 60, 61, 62, 63, 65, 66, 410",
  },
  {
    name: "Commodore",
    hardware: "15, 71, 90, 93, 94, 158",
  },
];
// An array of objects containg each of the main platforms
export const featuredPlatforms = [
  {
    icon: "/playstation-icon.png",
    gradStart: "#0043BB",
    gradEnd: "#00266A",
    href: "/search?platforms=7%2C+8%2C+9%2C+38%2C+46%2C+48%2C+165%2C+167%2C+390&title=Playstation&sort=aggregated_rating",
  },
  {
    icon: "/xbox-icon.png",
    gradStart: "#107C0F",
    gradEnd: "#0D710C",
    href: "/search?platforms=11%2C+12%2C+49%2C+169&title=Xbox&sort=aggregated_rating",
  },
  {
    icon: "/nintendo-icon.png",
    gradStart: "#FA0012",
    gradEnd: "#CD000F",
    href: "/search?platforms=4%2C+5%2C+18%2C+19%2C+20%2C+21%2C+22%2C+23%2C+33%2C+37%2C+41%2C+87%2C+130%2C+137%2C+159%2C+166%2C+307%2C+416&title=Nintendo&sort=aggregated_rating",
  },
  {
    icon: "/windows-icon.png",
    gradStart: "#093661",
    gradEnd: "#061D34",
    href: "/search?platforms=3%2C+6%2C+14%2C+82&title=PC&sort=aggregated_rating",
  },
];
