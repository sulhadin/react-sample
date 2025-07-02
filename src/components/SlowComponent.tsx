import React from 'react';
import { useSuspensedQuery } from './hooks/useSuspensedQuery';

interface SlowComponentProps {
    text?: string;
    delay?: number;
}

const SlowComponent: React.FC<SlowComponentProps> = ({ text = 'Default Text' }) => {
    const { data } = useSuspensedQuery({
        queryFn: async () => {
            return text;
        },
        key: text,
    });

    return (
        <div className="slow-component">
            <h2>{data}</h2>
        </div>
    );
};

export default SlowComponent;