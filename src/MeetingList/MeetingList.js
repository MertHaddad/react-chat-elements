import React, { Component } from 'react';
import './MeetingList.css';

import MeetingItem from '../MeetingItem/MeetingItem';

const classNames = require('classnames');

export class MeetingList extends Component {

    onClick(item, i, e) {
        if (this.props.onClick instanceof Function)
            this.props.onClick(item, i, e);
    }

    onContextMenu(item, i, e) {
        e.preventDefault();
        if (this.props.onContextMenu instanceof Function)
            this.props.onContextMenu(item, i, e);
    }

    onAvatarError(item, i, e) {
        if (this.props.onAvatarError instanceof Function)
            this.props.onAvatarError(item, i, e);
    }

    onMeetingClick(item, i, e) {
        if (this.props.onMeetingClick instanceof Function)
            this.props.onMeetingClick(item, i, e);
    }

    onShareClick(item, i, e) {
        if (this.props.onShareClick instanceof Function)
            this.props.onShareClick(item, i, e);
    }

    render() {
        return (
            <div
                ref={this.props.cmpRef}
                className={classNames('rce-container-mtlist', this.props.className)}>
                {
                    this.props.dataSource.map((x, i) => (
                        <MeetingItem
                            id={x.id || i}
                            key={i}
                            lazyLoadingImage={this.props.lazyLoadingImage}
                            {...x}
                            onAvatarError={(e) => this.onAvatarError(x,i,e)}
                            onContextMenu={(e) => this.onContextMenu(x,i,e)}
                            onClick={() => this.onClick(x, i)}
                            onMeetingClick={() => this.onMeetingClick(x, i)}
                            onShareClick={() => this.onShareClick(x, i)}/>
                    ))
                }
            </div>
        );
    }
}

MeetingList.defaultProps = {
    dataSource: [],
    onClick: null,
    lazyLoadingImage: undefined,
};

export default MeetingList;
