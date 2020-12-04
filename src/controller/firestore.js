
import { firebase, db } from './firebase-config';

// Colección en firestore
const collectionOrders = () => db.collection('Orders');

// Agregar docs a la colección Orders
const addOrder = (data) => {
    collectionOrders().add(data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
};


//Obtener docs de la colección Orders
const getOrders = (orderStatus, callback) =>{
  collectionOrders().where('orderStatus','==', orderStatus).onSnapshot((query)=>{
    const docs = [];
    query.forEach((order)=>{
      docs.push({...order.data(), id:order.id});
    });
    console.log(docs);
    callback(docs);
  });
};


export default {
    addOrder,
    getOrders,
}
