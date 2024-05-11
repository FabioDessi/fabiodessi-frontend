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

interface Block {
	title: string;
	content: string;
}

export interface AboutSection {
	title: {
		firstLine: string;
		secondLine: string;
	};
	intro: {
		title: string;
		content: string;
	};
	blocks: Block[];
}
