import { useEffect, useState } from "react";
import axios from "axios";
import Typist from "react-typist";
import "./Activity.css";

const Activity = () => {
  const [currentSong, setCurrentSong] = useState({});
  const [recentSongs, setRecentSongs] = useState({});
  const [areSongsLoading, setAreSongsLoading] = useState(true);
  const [songError, setSongError] = useState(false);

  // Get recent activity on component load
  useEffect(() => {
    const fetchRecentSongs = () => {
      axios.get('https://ws.audioscrobbler.com/2.0/',
      {
        params: {
          method: 'user.getrecenttracks',
          user: 'musa6ali',
          api_key: "a3d14e9a7ce5f6d568fbf3415b944382",
          format: 'json',
          limit: 5
        }
      })
      .then(({ data }) => {
        const songs = []
        data.recenttracks.track.forEach(song => {
          const anchor = <> <a href={song.url}> {song.name.toLowerCase()}</a> by {song.artist['#text'].toLowerCase()}</>
          if (song.hasOwnProperty('@attr')) {
            if (song['@attr'].nowplaying) {
              setCurrentSong(
              <li key={song.name}>
                <b style={{"color": "red"}}>currently listening to {anchor}</b>
              </li>
              );
            }
          }
          songs.push(<li>{anchor}</li>)
        });
        if (currentSong) {
          setRecentSongs(delete songs[0]);
        }
        setRecentSongs(songs);
        console.log(songs);
        setAreSongsLoading(false);
      })
      .catch((err) => {
        setSongError(true);
      })
    }
    fetchRecentSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h4 class="musicHeading">Here's what I've been listening to... </h4>
      <ul>
          {songError && "Error getting most recently played songs."}
          {!songError && areSongsLoading && <Typist>Loading recent songs...</Typist>}
          {!areSongsLoading && currentSong &&
            <>
            {currentSong}
            </>
          }
          {!areSongsLoading &&
            <>
              {recentSongs}
            </>
          }
      </ul>
    </div>
  )
}

export default Activity;