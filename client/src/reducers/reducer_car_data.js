export default (state = [], action) => {
    switch (action.type) {
        case 'CAR_DATA':
            const { CarData } = action;
            return CarData;
        default:
            return state;
    }
}