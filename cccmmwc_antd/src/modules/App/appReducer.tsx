export default (appState: any, appAction: { type: any; payload: any; })=>{
    const {type, payload} = appAction;

    switch (type){
        case "LOADING":
        return {...appState, "loading":payload};
    }
}