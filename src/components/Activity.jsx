import { useEffect, useState } from "react";
import axios from "axios";
import Typist from "react-typist";
import { Octokit } from "@octokit/rest";
import "./Activity.css";

const octokit = new Octokit();

const Activity = () => {

  const [recentSong, setRecentSong] = useState({});
  const [recentRepo, setRecentRepo] = useState({});
  const [isSongLoading, setIsSongLoading] = useState(true);
  const [isRepoLoading, setIsRepoLoading] = useState(true);
  const [songError, setSongError] = useState(false);
  const [repoError, setRepoError] = useState(false);

  const fetchRecentSong = () => {
    axios.get('http://ws.audioscrobbler.com/2.0/',
    {
      params: {
        method: 'user.getrecenttracks',
        user: 'musa6ali',
        api_key: process.env.REACT_APP_API_KEY,
        format: 'json',
        limit: 1
      }
    })
    .then(({ data }) => {
      const song = data.recenttracks.track[0];
      const recentSong = {
        artist: song.artist['#text'],
        title: song.name,
        link: song.url,
      }
      setRecentSong(recentSong);
      setIsSongLoading(false);
    })
    .catch((err) => {
      setSongError(true);
    })
  }

  const fetchRecentRepo = () => {
    octokit.repos.listForUser({
      username: "hellomusa",
      sort: "pushed",
      per_page: 1
    })
    .then(({ data }) => {
      const repo = data[0];
      const recentRepo = {
        name: repo.name,
        link: repo.html_url
      }
      setRecentRepo(recentRepo);
      setIsRepoLoading(false);
    })
    .catch((err) => {
      setRepoError(true);
    })
  }

  useEffect(() => {
    fetchRecentSong();
    fetchRecentRepo();
    console.log(recentRepo);
  }, []);

  return (
    <div>
      <h4>STALK ME: (APIs are cool)</h4>
      <ul>
        <li>
          {isSongLoading && <Typist>Loading recent song...</Typist>}
          {!isSongLoading &&
            <>
              I probably just finished listening to{" "}
              <a href={recentSong.link}>
                {recentSong.title} by {recentSong.artist}
              </a>
              .
            </>
          }
        </li>
        <li>
          {isRepoLoading && <Typist>Loading recent repo...</Typist>}
          I probably just pushed some changes to <a href={recentRepo.link}>{recentRepo.name}</a>.
        </li>
      </ul>
    </div>
  )
}

export default Activity;