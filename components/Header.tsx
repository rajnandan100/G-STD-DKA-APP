
import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';

export const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center space-x-3">
                    <BookOpenIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Agrawal Academy
                    </h1>
                </div>
            </div>
        </header>
    );
};
