const blockPosition = document.querySelector('.block-position');
const blockRole = document.querySelector('.block-role');
const blockRung = document.querySelector('.block-rung');
const blockAll = document.querySelector('.block-all');
const divChampions = document.querySelector('.champions');
const button = document.querySelectorAll('button');
const btnAll = document.getElementById('all');
const max = document.getElementById('max');
const noMax = document.getElementById('noMax');

let champions = [
	{
		name: 'Азир',
		rung: '2',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/azir.jpg)',
	},
	{
		name: 'Акали',
		rung: '1',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/akali.jpg)',
	},
	{
		name: 'Акшан',
		rung: '1',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/akshan.jpg)',
	},
	{
		name: 'Алистар',
		rung: '2',
		position: ['bot', 'top'],
		role: ['tank', 'support'],
		img: 'url(img/alistar.jpg)',
	},
	{
		name: 'Амуму',
		rung: '4',
		position: ['jungle', 'bot'],
		role: ['tank', 'support'],
		img: 'url(img/amumu.jpg)',
	},
	{
		name: 'Анивия',
		rung: '4',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/anivia.jpg)',
	},
	{
		name: 'Ари',
		rung: '4',
		position: ['mid', 'top', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/ahri.jpg)',
	},
	{
		name: 'Атрокс',
		rung: '1',
		position: ['top', 'mid'],
		role: ['fighter'],
		img: 'url(img/aatrox.jpg)',
	},
	{
		name: 'Аурелион Cол',
		rung: '1',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/aurelionsol.jpg)',
	},
	{
		name: 'Афелий',
		rung: '1',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/aphelios.jpg)',
	},
	{
		name: 'Бард',
		rung: '7',
		position: ['bot', 'mid', 'top'],
		role: ['support', 'apk'],
		img: 'url(img/bard.jpg)',
	},
	{
		name: 'Бел Вет',
		rung: '0',
		position: ['jungle'],
		role: ['fighter'],
		img: 'url(img/belveth.jpg)',
	},
	{
		name: 'Блицкранк',
		rung: '3',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/blitzcrank.jpg)',
	},
	{
		name: 'Браум',
		rung: '1',
		position: ['top', 'bot'],
		role: ['tank', 'support'],
		img: 'url(img/braum.jpg)',
	},
	{
		name: 'Брэнд',
		rung: '7',
		position: ['mid', 'bot', 'top'],
		role: ['apk', 'support'],
		img: 'url(img/brand.jpg)',
	},
	{
		name: 'Вай',
		rung: '1',
		position: ['jungle', 'top', 'mid', 'bot'],
		role: ['tank', 'fighter', 'support'],
		img: 'url(img/vi.jpg)',
	},
	{
		name: 'Варвик',
		rung: '6',
		position: ['jungle', 'top'],
		role: ['tank', 'fighter'],
		img: 'url(img/warwick.jpg)',
	},
	{
		name: 'Варус',
		rung: '5',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/varus.jpg)',
	},
	{
		name: 'Вейгар',
		rung: '7',
		position: ['mid', 'top', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/veigar.jpg)',
	},
	{
		name: 'Вейн',
		rung: '3',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/vayne.jpg)',
	},
	{
		name: 'Векс',
		rung: '2',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/vex.jpg)',
	},
	{
		name: 'Велкоз',
		rung: '4',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/velkoz.jpg)',
	},
	{
		name: 'Виего',
		rung: '1',
		position: ['jungle', 'top', 'mid'],
		role: ['fighter'],
		img: 'url(img/viego.jpg)',
	},
	{
		name: 'Виктор',
		rung: '3',
		position: ['mid', 'top', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/viktor.jpg)',
	},
	{
		name: 'Владимир',
		rung: '7',
		position: ['top', 'mid'],
		role: ['apk'],
		img: 'url(img/vladimir.jpg)',
	},
	{
		name: 'Волибир',
		rung: '2',
		position: ['top', 'jungle', 'bot', 'mid'],
		role: ['tank', 'fighter', 'support'],
		img: 'url(img/volibear.jpg)',
	},
	{
		name: 'Вуконг',
		rung: '3',
		position: ['top', 'mid', 'jungle'],
		role: ['fighter'],
		img: 'url(img/monkeyking.jpg)',
	},
	{
		name: 'Галио',
		rung: '7',
		position: ['mid', 'top', 'bot'],
		role: ['tank', 'apk'],
		img: 'url(img/galio.jpg)',
	},
	{
		name: 'Ганк Планк',
		rung: '7',
		position: ['top', 'mid'],
		role: ['fighter'],
		img: 'url(img/gangplank.jpg)',
	},
	{
		name: 'Гарен',
		rung: '3',
		position: ['top', 'mid'],
		role: ['tank', 'fighter'],
		img: 'url(img/garen.jpg)',
	},
	{
		name: 'Гвен',
		rung: '1',
		position: ['top', 'mid', 'jungle'],
		role: ['apk', 'fighter'],
		img: 'url(img/gwen.jpg)',
	},
	{
		name: 'Гекарим',
		rung: '1',
		position: ['jungle'],
		role: ['fighter'],
		img: 'url(img/hecarim.jpg)',
	},
	{
		name: 'Гнар',
		rung: '7',
		position: ['top', 'mid'],
		role: ['tank', 'fighter'],
		img: 'url(img/gnar.jpg)',
	},
	{
		name: 'Грагас',
		rung: '3',
		position: ['top', 'mid', 'bot', 'jungle'],
		role: ['tank', 'apk', 'support'],
		img: 'url(img/gragas.jpg)',
	},
	{
		name: 'Грейвз',
		rung: '3',
		position: ['top', 'mid', 'bot', 'jungle'],
		role: ['adk'],
		img: 'url(img/graves.jpg)',
	},
	{
		name: 'Дариус',
		rung: '7',
		position: ['top', 'mid'],
		role: ['fighter', 'tank'],
		img: 'url(img/darius.jpg)',
	},
	{
		name: 'Джакс',
		rung: '2',
		position: ['top', 'mid', 'jungle'],
		role: ['fighter', 'tank'],
		img: 'url(img/jax.jpg)',
	},
	{
		name: 'Джарван',
		rung: '1',
		position: ['top', 'mid', 'jungle'],
		role: ['fighter', 'tank'],
		img: 'url(img/jarvaniv.jpg)',
	},
	{
		name: 'Джейс',
		rung: '4',
		position: ['top', 'mid'],
		role: ['fighter'],
		img: 'url(img/jayce.jpg)',
	},
	{
		name: 'Джин',
		rung: '2',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/jhin.jpg)',
	},
	{
		name: 'Джинкс',
		rung: '3',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/jinx.jpg)',
	},
	{
		name: 'Диана',
		rung: '1',
		position: ['mid', 'top', 'jungle'],
		role: ['assasin', 'apk'],
		img: 'url(img/diana.jpg)',
	},
	{
		name: 'Доктор Мундо',
		rung: '7',
		position: ['top', 'mid', 'bot'],
		role: ['tank', 'fighter', 'support'],
		img: 'url(img/drmundo.jpg)',
	},
	{
		name: 'Дрейвен',
		rung: '7',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/draven.jpg)',
	},
	{
		name: 'Ёнэ',
		rung: '6',
		position: ['mid', 'top'],
		role: ['fighter'],
		img: 'url(img/yone.jpg)',
	},
	{
		name: 'Жанна',
		rung: '4',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/janna.jpg)',
	},
	{
		name: 'Зайра',
		rung: '4',
		position: ['mid', 'top', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/zyra.jpg)',
	},
	{
		name: 'Зак',
		rung: '2',
		position: ['jungle'],
		role: ['tank'],
		img: 'url(img/zac.jpg)',
	},
	{
		name: 'Зед',
		rung: '3',
		position: ['mid'],
		role: ['assasin'],
		img: 'url(img/zed.jpg)',
	},
	{
		name: 'Зерат',
		rung: '4',
		position: ['mid', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/xeratth.jpg)',
	},
	{
		name: 'Зери',
		rung: '0',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/zeri.jpg)',
	},
	{
		name: 'Зиггс',
		rung: '2',
		position: ['mid'],
		role: ['apk'],
		img: 'url(img/ziggs.jpg)',
	},
	{
		name: 'Зилеан',
		rung: '7',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/zilean.jpg)',
	},
	{
		name: 'Зои',
		rung: '2',
		position: ['mid'],
		role: ['apk'],
		img: 'url(img/zoe.jpg)',
	},
	{
		name: 'Иверн',
		rung: '4',
		position: ['jungle'],
		role: ['support', 'tank'],
		img: 'url(img/ivern.jpg)',
	},
	{
		name: 'Иллаой',
		rung: '2',
		position: ['top'],
		role: ['fighter', 'tank'],
		img: 'url(img/illaoi.jpg)',
	},
	{
		name: 'Ирелия',
		rung: '3',
		position: ['top', 'mid'],
		role: ['fighter'],
		img: 'url(img/irelia.jpg)',
	},
	{
		name: 'Йорик',
		rung: '7',
		position: ['top', 'mid'],
		role: ['fighter', 'tank'],
		img: 'url(img/yorick.jpg)',
	},
	{
		name: 'Казикс',
		rung: '1',
		position: ['jungle'],
		role: ['assasin'],
		img: 'url(img/khazix.jpg)',
	},
	{
		name: 'Каин',
		rung: '1',
		position: ['jungle', 'top', 'mid'],
		role: ['assasin', 'fighter', 'tank'],
		img: 'url(img/kayn.jpg)',
	},
	{
		name: 'Кайса',
		rung: '3',
		position: ['bot', 'top'],
		role: ['adk', 'apk'],
		img: 'url(img/kaisa.jpg)',
	},
	{
		name: 'Калиста',
		rung: '2',
		position: ['bot', 'top', 'mid'],
		role: ['adk'],
		img: 'url(img/kalista.jpg)',
	},
	{
		name: 'Камилла',
		rung: '1',
		position: ['top', 'jungle'],
		role: ['fighter'],
		img: 'url(img/camille.jpg)',
	},
	{
		name: 'Карма',
		rung: '7',
		position: ['bot', 'mid', 'top'],
		role: ['support', 'apk'],
		img: 'url(img/karma.jpg)',
	},
	{
		name: 'Картус',
		rung: '2',
		position: ['mid', 'jungle'],
		role: ['apk'],
		img: 'url(img/karthus.jpg)',
	},
	{
		name: 'Кассадин',
		rung: '5',
		position: ['mid', 'top'],
		role: ['assasin'],
		img: 'url(img/kassadin.jpg)',
	},
	{
		name: 'Кассиопея',
		rung: '4',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/cassiopeia.jpg)',
	},
	{
		name: 'Катарина',
		rung: '4',
		position: ['mid'],
		role: ['assasin'],
		img: 'url(img/katarina.jpg)',
	},
	{
		name: 'Квинн',
		rung: '7',
		position: ['top'],
		role: ['adk'],
		img: 'url(img/quinn.jpg)',
	},
	{
		name: 'Кейл',
		rung: '7',
		position: ['top'],
		role: ['adk'],
		img: 'url(img/kayle.jpg)',
	},
	{
		name: 'Кейтлин',
		rung: '7',
		position: ['bot', 'mid', 'top'],
		role: ['adk'],
		img: 'url(img/caitlyn.jpg)',
	},
	{
		name: 'Кеннен',
		rung: '7',
		position: ['top'],
		role: ['apk'],
		img: 'url(img/kennen.jpg)',
	},
	{
		name: 'Киана',
		rung: '3',
		position: ['mid', 'top'],
		role: ['assasin'],
		img: 'url(img/qiyana.jpg)',
	},
	{
		name: 'Киндред',
		rung: '2',
		position: ['jungle'],
		role: ['adk'],
		img: 'url(img/kindred.jpg)',
	},
	{
		name: 'Клед',
		rung: '3',
		position: ['top'],
		role: ['fighter'],
		img: 'url(img/kled.jpg)',
	},
	{
		name: 'Ког Мао',
		rung: '3',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/kogmaw.jpg)',
	},
	{
		name: 'Корки',
		rung: '2',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/corki.jpg)',
	},
	{
		name: 'Ксин Жао',
		rung: '2',
		position: ['jungle', 'top', 'mid'],
		role: ['fighter'],
		img: 'url(img/xinzhao.jpg)',
	},
	{
		name: 'Ле Блан',
		rung: '3',
		position: ['mid', 'top', 'bot'],
		role: ['assasin', 'apk', 'support'],
		img: 'url(img/leblanc.jpg)',
	},
	{
		name: 'Леона',
		rung: '3',
		position: ['top', 'bot'],
		role: ['tank', 'support'],
		img: 'url(img/leona.jpg)',
	},
	{
		name: 'Лиллия',
		rung: '7',
		position: ['top', 'jungle'],
		role: ['apk', 'fighter'],
		img: 'url(img/lillia.jpg)',
	},
	{
		name: 'Ли Син',
		rung: '0',
		position: ['jungle', 'top'],
		role: ['fighter'],
		img: 'url(img/leesin.jpg)',
	},
	{
		name: 'Лиссандра',
		rung: '7',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/lissandra.jpg)',
	},
	{
		name: 'Лулу',
		rung: '7',
		position: ['bot', 'mid', 'top'],
		role: ['support', 'apk'],
		img: 'url(img/lulu.jpg)',
	},
	{
		name: 'Люкс',
		rung: '7',
		position: ['mid', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/lux.jpg)',
	},
	{
		name: 'Люциан',
		rung: '7',
		position: ['bot', 'mid', 'top'],
		role: ['adk'],
		img: 'url(img/lucian.jpg)',
	},
	{
		name: 'Мальзахар',
		rung: '4',
		position: ['mid', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/malzahar.jpg)',
	},
	{
		name: 'Мальфит',
		rung: '5',
		position: ['top', 'jungle', 'bot'],
		role: ['tank', 'apk', 'support'],
		img: 'url(img/malaphite.jpg)',
	},
	{
		name: 'Маокай',
		rung: '7',
		position: ['top', 'jungle', 'bot'],
		role: ['tank', 'support'],
		img: 'url(img/maokai.jpg)',
	},
	{
		name: 'Мастер Йи',
		rung: '4',
		position: ['jungle', 'top', 'mid'],
		role: ['assasin', 'fighter'],
		img: 'url(img/masteryi.jpg)',
	},
	{
		name: 'Мисс Фортуна',
		rung: '7',
		position: ['bot', 'top', 'mid'],
		role: ['adk', 'apk'],
		img: 'url(img/missfortune.jpg)',
	},
	{
		name: 'Моргана',
		rung: '7',
		position: ['bot', 'mid', 'top'],
		role: ['support', 'apk'],
		img: 'url(img/morgana.jpg)',
	},
	{
		name: 'Мордекайзер',
		rung: '7',
		position: ['top', 'mid'],
		role: ['fighter', 'tank'],
		img: 'url(img/mordekaiser.jpg)',
	},
	{
		name: 'Нами',
		rung: '3',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/nami.jpg)',
	},
	{
		name: 'Насус',
		rung: '7',
		position: ['top', 'mid'],
		role: ['fighter', 'tank'],
		img: 'url(img/nasus.jpg)',
	},
	{
		name: 'Наутилус',
		rung: '7',
		position: ['bot', 'top'],
		role: ['tank', 'support'],
		img: 'url(img/nautilus.jpg)',
	},
	{
		name: 'Нидали',
		rung: '4',
		position: ['bot', 'top', 'mid', 'jungle'],
		role: ['support', 'assasin', 'fighter', 'apk'],
		img: 'url(img/nidalee.jpg)',
	},
	{
		name: 'Нико',
		rung: '3',
		position: ['mid', 'bot', 'top'],
		role: ['apk', 'support'],
		img: 'url(img/neeko.jpg)',
	},
	{
		name: 'Ноктюрн',
		rung: '1',
		position: ['jungle', 'top'],
		role: ['fighter', 'assasin'],
		img: 'url(img/nocturne.jpg)',
	},
	{
		name: 'Нуну',
		rung: '7',
		position: ['jungle'],
		role: ['tank'],
		img: 'url(img/nunu.jpg)',
	},
	{
		name: 'Олаф',
		rung: '2',
		position: ['top', 'jungle'],
		role: ['fighter', 'tank'],
		img: 'url(img/olaf.jpg)',
	},
	{
		name: 'Орианна',
		rung: '6',
		position: ['mid'],
		role: ['apk'],
		img: 'url(img/orianna.jpg)',
	},
	{
		name: 'Орн',
		rung: '7',
		position: ['top'],
		role: ['tank'],
		img: 'url(img/ornn.jpg)',
	},
	{
		name: 'Пайк',
		rung: '7',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/pyke.jpg)',
	},
	{
		name: 'Пантеон',
		rung: '2',
		position: ['top', 'mid'],
		role: ['fighter'],
		img: 'url(img/pantheon.jpg)',
	},
	{
		name: 'Поппи',
		rung: '2',
		position: ['top'],
		role: ['tank'],
		img: 'url(img/poppy.jpg)',
	},
	{
		name: 'Райз',
		rung: '7',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/ryze.jpg)',
	},
	{
		name: 'Рамбл',
		rung: '2',
		position: ['top', 'mid'],
		role: ['apk'],
		img: 'url(img/rumble.jpg)',
	},
	{
		name: 'Раммус',
		rung: '3',
		position: ['jungle'],
		role: ['tank'],
		img: 'url(img/rammus.jpg)',
	},
	{
		name: 'РекСай',
		rung: '1',
		position: ['jungle'],
		role: ['assasin', 'fighter'],
		img: 'url(img/reksai.jpg)',
	},
	{
		name: 'Релл',
		rung: '1',
		position: ['top', 'bot', 'jungle'],
		role: ['tank'],
		img: 'url(img/rell.jpg)',
	},
	{
		name: 'Рената Гласк',
		rung: '0',
		position: ['bot', 'mid', 'top'],
		role: ['support', 'apk'],
		img: 'url(img/renata_glasc.jpg)',
	},
	{
		name: 'Ренгар',
		rung: '1',
		position: ['jungle', 'top'],
		role: ['assassin'],
		img: 'url(img/rengar.jpg)',
	},
	{
		name: 'Ренектон',
		rung: '4',
		position: ['top'],
		role: ['fighter', 'tank'],
		img: 'url(img/renekton.jpg)',
	},
	{
		name: 'Ривен',
		rung: '2',
		position: ['top'],
		role: ['fighter'],
		img: 'url(img/riven.jpg)',
	},
	{
		name: 'Рэйкан',
		rung: '1',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/rakan.jpg)',
	},
	{
		name: 'Сайлас',
		rung: '2',
		position: ['mid'],
		role: ['apk', 'fighter'],
		img: 'url(img/sylas.jpg)',
	},
	{
		name: 'Самира',
		rung: '2',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/samira.jpg)',
	},
	{
		name: 'Свейн',
		rung: '7',
		position: ['top', 'mid', 'bot'],
		role: ['apk', 'support'],
		img: 'url(img/swain.jpg)',
	},
	{
		name: 'Седжуани',
		rung: '2',
		position: ['top', 'bot', 'jungle'],
		role: ['tank', 'support'],
		img: 'url(img/sejuani.jpg)',
	},
	{
		name: 'Сенна',
		rung: '5',
		position: ['bot'],
		role: ['support', 'adk'],
		img: 'url(img/senna.jpg)',
	},
	{
		name: 'Серафина',
		rung: '2',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/seraphine.jpg)',
	},
	{
		name: 'Сетт',
		rung: '2',
		position: ['top'],
		role: ['fighter', 'tank'],
		img: 'url(img/sett.jpg)',
	},
	{
		name: 'Сивир',
		rung: '3',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/sivir.jpg)',
	},
	{
		name: 'Синджед',
		rung: '2',
		position: ['top'],
		role: ['tank'],
		img: 'url(img/singed.jpg)',
	},
	{
		name: 'Синдра',
		rung: '2',
		position: ['mid'],
		role: ['apk'],
		img: 'url(img/syndra.jpg)',
	},
	{
		name: 'Сион',
		rung: '1',
		position: ['top'],
		role: ['tank', 'fighter'],
		img: 'url(img/sion.jpg)',
	},
	{
		name: 'Скарнер',
		rung: '2',
		position: ['jungle'],
		role: ['tank', 'fighter'],
		img: 'url(img/skarner.jpg)',
	},
	{
		name: 'Сона',
		rung: '7',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/sona.jpg)',
	},
	{
		name: 'Сорака',
		rung: '4',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/soraka.jpg)',
	},
	{
		name: 'Таам Кенч',
		rung: '4',
		position: ['top'],
		role: ['tank', 'fighter'],
		img: 'url(img/tahmkench.jpg)',
	},
	{
		name: 'Талия',
		rung: '1',
		position: ['mid'],
		role: ['apk'],
		img: 'url(img/ialiyah.jpg)',
	},
	{
		name: 'Талон',
		rung: '5',
		position: ['mid'],
		role: ['assasin'],
		img: 'url(img/talon.jpg)',
	},
	{
		name: 'Тарик',
		rung: '1',
		position: ['bot', 'top'],
		role: ['support', 'tank'],
		img: 'url(img/taric.jpg)',
	},
	{
		name: 'ТвистедФейт',
		rung: '4',
		position: ['mid', 'bot'],
		role: ['apk', 'adk', 'support'],
		img: 'url(img/twistedfate.jpg)',
	},
	{
		name: 'Твич',
		rung: '7',
		position: ['bot', 'jungle'],
		role: ['adk', 'apk'],
		img: 'url(img/twitch.jpg)',
	},
	{
		name: 'Тимо',
		rung: '4',
		position: ['top'],
		role: ['apk'],
		img: 'url(img/teemo.jpg)',
	},
	{
		name: 'Трандл',
		rung: '5',
		position: ['top', 'jungle'],
		role: ['tank', 'fighter'],
		img: 'url(img/trundle.jpg)',
	},
	{
		name: 'Треш',
		rung: '2',
		position: ['bot'],
		role: ['tank', 'support'],
		img: 'url(img/thresh.jpg)',
	},
	{
		name: 'Триндамир',
		rung: '3',
		position: ['top', 'jungle'],
		role: ['fighter'],
		img: 'url(img/tryndamere.jpg)',
	},
	{
		name: 'Тристана',
		rung: '7',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/tristana.jpg)',
	},
	{
		name: 'Удир',
		rung: '1',
		position: ['top', 'jungle'],
		role: ['tank', 'fighter'],
		img: 'url(img/udyr.jpg)',
	},
	{
		name: 'Ургор',
		rung: '3',
		position: ['top'],
		role: ['fighter'],
		img: 'url(img/urgot.jpg)',
	},
	{
		name: 'Фиддлстикс',
		rung: '4',
		position: ['jungle'],
		role: ['apk'],
		img: 'url(img/fiddlesticks.jpg)',
	},
	{
		name: 'Физз',
		rung: '2',
		position: ['mid'],
		role: ['assasin'],
		img: 'url(img/fizz.jpg)',
	},
	{
		name: 'Фиора',
		rung: '4',
		position: ['top', 'mid'],
		role: ['fighter'],
		img: 'url(img/fiora.jpg)',
	},
	{
		name: 'Хеймердингер',
		rung: '3',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/heimerdinger.jpg)',
	},
	{
		name: 'ЧоГат',
		rung: '2',
		position: ['top'],
		role: ['tank'],
		img: 'url(img/chogath.jpg)',
	},
	{
		name: 'Шако',
		rung: '5',
		position: ['top', 'mid', 'jungle', 'bot'],
		role: ['apk', 'assassin'],
		img: 'url(img/shaco.jpg)',
	},
	{
		name: 'Шая',
		rung: '2',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/xayah.jpg)',
	},
	{
		name: 'Шен',
		rung: '3',
		position: ['top', 'mid'],
		role: ['tank'],
		img: 'url(img/shen.jpg)',
	},
	{
		name: 'Шивана',
		rung: '2',
		position: ['top', 'mid', 'jungle'],
		role: ['apk', 'tank', 'fighter'],
		img: 'url(img/shyvana.jpg)',
	},
	{
		name: 'Эвелинн',
		rung: '2',
		position: ['jungle'],
		role: ['assasin'],
		img: 'url(img/evelynn.jpg)',
	},
	{
		name: 'Эзреаль',
		rung: '7',
		position: ['bot', 'mid'],
		role: ['adk'],
		img: 'url(img/ezreal.jpg)',
	},
	{
		name: 'Экко',
		rung: '2',
		position: ['mid', 'jungle'],
		role: ['apk'],
		img: 'url(img/ekko.jpg)',
	},
	{
		name: 'Элиза',
		rung: '4',
		position: ['jungle'],
		role: ['apk'],
		img: 'url(img/elise.jpg)',
	},
	{
		name: 'Энни',
		rung: '7',
		position: ['mid', 'top'],
		role: ['apk'],
		img: 'url(img/annie.jpg)',
	},
	{
		name: 'Эш',
		rung: '7',
		position: ['bot'],
		role: ['adk'],
		img: 'url(img/ashe.jpg)',
	},
	{
		name: 'Юми',
		rung: '7',
		position: ['bot'],
		role: ['support'],
		img: 'url(img/yuumi.jpg)',
	},
	{
		name: 'Ясуо',
		rung: '7',
		position: ['mid', 'top'],
		role: ['fighter'],
		img: 'url(img/yasuo.jpg)',
	},
];

let valueTrue = {
	all: true,
	maxRung: false,
	noMaxRung: false,
	top: false,
	mid: false,
	bot: false,
	jungle: false,
	tank: false,
	assasin: false,
	fighter: false,
	support: false,
	apk: false,
	adk: false,
};

let finaly = []
function render() {
	while (divChampions.firstChild) {
		divChampions.removeChild(divChampions.firstChild);
	}
	finaly.forEach(obj => {
		let champion = document.createElement('div');
		divChampions.appendChild(champion);
		champion.setAttribute('class', 'champion')
		champion.style.backgroundImage = obj.img;

		let champName = document.createElement('span')
		champion.appendChild(champName);
		champName.setAttribute('class', 'championName')
		champName.textContent = obj.name
	})
}
let findChampions = function () {
	finaly = champions;
	if (valueTrue.maxRung === true) {
		finaly = finaly.filter(champ => champ.rung === '7')
	}
	if (valueTrue.noMaxRung === true) {
		finaly = finaly.filter(champ => champ.rung !== '7')
	}
	if (valueTrue.top === true) {
		finaly = finaly.filter(champ => champ.position.indexOf('top') !== -1)
	}
	if (valueTrue.mid === true) {
		finaly = finaly.filter(champ => champ.position.indexOf('mid') !== -1)
	}
	if (valueTrue.bot === true) {
		finaly = finaly.filter(champ => champ.position.indexOf('bot') !== -1)
	}
	if (valueTrue.jungle === true) {
		finaly = finaly.filter(champ => champ.position.indexOf('jungle') !== -1)
	}
	if (valueTrue.tank === true) {
		finaly = finaly.filter(champ => champ.role.indexOf('tank') !== -1)
	}
	if (valueTrue.assasin === true) {
		finaly = finaly.filter(champ => champ.role.indexOf('assasin') !== -1)
	}
	if (valueTrue.fighter === true) {
		finaly = finaly.filter(champ => champ.role.indexOf('fighter') !== -1)
	}
	if (valueTrue.support === true) {
		finaly = finaly.filter(champ => champ.role.indexOf('support') !== -1)
	}
	if (valueTrue.apk === true) {
		finaly = finaly.filter(champ => champ.role.indexOf('apk') !== -1)
	}
	if (valueTrue.adk === true) {
		finaly = finaly.filter(champ => champ.role.indexOf('adk') !== -1)
	}
	render()
}

let clear = function () {
	valueTrue.all = true;
	valueTrue.maxRung = false;
	valueTrue.noMaxRung = false;
	valueTrue.top = false;
	valueTrue.mid = false;
	valueTrue.bot = false;
	valueTrue.jungle = false;
	valueTrue.tank = false;
	valueTrue.assasin = false;
	valueTrue.fighter = false;
	valueTrue.support = false;
	valueTrue.apk = false;
	valueTrue.adk = false;
	button.forEach((btn) => btn.setAttribute('class', 'noActive'))
	btnAll.setAttribute('class', 'active')
}

let checkValue = function () {
	if (
		valueTrue.maxRung === false &&
		valueTrue.noMaxRung === false &&
		valueTrue.top === false &&
		valueTrue.mid === false &&
		valueTrue.bot === false &&
		valueTrue.jungle === false &&
		valueTrue.tank === false &&
		valueTrue.assasin === false &&
		valueTrue.fighter === false &&
		valueTrue.support === false &&
		valueTrue.apk === false &&
		valueTrue.adk === false
	) {
		valueTrue.all = true;
		button.forEach((btn) => btn.setAttribute('class', 'noActive'))
		btnAll.setAttribute('class', 'active')
	} else {
		btnAll.setAttribute('class', 'noActive')
	}
}

switcherValue = function () {
	let target = event.target.textContent
	function changeClass() {
		if (event.target.getAttribute('class') === 'noActive') {
			event.target.setAttribute('class', 'active')
		} else {
			event.target.setAttribute('class', 'noActive')
		}
	}

	switch (target) {
		case 'Top':
			valueTrue.top === false ? valueTrue.top = true : valueTrue.top = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Mid':
			valueTrue.mid === false ? valueTrue.mid = true : valueTrue.mid = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Bot':
			valueTrue.bot === false ? valueTrue.bot = true : valueTrue.bot = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Jungle':
			valueTrue.jungle === false ? valueTrue.jungle = true : valueTrue.jungle = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Tank':
			valueTrue.tank === false ? valueTrue.tank = true : valueTrue.tank = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Assasin':
			valueTrue.assasin === false ? valueTrue.assasin = true : valueTrue.assasin = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Fighter':
			valueTrue.fighter === false ? valueTrue.fighter = true : valueTrue.fighter = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Support':
			valueTrue.support === false ? valueTrue.support = true : valueTrue.support = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Apk':
			valueTrue.apk === false ? valueTrue.apk = true : valueTrue.apk = false;
			valueTrue.all = false;
			changeClass()
			break;
		case 'Adk':
			valueTrue.adk === false ? valueTrue.adk = true : valueTrue.adk = false;
			valueTrue.all = false;
			changeClass()
			break;
	}
	checkValue();
	findChampions();
	// console.log(valueTrue);
}
switcherValueAllRung = function () {
	// console.log('event.target === ' + event.target.textContent);
	let target = event.target.textContent
	switch (target) {
		case 'All':
			clear();
			break;
		case 'MaxRung':
			if (valueTrue.maxRung === false) {
				valueTrue.maxRung = true
				max.setAttribute('class', 'active')
				if (valueTrue.noMaxRung === true) {
					valueTrue.noMaxRung = false;
					noMax.setAttribute('class', 'noActive')
				}
			} else {
				valueTrue.maxRung = false;
				max.setAttribute('class', 'noActive')
			}
			valueTrue.all = false;

			break;
		case 'NoMaxRung':
			if (valueTrue.noMaxRung === false) {
				valueTrue.noMaxRung = true
				noMax.setAttribute('class', 'active')
				if (valueTrue.maxRung === true) {
					valueTrue.maxRung = false;
					max.setAttribute('class', 'noActive')
				}
			} else {
				valueTrue.noMaxRung = false;
				noMax.setAttribute('class', 'noActive')
			}
			valueTrue.all = false;
			break;
	}
	checkValue();
	findChampions();
	console.log(valueTrue);
}

blockPosition.addEventListener('click', switcherValue);
blockRole.addEventListener('click', switcherValue);
blockRung.addEventListener('click', switcherValueAllRung);
blockAll.addEventListener('click', switcherValueAllRung);

findChampions();