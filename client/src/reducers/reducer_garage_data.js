export default (state = [], action) => {
    switch (action.type) {
        case 'GARAGE_DATA':
            const { GarageData } = action;
            return GarageData;
        default:
            return state;
    }
}