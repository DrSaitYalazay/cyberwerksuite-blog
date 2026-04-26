---
title: "DPIA vs. FRIA: Das doppelte Tor der EU für Hochrisiko-KI-Compliance"
description: "Wie das DSGVO-Datenschutz-Audit und die Grundrechtsprüfung des AI Act tatsächlich zusammenwirken — und warum die populären LinkedIn-Infografiken gefährlich falsch liegen."
pubDate: 2026-04-24
tags: ["DPIA", "FRIA", "AI Act", "DSGVO", "Compliance", "DACH"]
author: "Dr. Sait Yalazay"
authorTitle: "CISO | CISM | CIPP | AAISM | LA 27001, 27701, 22301, 42001"
authorRole: "Founder | Architect of Automated Compliance Systems for NIS2, GDPR, ISMS, BCM, DORA, Tisax & AI Act"
featured: true
draft: false
---


Eine DACH-Bank steht im Sommer 2026 kurz vor dem Go-Live ihres neuen KI-gestützten Credit-Scorings. Das DSGVO-Team hat drei Wochen lang eine sorgfältige DPIA erstellt: Datenflussdiagramme, TOM-Liste, Risikomatrix, Konsultation des Datenschutzbeauftragten — alles steht. Im finalen Go-Live-Meeting fragt Compliance: „Was ist mit der FRIA?"

Stille. Die Produktmanagerin antwortet: „Ist das nicht dasselbe?"

Ist es nicht. Und ab dem **2. August 2026**[^1] kann diese Verwechslung die Bank in eine verpflichtende Meldung an die Marktüberwachungsbehörde, Bußgelder von bis zu **15 Mio. EUR** und im schlimmsten Fall einen **Stopp-Befehl** für das Credit-Scoring-System selbst stürzen.

In den letzten Wochen wurde LinkedIn von Vergleichs-Infografiken überflutet, die die Geschichte vereinfachen: DPIA ist „Datensicherheit", FRIA ist „Menschenrechte"; DPIA stammt aus der DSGVO, FRIA aus dem AI Act. Stimmt — aber unvollständig und an mehreren kritischen Stellen irreführend. Dieser Artikel führt beide Instrumente auf ihre rechtlichen Quellen zurück, kartiert, wo sie sich tatsächlich überschneiden und wo nicht, und schlägt eine integrierte Bewertungsstrategie für CISOs vor.

## Die wichtigsten Erkenntnisse

- FRIA ist **keine DPIA für KI**. Es ist ein eigenständiges Instrument mit anderem Gegenstand und anderem Sanktionsrahmen.
- Nur zwei Deployer-Kategorien sind nach Art. 27 FRIA-pflichtig: öffentlich-rechtliche Stellen / Anbieter öffentlicher Dienstleistungen sowie Deployer von Credit-Scoring oder Lebens-/Krankenversicherungs-KI — **nicht jeder** Hochrisiko-Deployer.
- Eine fehlende FRIA ist nach Art. 99(4) AI Act mit max. **15 Mio. EUR / 3 %** sanktioniert, **nicht 35 Mio.**. Aber DSGVO-, Melde- und Marktrücknahme-Sanktionen **kumulieren** — der reale Worst Case liegt bei rund 32,5 Mio. EUR plus Stop-Order.
- Art. 27(4) erlaubt **ein einheitliches Dokument** für beides — aber nur, wenn man die unterschiedlichen Geltungsbereiche versteht. Ein DPIA-Copy-Paste reicht nicht.

## Zwei Bewertungen, zwei Logiken

DPIA (Datenschutz-Folgenabschätzung) ist in Art. 35 DSGVO geregelt[^2]. Die Logik ist einfach: Wenn eine Verarbeitung personenbezogener Daten voraussichtlich ein hohes Risiko für natürliche Personen mit sich bringt — insbesondere groß angelegte Profilbildung, Biometrie oder systematische Überwachung —, muss der Verantwortliche das Risiko dokumentieren, Abhilfemaßnahmen planen und vor Beginn der Verarbeitung die Aufsichtsbehörde konsultieren.

FRIA (Fundamental Rights Impact Assessment, Grundrechte-Folgenabschätzung) ist ein viel jüngeres Instrument, eingeführt durch Art. 27 AI Act[^3]. Bevor ein Hochrisiko-KI-System erstmals eingesetzt wird, müssen bestimmte **Deployer**-Kategorien — schriftlich — den Nutzungskontext des Systems, die wahrscheinlich betroffenen Personen und Gruppen, spezifische Schadensrisiken für Grundrechte, Maßnahmen der menschlichen Aufsicht sowie Minderungspläne im Eintrittsfall bewerten[^4]. Die Ergebnisse werden der Marktüberwachungsbehörde mit einer Vorlage des AI Office gemeldet.

Fünf entscheidende Dimensionen trennen die beiden Instrumente — und die wichtigste steckt nicht in den Bezeichnungen, sondern im erfassten Gegenstand:

| Dimension | DPIA — Datenschutz-Folgenabschätzung | FRIA — Grundrechte-Folgenabschätzung |
|---|---|---|
| **Rechtsgrundlage** | DSGVO Art. 35 | AI Act Art. 27 (Verordnung EU 2024/1689) |
| **In Kraft** | Seit 25. Mai 2018 | Verpflichtend ab 2. August 2026 |
| **Auslöser** | Verarbeitung personenbezogener Daten mit voraussichtlich hohem Risiko für natürliche Personen | Erstmaliger Einsatz eines Hochrisiko-KI-Systems nach Anhang III |
| **Wer muss es tun** | Der Verantwortliche | Bestimmte Deployer-Kategorien: öffentlich-rechtliche Stellen, Anbieter öffentlicher Dienstleistungen sowie alle Deployer von Credit-Scoring- und Lebens-/Krankenversicherungs-KI |
| **Fokus** | Verarbeitungsvorgänge personenbezogener Daten | Alle einschlägigen Rechte der EU-Grundrechtecharta — Nichtdiskriminierung, Menschenwürde, faires Verfahren, Meinungsfreiheit u. a. |
| **Erfasster Personenkreis** | Nur betroffene Personen | Alle betroffenen Personen oder Gruppen — auch solche, deren personenbezogene Daten nicht verarbeitet werden |
| **Ergebnis** | Internes Dokument; DSB-Konsultation; bei hohem Restrisiko vorherige Konsultation der Aufsichtsbehörde | Pflichtmeldung an die Marktüberwachungsbehörde mittels Vorlage des AI Office |
| **Kernfrage** | Sind personenbezogene Daten vor Leak und Missbrauch sicher? | Ist die Entscheidung fair, diskriminierungsfrei und mit der Menschenwürde vereinbar? |

Der Gegenstand der DPIA ist auf **betroffene Personen** beschränkt — natürliche Personen, deren personenbezogene Daten verarbeitet werden. Der Gegenstand der FRIA umfasst **alle**, die das System betreffen könnte — unabhängig davon, ob ihre personenbezogenen Daten überhaupt verarbeitet werden. Eine KI, die von einer Kommune zur Verkehrssteuerung eingesetzt wird, kann die Bewegungsfreiheit eines Stadtviertels unverhältnismäßig einschränken, ohne jemals ein Kennzeichen zu lesen. Die DPIA sieht das nicht; die FRIA muss es sehen. Die Feldstudie der EU-Grundrechteagentur von 2020 — basierend auf 91 Interviews in fünf EU-Mitgliedstaaten — dokumentiert diese Lücke empirisch: vorgelagerte Bewertungen *„befassen sich selten mit potenziellen Auswirkungen auf Grundrechte"*[^5].

> Die DPIA sieht die Person, deren Daten verarbeitet werden. Die FRIA sieht jeden, den das System schädigen könnte.

## Wer braucht tatsächlich eine FRIA? Die Realität, die die Infografiken überspringen

Die meisten LinkedIn-Infografiken fassen die FRIA so zusammen: „Hochrisiko-KI-Einsatz — Recruiting, Credit Scoring, Gesundheitswesen, Strafverfolgung." Dieser Satz beschreibt die Hochrisiko-Liste des AI Act (Anhang III) — nicht die FRIA-pflichtigen Deployer-Kategorien. Beides ist nicht dasselbe.

Art. 27 begrenzt die FRIA-Pflichten auf **zwei** spezifische Kategorien:

1. **Öffentlich-rechtliche Stellen und private Einrichtungen, die öffentliche Dienstleistungen erbringen** — wenn sie ein in Anhang III aufgeführtes Hochrisiko-KI-System einsetzen. Erwägungsgrund 96 definiert „öffentliche Dienstleistungen" weit: Bildung, Gesundheit, Soziales, Wohnen und Justizverwaltung[^6]. Das reicht weit über den reinen öffentlichen Sektor hinaus: eine öffentlich finanzierte private Universität, ein beauftragter Sozialdienstleister, sogar eine private Krankenhauskette können erfasst sein.

2. **Deployer von Credit-Scoring / Kreditwürdigkeitsprüfung** (Anhang III 5(b)) **sowie Risikobewertung und Preisbildung in der Lebens-/Krankenversicherung** (Anhang III 5(c)) — unabhängig von Sektor oder öffentlich/privat-Status.

Die praktische Konsequenz ist auffällig. Ein KI-Recruiting-Tool, das von der HR-Abteilung eines Privatunternehmens genutzt wird, ist nach Anhang III hochrisikobehaftet, aber typischerweise **nicht** FRIA-pflichtig — weil der Deployer weder eine öffentlich-rechtliche Stelle noch ein Anbieter öffentlicher Dienstleistungen ist. Dasselbe Tool, eingesetzt von einer kommunalen Arbeitsagentur, wird FRIA-pflichtig. Das System hat sich nicht geändert; das rechtliche Profil des Deployers schon.

Es gibt zudem eine Ausnahme für kritische Infrastrukturen (Anhang III Nr. 2)[^7]: KI-Systeme, die als Sicherheitskomponenten in der Steuerung des Straßenverkehrs, der Wasser-/Gas-/Wärme-/Stromversorgung oder kritischer digitaler Infrastruktur eingesetzt werden, sind von der FRIA ausgenommen — selbst wenn der Deployer eine öffentliche Stelle ist. Sie bleiben hochrisikobehaftet; sie liegen lediglich außerhalb des Geltungsbereichs von Art. 27.

Für eine CISO heißt das: **Die Scope-Triage kommt vor der DPIA-Arbeit**: (a) Ist es ein Hochrisiko-System nach Anhang III? (b) Fällt meine Deployer-Kategorie unter Art. 27? (c) Greift die Ausnahme nach Anhang III Nr. 2? Die Antworten bestimmen, welches Compliance-Mapping Ihre Organisation tatsächlich braucht.

> Das System hat sich nicht geändert. Das rechtliche Profil des Deployers schon.

## „Wir machen doch schon DPIAs. Wozu FRIA?"

Eine berechtigte Frage — aber sie beruht auf einem Missverständnis. Die FRIA ist keine Erweiterung der DPIA. Mantelero argumentiert in seiner inzwischen zur akademischen Standardreferenz gewordenen FRIA-Methodik-Analyse von 2024, dass Art. 27 mehr verlangt als eine zusätzliche technische Prüfung: Deployer müssen dokumentieren, *warum, wo und wie* das Hochrisiko-KI-System tatsächlich eingesetzt wird, und systematisch Rechte bewerten, die DPIAs typischerweise außerhalb ihres Scopes lassen[^8].

Die gute Nachricht: Der AI Act baut bewusst eine Brücke, um Doppelarbeit zu vermeiden. Art. 27(4) sieht vor, dass Pflichten, die bereits durch eine DPIA nach Art. 35 DSGVO erfüllt sind, in der FRIA nicht wiederholt werden müssen; die FRIA *ergänzt* die DPIA[^9]. In der Praxis deckt eine gut gebaute DPIA rund 30–40 % einer FRIA ab — insbesondere die Beschreibung der Datenverarbeitung, die Kategorien der betroffenen Personen, die Sicherheitsmaßnahmen und die Risikomatrix.

Aber Überschneidung ist nicht Identität. Die Rechte, die jedes Instrument abdeckt, sind grundverschieden:

- **DPIA**: nur das Recht auf Datenschutz (Art. 8 GRCh; die Rechte und Freiheiten, die die DSGVO rund um personenbezogene Daten schützt).
- **FRIA**: alle einschlägigen Rechte der EU-Grundrechtecharta — Menschenwürde (Art. 1), Nichtdiskriminierung (Art. 21), Recht auf ein faires Verfahren (Art. 47), Meinungsfreiheit (Art. 11), Recht auf eine gute Verwaltung (Art. 41) — und weitere, je nach Kontext des KI-Systems.

Stellen Sie sich eine Triage-KI in einem öffentlichen Gesundheitssystem vor. Die DPIA bewertet, wie Patientendaten verarbeitet werden, die Zugriffskontrollen, die Aufbewahrungsfristen. Die FRIA fragt: Weist dieser Algorithmus bestimmten demografischen Gruppen systematisch eine niedrigere Priorität zu? Verhindert die Intransparenz des Entscheidungsmusters, dass Patienten ihr Beschwerderecht ausüben können? Ist die „menschliche Aufsicht" tatsächlich substanziell — oder ist sie zur Routine-Abnickung verkommen? Die DPIA stellt keine dieser Fragen direkt. Die FRIA muss alle beantworten.

## Der Preis, das falsch zu machen

Die meisten LinkedIn-Infografiken nennen eine einzige Sanktionszahl: „Bis zu 35 Mio. EUR oder 7 % des weltweiten Umsatzes, je nachdem, welcher Betrag höher ist." Die Zahl stimmt — aber nicht für FRIA-Verstöße. Art. 99 AI Act etabliert eine dreistufige Struktur, und die FRIA sitzt in der mittleren Stufe, nicht in der Spitze.

| Sanktionsstufe | Was sie abdeckt |
|---|---|
| **35 Mio. EUR oder 7 % des weltweiten Umsatzes** (je höher) | Art. 5 — verbotene KI-Praktiken (Social Scoring, unterschwellige Manipulation, unzulässige biometrische Echtzeit-Identifizierung u. a.) |
| **15 Mio. EUR oder 3 % des weltweiten Umsatzes** (je höher) | Verstöße gegen Art. 16 (Anbieter), 22 (Bevollmächtigte), 23 (Einführer), 24 (Händler), 26 (Deployer), 31/33/34 (notifizierte Stellen), 50 (Transparenz). FRIA (Art. 27) ist hier nicht ausdrücklich genannt, gehört aber zum Block der Deployer-Pflichten. |
| **7,5 Mio. EUR oder 1 % des weltweiten Umsatzes** (je höher) | Übermittlung falscher, unvollständiger oder irreführender Informationen an Behörden |
| **KMU-Ausnahme** | Für KMU gilt jeweils der **niedrigere** Höchstbetrag (Art. 99(6)) |

Eine fehlende FRIA — oder eine fehlende Meldung an die Marktüberwachungsbehörde — wird mit höchstens **15 Mio. EUR oder 3 % des weltweiten Umsatzes** (je höher) sanktioniert, nicht mit 35 Mio.[^10]. Die Stufe 35 Mio. / 7 % ist Art.-5-Verbotspraktiken vorbehalten — Social Scoring, unterschwellige Manipulation, unzulässige biometrische Echtzeit-Identifizierung.

Diese Unterscheidung ist wichtig — sollte aber nicht beruhigen. Aus drei Gründen.

**Erstens** löst derselbe Vorfall in der Regel auch DSGVO-Haftung aus. Bei Credit Scoring oder Gesundheits-Triage geht eine fehlende FRIA fast immer mit einer fehlenden oder dünnen DPIA einher. Eine fehlende DPIA verstößt gegen Art. 35 DSGVO und löst nach Art. 83(4) bis zu 10 Mio. EUR oder 2 % aus; verletzt derselbe Vorfall zusätzlich die Verarbeitungsgrundsätze (Art. 5) oder die Rechtsgrundlagenanforderungen (Art. 6), eskaliert es nach Art. 83(5) auf 20 Mio. EUR oder 4 %[^11]. AI-Act-Sanktionen gelten unabhängig von der DSGVO; die beiden Regime ersetzen sich nicht — sie kumulieren. Die EDPB-Stellungnahme 28/2024 (17. Dezember 2024)[^12] setzt bereits Einzelfall-Aufsichtsstandards für Anonymität, berechtigte Interessen und unrechtmäßig verarbeitete Trainingsdaten in KI-Modellen — ein klares Signal, dass Datenschutzbehörden eine solide DPIA neben jeder FRIA erwarten.

**Zweitens** gelten die **Korrekturmaßnahmen** nach Art. 79 unabhängig von jeder Geldbuße[^13]. Die Marktüberwachungsbehörde kann anordnen, dass ein nicht-konformes Hochrisiko-KI-System vom Markt genommen, zurückgerufen oder verboten wird. Für einen Versicherer hat es Geschäftsfolgen, die regelmäßig die Geldbuße in den Schatten stellen, wenn ein Pricing-Modell binnen 24 Stunden abgeschaltet wird.

**Drittens** ist die Meldung der FRIA-Ergebnisse an die Behörde nach Art. 27(3) verpflichtend[^14]. Die Nicht-Meldung — oder die Übermittlung falscher oder irreführender Informationen — löst nach Art. 99(5) eine zusätzliche Obergrenze von 7,5 Mio. EUR aus. Drei eigenständige Sanktionsschichten auf einen einzigen Vorfall sind möglich.

> AI-Act-Sanktionen ersetzen die DSGVO nicht. Sie kumulieren.

## Die integrierte Bewertung: ein Dokument, zwei Compliance-Pflichten

Die gesetzgeberische Logik des AI Act zielt explizit auf das Vermeiden von Doppelarbeit. Aber wenn ein einheitliches Dokument zu einer reinen Häkchen-Übung verkümmert, verfehlt es seinen Zweck. Der FRIA-Leitfaden 2025 von ECNL und Danish Institute for Human Rights warnt genau hier: *„Die Versuchung, FRIA-Compliance auf eine simple Checkliste zu reduzieren, ist groß und inhärent gefährlich"*[^15]. Praktisch bedeutet das: ein einheitliches Bewertungsdokument zu entwerfen — aber eines, das gebaut ist, um Entscheidungen zu *informieren*, nicht um sie nachträglich zu rechtfertigen. Wer die 18-stufige PDCA-Pipeline der CyberWerk Suite in Privacy Shield kennt, dem wird die folgende Struktur vertraut vorkommen:

### Gemeinsamer Aufnahmeteil

- Systembeschreibung — Anbieter, Version, Zweckbestimmung, Einsatzumgebung
- Verarbeitungs- / Nutzungsfluss — welche Inputs, welche Outputs, welche Entscheidungen werden gespeist
- Dauer und Häufigkeit — Datum des Erst-Einsatzes, Skala, Anzahl potenziell Betroffener

### Teil A — Datenschutz (DPIA, Art. 35 DSGVO)

- Datenkategorien, besondere Datenkategorien, Rechtsgrundlagen (Art. 6 und 9 DSGVO)
- Datenübermittlungen, Drittlandtransfers, Auftragsverarbeitungsverträge (Art. 28)
- Betroffenenrechte und Mechanismen zu deren Erfüllung
- TOM — technische und organisatorische Maßnahmen: Pseudonymisierung, Verschlüsselung, Zugriffskontrolle
- Risikobewertung der Rechte der betroffenen Personen und Restrisiko

### Teil B — Grundrechte (FRIA, Art. 27 AI Act)

- Kategorien der betroffenen Personen und Gruppen — auch Nicht-Datenschutz-Betroffene
- Grundrechte-Impact-Map — Nichtdiskriminierung, Menschenwürde, faires Verfahren, Meinungsfreiheit, gute Verwaltung — welche im Kontext dieses Systems greifen
- Spezifische Schadensszenarien — Bias, Halluzinationen, Automation Bias, irreversible False Positives
- Mechanismus der menschlichen Aufsicht (im Einklang mit Art. 14) — tatsächlich „substanzielle" Aufsicht oder Abnickung?[^16]
- Recht auf Erläuterung und Beschwerdekanal (Art. 86) — wie Betroffene die Entscheidung anfechten können[^17]

### Gemeinsamer Ausgabeteil

- Minderungsmaßnahmen, jeweils einem identifizierten Risiko zugeordnet
- Restrisiko und Toleranzbegründung
- Auslöser für Neubewertung (Modell-Drift, Datensatz-Update, Änderung des Nutzungskontexts, Überschreitung der Beschwerde-Schwelle)
- Meldetext für die Marktüberwachung (mittels Vorlage des AI Office)

## Der Sieben-Schritte-Fahrplan für CISOs

1. **Scope-Triage (Tag 1)**. Beantworten Sie für jedes KI-System drei Fragen: Liegt es in Anhang III? Fällt meine Deployer-Kategorie unter Art. 27? Greift die Ausnahme für kritische Infrastrukturen? Bauen Sie eine einzige Matrix: FRIA-pflichtig, FRIA-ausgenommen, nur DPIA, keine Pflicht. Für deutsche Organisationen konkretisieren die zwei Orientierungshilfen der DSK (Mai 2024 und Juni 2025) die zusätzlichen DSGVO-Erwartungen[^18].

2. **DPIA-Inventar**. Mappen Sie die bestehenden DPIAs für Hochrisiko-KI-Systeme. Wie viel davon erfüllt die Brücke nach Art. 27(4)? In der Regel 30–40 % — aber die verbleibenden 60–70 % sind Neuland, das ein DPIA-Copy-Paste nicht abdecken kann.

3. **Grundrechte-Matrix**. Verwandeln Sie für jedes Hochrisiko-System die sieben Kapitel der EU-Grundrechtecharta (Würde, Freiheiten, Gleichheit, Solidarität, Bürgerrechte, Justiz, allgemeine Bestimmungen) in eine Checkliste. Welche könnten konkret betroffen sein? Dokumentieren Sie für jedes die Argumentation — schreiben Sie nicht nur „nicht betroffen".

4. **Stakeholder-Konsultation**. Die Glaubwürdigkeit einer FRIA hängt davon ab, ob Sie Vertretungen der betroffenen Gruppen konsultiert haben. Betriebsrat, Verbraucherverbände, Behindertenverbände, Ethikkommissionen — was zum Kontext passt. Dies ist der Schritt, den die meisten Organisationen überspringen und den die meisten Auditoren bemerken werden.

5. **Menschliche Aufsicht und Beschwerdemechanismus**. Art. 14 verlangt „substanzielle" menschliche Aufsicht. „Ein Mensch genehmigt die KI-Empfehlung" reicht nicht — die aufsichtsführende Person muss die Befugnis, die Zeit und das Training haben, um zu verstehen, zu hinterfragen und zu überstimmen. Dokumentieren Sie, wie Sie das Recht auf Erläuterung nach Art. 86 operationalisiert haben.

6. **Melde-Pipeline**. Das AI Office wird nach Art. 27(5) eine Vorlage veröffentlichen. Halten Sie Ihre interne Version bereit, bevor die Vorlage erscheint; sobald sie da ist, wird der Übergang zur Daten-Mapping-Übung. Klären Sie vorab, wer meldet, über welchen Kanal, in welcher Sprache.

7. **Living-Document-Regime**. Art. 27(2) verlangt, dass die FRIA aktuell gehalten wird. Aktualisieren Sie sie, wenn das Modell neu trainiert wird, der Datensatz sich ändert, ein neuer Nutzungskontext eingeführt wird oder ein systematisches Beschwerdemuster auftritt. Verdrahten Sie das mit den Event-Triggern Ihres GRC-Tools — eine jährliche manuelle Überprüfung reicht nicht.

## Fazit

Der Countdown zum 2. August 2026 läuft. Die FRIA ist nicht die KI-Version der DPIA. Sie ist ein anderes rechtliches Instrument mit anderem ethischem Fokus, und sie deckt Personen ab, die keine Betroffenen im Sinne des Datenschutzes sind. Die Kombination beider Instrumente senkt die Compliance-Kosten — aber nur für Organisationen, die die unterschiedlichen Geltungsbereiche, die unterschiedlichen Outputs und die unterschiedlichen Meldemechanismen verstehen.

Die LinkedIn-Vergleichs-Infografiken sind ein passabler Awareness-Einstieg. Aber eine Rechtsabteilung, die nur auf ihrer Grundlage handelt, verteidigt das Unternehmen gegen die falsche Sanktionsstufe: sie bereitet sich auf einen 35-Mio.-Worst-Case vor, während das tatsächliche Risiko bei 15 Mio. (AI Act 99(4) — FRIA/Art. 26) + 10 Mio. (DSGVO 83(4) — DPIA) + 7,5 Mio. (AI Act 99(5) — Meldung) + einer potenziellen 4 %-Obergrenze nach DSGVO 83(5) (bei Verletzung der Grundsätze) + einer Marktrücknahme-Anordnung nach Art. 79 AI Act liegt. Die Aufgabe der CISO ist es, diese Schichten zu trennen, ein einheitliches Bewertungsframework aufzubauen und die Organisation von „reaktiver Dokumentation" zu „proaktiver, verantwortungsvoller Innovation" zu führen.

> Compliance ist keine Bürokratie, gegen die man sich wehrt. Richtig gemacht, ist sie Ihr Time-to-Market-Vorteil.

---

**Wie verläuft das FRIA-Scoping-Gespräch in Ihrer Organisation?** Mich interessiert besonders, wie DACH-Unternehmen die Deployer-Kategorienfrage nach Art. 27 mappen — hinterlassen Sie einen Kommentar mit Ihrer Einschätzung oder [schreiben Sie mir auf LinkedIn](https://www.linkedin.com/in/dr-sait-yalazay-7b71391a/), wenn Sie es lieber nicht öffentlich diskutieren möchten.

---

[^1]: AI Act, Art. 113 (Inkrafttreten und Anwendung): *„Diese Verordnung tritt am zwanzigsten Tag nach ihrer Veröffentlichung im Amtsblatt der Europäischen Union in Kraft. Sie gilt ab dem 2. August 2026. Jedoch: (a) Kapitel I und II gelten ab dem 2. Februar 2025; (b) Kapitel III Abschnitt 4, Kapitel V, Kapitel VII und Kapitel XII sowie Art. 78 gelten ab dem 2. August 2025, mit Ausnahme von Art. 101; (c) Art. 6(1) und die entsprechenden Pflichten dieser Verordnung gelten ab dem 2. August 2027."* Pflichten für Hochrisiko-Systeme — einschließlich der FRIA nach Art. 27 — gelten daher ab dem 2. August 2026; das Sanktionsregime (Kapitel XII / Art. 99) ab dem 2. August 2025.

[^2]: DSGVO, Art. 35(1): *„Hat eine Form der Verarbeitung, insbesondere bei Verwendung neuer Technologien, aufgrund der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge, so führt der Verantwortliche vorab eine Abschätzung der Folgen der vorgesehenen Verarbeitungsvorgänge für den Schutz personenbezogener Daten durch. Für die Untersuchung mehrerer ähnlicher Verarbeitungsvorgänge mit ähnlich hohen Risiken kann eine einzige Abschätzung vorgenommen werden."*

[^3]: Verordnung (EU) 2024/1689 des Europäischen Parlaments und des Rates vom 13. Juni 2024 zur Festlegung harmonisierter Vorschriften für künstliche Intelligenz (KI-Verordnung), ABl. L 2024/1689, 12.7.2024 (im Folgenden: AI Act).

[^4]: AI Act, Art. 27(1): *„Vor dem Einsatz eines in Art. 6(2) genannten Hochrisiko-KI-Systems — mit Ausnahme von Hochrisiko-KI-Systemen, die im in Anhang III Nr. 2 genannten Bereich eingesetzt werden sollen — führen Deployer, die Einrichtungen des öffentlichen Rechts oder private Einrichtungen sind, die öffentliche Dienstleistungen erbringen, sowie Deployer von Hochrisiko-KI-Systemen nach Anhang III Nr. 5 (b) und (c) eine Abschätzung der Auswirkungen auf die Grundrechte durch, die der Einsatz eines solchen Systems hervorrufen kann."*

[^5]: Agentur der Europäischen Union für Grundrechte (FRA), *Getting the future right — Artificial intelligence and fundamental rights*, Luxemburg, 2020. Basierend auf 91 Interviews in Estland, Finnland, Frankreich, den Niederlanden und Spanien.

[^6]: AI Act, Erwägungsgrund 96 (Auszug): *„Um den wirksamen Schutz der Grundrechte zu gewährleisten, sollten Deployer von Hochrisiko-KI-Systemen, die Einrichtungen des öffentlichen Rechts oder private Einrichtungen sind, die öffentliche Dienstleistungen erbringen, sowie Deployer bestimmter in einem Anhang dieser Verordnung aufgeführter Hochrisiko-KI-Systeme, etwa Bank- oder Versicherungseinrichtungen, vor der Inbetriebnahme eine Grundrechte-Folgenabschätzung durchführen. Für den Einzelnen wichtige Dienstleistungen mit öffentlichem Charakter können auch von privaten Einrichtungen erbracht werden. Private Einrichtungen, die solche öffentlichen Dienstleistungen erbringen, sind mit Aufgaben von öffentlichem Interesse verbunden, etwa in den Bereichen Bildung, Gesundheit, Soziales, Wohnen und Justizverwaltung."*

[^7]: AI Act, Anhang III Nr. 2 (Kritische Infrastrukturen): *„KI-Systeme, die als Sicherheitskomponenten im Management und Betrieb kritischer digitaler Infrastrukturen, des Straßenverkehrs oder bei der Versorgung mit Wasser, Gas, Wärme oder Elektrizität eingesetzt werden sollen."* Aufgrund von Art. 27(1) sind Deployer von KI-Systemen, die unter diesen Anhang-III-Punkt fallen, von der FRIA-Pflicht ausgenommen.

[^8]: Mantelero, A., *The Fundamental Rights Impact Assessment (FRIA) in the AI Act: Roots, legal obligations and key elements for a model template*, Computer Law & Security Review, Vol. 54, 106020 (2024). DOI: 10.1016/j.clsr.2024.106020.

[^9]: AI Act, Art. 27(4): *„Soweit eine der in diesem Artikel genannten Pflichten bereits durch die nach Art. 35 der Verordnung (EU) 2016/679 oder Art. 27 der Richtlinie (EU) 2016/680 durchgeführte Datenschutz-Folgenabschätzung erfüllt ist, ergänzt die in Absatz 1 dieses Artikels genannte Grundrechte-Folgenabschätzung jene Datenschutz-Folgenabschätzung."*

[^10]: AI Act, Art. 99 (Sanktionsrahmen). Art. 99(3): *„Die Nichteinhaltung des Verbots der in Art. 5 genannten KI-Praktiken wird mit Geldbußen von bis zu 35 000 000 EUR oder, im Falle eines Unternehmens, von bis zu 7 % seines gesamten weltweiten Jahresumsatzes des vorangegangenen Geschäftsjahres geahndet, je nachdem, welcher Betrag höher ist."* Art. 99(4): *„Die Nichteinhaltung einer der folgenden, sich auf Akteure oder notifizierte Stellen beziehenden, von Art. 5 abweichenden Bestimmungen wird mit Geldbußen von bis zu 15 000 000 EUR oder, im Falle eines Unternehmens, von bis zu 3 % seines gesamten weltweiten Jahresumsatzes geahndet … (a) Pflichten von Anbietern nach Art. 16; (b) Pflichten von Bevollmächtigten nach Art. 22; (c) Pflichten von Einführern nach Art. 23; (d) Pflichten von Händlern nach Art. 24; (e) Pflichten von Deployern nach Art. 26; (f) Anforderungen und Pflichten von notifizierten Stellen; (g) Transparenzpflichten von Anbietern und Deployern nach Art. 50."*

[^11]: DSGVO, Art. 83(4): *„Bei Verstößen gegen folgende Bestimmungen werden im Einklang mit Absatz 2 Geldbußen von bis zu 10 000 000 EUR oder im Fall eines Unternehmens von bis zu 2 % seines gesamten weltweit erzielten Jahresumsatzes des vorangegangenen Geschäftsjahres verhängt, je nachdem, welcher der Beträge höher ist: (a) die Pflichten der Verantwortlichen und der Auftragsverarbeiter gemäß den Artikeln 8, 11, 25 bis 39 und 42 und 43 …"* Die DPIA (Art. 35) wird unter Buchstabe (a) erfasst. Art. 83(5): *„… bis zu 20 000 000 EUR oder im Fall eines Unternehmens von bis zu 4 % seines gesamten weltweit erzielten Jahresumsatzes … (a) die Grundsätze für die Verarbeitung, einschließlich der Bedingungen für die Einwilligung, gemäß den Artikeln 5, 6, 7 und 9 …"*

[^12]: Europäischer Datenschutzausschuss, *Stellungnahme 28/2024 zu bestimmten datenschutzrechtlichen Aspekten der Verarbeitung personenbezogener Daten im Rahmen von KI-Modellen*, 17. Dezember 2024.

[^13]: AI Act, Art. 79(2) (Auszug): *„Stellt … die Marktüberwachungsbehörde fest, dass das KI-System die in dieser Verordnung festgelegten Anforderungen und Pflichten nicht erfüllt, so verlangt sie unverzüglich von dem betreffenden Akteur, alle geeigneten Korrekturmaßnahmen zu ergreifen, um die Konformität des KI-Systems herzustellen, das KI-System vom Markt zu nehmen oder es zurückzurufen …"* Art. 79(5): *„Ergreift der Akteur eines KI-Systems keine geeigneten Korrekturmaßnahmen …, so trifft die Marktüberwachungsbehörde alle geeigneten vorläufigen Maßnahmen, um die Bereitstellung des KI-Systems auf ihrem nationalen Markt zu verbieten oder einzuschränken …"*

[^14]: AI Act, Art. 27(3): *„Sobald die in Absatz 1 genannte Abschätzung durchgeführt wurde, teilt der Deployer der Marktüberwachungsbehörde deren Ergebnisse mit, wobei er die in Absatz 5 genannte ausgefüllte Vorlage als Teil der Mitteilung übermittelt."*

[^15]: European Center for Not-for-Profit Law (ECNL) & Danish Institute for Human Rights (DIHR), *A Guide to Fundamental Rights Impact Assessments (FRIA)*, 2025.

[^16]: AI Act, Art. 14(1): *„Hochrisiko-KI-Systeme werden so konzipiert und entwickelt — auch mit geeigneten Mensch-Maschine-Schnittstellen-Werkzeugen —, dass sie während des Zeitraums ihrer Verwendung von natürlichen Personen wirksam beaufsichtigt werden können."*

[^17]: AI Act, Art. 86(1): *„Jede betroffene Person, die einer Entscheidung unterworfen ist, die der Deployer auf der Grundlage des Outputs eines in Anhang III aufgeführten Hochrisiko-KI-Systems trifft … hat das Recht, vom Deployer klare und substanzielle Erläuterungen zur Rolle des KI-Systems im Entscheidungsfindungsverfahren und zu den wesentlichen Elementen der getroffenen Entscheidung zu erhalten."*

[^18]: Datenschutzkonferenz (DSK), *Orientierungshilfe — Künstliche Intelligenz und Datenschutz*, Version 1.0, 6. Mai 2024; sowie DSK, *Orientierungshilfe zu empfohlenen technischen und organisatorischen Maßnahmen bei der Entwicklung und beim Betrieb von KI-Systemen*, Juni 2025.
