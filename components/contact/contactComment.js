import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CardStyle } from '../../styles/GlobalStyle';
import { BiSend } from "react-icons/bi";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { database } from '../../firebaseConfig';
import CommentView from './commentView';


const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${(props) =>
    props.cardstyle}
`
const CommentHeader = styled.div`
  color: var(--main-color);

  & > div {
    margin-top: 20px;
    border-bottom: solid 2px rgba(85, 85, 85, 0.678);
    width: 100%;
  }
`
const CommentWrite = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width:1024px){
        justify-content: center;
    }
`
const CommentWriteUser = styled.div`
  width: 16.5%;

  & > label{
    position:absolute;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  & > input {
    width: 100%;
    font-size: 0.825rem;
    padding: 1.2rem;
    color: gray;
    background-color: var(--main-bg);
    outline: none;
    border: none;
    border-radius: 8px;
    height: 55px;

    &:focus {
        border: solid 1px var(--main-color);
    }
  }

  @media only screen and (max-width:767px){
    width: 100%;
  }
`
const CommentWriteComment = styled.div`
  width: 41.5%;

  & > label{
    position:absolute;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  & > textarea {
    height: 55px;
    width: 100%;
    font-size: 0.825rem;
    padding: 1.2rem;
    color: gray;
    background-color: var(--main-bg);
    outline: none;
    border: none;
    border-radius: 8px;
    height: 55px;
    font-family: initial;

    &:focus {
        border: solid 1px var(--main-color);
    }
  }

  @media only screen and (max-width:767px){
    width: 100%;
  }
`
const Button = styled.button`
  & svg {
    font-size: 2.5rem;

    &:hover {
      color: var(--main-color);
    }
  }
`
const CommentShow = styled.div`
  display: flex;
  gap: 1rem;
  flex-flow:wrap;

  @media only screen and (max-width:1024px){
        justify-content: center;
    }
`
const CommentPageNav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
`
const PagesNum= styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    background-color: var(--main-bg);
    color: var(--txt-color);
    font-weight: 600;
  }
`
const ContactComment = () => {
  const input = useRef();
  const date = new Date();
  const databaseRef = collection(database,'comment');
  let pages = 1; //????????? ?????? ??????
  const limit = 5; //???????????? ?????? ????????? ??????
  let range = [];

  const [userData, setUserData] = useState([]);
  const [dataShow, setDataShow] = useState([]);//???????????? ????????? ?????????
  const [currPage, setCurrPage] = useState(0);//????????? ??????????????? ?????? UI ??????
  const [blogItem, setBlogItem] = useState({
    user:'',
    content:'',
    date:`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
    time:date.getTime(),
  });

  //?????? ???????????? ?????? ?????????
  const selectPage = page => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(userData.slice(start,end));
    setCurrPage(page);
  }
  if(limit !== undefined){
    let page = Math.floor(userData.length / Number(limit))
    pages = userData.length % Number(limit) === 0 ? page : page + 1;
    range=[...Array(pages).keys()];
  }
  // ?????? ???????????? ??????
  const onChange = (e) => {
    const {value, name} = e.target;
    setBlogItem({
      ...blogItem,
      [name]: value
    });
  }
  //?????????????????? ????????? ??????
  const Upload = () => {
    if(blogItem.user === ''){
      alert('?????? ????????? ??????????????????');
      return false;
    }
    if(blogItem.content === ''){
      alert('????????? ??????????????????.');
      return false
    }
    if(blogItem !== ''){
      // Add a new document ]
      addDoc(databaseRef,blogItem).then(()=> {
        alert('????????? ????????? ???????????????.'); 
        window.location.replace('/contact');})
        .catch((err)=>{
        alert('???????????? ?????????????????????.');
      })
    }
  }

  //????????? ?????? ??????
  const ItemDelete = (id) => {
    let fieldToEdit = doc(database, 'comment', id)
    if(window.confirm('?????? ???????????? ?????????????????????????')){
      deleteDoc(fieldToEdit).then(()=>{
        alert('?????? ???????????? ?????????????????????.');
        window.location.replace('/contact');
      })
    }
  }
  //????????? ???????????? ??????
  const PostGetData = async()=> {
    let postData = [];
    const fireData = await getDocs(databaseRef)
    fireData.forEach((doc)=> {
      let dataSetting = {
        data:doc.data(),
        id: doc.id
      }
      postData.push(dataSetting);
    })
    postData.sort((a, b) => a.data.time < b.data.time ? 1 : (a.data.time > b.data.time ? -1 : 0))
    setUserData(postData);
    setDataShow(postData.slice(0, Number(limit)));
   }
  //????????? ?????? ?????????????????? ????????? ????????????.
  useEffect(()=>{
   PostGetData();
  },[])

  return (
    <CommentContainer 
      cardstyle={CardStyle}
      as={motion.div} 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 , delay: .5}}
      >
      <CommentHeader>
        <h3>Comment</h3>
        <div></div>
      </CommentHeader>
      <CommentWrite>
        <CommentWriteUser>
          <input ref={input} name='user' onChange={onChange} type="text" placeholder='User name'/>
          <label>title</label>
        </CommentWriteUser>
        <CommentWriteComment>
          <textarea name='content' type='text' onChange={onChange} placeholder="write your comment"/>
          <label>comment</label>
        </CommentWriteComment>
        <Button onClick={Upload}><BiSend/></Button>
      </CommentWrite>
      <CommentShow>
        {
          //?????? ????????? ????????????
          dataShow.map((item) => (
            <CommentView item={item} key={item.id} index={item.id} ItemDelete = {ItemDelete}/>
          ))
        }
      </CommentShow>
      <CommentPageNav>
        {
          pages >= 1 ? 
            range.map((item, index) =>(
              <PagesNum key={index} className={`${currPage === index ? 'active': ''}`} onClick={()=>selectPage(index)}>{item + 1}</PagesNum>
            )) : null
        }
      </CommentPageNav>
    </CommentContainer>
  )
}

export default ContactComment


