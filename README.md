# TRACCIA:
Scrivere un programma che chieda all'utente:
  - Il numero di chilometri da percorrere
  - Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - va applicato uno sconto del 20% per i minorenni
  - va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.


# SVOLGIMENTO
- Creo un input per i chilometri
- Creo un select per l'età del passeggero
- Creo un button (che al click genererà il prezzo)
- Creo un const per l'input, per il select e per il button
- Calcolo il prezzo base
- Creo una condizione nella quale:

      -se il passeggero è minorenne stampo il prezzo con lo sconto del 20%

      -altrimenti se il passeggero è over 65 stampo il prezzo con lo sconto del 40%

      -altrimenti stampo il prezzo base

