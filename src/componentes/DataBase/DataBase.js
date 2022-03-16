import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const DataBase = () => {

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const data = response.docs.map(doc=>doc.data())
            console.log('data', data);
        }
        getData()
    }, [])


  return (
    <div>
        

    </div>
  )
}