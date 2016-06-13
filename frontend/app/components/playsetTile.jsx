import React from 'react';

const PlaysetTile = ({ playset, onTileClick }) => (
    <div className="playset-tile" onClick={onTileClick}>
        <img src="http://placehold.it/100x75" />
    </div>
)

export default PlaysetTile;