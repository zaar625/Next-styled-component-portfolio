import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CardStyle } from '../../styles/GlobalStyle';
import { FiSend } from "react-icons/fi";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from '../../firebaseConfig';

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
const ContactComment = ({data}) => {
  console.log(data)
  const input = useRef();
  const date = new Date();
  const databaseRef = collection(database,'comment');

  const [userDate, setUserData] = useState([]);
  const [blogItem, setBlogItem] = useState({
    user:'',
    content:'',
    date:`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
    time:date.getTime(),
  });
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

  // useEffect(()=>{
  //   getDocs(databaseRef).then((res)=>{
  //     res.forEach((doc)=> console.log(doc.data()))
  //   })
  // },[])

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
      <CommentShow></CommentShow>
    </CommentContainer>
  )
}

export default ContactComment

export async function getServerSideProps(){

  const databaseRef = collection(database,'comment');
  await databaseRef.get().then((doc)=> {
    const data = []
    data.push(doc)
  })
  // res.forEach((doc)=>{
  //   data.push(doc.data());
  // })
  return {
      props: {
         data
      },
  }
}

