import {types } from '../type/types'

export const authReducer = (state = {}, action)  => {
    swithc (action.type){
        case types.login :
        return {
            ...action.payload,
            logged:true
        }
        
        case types.logout:
        return {
            logged:false
        }

        default:
            return state;

    }
} 