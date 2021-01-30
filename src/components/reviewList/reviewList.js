import React, { Component } from 'react'
import './reviewList.css'

export default class ReviewList extends Component {
    constructor(props) {
        super(props)
            this.state = {
                count: 0
            }
        }

    render() {
        return (
        <div className="reviewList">
            <div className="listHeader"></div>
            <div className="commentList">
                <div className="comment"></div>
                <div className="comment"></div>
                <div className="comment"></div>
            </div>
            <div className="leftYourComment">
                <textarea className="textField"></textarea>
                <button>Написать консультанту</button>
            </div>
        </div>
        );
    }
}