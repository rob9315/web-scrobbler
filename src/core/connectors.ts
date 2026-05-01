export interface ConnectorMeta {
	label: string;
	matches?: string[];
	js: string;
	allFrames?: true;

	/**
	 * true if connector uses blocklist. Connector must implement {@link Connector.getChannelId}
	 */
	usesBlocklist?: true;

	/**
	 * true if website has its own scrobbling system the user needs to be aware of.
	 */
	hasNativeScrobbler?: true;
}

export default <{ [id: string]: ConnectorMeta }>{
	youtube: {
		label: 'YouTube',
		matches: ['*://www.youtube.com/*', '*://m.youtube.com/*'],
		js: 'youtube.js',
		usesBlocklist: true,
	},
	myspace: {
		label: 'MySpace',
		matches: ['*://myspace.com/*'],
		js: 'myspace.js',
	},
	'bandcamp-embed': {
		label: 'Bandcamp Daily',
		matches: ['*://daily.bandcamp.com/*'],
		js: 'bandcamp-embed.js',
		allFrames: true,
	},
	bandcamp: {
		label: 'Bandcamp',
		matches: ['*://*.bandcamp.com/*', '*://bandcamp.com/*'],
		js: 'bandcamp.js',
	},
	bndcmpr: {
		label: 'BNDCMPR',
		matches: ['*://bndcmpr.co/*'],
		js: 'bndcmpr.js',
		allFrames: true,
	},
	buymusicclub: {
		label: 'Buy Music Club',
		matches: ['*://www.buymusic.club/*'],
		js: 'buymusicclub.js',
	},
	pandora: {
		label: 'Pandora',
		matches: ['*://www.pandora.com/*'],
		js: 'pandora.js',
	},
	pakartot: {
		label: 'Pakartot',
		matches: ['*://www.pakartot.lt/*'],
		js: 'pakartot.js',
	},
	deezer: {
		label: 'Deezer',
		matches: ['*://www.deezer.com/*'],
		js: 'deezer.js',
	},
	soundcloud: {
		label: 'SoundCloud',
		matches: ['*://soundcloud.com/*', '*://m.soundcloud.com/*'],
		js: 'soundcloud.js',
	},
	amazon: {
		label: 'Amazon Music',
		matches: [
			'*://music.amazon.*/*',
			'*://www.amazon.*/gp/dmusic/cloudplayer/*',
		],
		js: 'amazon.js',
	},
	'amazon-alexa': {
		label: 'Amazon Echo',
		matches: ['*://alexa.amazon.*/spa/*'],
		js: 'amazon-alexa.js',
	},
	vas3kradio: {
		label: 'Radio Vas3k Club',
		matches: ['https://radio.vas3k.club/*'],
		js: 'vas3kradio.js',
	},
	vk: {
		label: 'VK',
		matches: ['*://vk.ru/*', '*://vk.com/*'],
		js: 'vk.js',
	},
	megalyrics: {
		label: 'Megalyrics',
		matches: ['*://megalyrics.ru/*'],
		js: 'megalyrics.js',
	},
	iheart: {
		label: 'iHeart',
		matches: ['*://*.iheart.com/*'],
		js: 'iheart.js',
	},
	indieshuffle: {
		label: 'Indie Shuffle',
		matches: ['*://www.indieshuffle.com/*'],
		js: 'indieshuffle.js',
	},
	tubafm: {
		label: 'Tuba.FM',
		matches: ['*://fm.tuba.pl/*'],
		js: 'tubafm.js',
	},
	spotify: {
		label: 'Spotify',
		matches: ['*://open.spotify.com/*'],
		js: 'spotify.js',
		hasNativeScrobbler: true,
	},
	'plug.dj': {
		label: 'plug.dj',
		matches: ['*://plug.dj/*'],
		js: 'plug.dj.js',
	},
	dandelionradio: {
		label: 'Dandelion Radio',
		matches: ['*://www.dandelionradio.com/player.htm'],
		js: 'dandelionradio.js',
	},
	hillydilly: {
		label: 'HillyDilly',
		matches: ['*://www.hillydilly.com/*'],
		js: 'hillydilly.js',
	},
	'8tracks': {
		label: '8tracks',
		matches: ['*://8tracks.com/*'],
		js: '8tracks.js',
	},
	sogreatandpowerful: {
		label: 'SoGreatandPowerful',
		matches: ['*://sogreatandpowerful.com/*'],
		js: 'sogreatandpowerful.js',
	},
	radiocidade: {
		label: 'Radio Cidade',
		matches: [
			'*://radiocidade.fm/player/*',
			'*://play.radiomania.com.br/*',
			'*://*.melodia.com.br/*',
			'*://jb.fm/player/*',
		],
		js: 'radiocidade.js',
	},
	nova: {
		label: 'Radio Nova',
		matches: ['*://www.nova.fr/*'],
		js: 'nova.js',
	},
	radioplus: {
		label: 'Radioplus',
		matches: ['*://www.radioplus.be/*', '*://radioplus.be/*'],
		js: 'radioplus.js',
	},
	rpfm: {
		label: 'Радио Premium',
		matches: ['*://rpfm.ru/*'],
		js: 'rpfm.js',
	},
	'douban.fm': {
		label: 'Douban.FM',
		matches: ['*://douban.fm/*', '*://fm.douban.fm/*'],
		js: 'douban.fm.js',
	},
	focusatwill: {
		label: 'Focus@Will',
		matches: ['*://www.focusatwill.com/*'],
		js: 'focusatwill.js',
	},
	subphonic: {
		label: 'Subphonic (owncloud plugin)',
		matches: ['*://*/*/apps/subphonic/minisub/*'],
		js: 'subphonic.js',
	},
	'nextcloud-music': {
		label: 'Nextcloud music',
		matches: ['*://*/apps/music/*'],
		js: 'nextcloud-music.js',
	},
	di: {
		label: 'Digitally Imported',
		matches: ['*://www.di.fm/*'],
		js: 'radiotunes.js',
	},
	'bbc-sounds': {
		label: 'BBC Sounds',
		matches: ['*://*.bbc.co.uk/*'],
		js: 'bbc-sounds.js',
	},
	gaana: {
		label: 'Gaana',
		matches: ['*://gaana.com/*'],
		js: 'gaana.js',
	},
	'yandex-music': {
		label: 'Яндекс.Музыка',
		matches: [
			'*://music.yandex.ru/*',
			'*://music.yandex.by/*',
			'*://music.yandex.kz/*',
			'*://music.yandex.ua/*',
			'*://music.yandex.com/*',
		],
		js: 'yandex-music.js',
	},
	plex: {
		label: 'Plex',
		matches: [
			'*://*32400/web/*',
			'*://plex.tv/web/*',
			'*://*.plex.tv/web/*',
			'*://*.plex.tv/desktop*',
		],
		js: 'plex.js',
	},
	tunein: {
		label: 'TuneIn',
		matches: ['*://tunein.com/*'],
		js: 'tunein.js',
	},
	mixcloud: {
		label: 'Mixcloud',
		matches: ['*://mixcloud.com/*', '*://*.mixcloud.com/*'],
		js: 'mixcloud.js',
	},
	reverbnation: {
		label: 'ReverbNation',
		matches: ['*://www.reverbnation.com/*'],
		js: 'reverbnation.js',
	},
	'nrk-radio': {
		label: 'NRK Radio',
		matches: ['*://radio.nrk.no/*'],
		js: 'nrk-radio.js',
	},
	archive: {
		label: 'Internet Archive',
		matches: ['*://archive.org/details/*'],
		js: 'archive.js',
	},
	odnoklassniki: {
		label: 'Odnoklassniki',
		matches: ['*://odnoklassniki.ru/*', '*://ok.ru/*'],
		js: 'odnoklassniki.js',
	},
	overcast: {
		label: 'Overcast',
		matches: ['*://overcast.fm/*'],
		js: 'overcast.js',
	},
	onlineradiobox: {
		label: 'Online Radio Box',
		matches: ['*://onlineradiobox.com/*', '*://p.onlineradiobox.com/*'],
		js: 'onlineradiobox.js',
	},
	'163-music': {
		label: '163 Music',
		matches: ['*://music.163.com/*'],
		js: '163-music.js',
	},
	ambientsleepingpill: {
		label: 'Ambient Sleeping Pill',
		matches: ['*://ambientsleepingpill.com/'],
		js: 'ambientsleepingpill.js',
	},
	amambient: {
		label: 'a.m. ambient',
		matches: ['*://amambient.com/'],
		js: 'ambientsleepingpill.js',
	},
	tidal: {
		label: 'Tidal',
		matches: ['*://tidal.com/*'],
		js: 'tidal.js',
	},
	'hypem-premieres': {
		label: 'Hype Machine Featured Albums',
		matches: ['*://hypem.com/album/*'],
		js: 'hypem-albums.js',
	},
	hypem: {
		label: 'Hype Machine',
		matches: ['*://hypem.com/*'],
		js: 'hypem.js',
	},
	radionomy: {
		label: 'Radionomy',
		matches: ['*://www.radionomy.com/*'],
		js: 'radionomy.js',
	},
	'j1-radio': {
		label: 'J1 Radio',
		matches: [
			'*://www.j1fm.tokyo/player/*',
			'*://www.j1fm.tokyo/michi/player/*',
		],
		js: 'aiircom.js',
	},
	jazzandrain: {
		label: 'JazzAndRain',
		matches: ['*://*.jazzandrain.com/*'],
		js: 'jazzandrain.js',
	},
	relaxingbeats: {
		label: 'RelaxingBeats',
		matches: ['*://*.relaxingbeats.com/*'],
		js: 'jazzandrain.js',
	},
	epicmusictime: {
		label: 'EpicMusicTime',
		matches: ['*://*.epicmusictime.com/*'],
		js: 'jazzandrain.js',
	},
	accujazz: {
		label: 'AccuJazz',
		matches: ['*://www.accuradio.com/pop_player/accujazz/*'],
		js: 'accujazz.js',
	},
	accuradio: {
		label: 'AccuRadio',
		matches: ['*://www.accuradio.com/*'],
		js: 'accuradio.js',
	},
	'imusic.am': {
		label: 'Imusic.am',
		matches: ['*://imusic.am/*'],
		js: 'imusic.am.js',
	},
	earbits: {
		label: 'Earbits',
		matches: ['*://www.earbits.com/*'],
		js: 'earbits.js',
	},
	'player.fm': {
		label: 'Player.fm',
		matches: ['*://player.fm/*'],
		js: 'player.fm.js',
	},
	sndtst: {
		label: 'Sound Test',
		matches: ['*://sndtst.com/*'],
		js: 'sndtst.js',
	},
	radiotunes: {
		label: 'RadioTunes',
		matches: ['*://www.radiotunes.com/*'],
		js: 'radiotunes.js',
	},
	rockradio: {
		label: 'RockRadio',
		matches: ['*://www.rockradio.com/*'],
		js: 'radiotunes.js',
	},
	classicalradio: {
		label: 'ClassicalRadio',
		matches: ['*://www.classicalradio.com/*'],
		js: 'radiotunes.js',
	},
	audacy: {
		label: 'Audacy',
		matches: ['*://www.audacy.com/*'],
		js: 'audacy.js',
	},
	audius: {
		label: 'Audius',
		matches: ['*://audius.co/*'],
		js: 'audius.js',
	},
	getworkdonemusic: {
		label: 'GetWorkDoneMusic',
		matches: ['*://*.getworkdonemusic.com/*'],
		js: 'getworkdonemusic.js',
	},
	jamendo: {
		label: 'Jamendo',
		matches: ['*://www.jamendo.com/*'],
		js: 'jamendo.js',
	},
	'bandzone.cz': {
		label: 'Bandzone.cz',
		matches: ['*://bandzone.cz/*'],
		js: 'bandzone.cz.js',
	},
	driveplayer: {
		label: 'Music Player for Google Drive',
		matches: ['*://www.driveplayer.com/*'],
		js: 'driveplayer.js',
	},
	kodi: {
		label: 'Kodi',
		js: 'kodi.js',
	},
	superplayer: {
		label: 'Superplayer',
		matches: ['*://www.superplayer.fm/*'],
		js: 'superplayer.js',
	},
	rmfon: {
		label: 'RMFON',
		matches: ['*://www.rmfon.pl/*'],
		js: 'rmfon.js',
	},
	radio357: {
		label: 'Radio 357',
		matches: ['*://radio357.pl/*'],
		js: 'radio357.js',
	},
	jazzradio: {
		label: 'JazzRadio',
		matches: ['*://www.jazzradio.com/*'],
		js: 'radiotunes.js',
	},
	zenradio: {
		label: 'Zen Radio',
		matches: ['*://www.zenradio.com/*'],
		js: 'radiotunes.js',
	},
	somafm: {
		label: 'SomaFM',
		matches: ['*://somafm.com/player/*', '*://somafm.com/player24/*'],
		js: 'somafm.js',
	},
	freemusicarchive: {
		label: 'Free Music Archive',
		matches: ['*://*.freemusicarchive.org/*'],
		js: 'freemusicarchive.js',
	},
	redditmusicplayer: {
		label: 'Reddit Music Player',
		matches: ['*://musicplayer.io/'],
		js: 'redditmusicplayer.js',
	},
	novoeradio: {
		label: 'Новое Радио',
		matches: ['*://www.novoeradio.by/*'],
		js: 'novoeradio.js',
	},
	radioparadise: {
		label: 'Radio Paradise',
		matches: ['*://radioparadise.com/*'],
		js: 'radioparadise.js',
		allFrames: true,
	},
	beatport: {
		label: 'Beatport',
		matches: ['*://www.beatport.com/*'],
		js: 'beatport.js',
	},
	'beeline-music': {
		label: 'Beeline Music',
		matches: ['*://music.beeline.ru/*'],
		js: 'beeline-music.js',
	},
	wavo: {
		label: 'wavo',
		matches: ['*://wavo.me/*'],
		js: 'wavo.js',
	},
	fluxfm: {
		label: 'FluxFM Berlin',
		matches: ['*://www.fluxfm.de/*'],
		js: 'fluxfm.js',
	},
	noisefm: {
		label: 'Noise FM',
		matches: ['*://noisefm.ru/*', '*://en.noisefm.ru/*'],
		js: 'noisefm.js',
		allFrames: true,
	},
	wwoz: {
		label: 'WWOZ',
		matches: ['*://www.wwoz.org/listen/player/*'],
		js: 'wwoz.js',
	},
	sonerezh: {
		label: 'Sonerezh',
		matches: ['*://sonerezh.*/*', '*://*/*sonerezh*'],
		js: 'sonerezh.js',
	},
	youradio: {
		label: 'Youradio',
		matches: ['*://www.youradio.cz/*'],
		js: 'youradio.js',
	},
	gpmusic: {
		label: 'GPMusic',
		matches: ['*://player.gpmusic.co/*'],
		js: 'gpmusic.js',
	},
	plaza: {
		label: 'Nightwave Plaza',
		matches: ['*://plaza.one/*'],
		js: 'plaza.js',
	},
	retrowave: {
		label: 'Retrowave',
		matches: ['*://retrowave.ru/*'],
		js: 'retrowave.js',
	},
	genie: {
		label: 'Genie',
		matches: ['*://www.genie.co.kr/player/fPlayer*'],
		js: 'genie.js',
	},
	bugs: {
		label: 'Bugs',
		matches: ['*://music.bugs.co.kr/newPlayer*'],
		js: 'bugs.js',
	},
	openfm: {
		label: 'openfm',
		matches: ['*://open.fm/*'],
		js: 'openfm.js',
	},
	playmoss: {
		label: 'Playmoss',
		matches: ['*://playmoss.com/*'],
		js: 'playmoss.js',
	},
	apidog: {
		label: 'Apidog',
		matches: ['*://apidog.ru/*'],
		js: 'apidog.js',
	},
	pinguinradio: {
		label: 'Pinguin Radio',
		matches: ['*://pinguinradio.com/*'],
		js: 'pinguinradio.js',
	},
	jiosaavn: {
		label: 'JioSaavn',
		matches: ['*://www.jiosaavn.com/*'],
		js: 'jiosaavn.js',
	},
	anghami: {
		label: 'Anghami',
		matches: ['*://*.anghami.com/*'],
		js: 'anghami.js',
	},
	'mail.ru': {
		label: 'Mail.ru Music',
		matches: ['*://my.mail.ru/music', '*://my.mail.ru/music/*'],
		js: 'mail.ru.js',
	},
	emby: {
		label: 'Emby/Jellyfin',
		matches: ['*://*8096/web/*', '*://*8920/web/*', '*://app.emby.media/*'],
		js: 'emby.js',
	},
	freegalmusic: {
		label: 'Freegal Music',
		matches: ['*://*.freegalmusic.com/*'],
		js: 'freegalmusic.js',
	},
	hoopladigital: {
		label: 'hoopla',
		matches: ['*://www.hoopladigital.com/*'],
		js: 'hoopladigital.js',
	},
	amplify817: {
		label: 'Amplify 817',
		matches: ['*://amplify817.org/*'],
		js: 'musicat.js',
	},
	capitalcityrecords: {
		label: 'Capital City Records',
		matches: ['*://capitalcityrecords.ca/*'],
		js: 'musicat.js',
	},
	'musicat-atxlibrary': {
		label: 'Electric Lady Bird',
		matches: ['*://atxlibrary.musicat.co/*'],
		js: 'musicat.js',
	},
	'apl-flipside': {
		label: 'FlipSide',
		matches: ['*://flipside.apl.org/*'],
		js: 'musicat.js',
	},
	'slcpl-hum': {
		label: 'HUM (Hear Utah Music)',
		matches: ['*://hum.slcpl.org/*'],
		js: 'musicat.js',
	},
	'kdl-vibes': {
		label: 'KDL Vibes',
		matches: ['*://vibes.kdl.org/*'],
		js: 'musicat.js',
	},
	librarymusicproject: {
		label: 'Library Music Project',
		matches: ['*://librarymusicproject.com/*'],
		js: 'musicat.js',
	},
	'musicat-hclib': {
		label: 'MNspin',
		matches: ['*://hclib.musicat.co/*'],
		js: 'musicat.js',
	},
	'nashville-library-boombox': {
		label: 'Nashville BoomBox',
		matches: ['*://boombox.nashvillepubliclibrary.org/*'],
		js: 'musicat.js',
	},
	qcbeats: {
		label: 'QC Beats',
		matches: ['*://qcbeats.org/*'],
		js: 'musicat.js',
	},
	'q-dance': {
		label: 'Q-Dance',
		matches: ['*://www.q-dance.com/*'],
		js: 'q-dance.js',
	},
	sawdustcitysounds: {
		label: 'Sawdust City Sounds',
		matches: ['*://sawdustcitysounds.org/*'],
		js: 'musicat.js',
	},
	'spl-playback': {
		label: 'Seattle PlayBack',
		matches: ['*://playback.spl.org/*'],
		js: 'musicat.js',
	},
	'carnegielibrary-stacks': {
		label: 'STACKS',
		matches: ['*://stacks.carnegielibrary.org/*'],
		js: 'musicat.js',
	},
	tracksmusiclibrary: {
		label: 'Tracks Music Library',
		matches: ['*://tracksmusiclibrary.org/*'],
		js: 'musicat.js',
	},
	baybeats: {
		label: 'Bay Beats',
		matches: ['*://baybeats.sfpl.org/*'],
		js: 'musicat.js',
	},
	monstercat: {
		label: 'Monstercat',
		matches: ['*://www.monstercat.com/*', '*://player.monstercat.com/*'],
		js: 'monstercat.js',
	},
	'listen.moe': {
		label: 'Listen.moe',
		matches: ['*://listen.moe/*'],
		js: 'listen.moe.js',
	},
	animebits: {
		label: 'anime(bits)',
		matches: [
			'*://radio.animebits.moe/',
			'*://radio.animebits.moe/player/*',
		],
		js: 'animebits.js',
	},
	fairpricemusic: {
		label: 'Fair Price Music',
		matches: ['*://www.fairpricemusic.com/*'],
		js: 'fairpricemusic.js',
	},
	radioultra: {
		label: 'Radio ULTRA',
		matches: ['*://player.radioultra.ru/*'],
		js: 'radioultra.js',
	},
	nashe: {
		label: 'Наше Радио',
		matches: ['*://player.nashe.ru/*'],
		js: 'radioultra.js',
	},
	rockfm: {
		label: 'RockFM',
		matches: ['*://player.rockfm.ru/*'],
		js: 'radioultra.js',
	},
	radiojazzfm: {
		label: 'Radio JAZZ',
		matches: ['*://player.radiojazzfm.ru/*'],
		js: 'radioultra.js',
	},
	wostreaming: {
		label: 'WO Streaming',
		matches: ['*://*player.wostreaming.net/*'],
		js: 'wostreaming.js',
	},
	listenlive: {
		label: 'Listen Live',
		matches: ['*://player.listenlive.co/*'],
		js: 'listenlive.js',
	},
	planetradio: {
		label: 'Rayo',
		matches: [
			'*://hellorayo.co.uk/*/play/*',
			'*://hellorayo.co.uk/*/player/*',
		],
		js: 'planetradio.js',
	},
	roxx: {
		label: 'Roxx Radio',
		matches: ['*://roxx.gr/radio/*'],
		js: 'roxx.js',
	},
	listenonrepeat: {
		label: 'ListenOnRepeat',
		matches: ['*://listenonrepeat.com/*'],
		js: 'listenonrepeat.js',
	},
	'radio-mb': {
		label: 'Duckburg Radio',
		matches: ['*://*.radio-mb.com/*'],
		js: 'radio-mb.js',
	},
	'webradio.de': {
		label: 'Webradio.de',
		matches: ['*://www.webradio.de/*'],
		js: 'radioplayer.js',
	},
	thebreeze: {
		label: 'The Breeze',
		matches: ['*://www.thebreeze.com/*/radioplayer/*'],
		js: 'radioplayer.js',
	},
	radioplayer: {
		label: 'RadioPlayer',
		matches: [
			'*://ukradioplayer.*/*',
			'*://radioplayer.*/*',
			// Generic patterns
			'*://*/radioplayer/*',
			'*://*/radio/player/',
			'*://*/*/radio/player/',
		],
		js: 'radioplayer.js',
	},
	'deltaradio.de': {
		label: 'deltaradio',
		matches: ['*://www.deltaradio.de/*'],
		js: 'deltaradio.de.js',
	},
	radiobob: {
		label: 'Radio Bob',
		matches: ['*://*.radiobob.de/*'],
		js: 'radiobob.js',
	},
	'byte.fm': {
		label: 'ByteFM',
		matches: ['*://www.byte.fm/*'],
		js: 'byte.fm.js',
	},
	deutschlandfunknova: {
		label: 'Deutschlandfunk Nova',
		matches: ['*://www.deutschlandfunknova.de/*'],
		js: 'deutschlandfunknova.js',
	},
	'qq-music': {
		label: 'QQ Music',
		matches: ['*://y.qq.com/*'],
		js: 'qq-music.js',
	},
	'qq-video': {
		label: 'QQ Video',
		matches: ['*://v.qq.com/x/*'],
		js: 'qq-video.js',
	},
	naver: {
		label: 'Naver',
		matches: ['*://playerui.music.naver.com/*'],
		js: 'naver.js',
	},
	'naver-vibe': {
		label: 'Naver Vibe',
		matches: ['*://vibe.naver.com/*'],
		js: 'naver-vibe.js',
	},
	soribada: {
		label: 'Soribada',
		matches: ['*://www.soribada.com/*'],
		js: 'soribada.js',
	},
	'music-flo': {
		label: 'Flo',
		matches: ['*://www.music-flo.com/*'],
		js: 'music-flo.js',
	},
	'youtube-embed': {
		label: 'Discogs',
		matches: ['*://www.discogs.com/*'],
		js: 'youtube-embed.js',
		allFrames: true,
	},
	npr: {
		label: 'NPR',
		matches: ['*://www.npr.org/*'],
		js: 'npr.js',
	},
	streamsquid: {
		label: 'Streamsquid',
		matches: ['*://streamsquid.com/*'],
		js: 'streamsquid.js',
	},
	streemlion: {
		label: 'Streemlion',
		matches: ['*://listen.streemlion.com/*'],
		js: 'streemlion.js',
	},
	emusic: {
		label: 'eMusic',
		matches: ['*://www.emusic.com/*'],
		js: 'emusic.js',
	},
	lyricstraining: {
		label: 'LyricsTraining',
		matches: ['*://lyricstraining.com/*'],
		js: 'lyricstraining.js',
	},
	musicwalker: {
		label: 'Music Walker',
		matches: ['*://arkanath.com/MusicWalker/*'],
		js: 'musicwalker.js',
	},
	radioeins: {
		label: 'radioeins',
		matches: ['*://www.radioeins.de/livestream/*'],
		js: 'radioeins.js',
	},
	fritz: {
		label: 'Fritz',
		matches: ['*://www.fritz.de/livestream/*'],
		js: 'fritz.js',
	},
	musicoin: {
		label: 'Musicoin',
		matches: ['*://musicoin.org/*'],
		js: 'musicoin.js',
	},
	'181.fm': {
		label: '181.fm',
		matches: ['*://player.181fm.com/*'],
		js: '181.fm.js',
	},
	'phish.in': {
		label: 'Phish.in',
		matches: ['*://phish.in/*'],
		js: 'phish.in.js',
	},
	rainwave: {
		label: 'Rainwave',
		matches: [
			'*://rainwave.cc/*',
			'*://all.rainwave.cc/*',
			'*://game.rainwave.cc/*',
			'*://chiptune.rainwave.cc/*',
			'*://ocr.rainwave.cc/*',
			'*://covers.rainwave.cc/*',
		],
		js: 'rainwave.js',
	},
	'retro-synthwave': {
		label: 'Retro Synthwave',
		matches: ['*://www.retro-synthwave.com/*'],
		js: 'retro-synthwave.js',
	},
	radiovolna: {
		label: 'Радиоволна.нет',
		matches: ['*://radiovolna.net/*'],
		js: 'radiovolna.js',
	},
	feedbands: {
		label: 'Feedbands',
		matches: ['*://feedbands.com/*'],
		js: 'feedbands.js',
	},
	taazi: {
		label: 'Taazi',
		matches: ['*://taazi.com/*'],
		js: 'taazi.js',
	},
	patari: {
		label: 'Patari',
		matches: ['*://patari.pk/*'],
		js: 'patari.js',
	},
	pcloud: {
		label: 'pCloud',
		matches: ['*://my.pcloud.com/*'],
		js: 'pcloud.js',
	},
	'jetsetradio.live': {
		label: 'JetSetRadio Live',
		matches: ['*://jetsetradio.live/*'],
		js: 'jetsetradio.live.js',
	},
	radiofrance: {
		label: 'Radio France',
		matches: ['*://www.radiofrance.fr/*'],
		js: 'radiofrance.js',
	},
	remixrotation: {
		label: 'RemixRotation',
		matches: ['*://remixrotation.com/*'],
		js: 'remixrotation.js',
	},
	wfmu: {
		label: 'WFMU',
		matches: ['*://wfmu.org/*', '*://freeform.wfmu.org/*'],
		js: 'wfmu.js',
	},
	'siriusxm-player': {
		label: 'SiriusXM',
		matches: [
			'*://www.siriusxm.com/*',
			'*://www.siriusxm.ca/*',
			'*://*.siriusxm.com/player/*',
		],
		js: 'siriusxm-player.js',
	},
	'1ting': {
		label: '1ting',
		matches: [
			'*://www.1ting.com/player/*',
			'*://www.1ting.com/p_*',
			'*://www.1ting.com/album*',
			'*://www.1ting.com/rand.php*',
			'*://www.1ting.com/day/*',
			'*://h5.1ting.com/*',
		],
		js: '1ting.js',
	},
	'douban-artists': {
		label: 'Douban Artists',
		matches: ['*://music.douban.com/artists/player/*'],
		js: 'douban-artists.js',
	},
	kugou: {
		label: 'Kugou',
		matches: ['*://www.kugou.com/song/*'],
		js: 'kugou.js',
	},
	gimmeradio: {
		label: 'Gimme Radio',
		matches: [
			'*://gimmeradio.com/*',
			'*://www.gimmeradio.com/*',
			'*://gimmecountry.com/*',
			'*://www.gimmecountry.com/*',
			'*://gimmemetal.com/*',
			'*://www.gimmemetal.com/*',
		],
		js: 'gimmeradio.js',
	},
	'9sky': {
		label: '9sky',
		matches: ['*://www.9sky.com/music*', '*://www.9sky.com/mv/detail*'],
		js: '9sky.js',
	},
	vagalume: {
		label: 'Vagalume.FM',
		matches: ['*://vagalume.fm/*', '*://*.vagalume.com.br/*'],
		js: 'vagalume.js',
	},
	radiooooo: {
		label: 'Radiooooo',
		matches: ['*://app.radiooooo.com/*', '*://mobile.radiooooo.com/*'],
		js: 'radiooooo.js',
	},
	letsloop: {
		label: 'LetsLoop',
		matches: ['*://letsloop.com/*'],
		js: 'letsloop.js',
	},
	mideastunes: {
		label: 'Mideast Tunes',
		matches: ['*://mideastunes.com/*', '*://map.mideastunes.com/*'],
		js: 'mideastunes.js',
	},
	rozhlas: {
		label: 'Český Rozhlas',
		matches: ['*://prehravac.rozhlas.cz/*'],
		js: 'rozhlas.js',
	},
	blocsonic: {
		label: 'blocSonic',
		matches: ['*://*.blocsonic.com/*'],
		js: 'blocsonic.js',
	},
	resonate: {
		label: 'Resonate',
		matches: ['*://stream.resonate.coop/*'],
		js: 'resonate.js',
	},
	kexp: {
		label: 'KEXP',
		matches: ['*://*.kexp.org/*'],
		js: 'kexp.js',
	},
	hotmixradio: {
		label: 'Hotmixradio.fr',
		matches: ['*://www.hotmixradio.fr/*'],
		js: 'hotmixradio.js',
	},
	'warp-aphextwin': {
		label: 'Aphex Twin',
		matches: ['*://aphextwin.warp.net/*'],
		js: 'warp-aphextwin.js',
	},
	zacharyseguin: {
		label: 'Zachary Seguin Music',
		matches: ['*://music.zacharyseguin.ca/*'],
		js: 'musickit.js',
	},
	joox: {
		label: 'Joox',
		matches: ['*://www.joox.com/*'],
		js: 'joox.js',
	},
	musish: {
		label: 'Musish',
		matches: ['*://musi.sh/*'],
		js: 'musickit.js',
	},
	'1001tracklists': {
		label: '1001tracklists',
		matches: ['*://www.1001tracklists.com/tracklist/*'],
		js: '1001tracklists.js',
	},
	'youtube-music': {
		label: 'YouTube Music',
		matches: ['*://music.youtube.com/*'],
		js: 'youtube-music.js',
	},
	radiozenders: {
		label: 'Radiozenders.FM',
		matches: ['*://www.radiozenders.fm/*'],
		js: 'radiozenders.js',
	},
	invidious: {
		label: 'Invidious',
		matches: ['*://*.invidio.us/*'],
		js: 'invidious.js',
	},
	piped: {
		label: 'Piped',
		matches: ['*://piped.video/*'],
		js: 'piped.js',
	},
	pretzel: {
		label: 'Pretzel',
		matches: ['*://*.pretzel.rocks/*'],
		js: 'pretzel.js',
	},
	primordialradio: {
		label: 'Primordial Radio',
		matches: ['*://primordialradio.com/*'],
		js: 'primordialradio.js',
	},
	kyivstar: {
		label: 'Radio Kyivstar',
		matches: ['*://radio.kyivstar.ua/*'],
		js: 'kyivstar.js',
	},
	funkwhale: {
		label: 'Funkwhale',
		js: 'funkwhale.js',
	},
	'9128.live': {
		label: '9128.live',
		matches: ['*://9128.live/*', '*://embed.radio.co/player/*'],
		js: 'radioco.js',
		allFrames: true,
	},
	radioco: {
		label: 'Radio.co',
		matches: ['*://embed.radio.co/player/*'],
		js: 'radioco.js',
	},
	super45fm: {
		label: 'Super45.fm',
		matches: ['*://super45.fm/'],
		js: 'radioco.js',
		allFrames: true,
	},
	'r-a-d.io': {
		label: 'R/a/dio',
		matches: ['*://r-a-d.io/*'],
		js: 'r-a-d.io.js',
	},
	'apple-music': {
		label: 'Apple Music',
		matches: ['*://*music.apple.com/*'],
		js: 'musickit.js',
	},
	primephonic: {
		label: 'Primephonic',
		matches: ['*://play.primephonic.com/*'],
		js: 'primephonic.js',
	},
	watch2gether: {
		label: 'Watch2Gether',
		matches: ['*://w2g.tv/*'],
		js: 'watch2gether.js',
	},
	poolsuite: {
		label: 'Poolsuite',
		matches: ['*://poolsuite.net/*'],
		js: 'poolsuite.js',
	},
	gds: {
		label: 'GDS.FM',
		matches: ['*://www.gds.fm/*', '*://gds.fm/*'],
		js: 'gds.fm.js',
	},
	wynk: {
		label: 'Wynk Music',
		matches: ['*://wynk.in/music*'],
		js: 'wynk.js',
	},
	radiojavan: {
		label: 'RadioJavan',
		matches: ['*://play.radiojavan.com/*'],
		js: 'radiojavan.js',
	},
	audiomack: {
		label: 'Audiomack',
		matches: ['*://audiomack.com/*'],
		js: 'audiomack.js',
	},
	globalplayer: {
		label: 'Global Player',
		matches: ['*://www.globalplayer.com/*'],
		js: 'globalplayer.js',
	},
	thecurrent: {
		label: 'The Current',
		matches: ['*://www.thecurrent.org/*'],
		js: 'thecurrent.js',
	},
	panyrosasdiscos: {
		label: 'pan y rosas discos',
		matches: ['*://www.panyrosasdiscos.net/*'],
		js: 'panyrosasdiscos.js',
	},
	grrif: {
		label: 'GRRIF',
		matches: ['*://*.grrif.ch/*'],
		js: 'grrif.js',
	},
	newgrounds: {
		label: 'newgrounds',
		matches: ['*://www.newgrounds.com/audio*'],
		js: 'newgrounds.js',
	},
	jango: {
		label: 'Jango',
		matches: ['*://www.jango.com/*'],
		js: 'jango.js',
	},
	playirish: {
		label: 'PlayIrish',
		matches: ['*://*.playirish.ie/*'],
		js: 'playirish.js',
	},
	radiorecord: {
		label: 'Radio Record',
		matches: ['*://www.radiorecord.ru/*'],
		js: 'radiorecord.js',
	},
	imago: {
		label: 'Imago Radio',
		matches: ['*://*.imago.fm/*'],
		js: 'imago.js',
	},
	'provoda.ch': {
		label: 'Provoda.ch',
		matches: ['*://*.provoda.ch/*'],
		js: 'provoda.ch.js',
	},
	'atomicmusic.space': {
		label: 'Atomic Music Space',
		matches: ['*://stream.atomicmusic.space/*'],
		js: 'atomicmusic.space.js',
	},
	'the-radio.ru': {
		label: 'The-radio.ru',
		matches: ['*://the-radio.ru/*'],
		js: 'the-radio.ru.js',
	},
	hqradio: {
		label: 'HQ Radio',
		matches: ['*://hqradio.ru/*'],
		js: 'hqradio.js',
	},
	smoothfm: {
		label: 'Smooth FM',
		matches: ['*://smoothfm.iol.pt/*'],
		js: 'smoothfm.js',
	},
	vodafonefm: {
		label: 'Vodafone.fm',
		matches: ['*://vodafone.fm/*'],
		js: 'vodafone.fm.js',
	},
	relisten: {
		label: 'Relisten.net',
		matches: ['*://relisten.net/*'],
		js: 'relisten.js',
	},
	upbeatradio: {
		label: 'UpBeatRadio',
		matches: ['*://upbeatradio.net/*'],
		js: 'upbeatradio.js',
	},
	chillhop: {
		label: 'Chillhop',
		matches: ['*://chillhop.com/*'],
		js: 'chillhop.js',
	},
	'chillhop-radio': {
		label: 'Chillhop Radio',
		matches: ['*://app.chillhop.com/*'],
		js: 'chillhop-radio.js',
	},
	datpiff: {
		label: 'DatPiff',
		matches: ['*://www.datpiff.com/player/*'],
		js: 'datpiff.js',
		allFrames: true,
	},
	shuffleone: {
		label: 'Shuffle',
		matches: ['*://shuffle.one/play*'],
		js: 'shuffleone.js',
	},
	jbfm: {
		label: 'JB FM',
		matches: ['*://jb.fm/player/*'],
		js: 'jb.fm.js',
	},
	sectorradio: {
		label: 'SECTOR Radio',
		matches: ['*://sectorradio.ru/*'],
		js: 'sectorradio.js',
	},
	liveone: {
		label: 'LiveOne',
		matches: ['*://*.liveone.com/*'],
		js: 'liveone.js',
	},
	pocketcasts: {
		label: 'PocketCasts',
		matches: ['*://play.pocketcasts.com/*'],
		js: 'pocketcasts.js',
	},
	clyp: {
		label: 'Clyp',
		matches: ['*://clyp.it/*'],
		js: 'clyp.js',
	},
	rtbf: {
		label: 'RTBF Radio',
		matches: ['*://www.rtbf.be/radio/*'],
		js: 'rtbf.js',
	},
	tunetrack: {
		label: 'TuneTrack',
		matches: ['*://tunetrack.net/*'],
		js: 'tunetrack.js',
	},
	musify: {
		label: 'Musify',
		matches: ['*://*.musify.club/*'],
		js: 'musify.js',
	},
	radiorethink: {
		label: 'Radio Rethink',
		matches: ['*://www.radiorethink.com/*'],
		js: 'radiorethink.js',
	},
	soundclick: {
		label: 'SoundClick',
		matches: ['*://www.soundclick.com/*'],
		js: 'soundclick.js',
	},
	napster: {
		label: 'Napster',
		matches: ['*://app.napster.com/*'],
		js: 'napster.js',
	},
	abcnetau: {
		label: 'abc.net.au',
		matches: ['*://www.abc.net.au/*/*live*/*'],
		js: 'abc.net.au.js',
	},
	jqbx: {
		label: 'JQBX',
		matches: ['*://app.jqbx.fm/*'],
		js: 'jqbx.js',
	},
	jsososo: {
		label: 'music.jsososo.com',
		matches: ['*://y.jsososo.com/*', '*://music.jsososo.com/*'],
		js: 'jsososo.js',
	},
	supla: {
		label: 'Supla',
		matches: ['*://*.supla.fi/*'],
		js: 'supla.js',
	},
	swr3: {
		label: 'swr3',
		matches: ['*://www.swr3.de/*', '*://www.swr.de/*'],
		js: 'swr3.js',
	},
	epidemicsound: {
		label: 'Epidemic Sound',
		matches: ['*://*.epidemicsound.com/*'],
		js: 'epidemicsound.js',
	},
	rektnetwork: {
		label: 'Rekt Network',
		matches: ['*://rekt.network/*'],
		js: 'rekt.network.js',
	},
	nightridefm: {
		label: 'Nightride FM',
		matches: ['*://nightride.fm/*'],
		js: 'nightride.fm.js',
	},
	qobuz: {
		label: 'Qobuz',
		matches: ['*://*.qobuz.com/*'],
		js: 'qobuz.js',
	},
	truckersfm: {
		label: 'TruckersFM',
		matches: ['*://*.truckers.fm/*'],
		js: 'truckersfm.js',
	},
	winampify: {
		label: 'Winampify',
		js: 'winampify.js',
		matches: ['*://winampify.io/*'],
	},
	detektorfm: {
		label: 'detektor.fm',
		matches: ['*://detektor.fm/*'],
		js: 'detektorfm.js',
	},
	ibroadcast: {
		label: 'iBroadcast',
		matches: ['*://media.ibroadcast.com/*'],
		js: 'ibroadcast.js',
	},
	radio7lv: {
		label: 'Radio7',
		matches: ['*://radio7.lv/*'],
		js: 'radio7.js',
	},
	radionemiers: {
		label: 'Radio Nemiers',
		matches: ['*://radionemiers.com/*'],
		js: 'radionemiers.js',
	},
	towerrecordsmusic: {
		label: 'TOWER RECORDS MUSIC',
		matches: ['*://music.tower.jp/*'],
		js: 'towerrecordsmusic.js',
	},
	eggs: {
		label: 'Eggs',
		matches: ['*://eggs.mu/*'],
		js: 'eggs.js',
	},
	jamstash: {
		label: 'Jamstash',
		matches: ['*://jamstash.com/*'],
		js: 'jamstash.js',
	},
	subfire: {
		label: 'SubFire',
		matches: ['*://p.subfireplayer.net/*'],
		js: 'subfire.js',
	},
	idagio: {
		label: 'Idagio',
		matches: ['*://app.idagio.com/*'],
		js: 'idagio.js',
	},
	relaxfm: {
		label: 'Relax FM',
		matches: ['*://relax-fm.ru/*'],
		js: 'relaxfm.js',
	},
	'laut.fm': {
		label: 'Laut.fm',
		matches: ['*://laut.fm/*'],
		js: 'laut.fm.js',
	},
	magnatune: {
		label: 'Magnatune',
		matches: ['*://magnatune.com/*'],
		js: 'magnatune.js',
	},
	librefm: {
		label: 'Libre.fm',
		matches: ['*://libre.fm/*'],
		js: 'librefm.js',
	},
	brainfm: {
		label: 'Brain.fm',
		matches: ['*://my.brain.fm/*'],
		js: 'brainfm.js',
	},
	bullofheavencom: {
		label: 'bullofheaven.com',
		matches: ['*://bullofheaven.com/*'],
		js: 'bullofheaven.com.js',
	},
	allclassicalportland: {
		label: 'All Classical Portland',
		matches: ['*://player.allclassical.org/*'],
		js: 'allclassical.org.js',
	},
	'migu-music': {
		label: 'Migu Music',
		matches: ['*://music.migu.cn/*'],
		js: 'migu-music.js',
	},
	weibo: {
		label: 'Weibo',
		matches: ['*://weibo.com/*', '*://*.weibo.com/*'],
		js: 'weibo.js',
	},
	streetvoice: {
		label: 'Street Voice',
		matches: ['*://streetvoice.cn/*', '*://streetvoice.com/*'],
		js: 'streetvoice.js',
	},
	redbull: {
		label: 'Red Bull',
		matches: ['*://www.redbull.com/*'],
		js: 'redbull.js',
	},
	synology: {
		label: 'Synology',
		matches: [
			'*://*5000/*',
			'*://*5001/*',
			'*://*/?launchApp=SYNO.SDS.AudioStation.Application*',
		],
		js: 'synology.js',
	},
	ragya: {
		label: 'Ragya',
		matches: ['*://www.ragya.com/*'],
		js: 'ragya.js',
	},
	coderadio: {
		label: 'CodeRadio',
		matches: ['*://coderadio.freecodecamp.org/*'],
		js: 'coderadio.js',
	},
	dashradio: {
		label: 'LITT Live',
		matches: ['*://littlive.com/*'],
		js: 'littlive.js',
	},
	nicovideo: {
		label: 'Niconico',
		matches: ['*://www.nicovideo.jp/*'],
		js: 'nicovideo.js',
	},
	zvuk: {
		label: 'Звук',
		matches: ['*://zvuk.com/*'],
		js: 'zvuk.js',
	},
	navidrome: {
		label: 'Navidrome',
		js: 'navidrome.js',
	},
	lms: {
		label: 'LMS',
		js: 'lms.js',
	},
	'deepcut.fm': {
		label: 'deep-cut.fm',
		matches: [
			'*://deepcut.fm/*',
			'*://turntable.fm/*',
			'*://deep-cut.fm/*',
			'*://deepcuts.fm/*',
		],
		js: 'deep-cut.fm.js',
	},
	burntable: {
		label: 'Burntable',
		matches: ['*://*.burntable.com/*'],
		js: 'burntable.js',
	},
	stingray: {
		label: 'Stingray Music',
		matches: ['*://*.stingray.com/*'],
		js: 'stingray.js',
	},
	cbcmusic: {
		label: 'CBC Music',
		matches: ['*://www.cbc.ca/listen/cbc-music-playlists*'],
		js: 'cbcmusic.js',
	},
	indie88: {
		label: 'Indie88',
		matches: [
			'*://indie88.com/lean-stream-player/*',
			'*://cob.leanplayer.com/CINDFM*',
		],
		js: 'indie88.js',
	},
	'playlist-randomizer': {
		label: 'Playlist Randomizer',
		matches: [
			'*://www.playlist-randomizer.com/*',
			'*://playlist-randomizer.com/*',
		],
		js: 'playlist-randomizer.js',
	},
	queup: {
		label: 'QueUp',
		matches: ['*://www.queup.net/*'],
		js: 'queup.js',
	},
	live365: {
		label: 'Live 365',
		matches: ['*://*.live365.com/*'],
		js: 'live365.js',
	},
	'lounge.fm': {
		label: 'Lounge.fm',
		matches: ['*://www.lounge.fm/*'],
		js: 'lounge.fm.js',
	},
	eulerbeats: {
		label: 'EulerBeats',
		matches: ['*://eulerbeats.com/*'],
		js: 'eulerbeats.js',
	},
	'filmmusic.io': {
		label: 'FilmMusic.io',
		matches: ['*://*.filmmusic.io/*'],
		js: 'filmmusic.io.js',
	},
	'xteam-radio': {
		label: 'X-Team Radio',
		matches: ['*://radio.x-team.com/*'],
		js: 'xteam-radio.js',
	},
	calm: {
		label: 'Calm',
		matches: ['*://*.calm.com/*'],
		js: 'calm.js',
	},
	keakie: {
		label: 'Keakie',
		matches: ['*://*.keakie.com/*'],
		js: 'keakie.js',
	},
	kkbox: {
		label: 'KKBOX',
		matches: ['*://*play.kkbox.com/*'],
		js: 'kkbox.js',
	},
	thrilljockey: {
		label: 'Thrill Jockey',
		matches: ['*://thrilljockey.com/products/*'],
		js: 'thrilljockey.js',
	},
	horizontecl: {
		label: 'Radio Horizonte',
		matches: ['*://horizonte.cl/*'],
		js: 'mediastream.js',
	},
	sonarfmcl: {
		label: 'Sonar FM',
		matches: ['*://sonarfm.cl/*'],
		js: 'mediastream.js',
	},
	playfmcl: {
		label: 'Play FM',
		matches: ['*://playfm.cl/*'],
		js: 'mediastream.js',
	},
	wkmradio: {
		label: 'WKM Radio',
		matches: ['*://www.wkmradio.com/*'],
		js: 'mediastream.js',
	},
	rockaxis: {
		label: 'Rockaxis',
		matches: ['*://www.rockaxis.com/*'],
		js: 'mediastream.js',
	},
	rockandpopcl: {
		label: 'Rock&Pop Chile',
		matches: ['*://www.rockandpop.cl/*'],
		js: 'rockandpopcl.js',
	},
	wyep: {
		label: 'WYEP',
		matches: ['*://wyep.org/*'],
		js: 'wyep.js',
	},
	zeno: {
		label: 'ZENO',
		matches: ['*://*zeno.fm/*'],
		js: 'zeno.js',
	},
	naxosmusiclibrary: {
		label: 'Naxos Music Library',
		matches: ['*://*.naxosmusiclibrary.com/*'],
		js: 'naxosmusiclibrary.js',
	},
	klassikradio: {
		label: 'Klassik Radio',
		matches: ['*://*klassikradio.de/*'],
		js: 'klassikradio.de.js',
	},
	beetle: {
		label: 'Beetle',
		js: 'beetle.js',
	},
	refnet: {
		label: 'RefNet',
		matches: ['*://listen.refnet.fm/*'],
		js: 'refnet.js',
	},
	'auborddeleau.radio': {
		label: "La Radio du bord de l'eau",
		matches: ['*://*auborddeleau.radio/*'],
		js: 'auborddeleau.radio.js',
		allFrames: true,
	},
	'willy.radio': {
		label: 'Radio Willy',
		matches: ['*://*willy.radio/player/willy/*'],
		js: 'willy.radio.js',
	},
	'night.fm': {
		label: 'NIGHT.FM',
		matches: ['*://*night.fm/*'],
		js: 'night.fm.js',
	},
	nowyswiat: {
		label: 'Radio Nowy Swiat',
		matches: ['*://nowyswiat.online/*'],
		js: 'nowyswiat.js',
	},
	radiolla: {
		label: 'Radiolla',
		matches: ['*://*radiolla.com/*'],
		js: 'radiolla.js',
	},
	'oxigenio.fm': {
		label: 'Oxigenio.fm',
		matches: ['*://*oxigenio.fm/*'],
		js: 'oxigenio.fm.js',
	},
	'intergalactic.fm': {
		label: 'Intergalactic FM',
		matches: ['*://*intergalactic.fm/*'],
		js: 'intergalacticfm.js',
	},
	radiocuca: {
		label: 'Radio Cuca',
		matches: ['*://*radiocuca.es/*'],
		js: 'radiocuca.js',
	},
	iramanusantara: {
		label: 'Irama Nusantara',
		matches: ['*://*.iramanusantara.org/*'],
		js: 'iramanusantara.js',
	},
	'yammat.fm': {
		label: 'Yammat FM',
		matches: ['*://*yammat.fm/*'],
		js: 'yammat.fm.js',
	},
	huskrecordings: {
		label: 'Husk Recordings',
		matches: ['*://huskrecordings.com/music/*'],
		js: 'huskrecordings.js',
	},
	nugs: {
		label: 'nugs.net',
		matches: ['*://play.nugs.net/*'],
		js: 'nugs.js',
	},
	'livephish.com': {
		label: 'livephish.com',
		matches: ['*://plus.livephish.com/*'],
		js: 'livephish.js',
	},
	'music.ishkur.com': {
		label: "Ishkur's Guide to Electronic Music",
		matches: ['*://music.ishkur.com/*'],
		js: 'ishkur.js',
	},
	nonoki: {
		label: 'Nonoki',
		matches: ['*://nonoki.com/music/*'],
		js: 'nonoki.js',
	},
	beatbump: {
		label: 'Beatbump',
		matches: ['*://beatbump.io/*'],
		js: 'beatbump.js',
	},
	linemusic: {
		label: 'LINE MUSIC',
		matches: ['*://music.line.me/*'],
		js: 'line-music.js',
	},
	kcrw: {
		label: 'KCRW',
		matches: ['*://www.kcrw.com/*'],
		js: 'kcrw.js',
	},
	worldfusionradio: {
		label: 'World Fusion Radio',
		matches: ['*://worldfusionradio.com/*'],
		js: 'worldfusionradio.js',
	},
	hardtunes: {
		label: 'Hardtunes',
		matches: [
			'*://www.hard-tunes.de/*',
			'*://www.hardtunes.com/*',
			'*://www.hardtunes.fr/*',
			'*://www.hardtunes.it/*',
			'*://www.hardtunes.nl/*',
		],
		js: 'hardtunes.js',
	},
	kinknl: {
		label: 'KINK',
		matches: ['*://kink.nl/player', '*://kink.nl/player/*'],
		js: 'kinknl.js',
	},
	jazzgroove: {
		label: 'The Jazz Groove',
		matches: ['*://jazzgroove.org/*'],
		js: 'jazzgroove.js',
	},
	xrayfm: {
		label: 'XRAY.FM',
		matches: ['*://*.xray.fm/*'],
		js: 'xrayfm.js',
	},
	decayfm: {
		label: 'DKFM Shoegaze Radio',
		matches: ['*://decayfm.com/*'],
		js: 'decayfm.js',
	},
	qcindie: {
		label: 'QCIndie',
		matches: ['*://www.qcindie.com/listen-live/*'],
		js: 'qcindie.js',
	},
	cpr: {
		label: 'Colorado Public Radio',
		matches: ['*://www.cpr.org/*'],
		js: 'cpr.js',
	},
	'cpr-indie': {
		label: 'Indie 102.3',
		matches: ['*://indie.cpr.org/'],
		js: 'cpr-indie.js',
	},
	xpn: {
		label: 'WXPN',
		matches: ['*://xpn.org/*'],
		js: 'xpn.js',
	},
	friskyfm: {
		label: 'FRISKY',
		matches: ['*://*.frisky.fm/*'],
		js: 'friskyfm.js',
	},
	gotradio: {
		label: 'GotRadio',
		matches: ['*://player.gotradio.com/*'],
		js: 'gotradio.js',
	},
	lightningstream: {
		label: 'LightningStream',
		matches: [
			'*://*.lightningstream.com/Player*',
			'*://*.lightningstream.com/player*',
		],
		js: 'lightningstream.js',
	},
	securenetsystems: {
		label: 'Securenet Systems',
		matches: [
			'*://radio.securenetsystems.net/*',
			'*://stream*.securenetsystems.net/*',
		],
		js: 'securenetsystems.js',
	},
	wbru: {
		label: 'WBRU',
		matches: ['*://www.wbru.com/*'],
		js: 'radioco.js',
		allFrames: true,
	},
	'uwu-radio': {
		label: 'uwu radio',
		matches: ['*://radio.uwu.network/*'],
		js: 'uwu-radio.js',
	},
	mystreamplayer: {
		label: 'MyStreamPlayer',
		matches: ['*://*.mystreamplayer.com/*'],
		js: 'mystreamplayer.js',
	},
	bagelradio: {
		label: 'BagelRadio',
		matches: ['*://*.bagelradio.com/*'],
		js: 'mystreamplayer.js',
		allFrames: true,
	},
	amazingradio: {
		label: 'Amazing Radio',
		matches: ['*://amazingradio.com/*', '*://amazingradio.us/*'],
		js: 'amazingradio.js',
	},
	'dr-lyd': {
		label: 'DR Lyd',
		matches: ['*://www.dr.dk/lyd*'],
		js: 'dr-lyd.js',
	},
	lulufm: {
		label: 'lulu.fm',
		matches: ['*://*lulu.fm/*'],
		js: 'lulu.fm.js',
	},
	rockantenne: {
		label: 'ROCK ANTENNE',
		matches: ['*://*rockantenne.*/webradio/*'],
		js: 'rockantenne.js',
	},
	copyparty: {
		label: 'copyparty',
		matches: ['*://127.0.0.1:3923/*', '*://a.ocv.me/*'],
		js: 'copyparty.js',
	},
	fungjai: {
		label: 'Fungjai',
		matches: ['*://*.fungjai.com/*'],
		js: 'fungjai.js',
	},
	radcap: {
		label: 'Radio Caprice',
		matches: ['*://radcap.ru/*'],
		js: 'radcap.js',
	},
	trackerhub: {
		label: 'TrackerHub',
		matches: ['*://trackerhub.vercel.app/*', '*://trackerhub.cx/*'],
		js: 'trackerhub.js',
	},
	gensokyoradio: {
		label: 'Gensokyo Radio',
		matches: ['*://gensokyoradio.net/*'],
		js: 'gensokyoradio.js',
	},
	stationhead: {
		label: 'Stationhead',
		matches: ['*://*stationhead.com/*'],
		js: 'stationhead.js',
	},
	'technobase.fm': {
		label: 'TECHNOBASE.FM',
		matches: [
			'*://*technobase.fm/*',
			'*://*housetime.fm/*',
			'*://*hardbase.fm/*',
			'*://*trancebase.fm/*',
			'*://*coretime.fm/*',
			'*://*clubtime.fm/*',
			'*://*teatime.fm/*',
			'*://*replay.fm/*',
		],
		js: 'technobase.fm.js',
	},
	'telegram-a': {
		label: 'Telegram A',
		matches: ['*://web.telegram.org/a/*'],
		js: 'telegram-a.js',
	},
	'telegram-k': {
		label: 'Telegram K',
		matches: ['*://web.telegram.org/k/*'],
		js: 'telegram-k.js',
	},
	'tunegenie-embed': {
		label: 'TuneGenieEmbed',
		matches: ['*://b3.tunegenie.com/*'],
		js: 'tunegenie-embed.js',
		allFrames: true,
	},
	tunegenie: {
		label: 'TuneGenie',
		matches: ['*://*.tunegenie.com/*'],
		js: 'tunegenie.js',
	},
	'rtl-plus-musik': {
		label: 'RTL+ Musik',
		matches: ['*://plus.rtl.de/*'],
		js: 'rtl-plus-musik.js',
	},
	tomorrowland: {
		label: 'Tomorrowland',
		matches: ['*://www.tomorrowland.com/*'],
		js: 'tomorrowland.js',
	},
	'hearthis-at': {
		label: 'hearthis.at',
		matches: ['*://hearthis.at/*'],
		js: 'hearthis-at.js',
	},
	blend: {
		label: 'Blend',
		matches: ['*://blend.io/*'],
		js: 'blend.js',
	},
	'radio-italia': {
		label: 'Radio Italia',
		matches: ['*://www.radioitalia.it/*'],
		js: 'radio-italia.js',
	},
	'lyden-av-norge': {
		label: 'Lyden av Norge',
		matches: ['*://www.lydenavnorge.no/*'],
		js: 'lyden-av-norge.js',
	},
	'audio-com': {
		label: 'audio.com',
		matches: ['*://audio.com/*'],
		js: 'audio.js',
	},
	afrocharts: {
		label: 'AfroCharts',
		matches: ['*://*.afrocharts.com/*'],
		js: 'afrocharts.js',
	},
	'ed-banger-records': {
		label: 'Ed Banger Records',
		matches: ['*://*.edbangerrecords.com/*'],
		js: 'ed-banger-records.js',
	},
	hyperpipe: {
		label: 'Hyperpipe',
		matches: ['*://hyperpipe.surge.sh/*'],
		js: 'hyperpipe.js',
	},
	radiofreccia: {
		label: 'Radiofreccia',
		matches: ['*://play.rtl.it/live/*'],
		js: 'radiofreccia.js',
	},
	khinsider: {
		label: 'khinsider',
		matches: ['*://downloads.khinsider.com/*'],
		js: 'khinsider.js',
	},
	wdr: {
		label: 'WDR',
		matches: ['*://*.wdr.de/radio/*'],
		js: 'wdr.js',
	},
	radiode: {
		label: 'radio.de',
		matches: ['*://www.radio.de/*', '*://www.radio.net/*'],
		js: 'radio.de.js',
	},
	fmspins: {
		label: 'FMSpins',
		matches: ['*://*.fmspins.com/*'],
		js: 'fmspins.js',
	},
	'vk-save': {
		label: 'vk-save',
		matches: ['*://*.vk-save.com/*'],
		js: 'vk-save.js',
	},
	radiostudent: {
		label: 'Radio Student',
		matches: ['*://www.radiostudent.hr/*'],
		js: 'radiostudent.js',
	},
	bilibili: {
		label: 'BiliBili',
		matches: ['*://www.bilibili.com/*'],
		js: 'bilibili.js',
		usesBlocklist: true,
	},
	'jam.coop': {
		label: 'jam.coop',
		matches: ['*://jam.coop/*'],
		js: 'jam.coop.js',
	},
	zingmp3: {
		label: 'Zing MP3',
		matches: ['*://zingmp3.vn/*'],
		js: 'zingmp3.js',
	},
	nts: {
		label: 'NTS',
		matches: ['*://*nts.live/*'],
		js: 'nts.js',
	},
	earthfm: {
		label: 'earth.fm',
		matches: ['*://earth.fm/*'],
		js: 'earth.fm.js',
	},
	'apt-get-tunes': {
		label: "apt-get's auditorium",
		matches: ['*://tunes.apt-get.xyz/*'],
		js: 'apt-get-tunes.js',
	},
	azuracast: {
		label: 'AzuraCast',
		js: 'azuracast.js',
	},
	scrobbleradio: {
		label: 'scrobblerad.io',
		matches: ['*://scrobblerad.io/*'],
		js: 'scrobbleradio.js',
	},
	weareone: {
		label: 'weareone.fm',
		matches: ['*://weareone.fm/*'],
		js: 'weareone.js',
	},
	bollerwagen: {
		label: 'Bollerwagen',
		matches: ['*://radiobollerwagen.de/*'],
		js: 'bollerwagen.js',
	},
	'mts-music': {
		label: 'МТС Музыка',
		matches: ['*://music.mts.ru/*'],
		js: 'mts-music.js',
	},
	chirpradio: {
		label: 'ChirpRadio',
		matches: ['*://chirpradio.org/*'],
		js: 'chirpradio.js',
	},
	onlyhit: {
		label: 'OnlyHit',
		matches: ['*://onlyhit.us/*'],
		js: 'onlyhit.js',
	},
	instantaudio: {
		label: 'InstantAudio',
		matches: [
			'*://instant.audio/*',
			// North America
			'*://radiosdecuba.com/*',
			'*://radio.ht/*',
			'*://jamaicaradio.net/*',
			'*://emisoras.com.mx/*',
			'*://radiosdepuertorico.com/*',
			'*://radios.com.do/*',
			'*://trinidadradiostations.net/*',
			// Central America
			'*://radios.co.cr/*',
			'*://radios.com.sv/*',
			'*://emisoras.com.gt/*',
			'*://radios.hn/*',
			'*://radios.co.ni/*',
			'*://radios.com.pa/*',
			// South America
			'*://radioarg.com/*',
			'*://radios.com.bo/*',
			'*://radiosaovivo.net/*',
			'*://emisora.cl/*',
			'*://radios.com.co/*',
			'*://radios.com.ec/*',
			'*://emisoras.com.py/*',
			'*://radios.com.pe/*',
			'*://surinaamseradio.com/*',
			'*://radios.com.uy/*',
			'*://radio.co.ve/*',
			// Europe
			'*://radiosonline.be/*',
			'*://ceskaradiaonline.cz/*',
			'*://radio.co.dk/*',
			'*://radiolisten.de/*',
			'*://raadiod.com/*',
			'*://emisora.org.es/*',
			'*://ecouterradioenligne.com/*',
			'*://radiofona.com.gr/*',
			'*://radios.hr/*',
			'*://ieradio.org/*',
			'*://ascoltareradio.com/*',
			'*://latvijasradio.com/*',
			'*://radios.lu/*',
			'*://radijas.org/*',
			'*://radiohallgatas.hu/*',
			'*://nederlandseradio.nl/*',
			'*://nettradionorge.com/*',
			'*://radios.co.at/*',
			'*://onlineradio.pl/*',
			'*://radioonline.com.pt/*',
			'*://radio.org.ro/*',
			'*://radiosonline.ch/*',
			'*://siradio.si/*',
			'*://radiostanice.rs/*',
			'*://nettiradiot.org/*',
			'*://radio.org.se/*',
			'*://internetradiouk.com/*',
			'*://bg-radio.org/*',
			'*://radio.pp.ru/*',
			'*://radioua.net/*',
			// Africa
			'*://radioalgerie.eu/*',
			'*://radio.co.cm/*',
			'*://radio.cd/*',
			'*://radio.co.ci/*',
			'*://radio.com.gh/*',
			'*://radio.or.ke/*',
			'*://radio.mg/*',
			'*://radio.co.ma/*',
			'*://egyptradio.net/*',
			'*://radio.org.ng/*',
			'*://radio.sn/*',
			'*://radiosa.org/*',
			'*://radiotunisienne.org/*',
			'*://radio.co.ug/*',
			// Asia
			'*://radio-bd.com/*',
			'*://radioonline.kr/*',
			'*://radios.hk/*',
			'*://onlineradios.in/*',
			'*://radioonline.co.id/*',
			'*://radioonline.my/*',
			'*://radionp.com/*',
			'*://jpradio.jp/*',
			'*://radio.net.pk/*',
			'*://radio.org.ph/*',
			'*://radiosingapore.org/*',
			'*://radio.com.lk/*',
			'*://vietnamradio.org/*',
			'*://radios.org.il/*',
			'*://radioth.net/*',
			'*://zhibo.fm/*',
			'*://radios.tw/*',
			// Oceania
			'*://radioau.net/*',
			'*://radio.org.nz/*',
		],
		js: 'instantaudio.js',
	},
	basspistol: {
		label: 'Basspistol Radio',
		matches: ['*://*.basspistol.com/*'],
		js: 'basspistol.js',
	},
	radiofreefedi: {
		label: 'RadioFreeFedi',
		matches: ['*://radiofreefedi.net/*'],
		js: 'radiofreefedi.js',
	},
	mytuner: {
		label: 'MyTuner',
		matches: ['*://mytuner-radio.com/*'],
		js: 'mytuner.js',
	},
	mirlo: {
		label: 'Mirlo',
		matches: ['*://mirlo.space/*'],
		js: 'mirlo.js',
	},
	simulatorradio: {
		label: 'Simulator Radio',
		matches: ['*://*.simulatorradio.com/*'],
		js: 'simulatorradio.js',
	},
	echo: {
		label: 'Echo',
		matches: ['*://echo.sleepyfran.me/*'],
		js: 'echo.js',
	},
	'tapes-kglw': {
		label: 'Gizz Tapes',
		matches: ['*://tapes.kglw.net/*'],
		js: 'tapes-kglw.js',
	},
	systrum: {
		label: 'Systrum Sistum Radio',
		matches: ['*://systrum.net/*'],
		js: 'systrum.js',
	},
	'cosine.club': {
		label: 'cosine.club',
		matches: ['*://cosine.club/*'],
		js: 'cosine.club.js',
	},
	theindiebeat: {
		label: 'The Indie Beat Radio',
		matches: ['*://theindiebeat.fm/*'],
		js: 'theindiebeat.js',
	},
	musiqueapproximative: {
		label: 'Musique Approximative',
		matches: ['*://*.musiqueapproximative.net/*'],
		js: 'musiqueapproximative.js',
	},
	suno: {
		label: 'Suno AI',
		matches: ['*://suno.com/*'],
		js: 'suno.js',
	},
	'[untitled]': {
		label: '[untitled]',
		matches: ['*://untitled.stream/*'],
		js: 'untitled.js',
	},
	dabmusic: {
		label: 'DAB Music Player',
		matches: ['*://dab.yeet.su/*', '*://dabmusic.xyz/*'],
		js: 'dabmusic.js',
	},
	gbs: {
		label: 'GBS-FM',
		matches: ['*://gbs.fm/*'],
		js: 'gbs.fm.js',
	},
	yumicoradio: {
		label: 'Yumi Co. Radio',
		matches: ['*://yumicoradio.net/*'],
		js: 'yumicoradio.js',
	},
	'kosmik-dstroyer': {
		label: 'Kosmik Dstroyer',
		matches: ['*://kosmik-dstroyer.top/*'],
		js: 'kosmik-dstroyer.js',
	},
	nonacademic: {
		label: 'LaTeX 4000',
		matches: ['*://nonacademic.net/*'],
		js: 'nonacademic.js',
	},
	gravity: {
		label: 'gravity.fm',
		matches: ['*://gravity.fm/*'],
		js: 'gravity.fm.js',
	},
	archaichorizon: {
		label: 'Archaic Horizon',
		matches: ['*://archaichorizon.com/*', '*://www.archaichorizon.com/*'],
		js: 'archaichorizon.js',
	},
	aonsoku: {
		label: 'Aonsoku',
		matches: ['*://aonsoku.vercel.app/*'],
		js: 'aonsoku.js',
	},
	'creamer-nation': {
		label: 'CREAMER NATION',
		matches: ['*://creamernation.men/*'],
		js: 'creamernation.js',
	},
	feishin: {
		label: 'Feishin',
		matches: ['*://feishin.vercel.app/*'],
		js: 'feishin.js',
	},
	ampwall: {
		label: 'Ampwall',
		matches: ['*://ampwall.com/*'],
		js: 'ampwall.js',
	},
	monochrome: {
		label: 'Monochrome',
		matches: [
			'*://monochrome.prigoana.com/*',
			'*://monochrome.tf/*',
			'*://monochrome.samidy.com/*',
			'*://monochrome-back.pages.dev/*',
		],
		js: 'monochrome.js',
	},
	weeklybeats: {
		label: 'WeeklyBeats',
		matches: ['*://weeklybeats.com/*'],
		js: 'weeklybeats.js',
	},
	xraydio: {
		label: 'XRaydio',
		matches: ['*://xraydio.net/*'],
		js: 'xraydio.js',
	},
	'cytu-be': {
		label: 'Cytu.be',
		matches: ['*://cytu.be/r/*'],
		js: 'cytu-be.js',
	},
	teleplay: {
		label: 'Telegram Audio Player',
		matches: ['*://teleplay.rv7.nl/*'],
		js: 'teleplay.js',
	},
	subvert: {
		label: 'Subvert.fm',
		matches: ['*://subvert.fm/*', '*://*.subvert.fm/*'],
		js: 'subvert.js',
	},
	debridvault: {
		label: 'Debrid Vault',
		matches: ['*://debridvault.elfhosted.com/*'],
		js: 'debridvault.js',
	},
	radioswissclassic: {
		label: 'Radio Swiss Classic',
		matches: [
			'*://www.radioswissclassic.ch/*',
			'*://www.radioswissjazz.ch/*',
			'*://www.radioswisspop.ch/*',
		],
		js: 'radioswissclassic.js',
	},
	'rockserwis.fm': {
		label: 'Rockserwis.fm',
		matches: ['*://rockserwis.fm/*'],
		js: 'rockserwis.fm.js',
	},
	bossajazzbrazil: {
		label: 'Bossa Jazz Brasil',
		matches: ['*://bossajazzbrasil.com/ouca-on-line/*'],
		js: 'bossajazzbrazil.js',
	},
	kiss: {
		label: 'Kiss rádio',
		matches: ['*://www.kiss.cz/online/*'],
		js: 'kiss.js',
	},
	radiosaw: {
		label: 'Radio SAW',
		matches: ['*://www.radiosaw.de/*'],
		js: 'radiosaw.js',
	},
	bandwagon: {
		label: 'bandwagon',
		matches: ['*://bandwagon.fm/*'],
		js: 'bandwagon.js',
	},
	meloradio: {
		label: 'Meloradio',
		matches: ['*://player.meloradio.pl/*'],
		js: 'meloradio.js',
	},
	'theindiebeat-tv': {
		label: 'The Indie Beat Television',
		matches: ['*://tv.theindiebeat.fm/*'],
		js: 'theindiebeat-owncast.js',
	},
	escradio: {
		label: 'escradio',
		matches: ['*://www.escradio.com/player/*'],
		js: 'escradio.js',
	},
	zxart: {
		label: 'zxART',
		matches: ['*://zxart.ee/*'],
		js: 'zxart.js',
	},
	'my-other-new-connector': {
		label: 'Site B',
		matches: ['*://a-site.b/*'],
		js: 'site-b.js',
	},
};
