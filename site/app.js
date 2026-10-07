/**
 * CODEKLAS: MICRO:BIT & MICROSOFT MAKECODE PORTAAL
 * Logica voor simulator, digibord-timer en Halloween special
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. TABS NAVIGATIE
  // ==========================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(tabId) {
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // ==========================================
  // 2. THEMA WISSELAAR (HALLOWEEN THEMA) 🎃
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const appLogoBadge = document.getElementById('app-logo-badge');
  const appThemeBadge = document.getElementById('app-theme-badge');
  let isHalloween = false;

  themeToggleBtn.addEventListener('click', () => {
    isHalloween = !isHalloween;
    document.body.classList.toggle('halloween-theme', isHalloween);

    if (isHalloween) {
      themeToggleBtn.innerHTML = '<span>🚀 Normaal Thema</span>';
      appLogoBadge.textContent = '🎃';
      appThemeBadge.textContent = 'micro:bit & MakeCode 👻';
      window.soundEngine.playSpookyBoo();
      switchTab('halloween');
    } else {
      themeToggleBtn.innerHTML = '<span>🎃 Halloween Thema</span>';
      appLogoBadge.textContent = '🤖';
      appThemeBadge.textContent = 'micro:bit & MakeCode';
      window.soundEngine.playBaDing();
      switchTab('opdrachten');
    }
  });

  // ==========================================
  // 3. STANDAARD NIVEAU SELECTIE
  // ==========================================
  const levelCards = document.querySelectorAll('.level-card[data-level]');
  const levelContents = document.querySelectorAll('.level-content[id^="level-detail-"]');

  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      const level = card.dataset.level;
      levelCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      levelContents.forEach(content => {
        content.classList.toggle('hidden', content.id !== `level-detail-${level}`);
      });
    });
  });

  // ==========================================
  // 4. HALLOWEEN NIVEAU SELECTIE 🎃
  // ==========================================
  const hwLevelCards = document.querySelectorAll('.level-card[data-hw-level]');
  const hwLevelContents = document.querySelectorAll('.level-content[id^="hw-detail-"]');

  hwLevelCards.forEach(card => {
    card.addEventListener('click', () => {
      const level = card.dataset.hwLevel;
      hwLevelCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      hwLevelContents.forEach(content => {
        content.classList.toggle('hidden', content.id !== `hw-detail-${level}`);
      });
    });
  });

  // ==========================================
  // 5. VIRTUELE MICRO:BIT 5x5 MATRIX
  // ==========================================
  const matrixContainer = document.getElementById('sim-matrix');
  const leds = [];

  // Genereer 25 leds
  matrixContainer.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const led = document.createElement('div');
    led.className = 'mb-led';
    matrixContainer.appendChild(led);
    leds.push(led);
  }

  // Patronen (1 = aan, 0 = uit)
  const PATTERNS = {
    clear: [
      0,0,0,0,0,
      0,0,0,0,0,
      0,0,0,0,0,
      0,0,0,0,0,
      0,0,0,0,0
    ],
    heart: [
      0,1,0,1,0,
      1,1,1,1,1,
      1,1,1,1,1,
      0,1,1,1,0,
      0,0,1,0,0
    ],
    heart_small: [
      0,0,0,0,0,
      0,1,0,1,0,
      0,1,1,1,0,
      0,0,1,0,0,
      0,0,0,0,0
    ],
    happy: [
      0,0,0,0,0,
      0,1,0,1,0,
      0,0,0,0,0,
      1,0,0,0,1,
      0,1,1,1,0
    ],
    sad: [
      0,0,0,0,0,
      0,1,0,1,0,
      0,0,0,0,0,
      0,1,1,1,0,
      1,0,0,0,1
    ],
    // Halloween Patronen
    ghost: [
      0,1,1,1,0,
      1,0,1,0,1,
      1,1,1,1,1,
      1,0,1,0,1,
      1,0,0,0,1
    ],
    pumpkin: [
      0,0,1,0,0,
      1,0,0,0,1,
      1,1,0,1,1,
      0,1,1,1,0,
      1,0,1,0,1
    ],
    skull: [
      0,1,1,1,0,
      1,0,1,0,1,
      1,1,1,1,1,
      0,1,1,1,0,
      0,1,0,1,0
    ],
    bat: [
      1,0,0,0,1,
      1,1,0,1,1,
      0,1,1,1,0,
      1,0,0,0,1,
      0,0,0,0,0
    ],
    dice1: [
      0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,0,0,0
    ],
    dice2: [
      1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1
    ],
    dice3: [
      1,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,0,0,1
    ],
    dice4: [
      1,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,0,0,0,1
    ],
    dice5: [
      1,0,0,0,1, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 1,0,0,0,1
    ],
    dice6: [
      1,0,0,0,1, 0,0,0,0,0, 1,0,0,0,1, 0,0,0,0,0, 1,0,0,0,1
    ]
  };

  const DIGITS = {
    0: [0,1,1,1,0, 0,1,0,1,0, 0,1,0,1,0, 0,1,0,1,0, 0,1,1,1,0],
    1: [0,0,1,0,0, 0,1,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,1,1,1,0],
    2: [0,1,1,1,0, 0,0,0,1,0, 0,1,1,1,0, 0,1,0,0,0, 0,1,1,1,0],
    3: [0,1,1,1,0, 0,0,0,1,0, 0,1,1,1,0, 0,0,0,1,0, 0,1,1,1,0],
    4: [0,1,0,1,0, 0,1,0,1,0, 0,1,1,1,0, 0,0,0,1,0, 0,0,0,1,0],
    5: [0,1,1,1,0, 0,1,0,0,0, 0,1,1,1,0, 0,0,0,1,0, 0,1,1,1,0],
    6: [0,1,1,1,0, 0,1,0,0,0, 0,1,1,1,0, 0,1,0,1,0, 0,1,1,1,0],
    7: [0,1,1,1,0, 0,0,0,1,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
    8: [0,1,1,1,0, 0,1,0,1,0, 0,1,1,1,0, 0,1,0,1,0, 0,1,1,1,0],
    9: [0,1,1,1,0, 0,1,0,1,0, 0,1,1,1,0, 0,0,0,1,0, 0,1,1,1,0]
  };

  function showPattern(pattern) {
    if (!pattern) return;
    leds.forEach((led, idx) => {
      led.classList.toggle('on', pattern[idx] === 1);
    });
  }

  function showNumber(num) {
    if (DIGITS[num]) showPattern(DIGITS[num]);
  }

  showPattern(PATTERNS.happy);

  const statusLabel = document.getElementById('sim-status-label');
  function setStatus(text) {
    if (statusLabel) statusLabel.textContent = text;
  }

  // ==========================================
  // 6. INTERACTIE OP VIRTUELE MICRO:BIT
  // ==========================================
  const btnA = document.getElementById('sim-btn-a');
  const btnB = document.getElementById('sim-btn-b');
  const btnAB = document.getElementById('btn-ab');
  const logo = document.getElementById('sim-logo');
  const shakeBtn = document.getElementById('shake-btn');
  const clapBtn = document.getElementById('clap-btn');
  const clearSimBtn = document.getElementById('clear-sim-btn');

  let stepCount = 0;

  btnA.addEventListener('click', () => {
    btnA.classList.add('active');
    setTimeout(() => btnA.classList.remove('active'), 200);
    if (isHalloween) {
      showPattern(PATTERNS.ghost);
      window.soundEngine.playSpookyBoo();
      setStatus('Knop A: Zwaaiend spookje! 👻 "BOOO!"');
    } else {
      showPattern(PATTERNS.happy);
      window.soundEngine.playBaDing();
      setStatus('Knop A: Blij gezichtje 😊');
    }
  });

  btnB.addEventListener('click', () => {
    btnB.classList.add('active');
    setTimeout(() => btnB.classList.remove('active'), 200);
    if (isHalloween) {
      showPattern(PATTERNS.pumpkin);
      window.soundEngine.playTone(196, 0.4, 'sawtooth');
      setStatus('Knop B: Boze Jack-o-Lantern Pompoen 🎃');
    } else {
      showPattern(PATTERNS.sad);
      window.soundEngine.playWaWa();
      setStatus('Knop B: Verdrietig gezichtje 😢');
    }
  });

  btnAB.addEventListener('click', () => {
    showPattern(PATTERNS.clear);
    window.soundEngine.playBaDing();
    setStatus('Knop A + B: Alarm uitgeschakeld / Reset! ✅');
  });

  logo.addEventListener('click', () => {
    logo.classList.add('touched');
    if (isHalloween) {
      // Knipperende ogen
      showPattern([
        0,0,0,0,0, 0,1,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0
      ]);
      window.soundEngine.playTone(500, 0.1, 'sine');
      setTimeout(() => showPattern(PATTERNS.clear), 120);
      setTimeout(() => {
        showPattern([
          0,0,0,0,0, 0,1,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0
        ]);
        window.soundEngine.playTone(600, 0.15, 'sine');
      }, 240);
      setStatus('Gouden Logo: Schrikkende Heksen-Ogen! 👀');
    } else {
      showPattern(PATTERNS.heart);
      window.soundEngine.playBaDing();
      setStatus('Gouden Logo: Kloppend hartje ❤️');
      setTimeout(() => showPattern(PATTERNS.heart_small), 180);
      setTimeout(() => showPattern(PATTERNS.heart), 360);
    }
    setTimeout(() => logo.classList.remove('touched'), 500);
  });

  shakeBtn.addEventListener('click', () => {
    setStatus('Schudden gedetecteerd! Dobbelsteen rolt...');
    window.soundEngine.playDiceRoll();

    let rolls = 0;
    const interval = setInterval(() => {
      const randPattern = PATTERNS[`dice${Math.floor(Math.random() * 6) + 1}`];
      showPattern(randPattern);
      rolls++;
      if (rolls > 6) {
        clearInterval(interval);
        const finalDice = Math.floor(Math.random() * 6) + 1;
        showPattern(PATTERNS[`dice${finalDice}`]);
        setStatus(`Dobbelsteen gestopt op: ${finalDice}! 🎲`);
        stepCount++;
      }
    }, 70);
  });

  clapBtn.addEventListener('click', () => {
    if (isHalloween) {
      window.soundEngine.playMonsterRoar();
      showPattern(PATTERNS.skull);
      setStatus('👏 LAWAAI! Het monster ontwaakt en brult! 🧟💥');
    } else {
      window.soundEngine.playClap();
      showNumber(stepCount);
      setStatus(`👏 Luid geluid gedetecteerd! Aantal stappen: ${stepCount}`);
    }
  });

  clearSimBtn.addEventListener('click', () => {
    showPattern(PATTERNS.clear);
    setStatus('Scherm gewist.');
  });

  // Geluidjes buttons
  document.querySelectorAll('[data-song]').forEach(btn => {
    btn.addEventListener('click', () => {
      const song = btn.dataset.song;
      if (song === 'bading') window.soundEngine.playBaDing();
      if (song === 'wawa') window.soundEngine.playWaWa();
      if (song === 'diceroll') window.soundEngine.playDiceRoll();
      if (song === 'ode') window.soundEngine.playOdeToJoy();
      if (song === 'bell') window.soundEngine.playBell();
      if (song === 'boo') window.soundEngine.playSpookyBoo();
      if (song === 'siren') window.soundEngine.playSiren();
      if (song === 'roar') window.soundEngine.playMonsterRoar();
      if (song === 'snore') window.soundEngine.playMonsterSnore();
    });
  });

  // Patronen buttons
  document.querySelectorAll('[data-pattern]').forEach(btn => {
    btn.addEventListener('click', () => {
      const patternName = btn.dataset.pattern;
      if (PATTERNS[patternName]) {
        showPattern(PATTERNS[patternName]);
      }
    });
  });

  // "Test in Simulator" knoppen
  document.querySelectorAll('.test-in-sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const demoId = btn.dataset.demo;
      switchTab('simulator');

      if (demoId === '1') {
        showPattern(PATTERNS.happy);
        window.soundEngine.playBaDing();
        setStatus('Niveau 1 Emotie Badge geladen!');
      } else if (demoId === '2') {
        shakeBtn.click();
      } else if (demoId === '3') {
        stepCount = 10;
        showNumber(10);
        window.soundEngine.playStep();
        setStatus('Niveau 3 Stappenteller actief!');
      } else if (demoId === 'hw1') {
        showPattern(PATTERNS.ghost);
        window.soundEngine.playSpookyBoo();
        setStatus('🎃 Halloween 1: Spookje & Pompoen geladen! Druk op A of B.');
      } else if (demoId === 'hw2') {
        showPattern(PATTERNS.skull);
        window.soundEngine.playSiren();
        setStatus('🚨 Halloween 2: Snoepdief Alarm geactiveerd!');
      } else if (demoId === 'hw3') {
        window.soundEngine.playMonsterSnore();
        setStatus('🧟 Halloween 3: Slapend Monster... Muisstil zijn of klap in je handen!');
      }
    });
  });

  // ==========================================
  // 7. DIGIBORD KLAS-TIMER
  // ==========================================
  const timerDisplay = document.getElementById('timer-display');
  const timerStartBtn = document.getElementById('timer-start-btn');
  const timerPauseBtn = document.getElementById('timer-pause-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');
  const progressCircle = document.getElementById('progress-circle');
  const presetButtons = document.querySelectorAll('.preset-btn');

  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 120; // 753.98
  let totalTime = 600;
  let timeLeft = totalTime;
  let timerInterval = null;
  let isRunning = false;

  function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const progress = timeLeft / totalTime;
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
    progressCircle.style.strokeDashoffset = offset;

    if (timeLeft < 60) {
      progressCircle.style.stroke = '#ef4444';
    } else {
      progressCircle.style.stroke = isHalloween ? '#ea580c' : '#0078d7';
    }
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerStartBtn.disabled = true;
    timerPauseBtn.disabled = false;
    timerStartBtn.textContent = '▶️ Loopt...';

    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        timerStartBtn.disabled = false;
        timerPauseBtn.disabled = true;
        timerStartBtn.textContent = '▶️ Start Timer';

        window.soundEngine.playBell();
        alert('🔔 ROLWISSEL! De tijd is om! Schuif allemaal 1 stoel door naar de volgende rol!');
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!isRunning) return;
    clearInterval(timerInterval);
    isRunning = false;
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
    timerStartBtn.textContent = '▶️ Hervat';
  }

  function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = totalTime;
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
    timerStartBtn.textContent = '▶️ Start Timer';
    updateTimerDisplay();
  }

  timerStartBtn.addEventListener('click', startTimer);
  timerPauseBtn.addEventListener('click', pauseTimer);
  timerResetBtn.addEventListener('click', resetTimer);

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      totalTime = parseInt(btn.dataset.time, 10);
      resetTimer();
    });
  });

  updateTimerDisplay();

  // Digibord Fullscreen
  const digibordBtn = document.getElementById('digibord-mode-btn');
  digibordBtn.addEventListener('click', () => {
    document.body.classList.toggle('fullscreen-digibord');
    if (document.body.classList.contains('fullscreen-digibord')) {
      switchTab('timer');
      digibordBtn.innerHTML = '<span>❌ Sluit</span>';
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      digibordBtn.innerHTML = '<span class="btn-icon">📺</span> Digibord';
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  });

  // Geluid toggle
  const soundToggleBtn = document.getElementById('toggle-sound-btn');
  const soundIcon = document.getElementById('sound-icon');
  soundToggleBtn.addEventListener('click', () => {
    window.soundEngine.enabled = !window.soundEngine.enabled;
    soundIcon.textContent = window.soundEngine.enabled ? '🔊' : '🔇';
  });
});
