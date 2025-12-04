---
title: Eyetracking v psychologickém výzkumu
description: Základní informace o využití eyetrackingu v psychologickém vý
---

Eye-tracking měří pohyb a pozici očí v reálném čase. Vychází z předpokladu, že kam se díváme, to kognitivně zpracováváme — pohyby očí jsou z velké části automatické a neovlivněné vědomou kontrolou.

Přednáška ke stažení [zde](/public/courses-files/specific-data-processing/eyetracking-presentation.pdf)

## Oční pohyby

- **Fixace**: stabilní pohled na jednom místě (100–500 ms), během kterého probíhá zpracování informace
- **Sakády**: rychlé přesuny mezi fixacemi (20–200 ms, rychlost 300–500°/s), během nichž je vizuální zpracování potlačeno

## Technologie

| Metoda | Přesnost | Rychlost | Poznámka |
|--------|----------|----------|----------|
| Pupil-corneal reflection | 0.25–0.5° | 250–2000 Hz | IR světlo + kamera |
| Camera-based (face tracking) | 2–5° | 30–60 Hz | Čistě softwarové řešení |

## Klíčové metriky (v kontextu AOI)

- **Mean Fixation Duration** — průměrná délka fixací (delší = vyšší kognitivní zátěž)
- **Fixation Count** — počet fixací na AOI
- **Time to First Fixation** — latence prvního pohledu (měří attentional capture)
- **Dwell Time** — celkový čas strávený v AOI
- **Revisits** — počet návratů do AOI

## Zpracování dat

Raw data (x, y, timestamp) → Filtering (šum, mrkání) → Detekce fixací/sakád (I-VT, I-DT algoritmy) → AOI mapping → Výpočet metrik

## Pokročilé analýzy

- **Scanpath analýza** — temporální sekvence fixací, porovnání pomocí String Edit Distance nebo MultiMatch algoritmu
- **Transition matrices** — pravděpodobnosti přechodů mezi AOI
- **Pupilometrie** — měření kognitivní zátěže přes velikost zornice

## Vizualizace

- **Gaze plot / Scanpath** — individuální trajektorie s očíslovanými fixacemi
- **Heatmapy** — agregované fixace více participantů (KDE nebo binning)
- **Timeseries** — průběh hodnot v čase (pupilometrie, pozice)

## Oblasti využití

Kognitivní a klinická psychologie, vývojová psychologie, marketing, UX/UI design, vzdělávání

---

## Software a nástroje

### Proprietární
- [Tobii Pro Lab](https://www.tobii.com/products/software/behavior-research-software/tobii-pro-lab) — kompletní řešení pro Tobii eye-trackery
- [SR Research Data Viewer](https://www.sr-research.com/data-viewer/) — pro EyeLink systémy

### Open source
- [OGAMA](http://www.ogama.net/) — Open Gaze And Mouse Analyzer (Windows)
- [Pupil Labs Software](https://docs.pupil-labs.com/core/) — Pupil Capture + Player

### R a Python balíčky
- [eyetrackingR](http://www.eyetracking-r.com/) — VWP analýza, growth curve analysis
- [PyGaze](http://www.pygaze.org/) — Python knihovna pro sběr i analýzu
- [eyetools](https://github.com/aeye-lab/eyetools) — základní analýzy, detekce fixací

### Webové nástroje
- [WebGazer.js](https://webgazer.cs.brown.edu/) — webcam-based eye-tracking v prohlížeči

---

*Přednáška je součástí kurzu Specifické přístupy ke zpracování dat v psychologickém výzkumu.*

## Analýza a zpracování dat v R

Na následujícím webu jsou v R a s použitím programu eyetools ukázány základní postupy analýzy dat z eyetrackingu.

https://hejtmy.github.io/fhs-eye-tracking/


kód si můžete stáhnout zde:

https://github.com/hejtmy/fhs-eye-tracking
