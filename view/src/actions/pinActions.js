import { SET_STAFF } from './types'

export const setStaff = (staff) => {
    console.log(staff)
    return {
        type: SET_STAFF,
        staff
    }
}
