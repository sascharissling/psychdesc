import React from "react";
import styled from "@emotion/styled";
import { getDiscoverMusic } from "../api/music";

//STYLE Start

const Container = styled.div`
  background: transparent linear-gradient(180deg, #9127e9 0%, #e15a5a 100%) 0%
    0% no-repeat padding-box;
  width: 90vw;
  max-width: 500px;
  height: auto;
  border-radius: 30px;
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 3px 6px 16px 0px rgba(102, 102, 102, 1);
  text-align: center;
  justify-content: space-around;
`;

const ChartPosition = styled.h1`
  font-size: 2.5rem;
  color: #eef1fa;
  margin: 0;
`;

const ArtistName = styled.h4`
  font-size: 2rem;
  color: #333;
  margin: 5px 0px 0px 5px: 
`;

const PlayCount = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const GlobalListeners = styled.h3`
  font-size: 1rem;
  color: #eef1fa;
  margin: 0;
`;

const ArtistDetails = styled.div`
  text-align: right;
`;

//STYLE End

export default function MusicList() {
  const [music, setMusic] = React.useState([]);

  console.log(music);

  async function refreshMusic() {
    const discoveredMusic = await getDiscoverMusic("macedonia");
    setMusic(discoveredMusic);
  }
  React.useEffect(() => {
    refreshMusic();
  }, []);

  return (
    <>
      {music.map(music => (
        <Container key={music}>
          <div>
            <ChartPosition>1</ChartPosition>
          </div>
          <ArtistDetails>
            <ArtistName>{music.name}</ArtistName>
            <GlobalListeners>Global Listeners: </GlobalListeners>
            <PlayCount>
              {parseInt(music.listeners).toLocaleString("en")}
            </PlayCount>
          </ArtistDetails>
        </Container>
      ))}
    </>
  );
}
