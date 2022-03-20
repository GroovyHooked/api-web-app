import { combineReducers } from 'redux'
import reducer1  from './resident.reducer'
import reducer2  from './vehicles.reducer'
import reducer3  from './movies.reducer'

const reducers = combineReducers({
    resident: reducer1,
    wehicles: reducer2,
    movies: reducer3
})

export default reducers