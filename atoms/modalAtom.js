import { atom } from 'recoil'

export const modalState = atom({
    key: "madalState",
    default: false,
});

export const postIdState = atom({
    key: "postIdState",
    default: "",
});