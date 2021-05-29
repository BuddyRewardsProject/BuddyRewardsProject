import { SET_STAFF } from './types'

export const setStaff = (staff) => {
    return {
        type: SET_STAFF,
        staff
    }
}
