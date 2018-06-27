/////ACTION QUI PERMET D'ENVOYER UN ARTICLE DANS LE PANIER////////
export default function following(state=[], action) {
  if (action.type == 'follow') {
    var followingsCopy = [...state];
    followingsCopy.push({name: action.name, img: action.img, price: action.price, quantity: action.quantity});
    return followingsCopy;
  }
  ////////////////////////////////////////////////////////////////

  //////ACTION QUI PERMET DE SUPPRIMER UN ARTICLE DU PANIER///////
  else if (action.type == 'delete'){
    var followingsCopy = [...state];
    console.log("Action=> "+action.position);
    followingsCopy.splice(action.position, 1);
    console.log(followingsCopy);
    return followingsCopy;
  }
  ////////////////////////////////////////////////////////////////

  ////////ACTION QUI PERMET DE METTRE A JOUR LA QUANTITE//////////
  else if (action.type == 'increase') {
    var followingsCopy = [...state];
      followingsCopy[action.position].quantity = followingsCopy[action.position].quantity + 1;
      return followingsCopy;
  } else if(action.type == 'decrease') {
    var followingsCopy = [...state];
      followingsCopy[action.position].quantity = followingsCopy[action.position].quantity - 1;
      return followingsCopy
  }
//////////////////////////////////////////////////////////////////

////////////////SINON///////////////////////////////////////////////
  else {
    return state;
  }
}
