
import React from 'react';
import { Module } from '../types';
import { ModuleCard } from './ModuleCard';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface ModuleSelectorProps {
    topic: string;
    gradeLevel: string;
    modules: Module[];
    onSelectModule: (module: Module) => void;
    onBack: () => void;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({ modules, onSelectModule, topic, gradeLevel, onBack }) => {
    return (
        <div className="animate-fade-in">
            <button onClick={onBack} className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-4">
                <ChevronLeftIcon className="h-4 w-4 mr-1" />
                Back to topic selection
            </button>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Learning Modules</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Showing modules for <span className="font-semibold text-indigo-500 dark:text-indigo-400">{topic}</span> at a <span className="font-semibold text-indigo-500 dark:text-indigo-400">{gradeLevel}</span> level.
            </p>
            <div className="space-y-4">
                {modules.map((module, index) => (
                    <ModuleCard key={index} module={module} onSelect={() => onSelectModule(module)} />
                ))}
            </div>
        </div>
    );
};
