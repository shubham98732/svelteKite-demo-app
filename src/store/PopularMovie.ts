import { writable } from 'svelte/store';

const dbItemsStore = writable([{}]);

export default dbItemsStore;
