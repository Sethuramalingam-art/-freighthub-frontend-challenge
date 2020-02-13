const shippmentReducer = (state= [], action) => {
    switch(action.type) {
        case 'FETCH_SHIPPMENT_DATA':
            state=[];
            return [...state,...action.data]
        
        case 'FETCH_SHIPPMENT_DETAIL_DATA' :
            return [state,action.data]
        
        case 'UPDATE_SHIPPENT_DATA' :
            return state
        default:
            return state
    }
}
export default shippmentReducer;