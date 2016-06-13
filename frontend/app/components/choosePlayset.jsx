import React from 'react';
import PlaysetList from './playsetList';

const ChoosePlayset = ({ playsets, onPlaysetClick, onCustomCreateClick }) => (
    <div>
        <h3>Choose a playset</h3>
        <PlaysetList playsets={playsets} />
        <h4>Or...</h4>
        <button>Create your own</button>
    </div>
);

export default ChoosePlayset;
