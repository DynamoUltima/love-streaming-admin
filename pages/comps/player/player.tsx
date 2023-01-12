import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Item } from "../../interfaces";


const Player = ({ videoId }: { videoId: Item}) => {

   let [id, setId] = useState<string>("");
    const [data, setData] = useState("")
    const [uri,setUri]= useState<String>("");

    let datum ="";
    //yBfszomRve0
 
    
    const  vidInfo = videoId
    //    setId(videoId) 
    //  console.log(`player ${id}`)

    useEffect( () => {
        

    if(videoId !== undefined){
      
        setId(videoId.id.videoId)
        console.log("videoId")
        console.log(videoId)
        if(id !==""){
            let url =`https://www.youtube.com/watch?v=${id}`
            setUri(url)
        }
        
    }

    },[id,videoId])
    
    // console.log("Data id");
    // console.log(videoId)
    // console.log(uri)
   

    return (
      
      

       <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width="100%"
                height={'100%'}
                controls={true}
            /> 
          
      

    );
    //xCkPEtpinZE
}

export default Player;

 