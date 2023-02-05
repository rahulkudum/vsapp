import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Csub from "./comp/homepage/hsonglist";
import Book from "./comp/book/books";
import Bookmark from "./comp/bookmark/bookmarks";

import "@ionic/react/css/core.css";
import { setupIonicReact } from "@ionic/react";
import {
 IonProgressBar,
 IonCard,
 IonCardContent,
 IonNote,
 IonItem,
 IonItemDivider,
 IonLabel,
 IonRadioGroup,
 IonRadio,
 IonButton,
 IonButtons,
 IonToolbar,
} from "@ionic/react";
import "./styles.css";
import { Colour, Prog, Hindit, Bplay } from "./comp/global";
import logo from "./splash.jpg";

import { SplashScreen } from "@capacitor/splash-screen";
import { Plugins, Capacitor } from "@capacitor/core";
import { useLocal } from "./comp/lshooks";
import { StatusBar } from "@awesome-cordova-plugins/status-bar";
import Tsub from "./comp/SP/spsonglist";
import SB from "./comp/SB/sbsonglist";

setupIonicReact({
 mode: "md",
});

function App() {
 let history = useHistory();

 let prog = useContext(Prog);
 const [clr, setClr] = useContext(Colour);
 const [hindit, setHindi] = useContext(Hindit);
 const [iSettings, setSettings] = useLocal("isettings", "");
 const [bplay, setBplay] = useContext(Bplay);
 let color = "";
 if (clr) color = "#121212";
 let color2;
 if (clr) color2 = "#FFEB3B";
 else color2 = "#00CBFE";
 let color3;
 if (clr) color3 = "black";
 else color3 = "white";

 useEffect(() => {
  SplashScreen.hide();
  StatusBar.overlaysWebView(false);
  StatusBar.backgroundColorByHexString(`${clr ? "#ffc409" : "#3880ff"}`);
  clr ? StatusBar.styleDefault() : StatusBar.styleLightContent();
 }, []);

 useEffect(() => {
  if (Capacitor.isNative) {
   Plugins.App.addListener("backButton", (e) => {
    if (window.location.pathname === "/iskcon") {
     Plugins.App.exitApp();
    } else if (window.location.pathname.indexOf("iskcon/songs") !== -1) {
     setBplay({ fold: 0, song: 0 });
     history.goBack();
    } else {
     history.goBack();
    }
   });
  }
 }, []);

 if (prog.length < 21) {
  return (
   <div style={{ padding: "10px", fontFamily: "cursive", backgroundColor: "#00CBFE", minHeight: "100vh" }}>
    <img src={logo} style={{ width: "100%" }} alt="Gauranga if Radha & Krishna combined" />

    <IonCard style={{ fontSize: "100px" }}>
     <IonCardContent>
      <IonProgressBar color="primary" value={prog.length / 20}></IonProgressBar>
      <p style={{ color: "black", fontSize: "15px", fontFamily: "cursive" }}>Fetching the Vaisnava Songs and Books...</p>
      <p style={{ color: "black", fontSize: "15px" }}>Please wait and once it is done please watch the video tutorial in the side menu bar </p>
     </IonCardContent>
    </IonCard>

    <IonCard>
     <IonCardContent>
      <p style={{ fontFamily: "Arial", fontSize: "15px", color: "black" }}>
       This sound is above the material platform. It is directly from the spiritual platform. And there is no need of understanding the language. It is just
       like a thunderburst. Everyone can hear the sound of thunder-there is no misunderstanding. Similarly, these songs are above the material platform, and
       <b> they crack like thunder within your heart</b>
      </p>
      <IonItem lines="none">
       <IonNote slot="end">
        <h2> - Srila Prabhupada</h2>
       </IonNote>
      </IonItem>
     </IonCardContent>
    </IonCard>
   </div>
  );
 } else if (iSettings === "") {
  return (
   <div style={{ backgroundColor: `${color}`, minHeight: "100vh" }}>
    <IonToolbar className="ionhead" style={{ textAlign: "center" }} color={clr ? "warning" : "primary"}>
     <IonButtons>
      <IonLabel style={{ marginLeft: "10px", fontFamily: "Calibri", textAlign: "center" }}>
       {hindit ? "वैष्णव गीत ऐप में आपका स्वागत है" : "Welcome to the Vaishnava Songs App"}
      </IonLabel>
     </IonButtons>
    </IonToolbar>
    <div style={{ height: "58px" }}></div>
    <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
     <IonLabel style={{ fontFamily: "Calibri" }}>Language / भाषा</IonLabel>
    </IonItemDivider>
    <IonRadioGroup
     value={hindit}
     onIonChange={(e) => {
      setHindi(e.detail.value);
     }}
    >
     <IonItem color={clr}>
      <IonLabel style={{ fontFamily: "Calibri" }}>English (All Features)</IonLabel>
      <IonRadio slot="end" value="" />
     </IonItem>

     <IonItem color={clr}>
      <IonLabel style={{ fontFamily: "Calibri" }}>हिन्दी</IonLabel>
      <IonRadio slot="end" value="1" />
     </IonItem>
    </IonRadioGroup>
    <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
     <IonLabel style={{ fontFamily: "Calibri" }}>{hindit ? "थीम" : "Theme of the App"} </IonLabel>
    </IonItemDivider>
    <IonRadioGroup
     value={clr}
     onIonChange={(e) => {
      setClr(e.detail.value);
      StatusBar.backgroundColorByHexString(`${e.detail.value ? "#ffc409" : "#3880ff"}`);
      e.detail.value ? StatusBar.styleDefault() : StatusBar.styleLightContent();
     }}
    >
     <IonItem color={clr}>
      <IonLabel style={{ fontFamily: "Calibri" }}>{hindit ? "बलराम" : "Balarama"}</IonLabel>
      <IonRadio slot="end" value="" />
     </IonItem>

     <IonItem color={clr}>
      <IonLabel style={{ fontFamily: "Calibri" }}>{hindit ? "कृष्ण" : "Krishna"}</IonLabel>
      <IonRadio slot="end" value="dark" />
     </IonItem>
    </IonRadioGroup>
    <p style={{ fontSize: "12px", margin: 0, padding: "20px", color: `${clr ? "white" : "black"}` }}>
     {hindit ? "आप सेटिंग में कभी भी ऐप की भाषा और थीम बदल सकते हैं" : "You can always change the Language and Theme of the App in the Settings"}
    </p>
    <IonCard color={clr}>
     <IonCardContent style={{ fontFamily: "Calibri", color: `${clr ? "white" : "black"}` }}>
      {hindit ? (
       <>
        <p> इस ऐप में कई विशेषताएं हैं जैसे:</p>
        <ul style={{ paddingLeft: "20px" }}>
         <li>150 से अधिक गीतों ऑडियो के साथ हैं</li>
         <li>एक ही गीत के लिए कई भक्तों के ऑडियो</li>
         <li>मंदिर आरती गीत वर्गीकरण</li>
         <li>गानों के लिए दो अलग-अलग दृश्य</li>
         <li>हमेशा जाग स्क्रीन हैं और गाना डाउनलोड किया जा सकता है</li>
         <li>ऑटो प्ले गाने विकल्प के साथ बुकमार्क</li>
         <li>फ़ॉन्ट-आकार, भाषा, थीम, दृश्य सेटिंग</li>
         <li>विज्ञापन मुक्त ऐप और ऑफ़लाइन काम करता है</li>
         <li>और बहुत सारे...</li>
        </ul>
        <p>
         लेकिन हमने देखा है कि अधिकांश भक्तों को यह नहीं पता था कि ऐप में ये सुविधाएं मौजूद हैं। इसलिए, हम सभी भक्तों से अनुरोध करते हैं कि वे जो भी "बटन/आइकन"
         देखते हैं, उस पर क्लिक करने का प्रयास करें क्योंकि उनमें से प्रत्येक उपरोक्त सुविधाओं में से एक को प्रकट करेगा
        </p>
        <p>आप वीडियो ट्यूटोरियल को साइड मेन्यू बार में भी देख सकते हैं</p>
       </>
      ) : (
       <>
        <p>This app has so many features like:</p>

        <ul style={{ paddingLeft: "20px" }}>
         <li>More than 200 songs having audios and word to word meanings</li>
         <li>Classification according to Alphabetical, Authors, Temple Songs, Ashtakams</li>
         <li>Advanced search from Title, Verses and Translations</li>
         <br />
         <li>Word to word meanings for most of the songs</li>
         <li>Audios of many devotees for a single song</li>
         <li>Two different views for the songs</li>
         <li>Always awake screen, Download songs (offline playing)</li>
         <br />
         <li>Many song books of our Acharyas with more than 1000 songs</li>
         <li>Audio Recordings of songs sung by Srila Prabhupada</li>
         <li>Prayers from Srimad Bhagavatam</li>
         <br />
         <li>Bookmarks with auto looping through songs option</li>
         <li>Font-size, font-type, language, theme, view settings</li>
         <li>No adds and works offline</li>
         <li>And many more...</li>
        </ul>

        <p>
         But we have seen that most of the devotees were not knowing that these features exist in the app. So, we request all the devotees to please try
         clicking on whatever "Button/Icon" they see because each of them will reveal one of the above features
        </p>
        <p>You can also watch the video tutorial in the side menu bar</p>
       </>
      )}
     </IonCardContent>
    </IonCard>
    <br />
    <div style={{ textAlign: "center" }}>
     <IonButton
      onClick={() => {
       setSettings("done");
      }}
      shape="round"
      color={!clr ? "primary" : "warning"}
     >
      {hindit ? "चलिए शुरू करते हैं" : "Let's Start"}
     </IonButton>
     <div style={{ height: "20px" }}></div>
    </div>
   </div>
  );
 } else {
  return (
   <div style={{ backgroundColor: `${color}`, minHeight: "100vh" }}>
    <Switch>
     <Route exact path="/">
      <Redirect to="/iskcon" />
     </Route>
     <Route path="/iskcon">
      <Csub className="nav" />
     </Route>

     <Route path="/topics">
      <Book />
     </Route>
     <Route path="/sp">
      <Tsub />
     </Route>
     <Route path="/sb">
      <SB />
     </Route>

     <Route path="/bookmarks">
      <Bookmark />
     </Route>
    </Switch>
   </div>
  );
 }
}

export default App;
