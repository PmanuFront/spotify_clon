import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params, request }) {
    // get id from url search params
    const { url } = request;
    const urlObjetc = new URL(url);
    const id = urlObjetc.searchParams.get('id');

    //otra forma
    // const [, queryString] = url.split("?");
    // const query = new URLSearchParams(queryString);
    // query.get('id);

    const playlist = allPlaylists.find((playlist) => playlist.id == id);
    const songs = allSongs.filter((song) => song.albumId == playlist?.albumId);

    return new Response(JSON.stringify({playlist, songs}))
}