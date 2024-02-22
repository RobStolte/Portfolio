
import type { steamGame } from "@/scripts/interfaces";
const STEAM_USER_ID = import.meta.env.STEAM_USER_ID;
const STEAM_API_KEY = import.meta.env.STEAM_API_KEY;

/**
 * Retrieves playtime data from the Steam API.
 *
 * @param {string} request - The type of data to request. Possible values are "playTime".
 * @return {Promise<Array<{name: string, playtime_2weeks: number, playtime_forever: number, img_icon_url: string}>>} - A promise that resolves to an array of objects containing game
 * playtime data.
 */
export async function steamAPIGetPlaytimes(request: string) {
    const requestType = request === "playTime" ? 'IPlayerService/GetRecentlyPlayedGames/v0001' : '';
    const fetchurl = `https://api.steampowered.com/${requestType}/?key=${STEAM_API_KEY}&steamid=${STEAM_USER_ID}&format=json`
    try {
        const response = await fetch(fetchurl);
        const data = await response.json();
        return data.response.games.map((game: steamGame) => ({
            name: game.name,
            playtime_2weeks: game.playtime_2weeks,
            playtime_forever: game.playtime_forever,
            img_icon_url: `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
        }));
    } catch (error) {
        return [];
    }
}