import type {steamGame} from "@/scripts/interfaces.ts";




class SteamAPI {
    private STEAM_USER_ID: string | undefined;
    private STEAM_API_KEY: string | undefined;


    constructor() {
        this.STEAM_USER_ID = import.meta.env.STEAM_USER_ID;
        this.STEAM_API_KEY = import.meta.env.STEAM_API_KEY;
    }


    public async getPlaytimes(request: string) {
        const requestType = request === "playTime" ? 'IPlayerService/GetRecentlyPlayedGames/v0001' : '';
        const fetchurl = `https://api.steampowered.com/${requestType}/?key=${this.STEAM_API_KEY}&steamid=${this.STEAM_USER_ID}&format=json`

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
}




export {SteamAPI};