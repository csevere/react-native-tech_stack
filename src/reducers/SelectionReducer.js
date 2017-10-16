export default (state = null, action) =>{
    console.log(action); 
    switch(action.type){
        case 'select_library':
            return action.payload;
    default:
        return state; 
   }
}

//default case covers scenario in which you don't get select_library action to return the default state

//makes sense since this is the selection reducer 

//don't return undefined, just return null

// make sure reducer watches for action select_library and returns selected id's piece of state 
//returns the payload instead of null

// export default (state, action) =>{
//     console.log(action); 
//     return null; 
// }

//every reducer is gonna have a swtich statement, switch over the action's type
