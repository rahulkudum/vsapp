import React, { useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonNote } from "@ionic/react";

import { Colour, FontType, IskconContent, SearchBook } from "../../global";

function AstakamFilter() {
 let history = useHistory();
 let { path, url } = useRouteMatch();
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 const [clr, setClr] = useContext(Colour);

 return (
  <div>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Samsara Davanala Lidha Loka_Songs%20of%20Vaishnava%20Acaryas_0_18`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Guruvastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Visvanatha Cakravarti Thakura
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Ceto Darpana Marjanam_Songs%20of%20Vaishnava%20Acaryas_0_20`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Shikshastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Lord Sri Caitanya Mahaprabhu
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Krsnotkirtana Gana Nartana_Songs%20of%20Vaishnava%20Acaryas_0_19`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Shad Goswami-astakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Srinivasa Acarya
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Gangeya Campeya_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Vrndadevi-astakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Visvanatha Cakravarti Thakura
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Huhunkara Garjanadi Aho_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Advaitastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Sarvabhauma Bhattacarya
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Sarac Candra Bhrantim_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Nityanandastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Prabodhananda Sarasvati
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Nava Gaura Varam_More%20Songs%20of%20the%20Vaisnava%20Acaryas_34`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Sacisutastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Sarvabhauma Bhattacarya
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Ujjvala Varana_More%20Songs%20of%20the%20Vaisnava%20Acaryas_47`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Sacitanayastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Sarvabhauma Bhattacarya
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Ambudanjanendra Nila_More%20Songs%20of%20the%20Vaisnava%20Acaryas_2`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Krsishna Candrastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Krsnadasa Kaviraja Goswami
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Kunkumakta Kancanabja_More%20Songs%20of%20the%20Vaisnava%20Acaryas_29`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Radhikastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Krsnadasa Kaviraja Goswami
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Krsna Prema Mayi Radha_More%20Songs%20of%20the%20Vaisnava%20Acaryas_28`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Yugalastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Jiva Goswami
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Kadacit Kalindi Tata Vipina_Songs%20of%20Vaishnava%20Acaryas_3_6`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Jagannathastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Adi Sankaracarya
    </IonNote>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Namamisvaram Saccidananda Rupam_Songs%20of%20Vaishnava%20Acaryas_3_5`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Damodarastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Satyavrata Muni
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Adharam Madhuram_More%20Songs%20of%20the%20Vaisnava%20Acaryas_0`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Madhurastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Sri Vallabhacarya
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Vraje Prasiddham Navanita_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Corastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Bilvamangala Thakura
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Nava Nirada Nindita_More Songs of the Vaisnava Acaryas_35`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Vrajaraja Sutastakam</IonLabel>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Munindra Vrnda Vandite_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Radha Krpa Kataksha Stava Raja</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Lord Siva
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Madhuram Madhurebhyo ‘Pi_More%20Songs%20of%20the%20Vaisnava%20Acaryas_31`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Kevalastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Nilakanta Goswami
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Bhratur Antakasya Pattane_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Yamunastakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Visvanatha Cakravarti Thakura
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Nija Pati Bhuja_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Govardhana Vasa Prarthana Dasakam</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Ragunatha Dasa Goswami
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Devi Suresvari Bhagavati Gange_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Ganga Stotram</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Adi Sankaracarya
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Pralaya Payodhi Jale_Songs%20of%20Vaishnava%20Acaryas_3_1`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Dasavatara Stotra</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     Jayadeva Goswami
    </IonNote>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`/topics/Stavamrita%20Lahari`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Stavamrita Lahari</IonLabel>
    <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
     VCT (Book of Ashtakams)
    </IonNote>
   </IonItem>
  </div>
 );
}

export default AstakamFilter;
