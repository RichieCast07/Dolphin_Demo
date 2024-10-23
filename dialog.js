var dialog = ["Soy el padrino delfín genial uno dos tres, [Presione E]", "Soy el padrino DELFÍN Soy genial DELFÍN Soy bestial El Padrino uno dos tres. [Presione E]", "Hola xdxd"];
var left = [0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 0];
var currentPhrase = 0;
document.onkeydown = function(e) {
	pressed[e.key] = true;
	if (e.keyCode != 69) {
		return;
	}
	currentPhrase++;
	if (currentPhrase < dialog.length + 1) {
		dialogH1.innerHTML = dialog[currentPhrase - 1];
		dialogH1.style.textAlign = left[currentPhrase - 1] == 2 ? "end" : !left[currentPhrase - 1] ? "left" : "center";
		dialogH1.style.left = left[currentPhrase - 1] ? "0" : "5%";
	} else if (alive) {
		dialogH1.innerHTML = "";
	} else {
		dialogH1.innerHTML = "";
		frame = 0;
		foam = [];
		ices = [];
		geysers = [];
		mines = [];
		mountains = [];
		dashCharge = 1;
		lastDashUse = 0;
		hints = [
			[window.innerWidth, "Hola."],
			[window.innerWidth + 1000, "Presiona ARRIBA y ABAJO para balancearte padrino."],
			[window.innerWidth + 2000, "Presione ESPACIO para juegar :v"],
			[window.innerWidth + 3000, "Rebotas en planos de hielo"],
			[window.innerWidth + 4000, "Te levantas por la gravedad"],
			[window.innerWidth + 5000, "Mueres al tocar montañas o minas."]];
		player = {
			x: 0,
			y: 100 + ~~(canvas.height / 2),
			dx: 10,
			dy: 0
		}
		alive = true;
	}
}