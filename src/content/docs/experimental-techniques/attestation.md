---
title: Požadavky na zápočet
description: Požadavky na atestační úlohu v PsychoPy
---

Pro úspěšné zakončení kurzu je nutné splnit následující požadavky.

## Experimentální úloha v PsychoPy

### Základní koncept

Vytvořte vlastní psychologický experiment v PsychoPy, který bude testovat **rozpoznávání emočních výrazů tváře v různých podmínkách**.

Experiment testuje, jak různé faktory (doba prezentace, orientace stimulu, postupné odhalování) ovlivňují přesnost rozpoznávání emočních výrazů.

## Povinné prvky experimentu

Váš experiment **MUSÍ** obsahovat:

- ✅ **Instrukce pro účastníky před každým blokem**
- ✅ **Minimálně tři různé experimentální podmínky**
- ✅ **Tréninkovou fázi se zpětnou vazbou**
- ✅ **Sběr reakčních časů a přesnosti odpovědí**
- ✅ **Randomizaci pořadí stimulů**
- ✅ **Možnost přerušit experiment klávesou ESC**
- ✅ **Minimálně 15 pokusů v každé experimentální podmínce**
- ✅ **Export dat ve formátu vhodném pro statistickou analýzu**

## Technické požadavky

### Software
- ✅ Funkční kód v PsychoPy (Builder nebo Coder)
- ✅ Přenositelnost experimentu mezi počítači
- ✅ Správné ukládání dat do souboru (CSV formát)
- ✅ Komentovaný kód (pokud používáte Code Components)

### Stimuly
- Emoční výrazy tváře (šťastný/smutný)
- Různé tváře (pohlaví/věk)
- Možnosti získání stimulů:
  - AI generování
  - Existující datasety (např. [FEI Face Database](https://fei.edu.br/~cet/facedatabase.html))
  - Fotografování s informovaným souhlasem

**Inspirace:** [Vzhůru do vesmíru - Emotion Recognition](https://cognitive-test.vzhurudovesmiru.cz/run/emotion-recognition)

## Struktura experimentu

### Všechny pokusy
- **Instrukce:** Před začátkem experimentu a před každým blokem
- **Fixační kříž mezi pokusy:** 500ms
- **Nastavení ze souboru:** Načítání seznamu stimulů a podmínek z CSV/xlsx
- **Odpověď:** Klávesy - reagovat a ukončit pokus pouze po stisku správné klávesy (tedy ne například když stisknete Backspace)


### Blok 1: Tréninková fáze ⚙️

- **Počet pokusů:** 10
- **Zpětná vazba:** Ano ("Správně!" / "Nesprávně")
- **Doba prezentace:** 1000ms
- **Randomizace:** Ne, sekvenční pořadí, pro všechny stejné
- **Účel:** Seznámení s úlohou a rozhraním, implementace zpětné vazby

:::note[Zdroje]
- [Feedback v psychopy](https://www.youtube.com/watch?v=o6gG1LRngmU)
- https://psychopy.org/tutorials/builderFeedback.html
:::

### Blok 2: Krátká doba prezentace ⚡

- **Počet pokusů:** 20 (10 šťastných, 10 smutných)
- **Doba prezentace:** 100-1000ms náhodně
- **Pořadí:** Randomizované ze souboru, náhodné pořadí
- **Testuje:** Rychlé zpracování emocí

### Blok 3: Odhalující se tvář 🎭

- **Počet pokusů:** 20 (10 šťastných, 10 smutných)
- **Prezentace:** Tvář se pomalu odhaluje po dobu 2 sekund
- **Pořadí:** Randomizované
- **Testuje:** Postupné zpracování informace
- **Implementace:** Použijte masku nebo opacity gradient

:::note[Funkce odhalování]
- [PsychoPy Opacity Tutorial](https://psychopy.org/tutorials/animation.html#fade-in-fade-out-effects)

### Blok 4: Rotované tváře 🔄

- **Počet pokusů:** 20 (10 šťastných, 10 smutných)
- **Rotace:** Náhodně mezi -180° až +180° od vertikály
- **Doba prezentace:** 500ms
- **Pořadí:** Randomizované, randomizace jak stimulu tak rotace
- **Testuje:** Rozpoznávání při narušené orientaci

:::note[Image Component]
Pečlivě nastudujte možnosti Image Component v PsychoPy pro rotaci obrázků.
https://www.psychopy.org/builder/components/ImageComponent
:::

## Požadované PsychoPy komponenty

### Vizuální komponenty
- `Image` - pro stimuly tváří
- `Text` - pro instrukce a zpětnou vazbu
- `Fixation cross` - fixační kříž mezi pokusy

### Input komponenty
- `Keyboard` - sběr odpovědí účastníků

### Logické komponenty
- `Code` - pro zpětnou vazbu 
- `Loop` - pro opakování pokusů
- `Routine` - pro jednotlivé bloky

### Příklad struktury v Builderu

```
Instrukce
  └─ Text: "Vítejte v experimentu..."
  └─ Keyboard: čeká na mezerník

Trénink_Loop
  └─ Fixace (500ms)
  └─ Stimulus_Trénink (500ms)
  └─ Odpověď
  └─ Zpětná_vazba
      └─ Code: if response.corr: msg="Správně!"

Instrukce_Blok2
  └─ Text: "Nyní budou tváře zobrazeny velmi krátce..."

Experiment_Loop_Blok2
  └─ Fixace (500ms)
  └─ Stimulus (100ms)
  └─ Odpověď

[podobně pro Bloky 3 a 4]

Poděkování
  └─ Text: "Děkujeme za účast!"
```

## Výstupní data

Váš experiment musí ukládat následující proměnné:

| Proměnná | Popis | Příklad |
|----------|-------|----------|
| `participant` | ID účastníka | P001 |
| `trial_number` | Číslo pokusu | 1, 2, 3... |
| `block` | Číslo bloku | 1, 2, 3, 4 |
| `condition` | Podmínka | "training", "short", "reveal", "rotated" |
| `emotion` | Typ emoce | "happy", "sad" |
| `stimulus_file` | Název souboru | "face_happy_01.jpg" |
| `rotation` | Úhel rotace | 0, 45, -90... (jen Blok 4) |
| `response` | Odpověď účastníka | "left", "right" |
| `correct` | Správnost | 1 (správně), 0 (špatně) |
| `rt` | Reakční čas (ms) | 523.45 |
| `date` | Datum sezení | 2025-11-25 |
| `time` | Čas sezení | 14:30:15 |

## Sběr dat

**Požadavek:** Sbírejte data od **5 účastníků** (nebo 5 vlastních sezení)

### Před sběrem dat:
1. ✅ Otestujte experiment na jiném PC případně na Mac
2. ✅ Připravte informovaný souhlas
3. ✅ Ověřte, že se data ukládají správně
4. ✅ Vytvořte standardizované instrukce

### Během sběru:
- Zajistěte konzistentní podmínky (osvětlení, hluk)
- Buďte přítomni pro případné otázky
- Zaznamenejte případné technické problémy

## Odevzdání

### Část 1: Experimentální soubory (ZIP)

📦 **Struktura ZIP souboru:**

```
experiment_jmeno-prijmeni.zip
├── experiment.psyexp          # PsychoPy experiment soubor
├── experiment.py              # Python verze (volitelné)
├── settings/                   # Složka se stimuly
│   ├── settings-fast.xlsx   # Konfigurační soubor pro blok 2
│   ├── ...
├── stimuli/                   # Složka se stimuly
│   ├── happy_01.jpg
│   ├── happy_02.jpg
│   ├── sad_01.jpg
│   └── ...
├── data/                      # Prázdná složka pro data
├── README.txt                 # Instrukce ke spuštění
```

**⚠️ DŮLEŽITÉ:** Experiment musí být **přenositelný** a funkční na jiném počítači!
- Používejte správné cesty k souborům
- Otestujte na jiném PC než na kterém jste jej vytvořili
- Všechny potřebné soubory musí být v ZIP

### Formát odevzdání

📧 **Email předmětu:** `[YMPC002] Atestace - Jmeno Prijmeni`

**Přílohy:**
1. `experiment_Jmeno-Prijmeni.zip` (funkční PsychoPy experiment)

**Termín:** Konec zimního semestru

## Hodnocení

| Kritérium | Body | Popis |
|-----------|------|-------|
| **Funkčnost experimentu** | 30 | Experiment se spustí a funguje podle specifikace |
| **Čistota a srozumitelnost** | 20 | Instrukce jsou jasné a srozumitelné |
| **CELKEM** | 50 | |

**Minimum pro zápočet:** 35 bodů

## Časté otázky (FAQ)

### Mohu použít jiný experiment než rozpoznávání emocí?

Prosím, držte se zadaného tématu. Cílem je naučit se specifické techniky. Pokud chcete experiment rozšířit, můžete přidat další podmínky, ale základ musí zůstat stejný.

### Můžu pracovat ve dvojici?

Ne, atestace je **individuální**.

### Jak získám stimuly tváří?

Možnosti:
- [Chicago Face Database](https://www.chicagofaces.org/)
- AI generování (DALL-E, Midjourney)
- Vlastní fotografie s informovaným souhlasem

### Co když experiment nefunguje na jiném PC?

To je nejčastější problém. Řešení:
1. Používejte **relativní cesty**: `./stimuli/face.jpg` místo `C:/Users/...`
2. Zahrňte všechny soubory do ZIP
3. Otestujte na PC kamaráda/kolegyně

### Musím sbírat data od jiných lidí?

Ne, můžete sbírat 5 vlastních sezení. Ale doporučujeme alespoň pár externích účastníků pro ověření, že jste vše sepsali srozumitelně a správně.

### Jak implementovat "odhalující se tvář"?

Možnosti:
1. **Opacity transition:** Postupně zvyšovat opacity z 0 na 1
2. **Mask:** Použít masku, která se postupně odhaluje
3. **Multiple frames:** Sekvence obrázků s postupným odhalením

### Kde najdu pomoc při problémech?

**AI modely:** ChatGPT, GitHub Copilot jsou poměrně zdatné ve výpomoci s PsychoPy kódem.
**Oficiální dokumentace:** [https://www.psychopy.org/](https://www.psychopy.org/)

## Kontrolní checklist před odevzdáním

### Experiment
- [ ] Všechny 4 bloky implementovány
- [ ] Tréninková fáze se zpětnou vazbou
- [ ] Randomizace stimulů
- [ ] Instrukce před každým blokem
- [ ] Funguje ESC pro ukončení
- [ ] Data se ukládají do CSV
- [ ] Relativní cesty k souborům
- [ ] Otestováno na jiném PC

### Data
- [ ] 5 účastníků / sezení
- [ ] Všechny požadované proměnné
- [ ] Data jsou kompletní


### Odevzdání
- [ ] ZIP obsahuje všechny potřebné soubory
- [ ] Správný formát emailu
- [ ] Odevzdáno včas

---

**Hodně štěstí! 🧠🔬**

Pokud máte jakékoli dotazy, neváhejte se zeptat na konzultacích nebo přes Discord.
