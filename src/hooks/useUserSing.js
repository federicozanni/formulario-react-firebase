import { useEffect, useState } from "react";
import { db } from "../components/Firebase";


export const useUserSing = () => {

  const [links, setLinks] = useState([]);

  
  const [currentId, setCurrentId] = useState("");


  const getLinks = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };


  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await db.collection("links").doc(id).delete();
      
    }
  };


  useEffect(() => {
    getLinks();
  }, []);


  const addOrEditLink = async (linkObject) => {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        setCurrentId("");
      }
  };

  return {
    links,
    currentId,
    setCurrentId,
    onDeleteLink,
    addOrEditLink,
  }

}