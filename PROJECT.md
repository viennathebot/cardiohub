# IC Education Hub

*Interventional & Structural Cardiology Education Platform*

---

## Vision

A comprehensive, interactive education platform for interventional and structural cardiology — targeting fellows, early-career interventionalists, cath lab staff, and EMS providers.

---

## Core Features

### 1. Landmark Trials Database ⭐ NEW
**The definitive resource for IC/SC clinical evidence**

For each trial:
- **Overview:** Trial name, acronym, year, journal
- **Design:** RCT/registry, N=, population, arms, primary endpoint
- **Key Results:** Numbers that matter (HR, CI, p-value, NNT)
- **Clinical Impact:** What changed in practice
- **Critiques:** Limitations, controversies
- **Related Trials:** Follow-ups, competing evidence

**Categories:**
| Category | Example Trials |
|----------|----------------|
| **PCI vs CABG** | SYNTAX, EXCEL, NOBLE, FAME 3 |
| **DES Evolution** | SPIRIT, EVOLVE, ONYX ONE |
| **CTO PCI** | DECISION-CTO, EURO-CTO, RECHARGE |
| **TAVR** | PARTNER (A/B/3), EVOLUT, NOTION |
| **MitraClip/TEER** | EVEREST II, COAPT, MITRA-FR, RESHAPE-HF2 |
| **LAAO/Watchman** | PROTECT-AF, PREVAIL, CHAMPION-AF |
| **PFO Closure** | RESPECT, CLOSE, DEFENSE-PFO, Gore REDUCE |
| **Physiology** | DEFER, FAME, FAME 2, iFR-SWEDEHEART |
| **Antithrombotics** | DAPT, TWILIGHT, AUGUSTUS, MASTER DAPT |
| **ACS** | PLATO, TRITON-TIMI 38, COMPLETE |
| **Renal Denervation** | SYMPLICITY HTN-3, SPYRAL HTN-ON/OFF MED |

**Interactive Features:**
- Search/filter by procedure, year, outcome
- Side-by-side trial comparison tool
- "What would you do?" case scenarios based on trial data
- Quizzes: "Name that trial" from results

---

### 2. Hemodynamics Calculators
- Cardiac output (Fick, thermodilution)
- Valve areas (Gorlin, Hakki)
- Shunt calculations (Qp:Qs)
- Resistances (SVR, PVR)
- Visual feedback for abnormal values

### 3. Procedure Guides
- Step-by-step with images/video
- Tips & tricks from experienced operators
- Complication management

### 4. Case Library
- Real cases (de-identified)
- Before/after imaging
- Decision points highlighted

### 5. EMS/CCL Staff Training
- STEMI protocols
- Door-to-balloon optimization
- Team communication

---

## Tech Stack (Planned)

- **Frontend:** Next.js + Tailwind
- **Database:** PostgreSQL or Supabase
- **Auth:** Simple (maybe just password-protected initially)
- **Hosting:** Vercel

---

## Phases

| Phase | Focus | Status |
|-------|-------|--------|
| 1 | Research & design | 🔄 In progress |
| 2 | Landmark Trials MVP (10 key trials) | Planned |
| 3 | Hemodynamics calculators | Planned |
| 4 | Full trial database | Future |
| 5 | Case library | Future |

---

## Research Completed

See `RESEARCH.md` for:
- Competitor analysis (CardioVillage, ESC, ACC)
- Calculator UX patterns (HemoScope, Merge Hemo)
- Design benchmarks

---

## Notes

- Mobile-first design critical
- CME accreditation pathway (future)
- Consider podcast/audio summaries of trials
