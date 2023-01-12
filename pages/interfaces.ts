export interface Data {
    kind: string;
    etag: string;
    nextPageToken: string;
    prevPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Item {
    kind: string;
    etag: string;
    id: ID;
    snippet: Snippet;
}

export interface ID {
    kind: string;
    videoId: string;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}