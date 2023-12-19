export interface WorkExperience {
	role: string;
	company: string;
	type: string;
	startDateMonth: string;
	startDateYear: string;
	endDateMonth?: string;
	endDateYear?: string;
	stillOpen: boolean;
	description: string;
}
