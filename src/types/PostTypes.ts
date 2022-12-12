export interface IPost {
	id?: string;
	username: string;
	date: number;
	content: string;
	img: {
		deleteHash: string;
		link: string;
	};
}

export interface IFeedPost {
	id: string,
	username: string;
	avatar: string;
	postImage: string;
	content: string;
	isLove: boolean;
}

export interface IWhitList {
	id: string;
	img: string;
}
