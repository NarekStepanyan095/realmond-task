const BASE_URL = "https://itunes.apple.com";

let currentController: AbortController | null = null;

export type ITunesItem = {
    artistId: number
    artistName: string
    artistViewUrl: string
    artworkUrl30: string
    artworkUrl60: string
    artworkUrl100: string
    collectionExplicitness: "explicit" | "cleaned" | "notExplicit"
    collectionPrice: number
    country: string
    currency: string
    kind: "book"
    | "album"
    | "coached-audio"
    | "feature-movie"
    | "interactive-booklet"
    | "music-video"
    | "pdf"
    | "podcast"
    | "podcast-episode"
    | "software-package"
    | "song"
    | "tv-episode"
    | "artist"
    previewUrl: string
    primaryGenreName: string
    releaseDate: string
    trackCensoredName: string
    trackExplicitness: "explicit" | "cleaned" | "notExplicit"
    trackId: number
    trackName: string
    trackPrice: number
    trackTimeMillis: number
    trackViewUrl: string
    wrapperType: "track" | "collection" | "artist"
}

export function getItems(search: string) {
    if (currentController) {
        currentController.abort();
    }

    currentController = new AbortController();

    const signal = currentController.signal;

    return fetch(`${BASE_URL}/search?term=${encodeURIComponent(search)}`, { signal })
        .then(response => response.json())
        .then(data => data.results as ITunesItem[])
}
