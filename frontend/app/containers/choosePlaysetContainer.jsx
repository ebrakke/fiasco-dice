import React from 'react';
import ChoosePlayset from '../components/choosePlayset';

export default class ChoosePlaysetContainer extends React.Component {
    render() {
        return (
            <ChoosePlayset playsets={[{id: 123}]}/>
        );
    }
}