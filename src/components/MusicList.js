import React from "react";
import styled from "@emotion/styled";
import { getDiscoverMusic } from "../api/music";

//STYLE STart

const Container = styled.div`
  background: transparent linear-gradient(180deg, #9127e9 0%, #e15a5a 100%) 0%
    0% no-repeat padding-box;
  width: 90vw;
  height: auto;
  border-radius: 30px;
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 3px 6px 16px 0px rgba(102, 102, 102, 1);
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

const ArtistDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

const ChartPosition = styled.h1`
  font-size: 4rem;
  color: #eef1fa;
  margin: 0;
`;

const LastFMLink = styled.a`
  font-size: 2.1rem;
  margin: 5px;
  color: #333;
  text-align: right;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ArtistName = styled.h4`
  font-size: 2.1rem;
  margin: 5px;
  color: #333;
  text-align: right;
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

const NoArtists = styled.h3`
  font-size: 1rem;
  color: #eef1fa;
  margin: 0;
`;

//STYLE End

export default function MusicList({ searchValue }) {
  const [music, setMusic] = React.useState([]);
  // const [showPopup, setShowPopup] = React.useState(false);

  // function togglePopup() {
  //   React.setState({ setShowPopup: true });
  // }

  async function refreshMusic() {
    const discoveredMusic = await getDiscoverMusic(searchValue);
    setMusic(discoveredMusic);
  }
  React.useEffect(() => {
    refreshMusic();
  });
  if (!music.length) {
    return (
      <NoArtists>Sorry, no Charts found. Please try an other place.</NoArtists>
    );
  } else {
    return (
      <>
        {music.map((music, index) => (
          <Container key={music.url}>
            <ChartPosition>{index + 1}</ChartPosition>
            <ArtistDetails>
              <ArtistName>
                <LastFMLink href={music.url} target="_blank">
                  {music.name}
                </LastFMLink>
              </ArtistName>
              <GlobalListeners>Global Scrobblers: </GlobalListeners>
              <PlayCount>
                {parseInt(music.listeners).toLocaleString("en")}
              </PlayCount>
            </ArtistDetails>
          </Container>
        ))}
      </>
    );
  }
}
