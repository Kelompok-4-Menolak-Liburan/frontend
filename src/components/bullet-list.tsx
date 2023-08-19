import React from 'react';

interface BulletListProps {
    items: string[];   
    style?: string;
}

const BulletList: React.FC<BulletListProps> = ({ items, style }) => {
    return (
        <ul className={`list-disc list-inside ${style}`}>
            {/* Mapping through the 'items' array and rendering a list item (<li>) for each item. */}
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default BulletList;
