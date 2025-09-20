
import React from 'react';
import { GRADE_LEVELS } from '../constants';
import { SparklesIcon } from './icons/SparklesIcon';

interface TopicSelectorProps {
    topic: string;
    setTopic: (topic: string) => void;
    gradeLevel: string;
    setGradeLevel: (level: string) => void;
    onSubmit: () => void;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
    topic,
    setTopic,
    gradeLevel,
    setGradeLevel,
    onSubmit
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };
    
    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Create a new course</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">What do you want to learn about today?</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Topic
                    </label>
                    <input
                        id="topic"
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Photosynthesis"
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                </div>
                
                <div>
                    <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Grade Level
                    </label>
                    <select
                        id="gradeLevel"
                        value={gradeLevel}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    >
                        {GRADE_LEVELS.map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
                
                <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-transform transform hover:scale-105"
                >
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Generate Learning Modules
                </button>
            </form>
        </div>
    );
};
