import api from "./config.js";

export async function startGame() {
    return api.get(`/start`);
}

export async function getUserCard(sum_cards) {
    return api.get(`/get_card/${sum_cards}`);
}

export async function getDealerCard(sum_cards) {
    return api.get(`/get_dealercard/${sum_cards}`);
}

export async function getHint(sum_cards) {
    return api.get(`/get_hint/${sum_cards}`);
}

