import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (req) => {
	try {
		connectToDB();
		const response = await Prompt.find({}).populate('creator');

		return new Response(JSON.stringify(response), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch all prompts', { status: 500 });
	}
};
