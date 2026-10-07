/**
 * CodeKlas Geluidssynthesizer (Web Audio API)
 * 100% offline, inclusief Halloween geluidseffecten!
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playTone(freq, duration, type = 'square', delay = 0) {
    if (!this.enabled) return;
    this.init();

    setTimeout(() => {
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      } catch (e) {
        console.warn('Audio error:', e);
      }
    }, delay * 1000);
  }

  // Standaard MakeCode Geluidjes
  playBaDing() {
    this.playTone(523.25, 0.15, 'triangle', 0);     // C5
    this.playTone(659.25, 0.35, 'triangle', 0.15);  // E5
  }

  playWaWa() {
    this.playTone(392.00, 0.25, 'sawtooth', 0);    // G4
    this.playTone(369.99, 0.25, 'sawtooth', 0.25); // F#4
    this.playTone(349.23, 0.25, 'sawtooth', 0.50); // F4
    this.playTone(329.63, 0.60, 'sawtooth', 0.75); // E4
  }

  playDiceRoll() {
    for (let i = 0; i < 6; i++) {
      this.playTone(300 + Math.random() * 200, 0.04, 'square', i * 0.08);
    }
    this.playTone(784, 0.3, 'triangle', 0.55); // G5
  }

  playStep() {
    this.playTone(440, 0.05, 'square', 0);
  }

  playClap() {
    this.playTone(200, 0.04, 'sawtooth', 0);
    this.playTone(400, 0.06, 'square', 0.02);
    this.playTone(150, 0.08, 'triangle', 0.04);
  }

  playBell() {
    this.playTone(659.25, 1.2, 'sine', 0);
    this.playTone(880.00, 1.5, 'sine', 0.05);
    this.playTone(1046.50, 1.8, 'triangle', 0.1);
  }

  playOdeToJoy() {
    const notes = [
      { f: 329.63, d: 0.2 }, { f: 329.63, d: 0.2 }, { f: 349.23, d: 0.2 }, { f: 392.00, d: 0.2 },
      { f: 392.00, d: 0.2 }, { f: 349.23, d: 0.2 }, { f: 329.63, d: 0.2 }, { f: 293.66, d: 0.2 },
      { f: 261.63, d: 0.2 }, { f: 261.63, d: 0.2 }, { f: 293.66, d: 0.2 }, { f: 329.63, d: 0.3 },
      { f: 329.63, d: 0.2 }, { f: 293.66, d: 0.4 }
    ];
    let time = 0;
    notes.forEach(n => {
      this.playTone(n.f, n.d, 'square', time);
      time += n.d + 0.04;
    });
  }

  playEntertainer() {
    const notes = [
      { f: 293.66, d: 0.12 }, { f: 311.13, d: 0.12 }, { f: 329.63, d: 0.12 }, { f: 523.25, d: 0.25 },
      { f: 329.63, d: 0.12 }, { f: 523.25, d: 0.25 }, { f: 329.63, d: 0.12 }, { f: 523.25, d: 0.35 }
    ];
    let time = 0;
    notes.forEach(n => {
      this.playTone(n.f, n.d, 'triangle', time);
      time += n.d + 0.03;
    });
  }

  // ==========================================
  // HALLOWEEN SPOOKY GELUIDSEFFECTEN 🎃
  // ==========================================
  playSpookyBoo() {
    // Griezelig spook "Booo!" glijdende toon omlaag
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.audioCtx.currentTime + 0.8);

      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.8);
    } catch(e) {}
  }

  playSiren() {
    // Loeiende Snoep-Dief Sirene (Tatutatu!)
    for (let i = 0; i < 4; i++) {
      this.playTone(880, 0.15, 'sawtooth', i * 0.3);
      this.playTone(587, 0.15, 'sawtooth', i * 0.3 + 0.15);
    }
  }

  playMonsterSnore() {
    // Zacht snurkend monster (slapend)
    this.playTone(80, 0.6, 'sine', 0);
    this.playTone(70, 0.4, 'triangle', 0.6);
  }

  playMonsterRoar() {
    // Brullend monster bij luid lawaai!
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, this.audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(350, this.audioCtx.currentTime + 0.3);
      osc.frequency.linearRampToValueAtTime(90, this.audioCtx.currentTime + 0.9);

      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.9);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.9);
    } catch(e) {}
  }
}

window.soundEngine = new SoundEngine();
