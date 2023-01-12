import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import { Fragment, useEffect, useState } from "react";
import SearchBar from "../search/searchbar";
import MessageTiles from "../tiles/messageTiles";
import UploadMessageModal from "./uploadMessageModal";
import { dehydrate, DehydratedState, QueryClient, useQuery, } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";



interface Modal {
    isOpen: boolean,
    closeModal: () => void,
    data:Data
  

  
}

// interface snippet {

// }

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




const specData = {
    "kind": "youtube#searchListResponse",
    "etag": "QbSN_9VpULHeVzuUYGd0dcStO2w",
    "nextPageToken": "CJYBEAA",
    "prevPageToken": "CGQQAQ",
    "regionCode": "GH",
    "pageInfo": {
        "totalResults": 325,
        "resultsPerPage": 50
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "2PokmHcjdd5JoOvcpTcd1W4Kw2g",
            "id": {
                "kind": "youtube#video",
                "videoId": "TzibvFwhlFY"
            },
            "snippet": {
                "publishedAt": "2021-09-23T19:00:08Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GOD WANTS YOU TO PROSPER PART 2B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TzibvFwhlFY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TzibvFwhlFY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TzibvFwhlFY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-23T19:00:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "A2YGAijNJDOZR_8IKcBssA5lK0A",
            "id": {
                "kind": "youtube#video",
                "videoId": "LEjFzTaMPXU"
            },
            "snippet": {
                "publishedAt": "2021-09-20T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GOD WANTS YOU TO PROSPER PART 2A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LEjFzTaMPXU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-20T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PJyMhzOqJQPAjZYI5B5XF36GSOg",
            "id": {
                "kind": "youtube#video",
                "videoId": "E4VtuRJ75E0"
            },
            "snippet": {
                "publishedAt": "2021-09-16T19:00:10Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GOD WANTS YOU TO PROSPER PART 1B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/E4VtuRJ75E0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-16T19:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ch6hnfgrLEtZ1vJLUclyK0G8LOg",
            "id": {
                "kind": "youtube#video",
                "videoId": "fphWzkJGX6Y"
            },
            "snippet": {
                "publishedAt": "2021-09-13T19:00:11Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GOD WANTS YOU TO PROSPER PART 1A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fphWzkJGX6Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-13T19:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uyeBucyybM72QCJ5t66JVBRfxa4",
            "id": {
                "kind": "youtube#video",
                "videoId": "bNqGLSo8Q1Q"
            },
            "snippet": {
                "publishedAt": "2021-08-05T19:00:09Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "YOU HAVE FAITH B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bNqGLSo8Q1Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-05T19:00:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dGK-x7CLPgYiYCSkcnU8mjGlKMA",
            "id": {
                "kind": "youtube#video",
                "videoId": "oiVDNCvXnbs"
            },
            "snippet": {
                "publishedAt": "2021-08-02T09:32:53Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "The Blessings - Pastor Oti - Annual Seed Sowing 2021",
                "description": "' ... Believe in the Lord your God, so shall ye be established; believe his prophets, so shall ye prosper.' - 2 Chronicles 20:20 KJV ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/oiVDNCvXnbs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-02T09:32:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "H9cxrUX2MTFdzjANQwz6mXVix_g",
            "id": {
                "kind": "youtube#video",
                "videoId": "oArnTcVxkMQ"
            },
            "snippet": {
                "publishedAt": "2021-07-30T19:00:11Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "SEED SOWING CONFERENCE (TALK SHOW)",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/oArnTcVxkMQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-30T19:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Gb1lJPklhy40CTKRu7Q2EHdQZf4",
            "id": {
                "kind": "youtube#video",
                "videoId": "Jgoj_X56UQA"
            },
            "snippet": {
                "publishedAt": "2021-07-13T19:00:10Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "YOU HAVE FAITH A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Jgoj_X56UQA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-13T19:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qCHjjzuGHGY-Zc3WghJiyyozvjA",
            "id": {
                "kind": "youtube#video",
                "videoId": "2gqW-TlQHMQ"
            },
            "snippet": {
                "publishedAt": "2021-07-08T19:00:03Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GROWING IN LOVE B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2gqW-TlQHMQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-08T19:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JGbILVi5_XQybVNbiUUGme4nzmE",
            "id": {
                "kind": "youtube#video",
                "videoId": "Q-ApiPRRhac"
            },
            "snippet": {
                "publishedAt": "2021-07-05T19:00:15Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GROWING IN LOVE A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Q-ApiPRRhac/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-05T19:00:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "g7-FuvTC80VN1UuMhfZv5AaXDTE",
            "id": {
                "kind": "youtube#video",
                "videoId": "PfBpMF3B41k"
            },
            "snippet": {
                "publishedAt": "2021-07-01T19:00:07Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "THE GRACE OF GOD BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PfBpMF3B41k/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/PfBpMF3B41k/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/PfBpMF3B41k/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-01T19:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "WIVf1R3nkQSRFSL8r4oU-b5fZkc",
            "id": {
                "kind": "youtube#video",
                "videoId": "1FTZMB6tTqU"
            },
            "snippet": {
                "publishedAt": "2021-06-28T19:00:00Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "CHOOSING YOUR LIFE PARTNER PART 2B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1FTZMB6tTqU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-28T19:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "q3sAX8K9oEeGMxqL2vTJG6Fhu3g",
            "id": {
                "kind": "youtube#video",
                "videoId": "JjB6kXsPwCc"
            },
            "snippet": {
                "publishedAt": "2021-06-24T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "CHOOSING YOUR LIFE PARTNER PART 2A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JjB6kXsPwCc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JjB6kXsPwCc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JjB6kXsPwCc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-24T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "rZlSstmi-2zz3bdw-NzwG7Im8-c",
            "id": {
                "kind": "youtube#video",
                "videoId": "5ROpenhnx9M"
            },
            "snippet": {
                "publishedAt": "2021-06-21T19:00:01Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "CHOOSING YOUR LIFE PARTNER PART 1",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5ROpenhnx9M/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5ROpenhnx9M/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5ROpenhnx9M/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-21T19:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6iuJ5InbHv5WOIDYB39b3s-d-P0",
            "id": {
                "kind": "youtube#video",
                "videoId": "aDVLbItHIdI"
            },
            "snippet": {
                "publishedAt": "2021-06-17T19:00:00Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "BEING SPIRITUALLY MINDED B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aDVLbItHIdI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aDVLbItHIdI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aDVLbItHIdI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-17T19:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "iAx85nutWQTkj7-pMw3n-1AmMbo",
            "id": {
                "kind": "youtube#video",
                "videoId": "8UjkRgRdWx0"
            },
            "snippet": {
                "publishedAt": "2021-06-14T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "BEING SPIRITUALLY MINDED A PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8UjkRgRdWx0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8UjkRgRdWx0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8UjkRgRdWx0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-14T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_miw_85BLxLUR8FiJrMscRKs53Y",
            "id": {
                "kind": "youtube#video",
                "videoId": "A-4lQV3jLE8"
            },
            "snippet": {
                "publishedAt": "2021-06-10T19:00:07Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "HOW THE WORD WORKS B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/A-4lQV3jLE8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/A-4lQV3jLE8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/A-4lQV3jLE8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-10T19:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Xo3QxzaoYlV6dVWNjSm-KUf_42E",
            "id": {
                "kind": "youtube#video",
                "videoId": "5kPrNHbObkk"
            },
            "snippet": {
                "publishedAt": "2021-06-07T19:00:01Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "HOW THE WORD WORKS A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5kPrNHbObkk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5kPrNHbObkk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5kPrNHbObkk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-07T19:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "h8-n8ygsGM-JtqadJ6UUTSGUnPg",
            "id": {
                "kind": "youtube#video",
                "videoId": "UrrQfpKpXlM"
            },
            "snippet": {
                "publishedAt": "2021-06-03T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "7 GREAT THINGS THE RESURRECTION GIVES US B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/UrrQfpKpXlM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/UrrQfpKpXlM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/UrrQfpKpXlM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-03T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dJXI6_I9b8ucZ8GQwbcp85kY3vQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "QFCxspkY-Eg"
            },
            "snippet": {
                "publishedAt": "2021-06-01T19:00:06Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "7 GREAT THINGS THE RESURRECTION GIVES US A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/QFCxspkY-Eg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/QFCxspkY-Eg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/QFCxspkY-Eg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-01T19:00:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "LHad265rE10kMYU7KMIwc9aUyBs",
            "id": {
                "kind": "youtube#video",
                "videoId": "LIGz2_ptPJw"
            },
            "snippet": {
                "publishedAt": "2021-05-27T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "CHRIST SUFFERED FOR US LEAVING US AN EXAMPLE BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LIGz2_ptPJw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LIGz2_ptPJw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LIGz2_ptPJw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-27T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PaKLSuqccUilYxY7Xw4R4FErgB4",
            "id": {
                "kind": "youtube#video",
                "videoId": "HU5lvZc3Gfw"
            },
            "snippet": {
                "publishedAt": "2021-05-24T19:00:07Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "OUR UNION WITH CHRIST IN HIS DEATH BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HU5lvZc3Gfw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HU5lvZc3Gfw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HU5lvZc3Gfw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-24T19:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3ARF08iHU5hDlTN9f60DX74zNzM",
            "id": {
                "kind": "youtube#video",
                "videoId": "r1hZBSzSBzs"
            },
            "snippet": {
                "publishedAt": "2021-05-20T19:00:22Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "REVELATION: THE KEY TO SUPERNATURAL ACCOMPLISHMENT THROUGH THE WORD B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/r1hZBSzSBzs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/r1hZBSzSBzs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/r1hZBSzSBzs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-20T19:00:22Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "AQg096jVZp9oXKZPAgOBVymSwvY",
            "id": {
                "kind": "youtube#video",
                "videoId": "R8507FQN9w0"
            },
            "snippet": {
                "publishedAt": "2021-05-17T19:00:12Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "REVELATION: THE KEY TO SUPERNATURAL ACCOMPLISHMENT THROUGH THE WORD A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/R8507FQN9w0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/R8507FQN9w0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/R8507FQN9w0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-17T19:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uBIZ32MFWPPeweTuY17DsMt3NH0",
            "id": {
                "kind": "youtube#video",
                "videoId": "-za7sKLbwVs"
            },
            "snippet": {
                "publishedAt": "2021-05-13T19:00:00Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GROW IN GRACE B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-za7sKLbwVs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-za7sKLbwVs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-za7sKLbwVs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-13T19:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-0_E2wQPZZ0Xch5PhvFm92suloI",
            "id": {
                "kind": "youtube#video",
                "videoId": "1rBNBjmOV7A"
            },
            "snippet": {
                "publishedAt": "2021-05-10T19:00:01Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GROW IN GRACE A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1rBNBjmOV7A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1rBNBjmOV7A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1rBNBjmOV7A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-10T19:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "f3Ls-KJfcejxK8EhAdwZdDZ-_nQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "BGjnowwgtDA"
            },
            "snippet": {
                "publishedAt": "2021-05-06T19:00:03Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "THE AUTHENTICITY OF THE WORD B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/BGjnowwgtDA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/BGjnowwgtDA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/BGjnowwgtDA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-06T19:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "m6TiE6vw0Ar461WFe54iZqGsReI",
            "id": {
                "kind": "youtube#video",
                "videoId": "yhgbc1q4uZ8"
            },
            "snippet": {
                "publishedAt": "2021-05-03T19:00:15Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "THE AUTHENTICITY OF THE WORD A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/yhgbc1q4uZ8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/yhgbc1q4uZ8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/yhgbc1q4uZ8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-03T19:00:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "VJ89HviS5ejQmgAPjy5CShmqgE4",
            "id": {
                "kind": "youtube#video",
                "videoId": "9oYH8HJmYco"
            },
            "snippet": {
                "publishedAt": "2021-04-20T19:00:08Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "TWO NIGHTS OF GLORY (ESTABLISHMENT) PART 2B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9oYH8HJmYco/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9oYH8HJmYco/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9oYH8HJmYco/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-20T19:00:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6i9oKs-sQZU550-67pTlpA61ZpY",
            "id": {
                "kind": "youtube#video",
                "videoId": "Druw1QLZXnI"
            },
            "snippet": {
                "publishedAt": "2021-04-19T19:00:03Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "TWO NIGHTS OF GLORY (ESTABLISHMENT) PART 2A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Druw1QLZXnI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Druw1QLZXnI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Druw1QLZXnI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-19T19:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-WS6MFe-93zShjSPLLuscdAgOns",
            "id": {
                "kind": "youtube#video",
                "videoId": "_yN85gwbV3Y"
            },
            "snippet": {
                "publishedAt": "2021-04-15T19:00:09Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "I WILL BUILD MY CHURCH PART 4 BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_yN85gwbV3Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_yN85gwbV3Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_yN85gwbV3Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-15T19:00:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "usFGpv_feeHEn0G7ODphSGR8XwI",
            "id": {
                "kind": "youtube#video",
                "videoId": "dCGMmO9ZQUw"
            },
            "snippet": {
                "publishedAt": "2021-04-12T19:00:06Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "I WILL BUILD MY CHURCH PART 3 BY PASTOR OTI",
                "description": "Get to know how Christ is building His church. Be blessed If you just got born again or would want us to pray with you about ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/dCGMmO9ZQUw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/dCGMmO9ZQUw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/dCGMmO9ZQUw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-12T19:00:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "vBAdb8oBRhZ8FjJhQObWFIuEySM",
            "id": {
                "kind": "youtube#video",
                "videoId": "pfkNxJfaOQ4"
            },
            "snippet": {
                "publishedAt": "2021-04-08T19:00:21Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "TWO NIGHTS OF GLORY (ESTABLISHMENT)PART 1B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/pfkNxJfaOQ4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/pfkNxJfaOQ4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/pfkNxJfaOQ4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-08T19:00:21Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "fXooB6GuUUI8qu6rXkra8RzgFbU",
            "id": {
                "kind": "youtube#video",
                "videoId": "y5ysXRJSjH4"
            },
            "snippet": {
                "publishedAt": "2021-04-05T19:00:28Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "TWO NIGHTS OF GLORY (ESTABLISHMENT) PART 1A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/y5ysXRJSjH4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/y5ysXRJSjH4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/y5ysXRJSjH4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-05T19:00:28Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cJ09LK3eMI4yP2zgG8VDx8vHUIQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "96ap-zk_62E"
            },
            "snippet": {
                "publishedAt": "2021-04-01T19:00:02Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "SUPERNATURAL ACCOMPLISHMENTS THROUGH OUR UNION WITH CHRIST BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/96ap-zk_62E/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/96ap-zk_62E/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/96ap-zk_62E/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-01T19:00:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "IgWNJ9ll2gg8_Lnn8h7DNpH7Z5o",
            "id": {
                "kind": "youtube#video",
                "videoId": "CfXeydu_Hlo"
            },
            "snippet": {
                "publishedAt": "2021-03-29T19:00:01Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "I WILL BUILD MY CHURCH PART 2 BY PASTOR OTI",
                "description": "Get to know how Christ is building His church. Be blessed If you just got born again or would want us to pray with you about ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CfXeydu_Hlo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CfXeydu_Hlo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CfXeydu_Hlo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-29T19:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dPyghX5Jc2OilHz_grpVG_e3S3U",
            "id": {
                "kind": "youtube#video",
                "videoId": "H_Gfvz6I-pQ"
            },
            "snippet": {
                "publishedAt": "2021-03-25T19:00:02Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "GOD&#39;S LOVE PLAN BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H_Gfvz6I-pQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H_Gfvz6I-pQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H_Gfvz6I-pQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-25T19:00:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5gcKAlPRcroI4e9QEjr-1-OU43A",
            "id": {
                "kind": "youtube#video",
                "videoId": "FapoR2XqmNU"
            },
            "snippet": {
                "publishedAt": "2021-03-23T19:00:07Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "OUR UNION WITH CHRIST THROUGH HIS RESURRECTION B BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FapoR2XqmNU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FapoR2XqmNU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FapoR2XqmNU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-23T19:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1UwxHOGi-1Stg3JwgZSTn7HjW2c",
            "id": {
                "kind": "youtube#video",
                "videoId": "LLbDuqMttOM"
            },
            "snippet": {
                "publishedAt": "2021-03-22T19:00:30Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "OUR UNION WITH CHRIST THROUGH HIS RESURRECTION A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LLbDuqMttOM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LLbDuqMttOM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LLbDuqMttOM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-22T19:00:30Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "UCpZl6zYoUKnnF18rCvKU6rKodQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "aTieJkeghNo"
            },
            "snippet": {
                "publishedAt": "2021-03-19T18:30:01Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "I WILL BUILD MY CHURCH PART 1 BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aTieJkeghNo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aTieJkeghNo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aTieJkeghNo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-19T18:30:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JpVZFstusgdEsTOr8BOUmKMFNxI",
            "id": {
                "kind": "youtube#video",
                "videoId": "xSam82J_Beg"
            },
            "snippet": {
                "publishedAt": "2021-03-15T19:00:20Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "ANOINTED AND APPOINTED FOR ACTION BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/xSam82J_Beg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xSam82J_Beg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/xSam82J_Beg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-15T19:00:20Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "vDM1NfxmyYxMZLEvH5xkI4IiraM",
            "id": {
                "kind": "youtube#video",
                "videoId": "nmvBtwFqzFU"
            },
            "snippet": {
                "publishedAt": "2021-03-08T19:00:11Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "THE VICTOR&#39;S REWARD BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nmvBtwFqzFU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nmvBtwFqzFU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nmvBtwFqzFU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-08T19:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "IeSdcayoJpkOcGEskC_50ElaYFM",
            "id": {
                "kind": "youtube#video",
                "videoId": "d4hl8SR1RmE"
            },
            "snippet": {
                "publishedAt": "2021-03-05T19:00:08Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "HOW TO ENJOY CONTINUOUS SUCCESS IN THE YEAR B",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/d4hl8SR1RmE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/d4hl8SR1RmE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/d4hl8SR1RmE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-05T19:00:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SDg_DASxqssSnAyPv2DvWMHEj7M",
            "id": {
                "kind": "youtube#video",
                "videoId": "PAVA_f2vlF4"
            },
            "snippet": {
                "publishedAt": "2021-03-04T19:00:12Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "HOW TO ENJOY CONTINUOUS SUCCESS IN THE YEAR A BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PAVA_f2vlF4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/PAVA_f2vlF4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/PAVA_f2vlF4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-04T19:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "GnQbS2KKgmgcAYJHAAZOQbMCtVo",
            "id": {
                "kind": "youtube#video",
                "videoId": "DJ-xGdsVtFg"
            },
            "snippet": {
                "publishedAt": "2021-03-01T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "PRAISE AND THANKSGIVING PART 3 BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DJ-xGdsVtFg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DJ-xGdsVtFg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DJ-xGdsVtFg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-01T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3ZttvtY6YixElX8d0O47k-a65q8",
            "id": {
                "kind": "youtube#video",
                "videoId": "cPT4jx2lwQc"
            },
            "snippet": {
                "publishedAt": "2021-02-25T19:00:13Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "PRAISE AND THANKSGIVING PART 2 BY PASTOR OTI",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/cPT4jx2lwQc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/cPT4jx2lwQc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/cPT4jx2lwQc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-25T19:00:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "y_YchcnGingJ0qjaG1n5fPA1Tfo",
            "id": {
                "kind": "youtube#video",
                "videoId": "BoP4dKnRESo"
            },
            "snippet": {
                "publishedAt": "2021-02-22T19:00:05Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "PRAISE AND THANKSGIVING PART 1 BY PASTOR OTI",
                "description": "What do you do when nothing is working? Watch this message as Pastor shows the key for doing exploit in the kingdom.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/BoP4dKnRESo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/BoP4dKnRESo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/BoP4dKnRESo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-22T19:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "kd_vHNAqlhNZuVyzp87Aab3tvDQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "iY3StVrnWeE"
            },
            "snippet": {
                "publishedAt": "2021-02-10T18:15:17Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "MEGA MID-WEEK SERVICE - 10-02-2021",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iY3StVrnWeE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iY3StVrnWeE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iY3StVrnWeE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-10T18:15:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "77rwDfpxQbKt4z6siN04uJIj24A",
            "id": {
                "kind": "youtube#video",
                "videoId": "Qa3yzcc4Oew"
            },
            "snippet": {
                "publishedAt": "2021-01-29T05:15:12Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "Prayer At 5:20AM - Day 19 - 29 01 2021",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Qa3yzcc4Oew/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Qa3yzcc4Oew/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Qa3yzcc4Oew/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-29T05:15:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "T8k6oUvR1vjDIvoxOiDBSQjH5vc",
            "id": {
                "kind": "youtube#video",
                "videoId": "0D9eYJi0YsI"
            },
            "snippet": {
                "publishedAt": "2021-01-28T05:15:31Z",
                "channelId": "UCQBJdoX0VmxuR7iYb__oywQ",
                "title": "Prayer At 5:20AM - Day 18 - 28 01 2021",
                "description": "If you just got born again or would want us to pray with you about something you are dealing with or you have questions you need ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0D9eYJi0YsI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0D9eYJi0YsI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0D9eYJi0YsI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bishop Isaac Oti-Boateng",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-28T05:15:31Z"
            }
        }
    ]
}

const fetchYoutube = async () => {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY_PERSONAL,
            channelId: process.env.NEXT_PUBLIC_CHANNEL_ID_PERSONAL,
            part: "snippet,id",
            order: "date",
            maxResults: "50",
            pageToken: ""
        }
    }) ;

    const videoData = await res.data ;

    return videoData;
}



const AddMessageModal = ({ isOpen, closeModal, data}:Modal) => {
    

    console.log("init Data")
    console.log(data);



   const { data:value, isError, isLoading, error, isSuccess,  } = useQuery<Data>(["youtubeData"], fetchYoutube,{keepPreviousData:true,initialData:data});




    console.log("use Query Info");
    console.log(data??value);





    // console.log('print')
    // console.log(isOpen)



    return (
        <>
            <Transition appear show={isOpen ?? false} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-grayblack p-6 text-left align-middle shadow-xl transition-all space-y-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-50 py-4"
                                    >
                                        Add Message
                                    </Dialog.Title>
                                    {/* Search */}

                                    <SearchBar />
                                    {isLoading && (<div className="text-white">Loading</div>)}
                                    {isError && (<div className="text-white">{`${error}`}</div>)}


                                    {/* {isSuccess && (<div className="max-h-64 overflow-auto space-y-4">
                                        ({
                                            data?.items.map((video) => (
                                                <div key={video.etag}>
                                                    <MessageTiles
                                                        item={video}
                                                    />
                                                </div>

                                            ))
                                        })


                                    </div>)} */}
                                    <div className="mt-4 flex flex-row  justify-between">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center  items-center rounded-md border border-transparent space-x-2 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        // onClick={closeModal}
                                        >
                                            <ArrowLeftIcon className="w-6 h-6" />
                                            <div> Previous</div>
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent space-x-2 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        // onClick={closeModal}
                                        >
                                            <div> Next</div>
                                            <ArrowRightIcon className="w-6 h-6" />

                                        </button>
                                    </div>


                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-500  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>

                        </div>

                    </div>
                </Dialog>
            </Transition>
        </>
    );



}



export default AddMessageModal;

// export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: { dehydratedState: DehydratedState } }> => {

//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);

//     // const data = await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);



//     // queryClient.fetchQuery<Data>(["youtubeData"], fetchYoutube,);

//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         }
//     }

// }

// export async function getStaticProps() {

//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery<Data>(["youtubeData"], fetchYoutube,);

//     const fetchYoutuber = async () => {
//         const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
//             params: {
//                 key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY_PERSONAL,
//                 channelId: process.env.NEXT_PUBLIC_CHANNEL_ID_PERSONAL,
//                 part: "snippet,id",
//                 order: "date",
//                 maxResults: "50",
//                 pageToken: ""
//             }
//         }) ;
    
//         const videoData = await res.data as Data ;
    
//         return videoData;
//     }

//     const data =await fetchYoutuber()

//     return {
//         props: {
//             // dehydratedState: dehydrate(queryClient)
//             initialData: data
//         }
//     }

//  }
// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//       paths: [],
//       fallback: "blocking"
//     };
//   };