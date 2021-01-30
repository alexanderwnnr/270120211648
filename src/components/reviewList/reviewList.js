import React, { Component } from 'react'
import './reviewList.css'

const Comment = (props) => {
    const {name, date, message} = props
    return (
    <div className="commentContainer">
        <div className="userInfo">
            <div className="userName">{name}</div>
            <div className="messageDate">{date}</div>
        </div>
        <div className="userMessage">{message}</div>
    </div>
    )
}

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
            <div className="listHeader">
                <div className="lastReview">Последние отзывы</div>
                <div className="showAll">Все отзывы</div>
                <div className="stat">
                    <img src="/images/like.svg" className="likeIcon" alt="like" />
                    <div className="likeNum">131</div>
                    <img src="/images/comment.svg" className="commentIcon" alt="comment" />
                    <div className="commentNum">14</div>
                </div>
            </div>
            <div className="commentList">
                <Comment name={"Самуил"} date={"13 октября 2011"} message={"Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"}/>
                <Comment name={"Лилия Семёновна"} date={"14 октября 2011"} message={"Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"}/>
                <Comment name={"Лилия Семёновна"} date={"14 октября 2011"} message={"Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"}/>    
            </div>
            <div className="leftYourComment">
                <textarea className="textField"></textarea>
                <button>Написать консультанту</button>
            </div>
        </div>
        );
    }
}

