export default (state, action) =>{
    console.log(action); 
    return null; 
}

// make sure reducer watches for action select_library and returns selected id's piece of state 
//returns the payload instead of null 