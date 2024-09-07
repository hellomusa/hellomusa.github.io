const NUM_TRACKS = 4;

document.addEventListener('DOMContentLoaded', () => {
    const musicList = document.getElementById('music-list');
    const apiKey = 'a3d14e9a7ce5f6d568fbf3415b944382';
    const username = 'musa6ali';

    function getRandomRotation() {
        const min = -3;
        const max = 3;
        return (Math.random() * (max - min) + min).toFixed(1) + 'deg';
    }

    function getTimeAgo(timestamp) {
        const now = Math.floor(Date.now() / 1000);
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60);

        if (minutes < 1) return 'just now';
        if (minutes === 1) return '1 minute ago';
        if (minutes < 60) return `${minutes} minutes ago`;

        const hours = Math.floor(minutes / 60);
        if (hours === 1) return '1 hour ago';
        if (hours < 24) return `${hours} hours ago`;

        const days = Math.floor(hours / 24);
        if (days === 1) return '1 day ago';
        return `${days} days ago`;
    }

    function fetchTracks(page = 1, uniqueTracks = new Map()) {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&page=${page}&limit=50`)
            .then(response => response.json())
            .then(data => {
                const tracks = data.recenttracks.track;
                tracks.forEach(track => {
                    const trackName = `${track.artist['#text']} - ${track.name}`;
                    const nowPlaying = track["@attr"] && track["@attr"].nowplaying === "true";
                    const timestamp = nowPlaying ? Math.floor(Date.now() / 1000) : parseInt(track.date.uts);
                    if (!uniqueTracks.has(trackName)) {
                        uniqueTracks.set(trackName, { 
                            imageUrl: track.image[3]['#text'],
                            url: track.url, 
                            nowPlaying,
                            timestamp
                        });
                    }
                });

                if (uniqueTracks.size < NUM_TRACKS && tracks.length > 0) {
                    fetchTracks(page + 1, uniqueTracks);
                } else {
                    const latestSongImage = Array.from(uniqueTracks.values())[0].imageUrl;
                    document.documentElement.style.setProperty('--latest-song-bg', `url(${latestSongImage})`);

                    Array.from(uniqueTracks.entries()).slice(0, NUM_TRACKS).forEach(([trackName, { imageUrl, url, nowPlaying, timestamp }], index) => {
                        const li = document.createElement('li');
                        li.classList.add('music-item');
                        li.style.transform = `rotate(${getRandomRotation()})`;
                        li.style.animationDelay = `${index * 0.5}s`;

                        const img = document.createElement('img');
                        img.src = imageUrl;
                        img.alt = trackName;

                        const trackInfo = document.createElement('div');
                        trackInfo.classList.add('track-info');

                        const trackLink = document.createElement('a');
                        trackLink.href = url;
                        trackLink.target = '_blank';
                        trackLink.textContent = trackName;

                        const timeInfo = document.createElement('span');
                        timeInfo.classList.add('time-info');
                        if (nowPlaying) {
                            timeInfo.textContent = 'now playing';
                        } else {
                            timeInfo.textContent = getTimeAgo(timestamp);
                        }

                        trackInfo.appendChild(trackLink);
                        trackInfo.appendChild(timeInfo);

                        li.appendChild(img);
                        li.appendChild(trackInfo);
                        musicList.appendChild(li);
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching data from Last.fm:', error);
                const li = document.createElement('li');
                li.textContent = 'Unable to load music data.';
                musicList.appendChild(li);
            });
    }

    fetchTracks();
});
