
import React from 'react';
import { Module } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface ContentViewProps {
    module: Module;
    content: string;
    onBack: () => void;
}

// A simple parser to format the text content
const FormattedContent: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    return (
        <div className="space-y-4">
            {lines.map((line, index) => {
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-semibold mt-6 mb-2 border-b pb-2 border-gray-200 dark:border-gray-700">{line.substring(3)}</h2>;
                }
                if (line.startsWith('* ')) {
                    return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
                }
                return <p key={index}>{line}</p>;
            })}
        </div>
    );
};


export const ContentView: React.FC<ContentViewProps> = ({ module, content, onBack }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <button onClick={onBack} className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-6">
                <ChevronLeftIcon className="h-4 w-4 mr-1" />
                Back to modules
            </button>
            
            <article className="prose dark:prose-invert max-w-none prose-h1:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{module.title}</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 italic mb-8">{module.description}</p>
                <FormattedContent text={content} />
            </article>
        </div>
    );
};
