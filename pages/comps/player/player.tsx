import ReactPlayer from "react-player";

const Player = ({videoId}:{videoId:string}) => {
    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height={'100%'}
            controls={true}
        />

    );
    //xCkPEtpinZE
}

export default Player;