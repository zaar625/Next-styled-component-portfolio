import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CardStyle } from '../../styles/GlobalStyle';
import { FiSend } from "react-icons/fi";
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
`
const CommentWriteUser = styled.div`
  width: 17%;

  & > label{
    position:absolute;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  & > input {
    height: 55px;
  }

  @media only screen and (max-width:767px){
    width: 100%;
  }
`
const CommentWriteComment = styled.div`
  width: 42%;

  & > label{
    position:absolute;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  & > textarea {
    height: 55px;
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
  height: 30ox;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .active {
    background-color: var(--main-bg);
    color: var(--txt-color);
    font-weight: 600;
  }
`
const ContactComment = () => {
  const input = useRef();
  const date = new Date();
  const databaseRef = collection(database,'comment');
  let pages = 1; //페이지 생성 변수
  const limit = 5; //페이지당 최대 게시물 갯수
  let range = [];

  const [userData, setUserData] = useState([]);
  const [dataShow, setDataShow] = useState([]);//페이지당 보여질 데이터
  const [currPage, setCurrPage] = useState(0);//페이지 상태변화에 따른 UI 변화
  const [blogItem, setBlogItem] = useState({
    user:'',
    content:'',
    date:`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
    time:date.getTime(),
  });

  //해당 페이지에 보일 아이템
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
  // 인풋 상태변화 함수
  const onChange = (e) => {
    const {value, name} = e.target;
    setBlogItem({
      ...blogItem,
      [name]: value
    });
  }
  //파이어베이스 업로드 함수
  const Upload = () => {
    if(blogItem.user === ''){
      alert('유저 이름을 작성해주세요');
      return false;
    }
    if(blogItem.content === ''){
      alert('내용을 작성해주세요.');
      return false
    }
    if(blogItem !== ''){
      // Add a new document ]
      addDoc(databaseRef,blogItem).then(()=> alert('내용이 업로드 되었습니다.')).catch((err)=>{
        alert('업로드에 실패하였습니다.');
      })
    }
  }

  //게시글 삭제 함수
  const ItemDelete = (id) => {
    let fieldToEdit = doc(database, 'comment', id)
    if(window.confirm('해당 게시물을 삭제하시겠습니까?')){
      deleteDoc(fieldToEdit).then(()=>{
        alert('해당 게시글이 삭제되었습니다.');
        window.location.replace('/contact');
      })
    }
  }

  //마운트 되면 파이어베이스 데이터 받아오기.
  useEffect(()=>{
   const PostData = async()=> {
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
   }
   PostData();
  },[])

  return (
    <CommentContainer cardstyle={CardStyle}>
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
        <Button onClick={Upload}><FiSend/></Button>
      </CommentWrite>
      <CommentShow>
        {
          //유저 게시글 가져오기
          dataShow.map((item, index) => (
            <CommentView item={item} key={item.id} index={item.id} ItemDelete = {ItemDelete}/>
          ))
        }
      </CommentShow>
      <CommentPageNav>
        {
          pages >= 1 ? 
            range.map((item, index) =>(
              <PagesNum className={`${currPage === index ? 'active': ''}`} onClick={()=>selectPage(index)}>{item + 1}</PagesNum>
            )) : null
        }
      </CommentPageNav>
    </CommentContainer>
  )
}

export default ContactComment


