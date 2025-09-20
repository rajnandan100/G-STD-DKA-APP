
import React from 'react';
import { Module } from '../types';

interface ModuleCardProps {
    module: Module;
    onSelect: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect }) => {
    return (
        <div 
            onClick={onSelect}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1"
        >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{module.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
        </div>
    );
};
