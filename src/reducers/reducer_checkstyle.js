/* flow */

import Immutable from 'immutable';

export default function(_state = [], action){

    switch(action.type) {
    case 'STYLE_PROPS': {
        const style_pros = Immutable.List(action.payload.data);
        const result = style_pros.map(style_props => {
            const unaltered = Immutable.Map(style_props);
            const altered   = unaltered.set('key', style_props.id);
            return altered.toJS();
        });
        return result.toJS();
    }
    default: {
        const result = Immutable.List([
            { title: 'Error in reducer', key: 1 },
            { title: 'Error in reducer', key: 2 },
            { title: 'Error in reducer', key: 3 },
            { title: 'Error in reducer', key: 4 }
        ]);
        return result.toJS();
    }}
}
