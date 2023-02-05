import React, { useContext, useEffect, useState } from "react";
import { Colour, FontType, Tsize, BookMark, Aos } from "../global";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ScrollToTop from "../scroll";
import { IonCard, IonCardContent, IonToolbar, IonButton, IonButtons, IonLabel, IonAlert, IonToast } from "@ionic/react";

import { ArrowBackSharp } from "@mui/icons-material";
import { Downloader } from "@ionic-native/downloader";
import { Insomnia } from "@awesome-cordova-plugins/insomnia";
import { motion } from "framer-motion";
import { BookmarkAdd, Download } from "@mui/icons-material";

export default function Tsong(props) {
 let [tiskcon, settiskcon] = props.value;
 let { ind } = useParams();
 let nind = Number(ind);
 let fun = tiskcon.scontent.slice(tiskcon.songs[nind].sindex, tiskcon.songs[nind].lindex);
 let vtext = fun.split(/\r\n|\n/);
 let history = useHistory();
 let inputs2 = [];
 const [bookMark, dispatch2] = useContext(BookMark);
 const [showAlert3, setShowAlert3] = useState(false);
 const [tsize, setTsize] = useContext(Tsize);
 const [showAlert4, setShowAlert4] = useState(false);
 let { path, url } = useRouteMatch();
 const [showToast, setShowToast] = useState(false);
 const [toastText, setToastText] = useState();
 let dlink = tiskcon.songs[nind].link;

 let downloadLink =
  "https://drive.google.com/u/0/uc?id=" + dlink.slice(dlink.lastIndexOf("/", dlink.lastIndexOf("/") - 1) + 1, dlink.lastIndexOf("/")) + "&export=download";
 const [aos, setAos] = useContext(Aos);
 useEffect(() => {
  if (aos === "true") {
   Insomnia.keepAwake()
   return () => {
    Insomnia.allowSleepAgain()
   };
  }
 }, []);
 let [clr, setClr] = useContext(Colour);
 let color;
 if (clr) color = "#181818";
 else color = "#00CBFE";
 let color2;
 if (clr) color2 = "";
 else color2 = "#04010f";
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";

 useEffect(() => {
  if (!navigator.onLine) {
   setToastText("You are currently offline, to get audio please turn on your internet connection and come back again");
   setShowToast(true);
  }
 }, []);

 bookMark.map((ele) => {
  inputs2.push({
   name: ele.name,
   type: "radio",
   label: ele.name ?? "Default",
   value: ele.name,
  });
 });
 inputs2.push({
  name: "New Bookmark",
  type: "radio",
  label: "New Bookmark",
  value: "New Bookmark",
 });
 function addtobookmark(folder) {
  let name = tiskcon.songs[nind].name;

  let check = false;
  bookMark.map((dele) => {
   if (dele.name === folder) {
    dele.songs.map((ele) => {
     if (ele.name === name) {
      check = true;
      setToastText("Song is already bookmark");
      setShowToast(true);
     }
    });
   }
  });
  if (!check) {
   dispatch2({ type: "add", folder: folder, name: name, path: url });

   setToastText("Added to the Bookmark");
   setShowToast(true);
  }
 }

 var request = {
  uri: downloadLink,
  title: tiskcon.songs[nind].name,
  description: "",
  mimeType: "",
  visibleInDownloadsUi: true,
  notificationVisibility: 0,
  destinationInExternalPublicDir: {
   dirType: "Music",
   subPath: "Vaishnava Songs/" + tiskcon.songs[nind].name + ".mp3", //Path within the external directory, including the destination filename
  },
  headers: [{ header: "Authorization", value: "Bearer iaksjfd89aklfdlkasdjf" }],
 };

 function download() {
  if (tiskcon.songs[nind].offline) {
   setToastText("Song is already Downloaded");
   setShowToast(true);
  } else {
   setToastText("Downloading started");
   setShowToast(true);

   Downloader.download(request)
    .then((location) => {
     setShowToast(false);
     setToastText("File downloaded, please check in Music Folder/Vaishnava Songs folder");
     setShowToast(true);
     let diskcon = { ...tiskcon };
     diskcon.songs[nind].offline = true;
     settiskcon(diskcon);
    })
    .catch((err) => {
     setShowToast(false);
     setToastText("Error occured while downloading, try again later");
     setShowToast(true);
    });
  }
 }

 return (
  <div>
   <ScrollToTop />
   <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
    <IonButtons slot="start" onClick={() => history.goBack()}>
     <IonButton>
      <ArrowBackSharp />
     </IonButton>
    </IonButtons>
    <IonLabel style={{ fontFamily: `${fon}` }}>{tiskcon.songs[nind].name}</IonLabel>
    <IonButtons slot="end">
     <IonButton
      onClick={() => {
       setShowAlert3(true);
      }}
     >
      <BookmarkAdd />
     </IonButton>
     <IonButton onClick={download}>
      <Download />
     </IonButton>
    </IonButtons>
   </IonToolbar>

   <motion.div
    exit={{
     opacity: 0,
    }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ type: "linear", duration: 1 }}
   >
    <div style={{ height: "56px" }}></div>
    <div style={{ width: "98%", textAlign: "center" }}>
     {navigator.onLine ? <iframe src={tiskcon.songs[nind].link} style={{ width: "100%", height: "55px" }}></iframe> : null}
    </div>

    <p style={{ marginTop: 0, borderTop: 0, marginBottom: 0, borderBottom: 0, backgroundColor: `${color}`, padding: "4px 0 2px 0" }}>
     <IonCard color={clr} style={{ color: `${color2}`, fontFamily: `${fon}` }}>
      <IonCardContent>
       <p style={{ lineHeight: "0.5" }}>
        {vtext.map((td, i) => {
         let k = 0,
          j = td.length;
         for (let i in td) {
          if (td[i] === " ") k++;
          else break;
         }

         for (let i in td) {
          if (td[td.length - 1 - i] === " ") j--;
          else break;
         }

         td = td.slice(k, j);

         if (i === 0)
          return (
           <div>
            <p style={{ textAlign: "center", fontSize: `${tsize}px` }}>{td}</p>
            <br />
           </div>
          );

         if (td[0] === "." && td[1] === ".") return <p style={{ textAlign: "center", fontSize: `${tsize}px` }}>{td}</p>;
         if (i === vtext.length - 1) return null;
         if (td[0] === "[" && vtext[i - 1] === "[") return null;
         if (td[0] === "[" && vtext[i - 1] !== "[")
          return (
           <div>
            <br />
            <br />
           </div>
          );

         if (td[0] === "6" || td[0] === "7") return null;
         if (td === "Purport by His Divine Grace")
          return (
           <div>
            <br />
            <p style={{ fontSize: `${tsize}px`, textAlign: "justify" }}>Purport by His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda</p>
            <br />
           </div>
          );
         if (td === "A.C. Bhaktivedanta Swami Prabhupāda") return null;
         if (td === "Hare Kṛṣṇa, Hare Kṛṣṇa, Kṛṣṇa Kṛṣṇa, Hare Hare")
          return (
           <div>
            <br />
            <p style={{ textAlign: "center", fontSize: `${tsize}px` }}>Hare Kṛṣṇa, Hare Kṛṣṇa, Kṛṣṇa Kṛṣṇa, Hare Hare</p>
           </div>
          );
         if (td === "Hare Rāma, Hare Rāma, Rāma Rāma, Hare Hare")
          return (
           <div>
            <p style={{ textAlign: "center", fontSize: `${tsize}px` }}>Hare Rāma, Hare Rāma, Rāma Rāma, Hare Hare</p>
            <br />
           </div>
          );

         if ((td[0] >= "*" && td[0] <= "`") || td[0] === "Ś" || td[0] === '"' || td[0] === "“") {
          return (
           <div>
            <br />
            <p style={{ fontSize: `${tsize}px`, textAlign: "justify" }}>{td}</p>
            <br />
           </div>
          );
         } else return <p style={{ textAlign: "center", fontSize: `${tsize}px` }}>{td}</p>;
        })}
       </p>
      </IonCardContent>
     </IonCard>
    </p>

    <IonAlert
     isOpen={showAlert3}
     onDidDismiss={() => setShowAlert3(false)}
     cssClass="my-custom-class"
     header={"Select a Bookmark folder"}
     inputs={inputs2}
     buttons={[
      {
       text: "Cancel",
       role: "cancel",
       cssClass: "secondary",
       handler: () => {},
      },
      {
       text: "Ok",
       handler: (res) => {
        if (res === "New Bookmark") {
         setShowAlert4(true);
        } else {
         addtobookmark(res);
        }
       },
      },
     ]}
    />

    <IonAlert
     isOpen={showAlert4}
     onDidDismiss={() => setShowAlert4(false)}
     cssClass="my-custom-class"
     header={"New Bookmark folder"}
     inputs={[{ name: "newmark", type: "text", placeholder: "New Bookmark" }]}
     buttons={[
      {
       text: "Cancel",
       role: "cancel",
       cssClass: "secondary",
       handler: () => {},
      },
      {
       text: "Ok",
       handler: (res) => {
        addtobookmark(res.newmark);
       },
      },
     ]}
    />
    <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastText} duration={2000} />
   </motion.div>
  </div>
 );
}
