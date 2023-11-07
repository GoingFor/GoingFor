# GoingFor

![Alt-Text](./going%20for%20EXPERIENCE.png)


English Version below ↓
[English Version](#english-version)


---
## 🧐 Projektziel
App für alle Festivalbetreiber und Festivalbesucher

Mithilfe unserer interaktiven Festivalmap in der "GoingForExperience-App" findest du das für dich perfekte Festival oder bewirbst als Festivalbetreiber ganz einfach dein eigenes.
Jeder User hat die Möglichkeit Pins zu setzen und ein Festival zu inserieren. Dazu wird das Formular "Event erstellen" genutzt. Im Formular können alle wichtigen Informationen hinterlegt werden.

## 🤖 Techniken
Hier ist ein kurzer Überblick über den Tech-Stack, den die App verwendet:
* Diese App ist mit React Vite erstellt worden. Im gegensatz zu create-react-app ist Vite deutlich schneller, was der Hauptgrund unserer Wahl war.
* Als Datenbank nutzt die App MongoDB als NoSQL-Datenbank
* Für die Darstellung der Karte wird Leaflet und react-leaflet genutzt
* Die App verwendet die Schriftart "Roboto" als Hauptschriftart

## ✍️ Mithelfen
Sind Sie daran interessiert, zum GoingForExperience-Projekt beizutragen? Vielen Dank für Ihr Interesse! Wir sind immer auf der Suche nach Verbesserungen des Projekts und Beiträge von Open-Source-Entwicklern werden sehr geschätzt.

Wenn Sie mit den eingesetzten Techniken vertraut sind und eine Idee zur Verbesserung haben, nehmen Sie gern Kontakt zu uns auf.

## ✨ Liken
Wenn Sie sich bedanken und/oder die aktive Entwicklung der GoingForExperience-App unterstützen möchten:

+ Fügen Sie dem Projekt einen GitHub-Stern hinzu!
+ Twittern Sie über das Projekt auf Ihrem Twitter!

Vielen Dank für Ihr Interesse, die Reichweite der GoingForExperience-App zu erweitern!
___

## Nutzen des Codes / der App

Stellen Sie sicher, dass Sie Node.js und npm auf Ihrem Computer installiert haben, um die Anwendung auszuführen.

Klone das Repository auf deinen lokalen Computer.

``` 
git clone https://github.com/GoingFor/GoingFor.git 
```

Wechseln Sie in das Projektverzeichnis.

``` 
cd GoingFor
```

Installieren Sie die Abhängigkeiten.

```
npm install
```

Nachdem Sie die Abhängigkeiten installiert haben, können Sie die Anwendung lokal starten. gehen Sie dafür jeweils in den Serverordner und in einem zweiten Terminal in den Clientordner und starten sie die App.

```
cd client
npm run dev
``` 

öffnen Sie ein zweites Terminalfenster

```
cd server
npm run dev
``` 

### Anwendung verwenden
Besuchen Sie http://localhost:5173/ in Ihrem Webbrowser.

Fügen Sie neue Veranstaltungspins hinzu, indem Sie das Formular auf der Seite ausfüllen und absenden.

Die hinzugefügten Pins werden auf der Karte angezeigt.

#### Anpassung und Erweiterung
Sie können die Anwendung anpassen und erweitern, indem Sie die vorhandenen Komponenten bearbeiten oder neue hinzufügen. Die Hauptdateien und Verzeichnisse sind:

src/App.jsx: Die Hauptkomponente der Anwendung.
src/pages/CreateEvent.jsx: Die Komponente für das Hinzufügen von Veranstaltungspins.
src/components/Map.jsx: Die Komponente für die Karte, auf der die Pins angezeigt werden.

#### Hilfe und Unterstützung
Wenn Sie Hilfe benötigen oder Fehler melden möchten, können Sie ein Problem im Issue Tracker erstellen.

___

### 🤓 Entwickler*innen

Dieses Projekt wurde im Rahmen unserer Umschulung zum Mern Stack Entwickler gestartet und war unser Final Project. 

Sasa Misic - Teamleader
Jana Heyn - GitHubLeader
Melanie Silies - Frontend
Roman Tide - Backend

___
___

# English Version

## 🧐 Project goal
App for all festival organisers and festival visitors

With the help of our interactive festival map in the "GoingForExperience app", you can find the perfect festival for you or simply advertise your own as a festival organiser.
Every user has the opportunity to set pins and advertise a festival. The "Create event" form is used for this purpose. All important information can be entered in the form.

## 🤖 Tech- Stack
Here is a brief overview of the tech stack used by the app:
* This app has been created with React Vite. In contrast to create-react-app, Vite is significantly faster, which was the main reason for our choice.
* The app uses MongoDB as a NoSQL database
* Leaflet and react-leaflet are used to display the map
* The app uses the "Roboto" font as the main font

## ✍️ Help us
Are you interested in contributing to the GoingForExperience-project? Thank you for your interest! We are always looking for improvements to the project and contributions from open source developers are greatly appreciated.

If you are familiar with the techniques used and have an idea for improvement, please feel free to contact us.

## ✨ Like
If you would like to say thank you and/or support the active development of the GoingForExperience app:

+ Add a GitHub star to the project!
+ Tweet about the project on your Twitter!
Thank you for your interest in expanding the reach of the GoingForExperience app!
___

## Using the code / app

Make sure you have Node.js and npm installed on your computer to run the app.

Clone the repository to your local computer.

``` 
git clone https://github.com/GoingFor/GoingFor.git 
```

Change to the project directory.

``` 
cd GoingFor
```

Install the dependencies.

```
npm install
```

Once you have installed the dependencies, you can start the application locally. To do this, go to the server folder and in a second terminal to the client folder and start the app.

```
cd client
npm run dev
``` 

Open a second terminal window

```
cd server
npm run dev
```

### Use application
Visit http://localhost:5173/ in your web browser.

Add new event pins by filling out and submitting the form on the page.

The added pins will be displayed on the map.

#### Customisation and extension
You can customise and extend the application by editing the existing components or adding new ones. The main files and directories are:

src/App.jsx: The main component of the application.
src/pages/CreateEvent.jsx: The component for adding event pins.
src/components/Map.jsx: The component for the map on which the pins are displayed.

#### Help and support
If you need help or want to report a bug, you can create an issue in the issue tracker.

___

### 🤓 Developers

This project was started as part of our retraining as a Mern Stack developer and was our final project.

Sasa Misic - Teamleader
Jana Heyn - GitHubLeader
Melanie Silies - Frontend
Roman Tide - Backend