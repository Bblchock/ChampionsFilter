import champions from "./champions";

const btnTop = document.getElementById('top')
const btnMid = document.getElementById('mid')
const btnBot = document.getElementById('bot')
const btnJungle = document.getElementById('jungle')

const btnTank = document.getElementById('tank')
const btnApk = document.getElementById('apk')
const btnAdk = document.getElementById('adk')
const btnSupport = document.getElementById('support')
const btnFighter = document.getElementById('fighter')
const btnAssasin = document.getElementById('assasin')

const btnMaxRung = document.getElementById('maxRung')
const btnRungAboveFive = document.getElementById('rungAboveFive')
const btnRungBelowFive = document.getElementById('rungBelowFive')

const btnAll = document.getElementById('all')

const divChampions = document.querySelector('.champions')
const button = document.querySelectorAll('button')

const count = document.querySelector('.show')

let valueTrue = {
	all: true,
	maxRung: false,
	rungAboveFive: false,
	rungBelowFive: false,
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
}
window.valueTrue = valueTrue;

let finaly = []

function render() {
	while (divChampions.firstChild) {
		divChampions.removeChild(divChampions.firstChild)
	}
	finaly.forEach(obj => {
		let champion = document.createElement('div')
		divChampions.appendChild(champion)
		champion.setAttribute('class', 'champion')
		champion.style.backgroundImage = obj.img

		//rung
		let champRung = document.createElement('div')
		champion.appendChild(champRung)
		champRung.setAttribute('class', 'championRung')
		champRung.textContent = obj.rung

		//name
		let champName = document.createElement('span')
		champion.appendChild(champName)
		champName.setAttribute('class', 'championName')
		champName.textContent = obj.name

		switch (obj.rung) {
			case '7':
				champion.style.border = '3px solid blue'
				champion.style.margin = '2px'
				champRung.style.color = 'blue'
				champName.style.color = 'blue'
				break;
			case '6':
				champion.style.border = '3px solid rgb(105, 0, 190)'
				champion.style.margin = '2px'
				champRung.style.color = 'rgb(105, 0, 190)'
				champName.style.color = 'rgb(105, 0, 190)'
				break;
			case '5':
				champion.style.border = '3px solid rgb(179, 0, 0)'
				champion.style.margin = '2px'
				champRung.style.color = 'rgb(179, 0, 0)'
				champName.style.color = 'rgb(179, 0, 0)'
				break;
		}
	})
}

let clear = function () {
	Object.keys(valueTrue).forEach(e => valueTrue[e] = false)
	valueTrue.all = true
	checkValue()
}

let checkValue = function () {
	let valuesWithoutAll = Object.values(valueTrue).slice(1)
	let valuesRung = Object.values(valueTrue).slice(1, 4)
	let keyRung = Object.keys(valueTrue).slice(1, 4)
	// all
	if (valuesWithoutAll.indexOf(true) === -1) {
		valueTrue.all = true;
		button.forEach((btn) => btn.setAttribute('class', 'noActive'))
		btnAll.setAttribute('class', 'active')
	} else {
		btnAll.setAttribute('class', 'noActive')
	}
	//rung
	if (valuesRung.indexOf(true) !== -1) {
		for (let i = 0; i < valuesRung.length; i++) {
			if (valuesRung[i] === false) {
				let divElementId = document.getElementById(keyRung[i])
				divElementId.setAttribute('class', 'noActive')
			}
		}
	}
}

let switcherValue = function () {
	let target = (event.target.textContent)

	function change() {
		valueTrue[target] = !valueTrue[target]
		valueTrue.all = false

		color()
	}

	function color() {
		let divElementId = document.getElementById(target)
		divElementId.getAttribute('class') === 'active' ? divElementId.setAttribute('class', 'noActive') : divElementId.setAttribute('class', 'active')
	}

	if (target.includes('All')) {
		clear()
	} else if (target.includes('MaxRung')) {
		target = 'maxRung'
		change()
		if (valueTrue.maxRung) {
			valueTrue.rungAboveFive = false
			valueTrue.rungBelowFive = false
		}
	} else if (target.includes('Rung 5-6')) {
		target = 'rungAboveFive'
		change()
		if (valueTrue.rungAboveFive) {
			valueTrue.maxRung = false
			valueTrue.rungBelowFive = false
		}
	} else if (target.includes('Rung < 5')) {
		target = 'rungBelowFive'
		change()
		if (valueTrue.rungBelowFive) {
			valueTrue.maxRung = false
			valueTrue.rungAboveFive = false
		}
	} else {
		target = target.toLowerCase()
		change()
	}

	checkValue()
	findChampions()
}

let findChampions = function () {
	finaly = champions.slice(0)

	if (valueTrue.maxRung) {
		finaly = finaly.filter(champ => champ.rung === '7')
	}
	if (valueTrue.rungAboveFive) {
		finaly = finaly.filter(champ => champ.rung === '5' || champ.rung === '6')
	}
	if (valueTrue.rungBelowFive) {
		finaly = finaly.filter(champ => champ.rung < '5')
	}
	if (valueTrue.top) {
		finaly = finaly.filter(champ => champ.position.indexOf('top') !== -1)
	}
	if (valueTrue.mid) {
		finaly = finaly.filter(champ => champ.position.indexOf('mid') !== -1)
	}
	if (valueTrue.bot) {
		finaly = finaly.filter(champ => champ.position.indexOf('bot') !== -1)
	}
	if (valueTrue.jungle) {
		finaly = finaly.filter(champ => champ.position.indexOf('jungle') !== -1)
	}
	if (valueTrue.tank) {
		finaly = finaly.filter(champ => champ.role.indexOf('tank') !== -1)
	}
	if (valueTrue.assasin) {
		finaly = finaly.filter(champ => champ.role.indexOf('assasin') !== -1)
	}
	if (valueTrue.fighter) {
		finaly = finaly.filter(champ => champ.role.indexOf('fighter') !== -1)
	}
	if (valueTrue.support) {
		finaly = finaly.filter(champ => champ.role.indexOf('support') !== -1)
	}
	if (valueTrue.apk) {
		finaly = finaly.filter(champ => champ.role.indexOf('apk') !== -1)
	}
	if (valueTrue.adk) {
		finaly = finaly.filter(champ => champ.role.indexOf('adk') !== -1)
	}
	render()
	count.textContent = 'Shown: ' + finaly.length;
}

btnTop.addEventListener('click', switcherValue)
btnMid.addEventListener('click', switcherValue)
btnBot.addEventListener('click', switcherValue)
btnJungle.addEventListener('click', switcherValue)

btnTank.addEventListener('click', switcherValue)
btnApk.addEventListener('click', switcherValue)
btnAdk.addEventListener('click', switcherValue)
btnSupport.addEventListener('click', switcherValue)
btnFighter.addEventListener('click', switcherValue)
btnAssasin.addEventListener('click', switcherValue)

btnMaxRung.addEventListener('click', switcherValue)
btnRungAboveFive.addEventListener('click', switcherValue)
btnRungBelowFive.addEventListener('click', switcherValue)

btnAll.addEventListener('click', switcherValue)

findChampions()