function getNoteFrequency(note) {
	return 440 * (2 ** ((note - 69) / 12));
}
var audioCtx = new AudioContext();

var playMusic = function() {
	const currentTime = audioCtx.currentTime;
	var time = 0;
	for (var i = 0; i < music.length; i++) {
		time += music[i][0];
		var noteStart = time;

		var oscillator = audioCtx.createOscillator();
		oscillator.type = "square";
		oscillator.frequency.setValueAtTime(getNoteFrequency(music[i][1]), audioCtx.currentTime);

		var gain = audioCtx.createGain();

		oscillator.connect(gain);
		gain.connect(audioCtx.destination);
		gain.gain.setValueAtTime(0.04, currentTime + noteStart / 128);
		gain.gain.exponentialRampToValueAtTime(0.00000000001, currentTime + noteStart / 128 + 5);
		oscillator.start(currentTime + (noteStart) / 128);
		oscillator.stop(currentTime + (noteStart) / 128 + 10);
	}
};
