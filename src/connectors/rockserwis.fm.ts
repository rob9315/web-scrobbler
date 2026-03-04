export {};

Connector.playerSelector = ['#play', '#current-track'];

Connector.playButtonSelector = '#play.fa-play';

Connector.trackArtSelector = '#current-image';

Connector.trackSelector = '#current-title';

Connector.artistSelector = '#current-artist';

Connector.albumSelector = '#current-album';

Connector.durationSelector = '#current-length';

Connector.scrobbleInfoLocationSelector = ':has(>#current-title)>div:last-child';
Connector.scrobbleInfoStyle = {
	...Connector.scrobbleInfoStyle,
	marginTop: '0.5em',
};
