---
title: "DPIA vs. FRIA: The EU's Double Gate for High-Risk AI Compliance"
description: "How GDPR's data-protection audit and the AI Act's fundamental-rights exam actually work together — and why the popular LinkedIn infographics are getting dangerously wrong."
pubDate: 2026-04-24
tags: ["DPIA", "FRIA", "AI Act", "GDPR", "Compliance", "DACH"]
author: "Dr. Sait Yalazay"
authorTitle: "CISO | CISM | CIPP | AAISM | LA 27001, 27701, 22301, 42001"
authorRole: "Founder | Architect of Automated Compliance Systems for NIS2, GDPR, ISMS, BCM, DORA, Tisax & AI Act"
featured: true
draft: false
---


A DACH bank is preparing to go live with its new credit-scoring AI in the summer of 2026. The GDPR team has spent three weeks on a meticulous DPIA: data-flow diagrams, TOM list, risk matrix, DPO consultation — everything in place. In the final go-live meeting, compliance asks: "What about the FRIA?"

Silence. The product manager responds: "Isn't that the same thing?"

It isn't. And after 2 August 2026[^1], that confusion can expose the bank to a mandatory notification to the market surveillance authority, administrative fines of up to €15 million — and possibly worse, a stop-order on the credit-scoring system itself.

Over the last few weeks, LinkedIn has been flooded with comparison infographics that simplify the story: DPIA is "data safety," FRIA is "human rights"; DPIA comes from GDPR, FRIA from the AI Act. True — but incomplete, and in several critical places misleading. This article returns the two instruments to their legal sources, maps where they actually overlap and where they don't, and proposes a unified assessment strategy for CISOs.

## Key Takeaways

- FRIA is not a DPIA for AI. It is a separate instrument with a different subject and different penalty track.
- Only two deployer categories are FRIA-obligated under Article 27: public-law bodies / public-services providers, and deployers of credit-scoring or life-health insurance AI — not every high-risk AI deployer.
- Missing a FRIA caps at €15M / 3% under AI Act Art. 99(4), not €35M. But GDPR, notification, and market-withdrawal penalties stack — real worst-case exposure is closer to €32.5M plus a stop order.
- Article 27(4) lets you build one unified document covering both — but only if you understand the different scopes. A DPIA copy-paste will fail.

## Two assessments, two logics

DPIA (Data Protection Impact Assessment) is governed by GDPR Article 35[^2]. The logic is simple: if personal-data processing is likely to result in a high risk to natural persons — especially large-scale profiling, biometrics, or systematic monitoring — the controller must document the risk, plan mitigations, and consult the supervisory authority before processing begins.

FRIA (Fundamental Rights Impact Assessment) is a much newer instrument, introduced by AI Act Article 27[^3]. Before a high-risk AI system is first deployed, certain categories of **deployer** must assess — in writing — the system's context of use, the persons and groups likely to be affected, specific harm risks to fundamental rights, human-oversight measures, and mitigation plans if risk materializes[^4]. The results are notified to the market surveillance authority using a template from the AI Office.

Five critical dimensions separate the two instruments — and the most important one isn't in the labels, but in the subject covered:

| Dimension | DPIA — Data Protection Impact Assessment | FRIA — Fundamental Rights Impact Assessment |
|---|---|---|
| **Legal basis** | GDPR Article 35 | AI Act Article 27 (Regulation EU 2024/1689) |
| **In force** | Since 25 May 2018 | Mandatory from 2 August 2026 |
| **Trigger** | Personal-data processing likely to result in high risk to natural persons | First deployment of a high-risk AI system under Annex III |
| **Who must do it** | The data controller | Specific deployer categories: public-law bodies, public-service providers, plus all deployers of credit-scoring and life/health insurance AI |
| **Focus** | Personal-data processing operations | All relevant rights in the EU Charter — non-discrimination, human dignity, fair trial, freedom of expression, and more |
| **Subject covered** | Only data subjects | All affected persons or groups — even those whose personal data is not processed |
| **Output** | Internal document; DPO consultation; if high residual risk, prior consultation with the supervisory authority | Mandatory notification to the market surveillance authority, using the AI Office template |
| **Core question** | Is personal data safe from leak and misuse? | Is the decision fair, non-discriminatory, and respectful of human dignity? |

DPIA's subject is limited to **data subjects** — natural persons whose personal data is being processed. FRIA's subject is **everyone** the system might affect — regardless of whether their personal data is processed at all. An AI used by a municipality for traffic management can disproportionately restrict a neighborhood's freedom of movement without ever reading a license plate. DPIA doesn't see this; FRIA must. The EU Fundamental Rights Agency's 2020 field study — based on 91 interviews across five EU Member States — documents this gap empirically: prior assessments *"rarely address potential impacts on fundamental rights"*[^5].

> DPIA sees the person whose data is processed. FRIA sees everyone the system might harm.

## Who actually needs a FRIA? The reality the infographics skip

Most LinkedIn infographics summarize FRIA as: "High-risk AI deployment — recruitment, credit scoring, healthcare, law enforcement." That sentence describes the AI Act's high-risk list (Annex III) — not the FRIA-obligated deployer categories. The two are not the same.

Article 27 narrows FRIA obligations to **two** specific categories:

1. **Public-law bodies and private entities providing public services** — when they deploy a high-risk AI system listed in Annex III. Recital 96 defines "public services" broadly: education, healthcare, social services, housing, and the administration of justice[^6]. This reaches far beyond the pure public sector: a publicly funded private university, a contracted social-services provider, even a private hospital chain can fall in scope.

2. **Deployers of credit scoring / creditworthiness** (Annex III 5(b)) **and life/health insurance risk assessment and pricing** (Annex III 5(c)) — regardless of sector or public/private status.

The practical consequence is striking. An AI recruitment tool used by a private company's HR team is high-risk under Annex III, but typically not FRIA-obligated — because the deployer is neither a public-law body nor a public-services provider. The same tool, used by a municipal employment agency, becomes FRIA-mandatory. The system didn't change; the deployer's legal profile did.

There's also an exception for critical infrastructure (Annex III point 2)[^7]: AI systems used as safety components in road-traffic management, water/gas/heating/electricity supply, or critical digital infrastructure are exempt from FRIA — even when the deployer is a public body. They remain high-risk; they're just outside the scope of Article 27.

For a CISO, this means **scope triage comes before DPIA work**: (a) Is it a high-risk system under Annex III? (b) Does my deployer category fall under Article 27? (c) Do I fall into the Annex III point 2 exception? The answers determine what kind of compliance mapping your organization actually needs.

> The system didn't change. The deployer's legal profile did.

## "We already do DPIAs. Why FRIA?"

This is a real concern — but it's based on a misread. FRIA is not an extension of DPIA. Mantelero's 2024 analysis — now the standard academic reference on FRIA methodology — argues that Article 27 does more than add another technical check: it requires deployers to document *why, where, and how* the high-risk AI system will actually be used, and to systematically evaluate rights that DPIAs typically leave outside their scope[^8].

The good news: the AI Act deliberately builds a bridge to avoid duplicate work. Article 27(4) provides that obligations already met through a DPIA under GDPR Article 35 don't need to be repeated in the FRIA; the FRIA *complements* the DPIA[^9]. In practice, a well-built DPIA covers roughly 30-40% of a FRIA — particularly the data-processing description, data-subject categories, security measures, and risk matrix.

But overlap isn't identity. The rights each instrument covers are fundamentally different:

- **DPIA**: only the right to data protection (Charter Article 8; the rights and freedoms GDPR protects around personal data).
- **FRIA**: all relevant rights in the EU Charter of Fundamental Rights — human dignity (Art. 1), non-discrimination (Art. 21), the right to a fair trial (Art. 47), freedom of expression (Art. 11), the right to good administration (Art. 41) — and more, depending on the AI system's context.

Consider a triage AI used in a public healthcare system. The DPIA evaluates how patient data is processed, the access controls, the retention periods. The FRIA asks: does this algorithm systematically assign lower priority to certain demographics? Does the opacity of the decision pattern prevent patients from exercising their right to appeal? Is the "human oversight" actually meaningful — or has it collapsed into a routine rubber-stamp? DPIA asks none of these questions directly. FRIA must answer all of them.

## The price of getting this wrong

Most LinkedIn infographics quote one penalty figure: "Up to €35 million or 7% of global turnover, whichever is higher." The number is correct — but not for FRIA violations. AI Act Article 99 sets a three-tier structure, and FRIA sits in the middle tier, not the top.

| Penalty tier | What it covers |
|---|---|
| **€35M or 7% of global turnover** (whichever is higher) | Article 5 — prohibited AI practices (social scoring, subliminal manipulation, unauthorized real-time biometric identification, etc.) |
| **€15M or 3% of global turnover** (whichever is higher) | Violations of Art. 16 (providers), 22 (authorized representatives), 23 (importers), 24 (distributors), 26 (deployers), 31/33/34 (notified bodies), 50 (transparency). FRIA (Art. 27) is not named explicitly here but is part of the deployer-obligation block. |
| **€7.5M or 1% of global turnover** (whichever is higher) | Supplying incorrect, incomplete, or misleading information to authorities |
| **SME exception** | For SMEs, whichever cap is LOWER applies (Art. 99(6)) |

Failing to conduct a FRIA — or failing to notify the market surveillance authority — caps at **€15 million or 3% of global turnover** (whichever is higher), not €35 million[^10]. The €35M / 7% tier is reserved for Article 5 prohibited practices — social scoring, subliminal manipulation, unauthorized real-time biometric identification.

This distinction matters — but it shouldn't be reassuring. For three reasons.

**First**, the same incident usually triggers GDPR liability too. In credit scoring or health triage, a missing FRIA almost always comes paired with a missing or thin DPIA. Failing to conduct a DPIA breaches GDPR Article 35 and triggers up to €10M or 2% under Article 83(4); if the same incident also breaches the data-processing principles (Art. 5) or the lawful-basis requirements (Art. 6), it escalates to €20M or 4% under Article 83(5)[^11]. AI Act penalties apply independently of GDPR; the two regimes don't substitute — they stack. The EDPB's Opinion 28/2024 (17 December 2024)[^12] already sets case-by-case supervisory standards for anonymity, legitimate interest, and unlawfully processed training data in AI models — a clear signal that DPAs expect a solid DPIA alongside any FRIA.

**Second**, Article 79 **corrective measures** apply independently of any monetary fine[^13]. The market surveillance authority can order a non-compliant high-risk AI system to be withdrawn from the market, recalled, or prohibited. For an insurer, having a pricing model shut down within 24 hours has business consequences that routinely dwarf the fine itself.

**Third**, notifying FRIA results to the authority is mandatory under Article 27(3)[^14]. Failing to notify — or submitting incorrect or misleading information — triggers an additional cap of €7.5M under Article 99(5). Three distinct penalty layers on a single incident are possible.

> AI Act penalties don't substitute for GDPR. They stack.

## The unified assessment: one document, two compliances

The AI Act's legislative logic explicitly targets duplicate work. But when a unified document collapses into a single checkbox exercise, it defeats its own purpose. The 2025 FRIA guide by ECNL and the Danish Institute for Human Rights warns exactly here: *"The temptation to reduce FRIA compliance to a simple checklist is strong and inherently dangerous"*[^15]. In practice, this means designing a unified assessment document — but one built to *inform* decisions, not to justify them after the fact. For those familiar with CyberWerk Suite's 18-step PDCA pipeline in Privacy Shield, the following structure will feel familiar:

### Shared intake section

- System description — provider, version, intended use, deployment environment
- Processing / use flow — what inputs, what outputs, what decisions it feeds
- Duration and frequency — first deployment date, scale, number of persons potentially affected

### Part A — Data Protection (DPIA, GDPR Article 35)

- Data categories, special-category data, lawful bases (GDPR Art. 6 and 9)
- Data transfers, third-country transfers, processor agreements (Art. 28)
- Data-subject rights and the mechanisms to satisfy them
- TOM — technical and organizational measures: pseudonymization, encryption, access control
- Risk assessment on data subjects' rights and residual risk

### Part B — Fundamental Rights (FRIA, AI Act Article 27)

- Categories of affected persons and groups — including non-data-subjects
- Charter rights impact map — non-discrimination, human dignity, fair trial, freedom of expression, good administration — which apply to this system's context
- Specific harm scenarios — bias, hallucination, automation bias, irreversible false positives
- Human-oversight mechanism (aligned with Art. 14) — genuinely "meaningful" oversight, or a rubber-stamp?[^16]
- Right to explanation and complaint channel (Art. 86) — how affected persons can contest the decision[^17]

### Shared output section

- Mitigation measures, matched to each identified risk
- Residual risk and tolerance justification
- Re-assessment triggers (model drift, dataset update, use-context change, complaint-threshold breach)
- Market-surveillance notification text (using the AI Office template)

## The CISO's seven-step roadmap

1. **Scope triage (Day 1)**. For each AI system, answer three questions: Is it in Annex III? Does my deployer category fall under Art. 27? Do I qualify for the critical-infrastructure exception? Build a single matrix: FRIA-mandatory, FRIA-exempt, DPIA-only, no obligation. For German organizations, the DSK's two orientation papers (May 2024 and June 2025) concretize the additional DSGVO expectations[^18].

2. **DPIA inventory**. Map the existing DPIAs you have for high-risk AI systems. How much of each satisfies the Article 27(4) bridge? Usually 30-40% — but the remaining 60-70% is new territory, not something a DPIA copy-paste can cover.

3. **Fundamental rights matrix**. For each high-risk system, turn the seven chapters of the EU Charter (dignity, freedoms, equality, solidarity, citizens' rights, justice, general provisions) into a checklist. Which could be concretely affected? For each, document the argument — don't just write "not affected."

4. **Stakeholder consultation**. A FRIA's credibility depends on whether you consulted representatives of the affected groups. Employee representatives, consumer associations, disability advocacy groups, ethics boards — whichever fit the context. This is the step most organizations skip and most auditors will notice.

5. **Human oversight and complaint mechanism**. Article 14 requires "meaningful" human oversight. "A human approves the AI's recommendation" doesn't clear the bar — the person overseeing must have the authority, time, and training to understand, question, and override. Document how you've operationalized Art. 86's right to explanation.

6. **Notification pipeline**. The AI Office will publish a template under Art. 27(5). Have your internal version ready before the template drops; once it does, the transition becomes a data-mapping exercise. Clarify in advance who notifies, through which channel, in which language.

7. **Living-document regime**. Art. 27(2) mandates the FRIA be kept current. Update it when the model is retrained, the dataset changes, a new use-context is introduced, or a systematic complaint pattern emerges. Wire this to your GRC tool's event triggers — an annual manual review won't cut it.

## The bottom line

The countdown to 2 August 2026 is on. FRIA is not the AI-era version of DPIA. It is a different legal instrument with a different ethical focus, and it covers people who are not data subjects. Combining the two lowers compliance cost — but only for organizations that understand the different scopes, the different outputs, and the different notification mechanisms.

The LinkedIn comparison infographics are a decent awareness starter. But a legal director acting only on them will defend the company against the wrong penalty tier: preparing for a €35M worst case when the actual risk is €15M (AI Act 99(4) — FRIA/Art. 26) + €10M (GDPR 83(4) — DPIA) + €7.5M (AI Act 99(5) — notification) + a potential 4% GDPR 83(5) ceiling (if principles are breached) + a market-withdrawal order under AI Act Article 79. The CISO's job is to separate these layers, build a unified assessment framework, and move the organization from "reactive documentation" to "proactive, responsible innovation."

> Compliance isn't a bureaucracy you resist. Done right, it's your time-to-market advantage.

---

**How is your organization's FRIA scoping conversation going?** I'm particularly interested in how DACH companies are mapping the deployer-category question under Article 27 — drop a comment with your take, or [send me a message on LinkedIn](https://www.linkedin.com/in/dr-sait-yalazay-7b71391a/) if you'd rather not discuss it in public.

---

[^1]: AI Act, Article 113 (Entry into force and application): *"This Regulation shall enter into force on the twentieth day following that of its publication in the Official Journal of the European Union. It shall apply from 2 August 2026. However: (a) Chapters I and II shall apply from 2 February 2025; (b) Chapter III Section 4, Chapter V, Chapter VII and Chapter XII and Article 78 shall apply from 2 August 2025, with the exception of Article 101; (c) Article 6(1) and the corresponding obligations in this Regulation shall apply from 2 August 2027."* High-risk-system obligations — including FRIA under Article 27 — therefore apply from 2 August 2026; the penalty framework (Chapter XII / Article 99) from 2 August 2025.

[^2]: GDPR, Article 35(1): *"Where a type of processing in particular using new technologies, and taking into account the nature, scope, context and purposes of the processing, is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall, prior to the processing, carry out an assessment of the impact of the envisaged processing operations on the protection of personal data. A single assessment may address a set of similar processing operations that present similar high risks."*

[^3]: Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act), OJ L 2024/1689, 12.7.2024 (hereinafter: AI Act).

[^4]: AI Act, Article 27(1): *"Prior to deploying a high-risk AI system referred to in Article 6(2), with the exception of high-risk AI systems intended to be used in the area listed in point 2 of Annex III, deployers that are bodies governed by public law, or are private entities providing public services, and deployers of high-risk AI systems referred to in points 5 (b) and (c) of Annex III, shall perform an assessment of the impact on fundamental rights that the use of such system may produce."*

[^5]: European Union Agency for Fundamental Rights (FRA), *Getting the future right — Artificial intelligence and fundamental rights*, Luxembourg, 2020. Based on 91 interviews conducted in Estonia, Finland, France, the Netherlands, and Spain.

[^6]: AI Act, Recital 96 (excerpt): *"In order to efficiently ensure that fundamental rights are protected, deployers of high-risk AI systems that are bodies governed by public law, or private entities providing public services and deployers of certain high-risk AI systems listed in an annex to this Regulation, such as banking or insurance entities, should carry out a fundamental rights impact assessment prior to putting it into use. Services important for individuals that are of public nature may also be provided by private entities. Private entities providing such public services are linked to tasks in the public interest such as in the areas of education, healthcare, social services, housing, administration of justice."*

[^7]: AI Act, Annex III, point 2 (Critical infrastructure): *"AI systems intended to be used as safety components in the management and operation of critical digital infrastructure, road traffic, or in the supply of water, gas, heating or electricity."* By virtue of Article 27(1), deployers of AI systems falling under this Annex III point are exempt from the FRIA obligation.

[^8]: Mantelero, A., *The Fundamental Rights Impact Assessment (FRIA) in the AI Act: Roots, legal obligations and key elements for a model template*, Computer Law & Security Review, Vol. 54, 106020 (2024). DOI: 10.1016/j.clsr.2024.106020.

[^9]: AI Act, Article 27(4): *"Where any of the obligations laid down in this Article is already met through the data protection impact assessment conducted pursuant to Article 35 of Regulation (EU) 2016/679 or Article 27 of Directive (EU) 2016/680, the fundamental rights impact assessment referred to in paragraph 1 of this Article shall complement that data protection impact assessment."*

[^10]: AI Act, Article 99 (penalties framework). Article 99(3): *"Non-compliance with the prohibition of the AI practices referred to in Article 5 shall be subject to administrative fines of up to 35 000 000 EUR or, if the offender is an undertaking, up to 7 % of its total worldwide annual turnover for the preceding financial year, whichever is higher."* Article 99(4): *"Non-compliance with any of the following provisions related to operators or notified bodies, other than those laid down in Articles 5, shall be subject to administrative fines of up to 15 000 000 EUR or, if the offender is an undertaking, up to 3 % of its total worldwide annual turnover... (a) obligations of providers pursuant to Article 16; (b) obligations of authorised representatives pursuant to Article 22; (c) obligations of importers pursuant to Article 23; (d) obligations of distributors pursuant to Article 24; (e) obligations of deployers pursuant to Article 26; (f) requirements and obligations of notified bodies; (g) transparency obligations for providers and deployers pursuant to Article 50."*

[^11]: GDPR, Article 83(4): *"Infringements of the following provisions shall be subject to administrative fines up to 10 000 000 EUR, or in the case of an undertaking, up to 2 % of the total worldwide annual turnover of the preceding financial year, whichever is higher: (a) the obligations of the controller and the processor pursuant to Articles 8, 11, 25 to 39 and 42 and 43..."* DPIA (Article 35) is captured within point (a). Article 83(5): *"...up to 20 000 000 EUR, or in the case of an undertaking, up to 4 % of the total worldwide annual turnover... (a) the basic principles for processing, including conditions for consent, pursuant to Articles 5, 6, 7 and 9..."*

[^12]: European Data Protection Board, *Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models*, 17 December 2024.

[^13]: AI Act, Article 79(2) (excerpt): *"Where... the market surveillance authority finds that the AI system does not comply with the requirements and obligations laid down in this Regulation, it shall without undue delay require the relevant operator to take all appropriate corrective actions to bring the AI system into compliance, to withdraw the AI system from the market, or to recall it..."* Article 79(5): *"Where the operator of an AI system does not take adequate corrective action..., the market surveillance authority shall take all appropriate provisional measures to prohibit or restrict the AI system's being made available on its national market..."*

[^14]: AI Act, Article 27(3): *"Once the assessment referred to in paragraph 1 of this Article has been performed, the deployer shall notify the market surveillance authority of its results, submitting the filled-out template referred to in paragraph 5 of this Article as part of the notification."*

[^15]: European Center for Not-for-Profit Law (ECNL) & Danish Institute for Human Rights (DIHR), *A Guide to Fundamental Rights Impact Assessments (FRIA)*, 2025.

[^16]: AI Act, Article 14(1): *"High-risk AI systems shall be designed and developed in such a way, including with appropriate human-machine interface tools, that they can be effectively overseen by natural persons during the period in which they are in use."*

[^17]: AI Act, Article 86(1): *"Any affected person subject to a decision which is taken by the deployer on the basis of the output from a high-risk AI system listed in Annex III... shall have the right to obtain from the deployer clear and meaningful explanations of the role of the AI system in the decision-making procedure and the main elements of the decision taken."*

[^18]: Datenschutzkonferenz (DSK), *Orientierungshilfe — Künstliche Intelligenz und Datenschutz*, Version 1.0, 6 May 2024; and DSK, *Orientierungshilfe zu empfohlenen technischen und organisatorischen Maßnahmen bei der Entwicklung und beim Betrieb von KI-Systemen*, June 2025.
