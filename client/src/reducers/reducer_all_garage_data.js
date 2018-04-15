export default (state = [], action) => {
    switch (action.type) {
        case 'ALL_GARAGE_DATA':
            const { AllGarageData } = action;
            return AllGarageData;
        default:
            return state;
    }
}