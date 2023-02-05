import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import { Colour, FontType, Tsize, View, Aos, Controls, Hindit, Bplay, Repeat } from "../global";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
 IonLabel,
 IonToolbar,
 IonButton,
 IonButtons,
 IonItem,
 IonRadioGroup,
 IonRadio,
 IonItemDivider,
 IonSegment,
 IonSegmentButton,
 IonCheckbox,
} from "@ionic/react";
import { ArrowBackSharp, QueueMusicSharp, MenuBookSharp } from "@mui/icons-material";
import ScrollToTop from "../scroll";
import { AutoStoriesSharp, PlayLessonSharp } from "@mui/icons-material";
import { StatusBar } from "@awesome-cordova-plugins/status-bar";
import SP from "../../sp.png";
function Settings() {
 const useStyles = makeStyles({
  slider: {
   margin: "10px 10px 10px 10px",

   width: "95%",
  },
 });
 const classes = useStyles();
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";

 const [tsize, setTize] = useContext(Tsize);
 let history = useHistory();

 const handleSliderChange = (event, newValue) => {
  setTize(newValue);
 };
 const [view, setView] = useContext(View);
 const [clr, setClr] = useContext(Colour);
 const [aos, setAos] = useContext(Aos);
 const [controls, setControls] = useContext(Controls);
 const [repeat, setRepeat] = useContext(Repeat);
 const [hindit, setHindi] = useContext(Hindit);

 let color2;
 if (clr) color2 = "#FFEB3B";
 else color2 = "#00CBFE";
 let color3;
 if (clr) color3 = "black";
 else color3 = "white";

 return (
  <div>
   <ScrollToTop />
   <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
    <IonButtons slot="start" onClick={() => history.goBack()}>
     <IonButton>
      <ArrowBackSharp />
     </IonButton>
    </IonButtons>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "सेटिंग" : "Settings"}</IonLabel>
   </IonToolbar>
   <div style={{ height: "60px" }}></div>
   <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "फ़ॉन्ट आकार" : "Font Size of the Songs"}</IonLabel>
   </IonItemDivider>
   <div style={{ width: "99%", margin: 0, padding: 0 }}>
    <Slider
     className={classes.slider}
     value={tsize}
     onChange={handleSliderChange}
     aria-labelledby="continuous-slider"
     min={8}
     max={32}
     valueLabelDisplay="on"
    />
   </div>

   <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Language / भाषा</IonLabel>
   </IonItemDivider>
   <IonRadioGroup
    value={hindit}
    onIonChange={(e) => {
     setHindi(e.detail.value);
     if (view === "3") setView("1");
    }}
   >
    <IonItem color={clr}>
     <IonLabel style={{ fontFamily: `${fon}` }}>English</IonLabel>
     <IonRadio slot="end" value="" />
    </IonItem>

    <IonItem color={clr}>
     <IonLabel style={{ fontFamily: `${fon}` }}>हिन्दी</IonLabel>
     <IonRadio slot="end" value="1" />
    </IonItem>
   </IonRadioGroup>
   <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "थीम" : "Theme of the App"} </IonLabel>
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
     <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "बलराम" : "Balarama"}</IonLabel>
     <IonRadio slot="end" value="" />
    </IonItem>

    <IonItem color={clr}>
     <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "कृष्ण" : "Krishna"}</IonLabel>
     <IonRadio slot="end" value="dark" />
    </IonItem>
   </IonRadioGroup>

   <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "गाने के लिए डिफ़ॉल्ट व्यू" : "Default View for the Songs"}</IonLabel>
   </IonItemDivider>
   <IonRadioGroup value={view} onIonChange={(e) => setView(e.detail.value)}>
    <IonItem color={clr}>
     <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "प्रत्येक गद्य के बाद अनुवाद" : "Translation after each verse"}</IonLabel>
     <IonRadio slot="end" value="1" />
    </IonItem>

    <IonItem color={clr}>
     <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "गीत के बाद अनुवाद" : "Translation after the song"}</IonLabel>
     <IonRadio slot="end" value="2" />
    </IonItem>

    {hindit ? null : (
     <IonItem color={clr}>
      <IonLabel style={{ fontFamily: `${fon}` }}>Word to Word Meanings</IonLabel>
      <IonRadio slot="end" value="3" />
     </IonItem>
    )}
   </IonRadioGroup>
   {hindit ? null : (
    <>
     <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
      <IonLabel style={{ fontFamily: `${fon}` }}>Font Type of the App</IonLabel>
     </IonItemDivider>

     <IonRadioGroup value={font} onIonChange={(e) => setFont(e.detail.value)}>
      <IonItem color={clr}>
       <IonLabel style={{ fontFamily: `${fon}` }}>General Font</IonLabel>
       <IonRadio slot="end" value="" />
      </IonItem>

      <IonItem color={clr}>
       <IonLabel style={{ fontFamily: `${fon}` }}>Vedabase Font</IonLabel>
       <IonRadio slot="end" value="ved" />
      </IonItem>
     </IonRadioGroup>
    </>
   )}

   <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}` }}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "अन्य सेटिंग" : "Other Settings"}</IonLabel>
   </IonItemDivider>
   <IonItem color={clr}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "गाने के स्क्रीन को खुला रखें" : "Keep the song screen awake"}</IonLabel>
    <IonCheckbox checked={aos !== "false"} onIonChange={(e) => setAos(e.detail.checked ? "true" : "false")} />
   </IonItem>
   <IonItem color={clr}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "सर्कुलर म्यूजिक कंट्रोल" : "Circular music controls"}</IonLabel>
    <IonCheckbox checked={controls !== "false"} onIonChange={(e) => setControls(e.detail.checked ? "true" : "false")} />
   </IonItem>
   <IonItem color={clr}>
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "ऑडियो दोहराएं" : "Repeat the audio"}</IonLabel>
    <IonCheckbox checked={repeat !== "no"} onIonChange={(e) => setRepeat(e.detail.checked ? "yes" : "no")} />
   </IonItem>

   <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
    <IonSegment value="default">
     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/iskcon")}>
      <QueueMusicSharp />
     </IonSegmentButton>
     {!hindit ? (
      <>
       <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/topics")}>
        <MenuBookSharp />
       </IonSegmentButton>
       <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/sp")}>
        <img src={SP} style={{ height: "40px" }} />
       </IonSegmentButton>
       <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/sb")}>
        <AutoStoriesSharp />
       </IonSegmentButton>
      </>
     ) : null}

     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/bookmarks")}>
      <PlayLessonSharp />
     </IonSegmentButton>
    </IonSegment>
   </IonToolbar>
  </div>
 );
}

export default Settings;
