import * as actionTypes from '../constants/actionTypes';
import * as mapStrings from '../constants/mapStrings';
import * as appStrings from '../constants/appStrings';
import * as mapConfig from '../constants/mapConfig';
import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '../reducers';
import { mapState, layerModel, paletteModel } from '../reducers/models/map';
import { asyncState } from '../reducers/models/async';
import { helpState } from '../reducers/models/help';
import { shareState } from '../reducers/models/share';
import { settingsState } from '../reducers/models/settings';
import { dateSliderState } from '../reducers/models/dateSlider';
import { analyticsState } from '../reducers/models/analytics';
import { viewState } from '../reducers/models/view';
import { layerInfoState } from '../reducers/models/layerInfo';

const initialState = {
    map: mapState,
    view: viewState,
    asyncronous: asyncState,
    help: helpState,
    settings: settingsState,
    share: shareState,
    dateSlider: dateSliderState,
    analytics: analyticsState,
    layerInfo: layerInfoState
};

// describe('Store - Layer Info', function() {
//     it('opens layer info.', function() {
//         const store = createStore(rootReducer, initialState);

//         const actions = [
// 			{ type: actionTypes.OPEN_LAYER_INFO, layer }
//         ];
//         actions.forEach(action => store.dispatch(action));

//         const actual = store.getState();
//         const expected = {
//             map: mapState,
//             view: viewState,
//             asyncronous: asyncState,
//             help: helpState,
//             settings: settingsState.set("isOpen", true),
//             layerInfo: layerInfoState
//         };

//         expect(actual.map.toJS()).to.deep.equal(expected.map.toJS());
//         expect(actual.view.toJS()).to.deep.equal(expected.view.toJS());
//         expect(actual.asyncronous.toJS()).to.deep.equal(expected.asyncronous.toJS());
//         expect(actual.help.toJS()).to.deep.equal(expected.help.toJS());
//         expect(actual.settings.toJS()).to.deep.equal(expected.settings.toJS());
//         expect(actual.layerInfo.toJS()).to.deep.equal(expected.layerInfo.toJS());
//     });
//     it('closes layer info.', function() {
//         const store = createStore(rootReducer, initialState);

//         const actions = [
//             { type: actionTypes.OPEN_LAYER_INFO, layer },
//             { type: actionTypes.CLOSE_LAYER_INFO }
//         ];
//         actions.forEach(action => store.dispatch(action));

//         const actual = store.getState();
//         const expected = {
//             map: mapState,
//             view: viewState,
//             asyncronous: asyncState,
//             help: helpState,
//             settings: settingsState.set("isOpen", false),
//             layerInfo: layerInfoState
//         };

//         expect(actual.map.toJS()).to.deep.equal(expected.map.toJS());
//         expect(actual.view.toJS()).to.deep.equal(expected.view.toJS());
//         expect(actual.asyncronous.toJS()).to.deep.equal(expected.asyncronous.toJS());
//         expect(actual.help.toJS()).to.deep.equal(expected.help.toJS());
//         expect(actual.settings.toJS()).to.deep.equal(expected.settings.toJS());
//         expect(actual.layerInfo.toJS()).to.deep.equal(expected.layerInfo.toJS());
//     });
// });