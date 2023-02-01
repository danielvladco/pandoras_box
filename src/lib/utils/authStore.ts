import {writable} from "svelte/store";

export let accessToken = writable(localStorage.getItem("accessToken"))
accessToken.subscribe(val => val && localStorage.setItem("accessToken", val))

export let refreshToken = writable(localStorage.getItem("refreshToken"))
refreshToken.subscribe(val => val && localStorage.setItem("refreshToken", val))