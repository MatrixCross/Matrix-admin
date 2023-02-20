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
