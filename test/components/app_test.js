import Index from '../../src/pages/index_page';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

describe('<Index />', () => {
    it('calls componentDidMount', () => {
        sinon.spy(Index.prototype, 'componentDidMount');
        const wrapper = mount(<Index />);
        expect(Index.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});
