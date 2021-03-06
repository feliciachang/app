import * as ActionTypes from "../actions/types";

export function giveLocation(state = {}, action) {
    switch (action.type) {
        case ActionTypes.PHONE_LOC: {
            return {
                phone: action,
                sensors: [[-119, 36], [-120, 37], [-118, 34]],
                route: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: [[-119, 36], [-120, 37]]
                            }
                        }
                    ]
                }
            };
        }
    }
    return state;
}
