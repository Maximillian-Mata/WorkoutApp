// src/lib/stores/json.ts
import { writable } from 'svelte/store';

export type JsonRow = {
	Name: string;
	Category: string;
};

// Create an empty store to hold an array of JSON rows
export const jsonStore = writable<JsonRow[]>([]);

export const DayName = writable<string>();

export const Categories = writable<string[]>([]);