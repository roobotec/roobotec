describe('generateChatResponse', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.resetModules();
  });

  it('trims the API key and uses the correct Gemini request format', async () => {
    process.env.REACT_APP_GEMINI_API_KEY = '   test-api-key-123   ';
    process.env.REACT_APP_GEMINI_MODEL = 'gemini-2.0-flash';

    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: 'Hello! We provide AI automation and software development.' }] } }]
      })
    });
    global.fetch = fetchMock;

    const { generateChatResponse } = require('./geminiService');
    const reply = await generateChatResponse([{ sender: 'user', text: 'Hello, what services do you provide?' }]);

    expect(reply).toBe('Hello! We provide AI automation and software development.');
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=test-api-key-123');

    const body = JSON.parse(options.body);
    expect(body.systemInstruction).toBeDefined();
    expect(body.system_instruction).toBeUndefined();
  });
});
