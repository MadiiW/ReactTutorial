# Übung 2 – Unit-Test mit Vitest und Testing Library

## Zielsetzung
In dieser Übung wiederholst und vertiefst du die Inhalte aus den Präsentationsfolien.  
Du setzt praktisch um, was du über das Testen von React-Komponenten mit **Vitest** und der **React Testing Library** gelernt hast.

## Aufgabenstellung

Das Projekt ist bereits vollständig vorbereitet. Es enthält die Komponente `Counter` sowie alle nötigen Konfigurationen für das Testen mit **Vitest** und **React Testing Library**. Die `Counter`-Komponente ist ein einfacher Zähler, wie er im Theorieteil bereits mehrfach besprochen wurde. Deine Aufgabe ist es, **drei Unit-Tests für diese Komponente** zu schreiben. Die Tests sollen in der Datei `Counter.test.tsx` im Ordner `./src/components/` umgesetzt werden. Am Ende sollen **alle drei Tests erfolgreich durchlaufen** (`passed`).  Du brauchst **nichts an der `Counter`-Komponente selbst ändern** – wenn deine Tests korrekt sind, funktionieren sie mit der vorhandenen Komponente.

### Die drei Tests im Überblick

1. **Anfangszustand testen**  
   Rendere die Komponente und überprüfe, ob der Text `"Count: 0"` im Dokument erscheint.

2. **Interaktion testen**  
   Rendere die Komponente, finde den Button mit der Rolle `"button"` und dem Namen `"Increment"`, simuliere einen Klick und überprüfe, ob danach `"Count: 1"` angezeigt wird. Wie du den Button finden kannst, kannst du hier nochmal in der Dokumentation nachlesen https://testing-library.com/docs/queries/about

3. **Mehrfache Interaktion und Bedingung testen**  
   Rendere die Komponente, finde den Button, simuliere **fünf Klicks** in einer Schleife und überprüfe, ob anschließend die Nachricht `"You've clicked a lot!"` im Dokument angezeigt wird.


Führe die Tests mit folgendem Befehl aus:
```bash
npm run test
```

Beachte: den Test kannst du mit npm run test ausführen.

Nach erfolgreichem Abschluss der Aufgabe sollte nach durchlaufen der Tests die Konsolen ausgabe wie folgt aussehen.

![](./app.png)
