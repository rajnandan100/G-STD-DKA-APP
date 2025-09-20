
import { GoogleGenAI, Type } from "@google/genai";
import { Module } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const moduleSchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "A concise and engaging title for the learning module."
        },
        description: {
            type: Type.STRING,
            description: "A brief, one-sentence summary of what the module covers."
        }
    },
    required: ["title", "description"]
};

export const generateModules = async (topic: string, gradeLevel: string): Promise<Module[]> => {
    try {
        const prompt = `Generate 5 distinct, sequential learning modules for the topic "${topic}" suitable for a ${gradeLevel} student. Each module should build upon the previous one. Provide a title and a one-sentence description for each module.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: moduleSchema,
                },
            },
        });

        const jsonText = response.text.trim();
        const modules = JSON.parse(jsonText);
        
        if (!Array.isArray(modules) || modules.length === 0) {
            throw new Error("AI returned an invalid module format.");
        }
        
        return modules;

    } catch (error) {
        console.error("Error generating modules:", error);
        throw new Error("Failed to generate modules from the AI service.");
    }
};

export const generateModuleContent = async (moduleTitle: string, moduleDescription: string, gradeLevel: string): Promise<string> => {
    try {
        const prompt = `
        Generate comprehensive educational content for a learning module titled "${moduleTitle}".
        The module is described as: "${moduleDescription}".
        The target audience is ${gradeLevel} students.

        The content should be well-structured, clear, and engaging. 
        Use headings, bullet points, and clear explanations.
        Start with an introduction, then delve into the main concepts, and conclude with a brief summary.
        Format the output as plain text with markdown-like syntax for structure (e.g., use ## for headings, * for list items). Do not use actual markdown formatting like \`\`\`.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        
        return response.text.trim();

    } catch (error) {
        console.error("Error generating module content:", error);
        throw new Error("Failed to generate content from the AI service.");
    }
};
