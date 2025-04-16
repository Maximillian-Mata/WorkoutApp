// src/routes/+layout.ts
import type { LayoutLoad } from './$types';
import { csvParse } from 'd3-dsv';
import { redirect } from '@sveltejs/kit';
export const load: LayoutLoad = async ({ fetch, url }) => {

	if(url.pathname !== '/' && typeof window === 'undefined'){
		throw redirect(307, '/');
	}


	const res = await fetch('/Exercises.csv');
	const text = await res.text();

	const parsed = csvParse(text, (d: any) => ({
		...d,
		value: d.value ? +d.value : undefined // cast column if needed
	}));

	return {
		csvData: parsed
	};
};
