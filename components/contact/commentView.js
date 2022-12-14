import styled from "styled-components"

const CommentViewContainer = styled.div`
    width: 16.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: var(--main-bg);
    border-radius: 20px;
    padding: 1rem;

    & .line {
        border-top: solid 2px rgba(85, 85, 85, 0.678);
    }
    @media only screen and (max-width:1024px){
        width: 35.5%;
    }
    @media only screen and (max-width:767px){
        width: 100%;
    }
`
const CommentViewHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const CommentViewCtx = styled.div`
    height: 200px;
    overflow: auto;
    text-overflow: ellipsis;

    & p {
        word-break: break-all;
    }
`
const CommentViewFooter = styled.div`
    display: inline-block;
    text-align: end;
    margin-left: auto;
    font-size: 0.825rem;
    padding: 0.5rem;
    background-color: var(--second-bg);
    cursor: pointer;

    &:hover {
        color: var(--main-color);
    }
`
const CommentView = ({item, ItemDelete}) => {
  return (
    <CommentViewContainer>
        <CommentViewHeader>
            <p>{item.data.user}</p>
            <p>{item.data.date}</p>
        </CommentViewHeader>
        <div className="line"></div>
        <CommentViewCtx>
            <p>{item.data.content}</p>
        </CommentViewCtx>
        <CommentViewFooter onClick={()=>{ItemDelete(item.id)}}>Delete</CommentViewFooter>
    </CommentViewContainer>
  )
}

export default CommentView