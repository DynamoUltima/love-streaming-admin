import ReactPlayer from "react-player";

const Player = () => {
    return (
        <ReactPlayer
            url={'https://www.youtube.com/watch?v=xCkPEtpinZE'}
            width="100%"
            height={'100%'}
            controls={true}
        />

    );
}

export default Player;