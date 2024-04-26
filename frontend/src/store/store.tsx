import axios from 'axios'
import { atom } from 'recoil'

export const userTokenAtom = atom({
  key: "userTokenAtom",
  default: null
})

