import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScrollToTop from "../scroll";
import { IonLabel, IonToolbar, IonButton, IonButtons, IonItem, IonNote, IonCard, IonCardContent, IonItemDivider } from "@ionic/react";
import { ArrowBackSharp } from "@mui/icons-material";
import { useHistory } from "react-router";
import { Colour, FontType, Hindit } from "../global";

export default function About() {
 let history = useHistory();
 const [clr, setClr] = useContext(Colour);
 let color = "";
 if (clr) color = "white";
 let color2;
 if (clr) color2 = "";
 else color2 = "#04010f";
 let color3;
 if (clr) color3 = "yellow";
 let color4;
 if (clr) color4 = "#121212";
 let color5;
 if (clr) color5 = "#FFEB3B";
 else color5 = "#00CBFE";
 let color6;
 if (clr) color6 = "black";
 else color6 = "white";

 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 const useStyles = makeStyles({
  root: {
   flexGrow: 1,
   maxWidth: 400,
   color: `${color}`,
  },
 });
 const [hindit, setHindi] = useContext(Hindit);

 return (
  <div style={{ padding: "10px", backgroundColor: `${color4}`, textAlign: "justify", textJustify: "auto" }}>
   <ScrollToTop />
   <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
    <IonButtons slot="start" onClick={() => history.goBack()}>
     <IonButton>
      <ArrowBackSharp />
     </IonButton>
    </IonButtons>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "ऐप के बारे मे" : "About"}</IonLabel>
   </IonToolbar>
   <div style={{ height: "56px" }}></div>
   {hindit ? (
    <>
     <p style={{ color: `${color}`, textAlign: "center" }}>यह ऐप हमारे सबसे प्रिय श्रील प्रभुपाद को समर्पित है</p>
     <br />
     <p style={{ color: `${color}` }}>
      यदि सभी भक्त इस प्रकार इस पुस्तक (एप) की सराहना करते हैं, तो मुझे वह अकारण दया प्राप्त होगी जो भगवान मुझ पर बरसाएंगे। अरे भाइयों! और इन सभी वैष्णवों की
      दया से, मैं सर्वोच्च भगवान श्री कृष्ण की भक्ति प्राप्त करूंगा।
     </p>
     <p style={{ color: `${color}`, fontFamily: `${fon}` }} align="right">
      - कल्याणकल्पतरु
     </p>
     <p style={{ color: `${color}` }}>
      इस्कॉन डिज़ायर ट्री ({" "}
      <a style={{ color: `${color3}` }} href="https://donate.iskcondesiretree.com">
       इस्कॉन डिज़ायर ट्री को दान करें
      </a>{" "}
      ) के बिना यह ऐप संभव नहीं होगा क्योंकि सभी ऑडियो वहां से लिए गए हैं। गीतों के सभी हिंदी अनुवाद वैष्णव गीत हिंदी इस्कॉन ऐप से लिए गए हैं
     </p>
     <div style={{ color: `${color}`, textAlign: "left" }}>
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
     </div>
    </>
   ) : (
    <>
     <IonCard color={clr} style={{ color: `${color2}` }}>
      <IonCardContent>
       <p style={{ fontFamily: `${fon}`, fontSize: "16px" }}>
        This sound is above the material platform. It is directly from the spiritual platform. And there is no need of understanding the language. It is just
        like a thunderburst. Everyone can hear the sound of thunder-there is no misunderstanding. Similarly, these songs are above the material platform, and{" "}
        <b>they crack like thunder within your heart</b>
       </p>
       <IonItem color={clr} lines="none">
        <IonNote style={{ fontFamily: `${fon}` }} slot="end">
         <h2 style={{ color: `${color}` }}> - Srila Prabhupada</h2>
        </IonNote>
       </IonItem>
      </IonCardContent>
     </IonCard>
     <p style={{ color: `${color}`, fontFamily: `${fon}` }}>
      This App is dedicated to our most beloved Srila Prabhupada on the Most Auspicious Day of his Disappearance (18th Nov 2020)
     </p>
     <p style={{ color: `${color}`, fontFamily: `${fon}` }} align="center">
      grantha-dwārā baiṣṇaba-janera kṛpā pāi
      <br />
      baiṣṇaba-kṛpāya kṛṣṇa-lābha hoya bhāi
     </p>

     <p style={{ color: `${color}`, fontFamily: `${fon}` }}>
      If all the devotees thus appreciate this book (app), then I will receive the causeless mercy that they will shower upon me. Oh brothers! And by the mercy
      of all these Vaisnavas, I will attain devotion to the Supreme Lord Sri Kṛṣṇa.
     </p>

     <p style={{ color: `${color}`, fontFamily: `${fon}` }} align="right">
      - Kalyanakalpataru
     </p>
     <IonItemDivider style={{ backgroundColor: `${color5}`, color: `${color6}` }}>
      <IonLabel style={{ fontFamily: `${fon}` }}>Acknowledgements</IonLabel>
     </IonItemDivider>
     <p style={{ textAlign: "center", color: `${color}`, fontFamily: `${fon}` }}>All Glories to Srila Prabhupada!</p>
     <p style={{ color: `${color}`, fontFamily: `${fon}` }}>
      Firstly I express my gratitude and humble obeisances to HG Amala Mahaprabhu Prabhu and ARJUNA group without whose compassion I would have never become a
      devotee and also to devotees of KGP VOICE and also to all the devotees who always tried to inspire me in the path of Krishna Consciousness
     </p>
     <p style={{ color: `${color}`, fontFamily: `${fon}` }}>
      This app wouldn't be possible without ISKCON Desire Tree ({" "}
      <a style={{ color: `${color3}` }} href="https://donate.iskcondesiretree.com">
       Donate to ISKCON Desire Tree
      </a>{" "}
      ) as all the audios and most of the song books are taken from there and I would also like to show my gratitude to the devotees who painstakingly complied
      and translated our Acaryas works and also, I would like to express my gratitude to all the devotees who gave me feedback on how to improve this app
     </p>
     <p style={{ color: `${color}`, fontFamily: `${fon}` }}>
      Finally, I would like to express my gratitude to my sister who voluntarily took pain for putting the audio links and arranging the content so that my code
      can recognize them and also, I would like to show gratitude to my parents who are kind enough to support me in practicing my Krishna consciousness and I
      would request all the devotees to please bless them so that they advance very quickly in Krishna Consciousness
     </p>
     <IonItemDivider style={{ backgroundColor: `${color5}`, color: `${color6}` }}>
      <IonLabel style={{ fontFamily: `${fon}` }}>Features of the App</IonLabel>
     </IonItemDivider>
     <div style={{ color: `${color}`, textAlign: "left" }}>
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
       But we have seen that most of the devotees were not knowing that these features exist in the app. So, we request all the devotees to please try clicking
       on whatever "Button/Icon" they see because each of them will reveal one of the above features
      </p>
      <p>You can also watch the video tutorial in the side menu bar</p>
     </div>
    </>
   )}
  </div>
 );
}
