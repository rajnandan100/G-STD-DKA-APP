
import React from 'react';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                The AI is thinking...
            </p>
            <p className="text-gray-500 dark:text-gray-400">
                Generating your custom learning experience.
            </p>
        </div>
    );
};
