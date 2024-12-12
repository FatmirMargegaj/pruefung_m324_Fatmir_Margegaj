# ict-m324 - Programmieraufgabe 2

## Git, GitHub, Release, Automatisierung

Git ist eine Software, mit der Sie Änderungen an einem Projekt im Laufe der Zeit verfolgen können.
Ein DevOps Engineer nutzt Git täglich für die Arbeit an Code, Infrastruktur und Deployment-Prozessen, wodurch es eines der wichtigsten Tools im DevOps-Toolkit ist.

Lernziele:

- Grundlagen von Versionskontrolle, Branching, Pull Requests und Konfliktlösung.
- Erstellen von Releases und Hosting mit GitHub Pages.
- Automatisierung Skript schreiben

## 1. Einrichtung: Ihr Entwicklungs-Setup

### Entwicklungsumgebung vorbereiten
Falls Sie noch nie mit Git und GitHub gearbeitet haben.
1. **Installieren Sie Ihre bevorzugte IDE**
2. **Installieren Sie Git**
3. **Erstellen Sie ein GitHub-Konto**

### Repository erstellen und klonen

- **Erstellen Sie ein neues Repository**: Legen Sie ein neues _public_ Repository auf GitHub.com an.
-  **Wichtig**:Der Name des Repository sollte das Wort _m324-task-2-git_ und ihren _Vor- und Nachnamen_ enthalten.
- Wählen Sie die Option "README.md" erstellen, damit es schon einen main Branch hat. Klonen Sie dann das Remote Repository auf Ihr lokales System.
- **Öffnen Sie das Repository in der IDE**: Nutzen Sie Ihre IDE, um das geklonte Repository für die Entwicklung vorzubereiten.

### Dateien initialisieren

- **Erstellen Sie eine `index.html`-Datei**: Diese Datei dient zur Demonstration grundlegender Git-Befehle. Pushen Sie die Datei in den main Branch.

## 2. Git verwenden

### Git-Befehle ausführen

- Wechseln Sie auf den main branch. Erstellen Sie einen neuen Branch für die Feature-Entwicklung.
  ```bash
  git checkout -b feature-branch
