const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export const AUTH_ENDPOINT = `${BACKEND_ENDPOINT}/auth`;
export const USER_ENDPOINT = `${BACKEND_ENDPOINT}/users`;
export const SPECTATOR_ENDPOINT = `${BACKEND_ENDPOINT}/spectators`;
export const BRANCH_ENDPOINT = `${BACKEND_ENDPOINT}/branchs`;
export const ARTICLE_ENDPOINT = `${BACKEND_ENDPOINT}/articles`;
export const DASHBOARD_ENDPOINT = `${BACKEND_ENDPOINT}/dashboards`;
export const NOTIFICATION_ENDPOINT = `${BACKEND_ENDPOINT}/notifications`;
export const BILL_ENDPOINT = `${BACKEND_ENDPOINT}/bills`;
export const EVENT_ENDPOINT = `${BACKEND_ENDPOINT}/events`;
export const PARTICIPANT_ENDPOINT = `${BACKEND_ENDPOINT}/participants`;
export const TRANSFER_ENDPOINT = `${BACKEND_ENDPOINT}/transfers`;
