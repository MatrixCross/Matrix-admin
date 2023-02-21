import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export async function getAIMessages(question: string) {
	const responce = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: question,
		temperature: 0.9,
		max_tokens: 150,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0.6,
		stop: [" Human:", " AI:"],
	});
	return responce.data.choices[0].text;
}
