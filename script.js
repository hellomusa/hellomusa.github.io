document.addEventListener('DOMContentLoaded', function () {
    const musicList = document.getElementById('music-list');
    const apiKey = 'a3d14e9a7ce5f6d568fbf3415b944382';
    const username = 'musa6ali';

    function getRandomRotation() {
        const min = -3;
        const max = 3;
        return (Math.random() * (max - min) + min).toFixed(1) + 'deg';
    }

    function fetchTracks(page = 1, uniqueTracks = new Map()) {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&page=${page}&limit=50`)
            .then(response => response.json())
            .then(data => {
                const tracks = data.recenttracks.track;
                tracks.forEach(track => {
                    const trackName = `${track.artist['#text']} - ${track.name}`;
                    const nowPlaying = track["@attr"] && track["@attr"].nowplaying === "true";
                    if (!uniqueTracks.has(trackName)) {
                        uniqueTracks.set(trackName, { imageUrl: track.image[2]['#text'], url: track.url, nowPlaying });
                    }
                });

                if (uniqueTracks.size < 10 && tracks.length > 0) {
                    fetchTracks(page + 1, uniqueTracks);
                } else {
                    Array.from(uniqueTracks.entries()).slice(0, 10).forEach(([trackName, { imageUrl, url, nowPlaying }], index) => {
                        const li = document.createElement('li');
                        li.classList.add('music-item');
                        li.style.transform = `rotate(${getRandomRotation()})`;
                        li.style.animationDelay = `${index}s`;

                        const img = document.createElement('img');
                        img.src = imageUrl;
                        img.alt = trackName;

                        const a = document.createElement('a');
                        a.href = url;
                        a.target = '_blank';

                        if (nowPlaying) {
                            li.classList.add('now-playing');
                            a.textContent = `${trackName} (now playing)`;
                        } else {
                            a.textContent = trackName;
                        }

                        li.appendChild(img);
                        li.appendChild(a);
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
