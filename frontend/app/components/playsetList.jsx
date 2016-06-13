import React from 'react';
import PlaysetTile from './playsetTile';

const PlaysetList = ({ playsets, onPlaysetTileClick }) => (
    <div className="playset-list">
        { playsets.forEach(p => {
            <PlaysetTile key={ p.id } />
        })}
    </div>  
);

export default PlaysetList;