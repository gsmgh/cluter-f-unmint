# ESP32 BME280 MQTT Sensor

Projektdokumentation für einen ESP32-basierten Umweltsensor, der Messwerte eines BME280 (Temperatur, Luftfeuchte, Luftdruck) per WLAN über MQTT an einen Broker sendet.

> Diese Dokumentation behandelt ausschließlich den **Software-Teil** des Projekts.

---

## Übersicht

Der ESP32 liest in regelmäßigen Abständen die Sensorwerte des BME280 aus und veröffentlicht diese als MQTT-Nachrichten an einen Broker im lokalen Netzwerk.

| Komponente        | Verwendung                                  |
|-------------------|---------------------------------------------|
| ESP32             | Mikrocontroller mit WLAN-Modul              |
| BME280            | Sensor für Temperatur, Feuchte, Luftdruck   |
| MicroPython       | Firmware / Laufzeitumgebung auf dem ESP32   |
| Thonny            | Entwicklungsumgebung (IDE)                  |
| MQTT-Broker       | Empfänger der Sensordaten (z. B. Mosquitto) |

---

## Verwendete Libraries

Folgende MicroPython-Libraries werden benötigt:

| Library                   | Zweck                                |
|---------------------------|--------------------------------------|
| `micropython-bme280`      | Auslesen der BME280-Sensorwerte      |
| `micropython-umqtt.simple`| MQTT-Client für Veröffentlichung     |

### Installation über Thonny

1. Thonny öffnen und mit dem ESP32 verbinden
2. Menü: **Tools → Manage Packages...**
3. Im Suchfeld jeweils die Library eingeben und installieren:
   - `micropython-bme280`
   - `micropython-umqtt.simple`

> **Hinweis:** Nach jedem **Flash der Firmware** müssen die Libraries **erneut installiert** werden, da der Flash-Vorgang das Dateisystem des ESP32 löscht.

---

## Dateistruktur auf dem ESP32

Nach erfolgreicher Installation liegen folgende Dateien auf dem ESP32:

```
/
├── main.py              # Hauptprogramm (Sensor lesen + MQTT senden)
└── lib/
    ├── bme280.py        # BME280-Library
    └── umqtt/
        └── simple.py    # MQTT-Client-Library
```

---

## Konfiguration

### MQTT-Broker IP anpassen

Der MQTT-Broker bezieht seine IP-Adresse per **DHCP** und kann sich daher ändern.
Bei einer geänderten IP muss in der Datei `main.py` die Konstante `BROKER` angepasst werden:

```python
# main.py
BROKER = "192.168.1.***"   # <-- IP des MQTT-Brokers
```

### MQTT-Topics

Der ESP32 veröffentlicht die Messwerte unter folgenden Topics:

| Topic                  | Inhalt              | Einheit |
|------------------------|---------------------|---------|
| `sensor/temperatur`    | Temperatur          | °C      |
| `sensor/luftfeuchte`   | Relative Feuchte    | %       |
| `sensor/luftdruck`     | Luftdruck           | hPa     |

---

## Ablauf des Programms

1. ESP32 verbindet sich mit dem konfigurierten WLAN
2. Verbindung zum MQTT-Broker wird aufgebaut
3. BME280-Sensor wird über I²C ausgelesen
4. Messwerte werden in die drei MQTT-Topics veröffentlicht
5. Pause, dann zurück zu Schritt 3

---

## Fehlerbehebung

| Fehlermeldung           | Ursache                                          | Lösung                                                                 |
|-------------------------|--------------------------------------------------|------------------------------------------------------------------------|
| `MQTTException: 5`      | Falsche Zugangsdaten (Benutzer/Passwort)         | Credentials in `main.py` prüfen und korrigieren                        |
| `ECONNABORTED`          | Broker nicht erreichbar (IP per DHCP geändert)   | Neue IP des Brokers ermitteln und Variable `BROKER` in `main.py` setzen|
| `ImportError`           | Library fehlt (z. B. nach Flash)                 | Libraries via **Thonny → Manage Packages** erneut installieren         |

---

## Entwicklung

- **IDE:** [Thonny](https://thonny.org/)
- **Sprache:** MicroPython
- **Übertragung:** Dateien werden per Thonny direkt auf den ESP32 geschrieben

### Typischer Workflow

```text
Code in Thonny bearbeiten
        ↓
Datei auf ESP32 speichern (main.py)
        ↓
ESP32 startet das Skript automatisch
        ↓
Ausgabe / Fehler in Thonny-Konsole prüfen
```

---

## Autor

Erstellt von **Finn**.
