# Landmark Trials Database — Structure

---

## Trial Entry Template

```yaml
trial:
  name: "PARTNER 3"
  acronym: "Placement of Aortic Transcatheter Valves 3"
  year: 2019
  journal: "NEJM"
  doi: "10.1056/NEJMoa1814052"
  
design:
  type: "RCT"
  n: 1000
  centers: 71
  countries: ["USA", "Canada", "Australia", "NZ", "Japan"]
  population: "Severe AS, low surgical risk (STS <4%)"
  arms:
    - name: "TAVR (SAPIEN 3)"
      n: 503
    - name: "SAVR"
      n: 497
  primary_endpoint: "Death, stroke, or rehospitalization at 1 year"
  follow_up: "1 year (ongoing to 10 years)"

results:
  primary:
    tavr: "8.5%"
    savr: "15.1%"
    difference: "-6.6%"
    hr: 0.54
    ci: [0.37, 0.79]
    p: 0.001
    nnt: 15
  secondary:
    - endpoint: "30-day mortality"
      tavr: "0.4%"
      savr: "1.1%"
    - endpoint: "Stroke at 30 days"
      tavr: "0.6%"
      savr: "2.4%"
    - endpoint: "New pacemaker"
      tavr: "6.6%"
      savr: "4.1%"

clinical_impact: |
  Expanded TAVR indication to low-risk patients. FDA approval 
  followed for SAPIEN 3 in low-risk AS. Fundamentally changed 
  the treatment algorithm for severe AS.

limitations:
  - "Highly selected population (excluded bicuspid, small annuli)"
  - "Short follow-up for durability assessment"
  - "Single valve platform"
  - "SAVR outcomes may not reflect all surgical centers"

controversies:
  - "Is 1-year follow-up sufficient for low-risk patients?"
  - "Valve durability concerns (TAVR vs surgical)"
  - "Cost-effectiveness debates"

related_trials:
  - "PARTNER A (2010) - High risk"
  - "PARTNER B (2010) - Inoperable"  
  - "PARTNER 2 (2016) - Intermediate risk"
  - "EVOLUT Low Risk (2019) - Parallel low-risk RCT"

tags: ["TAVR", "aortic stenosis", "low risk", "SAPIEN"]
```

---

## Priority Trials to Add (MVP)

### Tier 1 — Must Have (First 10)
1. **PARTNER 3** — Low-risk TAVR
2. **COAPT** — MitraClip in HFrEF
3. **MITRA-FR** — MitraClip negative trial (context)
4. **FAME 2** — FFR-guided PCI
5. **SYNTAX** — PCI vs CABG in complex CAD
6. **EXCEL** — Left main PCI
7. **PROTECT-AF** — Watchman LAAO
8. **CLOSE** — PFO closure after stroke
9. **TWILIGHT** — Ticagrelor monotherapy
10. **SYMPLICITY HTN-3** — Renal denervation (negative)

### Tier 2 — Add Next
- EVOLUT Low Risk, NOTION (TAVR)
- RESPECT, DEFENSE-PFO (PFO)
- CHAMPION-AF (LAAO)
- RESHAPE-HF2 (MitraClip)
- COMPLETE (Multivessel PCI in STEMI)
- DAPT (Duration)
- DECISION-CTO, EURO-CTO

### Tier 3 — Comprehensive
- All historical trials
- Subgroup analyses
- Meta-analyses

---

## Interactive Features

### 1. Trial Comparison Tool
Side-by-side comparison of related trials:
- COAPT vs MITRA-FR
- PARTNER 3 vs EVOLUT Low Risk
- CLOSE vs RESPECT vs DEFENSE-PFO

### 2. "Guess the Trial" Quiz
Show results → user guesses trial name

### 3. Timeline View
Visual timeline of when trials changed practice

### 4. Evidence Navigator
"Patient has X → Which trials apply?"

---

## Data Sources

- Original publications (NEJM, JACC, Lancet, Circulation)
- ClinicalTrials.gov
- FDA approval letters
- Society guidelines citing trials
