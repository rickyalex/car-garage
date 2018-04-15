export default (state = [], action) => {
    switch (action.type) {
        case 'ALL_CAR_DATA':
            const { AllCarData } = action;
            return AllCarData;
        default:
            return state;
    }
}