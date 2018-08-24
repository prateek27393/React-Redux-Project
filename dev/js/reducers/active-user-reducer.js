export default function(state=null, action){
    switch(action.type){
        case 'USER_SELECTED':
            //console.log("original");
            return action.payload;
            break;
    }
    return state;
}

/* export function test(state=null, action){
    switch(action.type){
        case 'USER_SELECTED':
            //console.log("Bingo");
            return action.payload;
            break;
    }
    return state; */
//}