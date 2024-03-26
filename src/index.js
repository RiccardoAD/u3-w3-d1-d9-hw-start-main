import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



//  task u3-w3-d1
// Implementa il pattern Redux nell'applicazione, 
// con uno store e un reducer.
// Fornisci all'utente la capacità di aggiungere 
// un'azienda ad un elenco di preferiti. Non 
// c'è limite al numero di aziende che possono essere aggiunte 
// tra i preferiti. Questo elenco di preferiti deve essere
//  salvato interamente nel Redux Store, e renderizzato sotto forma
//   di lista in una pagina separata (es. su una rotta /favourites).
// Non dimenticare che anche la lista renderizzata 
// su /favourites deve avere il nome dell'azienda 
// cliccabile come nella pagina principale.
// [EXTRA] Permetti all'utente anche di rimuovere un'azienda dalla lista dei preferiti.



// u3-w3-d2
// TASKS: (continua da dove sei arrivato precedentemente)
// Riscrivi i tuoi action creator come abbiamo fatto in classe, scrivendoli 
// in un file separato. Sostituisci
//  ogni proprietà type scritta come semplice stringa con una costante.
// Crea due diversi reducer: uno continuerà a memorizzare i preferiti,
//  mentre l'altro sarà riservato ad ospitare l'array dei risultati derivante 
//  dalla ricerca.
// Per riempire questa porzione del Redux Store, muovi l'operazione di fetch 
// dentro un action creator "speciale" come abbiamo fatto questa mattina, in
//  modo da dispatchare l'azione contenente i risultati solamente al termine 
//  dell'operazione asincrona.
// Mantieni intatto il resto delle funzionalità, e se non l'hai ancora fatto,
//  fornisci all'utente la capacità di rimuovere un'azienda dalla lista dei preferiti.