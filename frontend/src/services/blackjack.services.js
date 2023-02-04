import api from "./config.js";

export async function startGame() {
    return api.get(`/start`);
}

export async function getCard(sum_cards) {
    return api.get(`/get_card/${sum_cards}`);
}

export async function getHint(sum_cards) {
    return api.get(`/get_hint/${sum_cards}`);
}