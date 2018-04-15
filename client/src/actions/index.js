export function PassAllGarageData(AllGarageData) {
    const action = {
        type: 'ALL_GARAGE_DATA',
        AllGarageData
    }
    return action;
}

export function PassAllCarData(AllCarData) {
    const action = {
        type: 'ALL_CAR_DATA',
        AllCarData
    }
    return action;
}

export function PassGarageData(GarageData) {
    const action = {
        type: 'GARAGE_DATA',
        GarageData
    }
    return action;
}

export function PassCarData(CarData) {
    const action = {
        type: 'CAR_DATA',
        CarData
    }

    return action;
}