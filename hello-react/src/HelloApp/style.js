import styled from 'styled-components'


export const ContainerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin:50px;


Fragment {
    font-family: 'PT Sans', sans-serif;
}

.btn-secondary {
    width: 100%;
}

.form {
    width:100%;
}

.wrapContent {
    width: 100%;
    border-radius: 5px;
    margin-top: 30px;
    border: 1px solid #fafafa !important;
    box-shadow: 0 0 7px 0 rgb(166, 166, 166);
    padding-bottom:30px;
}

.image-box {
    text-align:center;
}

.imgAvartar {
    width: 70%;

}

.imageFollower {
    width: 20%;
    margin-right: 10px;
}

.avatarRow {
    margin-top: 20px;
}

p {
    display: inline;
}

.repoRow {
    align-items: baseline;
    margin-top: 10px;
    margin-bottom: 20px;
}

.follower-name{
    &:focus, &:hover, &:active {
       color: #0056b3;
       cursor: pointer;
      }
}

`


