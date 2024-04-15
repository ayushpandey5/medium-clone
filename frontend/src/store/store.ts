import { atom, selector } from "recoil";
import axios from "axios";
import {userAtomType} from '../utils/types'

const userAtom = (user: userAtomType) => atom({
    key: "userAtom",
    default: selector({
        key: "userAtomSelector",
        get: async() => {
            const payLoad = {email: user.email, password: user.password}
            const res = await axios.post("https://medium-backend.ayushpandey-dev.workers.dev/signin",payLoad)
            return res.data
        }
    })
})