---
title: Požadavky k atestaci
description: Požadavky na atestaci kurzu Specifické přístupy zpracování dat v psychologii
---

## ZÁKLADNÍ INFORMACE

**Vypracujte výzkumný plán vaší výzkumné otázky (tématu bakalářské nebo magisterské práce), který kombinuje tři metody představené v kurzu.** Plán musí být konkrétní a detailní - ne jen obecný nástin, ale realizovatelný návod s popisy postupů sběru dat, operacionalizací proměnných a návrhy analýz. V projektu představíte, jak tyto tři metody dohromady vytvoří komplexnější odpověď na vaši otázku, než kdyby každá byla použita samostatně. Plán nemusíte skutečně realizovat, ale musí být relativně proveditelný s běžně dostupnými zdroji. 

**Všechny studie, které citujete a jejichž případné postupy analýz či metod využíváte, musíte skutečně přečíst** - během hodnocení můžete být požádáni o vysvětlení jejich metodologie.

Odevzdáváte dva PDF soubory: 

1. hlavní dokument 5-6 stran podle struktury níže, 

- **Rozsah:** 5-6 stran (bez titulní strany a literatury)
- **Termín odevzdání:** do konce ledna
- **Formát:** PDF odevzdaný emailem na lukas.hejtmanek@fhs.cuni.cz
- **Hodnocení:** [Hodnocení](#hodnocení)

---

# STRUKTURA PRÁCE

## VÝZKUMNÁ OTÁZKA A TEORETICKÝ RÁMEC
Přibližně 1 strana

**Povinné části:**

- ✓ Jasně formulovaná výzkumná otázka
- ✓ 2-3 relevantní teorie/koncepty poskytující teoretické ukotvení
- ✓ Vybrané 3 metody a **zdůvodnění** proč jsou právě tyto 3 metody pro vaší otázku vhodné

**Příklad kusu dobré formulace:**

> "Stress Reduction Theory (Ulrich et al., 1991) předpokládá fyziologický efekt přírody, zatímco Attention Restoration Theory (Kaplan, 1995) zdůrazňuje kognitivní procesy. Kombinace EEG (objektivní fyziologie), rozhovorů (subjektivní prožívání) a OSINT (reálné chování) umožní triangulaci mezi neurobiologií, fenomenologií a ekologickou validitou. zatímco EEG umožní lépe zodpovědět . . .

**Nesprávně:**

> "Budu zkoumat stres pomocí EEG, rozhovoru a eye-trackingu, metod protože mi to dá lepší představu o stresu."

---

## PŘEDSTAVENÍ METOD

Presentace tří zvolených metod a jak zodpovídají vaší otázku. Přibližně 3-4 strany, 1-1.5 strany na metodu

Pro **KAŽDOU** z 3 metod musíte zpracovat:

### A) Konkrétní postup sběru dat

**Nestačí:** 
> "Budu měřit EEG"

**Požadováno:**

> "Konkrétní přístroj/software (např. "Brain Products actiCHamp, 32 kanálů")
> - Parametry (vzorkovací frekvence, umístění elektrod)
> - Proč jsou důležité pro váš výzkum a jakou přesnost potřebujete (např. pro eye-racking dost závisí na velikosti stimulů a vzdálenosti od monitoru atd.)
> - Experimentální design (počet bloků, délka, kontrolní podmínky)
> - Počet účastníků a kritéria výběru
> - Délka sběru dat (realistická časová osa)

**Příklad pro EEG:**

> "32-kanálové EEG (Brain Products actiCHamp), umístění podle 10-20 systému, vzorkovací frekvence 500 Hz, impedance <5 kΩ. Design: 2 min baseline (zavřené oči) → 4 bloky po 5 min (2× přírodní video, 2× urbánní video, counterbalanced). N=30 studentů FF UK, nekuřáci, bez psychiatrické diagnózy. Sběr: 3 měsíce, 2 sezeníní/týden."

### B) Operacionalizace proměnných

**Jak přesně měříte/kódujete proměnné?**

**Příklady:**

- EEG: "Frontální alpha asymetrie = log(F4) - log(F3), pozitivnější hodnoty = větší approach motivation"
- Kvalitativní: "Kódování segmentů podle kategorií: uvolnění, únik, sociální funkce, spiritualita"
- OSINT: "Počet návštěv přírodních lokalit = check-iny >500m od urbánní zástavby (GIS klasifikace CORINE land cover)"

### C) Návrh analyzovaných metrik a způsobu analýzy

**Jaký software, jaké testy, jaké kroky?**

Analýzy a testy by měly odpovídat typu dat a jejich rozložení - měli byste si ověřit, co za typická data jde např z eye-trackingku - jsou normálně rozložená? Nebo spíše ne? Co říkají minulé studie na vaše téma?

**Kvantitativní:**

- "Párový t-test (JASP 0.18) porovnávající alpha asymetrii baseline vs. přírodní podmínka, alpha=0.05"
- "ANOVA s repeated measures, faktor: typ prostředí (příroda/město)"

**Kvalitativní:**

- "Tematická analýza podle Braun & Clarke (2006): (1) familiarizace s daty, (2) iniciální kódování v MAXQDA, (3) hledání témat, (4) revize, (5) definice témat, (6) write-up"
- "Intercoder reliability: druhý kodér nezávisle zakóduje 20% rozhovorů, Cohen's kappa >0.70"

**OSINT:**

- "Deskriptivní statistiky (M, SD) frekvence návštěv, Pearsonova korelace se skóre s XY"

### D) Přínos k zodpovězení výzkumné otázky

**Jakou konkrétní část otázky tato metoda zodpoví?**

**Příklad:**

> "Eye-tracking dokáže zodpoví, zda existuje neurofyziologický korelát restorativního efektu přírody na úrovni biofyziologické reaktivity pomocí kontinuálního měření velikosti pupily. Oproti self-reportu by tato odpověď měla být spolehlivější a lépe reflektovat fyziologický stav jedince (Citace XY)”

### E) Očekávané problémy a limity

**Buďte realističtí:**

- "EEG artefakty od očních pohybů při sledování videí - řešení: ICA korekce v EEGLAB"
- "Kvalitativní: riziko social desirability bias - částečně řeší anonymita a důraz na osobní zkušenost"
- "OSINT: závislost na ochotě sdílet data - limituje generalizovatelnost na tech-savvy populaci"


### F) Literatura

Najděte a citujte ke každé metodě 2-3 studie, které zkoumají stejné či podobné téma pomocí stejné metody. **Všechny citované studie musíte skutečně přečíst celé.** 

Vybrané studie musí:

1. **Zkoumají podobnou otázku** jako vy (nemusí být identická) pomocí zvolené metody
2. **Jsou publikované v posledních 10 letech** v recenzovaných časopisech
3. **Které jste SKUTEČNĚ přečetli celé** (nikoliv jen abstrakt)

**V textu ukažte:**

- Jak vás studie inspirovala: "Martinez et al. (2020) úspěšně kombinovali fMRI s experience sampling, což demonstrovalo..."
- Nebo jak se lišíte: "Na rozdíl od Smith et al. (2019), kteří použili pouze self-report, náš design přidává objektivní fyziologická data..."

---

## INTEGRACE A DISKUSE

Přibližně 1 strana

**Povinné části:**

- ✓ **Jak budete kombinovat výsledky?** Konkrétní příklad interpretace:

> "Pokud EEG ukáže větší levostrannou frontální aktivitu při přírodních scénách A rozhovory identifikují téma 'klid a bezpečí' A OSINT data ukážou vyšší frekvenci lesních návštěv, pak to podpoří hypotézu o..."

- ✓ **Očekávaný přínos kombinace** oproti použití jen 1 metody. V čem se přínosy metod budou lišit a co se může stát, když si výsledky budou protiřečit (zjeména například kvalitativní self-report vs. objektivní EEG či eye-tracking)

- ✓ **2-3 hlavní limity celého designu:**
  - Metodologické (např. kauzalita, generalizovatelnost)
  - Praktické (čas, finance, vzorek)
  - Teoretické (alternativní vysvětlení)
  
---

## HODNOCENÍ

Kurz je splněný pokud dosáhnete 35ti bodů.

### Bodové ohodnocení:

- **Konkrétnost (10 bodů):** Detailní postupy (ne obecné formulace)
- **Logika (10 bodů):** Metody skutečně odpovídají výzkumné otázce
- **Provázanost (10 bodů):** 3 metody se smysluplně doplňují
- **Kritické myšlení (10 bodů):** Vlastní úvaha (ne jen AI output)
- **Znalost studií (10 bodů):** Citace jsou relevantní a přečtené

### Nutné náležitosti reportu:

Pokud ve vašem reportu něco z následujících věcí chybí, je to důvod k udělení 0 bodů.

- [ ]  Jasně formulovaná výzkumná otázka
- [ ]  Teoretické zakotvení otázky
- [ ]  Integrace: jak budete kombinovat výsledky z různých metod
- [ ]  Diskuse limitů designu
- [ ]  Seznam literatury s citacemi

Pro každou z metod:
  - [ ]  Konkrétní postup sběru
  - [ ]  Operacionalizace proměnných
  - [ ]  Specifikovaná analýza (software/testy)
  - [ ]  Přínos k zodpovězení otázky
  - [ ]  Očekávané problémy
  - [ ]  Načtení a citace 2-3 studií zkoumajících stejnou otázku pomocí zvolené metody


