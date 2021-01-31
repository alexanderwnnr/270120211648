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
        super(props);
        this.state = {
            value: '',
            comments: [
                {name: 'Самуил', date: '13 октября 2011', message: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'},
                {name: 'Лилия Семёновна', date: '14 октября 2011', message: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'},
                {name: 'Лилия Семёновна', date: '14 октября 2011', message: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'}
            ]}
            
}
    handleKeyPress = (event) => {
    if(event.ctrlKey && event.key === 'Enter'){
        event.preventDefault()
        this.addItem()
    }
}

    addItem = (event) => {
    if(event) event.preventDefault()

    // attribute required for textarea doesnt work correct
    if(!/\S/.test(this.state.value)) return
    
    this.setState(state => {
    
    const dateRu = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).slice(0, -3)
    const newArr = [
        ...state.comments,
        state.value = {
            name: 'Аноним', 
            date: dateRu, 
            message: this.state.value
        }
    ]
        return {
            comments: newArr,
            value: ''
        }}, () => console.log(this.state.comments))
    }
      
    handleChange = (event) => {
        this.setState({ value: event.target.value })
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
                    {this.state.comments.map((item, index) => (
                        <Comment key={index} name={item.name} date={item.date} message={item.message}></Comment>
                    ))}
            </div>
            <form id="form" className="leftYourComment" onKeyPress={this.handleKeyPress.bind(this)} onSubmit={this.addItem.bind(this)} >               
                <textarea form="form" value={this.state.value} onChange={this.handleChange} className="textField" required={true}></textarea>
                <button>Написать консультанту</button>
            </form>         
        </div>
        );
    }
}

